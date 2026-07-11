import { useEffect, useState } from 'react';

const COLORS = [
  '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4',
  '#ffeaa7', '#dda0dd', '#f7dc6f', '#ff9ff3',
  '#54a0ff', '#5f27cd', '#01a3a4', '#f368e0',
];

interface Particle {
  id: number;
  left: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  drift: number;
}

export function Confetti({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!active) {
      setParticles([]);
      return;
    }

    const newParticles: Particle[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: Math.random() * 0.6,
      duration: 2 + Math.random() * 2,
      size: 6 + Math.random() * 8,
      rotation: Math.random() * 360,
      drift: -30 + Math.random() * 60,
    }));
    setParticles(newParticles);
  }, [active]);

  if (!active || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg) scale(1);
            opacity: 1;
          }
          80% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(105vh) translateX(var(--drift)) rotate(var(--spin)) scale(0.3);
            opacity: 0;
          }
        }
      `}</style>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.6,
            backgroundColor: p.color,
            borderRadius: '2px',
            animation: `confetti-fall ${p.duration}s ease-out ${p.delay}s forwards`,
            '--drift': `${p.drift}px`,
            '--spin': `${720 + p.rotation}deg`,
            opacity: 0,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
