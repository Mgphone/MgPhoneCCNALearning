import {
  Trophy,
  RotateCcw,
  BookOpen,
  ArrowLeft,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { formatElapsedTime, type QuizEngine } from "./useQuizEngine";

export default function QuizResults({ engine }: { engine: QuizEngine }) {
  const {
    totalQ,
    answeredIds,
    correctCount,
    incorrectCount,
    unansweredCount,
    percentage,
    passed,
    barWidth,
    sessionQuestions,
    answers,
    elapsedSeconds,
    getSelectedTopicLabel,
    startQuiz,
    setSelectedTopicKey,
    setSelectedTopicKeys,
    setPhase,
  } = engine;

  return (
    <div className="relative z-10 animate-in zoom-in-95 duration-500">
      {/* Summary */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-cyan-500/10 border-4 border-cyan-500/30 mb-4 relative">
          <Trophy size={48} className="text-cyan-400 absolute" />
          <div className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Quiz Complete!
        </h2>
        <div className="inline-flex items-baseline gap-2 text-lg text-slate-400 mb-1">
          Score:
          <span className="text-3xl font-bold text-emerald-400">
            {correctCount}
          </span>
          <span className="text-slate-500">/ {totalQ}</span>
        </div>
        <p className="text-slate-500 text-sm">
          Topic: {getSelectedTopicLabel() || "—"}
        </p>
        <p className="text-slate-500 text-sm mt-1">
          Time: {formatElapsedTime(elapsedSeconds)}
        </p>
      </div>

      {/* Percentage + Pass/Fail */}
      <div className="text-center mb-8">
        <div className="flex flex-col items-center gap-3">
          <span className="text-5xl font-black tracking-tight">
            <span
              className={passed ? "text-emerald-400" : "text-red-400"}
            >
              {percentage}%
            </span>
          </span>
          <span
            className={`inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold border-2 ${
              passed
                ? "bg-emerald-950/30 border-emerald-500/30 text-emerald-400"
                : "bg-red-950/30 border-red-500/30 text-red-400"
            }`}
          >
            {passed ? "✅ PASS" : "❌ FAIL"}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="w-full bg-slate-950 rounded-full h-3 border border-slate-800 overflow-hidden">
          <div
            className={`h-3 rounded-full transition-all duration-1000 ease-out ${
              passed ? "bg-emerald-500" : "bg-red-500"
            }`}
            style={{ width: `${barWidth}%` }}
          />
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-slate-950/80 rounded-xl border border-slate-800 p-5 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider">
              Answered
            </p>
            <p className="text-xl font-bold text-slate-200">
              {answeredIds.length}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider">
              Correct
            </p>
            <p className="text-xl font-bold text-emerald-400">
              {correctCount}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider">
              Incorrect
            </p>
            <p className="text-xl font-bold text-red-400">
              {incorrectCount}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider">
              Unanswered
            </p>
            <p className="text-xl font-bold text-amber-400">
              {unansweredCount}
            </p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between text-sm text-slate-500">
          <span>Accuracy</span>
          <span className="font-semibold text-slate-300">
            {totalQ > 0 ? percentage : 0}%
          </span>
        </div>
      </div>

      {/* Performance message */}
      <div className="max-w-xs mx-auto bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center mb-8">
        <p className="text-sm font-medium text-slate-300">
          {correctCount === totalQ && totalQ > 0
            ? "Perfect score! Outstanding work."
            : passed
              ? "Great job! You have a solid understanding."
              : "Keep studying! Review the topics below and try again."}
        </p>
      </div>

      {/* Question Review */}
      <div className="space-y-4 mb-8">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Question Review
        </h3>
        {sessionQuestions.map((q, idx) => {
          const userAns = answers[q.id];
          const isCorrect = userAns === q.correctAnswer;
          const isUnanswered = userAns === undefined;
          return (
            <div
              key={q.id}
              className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-3"
            >
              <div className="flex items-center gap-2 mb-1">
                <p className="text-xs text-slate-500 font-mono">
                  #{idx + 1}
                </p>
                {(() => {
                  const d = q.difficulty;
                  const colors: Record<string, string> = {
                    easy: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
                    medium:
                      "text-amber-400 bg-amber-500/10 border-amber-500/20",
                    hard: "text-red-400 bg-red-500/10 border-red-500/20",
                  };
                  return (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full border font-medium tracking-wide ${
                        colors[d] ?? ""
                      }`}
                    >
                      {d.charAt(0).toUpperCase() + d.slice(1)}
                    </span>
                  );
                })()}
              </div>
              <p className="text-sm sm:text-base font-medium text-slate-200 leading-relaxed">
                {q.question}
              </p>
              <div className="space-y-1.5 text-sm">
                <p className="text-slate-400">
                  Your Answer:{" "}
                  {isUnanswered ? (
                    <span className="text-amber-400 font-medium">
                      (Not answered)
                    </span>
                  ) : (
                    <span
                      className={
                        isCorrect
                          ? "text-emerald-400 font-medium"
                          : "text-red-400 font-medium"
                      }
                    >
                      {q.options[userAns]}{" "}
                      {isCorrect ? "✅" : "❌"}
                    </span>
                  )}
                </p>
                <p className="text-slate-400">
                  Correct:{" "}
                  <span className="text-emerald-400 font-medium">
                    {q.options[q.correctAnswer]} ✅
                  </span>
                </p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed pt-1 border-t border-slate-800/50">
                {q.explanation}
              </p>
            </div>
          );
        })}
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3 justify-center pt-4 border-t border-slate-800">
        <button
          onClick={startQuiz}
          className="flex items-center gap-2 px-6 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-semibold transition-all shadow-lg"
        >
          <RotateCcw size={18} />
          Practice Again
        </button>
        <button
          onClick={() => {
            setSelectedTopicKey(null);
            setSelectedTopicKeys(new Set());
            setPhase("setup");
          }}
          className="flex items-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 rounded-xl font-semibold transition-all"
        >
          <BookOpen size={18} />
          Choose Topic
        </button>
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 rounded-xl font-semibold transition-all"
        >
          <ArrowLeft size={18} />
          Go Home
        </Link>
      </div>
    </div>
  );
}
