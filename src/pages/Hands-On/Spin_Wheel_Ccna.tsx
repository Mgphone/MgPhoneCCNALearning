import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, History, RotateCcw, FerrisWheel, Trash2, Beaker, BookOpen } from 'lucide-react';
import { labData } from '@/data/labdata';
import { ccnaData } from '@/data/data';
import type { CcnaTopic } from '@/data/data';
import { useWheelSpin, SpinHistoryEntry, loadHistory, HISTORY_KEY, MAX_HISTORY } from '@/hooks/useWheelSpin';
import { SpinWheel } from '@/components/SpinWheel';
import { ResultCard } from '@/components/ResultCard';
import { Confetti } from '@/components/Confetti';
import { IframeViewer } from '@/components/IframeViewer';

type DataSet = 'lab' | 'data';

const DATASET_CONFIG: Record<DataSet, { topics: CcnaTopic[]; basePath: string; label: string; icon: typeof Beaker }> = {
  lab: { topics: labData, basePath: '/data/LabHTML/', label: 'Lab Notes', icon: Beaker },
  data: { topics: ccnaData, basePath: '/data/LinkHTML/', label: 'Course Notes', icon: BookOpen },
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

interface WheelContentProps {
  dataset: DataSet;
  onViewTopic: (topic: CcnaTopic) => void;
}

function WheelContent({ dataset, onViewTopic }: WheelContentProps) {
  const config = DATASET_CONFIG[dataset];
  const isMobile = useIsMobile();
  const wheelSize = isMobile ? 300 : 440;

  const {
    isSpinning,
    rotation,
    duration,
    selectedTopic,
    spin,
  } = useWheelSpin(config.topics);

  const showConfetti = selectedTopic !== null && !isSpinning;

  return (
    <>
      <Confetti active={showConfetti} />
      <div className="flex flex-col items-center gap-6 flex-shrink-0">
        <SpinWheel
          topics={config.topics}
          rotation={rotation}
          duration={duration}
          isSpinning={isSpinning}
          size={wheelSize}
        />

        <button
          onClick={spin}
          disabled={isSpinning}
          className={`
            relative inline-flex items-center gap-2.5 font-black text-base uppercase tracking-widest
            px-10 py-4 rounded-2xl transition-all duration-300
            ${
              isSpinning
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 active:scale-95 shadow-lg shadow-cyan-500/10'
            }
          `}
          aria-label={isSpinning ? 'Wheel is spinning' : 'Spin the wheel'}
        >
          <RotateCcw
            size={20}
            className={`${isSpinning ? 'animate-spin' : ''} transition-transform`}
          />
          {isSpinning ? 'Spinning...' : 'Spin!'}
        </button>

        <div className="w-full max-w-md">
          <ResultCard
            topic={selectedTopic!}
            onStartLearning={() => selectedTopic && onViewTopic(selectedTopic)}
            visible={selectedTopic !== null && !isSpinning}
          />
        </div>
      </div>
    </>
  );
}

const Spin_Wheel_Ccna = () => {
  const navigate = useNavigate();
  const [dataset, setDataset] = useState<DataSet>('lab');

  const config = DATASET_CONFIG[dataset];
  const [history, setHistory] = useState(loadHistory);
  const [viewingTopic, setViewingTopic] = useState<CcnaTopic | null>(null);
  const [showHistory, setShowHistory] = useState(false);

  const handleDatasetChange = (ds: DataSet) => {
    if (ds !== dataset) {
      setDataset(ds);
      setViewingTopic(null);
    }
  };

  const handleViewTopic = (topic: CcnaTopic) => {
    setViewingTopic(topic);
    const entry: SpinHistoryEntry = {
      dayNumber: topic.dayNumber,
      title: topic.title,
      timestamp: Date.now(),
    };
    setHistory(prev => {
      const updated = [entry, ...prev].slice(0, MAX_HISTORY);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  if (viewingTopic) {
    return (
      <IframeViewer
        topic={viewingTopic}
        onBack={() => setViewingTopic(null)}
        isCompleted={false}
        onToggleComplete={() => {}}
        basePath={config.basePath}
      />
    );
  }

  const formatDate = (ts: number) => {
    const d = new Date(ts);
    return d.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 sm:p-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => navigate('/hands-on')}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
            aria-label="Back to hands-on practice"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-lg sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <FerrisWheel className="text-cyan-400" size={24} />
              CCNA Spin Wheel
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Can&apos;t decide? Spin to pick your next topic!
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowHistory(s => !s)}
          className={`p-2 rounded-xl border transition-all ${
            showHistory
              ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-400'
              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-600'
          }`}
          aria-label={showHistory ? 'Close spin history' : 'Open spin history'}
          aria-expanded={showHistory}
        >
          <History size={20} />
        </button>
      </div>

      {/* Dataset toggle */}
      <div className="flex justify-center">
        <div className="inline-flex bg-slate-900 border border-slate-800 rounded-2xl p-1 gap-1" role="tablist" aria-label="Select dataset">
          {(Object.entries(DATASET_CONFIG) as [DataSet, typeof DATASET_CONFIG['lab']][]).map(([key, cfg]) => {
            const active = dataset === key;
            const Icon = cfg.icon;
            return (
              <button
                key={key}
                role="tab"
                aria-selected={active}
                onClick={() => handleDatasetChange(key)}
                className={`
                  flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200
                  ${active
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }
                `}
              >
                <Icon size={16} />
                {cfg.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main layout */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 p-4 sm:p-6 max-w-7xl mx-auto w-full">
        {/* Wheel section - key forces full remount on dataset change */}
        <div key={dataset}>
          <WheelContent dataset={dataset} onViewTopic={handleViewTopic} />
        </div>

        {/* History sidebar */}
        {showHistory && (
          <div className="w-full lg:w-80 flex-shrink-0 max-h-[70vh] bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden animate-in fade-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between p-4 border-b border-slate-800 sticky top-0 bg-slate-900/80 backdrop-blur-sm">
              <h2 className="text-sm font-black text-white uppercase tracking-widest">
                History
                {history.length > 0 && (
                  <span className="ml-2 text-xs font-normal text-slate-500 normal-case tracking-normal">
                    ({history.length})
                  </span>
                )}
              </h2>
              {history.length > 0 && (
                <button
                  onClick={() => { setHistory([]); localStorage.removeItem(HISTORY_KEY); }}
                  className="text-slate-500 hover:text-red-400 transition-colors p-1 rounded-lg hover:bg-red-500/10"
                  aria-label="Clear spin history"
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>

            <div className="overflow-y-auto max-h-[calc(70vh-57px)] no-scrollbar">
              {history.length === 0 ? (
                <div className="p-8 text-center text-slate-600 text-sm">
                  <FerrisWheel size={32} className="mx-auto mb-3 text-slate-700" />
                  No spins yet.
                  <br />
                  Give it a try!
                </div>
              ) : (
                history.map((entry, i) => (
                  <div
                    key={`${entry.timestamp}-${i}`}
                    className="flex items-center gap-3 p-3 border-b border-slate-800/50 last:border-b-0 hover:bg-slate-800/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xs font-black flex-shrink-0">
                      {entry.dayNumber}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-white truncate">
                        {entry.title}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {formatDate(entry.timestamp)}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Spin_Wheel_Ccna;
