import {
  ArrowLeft,
  Cpu,
  GitCompare,
  Network,
  FileQuestion,
  ChevronRight,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  {
    title: "EUI-64 Quiz Simulator",
    description:
      "Test your ability to convert a MAC address into an IPv6 Link-Local address using the EUI-64 format.",
    icon: GitCompare,
    color: "cyan",
    route: "/hands-on/eui64",
    available: true,
  },
  {
    title: "IPv4 Calculator",
    description:
      "Calculate IPv4 network information including subnet masks, network and broadcast addresses, host ranges, wildcard masks, CIDR notation, and VLSM subnetting.",
    icon: Network,
    color: "amber",
    route: "/hands-on/ipv4-calculator",
    available: true,
  },
  {
    title: "VLAN & STP Analyzer",
    description:
      "Analyze VLAN configurations, trunk links, root bridge election, STP path costs, and port roles.",
    icon: Cpu,
    color: "emerald",
    route: "/hands-on/vlan-stp",
    available: true,
  },
  {
    title: "Multiple Choice Quiz",
    description:
      "Test your CCNA knowledge with randomized multiple-choice questions across all exam domains.",
    icon: FileQuestion,
    color: "rose",
    route: "/hands-on/quiz",
    available: true,
  },
] as const;

const colorMap = {
  cyan: {
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "hover:border-cyan-500/50",
    shadow: "hover:shadow-cyan-500/10",
  },
  amber: {
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "hover:border-amber-500/50",
    shadow: "hover:shadow-amber-500/10",
  },
  emerald: {
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "hover:border-emerald-500/50",
    shadow: "hover:shadow-emerald-500/10",
  },
  rose: {
    text: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "hover:border-rose-500/50",
    shadow: "hover:shadow-rose-500/10",
  },
};

export const HandsOnPractice = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
      <div className="max-w-5xl w-full space-y-8">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
          >
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              CCNA Hands-On Practice
            </h1>
            <p className="text-slate-500 mt-1">
              Interactive calculators, quizzes, and utilities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tools.map((tool) => {
            const c = colorMap[tool.color];
            const Icon = tool.icon;

            if (!tool.available) {
              return (
                <div
                  key={tool.title}
                  className="group relative bg-slate-900/50 border border-slate-800/50 p-8 rounded-3xl opacity-50 cursor-not-allowed select-none"
                >
                  <div className="h-14 w-14 rounded-2xl flex items-center justify-center mb-6 bg-slate-800">
                    <Lock className="text-slate-600" size={22} />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <h2 className="text-2xl font-bold text-slate-500">
                      {tool.title}
                    </h2>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {tool.description}
                  </p>
                  <div className="flex items-center text-slate-600 font-bold text-sm">
                    Coming Soon
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={tool.title}
                to={tool.route}
                className={`group relative bg-slate-900 border border-slate-800 p-8 rounded-3xl text-left transition-all ${c.border} hover:bg-slate-800/50 ${c.shadow}`}
              >
                <div
                  className={`h-14 w-14 ${c.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={c.text} size={28} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  {tool.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {tool.description}
                </p>
                <div
                  className={`flex items-center ${c.text} font-bold text-sm`}
                >
                  Enter Tool{" "}
                  <ChevronRight
                    size={16}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
