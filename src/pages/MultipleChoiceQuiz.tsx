import { Link } from "react-router-dom";
import { ArrowLeft, Target } from "lucide-react";
import { useQuizEngine } from "./useQuizEngine";
import QuizSetup from "./QuizSetup";
import QuizPlaying from "./QuizPlaying";
import QuizResults from "./QuizResults";

export default function MultipleChoiceQuiz() {
  const engine = useQuizEngine();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <header className="sticky top-0 z-10 border-b border-slate-900 bg-slate-950 py-2 sm:py-5">
        <div className="mx-auto flex max-w-3xl items-center gap-2 sm:gap-3 px-4">
          <Link
            to="/hands-on"
            className="shrink-0 rounded-lg sm:rounded-xl border border-slate-800 bg-slate-900 p-1 sm:p-1.5 text-slate-400 transition-all hover:border-slate-600 hover:text-white"
          >
            <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
          </Link>

          <div className="flex-1 pr-8 sm:pr-10 text-center">
            <h1 className="text-sm sm:text-lg md:text-xl font-semibold text-cyan-400">
              {engine.phase === "setup"
                ? "CCNA Quiz"
                : engine.phase === "playing"
                  ? "Knowledge Check"
                  : "Quiz Complete"}
            </h1>

            <p className="text-[9px] sm:text-xs text-slate-500">
              {engine.phase === "setup"
                ? "Select a topic and question count to begin"
                : engine.phase === "playing" &&
                    (engine.selectedTopicKey ||
                      engine.selectedTopicKeys.size > 0)
                  ? engine.getSelectedTopicLabel()
                  : "Review your results below"}
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Target size={200} />
          </div>

          {engine.phase === "setup" && <QuizSetup engine={engine} />}
          {engine.phase === "playing" && engine.sessionQuestions.length > 0 && (
            <QuizPlaying engine={engine} />
          )}
          {engine.phase === "results" && <QuizResults engine={engine} />}
        </div>
      </main>
    </div>
  );
}
