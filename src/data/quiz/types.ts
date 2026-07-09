export type Difficulty = "easy" | "medium" | "hard";

export interface QuizQuestion {
  id: number;
  question: string;
  options: [string, string, string, string];
  correctAnswer: 0 | 1 | 2 | 3;
  difficulty: Difficulty;
  explanation: string;
}
