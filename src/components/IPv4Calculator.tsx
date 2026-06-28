//ipv4calcultor import typescript
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calculator, Network, Hash, Shuffle } from "lucide-react";

export default function IPv4Calculator() {
  const [activeTab, setActiveTab] = useState("address");
  const [ipInput, setIpInput] = useState("192.168.1.10");
  const [cidrInput, setCidrInput] = useState("24");

  // --- Core IPv4 Math Helpers ---
  const calculateIpDetails = (ip: string, cidrStr: string) => {
    try {
      const cidr = parseInt(cidrStr, 10);
      if (isNaN(cidr) || cidr < 0 || cidr > 32) throw new Error("Invalid CIDR");

      const ipParts = ip.split(".").map(Number);
      if (
        ipParts.length !== 4 ||
        ipParts.some((p) => isNaN(p) || p < 0 || p > 255)
      ) {
        throw new Error("Invalid IP");
      }

      // Convert IP to 32-bit integer
      const ipInt =
        ((ipParts[0] << 24) |
          (ipParts[1] << 16) |
          (ipParts[2] << 8) |
          ipParts[3]) >>>
        0;

      // Calculate Mask
      const maskInt = cidr === 0 ? 0 : (~0 << (32 - cidr)) >>> 0;
      const maskParts = [
        (maskInt >>> 24) & 255,
        (maskInt >>> 16) & 255,
        (maskInt >>> 8) & 255,
        maskInt & 255,
      ];

      // Calculate Wildcard
      const wildcardInt = ~maskInt >>> 0;
      const wildcardParts = [
        (wildcardInt >>> 24) & 255,
        (wildcardInt >>> 16) & 255,
        (wildcardInt >>> 8) & 255,
        wildcardInt & 255,
      ];

      // Calculate Network & Broadcast
      const networkInt = (ipInt & maskInt) >>> 0;
      const broadcastInt = (networkInt | wildcardInt) >>> 0;

      const intToIp = (int: number) =>
        `${(int >>> 24) & 255}.${(int >>> 16) & 255}.${(int >>> 8) & 255}.${int & 255}`;

      const totalHosts = cidr >= 31 ? 0 : Math.pow(2, 32 - cidr) - 2;

      return {
        subnetMask: maskParts.join("."),
        wildcard: wildcardParts.join("."),
        network: intToIp(networkInt),
        broadcast: intToIp(broadcastInt),
        firstHost: cidr >= 31 ? "N/A" : intToIp(networkInt + 1),
        lastHost: cidr >= 31 ? "N/A" : intToIp(broadcastInt - 1),
        hosts: totalHosts.toLocaleString(),
        error: null,
      };
    } catch (err) {
      return { error: "Please enter a valid IPv4 address and CIDR prefix." };
    }
  };

  const results = calculateIpDetails(ipInput, cidrInput);

  const tabs = [
    { id: "address", name: "Address Calculator", icon: Calculator },
    { id: "vlsm", name: "VLSM Planner", icon: Network },
    { id: "cidr", name: "CIDR Converter", icon: Hash },
    { id: "wildcard", name: "Wildcard Calculator", icon: Shuffle },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      {/* Header aligned with requested styling */}
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
              IPv4 Toolkit
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Address Calculator, VLSM, CIDR & Wildcard
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
          {activeTab === "address" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                    IPv4 Address
                  </label>
                  <input
                    type="text"
                    value={ipInput}
                    onChange={(e) => setIpInput(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                    placeholder="192.168.1.1"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                    CIDR Prefix
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg font-mono">
                      /
                    </span>
                    <input
                      type="number"
                      value={cidrInput}
                      onChange={(e) => setCidrInput(e.target.value)}
                      min="0"
                      max="32"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-8 pr-4 py-3 text-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                    />
                  </div>
                </div>
              </div>

              {results.error ? (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                  {results.error}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ResultCard label="Network Address" value={results.network} />
                  <ResultCard
                    label="Broadcast Address"
                    value={results.broadcast}
                  />
                  <ResultCard label="Subnet Mask" value={results.subnetMask} />
                  <ResultCard label="Wildcard Mask" value={results.wildcard} />
                  <ResultCard
                    label="First Usable Host"
                    value={results.firstHost}
                  />
                  <ResultCard
                    label="Last Usable Host"
                    value={results.lastHost}
                  />
                  <ResultCard
                    label="Total Usable Hosts"
                    value={results.hosts}
                    fullWidth
                  />
                </div>
              )}
            </div>
          )}

          {activeTab === "vlsm" && (
            <div className="text-center py-12 text-slate-500 animate-in fade-in">
              <Network className="mx-auto h-12 w-12 mb-4 opacity-50" />
              <h3 className="text-lg font-medium text-slate-300">
                VLSM Planner
              </h3>
              <p className="mt-2">
                Variable Length Subnet Masking layout tool coming soon.
              </p>
            </div>
          )}

          {activeTab === "cidr" && (
            <div className="text-center py-12 text-slate-500 animate-in fade-in">
              <Hash className="mx-auto h-12 w-12 mb-4 opacity-50" />
              <h3 className="text-lg font-medium text-slate-300">
                CIDR Converter
              </h3>
              <p className="mt-2">
                Subnet to CIDR and CIDR to Subnet quick reference coming soon.
              </p>
            </div>
          )}

          {activeTab === "wildcard" && (
            <div className="text-center py-12 text-slate-500 animate-in fade-in">
              <Shuffle className="mx-auto h-12 w-12 mb-4 opacity-50" />
              <h3 className="text-lg font-medium text-slate-300">
                Wildcard Calculator
              </h3>
              <p className="mt-2">
                ACL wildcard masking generator coming soon.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// Small helper component for displaying the results cleanly
function ResultCard({
  label,
  value,
  fullWidth = false,
}: {
  label: string;
  value: string | undefined;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`bg-slate-950 p-4 rounded-xl border border-slate-800/60 flex flex-col justify-center ${fullWidth ? "sm:col-span-2" : ""}`}
    >
      <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">
        {label}
      </span>
      <span className="text-lg text-slate-200 font-mono">{value}</span>
    </div>
  );
}
