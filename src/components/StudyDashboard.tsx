import { useState, useMemo } from "react";
import { CcnaTopic } from "../data/data";
import { useProgress } from "../hooks/useProgress";
import { Header } from "./Header";
import { Dashboard } from "./Dashboard";
import { IframeViewer } from "./IframeViewer";

interface StudyDashboardProps {
  data: CcnaTopic[];
  storageKey: string;
  basePath: string;
  title: string;
  showCourseCredits?: boolean;
}

export const StudyDashboard: React.FC<StudyDashboardProps> = ({
  data,
  storageKey,
  basePath,
  title,
  showCourseCredits = false,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<CcnaTopic | null>(null);
  const { toggleComplete, isCompleted, completedIds } = useProgress(storageKey);

  const filteredTopics = useMemo(() => {
    return data.filter(
      (topic) =>
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.dayNumber.toString().includes(searchQuery),
    );
  }, [data, searchQuery]);

  const completedCount = completedIds.length;
  const totalCount = data.length;

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 selection:bg-cyan-500/30 selection:text-cyan-200">
      {!selectedTopic ? (
        <>
          <Header
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            completedCount={completedCount}
            totalCount={totalCount}
            title={title}
          />
          <main className="flex-grow pb-12">
            <Dashboard
              topics={filteredTopics}
              isCompleted={isCompleted}
              toggleComplete={toggleComplete}
              onSelectTopic={setSelectedTopic}
            />
          </main>
          <footer className="py-8 border-t border-slate-900 text-center flex flex-col gap-3">
            <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
              CCNA 200-301 Mastery Dashboard &bull; 100% Client-Side
            </p>
            <div className="flex flex-col gap-1.5">
              <p className="text-slate-500 text-[10px] font-medium tracking-tight">
                Crafted with <span className="text-rose-500">❤️❤️❤️</span> from{" "}
                <span className="text-cyan-500">mgphone</span>
              </p>
              <div className="flex items-center justify-center gap-4 text-[9px] font-bold text-slate-700 uppercase tracking-tighter">
                <a
                  href="https://youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ&si=OHizNnJ5TmmM3MIP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-500 transition-colors"
                >
                  Jeremy's IT Lab
                </a>
                {showCourseCredits && (
                  <>
                    <span className="w-1 h-1 bg-slate-800 rounded-full" />
                    <a
                      href="https://github.com/psaumur/CCNA_Course_Notes/tree/main"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-500 transition-colors"
                    >
                      Course Notes
                    </a>
                  </>
                )}
              </div>
            </div>
          </footer>
        </>
      ) : (
        <IframeViewer
          topic={selectedTopic}
          onBack={() => setSelectedTopic(null)}
          isCompleted={isCompleted(selectedTopic.id)}
          onToggleComplete={() => toggleComplete(selectedTopic.id)}
          basePath={basePath}
        />
      )}
    </div>
  );
};
