import React from 'react';
import { motion } from 'framer-motion';
import { StageId } from '../types';
import { Database, Footprints, Route, Zap, Rocket, Search, Link, BarChart3, ShieldCheck, Activity, Layers, Server, Globe, Terminal, Tag, Cpu, Radio } from 'lucide-react';

interface StageVisualizerProps {
  stageId: StageId;
}

const StageVisualizer: React.FC<StageVisualizerProps> = ({ stageId }) => {
  return (
    <div className="w-full h-full relative flex flex-col overflow-hidden rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl group">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* NEW: Prominent ServiceNow Process Header */}
      <div className="relative z-30 w-full">
        <ProcessHeader stageId={stageId} />
      </div>

      {/* Dynamic Visual Area - Pushed down to accommodate header */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center p-4 min-h-0">
        {stageId === 'foundation' && <FoundationVisual />}
        {stageId === 'crawl' && <CrawlVisual />}
        {stageId === 'walk' && <WalkVisual />}
        {stageId === 'run' && <RunVisual />}
        {stageId === 'fly' && <FlyVisual />}
      </div>
    </div>
  );
};

// --- Enhanced Process Header Component ---
const ProcessHeader: React.FC<{ stageId: StageId }> = ({ stageId }) => {
    let label = "";
    let subLabel = "";
    let gradientClass = "";
    let icon = null;
    
    switch(stageId) {
        case 'foundation': 
            label = "CORE DATA SETUP"; 
            subLabel = "ESTABLISH TRUSTED SOURCES";
            gradientClass = "from-blue-600/20 via-blue-900/60 to-blue-600/20 border-blue-500/50 text-blue-100"; 
            icon = <Database size={24} className="text-blue-400" />;
            break;
        case 'crawl': 
            label = "ENABLE: DISCOVERY"; 
            subLabel = "POPULATE CMDB INVENTORY";
            gradientClass = "from-cyan-600/20 via-cyan-900/60 to-cyan-600/20 border-cyan-500/50 text-cyan-100"; 
            icon = <Search size={24} className="text-cyan-400" />;
            break;
        case 'walk': 
            label = "ENABLE: SERVICE MAPPING"; 
            subLabel = "DEFINE DEPENDENCIES";
            gradientClass = "from-indigo-600/20 via-indigo-900/60 to-indigo-600/20 border-indigo-500/50 text-indigo-100"; 
            icon = <Route size={24} className="text-indigo-400" />;
            break;
        case 'run': 
            label = "ENABLE: EVENT MGMT"; 
            subLabel = "HEALTH & REMEDIATION";
            gradientClass = "from-yellow-600/20 via-yellow-900/60 to-yellow-600/20 border-yellow-500/50 text-yellow-100"; 
            icon = <Zap size={24} className="text-yellow-400" />;
            break;
        case 'fly': 
            label = "ENABLE: APM & SPM"; 
            subLabel = "STRATEGIC PORTFOLIO";
            gradientClass = "from-purple-600/20 via-purple-900/60 to-purple-600/20 border-purple-500/50 text-purple-100"; 
            icon = <Rocket size={24} className="text-purple-400" />;
            break;
    }

    return (
        <div className={`w-full py-4 border-b ${gradientClass} bg-gradient-to-r backdrop-blur-md flex flex-col items-center justify-center shadow-lg relative overflow-hidden`}>
            {/* Animated Glow Line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50"></div>
            
            <div className="flex items-center gap-3 relative z-10">
                <div className="p-2 rounded-lg bg-slate-950/50 border border-white/10 shadow-inner">
                    {icon}
                </div>
                <div className="flex flex-col items-start">
                    <span className="text-lg md:text-2xl font-black tracking-widest leading-none drop-shadow-md">{label}</span>
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] opacity-70 uppercase mt-1">{subLabel}</span>
                </div>
            </div>
        </div>
    );
}

/* =========================================
   1. FOUNDATION: Organizing Chaos into Order
   ========================================= */
const FoundationVisual = () => (
  <>
    <div className="relative flex-1 w-full flex items-center justify-center">
       {/* Scale up the grid area */}
       <div className="relative w-full max-w-lg h-56 lg:h-64 flex items-center justify-center">
           {/* Base Platform */}
           <div className="absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 w-64 lg:w-96 h-16 lg:h-24 bg-blue-900/20 border border-blue-500/30 rounded-[100%] transform rotate-x-60 blur-sm" />
           
           {/* Animated Blocks falling into a grid - CENTERED FIX */}
           {[...Array(9)].map((_, i) => (
             <motion.div
               key={i}
               // Added left-1/2 top-1/2 and negative margins to center the origin exactly
               className="absolute left-1/2 top-1/2 -ml-8 -mt-12 lg:-ml-10 lg:-mt-16 w-16 h-10 lg:w-20 lg:h-14 bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-400/50 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex items-center justify-center z-10"
               initial={{ x: (Math.random() - 0.5) * 400, y: -400, rotate: (Math.random() - 0.5) * 180, opacity: 0, scale: 0.5 }}
               animate={{ 
                   x: (i % 3 - 1) * (window.innerWidth < 1024 ? 70 : 90), 
                   y: Math.floor(i / 3) * (window.innerWidth < 1024 ? 45 : 60) - (window.innerWidth < 1024 ? 45 : 60), 
                   rotate: 0, 
                   opacity: 1, 
                   scale: 1 
               }}
               transition={{ duration: 1.2, delay: i * 0.1, type: "spring", stiffness: 60, damping: 12 }}
             >
                <Database className="text-blue-100 opacity-80 w-4 h-4 lg:w-6 lg:h-6" />
                <div className="absolute -bottom-2 -right-2 w-5 h-5 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-slate-900">
                    <ShieldCheck size={10} className="text-white lg:w-3 lg:h-3" />
                </div>
             </motion.div>
           ))}
       </div>
    </div>
    
    <div className="w-full bg-slate-950/80 backdrop-blur-md border-t border-slate-700 p-4 lg:p-6 relative z-20">
        <div className="max-w-4xl mx-auto flex items-start gap-4 lg:gap-6">
            <div className="hidden lg:block p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 shrink-0">
                <ShieldCheck className="text-blue-400" size={24} />
            </div>
            <div>
                <p className="text-slate-300 text-xs lg:text-lg leading-relaxed">
                    Foundation is about <strong>standardizing Core Data</strong> so every application speaks the same language. It is the bedrock of reporting integrity.
                </p>
            </div>
        </div>
    </div>
  </>
);

/* =========================================
   2. CRAWL: Radar Scanning for Visibility
   ========================================= */
const CrawlVisual = () => (
  <>
    <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden">
       {/* Added Information Overlay */}
       <motion.div 
         initial={{ opacity: 0, x: 20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ delay: 1 }}
         className="absolute top-2 lg:top-4 right-2 lg:right-10 bg-slate-900/90 border border-cyan-500/30 p-3 lg:p-4 rounded-xl backdrop-blur-md shadow-2xl z-30 max-w-[150px] lg:max-w-[200px]"
       >
         <div className="flex items-center gap-2 mb-2 lg:mb-3 border-b border-slate-800 pb-2">
            <Terminal size={12} className="text-cyan-400" />
            <span className="text-[10px] lg:text-xs font-bold text-cyan-400 font-mono">DISCOVERY LOG</span>
         </div>
         <div className="space-y-1 lg:space-y-2 font-mono text-[8px] lg:text-[10px]">
            <div className="flex justify-between text-slate-400">
                <span>Status:</span>
                <span className="text-green-400 animate-pulse">Scanning...</span>
            </div>
            <div className="flex justify-between text-slate-400">
                <span>Subnet:</span>
                <span className="text-slate-200">10.2.1.0/24</span>
            </div>
            <div className="flex justify-between text-slate-400">
                <span>Assets:</span>
                <span className="text-cyan-300 font-bold">5 Found</span>
            </div>
         </div>
       </motion.div>

       {/* Responsive Container for Radar - COMPACT SIZE for laptop responsiveness */}
       <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 flex items-center justify-center">
          {/* Radar Circles */}
          <div className="absolute inset-0 border-2 border-slate-700/50 rounded-full" />
          <div className="absolute inset-[25%] border border-slate-700/30 rounded-full" />
          <div className="absolute inset-[50%] border border-slate-700/30 rounded-full" />
          
          {/* Radar Sweep */}
          <motion.div 
            className="absolute inset-0 bg-[conic-gradient(transparent_270deg,rgba(34,211,238,0.2)_360deg)] rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          {/* Grid Lines */}
          <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-px bg-slate-800" />
              <div className="h-full w-px bg-slate-800 absolute" />
          </div>

          {/* Identified Assets appearing */}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
                key={i}
                className="absolute flex flex-col items-center gap-2"
                style={{ 
                    top: i === 0 ? '15%' : i === 1 ? '75%' : i === 2 ? '50%' : i === 3 ? '25%' : '65%', 
                    left: i === 0 ? '50%' : i === 1 ? '20%' : i === 2 ? '85%' : i === 3 ? '20%' : '75%' 
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.6, duration: 0.4 }}
            >
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-slate-800 rounded-xl border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center z-20 group cursor-pointer hover:bg-slate-700 transition-colors">
                    {i % 2 === 0 ? <Server className="text-cyan-400 w-4 h-4 lg:w-5 lg:h-5" /> : <Globe className="text-purple-400 w-4 h-4 lg:w-5 lg:h-5" />}
                    
                    {/* Tooltip on hover */}
                    <div className="absolute -top-8 lg:-top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[8px] lg:text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-600">
                        {i % 2 === 0 ? 'WinSvr-0' + i : 'App-Portal-' + i}
                    </div>
                </div>
            </motion.div>
          ))}
       </div>
    </div>

    <div className="w-full bg-slate-950/80 backdrop-blur-md border-t border-slate-700 p-4 lg:p-6 relative z-20">
        <div className="max-w-4xl mx-auto flex items-start gap-4 lg:gap-6">
            <div className="hidden lg:block p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 shrink-0">
                <Footprints className="text-cyan-400" size={24} />
            </div>
            <div>
                <p className="text-slate-300 text-xs lg:text-lg leading-relaxed">
                    Turning the lights on. This stage identifies every Application, Server, and Device, moving you from spreadsheets to a live, verified system of record.
                </p>
            </div>
        </div>
    </div>
  </>
);

