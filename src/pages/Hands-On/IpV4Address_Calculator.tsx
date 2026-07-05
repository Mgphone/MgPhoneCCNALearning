import { calculateIpDetails } from "@/lib/calculateIpDetails";
import React, { useState } from "react";

type Props = {};

const IpV4Address_Calculator: React.FC<Props> = () => {
  const [ipInput, setIpInput] = useState("192.168.1.10");
  const [cidrInput, setCidrInput] = useState("24");
  const results = calculateIpDetails(ipInput, cidrInput);

  return (
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

      {"network" in results ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ResultCard label="Network Address" value={results.network} />
          <ResultCard label="Broadcast Address" value={results.broadcast} />
          <ResultCard label="Subnet Mask" value={results.subnetMask} />
          <ResultCard label="Wildcard Mask" value={results.wildcard} />
          <ResultCard label="First Usable Host" value={results.firstHost} />
          <ResultCard label="Last Usable Host" value={results.lastHost} />
          <ResultCard
            label="Total Usable Hosts"
            value={results.hosts}
            fullWidth
          />
        </div>
      ) : (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
          {results.error}
        </div>
      )}
    </div>
  );
};
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
export default IpV4Address_Calculator;
