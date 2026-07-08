import React, { useState, useEffect } from "react";
import {
  Shield,
  Terminal,
  AlertCircle,
  Info,
  Activity,
  Zap,
  Cpu,
  RotateCcw,
} from "lucide-react";

type ViolationMode = "shutdown" | "restrict" | "protect";
type MacType = "sticky" | "static";

const PortSecurity: React.FC = () => {
  // --- CONFIGURATION STATE ---
  const [interfaceName, setInterfaceName] = useState("GigabitEthernet0/1");
  const [maxMacs, setMaxMacs] = useState<number>(2);
  const [violationMode, setViolationMode] = useState<ViolationMode>("shutdown");
  const [macType, setMacType] = useState<MacType>("sticky");

  // --- LIVE SIMULATION STATE ---
  const [learnedMacs, setLearnedMacs] = useState<string[]>([]);
  const [portStatus, setPortStatus] = useState<"up/up" | "err-disabled">(
    "up/up",
  );
  const [violationCount, setViolationCount] = useState<number>(0);
  const [recoveryTimer, setRecoveryTimer] = useState<number>(0);

  // --- AUTO-RECOVERY TIMER LOGIC ---
  useEffect(() => {
    if (recoveryTimer > 0) {
      const timer = setTimeout(
        () => setRecoveryTimer((prev) => prev - 1),
        1000,
      );
      return () => clearTimeout(timer);
    } else if (recoveryTimer === 0 && portStatus === "err-disabled") {
      // Timer hit 0: Perform Auto-Recovery
      setPortStatus("up/up");
      setLearnedMacs([]); // The CAM table clears when the port resets
      setViolationCount(0);
    }
  }, [recoveryTimer, portStatus]);

  // --- ACTION HANDLERS ---
  const generateRandomMac = () => {
    const randomHex = () =>
      Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, "0")
        .toUpperCase();
    return `0050.56${randomHex()}.${randomHex()}${randomHex()}`;
  };

  const handleInjectDevice = () => {
    if (portStatus === "err-disabled") return;

    if (learnedMacs.length < maxMacs) {
      // Safe: Switch learns the MAC
      setLearnedMacs([...learnedMacs, generateRandomMac()]);
    } else {
      // Violation Triggered!
      if (violationMode === "shutdown") {
        setPortStatus("err-disabled");
        setRecoveryTimer(15); // Setting to 15s for quick testing, usually 30s+
      } else if (violationMode === "restrict") {
        setViolationCount((prev) => prev + 1);
      }
      // "Protect" does nothing visibly here; it just drops the frame silently
    }
  };

  const handleManualRecovery = () => {
    setPortStatus("up/up");
    setRecoveryTimer(0);
    setLearnedMacs([]);
    setViolationCount(0);
  };

  // --- CLI GENERATOR ---
  const generateCLI = () => {
    let commands = `interface ${interfaceName}\n`;
    commands += ` switchport mode access\n`;
    commands += ` switchport port-security\n`;
    commands += ` switchport port-security maximum ${maxMacs}\n`;
    commands += ` switchport port-security violation ${violationMode}\n`;
    commands += ` switchport port-security mac-address ${macType}\n`;
    if (violationMode === "shutdown") {
      commands += `!\n! Auto-recovery config (Global)\n`;
      commands += `errdisable recovery cause psecure-violation\n`;
      commands += `errdisable recovery interval 30`;
    }
    return commands;
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-slate-900 rounded-xl border border-slate-800 text-slate-300 shadow-xl font-sans">
      <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
        <Shield className="h-8 w-8 text-indigo-400" />
        <h2 className="text-2xl font-bold text-slate-100">
          Live Port Security Simulator
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT COLUMN: Configuration */}
        <div className="space-y-6">
          <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700/50">
            <h3 className="text-lg font-medium text-slate-200 mb-4 flex items-center gap-2">
              <Activity className="h-5 w-5 text-slate-400" />
              Interface Configuration
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">
                  Maximum Allowed MACs
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={maxMacs}
                  onChange={(e) => {
                    setMaxMacs(Number(e.target.value));
                    setLearnedMacs([]); // Reset simulator on config change
                  }}
                  className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-1">
                  Violation Mode
                </label>
                <select
                  value={violationMode}
                  onChange={(e) => {
                    setViolationMode(e.target.value as ViolationMode);
                    setLearnedMacs([]);
                    setPortStatus("up/up");
                  }}
                  className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                >
                  <option value="shutdown">Shutdown (Err-Disable)</option>
                  <option value="restrict">Restrict (Drop + Log)</option>
                  <option value="protect">Protect (Drop Only)</option>
                </select>
              </div>
            </div>
          </div>

          {/* CLI Output Box */}
          <div className="bg-black rounded-lg border border-slate-700 overflow-hidden">
            <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex items-center gap-2">
              <Terminal className="h-4 w-4 text-slate-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Generated Configuration
              </span>
            </div>
            <pre className="p-4 text-sm text-green-400 font-mono overflow-x-auto whitespace-pre-wrap">
              {generateCLI()}
            </pre>
          </div>
        </div>

        {/* RIGHT COLUMN: Live Simulator */}
        <div className="space-y-6">
          <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700/50">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-slate-200 flex items-center gap-2">
                <Cpu className="h-5 w-5 text-indigo-400" />
                Live Switch Port
              </h3>

              {/* Port Status Badge */}
              <div
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
                  portStatus === "up/up"
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}
              >
                {portStatus === "err-disabled" && (
                  <AlertCircle className="h-3 w-3" />
                )}
                Status: {portStatus}
              </div>
            </div>

            {/* Recovery Timer Alert */}
            {recoveryTimer > 0 && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-md flex justify-between items-center text-red-400 text-sm">
                <span className="flex items-center gap-2">
                  <RotateCcw className="h-4 w-4 animate-spin" />
                  Err-disabled. Auto-recovering in {recoveryTimer}s...
                </span>
                <button
                  onClick={handleManualRecovery}
                  className="px-2 py-1 bg-red-500/20 hover:bg-red-500/40 rounded transition-colors"
                >
                  Manual Reset
                </button>
              </div>
            )}

            {/* Inject Action */}
            <button
              onClick={handleInjectDevice}
              disabled={portStatus === "err-disabled"}
              className="w-full mb-6 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed rounded-md font-medium text-white transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <Zap className="h-4 w-4" />
              Plug in New Device (Send Frame)
            </button>

            {/* Visual CAM Table */}
            <div className="bg-slate-950 rounded-md border border-slate-700 overflow-hidden">
              <div className="px-4 py-2 bg-slate-900 border-b border-slate-700 flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-400 uppercase">
                  Secure MAC Address Table
                </span>
                <span className="text-xs text-slate-500">
                  {learnedMacs.length} / {maxMacs} Used
                </span>
              </div>

              <div className="p-2 space-y-1 min-h-[120px]">
                {learnedMacs.length === 0 ? (
                  <div className="text-slate-600 text-sm text-center py-8 italic">
                    No MAC addresses learned yet.
                  </div>
                ) : (
                  learnedMacs.map((mac, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 bg-slate-800/50 rounded border border-slate-700 font-mono text-sm text-slate-300 flex justify-between"
                    >
                      <span>{mac}</span>
                      <span className="text-indigo-400 text-xs">VLAN 1</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-slate-900 p-3 rounded-md border border-slate-700">
                <span className="block text-xs text-slate-500 uppercase">
                  Security Violation Count
                </span>
                <span className="text-xl font-bold text-amber-400">
                  {violationCount}
                </span>
              </div>
              <div className="bg-slate-900 p-3 rounded-md border border-slate-700">
                <span className="block text-xs text-slate-500 uppercase">
                  Last Source MAC
                </span>
                <span className="text-sm font-mono text-slate-400 mt-1 block">
                  {learnedMacs.length > 0
                    ? learnedMacs[learnedMacs.length - 1]
                    : "----.----.----"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortSecurity;
