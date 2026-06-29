import React, { useState, useEffect, useCallback } from "react";
import {
  Network,
  CheckCircle2,
  XCircle,
  Eye,
  RefreshCw,
  AlertTriangle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// --- IPv4 Math Utilities ---
const ipToLong = (ip: string): number => {
  return (
    ip
      .split(".")
      .reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0
  );
};

const longToIp = (long: number): string => {
  return [
    (long >>> 24) & 255,
    (long >>> 16) & 255,
    (long >>> 8) & 255,
    long & 255,
  ].join(".");
};

const getRequiredCidr = (hosts: number): number | null => {
  if (hosts <= 0) return null;
  const requiredTotal = hosts + 2; // Network + Broadcast
  for (let cidr = 30; cidr >= 8; cidr--) {
    if (Math.pow(2, 32 - cidr) >= requiredTotal) return cidr;
  }
  return null;
};

const cidrToMask = (cidr: number): string => {
  const mask = (0xffffffff << (32 - cidr)) >>> 0;
  return longToIp(mask);
};

// --- Types ---
type Difficulty = "easy" | "medium" | "hard";

interface SubnetRequirement {
  id: string;
  name: string;
  requestedHosts: string;
}

interface UserInput {
  networkIp: string;
  cidr: string;
  firstHost: string;
  lastHost: string;
  broadcast: string;
}

interface ShadowAllocation {
  id: string;
  name: string;
  requestedHosts: number;
  allocatedSize: number;
  networkAddress: string;
  subnetMask: string;
  cidr: number;
  firstHost: string;
  lastHost: string;
  usableRange: string;
  broadcast: string;
}

export default function Vlsm() {
  // --- Game State ---
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [baseNetwork, setBaseNetwork] = useState({ ip: "", cidr: 0 });
  const [requirements, setRequirements] = useState<SubnetRequirement[]>([
    { id: "A", name: "Subnet A", requestedHosts: "" },
    { id: "B", name: "Subnet B", requestedHosts: "" },
  ]);

  // --- User State ---
  const [userAnswers, setUserAnswers] = useState<Record<string, UserInput>>({});

  // --- System State ---
  const [shadowSolution, setShadowSolution] = useState<
    ShadowAllocation[] | null
  >(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [validationResults, setValidationResults] = useState<
    Record<string, boolean>
  >({});

  // --- Network Generator ---
  const generateNetwork = useCallback((diff: Difficulty) => {
    let ip = "";
    let cidr = 24;

    if (diff === "easy") {
      ip = `192.168.${Math.floor(Math.random() * 256)}.0`;
      cidr = 24;
    } else if (diff === "medium") {
      const secondOctet = Math.floor(Math.random() * 16) + 16;
      ip = `172.${secondOctet}.${Math.floor(Math.random() * 256)}.0`;
      cidr = Math.floor(Math.random() * (23 - 16 + 1)) + 16;
    } else {
      ip = `10.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.0`;
      cidr = Math.floor(Math.random() * (15 - 8 + 1)) + 8;
    }

    setBaseNetwork({ ip, cidr });
    setIsRevealed(false);
    setValidationResults({});
    setUserAnswers({});
    setErrorMsg(null);
  }, []);

  useEffect(() => {
    generateNetwork("easy");
  }, [generateNetwork]);

  // --- The Background VLSM Solver ---
  useEffect(() => {
    if (!baseNetwork.ip) return;

    const parsedReqs = requirements
      .map((r) => ({ ...r, num: parseInt(r.requestedHosts, 10) }))
      .filter((r) => !isNaN(r.num) && r.num > 0);

    if (parsedReqs.length !== requirements.length) {
      setShadowSolution(null);
      setErrorMsg(null);
      return;
    }

    const sortedReqs = [...parsedReqs].sort((a, b) => b.num - a.num);

    let currentIpLong = ipToLong(baseNetwork.ip);
    const maxCapacity = Math.pow(2, 32 - baseNetwork.cidr);
    let usedCapacity = 0;

    const solution: ShadowAllocation[] = [];
    let isPossible = true;

    for (const req of sortedReqs) {
      const cidr = getRequiredCidr(req.num);
      if (!cidr) {
        isPossible = false;
        break;
      }

      const blockSize = Math.pow(2, 32 - cidr);
      usedCapacity += blockSize;

      if (usedCapacity > maxCapacity) {
        isPossible = false;
        break;
      }

      const firstHostIp = longToIp(currentIpLong + 1);
      const lastHostIp = longToIp(currentIpLong + blockSize - 2);

      solution.push({
        id: req.id,
        name: req.name,
        requestedHosts: req.num,
        allocatedSize: blockSize,
        networkAddress: longToIp(currentIpLong),
        subnetMask: cidrToMask(cidr),
        cidr: cidr,
        firstHost: firstHostIp,
        lastHost: lastHostIp,
        usableRange: `${firstHostIp} - ${lastHostIp}`,
        broadcast: longToIp(currentIpLong + blockSize - 1),
      });

      currentIpLong += blockSize;
    }

    if (!isPossible) {
      setErrorMsg(
        `Capacity Exceeded: Cannot fit these requirements into a /${baseNetwork.cidr} network.`,
      );
      setShadowSolution(null);
    } else {
      setErrorMsg(null);
      const orderedSolution = requirements.map(
        (r) => solution.find((s) => s.id === r.id)!,
      );
      setShadowSolution(orderedSolution);
    }
  }, [requirements, baseNetwork]);

  // --- Handlers ---
  const handleHostChange = (id: string, value: string) => {
    setRequirements((prev) =>
      prev.map((r) => (r.id === id ? { ...r, requestedHosts: value } : r)),
    );
    setValidationResults({});
    setIsRevealed(false);
  };

  const handleUserAnswerChange = (
    id: string,
    field: keyof UserInput,
    value: string,
  ) => {
    setUserAnswers((prev) => ({
      ...prev,
      [id]: {
        ...(prev[id] || {
          networkIp: "",
          cidr: "",
          firstHost: "",
          lastHost: "",
          broadcast: "",
        }),
        [field]: value,
      },
    }));
  };

  const addSubnet = () => {
    if (requirements.length >= 6) return;
    const nextId = String.fromCharCode(65 + requirements.length);
    setRequirements([
      ...requirements,
      { id: nextId, name: `Subnet ${nextId}`, requestedHosts: "" },
    ]);
  };

  const removeSubnet = () => {
    if (requirements.length <= 2) return;
    setRequirements(requirements.slice(0, -1));
  };

  const validateAnswers = () => {
    if (!shadowSolution) return;

    const results: Record<string, boolean> = {};
    let allCorrect = true;

    shadowSolution.forEach((solution) => {
      const userAns = userAnswers[solution.id] || ({} as UserInput);

      // Strict 5-point validation
      const isCorrect =
        userAns.networkIp === solution.networkAddress &&
        userAns.cidr === solution.cidr.toString() &&
        userAns.firstHost === solution.firstHost &&
        userAns.lastHost === solution.lastHost &&
        userAns.broadcast === solution.broadcast;

      results[solution.id] = isCorrect;
      if (!isCorrect) allCorrect = false;
    });

    setValidationResults(results);
    if (allCorrect) setIsRevealed(true);
  };

  return (
    <Card className="w-full max-w-5xl mx-auto border-slate-800 bg-slate-950 text-slate-100 shadow-2xl">
      <CardHeader className="border-b border-slate-800/60 pb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Network className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold tracking-tight">
                Advanced VLSM Engine
              </CardTitle>
              <CardDescription className="text-slate-400 mt-1">
                Calculate Network boundaries, usable ranges, and broadcast IPs.
              </CardDescription>
            </div>
          </div>

          <div className="flex gap-2 bg-slate-900 p-1 rounded-lg border border-slate-800">
            {(["easy", "medium", "hard"] as Difficulty[]).map((d) => (
              <Button
                key={d}
                variant="ghost"
                size="sm"
                onClick={() => {
                  setDifficulty(d);
                  generateNetwork(d);
                }}
                className={`capitalize text-xs h-8 ${difficulty === d ? "bg-slate-800 text-emerald-400" : "text-slate-500 hover:text-slate-300"}`}
              >
                {d}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-6 space-y-8">
        {/* Top Controls & Network Display */}
        <div className="flex flex-col md:flex-row justify-between gap-6 items-center bg-slate-900/50 p-4 rounded-xl border border-slate-800">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Target Address Space
            </p>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-mono font-bold text-emerald-400">
                {baseNetwork.ip}
              </span>
              <span className="text-lg font-mono text-slate-400">
                /{baseNetwork.cidr}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center space-x-2 bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800">
              <span className="text-xs text-slate-400">Subnets:</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-slate-300"
                onClick={removeSubnet}
                disabled={requirements.length <= 2}
              >
                -
              </Button>
              <span className="text-sm font-bold w-4 text-center">
                {requirements.length}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-slate-300"
                onClick={addSubnet}
                disabled={requirements.length >= 6}
              >
                +
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => generateNetwork(difficulty)}
              className="border-slate-700 bg-slate-900 hover:bg-slate-800"
            >
              <RefreshCw className="w-4 h-4 mr-2" /> New Target
            </Button>
          </div>
        </div>

        {errorMsg && (
          <div className="flex items-center space-x-2 text-amber-400 bg-amber-950/30 p-3 rounded-lg border border-amber-900/50">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <span className="text-sm">{errorMsg}</span>
          </div>
        )}

        {/* The Quiz Area */}
        {!isRevealed ? (
          <div className="space-y-6">
            {requirements.map((req) => (
              <div
                key={req.id}
                className={`p-5 rounded-xl border relative transition-colors duration-300 ${
                  validationResults[req.id] === true
                    ? "bg-emerald-950/20 border-emerald-900/50"
                    : validationResults[req.id] === false
                      ? "bg-red-950/20 border-red-900/50"
                      : "bg-slate-900/40 border-slate-800/60"
                }`}
              >
                {/* Status Badge Overlays */}
                {validationResults[req.id] !== undefined && (
                  <div className="absolute -right-3 -top-3 z-10 shadow-xl rounded-full bg-slate-950">
                    {validationResults[req.id] ? (
                      <CheckCircle2 className="w-7 h-7 text-emerald-500" />
                    ) : (
                      <XCircle className="w-7 h-7 text-red-500" />
                    )}
                  </div>
                )}

                {/* Subnet Header */}
                <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-800/50">
                  <h4 className="font-bold text-slate-200 tracking-wide">
                    {req.name}
                  </h4>
                  <div className="flex items-center gap-3">
                    <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                      Hosts Needed
                    </label>
                    <Input
                      type="number"
                      placeholder="e.g. 30"
                      value={req.requestedHosts}
                      onChange={(e) => handleHostChange(req.id, e.target.value)}
                      className="w-24 bg-slate-950 border-slate-700 font-mono h-8 focus-visible:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Challenge Inputs Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Network IP
                    </label>
                    <Input
                      placeholder="192.168.1.0"
                      value={userAnswers[req.id]?.networkIp || ""}
                      onChange={(e) =>
                        handleUserAnswerChange(
                          req.id,
                          "networkIp",
                          e.target.value,
                        )
                      }
                      className="bg-slate-950 border-slate-700 font-mono text-sm h-9"
                      disabled={!shadowSolution}
                    />
                  </div>
                  <div className="space-y-1.5 relative">
                    <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      CIDR
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2 text-slate-500 font-mono text-sm">
                        /
                      </span>
                      <Input
                        placeholder="26"
                        value={userAnswers[req.id]?.cidr || ""}
                        onChange={(e) =>
                          handleUserAnswerChange(req.id, "cidr", e.target.value)
                        }
                        className="bg-slate-950 border-slate-700 font-mono text-sm h-9 pl-7"
                        disabled={!shadowSolution}
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      First Host
                    </label>
                    <Input
                      placeholder="192.168.1.1"
                      value={userAnswers[req.id]?.firstHost || ""}
                      onChange={(e) =>
                        handleUserAnswerChange(
                          req.id,
                          "firstHost",
                          e.target.value,
                        )
                      }
                      className="bg-slate-950 border-slate-700 font-mono text-sm h-9"
                      disabled={!shadowSolution}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Last Host
                    </label>
                    <Input
                      placeholder="192.168.1.62"
                      value={userAnswers[req.id]?.lastHost || ""}
                      onChange={(e) =>
                        handleUserAnswerChange(
                          req.id,
                          "lastHost",
                          e.target.value,
                        )
                      }
                      className="bg-slate-950 border-slate-700 font-mono text-sm h-9"
                      disabled={!shadowSolution}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Broadcast
                    </label>
                    <Input
                      placeholder="192.168.1.63"
                      value={userAnswers[req.id]?.broadcast || ""}
                      onChange={(e) =>
                        handleUserAnswerChange(
                          req.id,
                          "broadcast",
                          e.target.value,
                        )
                      }
                      className="bg-slate-950 border-slate-700 font-mono text-sm h-9"
                      disabled={!shadowSolution}
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-2">
              <Button
                onClick={validateAnswers}
                disabled={!shadowSolution}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg"
              >
                Submit Validation
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsRevealed(true)}
                disabled={!shadowSolution}
                className="border-slate-700 hover:bg-slate-800 text-slate-300"
              >
                <Eye className="w-4 h-4 mr-2" /> Show Answers
              </Button>
            </div>
          </div>
        ) : (
          /* --- The Reveal State --- */
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-emerald-400">
                Master Allocation Table
              </h3>
              <Badge
                variant="outline"
                className="border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
              >
                Sorted & Calculated
              </Badge>
            </div>

            <div className="rounded-xl border border-slate-800 overflow-x-auto bg-slate-900/50">
              <Table className="min-w-[800px]">
                <TableHeader className="bg-slate-950">
                  <TableRow className="border-slate-800 hover:bg-slate-900">
                    <TableHead className="text-slate-400 font-semibold">
                      Subnet
                    </TableHead>
                    <TableHead className="text-slate-400 font-semibold">
                      Req/Alloc
                    </TableHead>
                    <TableHead className="text-slate-400 font-semibold">
                      Net IP & CIDR
                    </TableHead>
                    <TableHead className="text-slate-400 font-semibold">
                      First Host
                    </TableHead>
                    <TableHead className="text-slate-400 font-semibold">
                      Last Host
                    </TableHead>
                    <TableHead className="text-slate-400 font-semibold">
                      Broadcast
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {shadowSolution?.map((sol) => (
                    <TableRow
                      key={sol.id}
                      className="border-slate-800/50 hover:bg-slate-800/30 font-mono text-sm"
                    >
                      <TableCell className="font-sans font-bold text-slate-200">
                        {sol.name}
                      </TableCell>
                      <TableCell>
                        <span className="text-slate-300">
                          {sol.requestedHosts}
                        </span>
                        <span className="text-slate-600 mx-1">/</span>
                        <span className="text-emerald-500">
                          {sol.allocatedSize - 2}
                        </span>
                      </TableCell>
                      <TableCell className="text-emerald-400 font-bold">
                        {sol.networkAddress}/{sol.cidr}
                      </TableCell>
                      <TableCell className="text-slate-300">
                        {sol.firstHost}
                      </TableCell>
                      <TableCell className="text-slate-300">
                        {sol.lastHost}
                      </TableCell>
                      <TableCell className="text-rose-400">
                        {sol.broadcast}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <Button
              onClick={() => {
                setIsRevealed(false);
                setValidationResults({});
              }}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white"
            >
              Return to Practice
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
