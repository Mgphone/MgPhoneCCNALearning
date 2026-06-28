import React from "react";
import { Link } from "react-router-dom";
import { Unplug, ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 text-center shadow-2xl relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0"></div>
        <div className="absolute -top-24 -right-24 opacity-5 pointer-events-none">
          <Terminal size={250} />
        </div>

        {/* Icon & Error Code */}
        <div className="relative z-10 animate-in zoom-in-95 duration-500">
          <div className="mx-auto w-24 h-24 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(239,68,68,0.15)]">
            <Unplug size={40} className="text-red-500" />
          </div>

          <h1 className="text-6xl font-black text-white mb-2 tracking-tight">
            404
          </h1>

          <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-md mb-6">
            <span className="text-red-400 font-mono text-sm">
              ICMP Type 3, Code 1
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-200 mb-3">
            Destination Unreachable
          </h2>

          <p className="text-slate-400 mb-8 leading-relaxed text-sm sm:text-base">
            The route you are looking for does not exist in the routing table.
            The packet has been dropped.
          </p>

          {/* Action Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-cyan-500/25 w-full justify-center sm:w-auto"
          >
            <ArrowLeft size={18} />
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
