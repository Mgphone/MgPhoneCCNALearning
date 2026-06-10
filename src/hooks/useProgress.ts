import { useState, useEffect } from 'react';

export const useProgress = (storageKey: string) => {
  const [completedIds, setCompletedIds] = useState<number[]>(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(completedIds));
  }, [completedIds, storageKey]);

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