/* =========================================
   3. WALK: Connecting the Dots
   ========================================= */
const WalkVisual = () => (
  <>
    <div className="relative flex-1 w-full flex items-center justify-center">
       {/* Scaled Up Map - Responsive */}
       <div className="relative w-full max-w-lg lg:max-w-2xl h-64 lg:h-80 flex items-center justify-center">
          
          {/* Top Node (Business App) */}
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
             <div className="w-40 lg:w-48 p-2 lg:p-4 bg-blue-600 rounded-2xl border-2 border-blue-400 shadow-xl flex items-center gap-3">
                <Globe className="text-white w-5 h-5 lg:w-6 lg:h-6" />
                <div className="text-left">
                    <div className="text-white font-bold text-xs lg:text-sm">Order System</div>
                    <div className="text-blue-200 text-[10px] lg:text-xs">Application Service</div>
                </div>
             </div>
             <div className="h-6 lg:h-8 w-1 bg-blue-500" />
          </motion.div>
          
          {/* Bottom Nodes (Infrastructure) */}
          <div className="absolute bottom-4 lg:bottom-10 w-full flex justify-between px-6 lg:px-10">
              <motion.div 
                className="flex flex-col items-center z-20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                 <div className="h-6 lg:h-8 w-1 bg-slate-600 mb-0" />
                 <div className="w-32 lg:w-40 p-2 lg:p-3 bg-slate-800 rounded-xl border border-slate-600 flex items-center gap-2 lg:gap-3">
                    <Server className="text-slate-400 w-4 h-4 lg:w-5 lg:h-5" />
                    <div className="text-left">
                        <div className="text-slate-200 font-bold text-xs lg:text-sm">DB Server 01</div>
                        <div className="text-slate-500 text-[10px] lg:text-xs">Linux RedHat</div>
                    </div>
                 </div>
              </motion.div>

              <motion.div 
                className="flex flex-col items-center z-20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                 <div className="h-6 lg:h-8 w-1 bg-slate-600 mb-0" />
                 <div className="w-32 lg:w-40 p-2 lg:p-3 bg-slate-800 rounded-xl border border-slate-600 flex items-center gap-2 lg:gap-3">
                    <Database className="text-slate-400 w-4 h-4 lg:w-5 lg:h-5" />
                    <div className="text-left">
                        <div className="text-slate-200 font-bold text-xs lg:text-sm">Oracle DB</div>
                        <div className="text-slate-500 text-[10px] lg:text-xs">Instance</div>
                    </div>
                 </div>
              </motion.div>
          </div>

          {/* Dynamic SVG Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
             {/* Left Path */}
             <motion.path 
               d="M336 60 C 336 150, 100 150, 100 240" 
               fill="none" 
               stroke="#3b82f6" 
               strokeWidth="4" 
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 1.5, delay: 0.5 }}
               className="hidden lg:block" // Approximate check, real SVG response needs viewbox tweaking or percentage coordinates
             />
             {/* Simple lines for small screens */}
             <line x1="50%" y1="20%" x2="20%" y2="80%" stroke="#3b82f6" strokeWidth="2" className="lg:hidden" />
             <line x1="50%" y1="20%" x2="80%" y2="80%" stroke="#3b82f6" strokeWidth="2" className="lg:hidden" />
          </svg>

          <motion.div 
            className="absolute top-1/2 bg-slate-900/90 border border-green-500 px-4 py-1 lg:px-6 lg:py-2 rounded-full text-green-400 text-xs lg:text-sm font-bold shadow-[0_0_15px_rgba(34,197,94,0.3)] z-30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, type: "spring" }}
          >
            MAPPED
          </motion.div>
       </div>
    </div>

    <div className="w-full bg-slate-950/80 backdrop-blur-md border-t border-slate-700 p-4 lg:p-6 relative z-20">
        <div className="max-w-4xl mx-auto flex items-start gap-4 lg:gap-6">
            <div className="hidden lg:block p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20 shrink-0">
                <Link className="text-purple-400" size={24} />
            </div>
            <div>
                <p className="text-slate-300 text-xs lg:text-lg leading-relaxed">
                    Inventory without context is blind. We are <strong>connecting the dots</strong>. Now you can see exactly which physical servers support which critical business application.
                </p>
            </div>
        </div>
    </div>
  </>
);

