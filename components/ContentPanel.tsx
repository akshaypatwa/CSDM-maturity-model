import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StageData, ViewMode, StageId } from '../types';
import { Activity, Database, Box, CheckCircle2, Bot, Wind, Cloud, Zap, Scan, Network, Globe, Radio, Play, Hexagon } from 'lucide-react';
import StageVisualizer from './StageVisualizer';

interface ContentPanelProps {
  stage: StageData;
  viewMode: ViewMode;
}

const ContentPanel: React.FC<ContentPanelProps> = ({ stage, viewMode }) => {
  const items = stage.items[viewMode];
  
  // Determine accent color based on stage for the cards
  const getStageColor = (id: string) => {
    switch(id) {
        case 'foundation': return 'from-blue-500 to-blue-600';
        case 'crawl': return 'from-cyan-500 to-cyan-600';
        case 'walk': return 'from-indigo-500 to-indigo-600';
        case 'run': return 'from-yellow-500 to-orange-500';
        case 'fly': return 'from-purple-500 to-pink-500';
        default: return 'from-slate-500 to-slate-600';
    }
  };

  const stageColorClass = getStageColor(stage.id);

  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 overflow-hidden pb-2">
      
      {/* =======================
          LEFT: SCORECARD (20%)
          ======================= */}
      <div className="col-span-1 lg:col-span-3 flex flex-col h-full overflow-hidden">
        <motion.div 
          className="flex-1 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-3xl p-5 flex flex-col relative overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          key={`kpi-panel-${stage.id}`}
        >
           {/* Header */}
          <div className="flex items-center gap-3 mb-2 border-b border-slate-800 pb-3 flex-none">
            <div className="p-2 bg-slate-800 rounded-lg shadow-inner">
                <Activity className="text-cyan-400" size={18} />
            </div>
            <div>
                <h3 className="text-slate-200 text-sm font-bold uppercase tracking-widest">Maturity Score</h3>
                <div className="text-slate-500 text-[10px]">Real-time Assessment</div>
            </div>
          </div>
          
          {/* Main Gauge - EXPANDED to fill space */}
          <div className="flex-1 flex flex-col items-center justify-center min-h-[160px]">
             <div className="relative w-56 h-56 flex items-center justify-center">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-cyan-500/5 rounded-full blur-2xl animate-pulse"></div>

                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                  {/* Decorative Ticks */}
                  {[...Array(40)].map((_, i) => (
                      <line 
                        key={i}
                        x1="100" y1="12" x2="100" y2="20" 
                        transform={`rotate(${i * 9} 100 100)`} 
                        className="stroke-slate-700" 
                        strokeWidth="2"
                      />
                  ))}
                  
                  {/* Background Ring */}
                  <circle cx="100" cy="100" r="74" stroke="#1e293b" strokeWidth="10" fill="none" className="drop-shadow-inner" />
                  
                  {/* Progress Ring */}
                  <motion.circle 
                    cx="100" cy="100" r="74" 
                    stroke="url(#gaugeGradient)" 
                    strokeWidth="10"
                    strokeLinecap="round" 
                    fill="none" 
                    strokeDasharray={465}
                    initial={{ strokeDashoffset: 465 }}
                    animate={{ strokeDashoffset: 465 - (465 * stage.maturity) / 100 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="filter drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                  />
                  <defs>
                    <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 tracking-tighter drop-shadow-sm">
                    {stage.maturity}<span className="text-2xl text-slate-500 ml-1">%</span>
                  </span>
                  <div className="mt-1 px-3 py-1 bg-slate-800/80 rounded-full border border-slate-700 backdrop-blur-sm">
                    <span className="text-[10px] text-cyan-400 font-bold tracking-[0.2em] uppercase">
                        INDEX
                    </span>
                  </div>
                </div>
             </div>
          </div>

          {/* ANIMATION BOX (Compact & Tight) */}
          <div className="w-full h-40 bg-slate-950 rounded-2xl border-2 border-slate-800 relative overflow-hidden flex flex-col items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] group flex-none mt-2">
              {/* Scanlines Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 pointer-events-none bg-[length:100%_4px,3px_100%]"></div>
              
              {/* Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,41,59,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,41,59,0.5)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
              
              <div className="absolute top-2 left-3 z-30">
                  <span className="text-[9px] font-bold text-cyan-500 uppercase tracking-widest flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></span>
                      SIM: {stage.title.toUpperCase()}
                  </span>
              </div>
              <MaturityActionAnimation stageId={stage.id} />
          </div>

        </motion.div>
      </div>

      {/* =======================
          CENTER: VISUALIZER (55%)
          ======================= */}
      <div className="col-span-1 lg:col-span-6 flex flex-col gap-4 h-full min-h-[400px]">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           key={`visualizer-${stage.id}`}
           className="w-full h-full flex-1"
        >
          <StageVisualizer stageId={stage.id} />
        </motion.div>
      </div>

      {/* =======================
          RIGHT: COMPONENTS (25%)
          ======================= */}
      <div className="col-span-1 lg:col-span-3 flex flex-col h-full overflow-hidden">
        <div className="flex-1 bg-slate-900/60 border border-slate-700/50 rounded-3xl p-6 relative overflow-hidden flex flex-col shadow-xl">
          <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-3">
             <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-800 rounded-lg shadow-inner">
                    <Box className="text-purple-400" size={18} />
                </div>
                <div>
                    <h4 className="text-slate-200 text-sm font-bold uppercase tracking-widest">
                    Data Model
                    </h4>
                    <div className="text-slate-500 text-[10px]">Required Tables</div>
                </div>
             </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
            <AnimatePresence mode="popLayout">
              {items.map((item, idx) => (
                <motion.div
                  key={`${stage.id}-${item.id}`}
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="relative bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-slate-500 rounded-xl p-4 pl-5 flex items-start gap-3 transition-all group cursor-default shadow-lg overflow-hidden"
                >
                  {/* Colorful Stripe */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${stageColorClass}`}></div>
                  
                  <div className="mt-1 w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 border border-slate-700 group-hover:border-slate-500 transition-colors shadow-inner">
                    <Database size={14} className="text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h5 className="text-slate-100 font-bold text-sm mb-1 flex items-center gap-2">
                        {item.label}
                    </h5>
                    <p className="text-slate-400 text-xs leading-snug">{item.description}</p>
                  </div>
                  {/* Subtle hover lift effect */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors pointer-events-none"></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

    </div>
  );
};

// --- Sub-component for Character Action Animations ---
const MaturityActionAnimation: React.FC<{ stageId: StageId }> = ({ stageId }) => {
    
    // 1. FOUNDATION: Blueprint / Building
    if (stageId === 'foundation') {
        return (
            <div className="relative w-full h-full flex items-center justify-center bg-slate-900">
                 {/* Blueprint Grid - 3D Plane */}
                 <div className="absolute inset-0 bg-[linear-gradient(#1e40af33_1px,transparent_1px),linear-gradient(90deg,#1e40af33_1px,transparent_1px)] bg-[size:16px_16px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom opacity-50"></div>
                 
                 {/* Builder Bot */}
                 <div className="relative z-10 flex flex-col items-center mt-4">
                     <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                     >
                         <Bot size={48} className="text-blue-400" />
                     </motion.div>
                     
                     {/* Holographic Projection */}
                     <motion.div 
                        className="absolute bottom-10 w-20 h-20 border-2 border-blue-500/50 rounded-lg bg-blue-500/10"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, rotateY: 360 }}
                        transition={{ duration: 4, repeat: Infinity }}
                     />
                 </div>
                 <div className="absolute bottom-2 text-[10px] text-blue-400 font-bold tracking-widest font-mono">CONSTRUCTING ARCHITECTURE</div>
            </div>
        );
    }

    // 2. CRAWL: High-Tech Rover Scanning
    if (stageId === 'crawl') {
        return (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-slate-900">
                {/* 3D Grid Floor */}
                <motion.div 
                   className="absolute -bottom-10 -left-1/4 w-[150%] h-[100%] bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"
                   style={{ transform: "perspective(300px) rotateX(45deg)" }}
                   animate={{ backgroundPosition: ["0px 0px", "0px 60px"] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Rover Bot */}
                <motion.div 
                    className="relative z-10"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                >
                     {/* Body */}
                     <div className="w-16 h-10 bg-slate-800 rounded-lg border border-cyan-500 flex items-center justify-center relative shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                        <Scan size={20} className="text-cyan-400" />
                        
                        {/* Wheels/Tracks */}
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-slate-700 rounded-full border border-slate-600 animate-spin"></div>
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-slate-700 rounded-full border border-slate-600 animate-spin"></div>
                     </div>
                     
                     {/* Conical Scanner Beam */}
                     <motion.div 
                       className="absolute top-1/2 left-full w-24 h-32 bg-gradient-to-r from-cyan-400/30 to-transparent clip-path-polygon"
                       style={{ clipPath: 'polygon(0 45%, 100% 0, 100% 100%, 0 55%)', transformOrigin: 'left center' }}
                       animate={{ rotate: [-5, 5, -5], opacity: [0.4, 0.7, 0.4] }}
                       transition={{ duration: 2, repeat: Infinity }}
                     />
                </motion.div>

                {/* Discovered Object Popups */}
                <motion.div
                   className="absolute top-1/3 right-10"
                   initial={{ scale: 0, opacity: 0 }}
                   animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], x: -50 }}
                   transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                   <Hexagon size={24} className="text-green-400 fill-green-400/20" />
                   <div className="absolute -top-4 left-0 text-[8px] text-green-400 font-mono">ASSET</div>
                </motion.div>

                 <div className="absolute bottom-2 text-[10px] text-cyan-400 font-bold tracking-widest font-mono bg-slate-900/50 px-2 rounded">ROVER SCAN IN PROGRESS</div>
            </div>
        );
    }

    // 3. WALK: Walking Bot in City
    if (stageId === 'walk') {
        return (
             <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-slate-900">
                 {/* Parallax Cityscape */}
                 <div className="absolute bottom-8 w-full flex items-end justify-center opacity-30 gap-1">
                     {[...Array(8)].map((_, i) => (
                         <motion.div 
                            key={i}
                            className="w-4 bg-indigo-500"
                            style={{ height: Math.random() * 40 + 20 }}
                            animate={{ x: -100 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * -0.3 }}
                         />
                     ))}
                 </div>
                 
                 {/* Walking Bot */}
                 <div className="absolute bottom-[2.5rem]">
                    <motion.div
                        className="relative text-indigo-400"
                        animate={{ y: [0, -4, 0] }} // Bobbing walk cycle
                        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                         <Bot size={48} />
                    </motion.div>
                 </div>
                 
                 <div className="absolute bottom-2 text-[10px] text-indigo-400 font-bold tracking-widest font-mono">STEADY PROGRESS</div>
             </div>
        );
    }

    // 4. RUN: Running Bot in Tunnel
    if (stageId === 'run') {
        return (
             <div className="relative w-full h-full flex items-center justify-center bg-slate-900 overflow-hidden">
                {/* Warp Tunnel Effect */}
                <div className="absolute inset-0 opacity-50">
                    {[...Array(6)].map((_, i) => (
                        <motion.div 
                            key={i}
                            className="absolute left-0 right-0 h-[1px] bg-yellow-500"
                            style={{ top: `${i * 20}%` }}
                            animate={{ scaleX: [0.5, 1.5], opacity: [0, 1, 0] }}
                            transition={{ duration: 0.2, repeat: Infinity, delay: i * 0.05 }}
                        />
                    ))}
                </div>

                {/* Running Bot */}
                <motion.div
                    className="relative z-10 text-yellow-400 mb-2"
                    animate={{ y: [0, -2, 0] }} 
                    transition={{ duration: 0.15, repeat: Infinity }}
                >
                     <div className="transform -skew-x-12"> {/* Leaning forward */}
                        <Bot size={56} />
                        
                        {/* Afterburner / Blur */}
                        <motion.div 
                           className="absolute top-1/2 -left-8 w-12 h-6 bg-orange-500/50 blur-lg rounded-full"
                           animate={{ scale: [1, 1.2, 1] }}
                           transition={{ duration: 0.1, repeat: Infinity }}
                        />
                     </div>
                     <Wind size={24} className="absolute top-1/2 -left-6 text-white/50" />
                     {/* Sparks */}
                     <Zap size={16} className="absolute bottom-0 -right-2 text-yellow-200 animate-bounce" />
                </motion.div>

                 <div className="absolute bottom-2 text-[10px] text-yellow-400 font-bold tracking-widest font-mono italic">
                    MAX VELOCITY
                 </div>
             </div>
        );
    }

    // 5. FLY: Flying Bot over Earth
    if (stageId === 'fly') {
        return (
             <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-slate-900">
                 {/* Rotating Earth Horizon */}
                 <motion.div 
                    className="absolute -bottom-[80%] w-[150%] h-[100%] bg-blue-900 rounded-[50%] border-t-4 border-blue-400 blur-sm"
                    animate={{ rotate: 5 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
                 >
                     <div className="absolute top-2 left-1/4 w-20 h-4 bg-white/20 rounded-full blur-md"></div>
                 </motion.div>

                {/* Flying Bot */}
                <motion.div
                    className="relative z-10 text-green-400"
                    animate={{ y: [-5, 5, -5] }} // Floating
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                     <Bot size={56} />
                     
                     {/* Jetpack Flames */}
                     <motion.div 
                       className="absolute -bottom-4 left-1/4 w-2 h-8 bg-gradient-to-b from-orange-400 to-transparent"
                       animate={{ height: [20, 30, 20] }}
                       transition={{ duration: 0.1, repeat: Infinity }}
                     />
                     <motion.div 
                       className="absolute -bottom-4 right-1/4 w-2 h-8 bg-gradient-to-b from-orange-400 to-transparent"
                       animate={{ height: [20, 30, 20] }}
                       transition={{ duration: 0.1, repeat: Infinity, delay: 0.05 }}
                     />
                </motion.div>
                
                {/* Passing Satellites */}
                <motion.div 
                   className="absolute top-4 right-0 text-slate-500"
                   animate={{ x: [-200, 200], y: [20, -20] }}
                   transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                    <Radio size={16} />
                </motion.div>

                 <div className="absolute bottom-2 text-[10px] text-green-400 font-bold tracking-widest font-mono">ORBITAL STRATEGY</div>
             </div>
        );
    }

    return null;
};

export default ContentPanel;