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
    <div className="flex items-center gap-6 bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 px-6 py-2 rounded-full shadow-2xl">
      
      {/* View Toggle */}
      <div className="flex bg-slate-800/50 p-1 rounded-full border border-slate-700/50">
        <button
          onClick={() => setViewMode('application')}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
            viewMode === 'application' 
            ? 'bg-blue-600 text-white shadow-lg' 
            : 'text-slate-400 hover:text-white'
          }`}
        >
          <Layout size={14} />
          <span>Apps</span>
        </button>
        <button
          onClick={() => setViewMode('service')}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
            viewMode === 'service' 
            ? 'bg-purple-600 text-white shadow-lg' 
            : 'text-slate-400 hover:text-white'
          }`}
        >
          <Server size={14} />
          <span>Services</span>
        </button>
      </div>

      <div className="w-px h-6 bg-slate-700 mx-2" />

      {/* Navigation Controls */}
      <div className="flex items-center gap-2">
        <button
            onClick={onPrev}
            disabled={!canPrev}
            className={`
            flex items-center justify-center w-10 h-10 rounded-full border transition-all
            ${canPrev
                ? 'bg-slate-800 border-slate-600 text-white hover:bg-slate-700 hover:border-cyan-500/50' 
                : 'bg-slate-900 border-slate-800 text-slate-700 cursor-not-allowed'}
            `}
            title="Previous Stage"
        >
            <ChevronLeft size={20} />
        </button>

        <div className="text-xs font-mono text-slate-500 w-16 text-center">
            STEP {currentStageIndex + 1} / 5
        </div>

        <button
            onClick={onNext}
            disabled={!canNext}
            className={`
            flex items-center justify-center w-10 h-10 rounded-full border transition-all
            ${canNext
                ? 'bg-cyan-500 border-cyan-400 text-white hover:bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]' 
                : 'bg-slate-900 border-slate-800 text-slate-700 cursor-not-allowed'}
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