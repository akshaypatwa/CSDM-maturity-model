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
        <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 tracking-tight filter drop-shadow-sm">
          CSDM MATURITY SIMULATOR
        </h1>
        <p className="text-slate-500 text-xs font-bold tracking-[0.4em] uppercase mt-2">
          Strategic Transformation Journey
        </p>
      </div>

      {/* Enhanced Stepper Container - Light Glass Cockpit Look */}
      <div className="relative w-full max-w-6xl px-4 md:px-12 py-6 bg-white/60 backdrop-blur-xl rounded-full border border-slate-200 shadow-xl overflow-hidden">
        {/* Decorative Grid inside navbar */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
        
        {/* The Track Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
        
        {/* Animated Active Progress Line (Data Flow) */}
        <motion.div 
          className="absolute top-1/2 left-0 h-1 -translate-y-1/2 z-0"
          style={{ 
              background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #a855f7, #06b6d4)', 
              backgroundSize: '200% 100%' 
          }}
          initial={{ width: '0%' }}
          animate={{ 
              width: `${(currentStageIndex / (STAGES.length - 1)) * 100}%`,
              backgroundPosition: ['0% 0%', '100% 0%'] 
          }}
          transition={{ 
              width: { duration: 0.6, ease: "easeInOut" },
              backgroundPosition: { duration: 2, repeat: Infinity, ease: "linear" } 
          }}
        />

        <div className="flex justify-between items-center relative z-10 w-full">
          {STAGES.map((stage, index) => {
            const Icon = STAGE_ICONS[stage.id];
            const isActive = index === currentStageIndex;
            const isCompleted = index < currentStageIndex;
            
            return (
              <div key={stage.id} className="flex flex-col items-center group cursor-pointer relative" onClick={() => onStageSelect(index)}>
                
                {/* Connection Dot on Line */}
                <div className={`absolute top-[2.5rem] md:top-[3rem] w-full h-[2px] ${index === 0 ? 'hidden' : ''} ${isCompleted || isActive ? 'bg-cyan-500' : 'bg-slate-200'} -left-1/2 -z-10`} />

                {/* Icon Container */}
                <motion.div
                  className={`
                    w-12 h-12 md:w-24 md:h-24 rounded-full flex items-center justify-center border-[3px] transition-all duration-300 relative mb-3
                    ${isActive 
                      ? 'bg-white border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.4)] z-20 scale-110' 
                      : isCompleted 
                        ? 'bg-white border-blue-500 text-blue-500 shadow-md' 
                        : 'bg-slate-50 border-slate-300 text-slate-400'}
                  `}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon 
                    size={isActive ? 36 : 24} 
                    strokeWidth={isActive ? 2.5 : 2}
                    className={`
                      transition-all duration-300
                      ${isActive ? 'text-cyan-600 drop-shadow-md' : isCompleted ? 'text-blue-500' : 'text-slate-400'}
                    `} 
                  />
                  
                  {/* Rotating Ring for Active */}
                  {isActive && (
                    <motion.div 
                        className="absolute inset-[-6px] rounded-full border-2 border-cyan-500/30 border-t-transparent border-l-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                  {/* Pulse Ring */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-full bg-cyan-400/10 animate-ping"></div>
                  )}
                </motion.div>
                
                {/* Label Block */}
                <div className="flex flex-col items-center gap-1 absolute top-full mt-2 w-32 text-center">
                    <span className={`
                    text-[10px] md:text-sm font-black tracking-widest transition-all duration-300 uppercase
                    ${isActive ? 'text-slate-900 scale-110' : isCompleted ? 'text-blue-600' : 'text-slate-400'}
                    `}>
                    {stage.title}
                    </span>
                    
                    {/* Active Indicator Label */}
                    <span className={`
                        text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider
                        ${isActive ? 'bg-cyan-50 text-cyan-700 border border-cyan-200 opacity-100' : 'opacity-0'}
                        transition-opacity duration-300
                    `}>
                        CURRENT STAGE
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