import React, { useState, useEffect } from "react";
import { CheckCircle2, XCircle, EyeOff, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { calculateIpDetails, IpDetails } from "@/lib/calculateIpDetails";

type Difficulty = "easy" | "medium" | "expert";

const CIDR_RANGES: Record<Difficulty, number[]> = {
  easy: [8, 16, 24],
  medium: [20, 21, 22, 23, 24, 25, 26, 27, 28],
  expert: Array.from({ length: 33 }, (_, i) => i),
};

interface FieldConfig {
  key: keyof IpDetails | "usableIps";
  label: string;
  placeholder: string;
  fullWidth?: boolean;
  isNumber?: boolean;
}

const FIELDS: FieldConfig[] = [
  { key: "network", label: "Network Address", placeholder: "192.168.1.0" },
  { key: "subnetMask", label: "Subnet Mask", placeholder: "255.255.255.0" },
  { key: "broadcast", label: "Broadcast Address", placeholder: "192.168.1.255" },
  { key: "wildcard", label: "Wildcard Mask", placeholder: "0.0.0.255" },
  { key: "firstHost", label: "First Usable Host", placeholder: "192.168.1.1" },
  { key: "lastHost", label: "Last Usable Host", placeholder: "192.168.1.254" },
  { key: "usableIps", label: "Usable IPs", placeholder: "254", fullWidth: true, isNumber: true },
];

function intToIp(int: number): string {
  return `${(int >>> 24) & 255}.${(int >>> 16) & 255}.${(int >>> 8) & 255}.${int & 255}`;
}

function generateRandomIp(cidr: number): string {
  const hostCount = Math.pow(2, 32 - cidr);
  let networkInt: number;
  if (cidr === 0) {
    networkInt = 0;
  } else {
    networkInt = (Math.floor(Math.random() * 0x100000000) & (~0 << (32 - cidr))) >>> 0;
  }
  let offset: number;
  if (hostCount <= 2) {
    offset = Math.floor(Math.random() * hostCount);
  } else {
    offset = Math.floor(Math.random() * (hostCount - 2)) + 1;
  }
  return intToIp((networkInt + offset) >>> 0);
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const Cidr_Quiz: React.FC = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [questionIp, setQuestionIp] = useState("");
  const [questionCidr, setQuestionCidr] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState<IpDetails | null>(null);
  const [userInputs, setUserInputs] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, boolean | null>>({});
  const [revealed, setRevealed] = useState(false);
  const [checked, setChecked] = useState(false);

  const generateQuestion = (diff: Difficulty) => {
    const cidr = pickRandom(CIDR_RANGES[diff]);
    const ip = generateRandomIp(cidr);
    const answer = calculateIpDetails(ip, String(cidr)) as IpDetails;
    setQuestionIp(ip);
    setQuestionCidr(String(cidr));
    setCorrectAnswer(answer);
    setUserInputs({});
    setResults({});
    setRevealed(false);
    setChecked(false);
  };

  useEffect(() => {
    generateQuestion(difficulty);
  }, [difficulty]);

  const handleInputChange = (field: string, value: string) => {
    setUserInputs((prev) => ({ ...prev, [field]: value }));
  };

  const ANSWER_MAP: Record<string, keyof Omit<IpDetails, "error">> = {
    network: "network",
    subnetMask: "subnetMask",
    broadcast: "broadcast",
    wildcard: "wildcard",
    firstHost: "firstHost",
    lastHost: "lastHost",
  };

  const getCorrectValue = (field: string, answer: IpDetails): string => {
    if (field === "usableIps") return answer.hosts;
    return answer[ANSWER_MAP[field]];
  };

  const normalize = (s: string) => s.replace(/[^0-9]/g, "");

  const checkField = (field: string, userVal: string, correctVal: string): boolean => {
    if (field === "usableIps") {
      return normalize(userVal) === normalize(correctVal);
    }
    return userVal.trim() === correctVal;
  };

  const handleCheck = () => {
    if (!correctAnswer) return;
    const newResults: Record<string, boolean | null> = {};
    for (const field of FIELDS) {
      const userVal = userInputs[field.key] || "";
      const correctVal = getCorrectValue(field.key, correctAnswer);
      newResults[field.key] = checkField(field.key, userVal, correctVal);
    }
    setResults(newResults);
    setChecked(true);
    setRevealed(false);
  };

  const handleReveal = () => {
    if (!correctAnswer) return;
    const filled: Record<string, string> = {};
    const allGreen: Record<string, boolean | null> = {};
    for (const field of FIELDS) {
      filled[field.key] = getCorrectValue(field.key, correctAnswer);
      allGreen[field.key] = true;
    }
    setUserInputs(filled);
    setResults(allGreen);
    setRevealed(true);
    setChecked(true);
  };

  const handleNewQuestion = () => {
    generateQuestion(difficulty);
  };

  const totalFields = FIELDS.length;
  const correctCount = Object.values(results).filter(Boolean).length;
  const allCorrect = checked && correctCount === totalFields;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      {/* Difficulty selector */}
      <div className="flex flex-wrap gap-2 bg-slate-950/50 p-2 rounded-2xl border border-slate-800">
        {(["easy", "medium", "expert"] as Difficulty[]).map((level) => (
          <button
            key={level}
            onClick={() => setDifficulty(level)}
            className={cn(
              "flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all capitalize",
              difficulty === level
                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-transparent"
            )}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Question card */}
      {questionIp && questionCidr && (
        <Card className="bg-slate-950/50 border-slate-800">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm mb-1">What are the network details of:</p>
            <p className="text-xl font-mono font-bold text-cyan-400">
              {questionIp}/<span className="text-cyan-300">{questionCidr}</span>
            </p>
          </CardContent>
        </Card>
      )}

      {/* Input fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {FIELDS.map((field) => (
          <div
            key={field.key}
            className={cn("space-y-2", field.fullWidth && "sm:col-span-2")}
          >
            <label className="text-xs text-slate-500 font-medium uppercase tracking-wider">
              {field.label}
            </label>
            <div className="relative">
              <Input
                value={userInputs[field.key] || ""}
                onChange={(e) => handleInputChange(field.key, e.target.value)}
                placeholder={field.placeholder}
                className={cn(
                  "bg-slate-950 border-slate-700 font-mono text-sm pr-10",
                  results[field.key] === true && "border-emerald-500/50 ring-1 ring-emerald-500/20",
                  results[field.key] === false && "border-red-500/50 ring-1 ring-red-500/20",
                )}
                disabled={revealed}
              />
              {results[field.key] !== null && results[field.key] !== undefined && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {results[field.key] ? (
                    <CheckCircle2 size={16} className="text-emerald-400" />
                  ) : (
                    <XCircle size={16} className="text-red-400" />
                  )}
                </div>
              )}
            </div>
            {results[field.key] !== null && !revealed && (
              <p
                className={cn(
                  "text-xs",
                  results[field.key] ? "text-emerald-400" : "text-red-400"
                )}
              >
                {results[field.key] ? "Correct" : "Incorrect"}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Button
          onClick={handleCheck}
          disabled={revealed}
          className="bg-cyan-600 hover:bg-cyan-500 text-white"
        >
          <CheckCircle2 size={16} className="mr-2" />
          Check Answers
        </Button>
        <Button
          onClick={handleReveal}
          disabled={revealed}
          variant="outline"
          className="border-slate-700 text-slate-300 hover:bg-slate-800"
        >
          <EyeOff size={16} className="mr-2" />
          Give Up
        </Button>
        <Button
          onClick={handleNewQuestion}
          variant="ghost"
          className="text-slate-400 hover:text-slate-200"
        >
          <RefreshCw size={16} className="mr-2" />
          New Question
        </Button>

        {checked && (
          <span
            className={cn(
              "text-sm font-medium ml-auto",
              allCorrect ? "text-emerald-400" : "text-slate-400"
            )}
          >
            {correctCount}/{totalFields} correct
          </span>
        )}
      </div>

      {/* All correct banner */}
      {allCorrect && (
        <Card className="bg-emerald-950/20 border-emerald-900/30">
          <CardContent className="py-4 text-center">
            <p className="text-emerald-400 font-semibold text-lg">
              All answers correct!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Cidr_Quiz;
