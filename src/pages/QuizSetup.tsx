import { Star, AlertTriangle } from "lucide-react";
import { CATEGORIES, TOPIC_LOOKUP, MIXED_TOTAL, PRESET_COUNTS, DIFFICULTIES } from "./quiz-data";
import type { QuizEngine } from "./useQuizEngine";

export default function QuizSetup({ engine }: { engine: QuizEngine }) {
  const {
    selectedTopicKey,
    setSelectedTopicKey,
    selectedTopicKeys,
    setSelectedTopicKeys,
    selectedDifficulty,
    setSelectedDifficulty,
    countMode,
    setCountMode,
    customCount,
    setCustomCount,
    getFilteredPool,
    countByDifficulty,
    maxQuestions,
    questionCount,
    canStart,
    startQuiz,
  } = engine;

  return (
    <div className="relative z-10 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Mixed Quiz card */}
      <button
        onClick={() => {
          setSelectedTopicKey("mixed");
          setSelectedTopicKeys(new Set());
        }}
        className={`w-full p-5 rounded-xl border-2 text-left transition-all ${
          selectedTopicKey === "mixed"
            ? "border-cyan-500 bg-cyan-500/10"
            : "border-cyan-500/30 bg-cyan-950/20 hover:border-cyan-500/60"
        }`}
      >
        <div className="flex items-center gap-2 mb-1">
          <Star className="w-5 h-5 text-cyan-400" />
          <span className="font-semibold text-cyan-300 text-base">
            Mixed Quiz
          </span>
        </div>
        <p className="text-xs text-slate-400">
          Combines questions from all CCNA topics
        </p>
        <p className="text-xs text-cyan-500 mt-1">
          {MIXED_TOTAL} questions available
        </p>
      </button>

      {/* Category sections */}
      {CATEGORIES.map((cat) => (
        <div key={cat.name}>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-3">
            {cat.name}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {cat.topics.map((topic) => {
              const count = TOPIC_LOOKUP[topic.key]?.length ?? 0;
              const isSelected = selectedTopicKey === "mixed"
                ? false
                : selectedTopicKeys.has(topic.key);
              return (
                <button
                  key={topic.key}
                  onClick={() => {
                    setSelectedTopicKey(null);
                    setSelectedTopicKeys((prev) => {
                      const next = new Set(prev);
                      if (next.has(topic.key)) {
                        next.delete(topic.key);
                      } else {
                        next.add(topic.key);
                      }
                      return next;
                    });
                  }}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    isSelected
                      ? "border-cyan-500 bg-cyan-500/10"
                      : "border-slate-800 bg-slate-950/60 hover:border-slate-600"
                  }`}
                >
                  <p className="font-medium text-sm text-slate-200">
                    {topic.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {count} questions
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {/* Difficulty filter */}
      <div className="pt-4 border-t border-slate-800">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
          Difficulty Level
        </p>
        <div className="flex flex-wrap items-center gap-3">
          {DIFFICULTIES.map((d) => {
            const available = countByDifficulty(d);
            const isSelected = selectedDifficulty === d;
            const disabled = (!selectedTopicKey && selectedTopicKeys.size === 0) || available === 0;
            return (
              <button
                key={d}
                disabled={disabled}
                onClick={() => setSelectedDifficulty(d)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${
                  isSelected && !disabled
                    ? d === "all"
                      ? "border-cyan-500 bg-cyan-500/10 text-cyan-300"
                      : d === "easy"
                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-300"
                        : d === "medium"
                          ? "border-amber-500 bg-amber-500/10 text-amber-300"
                          : "border-red-500 bg-red-500/10 text-red-300"
                    : disabled
                      ? "border-slate-800 bg-slate-950/30 text-slate-700 cursor-not-allowed"
                      : "border-slate-700 bg-slate-950/60 text-slate-400 hover:border-slate-500"
                }`}
              >
                {d === "all" ? "All" : d.charAt(0).toUpperCase() + d.slice(1)}
                {(selectedTopicKey || selectedTopicKeys.size > 0) && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({available})
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question count picker */}
      <div className="pt-4 border-t border-slate-800">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
          Number of Questions
          {(selectedTopicKey || selectedTopicKeys.size > 0) && (
            <span className="text-slate-600 font-normal normal-case ml-2">
              (max: {maxQuestions})
            </span>
          )}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          {PRESET_COUNTS.map((n) => {
            const strN = String(n) as "5" | "10" | "20";
            const disabled = n > maxQuestions;
            return (
              <button
                key={n}
                disabled={(!selectedTopicKey && selectedTopicKeys.size === 0) || disabled}
                onClick={() => {
                  setCountMode(strN);
                  setCustomCount("");
                }}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${
                  countMode === strN && !disabled
                    ? "border-cyan-500 bg-cyan-500/10 text-cyan-300"
                    : disabled
                      ? "border-slate-800 bg-slate-950/30 text-slate-700 cursor-not-allowed"
                      : "border-slate-700 bg-slate-950/60 text-slate-400 hover:border-slate-500"
                }`}
              >
                {n}
              </button>
            );
          })}
          <div className="relative">
            <input
              type="text"
              inputMode="numeric"
              placeholder="Custom"
              value={customCount}
              onChange={(e) => {
                setCustomCount(e.target.value);
                setCountMode("custom");
              }}
              disabled={!selectedTopicKey && selectedTopicKeys.size === 0}
              className={`w-24 bg-slate-950 border-2 rounded-xl px-3 py-2.5 text-sm font-mono text-center outline-none transition-all ${
                countMode === "custom"
                  ? "border-cyan-500 ring-1 ring-cyan-500/20"
                  : "border-slate-700 text-slate-400"
              }`}
            />
          </div>
        </div>
        {countMode === "custom" &&
          customCount.trim() !== "" &&
          (questionCount < 1 || questionCount > maxQuestions) && (
            <p className="text-xs text-red-400 mt-2 flex items-center gap-1">
              <AlertTriangle size={12} />
              Enter a number between 1 and {maxQuestions}
            </p>
          )}
      </div>

      {/* Start button */}
      <button
        onClick={startQuiz}
        disabled={!canStart}
        className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-cyan-500/25 disabled:shadow-none"
      >
        {selectedTopicKey === null && selectedTopicKeys.size === 0
          ? "Select a Topic to Begin"
          : `Start ${questionCount}-Question Quiz`}
      </button>
    </div>
  );
}
