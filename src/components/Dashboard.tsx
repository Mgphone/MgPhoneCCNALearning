import React from 'react';
import { CcnaTopic } from '../data/data';
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react';

interface DashboardProps {
  topics: CcnaTopic[];
  isCompleted: (id: number) => boolean;
  toggleComplete: (id: number) => void;
  onSelectTopic: (topic: CcnaTopic) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  topics,
  isCompleted,
  toggleComplete,
  onSelectTopic,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 sm:p-6 max-w-7xl mx-auto">
      {topics.map((topic) => {
        const completed = isCompleted(topic.id);
        return (
          <div
            key={topic.id}
            className={`group relative bg-slate-900 border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/10 ${
              completed ? 'border-emerald-500/50' : 'border-slate-800 hover:border-slate-600'
            }`}
          >
            <div className="p-5 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-black text-slate-500 uppercase tracking-tighter">
                  Day {topic.dayNumber}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleComplete(topic.id);
                  }}
                  className={`transition-colors p-1 rounded-md ${
                    completed ? 'text-emerald-400 bg-emerald-400/10' : 'text-slate-600 hover:text-slate-400'
                  }`}
                >
                  {completed ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                </button>
              </div>

              <h3 className="text-lg font-bold text-white mb-6 leading-tight flex-grow">
                {topic.title}
              </h3>

              <button
                onClick={() => onSelectTopic(topic)}
                className="flex items-center justify-between w-full mt-auto bg-slate-950 hover:bg-cyan-600 text-slate-300 hover:text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-all group-hover:translate-y-[-2px]"
              >
                Start Study
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            
            {completed && (
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                <div className="absolute top-[-10px] right-[-30px] w-20 h-20 bg-emerald-500/20 rotate-45" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
