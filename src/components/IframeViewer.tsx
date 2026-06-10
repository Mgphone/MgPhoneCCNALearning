import React from 'react';
import { CcnaTopic } from '../data/data';
import { ArrowLeft, CheckCircle2, Circle } from 'lucide-react';

interface IframeViewerProps {
  topic: CcnaTopic;
  onBack: () => void;
  isCompleted: boolean;
  onToggleComplete: () => void;
  basePath: string;
}

export const IframeViewer: React.FC<IframeViewerProps> = ({
  topic,
  onBack,
  isCompleted,
  onToggleComplete,
  basePath,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col">
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-bold transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">Back</span>
          </button>
          <div className="h-6 w-px bg-slate-800" />
          <h2 className="text-sm sm:text-base font-bold text-white truncate max-w-[200px] sm:max-w-md">
            Day {topic.dayNumber}: {topic.title}
          </h2>
        </div>

        <button
          onClick={onToggleComplete}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${
            isCompleted 
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50' 
              : 'bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700'
          }`}
        >
          {isCompleted ? (
            <>
              <CheckCircle2 size={14} />
              Done
            </>
          ) : (
            <>
              <Circle size={14} />
              Mark Done
            </>
          )}
        </button>
      </div>
      
      <div className="flex-grow relative overflow-hidden">
        <iframe
          src={`${basePath}${topic.filePath}`}
          className="absolute inset-0 w-full h-full border-none"
          title={topic.title}
        />
      </div>
    </div>
  );
};
