import { useEffect, useState, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, Target, BarChart3, LogIn, AlertTriangle, LogOut } from "lucide-react";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useQuizEngine } from "./useQuizEngine";
import { useQuizLeaveGuard } from "@/hooks/useQuizLeaveGuard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import type { QuizQuestion } from "@/data/quiz/types";
import QuizSetup from "./QuizSetup";
import QuizPlaying from "./QuizPlaying";
import QuizResults from "./QuizResults";

export default function MultipleChoiceQuiz() {
  const [searchParams] = useSearchParams();
  const retakeId = searchParams.get("retake");

  const [seedQuestions, setSeedQuestions] = useState<QuizQuestion[] | undefined>();
  const [seedTopic, setSeedTopic] = useState<string | undefined>();
  const [retakeLoading, setRetakeLoading] = useState(!!retakeId);

  useEffect(() => {
    if (!retakeId) return;
    supabase
      .from("records")
      .select("data")
      .eq("id", retakeId)
      .single()
      .then(({ data, error }) => {
        if (!error && data?.data) {
          const qs = data.data.questions?.map((q: any) => ({
            id: q.id,
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswer,
            difficulty: q.difficulty,
            explanation: q.explanation,
          })) ?? [];
          setSeedQuestions(qs);
          setSeedTopic(data.data.topic || "Retake Quiz");
        }
        setRetakeLoading(false);
      });
  }, [retakeId]);

  const engine = useQuizEngine(seedQuestions, seedTopic);
  const { userId, isAuthenticated, openAuth } = useAuth();
  const savedRef = useRef(false);
  const blocker = useQuizLeaveGuard(engine.phase === "playing");

  useEffect(() => {
    if (engine.phase !== "results" || !userId || savedRef.current) return;
    savedRef.current = true;

    const questions = engine.sessionQuestions.map(q => ({
      id: q.id,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      difficulty: q.difficulty,
      explanation: q.explanation,
      userAnswer: engine.answers[q.id],
      isCorrect: engine.answers[q.id] === q.correctAnswer,
    }));

    supabase.from("records").insert({
      user_id: userId,
      record_type: "quiz_result",
      data: {
        topic: engine.getSelectedTopicLabel(),
        score: engine.correctCount,
        total: engine.totalQ,
        percentage: engine.percentage,
        passed: engine.passed,
        time: engine.elapsedSeconds,
        questions,
        completedAt: new Date().toISOString(),
      },
    }).then(({ error }) => {
      if (error) console.error("Failed to save quiz result:", error);
    });
  }, [engine.phase, userId, engine]);

  if (retakeLoading) {
    return <LoadingSpinner message="Loading quiz questions..." />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <header className="sticky top-0 z-10 border-b border-slate-900 bg-slate-950 py-2 sm:py-5">
        <div className="mx-auto flex max-w-3xl items-center gap-2 sm:gap-3 px-4">
          <Link
            to={retakeId ? "/quiz-history" : "/hands-on"}
            className="shrink-0 rounded-lg sm:rounded-xl border border-slate-800 bg-slate-900 p-1 sm:p-1.5 text-slate-400 transition-all hover:border-slate-600 hover:text-white"
          >
            <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
          </Link>
          <Link
            to="/quiz-history"
            className="shrink-0 rounded-lg sm:rounded-xl border border-slate-800 bg-slate-900 p-1 sm:p-1.5 text-amber-400 transition-all hover:border-amber-500/50 hover:text-amber-300"
            title="Quiz History"
          >
            <BarChart3 size={16} className="sm:w-[18px] sm:h-[18px]" />
          </Link>

          <div className="flex-1 pr-8 sm:pr-10 text-center">
            <h1 className="text-sm sm:text-lg md:text-xl font-semibold text-cyan-400">
              {seedQuestions ? "Retake Quiz" : engine.phase === "setup"
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

          {engine.phase === "setup" && !seedQuestions && <QuizSetup engine={engine} />}
          {engine.phase === "playing" && engine.sessionQuestions.length > 0 && (
            <QuizPlaying engine={engine} />
          )}
          {engine.phase === "results" && <QuizResults engine={engine} />}
          {engine.phase === "results" && !isAuthenticated && (
            <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-center">
              <p className="text-amber-300 text-sm font-medium mb-3">
                Sign in to save your quiz results and track your progress over time.
              </p>
              <button
                onClick={openAuth}
                className="inline-flex items-center gap-2 px-5 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-sm font-semibold transition-all"
              >
                <LogIn size={15} />
                Sign In
              </button>
            </div>
          )}
        </div>
      </main>

      <Dialog
        open={blocker.state === "blocked"}
        onOpenChange={(open) => {
          if (!open && blocker.state === "blocked") blocker.reset();
        }}
      >
        <DialogContent className="bg-slate-900 border-slate-700 text-slate-200 max-w-sm sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-slate-100">
              <AlertTriangle size={18} className="text-amber-400" />
              Leave quiz?
            </DialogTitle>
            <DialogDescription className="text-slate-400 leading-relaxed">
              You have a quiz in progress. If you leave now, your current
              progress and answers will be lost.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-3">
            <button
              onClick={() => {
                if (blocker.state === "blocked") blocker.reset();
              }}
              className="w-full sm:w-auto rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:bg-slate-700"
            >
              Keep Playing
            </button>
            <button
              onClick={() => {
                if (blocker.state === "blocked") blocker.proceed();
              }}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-red-500"
            >
              <LogOut size={16} />
              Leave Quiz
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
