import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Network,
  GitMerge,
  Shield,
  Plus,
  Trash2,
  Trophy,
} from "lucide-react";

interface SwitchNode {
  id: string;
  name: string;
  priority: number;
  mac: string;
}

export default function VlanStpAnalyzer() {
  const [activeTab, setActiveTab] = useState("stp-root");

  // Default Spanning Tree priorities (multiples of 4096)
  const priorities = Array.from({ length: 16 }, (_, i) => i * 4096);

  const [switches, setSwitches] = useState<SwitchNode[]>([
    { id: "1", name: "Switch A", priority: 32768, mac: "00:11:22:33:44:55" },
    { id: "2", name: "Switch B", priority: 32768, mac: "00:11:22:33:44:aa" },
    { id: "3", name: "Switch C", priority: 32768, mac: "00:11:22:aa:bb:cc" },
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

  const tabs = [
    { id: "stp-root", name: "STP Root Election", icon: GitMerge },
    { id: "vlan-planner", name: "VLAN Planner", icon: Network },
    { id: "port-security", name: "Port Security", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      {/* Header */}
      <header className="py-6 sm:py-8 border-b border-slate-900 bg-slate-950 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-4">
          <Link
            to="/hands-on"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all shrink-0"
          >
            <ArrowLeft size={20} />
          </Link>
          <div className="text-center flex-1 pr-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400">
              VLAN & STP Analyzer
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Spanning Tree & Virtual LAN Toolkit
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-slate-900/50 p-2 rounded-2xl border border-slate-800">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-transparent"
                }`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          {activeTab === "stp-root" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-200">
                    Root Bridge Election
                  </h2>
                  <p className="text-sm text-slate-500">
                    Calculate which switch will become the Root Bridge based on
                    Bridge ID.
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
                  const macClean = sw.mac
                    .replace(/[:\-.]/g, "")
                    .toLocaleLowerCase();
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
                          onChange={(e) =>
                            updateSwitch(sw.id, "name", e.target.value)
                          }
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
                          onChange={(e) =>
                            updateSwitch(sw.id, "mac", e.target.value)
                          }
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
                  Spanning Tree Protocol elects the Root Bridge based on the
                  lowest Bridge ID. The Bridge ID consists of a priority value
                  (default 32768) and the switch's MAC address. If priorities
                  tie, the switch with the lowest MAC address wins.
                </p>
              </div>
            </div>
          )}

          {activeTab === "vlan-planner" && (
            <div className="text-center py-12 text-slate-500 animate-in fade-in">
              <Network className="mx-auto h-12 w-12 mb-4 opacity-50" />
              <h3 className="text-lg font-medium text-slate-300">
                VLAN Planner
              </h3>
              <p className="mt-2">
                Access/Trunk port mapping and VLAN ID management coming soon.
              </p>
            </div>
          )}

          {activeTab === "port-security" && (
            <div className="text-center py-12 text-slate-500 animate-in fade-in">
              <Shield className="mx-auto h-12 w-12 mb-4 opacity-50" />
              <h3 className="text-lg font-medium text-slate-300">
                Port Security Analyzer
              </h3>
              <p className="mt-2">
                Sticky MAC configuration and violation mode simulation coming
                soon.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
