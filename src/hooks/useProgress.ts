import { useState, useEffect } from 'react';

const STORAGE_KEY = 'ccna_mastery_progress';

export const useProgress = () => {
  const [completedIds, setCompletedIds] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedIds));
  }, [completedIds]);

  const toggleComplete = (id: number) => {
    setCompletedIds(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const isCompleted = (id: number) => completedIds.includes(id);

  return { completedIds, toggleComplete, isCompleted };
};
