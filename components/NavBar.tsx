import React from 'react';
import { STAGES, STAGE_ICONS } from '../constants';
import { motion } from 'framer-motion';

interface NavBarProps {
  currentStageIndex: number;
  onStageSelect: (index: number) => void;
}

const NavBar: React.FC<NavBarProps> = ({ currentStageIndex, onStageSelect }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-4">
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 tracking-tight filter drop-shadow-lg">
          CSDM MATURITY SIMULATOR
        </h1>
        <p className="text-slate-400 text-xs font-bold tracking-[0.3em] uppercase mt-1">
          Strategic Transformation Journey
        </p>
      </div>

      {/* Enhanced Stepper */}
      <div className="relative w-full max-w-6xl px-8">
        {/* Background Track */}
        <div className="absolute top-[2.5rem] left-0 w-full h-3 bg-slate-800/50 -translate-y-1/2 rounded-full hidden md:block backdrop-blur-sm border border-slate-700/50" />
        
        {/* Active Progress Bar */}
        <motion.div 
          className="absolute top-[2.5rem] left-0 h-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 -translate-y-1/2 rounded-full hidden md:block z-0 shadow-[0_0_20px_rgba(59,130,246,0.6)]"
          initial={{ width: '0%' }}
          animate={{ width: `${(currentStageIndex / (STAGES.length - 1)) * 100}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        <div className="flex justify-between items-start relative z-10">
          {STAGES.map((stage, index) => {
            const Icon = STAGE_ICONS[stage.id];
            const isActive = index === currentStageIndex;
            const isCompleted = index < currentStageIndex;
            
            return (
              <div key={stage.id} className="flex flex-col items-center group cursor-pointer w-32" onClick={() => onStageSelect(index)}>
                {/* Icon Container */}
                <motion.div
                  className={`
                    w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center border-[3px] transition-all duration-300 relative mb-3
                    ${isActive 
                      ? 'bg-slate-900 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.5)] z-20 scale-110' 
                      : isCompleted 
                        ? 'bg-slate-800 border-blue-500 text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.3)]' 
                        : 'bg-slate-900/80 border-slate-700 text-slate-600'}
                  `}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon 
                    size={32} 
                    strokeWidth={isActive ? 2.5 : 2}
                    className={`
                      transition-colors duration-300
                      ${isActive ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]' : isCompleted ? 'text-blue-400' : 'text-slate-600'}
                    `} 
                  />
                  
                  {/* Active Ring Pulse */}
                  {isActive && (
                    <div className="absolute -inset-2 rounded-3xl border border-cyan-500/30 animate-ping"></div>
                  )}
                </motion.div>
                
                {/* Label Block */}
                <div className="flex flex-col items-center gap-1">
                    <span className={`
                    text-xs md:text-sm font-black tracking-widest transition-colors duration-300 uppercase
                    ${isActive ? 'text-white' : isCompleted ? 'text-slate-400' : 'text-slate-600'}
                    `}>
                    {stage.title}
                    </span>
                    <span className={`text-[10px] text-slate-500 font-medium ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                        Phase {index + 1}
                    </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;