/* =========================================
   4. RUN: Operations & Health
   ========================================= */
const RunVisual = () => (
  <>
    <div className="relative flex-1 w-full flex items-center justify-center">
       {/* Responsive Sizing - COMPACT for laptop */}
       <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 flex items-center justify-center">
          {/* Large Spinning Rings */}
          <motion.div 
            className="absolute inset-0 rounded-full border-[8px] lg:border-[10px] border-transparent border-t-yellow-500 border-l-yellow-600/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute inset-4 lg:inset-6 rounded-full border-[6px] lg:border-[8px] border-transparent border-b-orange-500 border-r-orange-600/50 opacity-80"
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-8 lg:inset-12 bg-slate-900/50 rounded-full border border-slate-700 backdrop-blur-sm" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
             <div className="relative">
                 <Zap className="text-yellow-400 fill-yellow-400 drop-shadow-[0_0_40px_rgba(250,204,21,0.8)] w-10 h-10 lg:w-16 lg:h-16" />
                 <motion.div 
                   className="absolute -inset-4 bg-yellow-400/20 rounded-full blur-xl"
                   animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                   transition={{ duration: 1, repeat: Infinity }}
                 />
             </div>
             
             {/* Health Metrics Popping Up - Positioned closer to center */}
             <div className="absolute -top-4 -right-8 lg:-right-12 bg-slate-800 p-2 rounded-lg border border-green-500 shadow-lg z-20">
                <div className="text-[8px] lg:text-[10px] text-slate-400 uppercase">Avail</div>
                <div className="text-xs lg:text-lg font-bold text-green-400">99.9%</div>
             </div>
             <div className="absolute -bottom-4 -left-8 lg:-left-12 bg-slate-800 p-2 rounded-lg border border-red-500 shadow-lg z-20">
                <div className="text-[8px] lg:text-[10px] text-slate-400 uppercase">Incid</div>
                <div className="text-xs lg:text-lg font-bold text-red-400">0</div>
             </div>
          </div>
       </div>
    </div>

    <div className="w-full bg-slate-950/80 backdrop-blur-md border-t border-slate-700 p-4 lg:p-6 relative z-20">
        <div className="max-w-4xl mx-auto flex items-start gap-4 lg:gap-6">
            <div className="hidden lg:block p-3 bg-yellow-500/10 rounded-2xl border border-yellow-500/20 shrink-0">
                <Activity className="text-yellow-400" size={24} />
            </div>
            <div>
                <p className="text-slate-300 text-xs lg:text-lg leading-relaxed">
                    We aren't just documenting anymore; we are <strong>Managing Health</strong>. This stage enables real-time impact analysis, SLA tracking, and accelerated Incident Management.
                </p>
            </div>
        </div>
    </div>
  </>
);

