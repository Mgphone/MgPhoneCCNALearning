import { useState, useEffect, useRef } from "react";
import type { Difficulty, QuizQuestion } from "@/data/quiz/types";
import {
  TOPIC_LOOKUP,
  shuffle,
  getTopicName,
  type Phase,
} from "./quiz-data";

export interface QuizEngine {
  phase: Phase;
  setPhase: React.Dispatch<React.SetStateAction<Phase>>;
  selectedTopicKey: string | null;
  setSelectedTopicKey: React.Dispatch<React.SetStateAction<string | null>>;
  selectedTopicKeys: Set<string>;
  setSelectedTopicKeys: React.Dispatch<React.SetStateAction<Set<string>>>;
  selectedDifficulty: Difficulty | "all";
  setSelectedDifficulty: React.Dispatch<React.SetStateAction<Difficulty | "all">>;
  countMode: "5" | "10" | "20" | "custom";
  setCountMode: React.Dispatch<React.SetStateAction<"5" | "10" | "20" | "custom">>;
  customCount: string;
  setCustomCount: React.Dispatch<React.SetStateAction<string>>;
  getFilteredPool: () => QuizQuestion[];
  countByDifficulty: (d: Difficulty | "all") => number;
  maxQuestions: number;
  questionCount: number;
  canStart: boolean;
  getSelectedTopicLabel: () => string;
  sessionQuestions: QuizQuestion[];
  currentIndex: number;
  selectedAnswer: number | null;
  isSubmitted: boolean;
  isRevealed: boolean;
  answers: Record<number, number>;
  revealedIds: Set<number>;
  score: number;
  elapsedSeconds: number;
  startQuiz: () => void;
  handleAnswerClick: (index: number) => void;
  submitAnswer: () => void;
  giveUp: () => void;
  nextQuestion: () => void;
  barWidth: number;
  totalQ: number;
  answeredIds: string[];
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  percentage: number;
  passed: boolean;
}

