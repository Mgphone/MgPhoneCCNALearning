import React from 'react';
import { BookOpen, FlaskConical, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">CCNA Mastery</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
            A comprehensive study portal for theoretical knowledge and practical laboratory experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          <Link
            to="/course-notes"
            className="group relative bg-slate-900 border border-slate-800 p-8 rounded-3xl text-left transition-all hover:border-cyan-500/50 hover:bg-slate-800/50 hover:shadow-2xl hover:shadow-cyan-500/10"
          >
            <div className="h-14 w-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="text-cyan-400" size={28} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Review & Course Notes</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Daily theory modules, fundamental concepts, and technical deep-dives to master the CCNA curriculum.
            </p>
            <div className="flex items-center text-cyan-400 font-bold text-sm">
              Enter Module <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/lab-notes"
            className="group relative bg-slate-900 border border-slate-800 p-8 rounded-3xl text-left transition-all hover:border-blue-500/50 hover:bg-slate-800/50 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="h-14 w-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FlaskConical className="text-blue-400" size={28} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Lab Notes</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Practical setups, CLI exercises, and interactive topology simulations for real-world networking skills.
            </p>
            <div className="flex items-center text-blue-400 font-bold text-sm">
              Enter Laboratory <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
