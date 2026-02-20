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
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          CSDM <span className="text-blue-600">MATURITY</span>
        </h1>
      </motion.div>

      {/* Main Stepper Container */}
      <div className="relative w-full max-w-6xl px-4 md:px-16">

        {/* Track Background - Solid & Thick */}
        <div className="absolute top-[3rem] left-0 md:left-12 right-0 md:right-12 h-2 bg-slate-200 rounded-full mx-8 md:mx-16 z-0" />

        {/* Active Progress Track - Solid Gradient */}
        <motion.div
          className="absolute top-[3rem] left-0 md:left-12 h-2 rounded-full mx-8 md:mx-16 z-0 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md"
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
                        ? 'w-28 h-28 border-white bg-cyan-600 text-white shadow-cyan-200 shadow-xl'
                        : isCompleted
                          ? 'w-14 h-14 border-white bg-blue-600 text-white'
                          : 'w-14 h-14 border-slate-100 bg-white text-slate-300'}
                      `}
                    animate={{
                      backgroundColor: isActive ? '#0891b2' : isCompleted ? '#2563eb' : '#ffffff',
                      borderColor: '#ffffff',
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
                        text-sm font-bold uppercase tracking-wide transition-colors
                        ${isActive ? 'text-cyan-700' : isCompleted ? 'text-blue-700' : 'text-slate-400'}
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