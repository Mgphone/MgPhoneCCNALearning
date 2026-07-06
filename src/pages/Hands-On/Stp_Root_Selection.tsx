import { Plus, Shield, Trash2, Trophy } from "lucide-react";
import React, { useMemo, useState } from "react";

type Props = {};
interface SwitchNode {
  id: string;
  name: string;
  priority: number;
  mac: string;
}

const Stp_Root_Selection: React.FC<Props> = () => {
  // Default Spanning Tree priorities (multiples of 4096)
  const priorities = Array.from({ length: 16 }, (_, i) => i * 4096);

  const generateRandomMac = (): string => {
    return Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, "0"),
    ).join(":");
  };

  const generateRandomPriority = (): number => {
    // Common STP priorities (multiples of 4096)
    const priorities = Array.from({ length: 16 }, (_, i) => i * 4096);
    return priorities[Math.floor(Math.random() * priorities.length)];
  };

  const [switches, setSwitches] = useState<SwitchNode[]>([
    {
      id: "1",
      name: "Switch A",
      priority: generateRandomPriority(),
      mac: generateRandomMac(),
    },
    {
      id: "2",
      name: "Switch B",
      priority: generateRandomPriority(),
      mac: generateRandomMac(),
    },
    {
      id: "3",
      name: "Switch C",
      priority: generateRandomPriority(),
      mac: generateRandomMac(),
    },
  ]);

  // --- STP Root Bridge Calculation Logic ---
  const rootBridgeId = useMemo(() => {
    if (switches.length === 0) return null;

    let currentRoot = switches[0];

    for (let i = 1; i < switches.length; i++) {
      const sw = switches[i];

      // Clean MAC addresses for comparison
      const macA = currentRoot.mac.replace(/[:\-.]/g, "").toLowerCase();
      const macB = sw.mac.replace(/[:\-.]/g, "").toLowerCase();

      // Validate MAC lengths (rough check)
      const isValidA = macA.length === 12;
      const isValidB = macB.length === 12;

      if (!isValidB) continue; // Skip invalid MACs
      if (!isValidA) {
        currentRoot = sw;
        continue;
      }

      // Rule 1: Lowest Bridge Priority wins
      if (sw.priority < currentRoot.priority) {
        currentRoot = sw;
      }
      // Rule 2: If priorities tie, lowest MAC address wins
      else if (sw.priority === currentRoot.priority) {
        if (macB < macA) {
          currentRoot = sw;
        }
      }
    }

    return currentRoot.id;
  }, [switches]);

  const addSwitch = () => {
    const newId = Math.random().toString(36).substring(7);
    setSwitches([
      ...switches,
      {
        id: newId,
        name: `Switch ${switches.length + 1}`,
        priority: 32768,
        mac: "",
      },
    ]);
  };

  const removeSwitch = (id: string) => {
    setSwitches(switches.filter((sw) => sw.id !== id));
  };

  const updateSwitch = (
    id: string,
    field: keyof SwitchNode,
    value: string | number,
  ) => {
    setSwitches(
      switches.map((sw) => (sw.id === id ? { ...sw, [field]: value } : sw)),
    );
  };
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-200">
            Root Bridge Election
          </h2>
          <p className="text-sm text-slate-500">
            Calculate which switch will become the Root Bridge based on Bridge
            ID.
          </p>
        </div>
        <button
          onClick={addSwitch}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-sm text-cyan-400 transition-colors"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Add Switch</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {switches.map((sw) => {
          const isRoot = sw.id === rootBridgeId;
          const macClean = sw.mac.replace(/[:\-.]/g, "").toLocaleLowerCase();
          const isValidMac = macClean.length === 12;

          return (
            <div
              key={sw.id}
              className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl border transition-all ${
                isRoot && isValidMac
                  ? "bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                  : "bg-slate-950/50 border-slate-800/60"
              }`}
            >
              {isRoot && isValidMac && (
                <div
                  className="absolute -top-3 -right-3 bg-cyan-500 text-slate-950 p-1.5 rounded-full shadow-lg"
                  title="Elected Root Bridge"
                >
                  <Trophy size={16} className="fill-current" />
                </div>
              )}

              <div className="flex-1 w-full space-y-1">
                <label className="text-xs text-slate-500 uppercase font-semibold">
                  Switch Name
                </label>
                <input
                  type="text"
                  value={sw.name}
                  onChange={(e) => updateSwitch(sw.id, "name", e.target.value)}
                  className="w-full bg-transparent border-none text-slate-200 focus:outline-none focus:ring-0 text-lg font-medium p-0"
                  placeholder="Switch Name"
                />
              </div>

              <div className="flex-1 w-full space-y-1">
                <label className="text-xs text-slate-500 uppercase font-semibold">
                  Priority
                </label>
                <select
                  value={sw.priority}
                  onChange={(e) =>
                    updateSwitch(
                      sw.id,
                      "priority",
                      parseInt(e.target.value, 10),
                    )
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-cyan-500 text-slate-200 appearance-none"
                >
                  {priorities.map((p) => (
                    <option key={p} value={p}>
                      {p === 32768 ? `${p} (Default)` : p}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-[1.5] w-full space-y-1">
                <label className="text-xs text-slate-500 uppercase font-semibold flex justify-between">
                  MAC Address
                  {!isValidMac && sw.mac.length > 0 && (
                    <span className="text-red-400 text-[10px]">
                      Invalid Format
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  value={sw.mac}
                  onChange={(e) => updateSwitch(sw.id, "mac", e.target.value)}
                  className={`w-full bg-slate-900 border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none transition-colors ${
                    !isValidMac && sw.mac.length > 0
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-slate-700 focus:border-cyan-500"
                  }`}
                  placeholder="00:11:22:33:44:55"
                />
              </div>

              <button
                onClick={() => removeSwitch(sw.id)}
                disabled={switches.length <= 1}
                className="p-2 text-slate-500 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed mt-4 sm:mt-1"
                title="Remove Switch"
              >
                <Trash2 size={18} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Status Banner */}
      <div className="mt-6 p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
        <Shield className="text-cyan-500 shrink-0 mt-0.5" size={18} />
        <p className="text-sm text-slate-400">
          <strong className="text-slate-200">
            How STP elects a Root Bridge:
          </strong>{" "}
          Spanning Tree Protocol elects the Root Bridge based on the lowest
          Bridge ID. The Bridge ID consists of a priority value (default 32768)
          and the switch's MAC address. If priorities tie, the switch with the
          lowest MAC address wins.
        </p>
      </div>
    </div>
  );
};

export default Stp_Root_Selection;