/* =========================================
   5. FLY: Strategy & Value
   ========================================= */
const FlyVisual = () => (
  <>
    <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden">
       {/* High Speed Stars */}
       {[...Array(30)].map((_, i) => (
          <motion.div
             key={i}
             className="absolute w-1 h-20 bg-gradient-to-b from-transparent to-blue-200 opacity-20"
             initial={{ y: -200 }}
             animate={{ y: 800 }}
             transition={{ duration: 0.5 + Math.random(), repeat: Infinity, delay: Math.random(), ease: "linear" }}
             style={{ left: `${Math.random() * 100}%` }}
          />
       ))}
       
       {/* Main Rocket Assembly */}
      <div className="relative z-10 flex items-center justify-center scale-75 lg:scale-100">
           {/* Engine Plume */}
           <motion.div 
             className="absolute top-20 w-32 h-64 bg-gradient-to-t from-transparent via-purple-500 to-cyan-500 opacity-60 blur-2xl rounded-full"
             animate={{ height: [200, 300, 200], opacity: [0.4, 0.7, 0.4] }}
             transition={{ duration: 0.2, repeat: Infinity }}
           />
           
           <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative"
           >
               <Rocket className="text-white fill-slate-200 drop-shadow-[0_0_50px_rgba(255,255,255,0.6)]" size={160} />
               
               {/* Dashboard Screens floating around */}
               <motion.div 
                  className="absolute -right-32 top-0 bg-slate-900/90 border border-green-500 p-4 rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
               >
                   <BarChart3 className="text-green-400 w-12 h-12 mb-2" />
                   <div className="h-2 w-16 bg-slate-700 rounded mb-1 overflow-hidden"><div className="w-3/4 h-full bg-green-500" /></div>
                   <div className="text-[10px] text-green-400 font-bold">ROI POSITIVE</div>
               </motion.div>

               <motion.div 
                  className="absolute -left-32 bottom-10 bg-slate-900/90 border border-purple-500 p-4 rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
               >
                   <Layers className="text-purple-400 w-12 h-12 mb-2" />
                   <div className="text-[10px] text-purple-400 font-bold">PORTFOLIO OPTIMIZED</div>
               </motion.div>
           </motion.div>
      </div>
    </div>
    
    <div className="w-full bg-slate-950/80 backdrop-blur-md border-t border-slate-700 p-4 lg:p-6 relative z-20">
        <div className="max-w-4xl mx-auto flex items-start gap-4 lg:gap-6">
            <div className="hidden lg:block p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20 shrink-0">
                <Rocket className="text-purple-400" size={24} />
            </div>
            <div>
                <p className="text-slate-300 text-xs lg:text-lg leading-relaxed">
                    Moving beyond IT operations to <strong>Business Strategy</strong>. We optimize costs, rationalize the application portfolio, and align IT investment with business capabilities.
                </p>
            </div>
        </div>
    </div>
  </>
);

export default StageVisualizer;