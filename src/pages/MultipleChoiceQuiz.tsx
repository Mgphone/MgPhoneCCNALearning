import { useEffect, useState, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, Target, BarChart3 } from "lucide-react";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useQuizEngine } from "./useQuizEngine";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
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
  const { userId } = useAuth();
  const savedRef = useRef(false);

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
        </div>
      </main>
    </div>
  );
}
