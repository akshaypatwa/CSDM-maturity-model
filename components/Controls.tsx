import React from 'react';
import { ViewMode } from '../types';
import { ChevronLeft, ChevronRight, Layout, Server, Database } from 'lucide-react';

import { StageData } from '../types';

interface ControlsProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  onNext: () => void;
  onPrev: () => void;
  canNext: boolean;
  canPrev: boolean;
  currentStageIndex: number;
  currentStage: StageData;
}

const Controls: React.FC<ControlsProps> = ({ viewMode, setViewMode, onNext, onPrev, canNext, canPrev, currentStageIndex, currentStage }) => {

  const getButtonTheme = (id: string, isNext: boolean) => {
    const base = "flex items-center justify-center w-10 h-10 rounded-full border transition-all shadow-md";
    const disabled = "bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed shadow-none";

    if (!isNext && !canPrev) return `${base} ${disabled}`;
    if (isNext && !canNext) return `${base} ${disabled}`;

    switch (id) {
      case 'foundation': return isNext ? `${base} bg-blue-600 border-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200` : `${base} bg-white border-blue-200 text-blue-600 hover:bg-blue-50`;
      case 'crawl': return isNext ? `${base} bg-cyan-600 border-cyan-600 text-white hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-200` : `${base} bg-white border-cyan-200 text-cyan-600 hover:bg-cyan-50`;
      case 'walk': return isNext ? `${base} bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200` : `${base} bg-white border-indigo-200 text-indigo-600 hover:bg-indigo-50`;
      case 'run': return isNext ? `${base} bg-amber-600 border-amber-600 text-white hover:bg-amber-700 hover:shadow-lg hover:shadow-amber-200` : `${base} bg-white border-amber-200 text-amber-600 hover:bg-amber-50`;
      case 'fly': return isNext ? `${base} bg-purple-600 border-purple-600 text-white hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-200` : `${base} bg-white border-purple-200 text-purple-600 hover:bg-purple-50`;
      default: return isNext ? `${base} bg-slate-900 border-slate-900 text-white hover:bg-slate-800` : `${base} bg-white border-slate-200 text-slate-600 hover:bg-slate-50`;
    }
  };

  const getTextTheme = (id: string) => {
    switch (id) {
      case 'foundation': return "text-blue-500";
      case 'crawl': return "text-cyan-500";
      case 'walk': return "text-indigo-500";
      case 'run': return "text-amber-500";
      case 'fly': return "text-purple-500";
      default: return "text-slate-400";
    }
  };
  return (
    <div className="flex items-center gap-6 bg-white/90 backdrop-blur-xl border border-slate-200 px-6 py-2 rounded-full shadow-xl">

      {/* Navigation Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrev}
          disabled={!canPrev}
          className={getButtonTheme(currentStage.id, false)}
          title="Previous Stage"
        >
          <ChevronLeft size={20} />
        </button>

        <div className={`text-xs font-black w-24 text-center tracking-widest ${getTextTheme(currentStage.id)}`}>
          STEP {currentStageIndex + 1} / 5
        </div>

        <button
          onClick={onNext}
          disabled={!canNext}
          className={getButtonTheme(currentStage.id, true)}
          title="Next Stage"
        >
          <ChevronLeft className="rotate-180" size={20} />
        </button>
      </div>

    </div>
  );
};

export default Controls;