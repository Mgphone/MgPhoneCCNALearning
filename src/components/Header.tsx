import React from 'react';
import { Search, GraduationCap } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  completedCount: number;
  totalCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  completedCount,
  totalCount,
}) => {
  const progressPercentage = Math.round((completedCount / totalCount) * 100);

  return (
    <header className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-4 py-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-cyan-500 p-2 rounded-lg">
            <GraduationCap className="text-slate-950 w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              CCNA 200-301 <span className="text-cyan-400">Mastery</span>
            </h1>
            <div className="flex items-center gap-2 mt-0.5">
              <div className="h-1.5 w-24 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-cyan-500 transition-all duration-500" 
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                {completedCount} / {totalCount} Complete
              </span>
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search topics (e.g. OSPF, VLAN, Subnetting)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl py-2 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
          />
        </div>
      </div>
    </header>
  );
};
