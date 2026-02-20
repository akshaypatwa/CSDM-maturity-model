import React from 'react';
import { STAGES, STAGE_ICONS } from '../constants';
import { motion } from 'framer-motion';

interface NavBarProps {
  currentStageIndex: number;
  onStageSelect: (index: number) => void;
}

const NavBar: React.FC<NavBarProps> = ({ currentStageIndex, onStageSelect }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-2 relative z-50">

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center relative z-10"
      >
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg">
          CSDM <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">MATURITY</span>
        </h1>
      </motion.div>

      {/* Main Stepper Container */}
      <div className="relative w-full max-w-6xl px-4 md:px-16">

        {/* Track Background - Solid & Thick */}
        <div className="absolute top-[3rem] left-0 md:left-12 right-0 md:right-12 h-2 bg-slate-800 rounded-full mx-8 md:mx-16 z-0 border border-slate-700" />

        {/* Active Progress Track - Solid Gradient - GLOWING */}
        <motion.div
          className="absolute top-[3rem] left-0 md:left-12 h-2 rounded-full mx-8 md:mx-16 z-0 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          initial={{ width: '0%' }}
          animate={{
            width: `${(currentStageIndex / (STAGES.length - 1)) * 100}%`,
          }}
          transition={{
            duration: 0.5, ease: "easeInOut"
          }}
        />

        {/* Stages */}
        <div className="flex justify-between items-start relative z-10 w-full">
          {STAGES.map((stage, index) => {
            const Icon = STAGE_ICONS[stage.id];
            const isActive = index === currentStageIndex;
            const isCompleted = index < currentStageIndex;

            // Define colors per stage for the "Inactive" state to make them colorful
            const getStageColor = (id: string) => {
              switch (id) {
                case 'foundation': return { ring: 'border-blue-500/30', text: 'text-blue-400', bg: 'bg-slate-900', glow: 'shadow-blue-900/20' };
                case 'crawl': return { ring: 'border-cyan-500/30', text: 'text-cyan-400', bg: 'bg-slate-900', glow: 'shadow-cyan-900/20' };
                case 'walk': return { ring: 'border-indigo-500/30', text: 'text-indigo-400', bg: 'bg-slate-900', glow: 'shadow-indigo-900/20' };
                case 'run': return { ring: 'border-amber-500/30', text: 'text-amber-400', bg: 'bg-slate-900', glow: 'shadow-amber-900/20' };
                case 'fly': return { ring: 'border-purple-500/30', text: 'text-purple-400', bg: 'bg-slate-900', glow: 'shadow-purple-900/20' };
                default: return { ring: 'border-slate-700', text: 'text-slate-500', bg: 'bg-slate-900', glow: 'shadow-none' };
              }
            };
            const colors = getStageColor(stage.id);

            return (
              <div
                key={stage.id}
                className="flex flex-col items-center group cursor-pointer relative w-24 md:w-32"
                onClick={() => onStageSelect(index)}
              >

                {/* Icon Circle - Bold & Solid - STABILIZED */}
                <div className="relative h-32 w-32 flex items-center justify-center">
                  <motion.div
                    className={`
                        flex items-center justify-center rounded-full shadow-lg border-4 transition-colors duration-300 z-20 relative
                        ${isActive
                        ? 'w-28 h-28 border-white bg-cyan-500 text-white shadow-[0_0_30px_rgba(6,182,212,0.6)] z-30'
                        : isCompleted
                          ? 'w-16 h-16 border-blue-400/50 border-2 bg-blue-900/80 text-blue-200 shadow-[0_0_15px_rgba(37,99,235,0.4)] backdrop-blur-sm'
                          : `w-16 h-16 border-2 ${colors.ring} ${colors.bg} ${colors.text} hover:scale-110 hover:border-white/50 hover:text-white shadow-lg transition-all duration-300`}
                      `}
                    animate={{
                      backgroundColor: isActive ? '#06b6d4' : isCompleted ? '#1e3a8a' : '#0f172a',
                      borderColor: isActive ? '#ffffff' : isCompleted ? '#60a5fa' : '#334155',
                    }}
                  >
                    <Icon
                      size={isActive ? 48 : 24}
                      strokeWidth={isActive ? 2 : 2}
                      className="transition-all duration-300"
                    />
                  </motion.div>
                </div>

                {/* Label Container - Fixed Height to prevent Jitter */}
                <div className="flex flex-col items-center text-center h-12 justify-start mt-1">
                  <span className={`
                        text-sm font-bold uppercase tracking-widest transition-colors mt-2
                        ${isActive ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' : isCompleted ? 'text-blue-400' : 'text-slate-500'}
                    `}>
                    {stage.title}
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