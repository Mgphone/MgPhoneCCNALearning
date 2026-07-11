import { useRef, useEffect, useMemo } from 'react';
import type { CcnaTopic } from '@/data/data';

interface SpinWheelProps {
  topics: CcnaTopic[];
  rotation: number;
  duration: number;
  isSpinning: boolean;
  size?: number;
}

function generateColors(count: number): string[] {
  const colors: string[] = [];
  for (let i = 0; i < count; i++) {
    const hue = (i * 137.508) % 360;
    colors.push(`hsl(${hue}, 65%, 55%)`);
  }
  return colors;
}

export function SpinWheel({ topics, rotation, duration, isSpinning, size = 440 }: SpinWheelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colors = useMemo(() => generateColors(topics.length), [topics.length]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const ctx = canvas.getContext('2d')!;

    const draw = () => {
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const center = size / 2;
      const radius = center - 16;
      const arcSize = (2 * Math.PI) / topics.length;
      const fontSize = Math.max(10, Math.min(13, radius * 0.055));

      ctx.clearRect(0, 0, size, size);

      // Outer ring
      ctx.beginPath();
      ctx.arc(center, center, radius + 6, 0, 2 * Math.PI);
      ctx.fillStyle = '#1e293b';
      ctx.fill();
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Segments
      for (let i = 0; i < topics.length; i++) {
        const startAngle = i * arcSize - Math.PI / 2;
        const endAngle = (i + 1) * arcSize - Math.PI / 2;
        const midAngle = startAngle + arcSize / 2;

        ctx.beginPath();
        ctx.moveTo(center, center);
        ctx.arc(center, center, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();

        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.save();
        ctx.translate(center, center);
        ctx.rotate(midAngle);
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#ffffff';
        ctx.font = `bold ${fontSize}px ui-sans-serif, system-ui, sans-serif`;
        ctx.shadowColor = 'rgba(0,0,0,0.6)';
        ctx.shadowBlur = 3;
        ctx.fillText(String(topics[i].dayNumber), radius * 0.85, 0);
        ctx.restore();
      }

      // Decorative bulbs
      const bulbCount = 28;
      const bulbRadius = 4;
      for (let i = 0; i < bulbCount; i++) {
        const angle = (i / bulbCount) * 2 * Math.PI - Math.PI / 2;
        const bx = center + (radius + 2) * Math.cos(angle);
        const by = center + (radius + 2) * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(bx, by, bulbRadius, 0, 2 * Math.PI);
        ctx.fillStyle = i % 2 === 0 ? '#38bdf8' : '#fbbf24';
        ctx.fill();
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Center hub gradient
      const gradient = ctx.createRadialGradient(center, center, 0, center, center, radius * 0.12);
      gradient.addColorStop(0, '#7dd3fc');
      gradient.addColorStop(0.5, '#38bdf8');
      gradient.addColorStop(1, '#0284c7');
      ctx.beginPath();
      ctx.arc(center, center, radius * 0.12, 0, 2 * Math.PI);
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.strokeStyle = '#0ea5e9';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Hub inner text
      ctx.fillStyle = '#ffffff';
      ctx.font = `bold ${Math.min(13, radius * 0.065)}px ui-sans-serif, system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0,0,0,0.4)';
      ctx.shadowBlur = 2;
      ctx.fillText('CCNA', center, center - 6);
      ctx.font = `bold ${Math.min(9, radius * 0.045)}px ui-sans-serif, system-ui, sans-serif`;
      ctx.fillText('SPIN', center, center + 8);
    };

    draw();
  }, [topics, colors, size]);

  return (
    <div className="relative inline-flex items-center justify-center select-none">
      {/* Pointer */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-10" aria-hidden>
        <svg width="36" height="32" viewBox="0 0 36 32" className="drop-shadow-xl">
          <defs>
            <linearGradient id="pointerGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>
          <polygon points="18,30 0,0 36,0" fill="url(#pointerGrad)" />
          <polygon points="18,24 6,4 30,4" fill="#0c4a6e" opacity="0.3" />
          <line x1="18" y1="0" x2="18" y2="28" stroke="#0c4a6e" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>

      {/* Spinning wheel */}
      <div
        ref={containerRef}
        className="rounded-full"
        role="img"
        aria-label={`CCNA topics spinning wheel with ${topics.length} topics`}
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: isSpinning
            ? `transform ${duration}ms cubic-bezier(0.12, 0.8, 0.12, 1.0)`
            : 'none',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{ width: size, height: size }}
          className="block"
        />
      </div>

      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        aria-hidden
        style={{
          boxShadow: `
            inset 0 0 20px rgba(0,0,0,0.6),
            0 0 40px rgba(56, 189, 248, 0.1),
            0 0 80px rgba(56, 189, 248, 0.05)
          `,
          border: '2px solid rgba(56, 189, 248, 0.15)',
        }}
      />
    </div>
  );
}
