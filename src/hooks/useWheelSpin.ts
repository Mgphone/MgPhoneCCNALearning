import { useState, useCallback, useRef } from 'react';
import { CcnaTopic } from '@/data/data';

export interface SpinHistoryEntry {
  dayNumber: number;
  title: string;
  timestamp: number;
}

export const HISTORY_KEY = 'ccna_spin_wheel_history';
export const MAX_HISTORY = 50;

export function loadHistory(): SpinHistoryEntry[] {
  try {
    const stored = localStorage.getItem(HISTORY_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function useWheelSpin(topics: CcnaTopic[]) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState<CcnaTopic | null>(null);
  const [duration, setDuration] = useState(4000);
  const [history, setHistory] = useState<SpinHistoryEntry[]>(loadHistory);

  const currentRotation = useRef(0);

  const spin = useCallback(() => {
    if (isSpinning || topics.length === 0) return;

    const targetIndex = Math.floor(Math.random() * topics.length);
    const target = topics[targetIndex];

    const n = topics.length;
    const arcSize = 360 / n;
    const offset = 360 - (targetIndex + 0.5) * arcSize;
    const normalizedOffset = ((offset % 360) + 360) % 360;
    const fullSpins = 5 + Math.floor(Math.random() * 4);
    const spinDuration = 4000 + Math.random() * 1000;

    const currentVisual = currentRotation.current % 360;
    const delta = ((normalizedOffset - currentVisual + 360) % 360) + fullSpins * 360;
    const totalRotation = currentRotation.current + delta;
    currentRotation.current = totalRotation;

    setRotation(totalRotation);
    setDuration(spinDuration);
    setIsSpinning(true);
    setSelectedTopic(null);

    setTimeout(() => {
      setIsSpinning(false);
      setSelectedTopic(target);

      const entry: SpinHistoryEntry = {
        dayNumber: target.dayNumber,
        title: target.title,
        timestamp: Date.now(),
      };
      setHistory(prev => {
        const updated = [entry, ...prev].slice(0, MAX_HISTORY);
        localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
        return updated;
      });
    }, spinDuration);
  }, [isSpinning, topics]);

  const clearHistory = useCallback(() => {
    setHistory([]);
    localStorage.removeItem(HISTORY_KEY);
  }, []);

  return {
    isSpinning,
    rotation,
    duration,
    selectedTopic,
    history,
    spin,
    clearHistory,
  };
}
