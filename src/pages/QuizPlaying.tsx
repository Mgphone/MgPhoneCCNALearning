import {
  BookOpen,
  CheckCircle,
  XCircle,
  HelpCircle,
  Clock,
  Flag,
} from "lucide-react";
import { formatElapsedTime, type QuizEngine } from "./useQuizEngine";

export default function QuizPlaying({ engine }: { engine: QuizEngine }) {
  const {
    sessionQuestions,
    currentIndex,
    selectedAnswer,
    isSubmitted,
    isRevealed,
    score,
    elapsedSeconds,
    answers,
    flaggedIds,
    toggleFlag,
    handleAnswerClick,
    submitAnswer,
    giveUp,
    nextQuestion,
  } = engine;

  return (
    <div className="relative z-10 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <div className="flex items-center justify-between text-sm font-medium text-slate-400 mb-4">
          <span className="flex items-center gap-2">
            <BookOpen size={16} className="text-cyan-500" />
            Question {currentIndex + 1} of {sessionQuestions.length}
          </span>
          <span className="flex items-center gap-2">
            {(() => {
              const d = sessionQuestions[currentIndex]?.difficulty;
              if (!d) return null;
              const colors: Record<string, string> = {
                easy: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
                medium: "text-amber-400 bg-amber-500/10 border-amber-500/20",
                hard: "text-red-400 bg-red-500/10 border-red-500/20",
              };
              return (
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full border font-medium tracking-wide ${
                    colors[d] ?? ""
                  }`}
                >
                  {d.charAt(0).toUpperCase() + d.slice(1)}
                </span>
              );
            })()}
            <span className="text-slate-400 flex items-center gap-1.5 text-xs font-mono">
              <Clock size={14} className="text-cyan-500" />
              {formatElapsedTime(elapsedSeconds)}
            </span>
            <span className="text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Score: {score}
            </span>
            <button
              onClick={() => toggleFlag(sessionQuestions[currentIndex].id)}
              className="rounded-lg border border-slate-700 bg-slate-800 p-1.5 text-slate-500 transition-all hover:border-amber-500/50 hover:text-amber-400"
              title={flaggedIds.has(sessionQuestions[currentIndex].id) ? "Unflag" : "Flag for review"}
            >
              <Flag
                size={16}
                className={flaggedIds.has(sessionQuestions[currentIndex].id) ? "text-amber-400" : ""}
                fill={flaggedIds.has(sessionQuestions[currentIndex].id) ? "currentColor" : "none"}
              />
            </button>
          </span>
        </div>
        <div className="w-full bg-slate-950 rounded-full h-2 border border-slate-800">
          <div
            className="bg-cyan-500 h-2 rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${(currentIndex / sessionQuestions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 leading-tight">
        {sessionQuestions[currentIndex].question}
      </h3>

      <div className="space-y-3">
        {sessionQuestions[currentIndex].options.map((option, index) => {
          const optionSelected = selectedAnswer === index;
          const isCorrect =
            index === sessionQuestions[currentIndex].correctAnswer;

          let styleClasses =
            "border-slate-700 bg-slate-950/60 hover:bg-slate-800 hover:border-slate-500 text-slate-300";

          if (isSubmitted) {
            if (isCorrect) {
              styleClasses =
                "border-emerald-500/50 bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]";
            } else if (optionSelected && !isCorrect) {
              styleClasses = "border-red-500/50 bg-red-500/10 text-red-300";
            } else {
              styleClasses =
                "border-slate-800 bg-slate-950/30 text-slate-600 opacity-50";
            }
          } else if (optionSelected) {
            styleClasses =
              "border-cyan-500 bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-500/50";
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              disabled={isSubmitted}
              className={`w-full text-left p-4 sm:p-5 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${styleClasses}`}
            >
              <span className="text-sm sm:text-base font-medium">{option}</span>
              <div className="shrink-0 ml-4">
                {!isSubmitted && optionSelected && (
                  <div className="w-5 h-5 rounded-full bg-cyan-500 animate-in zoom-in duration-200" />
                )}
                {!isSubmitted && !optionSelected && (
                  <div className="w-5 h-5 rounded-full border-2 border-slate-600 group-hover:border-slate-500 transition-colors" />
                )}
                {isSubmitted && isCorrect && (
                  <CheckCircle size={24} className="text-emerald-500" />
                )}
                {isSubmitted && optionSelected && !isCorrect && (
                  <XCircle size={24} className="text-red-500" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="pt-4 border-t border-slate-800">
        {!isSubmitted ? (
          <div className="flex flex-wrap gap-3 justify-start ">
            <button
              onClick={giveUp}
              // className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-semibold transition-all border border-slate-700"
              className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:bg-slate-700"
            >
              <HelpCircle size={16} className="mr-2 inline" />
              Give Up
            </button>
            <button
              onClick={submitAnswer}
              disabled={selectedAnswer === null}
              className="w-full sm:w-auto px-8 py-3.5 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-cyan-500/25 disabled:shadow-none"
            >
              Check Answer
            </button>
          </div>
        ) : (
          <div className="space-y-6 animate-in slide-in-from-top-4 fade-in duration-300">
            <div
              className={`p-5 rounded-xl border-2 ${
                isRevealed
                  ? "bg-amber-950/20 border-amber-900/30"
                  : selectedAnswer ===
                      sessionQuestions[currentIndex].correctAnswer
                    ? "bg-emerald-500/5 border-emerald-500/20"
                    : "bg-slate-950 border-slate-800"
              }`}
            >
              <h4
                className={`text-xs uppercase font-bold tracking-wider mb-2 ${
                  isRevealed
                    ? "text-amber-400"
                    : selectedAnswer ===
                        sessionQuestions[currentIndex].correctAnswer
                      ? "text-emerald-500"
                      : "text-slate-500"
                }`}
              >
                {isRevealed
                  ? "Answer Revealed"
                  : selectedAnswer ===
                      sessionQuestions[currentIndex].correctAnswer
                    ? "Correct!"
                    : "Incorrect"}
              </h4>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {sessionQuestions[currentIndex].explanation}
              </p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={nextQuestion}
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-100 hover:bg-white text-slate-900 rounded-xl font-bold transition-all shadow-lg"
              >
                {currentIndex + 1 === sessionQuestions.length
                  ? "View Final Results"
                  : "Next Question →"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
