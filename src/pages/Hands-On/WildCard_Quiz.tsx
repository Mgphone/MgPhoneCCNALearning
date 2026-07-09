import React, { useState, useEffect } from "react";
import { CheckCircle2, XCircle, EyeOff, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { calculateIpDetails, type IpDetails } from "@/lib/calculateIpDetails";

type Difficulty = "easy" | "medium" | "expert";
type QuestionType =
  | "ip-to-wildcard"
  | "subnet-to-wildcard"
  | "wildcard-to-subnet";

const CIDR_RANGES: Record<Difficulty, number[]> = {
  easy: [8, 16, 24],
  medium: [20, 21, 22, 23, 24, 25, 26, 27, 28],
  expert: Array.from({ length: 33 }, (_, i) => i),
};

const QUESTION_TYPES: QuestionType[] = [
  "ip-to-wildcard",
  "subnet-to-wildcard",
  "wildcard-to-subnet",
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
    networkInt =
      (Math.floor(Math.random() * 0x100000000) & (~0 << (32 - cidr))) >>> 0;
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

interface QuestionConfig {
  displayLabel: string;
  displayValue: string;
  inputLabel: string;
  inputPlaceholder: string;
  correctAnswer: string;
}

function buildQuestion(
  qType: QuestionType,
  ip: string,
  cidr: string,
  details: IpDetails,
): QuestionConfig {
  switch (qType) {
    case "ip-to-wildcard":
      return {
        displayLabel: "What is the wildcard mask of:",
        displayValue: `${ip}/${cidr}`,
        inputLabel: "Wildcard Mask",
        inputPlaceholder: "0.0.0.255",
        correctAnswer: details.wildcard,
      };
    case "subnet-to-wildcard":
      return {
        displayLabel: "What is the wildcard mask corresponding to:",
        displayValue: details.subnetMask,
        inputLabel: "Wildcard Mask",
        inputPlaceholder: "0.0.0.255",
        correctAnswer: details.wildcard,
      };
    case "wildcard-to-subnet":
      return {
        displayLabel: "What is the subnet mask corresponding to:",
        displayValue: details.wildcard,
        inputLabel: "Subnet Mask",
        inputPlaceholder: "255.255.255.0",
        correctAnswer: details.subnetMask,
      };
  }
}

const WildCard_Quiz: React.FC = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [questionType, setQuestionType] =
    useState<QuestionType>("ip-to-wildcard");
  const [questionIp, setQuestionIp] = useState("");
  const [questionCidr, setQuestionCidr] = useState("");
  const [config, setConfig] = useState<QuestionConfig | null>(null);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState<boolean | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [checked, setChecked] = useState(false);

  const generateQuestion = (diff: Difficulty) => {
    const cidr = pickRandom(CIDR_RANGES[diff]);
    const ip = generateRandomIp(cidr);
    const details = calculateIpDetails(ip, String(cidr)) as IpDetails;
    const qType = pickRandom(QUESTION_TYPES);

    setQuestionIp(ip);
    setQuestionCidr(String(cidr));
    setQuestionType(qType);
    setConfig(buildQuestion(qType, ip, String(cidr), details));
    setUserInput("");
    setResult(null);
    setRevealed(false);
    setChecked(false);
  };

  useEffect(() => {
    generateQuestion(difficulty);
  }, [difficulty]);

  const handleCheck = () => {
    if (!config) return;
    setResult(userInput.trim() === config.correctAnswer);
    setChecked(true);
    setRevealed(false);
  };

  const handleReveal = () => {
    if (!config) return;
    setUserInput(config.correctAnswer);
    setResult(true);
    setRevealed(true);
    setChecked(true);
  };

  const handleNewQuestion = () => {
    generateQuestion(difficulty);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !revealed) {
      handleCheck();
    }
  };

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
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-transparent",
            )}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Question card */}
      {config && (
        <Card className="bg-slate-950/50 border-slate-800">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm mb-1">{config.displayLabel}</p>
            <p className="text-xl font-mono font-bold text-cyan-400">
              {config.displayValue}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Input field */}
      {config && (
        <div className="space-y-2">
          <label className="text-xs text-slate-500 font-medium uppercase tracking-wider">
            {config.inputLabel}
          </label>
          <div className="relative">
            <Input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={config.inputPlaceholder}
              className={cn(
                "bg-slate-950 border-slate-700 font-mono text-sm pr-10",
                result === true &&
                  "border-emerald-500/50 ring-1 ring-emerald-500/20",
                result === false && "border-red-500/50 ring-1 ring-red-500/20",
              )}
              disabled={revealed}
            />
            {result !== null && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                {result ? (
                  <CheckCircle2 size={16} className="text-emerald-400" />
                ) : (
                  <XCircle size={16} className="text-red-400" />
                )}
              </div>
            )}
          </div>
          {checked && !revealed && (
            <p
              className={cn(
                "text-xs",
                result ? "text-emerald-400" : "text-red-400",
              )}
            >
              {result ? "Correct" : "Incorrect"}
            </p>
          )}
        </div>
      )}

      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Button
          onClick={handleCheck}
          disabled={revealed || userInput.trim() === ""}
          className="bg-cyan-600 hover:bg-cyan-500 text-white"
        >
          <CheckCircle2 size={16} className="mr-2" />
          Check Answer
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
              result ? "text-emerald-400" : "text-red-400",
            )}
          >
            {result ? "Correct" : "Incorrect"}
          </span>
        )}
      </div>

      {/* Correct banner */}
      {checked && result && (
        <Card className="bg-emerald-950/20 border-emerald-900/30">
          <CardContent className="py-4 text-center">
            <p className="text-emerald-400 font-semibold text-lg">Correct!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default WildCard_Quiz;
