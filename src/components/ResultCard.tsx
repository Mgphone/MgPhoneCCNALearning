import { ArrowRight, Sparkles } from 'lucide-react';
import type { CcnaTopic } from '@/data/data';

interface ResultCardProps {
  topic: CcnaTopic;
  onStartLearning: () => void;
  visible: boolean;
}

export function ResultCard({ topic, onStartLearning, visible }: ResultCardProps) {
  if (!visible || !topic) return null;

  return (
    <div className="animate-in fade-in zoom-in duration-500 ease-out">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800/90 to-slate-900 border border-cyan-500/25 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/5">
        <div className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-cyan-500/20">
            <Sparkles size={14} />
            Congratulations!
          </div>

          <p className="text-slate-400 text-sm font-medium">
            Today&apos;s CCNA Challenge
          </p>

          <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 leading-tight">
            Day {topic.dayNumber}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
            {topic.title}
          </h3>

          <button
            onClick={onStartLearning}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-8 py-3.5 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 active:scale-95"
          >
            Start Learning
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
