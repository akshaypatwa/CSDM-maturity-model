import React from 'react';
import { ViewMode } from '../types';
import { ChevronLeft, ChevronRight, Layout, Server, Database } from 'lucide-react';

interface ControlsProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  onNext: () => void;
  onPrev: () => void;
  canNext: boolean;
  canPrev: boolean;
  currentStageIndex: number;
}

const Controls: React.FC<ControlsProps> = ({ viewMode, setViewMode, onNext, onPrev, canNext, canPrev, currentStageIndex }) => {
  return (
    <div className="flex items-center gap-6 bg-white/90 backdrop-blur-xl border border-slate-200 px-6 py-2 rounded-full shadow-xl">
      
      {/* View Toggle */}
      <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200">
        <button
          onClick={() => setViewMode('application')}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
            viewMode === 'application' 
            ? 'bg-white text-blue-600 shadow-sm' 
            : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <Layout size={14} />
          <span>Apps</span>
        </button>
        <button
          onClick={() => setViewMode('service')}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
            viewMode === 'service' 
            ? 'bg-white text-purple-600 shadow-sm' 
            : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <Server size={14} />
          <span>Services</span>
        </button>
      </div>

      <div className="w-px h-6 bg-slate-200 mx-2" />

      {/* Navigation Controls */}
      <div className="flex items-center gap-2">
        <button
            onClick={onPrev}
            disabled={!canPrev}
            className={`
            flex items-center justify-center w-10 h-10 rounded-full border transition-all
            ${canPrev
                ? 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300' 
                : 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed'}
            `}
            title="Previous Stage"
        >
            <ChevronLeft size={20} />
        </button>

        <div className="text-xs font-black text-slate-400 w-16 text-center tracking-widest">
            STEP {currentStageIndex + 1} / 5
        </div>

        <button
            onClick={onNext}
            disabled={!canNext}
            className={`
            flex items-center justify-center w-10 h-10 rounded-full border transition-all
            ${canNext
                ? 'bg-slate-900 border-slate-900 text-white hover:bg-slate-800 shadow-md' 
                : 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed'}
            `}
            title="Next Stage"
        >
            <ChevronRight size={20} />
        </button>
      </div>

    </div>
  );
};

export default Controls;