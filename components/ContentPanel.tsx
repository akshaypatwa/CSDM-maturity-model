import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StageData, ViewMode, StageId } from '../types';
import { Activity, Database, Box, CheckCircle2, Bot, Wind, Cloud, Zap, Scan, Network, Globe, Radio, Play, Hexagon, Layers } from 'lucide-react';
import StageVisualizer from './StageVisualizer';

interface ContentPanelProps {
  stage: StageData;
  viewMode: ViewMode;
}

const ContentPanel: React.FC<ContentPanelProps> = ({ stage, viewMode }) => {
  const items = stage.items[viewMode];
  
  // High-Fidelity Light Mode Theme Configuration
  const getStageTheme = (id: string) => {
    switch(id) {
        case 'foundation': return {
            headerGradient: "from-blue-50 to-blue-100/50",
            cardBorder: "border-slate-200",
            headerBorder: "border-blue-100",
            iconColor: "text-blue-600",
            iconBg: "bg-white border-blue-200",
            textColor: "text-blue-900",
            glow: "shadow-[0_10px_40px_-10px_rgba(59,130,246,0.15)]",
            stripe: "from-blue-500 to-blue-600",
            gaugeGradient: ["#3b82f6", "#60a5fa"],
            accentBg: "bg-blue-50"
        };
        case 'crawl': return {
            headerGradient: "from-cyan-50 to-cyan-100/50",
            cardBorder: "border-slate-200",
            headerBorder: "border-cyan-100",
            iconColor: "text-cyan-600",
            iconBg: "bg-white border-cyan-200",
            textColor: "text-cyan-900",
            glow: "shadow-[0_10px_40px_-10px_rgba(6,182,212,0.15)]",
            stripe: "from-cyan-500 to-cyan-600",
            gaugeGradient: ["#06b6d4", "#22d3ee"],
            accentBg: "bg-cyan-50"
        };
        case 'walk': return {
            headerGradient: "from-indigo-50 to-indigo-100/50",
            cardBorder: "border-slate-200",
            headerBorder: "border-indigo-100",
            iconColor: "text-indigo-600",
            iconBg: "bg-white border-indigo-200",
            textColor: "text-indigo-900",
            glow: "shadow-[0_10px_40px_-10px_rgba(99,102,241,0.15)]",
            stripe: "from-indigo-500 to-indigo-600",
            gaugeGradient: ["#6366f1", "#818cf8"],
            accentBg: "bg-indigo-50"
        };
        case 'run': return {
            headerGradient: "from-amber-50 to-amber-100/50",
            cardBorder: "border-slate-200",
            headerBorder: "border-amber-100",
            iconColor: "text-amber-600",
            iconBg: "bg-white border-amber-200",
            textColor: "text-amber-900",
            glow: "shadow-[0_10px_40px_-10px_rgba(245,158,11,0.15)]",
            stripe: "from-amber-500 to-orange-500",
            gaugeGradient: ["#f59e0b", "#fbbf24"],
            accentBg: "bg-amber-50"
        };
        case 'fly': return {
            headerGradient: "from-purple-50 to-purple-100/50",
            cardBorder: "border-slate-200",
            headerBorder: "border-purple-100",
            iconColor: "text-purple-600",
            iconBg: "bg-white border-purple-200",
            textColor: "text-purple-900",
            glow: "shadow-[0_10px_40px_-10px_rgba(168,85,247,0.15)]",
            stripe: "from-purple-500 to-pink-500",
            gaugeGradient: ["#a855f7", "#d8b4fe"],
            accentBg: "bg-purple-50"
        };
        default: return {
            headerGradient: "from-slate-50 to-slate-100",
            cardBorder: "border-slate-200",
            headerBorder: "border-slate-200",
            iconColor: "text-slate-600",
            iconBg: "bg-white border-slate-200",
            textColor: "text-slate-800",
            glow: "shadow-xl",
            stripe: "from-slate-500 to-slate-600",
            gaugeGradient: ["#94a3b8", "#cbd5e1"],
            accentBg: "bg-slate-50"
        };
    }
  };

  const theme = getStageTheme(stage.id);

  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 overflow-hidden pb-2">
      
      {/* =======================
          LEFT: SCORECARD (20%)
          ======================= */}
      <div className="col-span-1 lg:col-span-3 flex flex-col h-full overflow-hidden">
        <motion.div 
          className={`flex-1 bg-white border ${theme.cardBorder} rounded-3xl p-0 flex flex-col relative overflow-hidden group transition-all duration-500 ${theme.glow}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          key={`kpi-panel-${stage.id}`}
        >
           {/* Panel Background - Clean White/Subtle */}
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-white to-slate-50 pointer-events-none" />
           <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

           <div className="relative z-10 flex flex-col h-full">
              
              {/* HEADER */}
              <div className={`flex items-center gap-3 p-4 border-b ${theme.headerBorder} bg-gradient-to-r ${theme.headerGradient} relative overflow-hidden flex-none z-20`}>
                <div className={`p-2 rounded-lg shadow-sm border ${theme.iconBg}`}>
                    <Activity className={theme.iconColor} size={20} />
                </div>
                <div>
                    <h3 className={`text-sm font-black uppercase tracking-widest ${theme.textColor}`}>Maturity Score</h3>
                    <div className="text-slate-500 text-[10px] font-bold tracking-wider">REAL-TIME INDEX</div>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col p-5">
                  {/* Main Gauge */}
                  <div className="flex-1 flex flex-col items-center justify-center min-h-[160px]">
                    <div className="relative w-56 h-56 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                        {/* Decorative Ticks - Darker for Light Mode */}
                        {[...Array(40)].map((_, i) => (
                            <line 
                                key={i}
                                x1="100" y1="12" x2="100" y2="20" 
                                transform={`rotate(${i * 9} 100 100)`} 
                                className="stroke-slate-200" 
                                strokeWidth="2"
                            />
                        ))}
                        
                        {/* Background Ring */}
                        <circle cx="100" cy="100" r="74" stroke="#e2e8f0" strokeWidth="10" fill="none" />
                        
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
                            className="filter drop-shadow-md"
                        />
                        <defs>
                            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor={theme.gaugeGradient[0]} />
                                <stop offset="100%" stopColor={theme.gaugeGradient[1]} />
                            </linearGradient>
                        </defs>
                        </svg>
                        
                        {/* Center Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                        <span className="text-5xl font-black text-slate-800 tracking-tighter drop-shadow-sm">
                            {stage.maturity}<span className="text-2xl text-slate-400 ml-1">%</span>
                        </span>
                        <div className="mt-1 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm">
                            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${theme.iconColor}`}>
                                STATUS
                            </span>
                        </div>
                        </div>
                    </div>
                  </div>

                  {/* ANIMATION BOX (Compact & Tight) - Light Container */}
                  <div className="w-full h-40 bg-slate-50 rounded-2xl border border-slate-200 relative overflow-hidden flex flex-col items-center justify-center shadow-inner group flex-none mt-2">
                      {/* Grid Background */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                      
                      <div className="absolute top-2 left-3 z-30">
                          <span className={`text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 ${theme.iconColor}`}>
                              <span className={`w-1.5 h-1.5 rounded-full animate-pulse bg-current`}></span>
                              SIM: {stage.title.toUpperCase()}
                          </span>
                      </div>
                      <MaturityActionAnimation stageId={stage.id} />
                  </div>
              </div>
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
        <div className={`flex-1 bg-white border ${theme.cardBorder} rounded-3xl p-0 relative overflow-hidden flex flex-col transition-all duration-500 ${theme.glow}`}>
          
          <div className="relative z-10 flex flex-col h-full overflow-hidden">
              
              {/* HEADER */}
              <div className={`flex items-center gap-3 p-4 border-b ${theme.headerBorder} bg-gradient-to-l ${theme.headerGradient} relative overflow-hidden flex-none z-20`}>
                <div className={`p-2 rounded-lg shadow-sm border ${theme.iconBg}`}>
                    {viewMode === 'application' ? <Box className={theme.iconColor} size={20} /> : <Layers className={theme.iconColor} size={20} />}
                </div>
                <div>
                    <h4 className={`text-sm font-black uppercase tracking-widest ${theme.textColor}`}>
                    {viewMode === 'application' ? 'Application View' : 'Service View'}
                    </h4>
                    <div className="text-slate-500 text-[10px] font-bold tracking-wider">ACTIVE DATA OBJECTS</div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar min-h-0 p-5 pt-3">
                <AnimatePresence mode="popLayout">
                {items.map((item, idx) => (
                    <motion.div
                    key={`${stage.id}-${item.id}`}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className={`relative bg-white hover:bg-slate-50 border border-slate-200 hover:border-${theme.iconColor.split('-')[1]}-300 rounded-xl p-4 pl-5 flex items-start gap-3 transition-all group cursor-default shadow-sm hover:shadow-md overflow-hidden shrink-0`}
                    >
                    {/* Colorful Stripe based on stage */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${theme.stripe}`}></div>
                    
                    <div className="mt-1 w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-slate-300 transition-colors">
                        <Database size={14} className={`text-slate-400 group-hover:${theme.iconColor} transition-colors`} />
                    </div>
                    <div>
                        <h5 className="text-slate-800 font-bold text-sm mb-1 flex items-center gap-2 group-hover:text-black transition-colors">
                            {item.label}
                        </h5>
                        <p className="text-slate-500 text-xs leading-snug group-hover:text-slate-600 transition-colors">{item.description}</p>
                    </div>
                    </motion.div>
                ))}
                </AnimatePresence>
              </div>
          </div>
        </div>
      </div>

    </div>
  );
};

// --- Sub-component for Character Action Animations (Light Mode Optimized) ---
const MaturityActionAnimation: React.FC<{ stageId: StageId }> = ({ stageId }) => {
    
    // 1. FOUNDATION: Blueprint / Building - Light Blue Theme
    if (stageId === 'foundation') {
        return (
            <div className="relative w-full h-full flex items-center justify-center bg-blue-50/50">
                 {/* Blueprint Grid */}
                 <div className="absolute inset-0 bg-[linear-gradient(#3b82f61a_1px,transparent_1px),linear-gradient(90deg,#3b82f61a_1px,transparent_1px)] bg-[size:16px_16px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom"></div>
                 
                 {/* Builder Bot */}
                 <div className="relative z-10 flex flex-col items-center mt-4">
                     <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                     >
                         <Bot size={48} className="text-blue-600 drop-shadow-sm" />
                     </motion.div>
                     
                     {/* Holographic Projection */}
                     <motion.div 
                        className="absolute bottom-10 w-20 h-20 border-2 border-blue-400/50 rounded-lg bg-blue-400/10"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, rotateY: 360 }}
                        transition={{ duration: 4, repeat: Infinity }}
                     />
                 </div>
                 <div className="absolute bottom-2 text-[10px] text-blue-600 font-bold tracking-widest font-mono">CONSTRUCTING</div>
            </div>
        );
    }

    // 2. CRAWL: Scanning - Light Cyan Theme
    if (stageId === 'crawl') {
        return (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-cyan-50/50">
                <motion.div 
                   className="absolute -bottom-10 -left-1/4 w-[150%] h-[100%] bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"
                   style={{ transform: "perspective(300px) rotateX(45deg)" }}
                   animate={{ backgroundPosition: ["0px 0px", "0px 60px"] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                
                <motion.div 
                    className="relative z-10"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                >
                     <div className="w-16 h-10 bg-white rounded-lg border border-cyan-400 flex items-center justify-center relative shadow-md">
                        <Scan size={20} className="text-cyan-500" />
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-slate-300 rounded-full border border-slate-400 animate-spin"></div>
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-slate-300 rounded-full border border-slate-400 animate-spin"></div>
                     </div>
                </motion.div>
                 <div className="absolute bottom-2 text-[10px] text-cyan-600 font-bold tracking-widest font-mono">SCANNING ASSETS</div>
            </div>
        );
    }

    // 3. WALK: City - Light Indigo Theme
    if (stageId === 'walk') {
        return (
             <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-indigo-50/50">
                 <div className="absolute bottom-8 w-full flex items-end justify-center opacity-20 gap-1">
                     {[...Array(8)].map((_, i) => (
                         <motion.div 
                            key={i}
                            className="w-4 bg-indigo-400"
                            style={{ height: Math.random() * 40 + 20 }}
                            animate={{ x: -100 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * -0.3 }}
                         />
                     ))}
                 </div>
                 
                 <div className="absolute bottom-[2.5rem]">
                    <motion.div
                        className="relative text-indigo-600 drop-shadow-sm"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                         <Bot size={48} />
                    </motion.div>
                 </div>
                 
                 <div className="absolute bottom-2 text-[10px] text-indigo-600 font-bold tracking-widest font-mono">MAPPING</div>
             </div>
        );
    }

    // 4. RUN: Tunnel - Light Amber Theme
    if (stageId === 'run') {
        return (
             <div className="relative w-full h-full flex items-center justify-center bg-amber-50/50 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    {[...Array(6)].map((_, i) => (
                        <motion.div 
                            key={i}
                            className="absolute left-0 right-0 h-[1px] bg-amber-500"
                            style={{ top: `${i * 20}%` }}
                            animate={{ scaleX: [0.5, 1.5], opacity: [0, 1, 0] }}
                            transition={{ duration: 0.2, repeat: Infinity, delay: i * 0.05 }}
                        />
                    ))}
                </div>

                <motion.div
                    className="relative z-10 text-amber-600 mb-2 drop-shadow-sm"
                    animate={{ y: [0, -2, 0] }} 
                    transition={{ duration: 0.15, repeat: Infinity }}
                >
                     <div className="transform -skew-x-12">
                        <Bot size={56} />
                     </div>
                     <Wind size={24} className="absolute top-1/2 -left-6 text-slate-400" />
                </motion.div>

                 <div className="absolute bottom-2 text-[10px] text-amber-600 font-bold tracking-widest font-mono">OPTIMIZING</div>
             </div>
        );
    }

    // 5. FLY: Sky - Light Purple Theme
    if (stageId === 'fly') {
        return (
             <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-purple-50/50">
                 <motion.div 
                    className="absolute -bottom-[80%] w-[150%] h-[100%] bg-blue-100 rounded-[50%] border-t-4 border-blue-200"
                    animate={{ rotate: 5 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
                 >
                 </motion.div>

                <motion.div
                    className="relative z-10 text-purple-600 drop-shadow-md"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                     <Bot size={56} />
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
                
                 <div className="absolute bottom-2 text-[10px] text-purple-600 font-bold tracking-widest font-mono">STRATEGY</div>
             </div>
        );
    }

    return null;
};

export default ContentPanel;