export function formatElapsedTime(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function useQuizEngine(): QuizEngine {
  const [phase, setPhase] = useState<Phase>("setup");

  // Setup state
  const [selectedTopicKey, setSelectedTopicKey] = useState<string | null>(null);
  const [selectedTopicKeys, setSelectedTopicKeys] = useState<Set<string>>(new Set());
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | "all">("all");
  const [countMode, setCountMode] = useState<"5" | "10" | "20" | "custom">("5");
  const [customCount, setCustomCount] = useState("");

  const getFilteredPool = (): QuizQuestion[] => {
    let pool: QuizQuestion[];

    if (selectedTopicKey === "mixed") {
      pool = Object.values(TOPIC_LOOKUP).flat();
    } else if (selectedTopicKeys.size > 0) {
      pool = [];
      for (const key of selectedTopicKeys) {
        const topicPool = TOPIC_LOOKUP[key] ?? [];
        pool.push(...topicPool);
      }
    } else {
      pool = selectedTopicKey ? (TOPIC_LOOKUP[selectedTopicKey] ?? []) : [];
    }

    if (selectedDifficulty === "all") return pool;
    return pool.filter((q) => q.difficulty === selectedDifficulty);
  };

  const countByDifficulty = (d: Difficulty | "all"): number => {
    let pool: QuizQuestion[];

    if (selectedTopicKey === "mixed") {
      pool = Object.values(TOPIC_LOOKUP).flat();
    } else if (selectedTopicKeys.size > 0) {
      pool = [];
      for (const key of selectedTopicKeys) {
        const topicPool = TOPIC_LOOKUP[key] ?? [];
        pool.push(...topicPool);
      }
    } else {
      pool = selectedTopicKey ? (TOPIC_LOOKUP[selectedTopicKey] ?? []) : [];
    }

    if (d === "all") return pool.length;
    return pool.filter((q) => q.difficulty === d).length;
  };

  // Playing state
  const [sessionQuestions, setSessionQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [revealedIds, setRevealedIds] = useState<Set<number>>(new Set());
  const [score, setScore] = useState(0);

  // Results animation
  const [barWidth, setBarWidth] = useState(0);

  // Timer
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const maxQuestions = (selectedTopicKey || selectedTopicKeys.size > 0) ? getFilteredPool().length : 0;

  const questionCount =
    countMode === "custom"
      ? parseInt(customCount, 10) || 0
      : parseInt(countMode, 10);

  const canStart =
    (selectedTopicKey !== null || selectedTopicKeys.size > 0) &&
    questionCount >= 1 &&
    questionCount <= maxQuestions;

  const getSelectedTopicLabel = (): string => {
    if (selectedTopicKey === "mixed") return "Mixed Quiz";
    if (selectedTopicKeys.size === 1) return getTopicName([...selectedTopicKeys][0]);
    if (selectedTopicKeys.size > 1) return `${selectedTopicKeys.size} Topics Selected`;
    if (selectedTopicKey) return getTopicName(selectedTopicKey);
    return "";
  };

  const startQuiz = () => {
    if (!canStart) return;
    const pool = getFilteredPool();
    if (!pool.length) return;
    const shuffled = shuffle(pool);
    const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));
    setSessionQuestions(selected);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setIsRevealed(false);
    setAnswers({});
    setRevealedIds(new Set());
    setScore(0);
    setElapsedSeconds(0);
    setPhase("playing");
  };

  // --- Playing handlers ---
  const handleAnswerClick = (index: number) => {
    if (isSubmitted) return;
    setSelectedAnswer(index);
  };

  const submitAnswer = () => {
    if (selectedAnswer === null || !sessionQuestions[currentIndex]) return;
    setIsSubmitted(true);
    const q = sessionQuestions[currentIndex];
    setAnswers((prev) => ({ ...prev, [q.id]: selectedAnswer }));
    if (selectedAnswer === q.correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const giveUp = () => {
    if (!sessionQuestions[currentIndex]) return;
    setIsSubmitted(true);
    setIsRevealed(true);
    setRevealedIds(
      (prev) => new Set(prev).add(sessionQuestions[currentIndex].id),
    );
    setSelectedAnswer(null);
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < sessionQuestions.length) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setIsSubmitted(false);
      setIsRevealed(false);
      setCustomCount("");
    } else {
      setPhase("results");
    }
  };

  // --- Results calculations ---
  const totalQ = sessionQuestions.length;
  const answeredIds = Object.keys(answers);
  const correctCount = sessionQuestions.filter(
    (q) => answers[q.id] === q.correctAnswer,
  ).length;
  const incorrectCount = sessionQuestions.filter(
    (q) => answers[q.id] !== undefined && answers[q.id] !== q.correctAnswer,
  ).length;
  const unansweredCount = totalQ - answeredIds.length;
  const percentage = totalQ > 0 ? Math.round((correctCount / totalQ) * 100) : 0;
  const passed = percentage >= 80;

  useEffect(() => {
    if (phase === "results") {
      const timer = setTimeout(() => setBarWidth(percentage), 100);
      return () => clearTimeout(timer);
    }
    setBarWidth(0);
  }, [phase, percentage]);

  useEffect(() => {
    if (phase === "playing") {
      startTimeRef.current = Date.now();
      setElapsedSeconds(0);
      intervalRef.current = setInterval(() => {
        if (startTimeRef.current !== null) {
          setElapsedSeconds(
            Math.floor((Date.now() - startTimeRef.current) / 1000),
          );
        }
      }, 1000);
    } else {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (phase !== "results") {
        setElapsedSeconds(0);
      }
    }
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [phase]);

  return {
    phase,
    setPhase,
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
    getSelectedTopicLabel,
    sessionQuestions,
    currentIndex,
    selectedAnswer,
    isSubmitted,
    isRevealed,
    answers,
    revealedIds,
    score,
    elapsedSeconds,
    startQuiz,
    handleAnswerClick,
    submitAnswer,
    giveUp,
    nextQuestion,
    barWidth,
    totalQ,
    answeredIds,
    correctCount,
    incorrectCount,
    unansweredCount,
    percentage,
    passed,
  };
}
