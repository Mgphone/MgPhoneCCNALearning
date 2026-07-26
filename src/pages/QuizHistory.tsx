import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, Clock, Target, Loader2, CheckCircle, XCircle, BarChart3, RotateCcw, Trash2, ChevronDown, LogIn } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { LoadingSpinner } from "@/components/LoadingSpinner";

const PAGE_SIZE = 10;

interface QuizResultData {
  topic: string;
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  time: number;
  questions: {
    id: number;
    question: string;
    options: [string, string, string, string];
    correctAnswer: number;
    difficulty: string;
    explanation: string;
    userAnswer: number | undefined;
    isCorrect: boolean;
  }[];
  completedAt: string;
}

interface QuizRow {
  id: string;
  data: QuizResultData;
  updated_at: string;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s}s`;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function QuizHistory() {
  const navigate = useNavigate();
  const { userId, isAuthenticated, openAuth } = useAuth();
  const [quizzes, setQuizzes] = useState<QuizRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const hasMore = quizzes.length < totalCount;
  const remaining = totalCount - quizzes.length;

  const fetchPage = useCallback(async (pageNum: number, append: boolean) => {
    if (!userId) return;
    const from = pageNum * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    const { data, error, count } = await supabase
      .from("records")
      .select("id, data, updated_at", { count: "exact" })
      .eq("user_id", userId)
      .eq("record_type", "quiz_result")
      .order("updated_at", { ascending: false })
      .range(from, to);
    if (error) {
      console.error("QuizHistory fetch error:", error);
    } else {
      if (count !== null) setTotalCount(count);
      setQuizzes(prev => append ? [...prev, ...(data as QuizRow[])] : (data as QuizRow[]));
    }
  }, [userId]);

  useEffect(() => {
    setLoading(true);
    setPage(0);
    fetchPage(0, false).then(() => setLoading(false));
  }, [fetchPage]);

  const loadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setLoadingMore(true);
    await fetchPage(nextPage, true);
    setLoadingMore(false);
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this quiz result?")) return;
    supabase.from("records").delete().eq("id", id).then(() => {
      setQuizzes(prev => prev.filter(q => q.id !== id));
      setTotalCount(prev => prev - 1);
      if (expandedId === id) setExpandedId(null);
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 p-4 sm:p-6 lg:p-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate('/')}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center gap-3">
              <div className="bg-cyan-500/10 p-2 rounded-lg">
                <BarChart3 className="text-cyan-400" size={24} />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">Quiz History</h1>
                <p className="text-xs sm:text-sm text-slate-500">Sign in to track your results</p>
              </div>
            </div>
          </div>
          <div className="text-center py-20">
            <Target size={48} className="mx-auto mb-4 text-slate-700" />
            <p className="text-slate-400 text-sm mb-6">Sign in to view your quiz history</p>
            <button
              onClick={openAuth}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-semibold transition-all"
            >
              <LogIn size={16} />
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return <LoadingSpinner message="Loading quiz history..." />;
  }

  return (
    <div className="min-h-screen bg-slate-950 p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/')}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-cyan-500/10 p-2 rounded-lg">
              <BarChart3 className="text-cyan-400" size={24} />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Quiz History
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                {totalCount} quiz{totalCount !== 1 ? "zes" : ""} completed
              </p>
            </div>
          </div>
        </div>

        {quizzes.length === 0 ? (
          <div className="text-center py-20">
            <Target size={48} className="mx-auto mb-4 text-slate-700" />
            <p className="text-slate-500 text-sm">No quizzes completed yet.</p>
            <button
              onClick={() => navigate("/hands-on/quiz")}
              className="mt-4 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-semibold transition-all"
            >
              Take a Quiz
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {quizzes.map((quiz) => {
              const d = quiz.data;
              const isExpanded = expandedId === quiz.id;
              return (
                <div
                  key={quiz.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all hover:border-slate-700"
                >
                  {/* Summary row */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : quiz.id)}
                    className="w-full text-left p-5 flex items-center gap-4"
                  >
                    <div
                      className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                        d.passed
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      <Trophy size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-sm font-bold text-white truncate">
                          {d.topic || "Untitled Quiz"}
                        </span>
                        <span
                          className={`shrink-0 text-[10px] px-2 py-0.5 rounded-full font-bold ${
                            d.passed
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : "bg-red-500/10 text-red-400 border border-red-500/20"
                          }`}
                        >
                          {d.passed ? "PASS" : "FAIL"}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span>
                          {d.score}/{d.total} ({d.percentage}%)
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {formatTime(d.time)}
                        </span>
                        <span>{formatDate(d.completedAt)}</span>
                      </div>
                    </div>
                    <div className="shrink-0 w-16">
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            d.passed ? "bg-emerald-500" : "bg-red-500"
                          }`}
                          style={{ width: `${d.percentage}%` }}
                        />
                      </div>
                    </div>
                  </button>

                  {/* Expanded detail */}
                  {isExpanded && (
                    <div className="px-5 pb-5 border-t border-slate-800 pt-4 space-y-4">
                      {/* Action buttons */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => navigate(`/hands-on/quiz?retake=${quiz.id}`)}
                          className="flex items-center gap-1.5 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-bold transition-all"
                        >
                          <RotateCcw size={14} />
                          Retake
                        </button>
                        <button
                          onClick={() => handleDelete(quiz.id)}
                          className="flex items-center gap-1.5 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl text-xs font-bold transition-all"
                        >
                          <Trash2 size={14} />
                          Delete
                        </button>
                      </div>

                      {d.questions.map((q, i) => {
                        const isUnanswered = q.userAnswer === undefined;
                        return (
                          <div key={q.id} className="bg-slate-950 rounded-xl p-4 space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-slate-500 font-mono">#{i + 1}</span>
                              <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${
                                q.difficulty === "easy"
                                  ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                                  : q.difficulty === "medium"
                                    ? "text-amber-400 bg-amber-500/10 border-amber-500/20"
                                    : "text-red-400 bg-red-500/10 border-red-500/20"
                              }`}>
                                {q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}
                              </span>
                            </div>
                            <p className="text-sm font-medium text-slate-200">{q.question}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                              {q.options.map((opt, oi) => {
                                const isUser = oi === q.userAnswer;
                                const isCorrect = oi === q.correctAnswer;
                                let cls = "bg-slate-900 border-slate-700 text-slate-400";
                                if (isUser && !isUnanswered) {
                                  cls = isCorrect
                                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                                    : "bg-red-500/10 border-red-500/30 text-red-300";
                                } else if (isCorrect) {
                                  cls = "bg-emerald-500/10 border-emerald-500/30 text-emerald-300";
                                }
                                return (
                                  <div
                                    key={oi}
                                    className={`text-xs px-3 py-2 rounded-lg border ${cls}`}
                                  >
                                    <span className="font-mono mr-1.5 opacity-50">
                                      {String.fromCharCode(65 + oi)}.
                                    </span>
                                    {opt}
                                    {isCorrect && !isUnanswered && (
                                      <CheckCircle size={12} className="inline ml-1 text-emerald-400" />
                                    )}
                                    {isUser && !isCorrect && !isUnanswered && (
                                      <XCircle size={12} className="inline ml-1 text-red-400" />
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                            {isUnanswered && (
                              <p className="text-xs text-amber-400 font-medium">Not answered</p>
                            )}
                            <p className="text-xs text-slate-500 leading-relaxed pt-1 border-t border-slate-800/50">
                              {q.explanation}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Load More */}
            {hasMore && (
              <div className="text-center pt-2 pb-4">
                <button
                  onClick={loadMore}
                  disabled={loadingMore}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 rounded-xl text-sm font-bold transition-all disabled:opacity-50"
                >
                  {loadingMore ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                  Load More ({remaining} remaining)
                </button>
              </div>
            )}

            {!hasMore && totalCount > PAGE_SIZE && (
              <p className="text-center text-xs text-slate-600 pt-2 pb-4">
                Showing all {totalCount} quiz{totalCount !== 1 ? "zes" : ""}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
