import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  XCircle,
  RotateCcw,
  Trophy,
  Target,
} from "lucide-react";

// --- Quiz Data ---
const quizQuestions = [
  {
    id: 1,
    question:
      "Which two values are combined to create a Spanning Tree Bridge ID (BID)?",
    options: [
      "IP Address and MAC Address",
      "Bridge Priority and MAC Address",
      "Bridge Priority and IP Address",
      "Port ID and MAC Address",
    ],
    correctAnswer: 1,
    explanation:
      "The Bridge ID (BID) is an 8-byte field composed of a 2-byte Bridge Priority (which includes the VLAN ID extension) and a 6-byte MAC address.",
  },
  {
    id: 2,
    question: "Which IPv6 address block is reserved for link-local addresses?",
    options: ["2000::/3", "FC00::/7", "FE80::/10", "FF00::/8"],
    correctAnswer: 2,
    explanation:
      "FE80::/10 is the designated block for IPv6 link-local addresses, which are automatically configured and only valid on a single local link.",
  },
  {
    id: 3,
    question:
      "What is the default Spanning Tree priority value for a Cisco switch before any VLAN ID is added?",
    options: ["4096", "8192", "32768", "65536"],
    correctAnswer: 2,
    explanation:
      "The default STP priority is 32768. Because priority increments must be in multiples of 4096, 32768 is the standard default midpoint.",
  },
  {
    id: 4,
    question:
      "Which IEEE standard defines the VLAN tagging protocol used on trunk links?",
    options: ["802.1D", "802.1w", "802.1Q", "802.3ad"],
    correctAnswer: 2,
    explanation:
      "802.1Q is the IEEE standard for VLAN tagging. 802.1D is the original STP, 802.1w is Rapid STP, and 802.3ad is for Link Aggregation (LACP).",
  },
  {
    id: 5,
    question: "In OSPF, what is the default administrative distance?",
    options: ["90", "110", "115", "120"],
    correctAnswer: 1,
    explanation:
      "The default Administrative Distance (AD) for OSPF is 110. EIGRP is 90, IS-IS is 115, and RIP is 120.",
  },
];

export default function MultipleChoiceQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // --- Quiz Logic ---
  const handleAnswerClick = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(index);
  };

  const submitAnswer = () => {
    if (selectedAnswer === null) return;
    setIsAnswerSubmitted(true);
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  const progressPercentage = (currentQuestion / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      {/* Header */}
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
              Knowledge Check
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Networking Fundamentals & Protocols
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Target size={200} />
          </div>

          {!quizFinished ? (
            <div className="relative z-10 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Progress Header */}
              <div>
                <div className="flex items-center justify-between text-sm font-medium text-slate-400 mb-4">
                  <span className="flex items-center gap-2">
                    <BookOpen size={16} className="text-cyan-500" />
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </span>
                  <span className="text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    Score: {score}
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-slate-950 rounded-full h-2 border border-slate-800">
                  <div
                    className="bg-cyan-500 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 leading-tight">
                {quizQuestions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {quizQuestions[currentQuestion].options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect =
                    index === quizQuestions[currentQuestion].correctAnswer;

                  let styleClasses =
                    "border-slate-700 bg-slate-950/60 hover:bg-slate-800 hover:border-slate-500 text-slate-300";

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      styleClasses =
                        "border-emerald-500/50 bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]";
                    } else if (isSelected && !isCorrect) {
                      styleClasses =
                        "border-red-500/50 bg-red-500/10 text-red-300";
                    } else {
                      styleClasses =
                        "border-slate-800 bg-slate-950/30 text-slate-600 opacity-50";
                    }
                  } else if (isSelected) {
                    styleClasses =
                      "border-cyan-500 bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-500/50";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(index)}
                      disabled={isAnswerSubmitted}
                      className={`w-full text-left p-4 sm:p-5 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${styleClasses}`}
                    >
                      <span className="text-sm sm:text-base font-medium">
                        {option}
                      </span>

                      {/* Status Icons */}
                      <div className="shrink-0 ml-4">
                        {!isAnswerSubmitted && isSelected && (
                          <div className="w-5 h-5 rounded-full bg-cyan-500 animate-in zoom-in duration-200"></div>
                        )}
                        {!isAnswerSubmitted && !isSelected && (
                          <div className="w-5 h-5 rounded-full border-2 border-slate-600 group-hover:border-slate-500 transition-colors"></div>
                        )}
                        {isAnswerSubmitted && isCorrect && (
                          <CheckCircle size={24} className="text-emerald-500" />
                        )}
                        {isAnswerSubmitted && isSelected && !isCorrect && (
                          <XCircle size={24} className="text-red-500" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Action Area & Explanation */}
              <div className="pt-4 border-t border-slate-800">
                {!isAnswerSubmitted ? (
                  <div className="flex justify-end">
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
                      className={`p-5 rounded-xl border-2 ${selectedAnswer === quizQuestions[currentQuestion].correctAnswer ? "bg-emerald-500/5 border-emerald-500/20" : "bg-slate-950 border-slate-800"}`}
                    >
                      <h4
                        className={`text-xs uppercase font-bold tracking-wider mb-2 ${selectedAnswer === quizQuestions[currentQuestion].correctAnswer ? "text-emerald-500" : "text-slate-500"}`}
                      >
                        {selectedAnswer ===
                        quizQuestions[currentQuestion].correctAnswer
                          ? "Correct!"
                          : "Explanation"}
                      </h4>
                      <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                        {quizQuestions[currentQuestion].explanation}
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={nextQuestion}
                        className="w-full sm:w-auto px-8 py-3.5 bg-slate-100 hover:bg-white text-slate-900 rounded-xl font-bold transition-all shadow-lg"
                      >
                        {currentQuestion + 1 === quizQuestions.length
                          ? "View Final Results"
                          : "Next Question →"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Results Screen
            <div className="text-center py-16 px-4 space-y-8 animate-in zoom-in-95 duration-500">
              <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-cyan-500/10 border-4 border-cyan-500/30 mb-2 relative">
                <Trophy size={48} className="text-cyan-400 absolute" />
                <div className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin"></div>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                  Quiz Complete!
                </h2>
                <p className="text-lg text-slate-400">
                  You scored{" "}
                  <span className="text-2xl font-bold text-emerald-400 mx-1">
                    {score}
                  </span>{" "}
                  out of {quizQuestions.length}.
                </p>
              </div>

              {/* Performance Indicator */}
              <div className="max-w-xs mx-auto bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <p className="text-sm font-medium text-slate-300">
                  {score === quizQuestions.length
                    ? "Perfect score! Outstanding work."
                    : score >= quizQuestions.length / 2
                      ? "Good job! Keep reviewing to hit 100%."
                      : "Keep studying! You'll get it next time."}
                </p>
              </div>

              <div className="pt-6 flex justify-center">
                <button
                  onClick={restartQuiz}
                  className="flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl text-white font-semibold transition-colors shadow-lg"
                >
                  <RotateCcw size={20} />
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
