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

        {/* Glassmorphism Container for Stepper */}
        <div className="absolute inset-x-0 top-[2rem] bottom-[-1rem] bg-slate-900/40 backdrop-blur-md rounded-full border border-slate-700/50 shadow-2xl -mx-4 md:-mx-8 z-0"></div>

        {/* Track Background - Solid & Thick */}
        <div className="absolute top-[3rem] left-0 md:left-12 right-0 md:right-12 h-1.5 bg-slate-800 rounded-full mx-8 md:mx-16 z-10 border border-slate-700 shadow-inner" />

        {/* Active Progress Track - Solid Gradient - GLOWING */}
        <motion.div
          className="absolute top-[3rem] left-0 md:left-12 h-1.5 rounded-full mx-8 md:mx-16 z-10 bg-gradient-to-r from-emerald-500 via-cyan-400 to-purple-500 shadow-[0_0_20px_rgba(52,211,153,0.6)]"
          initial={{ width: '0%' }}
          animate={{
            width: `${(currentStageIndex / (STAGES.length - 1)) * 100}%`,
          }}
          transition={{
            duration: 0.6, ease: "easeInOut"
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
                // CHANGED: Foundation is now Emerald/Green
                case 'foundation': return {
                  ring: 'border-emerald-500/30',
                  text: 'text-emerald-400',
                  bg: 'bg-slate-900',
                  glow: 'shadow-[0_0_20px_rgba(16,185,129,0.3)]',
                  activeRing: 'border-emerald-400',
                  activeBg: 'bg-emerald-600',
                  activeShadow: 'shadow-[0_0_40px_rgba(16,185,129,0.6)]'
                };
                case 'crawl': return {
                  ring: 'border-cyan-500/30',
                  text: 'text-cyan-400',
                  bg: 'bg-slate-900',
                  glow: 'shadow-cyan-900/20',
                  activeRing: 'border-cyan-400',
                  activeBg: 'bg-cyan-600',
                  activeShadow: 'shadow-[0_0_40px_rgba(6,182,212,0.6)]'
                };
                case 'walk': return {
                  ring: 'border-indigo-500/30',
                  text: 'text-indigo-400',
                  bg: 'bg-slate-900',
                  glow: 'shadow-indigo-900/20',
                  activeRing: 'border-indigo-400',
                  activeBg: 'bg-indigo-600',
                  activeShadow: 'shadow-[0_0_40px_rgba(99,102,241,0.6)]'
                };
                case 'run': return {
                  ring: 'border-amber-500/30',
                  text: 'text-amber-400',
                  bg: 'bg-slate-900',
                  glow: 'shadow-amber-900/20',
                  activeRing: 'border-amber-400',
                  activeBg: 'bg-amber-600',
                  activeShadow: 'shadow-[0_0_40px_rgba(245,158,11,0.6)]'
                };
                case 'fly': return {
                  ring: 'border-purple-500/30',
                  text: 'text-purple-400',
                  bg: 'bg-slate-900',
                  glow: 'shadow-purple-900/20',
                  activeRing: 'border-purple-400',
                  activeBg: 'bg-purple-600',
                  activeShadow: 'shadow-[0_0_40px_rgba(168,85,247,0.6)]'
                };
                default: return { ring: 'border-slate-700', text: 'text-slate-500', bg: 'bg-slate-900', glow: 'shadow-none', activeRing: 'border-white', activeBg: 'bg-slate-600', activeShadow: 'shadow-none' };
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
                        ? `w-28 h-28 border-white ${colors.activeBg} text-white ${colors.activeShadow} z-30`
                        : isCompleted
                          ? `w-16 h-16 border-white/20 border-2 ${colors.activeBg} text-white/90 shadow-lg backdrop-blur-sm opacity-90`
                          : `w-16 h-16 border-2 ${colors.ring} ${colors.bg} ${colors.text} hover:scale-110 hover:border-white/50 hover:text-white shadow-lg transition-transform`}
                      `}

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
                        ${isActive ? `${colors.text} drop-shadow-[0_0_8px_currentColor]` : isCompleted ? colors.text : 'text-slate-500'}
                    `}>
                    {stage.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div >
  );
};

export default NavBar;