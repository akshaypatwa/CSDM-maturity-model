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

        {/* Track Roadmap Container - Perfectly centered under the icons */}
        <div className="absolute top-0 left-16 md:left-32 right-16 md:right-32 h-32 flex flex-col justify-center z-10 pointer-events-none">
          {/* Empty Roadmap Pipeline */}
          <div className="w-full h-4 md:h-5 bg-slate-900 rounded-full border border-slate-700/60 shadow-inner flex items-center px-1">
            <div className="w-full h-[2px] bg-[linear-gradient(to_right,#334155_50%,transparent_50%)] bg-[length:16px_100%] opacity-50" />
          </div>
        </div>

        {/* Active Roadmap Pipeline - Glowing */}
        <div className="absolute top-0 left-16 md:left-32 right-16 md:right-32 h-32 flex flex-col justify-center z-10 pointer-events-none">
          <motion.div
            className="h-4 md:h-5 rounded-full flex items-center overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.4)] relative"
            style={{ backgroundImage: "linear-gradient(to right, #10b981, #06b6d4, #4f46e5, #d946ef, #a855f7)" }}
            initial={{ width: '0%' }}
            animate={{ width: `${(currentStageIndex / (STAGES.length - 1)) * 100}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Lit up dashed line indicating movement */}
            <div className="absolute inset-0 w-full min-w-[2000px] h-[2px] my-auto bg-[linear-gradient(to_right,rgba(255,255,255,0.7)_50%,transparent_50%)] bg-[length:16px_100%] opacity-90" />

            {/* Flowing energy ping */}
            <motion.div
              className="absolute inset-y-0 w-24 md:w-40 bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-20deg]"
              animate={{ x: ['-200%', '1000%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </div>

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

                {/* Icon Circle - Roadmap Node */}
                <div className="relative h-32 w-32 flex items-center justify-center">

                  {/* Outer Pulsing Ring for Active Stage */}
                  {isActive && (
                    <motion.div
                      className={`absolute rounded-full border border-white/40 ${colors.activeBg} opacity-20`}
                      style={{ width: '130px', height: '130px' }}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}

                  <motion.div
                    className={`
                        flex items-center justify-center rounded-full shadow-lg border-4 transition-all duration-300 z-20 relative
                        ${isActive
                        ? `w-24 h-24 md:w-28 md:h-28 border-white ${colors.activeBg} text-white ${colors.activeShadow} z-30`
                        : isCompleted
                          ? `w-14 h-14 md:w-16 md:h-16 border-white/20 border-2 ${colors.activeBg} text-white/90 shadow-lg backdrop-blur-sm opacity-90 z-20`
                          : `w-14 h-14 md:w-16 md:h-16 border-2 ${colors.ring} ${colors.bg} ${colors.text} hover:scale-110 hover:border-white/50 hover:text-white shadow-lg transition-transform z-20`}
                      `}
                  >
                    <Icon
                      size={isActive ? (window.innerWidth < 768 ? 36 : 48) : 24}
                      strokeWidth={isActive ? 2 : 2}
                      className="transition-all duration-300"
                    />
                  </motion.div>
                </div>

                {/* Highly Stylized Label Container */}
                <div className="flex flex-col items-center text-center h-16 justify-start mt-0">
                  <span className={`
                        text-[10px] md:text-xs lg:text-sm font-black uppercase tracking-[0.2em] transition-all duration-300
                        ${isActive ? `${colors.text} drop-shadow-[0_0_10px_currentColor] scale-110 mb-1` : isCompleted ? colors.text : 'text-slate-500'}
                    `}>
                    {stage.title}
                  </span>

                  {/* Dynamic Status Tags */}
                  <div className="h-6 flex items-center justify-center mt-1">
                    {isActive && (
                      <span className="text-[8px] md:text-[9px] text-white font-bold tracking-widest uppercase bg-white/10 px-2.5 py-1 rounded-full border border-white/20 shadow-sm backdrop-blur-sm">
                        In Progress
                      </span>
                    )}
                    {isCompleted && (
                      <span className="text-[8px] md:text-[9px] font-bold tracking-widest uppercase text-slate-400 bg-slate-800/50 px-2 py-0.5 rounded-full border border-slate-700/50">
                        Completed
                      </span>
                    )}
                  </div>
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