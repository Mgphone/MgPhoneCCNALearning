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
      <header className="py-6 sm:py-8 border-b border-slate-900 bg-slate-950 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 flex items-center gap-4">
          <Link
            to="/hands-on"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all shrink-0"
          >
            <ArrowLeft size={20} />
          </Link>
          <div className="text-center flex-1 pr-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400">
              {engine.phase === "setup"
                ? "CCNA Quiz"
                : engine.phase === "playing"
                  ? "Knowledge Check"
                  : "Quiz Complete"}
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              {engine.phase === "setup"
                ? "Select a topic and question count to begin"
                : engine.phase === "playing" && (engine.selectedTopicKey || engine.selectedTopicKeys.size > 0)
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
          {engine.phase === "playing" && engine.sessionQuestions.length > 0 && <QuizPlaying engine={engine} />}
          {engine.phase === "results" && <QuizResults engine={engine} />}
        </div>
      </main>
    </div>
  );
}
