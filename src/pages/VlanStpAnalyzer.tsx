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
import Stp_Root_Selection from "./Hands-On/Stp_Root_Selection";
import VlanPlanner from "./Hands-On/VlanPlanner";
import PortSecurity from "./Hands-On/PortSecurity";

export default function VlanStpAnalyzer() {
  const [activeTab, setActiveTab] = useState("stp-root");

  // Default Spanning Tree priorities (multiples of 4096)

  // --- STP Root Bridge Calculation Logic ---

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
          {activeTab === "stp-root" && <Stp_Root_Selection />}

          {activeTab === "vlan-planner" && <VlanPlanner />}

          {activeTab === "port-security" && <PortSecurity />}
        </div>
      </main>
    </div>
  );
}
