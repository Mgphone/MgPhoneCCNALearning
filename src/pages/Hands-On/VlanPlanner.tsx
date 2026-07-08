import React, { useState, useEffect } from "react";
import {
  Network,
  AlertTriangle,
  Plus,
  Minus,
  RotateCcw,
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
import {
  isValidIp,
  isValidCidr,
  solveVlsm,
  ShadowAllocation,
  SubnetRequirement,
} from "@/lib/vlsm";

const VlanPlanner: React.FC = () => {
  const [baseIp, setBaseIp] = useState("");
  const [baseCidr, setBaseCidr] = useState("24");
  const [ipError, setIpError] = useState<string | null>(null);
  const [requirements, setRequirements] = useState<SubnetRequirement[]>([
    { id: "A", name: "Subnet A", requestedHosts: "" },
    { id: "B", name: "Subnet B", requestedHosts: "" },
  ]);
  const [shadowSolution, setShadowSolution] = useState<
    ShadowAllocation[] | null
  >(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!baseIp) {
      setIpError(null);
      return;
    }
    if (!isValidIp(baseIp)) {
      setIpError("Invalid IPv4 address.");
      return;
    }
    if (!isValidCidr(baseCidr)) {
      setIpError("CIDR must be between 0 and 32.");
      return;
    }
    setIpError(null);
  }, [baseIp, baseCidr]);

  useEffect(() => {
    if (!baseIp || !baseCidr || ipError) {
      setShadowSolution(null);
      setErrorMsg(null);
      return;
    }
    const result = solveVlsm(baseIp, parseInt(baseCidr, 10), requirements);
    setShadowSolution(result.solution);
    setErrorMsg(result.error);
  }, [baseIp, baseCidr, requirements, ipError]);

  const handleHostChange = (id: string, value: string) => {
    setRequirements((prev) =>
      prev.map((r) => (r.id === id ? { ...r, requestedHosts: value } : r)),
    );
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

  const clearAll = () => {
    setBaseIp("");
    setBaseCidr("24");
    setRequirements([
      { id: "A", name: "Subnet A", requestedHosts: "" },
      { id: "B", name: "Subnet B", requestedHosts: "" },
    ]);
    setShadowSolution(null);
    setErrorMsg(null);
    setIpError(null);
  };

  return (
    <Card className="w-full max-w-5xl mx-auto border-slate-800 bg-slate-950 text-slate-100 shadow-2xl">
      <CardHeader className="border-b border-slate-800/60 pb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-emerald-500/10 rounded-lg">
            <Network className="w-6 h-6 text-emerald-500" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold tracking-tight">
              VLAN Planner
            </CardTitle>
            <CardDescription className="text-slate-400 mt-1">
              Plan your VLSM subnet allocations manually.
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-6 space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-end bg-slate-900/50 p-4 rounded-xl border border-slate-800">
          <div className="space-y-1.5 flex-1">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Base Network IP
            </label>
            <Input
              placeholder="192.168.1.0"
              value={baseIp}
              onChange={(e) => setBaseIp(e.target.value)}
              className={`bg-slate-950 border-slate-700 font-mono h-9 ${
                ipError ? "border-red-500/50 ring-1 ring-red-500/20" : ""
              }`}
            />
          </div>
          <div className="space-y-1.5 w-28">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              CIDR
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-slate-500 font-mono text-sm">
                /
              </span>
              <Input
                placeholder="24"
                value={baseCidr}
                onChange={(e) => setBaseCidr(e.target.value)}
                className="bg-slate-950 border-slate-700 font-mono h-9 pl-7"
              />
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={clearAll}
            className="border-slate-700 bg-slate-900 hover:bg-slate-800 shrink-0"
          >
            <RotateCcw className="w-4 h-4 mr-2" /> Clear
          </Button>
        </div>

        {ipError && (
          <div className="flex items-center space-x-2 text-red-400 bg-red-950/30 p-3 rounded-lg border border-red-900/50">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <span className="text-sm">{ipError}</span>
          </div>
        )}

        {errorMsg && !ipError && (
          <div className="flex items-center space-x-2 text-amber-400 bg-amber-950/30 p-3 rounded-lg border border-amber-900/50">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <span className="text-sm">{errorMsg}</span>
          </div>
        )}

        <div className="flex items-center justify-between bg-slate-900/50 p-3 rounded-xl border border-slate-800">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Subnet Requirements
          </span>
          <div className="flex items-center space-x-2 bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-slate-300"
              onClick={removeSubnet}
              disabled={requirements.length <= 2}
            >
              <Minus className="w-4 h-4" />
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
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {requirements.map((req) => (
            <div
              key={req.id}
              className="p-4 rounded-xl border border-slate-800/60 bg-slate-900/40"
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-bold text-slate-200">{req.name}</h4>
                <span className="text-xs text-slate-500 font-mono">{req.id}</span>
              </div>
              <div className="flex items-center gap-3">
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Hosts Needed
                </label>
                <Input
                  type="text"
                  inputMode="numeric"
                  placeholder="e.g. 30"
                  value={req.requestedHosts}
                  onChange={(e) => handleHostChange(req.id, e.target.value)}
                  className="w-24 bg-slate-950 border-slate-700 font-mono h-8 focus-visible:ring-emerald-500"
                />
              </div>
            </div>
          ))}
        </div>

        {shadowSolution && (
          <div className="space-y-4 animate-in fade-in">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-emerald-400">
                Allocation Table
              </h3>
              <Badge
                variant="outline"
                className="border-emerald-500/30 text-emerald-400 bg-emerald-500/10 font-mono"
              >
                {baseIp}/{baseCidr}
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
                  {shadowSolution.map((sol) => (
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
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VlanPlanner;
