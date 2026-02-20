import React from 'react';
import { motion } from 'framer-motion';
import { StageId } from '../types';
import { Database, Footprints, Route, Zap, Rocket, Search, Link, BarChart3, ShieldCheck, Activity, Layers, Server, Globe, Terminal, Tag, Cpu, Radio, Check } from 'lucide-react';

interface StageVisualizerProps {
  stageId: StageId;
}

const StageVisualizer: React.FC<StageVisualizerProps> = ({ stageId }) => {
  return (
    <div className="w-full h-full relative flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-xl group">
      {/* Background Ambience - Very light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      {/* Spotlight Effect - Subtle Blue */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2/3 bg-blue-100/30 blur-3xl pointer-events-none rounded-full"></div>

      {/* NEW: Prominent ServiceNow Process Header */}
      <div className="relative z-30 w-full">
        <ProcessHeader stageId={stageId} />
      </div>

      {/* Dynamic Visual Area */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center p-4 min-h-0 perspective-1000">
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

  switch (stageId) {
    case 'foundation':
      label = "CORE DATA SETUP";
      subLabel = "ESTABLISH TRUSTED SOURCES";
      gradientClass = "from-emerald-500 via-emerald-600 to-emerald-500 text-white shadow-emerald-500/20";
      icon = <Database size={24} className="text-white" />;
      break;
    case 'crawl':
      label = "ENABLE: DISCOVERY";
      subLabel = "POPULATE CMDB INVENTORY";
      gradientClass = "from-cyan-500 via-cyan-600 to-cyan-500 text-white shadow-cyan-500/20";
      icon = <Search size={24} className="text-white" />;
      break;
    case 'walk':
      label = "ENABLE: SERVICE MAPPING";
      subLabel = "DEFINE DEPENDENCIES";
      gradientClass = "from-indigo-500 via-indigo-600 to-indigo-500 text-white shadow-indigo-500/20";
      icon = <Route size={24} className="text-white" />;
      break;
    case 'run':
      label = "ENABLE: EVENT MGMT";
      subLabel = "HEALTH & REMEDIATION";
      gradientClass = "from-amber-500 via-orange-500 to-amber-500 text-white shadow-orange-500/20";
      icon = <Zap size={24} className="text-white" />;
      break;
    case 'fly':
      label = "ENABLE: APM & SPM";
      subLabel = "STRATEGIC PORTFOLIO";
      gradientClass = "from-purple-500 via-fuchsia-600 to-purple-500 text-white shadow-purple-500/20";
      icon = <Rocket size={24} className="text-white" />;
      break;
  }

  return (
    <div className={`w-full py-4 border-b border-white/10 bg-gradient-to-r ${gradientClass} flex flex-col items-center justify-center shadow-md relative overflow-hidden`}>
      {/* Satin Shine Effect */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10"></div>

      <div className="flex items-center gap-3 relative z-10">
        <div className="p-2 rounded-lg bg-white/20 border border-white/30 shadow-inner backdrop-blur-sm">
          {icon}
        </div>
        <div className="flex flex-col items-start drop-shadow-sm">
          <span className="text-lg md:text-2xl font-black tracking-widest leading-none">{label}</span>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] opacity-90 uppercase mt-1">{subLabel}</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================
   1. FOUNDATION: Solid Construction Blocks
   ========================================= */
const FoundationVisual = () => (
  <>
    <div className="relative flex-1 w-full flex items-center justify-center">
      {/* Scale up the grid area */}
      <div className="relative w-full max-w-lg h-56 lg:h-64 flex items-center justify-center [perspective:800px]">
        {/* Base Platform - Solid Light Surface */}
        <div className="absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 w-64 lg:w-96 h-32 bg-slate-50 rounded-[20px] transform rotate-x-60 border-4 border-slate-200 shadow-sm" />

        {/* Animated Subtle Blocks */}
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 -ml-8 -mt-12 lg:-ml-10 lg:-mt-16 w-16 h-12 lg:w-20 lg:h-16 rounded-lg shadow-sm flex items-center justify-center z-10 border border-slate-200 bg-white"
            initial={{ x: (Math.random() - 0.5) * 400, y: -400, rotate: (Math.random() - 0.5) * 180, opacity: 0, scale: 0.5 }}
            animate={{
              x: (i % 3 - 1) * (window.innerWidth < 1024 ? 70 : 90),
              y: Math.floor(i / 3) * (window.innerWidth < 1024 ? 50 : 65) - (window.innerWidth < 1024 ? 50 : 65),
              rotate: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{ duration: 1.2, delay: i * 0.1, type: "spring", stiffness: 60, damping: 12 }}
          >
            {/* Emerald Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-400 rounded-t-lg"></div>

            <Database className="text-emerald-600 w-5 h-5 lg:w-6 lg:h-6 opacity-80" />

            {/* Verified Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5 + i * 0.1 }}
              className="absolute -bottom-2 -right-2 w-4 h-4 lg:w-5 lg:h-5 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-200 shadow-sm"
            >
              <Check size={10} className="text-emerald-600 font-bold" strokeWidth={3} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="w-full bg-slate-50 border-t border-slate-200 p-4 lg:p-6 relative z-20">
      <div className="max-w-4xl mx-auto flex items-start gap-4 lg:gap-6">
        <div className="hidden lg:block p-3 bg-emerald-500 rounded-2xl shadow-md shrink-0">
          <ShieldCheck className="text-white" size={24} />
        </div>
        <div>
          <p className="text-slate-600 text-xs lg:text-lg leading-relaxed font-medium">
            Foundation is about <strong>standardizing Core Data</strong>. We are building solid, trusted blocks of data that every application will rely on.
          </p>
        </div>
      </div>
    </div>
  </>
);

/* =========================================
   2. CRAWL: Solid Radar & Cards
   ========================================= */
const CrawlVisual = () => (
  <>
    <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden">
      {/* Info Card - Solid White */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute top-2 lg:top-4 right-2 lg:right-10 bg-white border border-slate-200 p-3 lg:p-4 rounded-xl shadow-xl z-30 max-w-[150px] lg:max-w-[200px]"
      >
        <div className="flex items-center gap-2 mb-2 lg:mb-3 border-b border-slate-100 pb-2">
          <div className="p-1 bg-cyan-100 rounded-md"><Terminal size={12} className="text-cyan-600" /></div>
          <span className="text-[10px] lg:text-xs font-bold text-slate-800 font-mono">DISCOVERY LOG</span>
        </div>
        <div className="space-y-1 lg:space-y-2 font-mono text-[8px] lg:text-[10px]">
          <div className="flex justify-between text-slate-500">
            <span>Status:</span>
            <span className="text-green-600 font-bold animate-pulse">Scanning...</span>
          </div>
          <div className="flex justify-between text-slate-500">
            <span>Subnet:</span>
            <span className="text-slate-900 font-bold">10.2.1.0/24</span>
          </div>
          <div className="flex justify-between text-slate-500">
            <span>Assets:</span>
            <span className="text-cyan-600 font-black">5 Found</span>
          </div>
        </div>
      </motion.div>

      {/* Radar Container */}
      <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 flex items-center justify-center">
        {/* Solid Radar Base - Light */}
        <div className="absolute inset-0 bg-slate-100 rounded-full border-4 border-slate-200 shadow-xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(6,182,212,0.1)_0%,_transparent_70%)] rounded-full" />

        {/* Radar Circles */}
        <div className="absolute inset-[25%] border border-slate-300 rounded-full" />
        <div className="absolute inset-[50%] border border-slate-300 rounded-full" />

        {/* Solid Radar Sweep */}
        <motion.div
          className="absolute inset-2 bg-[conic-gradient(transparent_270deg,rgba(34,211,238,0.5)_360deg)] rounded-full blur-sm"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Grid Lines */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="w-full h-px bg-cyan-400" />
          <div className="h-full w-px bg-cyan-400 absolute" />
        </div>

        {/* Identified Assets - Solid Cards */}
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
            {/* Asset Icon Card */}
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center z-20 border-2 border-cyan-500 hover:scale-110 transition-transform">
              {i % 2 === 0 ? <Server className="text-cyan-600 w-5 h-5 lg:w-6 lg:h-6" /> : <Globe className="text-purple-600 w-5 h-5 lg:w-6 lg:h-6" />}
            </div>

            {/* Solid Label Tag */}
            <div className="bg-white text-slate-800 text-[9px] lg:text-[10px] py-0.5 px-2 rounded-md font-bold shadow-md whitespace-nowrap border border-slate-200">
              {i % 2 === 0 ? 'WinSvr-0' + i : 'Portal-' + i}
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="w-full bg-slate-50 border-t border-slate-200 p-4 lg:p-6 relative z-20">
      <div className="max-w-4xl mx-auto flex items-start gap-4 lg:gap-6">
        <div className="hidden lg:block p-3 bg-cyan-500 rounded-2xl shadow-md shrink-0">
          <Footprints className="text-white" size={24} />
        </div>
        <div>
          <p className="text-slate-600 text-xs lg:text-lg leading-relaxed font-medium">
            Turning the lights on. We are scanning the network to create a <strong>Verified Inventory</strong> of every server, application, and device.
          </p>
        </div>
      </div>
    </div>
  </>
);

/* =========================================
   3. WALK: Solid Maps & Connectors
   ========================================= */
const WalkVisual = () => (
  <>
    <div className="relative flex-1 w-full flex items-center justify-center">
      {/* Scaled Up Map */}
      <div className="relative w-full max-w-lg lg:max-w-2xl h-64 lg:h-80 flex items-center justify-center">

        {/* Top Node (Business App) - Subtle Card */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="w-40 lg:w-48 p-2 lg:p-3 bg-white rounded-xl shadow-sm flex items-center gap-3 border border-slate-200 border-l-4 border-l-indigo-400 z-20 relative hover:shadow-md transition-shadow">
            <div className="bg-slate-50 p-2 rounded-lg border border-slate-100"><Globe className="text-indigo-500 w-5 h-5" /></div>
            <div className="text-left">
              <div className="text-slate-800 font-bold text-xs lg:text-sm">Order System</div>
              <div className="text-slate-500 text-[10px] lg:text-xs">Business App</div>
            </div>
          </div>
          {/* Connection Point */}
          <div className="w-3 h-3 bg-white rounded-full border-2 border-slate-300 absolute -bottom-1.5 left-1/2 -translate-x-1/2 z-30 shadow-sm"></div>
        </motion.div>

        {/* Bottom Nodes (Infrastructure) - Subtle Cards */}
        <div className="absolute bottom-4 lg:bottom-10 w-full flex justify-between px-6 lg:px-10">
          <motion.div
            className="flex flex-col items-center z-20 relative"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Connection Point */}
            <div className="w-3 h-3 bg-white rounded-full border-2 border-slate-300 absolute -top-1.5 left-1/2 -translate-x-1/2 z-30 shadow-sm"></div>

            <div className="w-32 lg:w-40 p-2 lg:p-3 bg-white rounded-xl shadow-sm border border-slate-200 border-l-4 border-l-indigo-300 flex items-center gap-2 lg:gap-3">
              <div className="bg-slate-50 border border-slate-100 p-1.5 rounded-lg"><Server className="text-slate-500 w-4 h-4 lg:w-5 lg:h-5" /></div>
              <div className="text-left">
                <div className="text-slate-800 font-bold text-xs lg:text-sm">DB Server 01</div>
                <div className="text-slate-500 text-[10px] lg:text-xs">RedHat Linux</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center z-20 relative"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Connection Point */}
            <div className="w-3 h-3 bg-white rounded-full border-2 border-slate-300 absolute -top-1.5 left-1/2 -translate-x-1/2 z-30 shadow-sm"></div>

            <div className="w-32 lg:w-40 p-2 lg:p-3 bg-white rounded-xl shadow-sm border border-slate-200 border-l-4 border-l-indigo-300 flex items-center gap-2 lg:gap-3">
              <div className="bg-slate-50 border border-slate-100 p-1.5 rounded-lg"><Database className="text-slate-500 w-4 h-4 lg:w-5 lg:h-5" /></div>
              <div className="text-left">
                <div className="text-slate-800 font-bold text-xs lg:text-sm">Oracle DB</div>
                <div className="text-slate-500 text-[10px] lg:text-xs">Primary Inst</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Subtle Lines Instead of Heavy Gradients */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
          {/* Left Path */}
          <motion.path
            d="M336 45 C 336 150, 100 150, 100 230"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="hidden lg:block opacity-60"
          />
          {/* Right Path */}
          <motion.path
            d="M336 45 C 336 150, 570 150, 570 230"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="hidden lg:block opacity-60"
          />

          {/* Simple lines for small screens */}
          <line x1="50%" y1="15%" x2="20%" y2="85%" stroke="#cbd5e1" strokeDasharray="4 4" strokeWidth="2" className="lg:hidden opacity-60" />
          <line x1="50%" y1="15%" x2="80%" y2="85%" stroke="#cbd5e1" strokeDasharray="4 4" strokeWidth="2" className="lg:hidden opacity-60" />
        </svg>

        {/* Mapped Badge */}
        <motion.div
          className="absolute top-1/2 bg-white border border-indigo-200 px-4 py-1.5 rounded-full text-indigo-600 text-[10px] lg:text-xs font-bold shadow-sm z-30 tracking-widest uppercase flex items-center gap-1.5"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, type: "spring" }}
        >
          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></div>
          Mapped
        </motion.div>
      </div>
    </div>

    <div className="w-full bg-slate-50 border-t border-slate-200 p-4 lg:p-6 relative z-20">
      <div className="max-w-4xl mx-auto flex items-start gap-4 lg:gap-6">
        <div className="hidden lg:block p-3 bg-indigo-500 rounded-2xl shadow-md shrink-0">
          <Link className="text-white" size={24} />
        </div>
        <div>
          <p className="text-slate-600 text-xs lg:text-lg leading-relaxed font-medium">
            Context is key. We are <strong>Connecting the Dots</strong>, drawing solid lines between your physical infrastructure and the critical business services they support.
          </p>
        </div>
      </div>
    </div>
  </>
);

/* =========================================
   4. RUN: High-Contrast Rings
   ========================================= */
const RunVisual = () => (
  <>
    <div className="relative flex-1 w-full flex items-center justify-center">
      {/* Responsive Sizing */}
      <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 flex items-center justify-center">
        {/* Subtle Outline Rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 lg:border-[3px] border-slate-100 border-t-amber-300"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-4 lg:inset-6 rounded-full border-2 lg:border-[3px] border-slate-100 border-b-orange-300"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-8 lg:inset-12 border border-slate-100 rounded-full opacity-50 bg-slate-50"></div>

        {/* Center Hub */}
        <div className="absolute inset-16 lg:inset-20 bg-white rounded-full border border-slate-200 shadow-sm flex items-center justify-center z-10">
          <Zap className="text-amber-500 w-8 h-8 lg:w-10 lg:h-10 opacity-80" />
        </div>

        {/* Professional Health Metric Cards */}
        <motion.div
          className="absolute -top-4 -right-8 lg:-right-6 bg-white py-1.5 px-3 lg:p-2 rounded-lg border border-slate-200 shadow-sm z-20 flex flex-col items-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-[8px] lg:text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-0.5">Availability</div>
          <div className="text-sm lg:text-lg font-bold text-slate-800 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
            99.9%
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-4 -left-8 lg:-left-6 bg-white py-1.5 px-3 lg:p-2 rounded-lg border border-slate-200 shadow-sm z-20 flex flex-col items-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-[8px] lg:text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-0.5">Incidents</div>
          <div className="text-sm lg:text-lg font-bold text-slate-800 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
            0
          </div>
        </motion.div>
      </div>
    </div>

    <div className="w-full bg-slate-50 border-t border-slate-200 p-4 lg:p-6 relative z-20">
      <div className="max-w-4xl mx-auto flex items-start gap-4 lg:gap-6">
        <div className="hidden lg:block p-3 bg-amber-500 rounded-2xl shadow-md shrink-0">
          <Activity className="text-white" size={24} />
        </div>
        <div>
          <p className="text-slate-600 text-xs lg:text-lg leading-relaxed font-medium">
            We aren't just documenting anymore; we are <strong>Managing Health</strong>. Real-time dashboards, SLA tracking, and instant remediation.
          </p>
        </div>
      </div>
    </div>
  </>
);

/* =========================================
   5. FLY: Vibrant Dashboard & Rocket
   ========================================= */
const FlyVisual = () => (
  <>
    <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden">
      {/* Background Speed Lines - Light Mode */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-32 bg-slate-300/30"
          initial={{ y: -200 }}
          animate={{ y: 800 }}
          transition={{ duration: 0.5 + Math.random(), repeat: Infinity, delay: Math.random(), ease: "linear" }}
          style={{ left: `${Math.random() * 100}%` }}
        />
      ))}

      {/* Main Rocket Assembly */}
      <div className="relative z-10 flex items-center justify-center scale-75 lg:scale-100 mt-6 mt-lg-0">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-20"
        >
          {/* Subtle White Rocket */}
          <Rocket className="text-slate-400 opacity-60" strokeWidth={1.5} size={100} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-slate-50 rounded-full flex items-center justify-center border border-slate-200">
            <div className="w-2.5 h-2.5 bg-purple-400 rounded-full"></div>
          </div>

          {/* Engine Plume - Very Subtle */}
          <motion.div
            className="absolute top-[85px] left-1/2 -translate-x-1/2 w-6 h-20 bg-gradient-to-t from-transparent to-purple-200 opacity-30 rounded-full blur-sm"
            animate={{ height: [60, 80, 60], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Dashboard Screens - Professional Outline Cards */}
          <motion.div
            className="absolute -right-32 top-0 bg-white py-2 px-3 rounded-lg shadow-sm border border-slate-200 border-l-2 border-l-purple-400 w-32"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <BarChart3 className="text-purple-500 w-3.5 h-3.5" />
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">ROI Target</span>
            </div>
            <div className="h-1 w-full bg-slate-100 rounded-full mb-1 overflow-hidden"><div className="w-[92%] h-full bg-purple-400" /></div>
            <div className="text-xs font-bold text-slate-800 text-right">+240%</div>
          </motion.div>

          <motion.div
            className="absolute -left-32 bottom-4 bg-white py-2 px-3 rounded-lg shadow-sm border border-slate-200 border-l-2 border-l-purple-400 w-32"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <Layers className="text-purple-500 w-3.5 h-3.5" />
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Portfolio</span>
            </div>
            <div className="flex justify-between text-[10px] text-slate-600 font-medium">
              <span>Rationalized</span>
              <span className="text-purple-600 font-bold">12</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>

    <div className="w-full bg-slate-50 border-t border-slate-200 p-4 lg:p-6 relative z-20">
      <div className="max-w-4xl mx-auto flex items-start gap-4 lg:gap-6">
        <div className="hidden lg:block p-3 bg-purple-500 rounded-2xl shadow-md shrink-0">
          <Rocket className="text-white" size={24} />
        </div>
        <div>
          <p className="text-slate-600 text-xs lg:text-lg leading-relaxed font-medium">
            Strategy mode engaged. We are optimizing costs, rationalizing portfolios, and aligning every IT dollar to <strong>Business Capabilities</strong>.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default StageVisualizer;