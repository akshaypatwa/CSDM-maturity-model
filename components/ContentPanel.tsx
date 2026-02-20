import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StageData, ViewMode, StageId } from '../types';
import { Activity, Database, Box, CheckCircle2, Bot, Wind, Cloud, Zap, Scan, Network, Globe, Radio, Play, Hexagon, Layers, Layout, Server } from 'lucide-react';
import StageVisualizer from './StageVisualizer';

interface ContentPanelProps {
    stage: StageData;
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
}

const ContentPanel: React.FC<ContentPanelProps> = ({ stage, viewMode, setViewMode }) => {
    const items = stage.items[viewMode];

    // High-Fidelity Light Mode Theme Configuration
    const getStageTheme = (id: string) => {
        switch (id) {
            case 'foundation': return {
                headerGradient: "from-emerald-50 to-emerald-100/50",
                cardBorder: "border-emerald-100",
                headerBorder: "border-emerald-100",
                iconColor: "text-emerald-600",
                iconBg: "bg-white border-emerald-200",
                textColor: "text-emerald-900",
                glow: "shadow-[0_10px_40px_-10px_rgba(16,185,129,0.2)]",
                stripe: "from-emerald-500 to-teal-500",
                gaugeGradient: ["#10b981", "#34d399"],
                accentBg: "bg-emerald-50"
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
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-4 overflow-hidden pb-1 min-h-0">

            {/* =======================
          LEFT: SCORECARD (20%)
          ======================= */}
            <div className="col-span-1 lg:col-span-3 flex flex-col h-full overflow-hidden min-h-0">
                <motion.div
                    className={`flex-1 bg-white text-slate-900 border ${theme.cardBorder} rounded-3xl p-0 flex flex-col relative overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500 ${theme.glow}`}
                >
                    {/* Panel Background - Textured & Gradient */}
                    {/* Panel Background - Textured & Gradient (Enhanced) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-200/50 opacity-95" />
                    <div className="absolute inset-0 bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

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

                        <div className="flex-1 flex flex-col p-3 overflow-y-auto custom-scrollbar">
                            {/* Scorecard Title - Dynamic */}
                            {/* Scorecard Title - Dynamic & Prominent */}
                            <div className="flex justify-center mb-3 w-full shrink-0">
                                <div className={`
                                    relative w-full max-w-[280px] py-2 px-4 rounded-2xl border ${theme.cardBorder} shadow-lg bg-white overflow-hidden group hover:-translate-y-1 transition-transform duration-300
                                `}>
                                    {/* Abstract background graphic */}
                                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${theme.headerGradient} rounded-bl-full opacity-50`}></div>
                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div className={`text-[9px] font-bold uppercase tracking-[0.2em] mb-0.5 ${theme.textColor} opacity-70`}>
                                            CURRENT MISSION
                                        </div>
                                        <h2 className={`text-lg md:text-xl font-black italic tracking-tighter uppercase leading-none bg-gradient-to-r ${theme.stripe} text-transparent bg-clip-text drop-shadow-sm`}>
                                            {stage.scorecardTitle}
                                        </h2>
                                        <div className={`mt-1.5 h-1 w-10 rounded-full bg-gradient-to-r ${theme.stripe}`}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Gauge */}
                            <div className="flex-1 flex flex-col items-center justify-center min-h-[140px] relative shrink-0">
                                {/* Water Fill Container */}
                                <div className={`relative w-40 h-40 rounded-full border-4 ${theme.cardBorder} bg-white shadow-inner overflow-hidden transform scale-90`}>

                                    {/* Water Level - Dynamic Color based on Theme */}
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 opacity-90"
                                        style={{ backgroundColor: theme.gaugeGradient[0] }}
                                        initial={{ height: "0%" }}
                                        animate={{ height: `${stage.maturity}%` }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                    >
                                        {/* Wave Animation Surface */}
                                        <motion.div
                                            className="absolute -top-4 left-0 right-0 h-8 w-[200%]"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='${encodeURIComponent(theme.gaugeGradient[0])}' fill-opacity='1' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
                                                backgroundSize: '50% 100%',
                                                backgroundRepeat: 'repeat-x'
                                            }}
                                            animate={{ x: ["0%", "-50%"] }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                        />
                                    </motion.div>

                                    {/* Bubbles Effect */}
                                    <div className="absolute inset-0 pointer-events-none">
                                        {[...Array(5)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute bottom-0 w-2 h-2 bg-white/40 rounded-full"
                                                style={{ left: `${Math.random() * 80 + 10}%` }}
                                                animate={{
                                                    y: [0, -200],
                                                    opacity: [0, 1, 0],
                                                    scale: [0.5, 1.5]
                                                }}
                                                transition={{
                                                    duration: Math.random() * 2 + 2,
                                                    repeat: Infinity,
                                                    delay: Math.random() * 2,
                                                    ease: "easeOut"
                                                }}
                                            />
                                        ))}
                                    </div>

                                    {/* Glass Shine */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full pointer-events-none"></div>
                                </div>

                                {/* Center Score Overlay */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
                                    <div className="relative drop-shadow-md">
                                        <span className={`text-6xl font-black tracking-tighter transition-colors duration-500 ${stage.maturity > 50 ? 'text-white' : theme.textColor
                                            }`}>
                                            {stage.maturity}
                                            <span className={`text-3xl ml-1 ${stage.maturity > 50 ? 'text-white/80' : 'text-slate-400'
                                                }`}>%</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* ANIMATION BOX (Compact & Tight) - Light Container */}
                            <div className="w-full h-32 bg-slate-50 rounded-2xl border border-slate-200 relative overflow-hidden flex flex-col items-center justify-center shadow-inner group shrink-0 mt-auto">
                                {/* Grid Background */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                                {/* Status Badge - Enhanced */}
                                <div className="absolute top-2 left-3 z-30">
                                    <div className={`px-2 py-1 rounded-md bg-white/80 backdrop-blur-sm border ${theme.cardBorder} shadow-sm flex items-center gap-2`}>
                                        <span className={`w-2 h-2 rounded-full animate-pulse ${theme.iconColor.replace('text-', 'bg-')}`}></span>
                                        <span className={`text-[10px] font-bold uppercase tracking-wider ${theme.textColor}`}>
                                            Status: Active
                                        </span>
                                    </div>
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
            <div className="col-span-1 lg:col-span-6 flex flex-col gap-4 h-full min-h-0">
                <div
                    className="w-full h-full flex-1 rounded-3xl overflow-hidden relative"
                >
                    <StageVisualizer stageId={stage.id} />
                </div>
            </div>

            {/* =======================
          RIGHT: COMPONENTS (25%)
          ======================= */}
            <div className="col-span-1 lg:col-span-3 flex flex-col h-full overflow-hidden min-h-0">
                <div className={`flex-1 bg-white border ${theme.cardBorder} rounded-3xl p-0 relative overflow-hidden flex flex-col transition-all duration-500 ${theme.glow}`}>
                    {/* Panel Background - Textured & Gradient */}
                    {/* Panel Background - Textured & Gradient (Enhanced) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-200/50 opacity-95" />
                    <div className="absolute inset-0 bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

                    <div className="relative z-10 flex flex-col h-full overflow-hidden">

                        {/* HEADER */}
                        <div className={`flex items-center justify-between gap-3 p-4 border-b ${theme.headerBorder} bg-gradient-to-l ${theme.headerGradient} relative overflow-hidden flex-none z-20`}>
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg shadow-sm border ${theme.iconBg}`}>
                                    {viewMode === 'application' ? <Box className={theme.iconColor} size={20} /> : <Layers className={theme.iconColor} size={20} />}
                                </div>
                                <div>
                                    <h4 className={`text-sm font-black uppercase tracking-widest ${theme.textColor}`}>
                                        {viewMode === 'application' ? 'Apps' : 'Services'}
                                    </h4>
                                    <div className="text-slate-500 text-[10px] font-bold tracking-wider">ACTIVE OBJECTS</div>
                                </div>
                            </div>

                            {/* Integrated View Toggle */}
                            <div className="flex bg-slate-200/50 p-1 rounded-lg border border-slate-200/50 backdrop-blur-sm">
                                <button
                                    onClick={() => setViewMode('application')}
                                    className={`p-1.5 rounded-md transition-all ${viewMode === 'application' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
                                    title="Application View"
                                >
                                    <Layout size={14} />
                                </button>
                                <button
                                    onClick={() => setViewMode('service')}
                                    className={`p-1.5 rounded-md transition-all ${viewMode === 'service' ? 'bg-white shadow-sm text-purple-600' : 'text-slate-400 hover:text-slate-600'}`}
                                    title="Service View"
                                >
                                    <Server size={14} />
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar min-h-0 p-5 pt-3">
                            <AnimatePresence mode="popLayout">
                                {items.map((item, idx) => (
                                    <motion.div
                                        key={`${stage.id}-${item.id}`}
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

    // 1. FOUNDATION: Blueprint / Building - Emerald Theme
    if (stageId === 'foundation') {
        return (
            <div className="relative w-full h-full flex items-center justify-center bg-emerald-50/50">
                {/* Blueprint Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(#10b9811a_1px,transparent_1px),linear-gradient(90deg,#10b9811a_1px,transparent_1px)] bg-[size:16px_16px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom"></div>

                {/* Builder Bot */}
                <div className="relative z-10 flex flex-col items-center mt-4">
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Bot size={48} className="text-emerald-600 drop-shadow-sm" />
                    </motion.div>

                    {/* Holographic Projection */}
                    <motion.div
                        className="absolute bottom-10 w-20 h-20 border-2 border-emerald-400/50 rounded-lg bg-emerald-400/10"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, rotateY: 360 }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                </div>
                <div className="absolute bottom-3 px-3 py-1 rounded-full bg-emerald-100/80 backdrop-blur-sm border border-emerald-200 shadow-sm text-xs text-emerald-700 font-bold tracking-widest font-mono flex items-center gap-2">
                    <Activity size={12} className="animate-pulse" />
                    CONSTRUCTING CORE
                </div>
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
                <div className="absolute bottom-3 px-3 py-1 rounded-full bg-cyan-100/80 backdrop-blur-sm border border-cyan-200 shadow-sm text-xs text-cyan-700 font-bold tracking-widest font-mono flex items-center gap-2">
                    <Scan size={12} className="animate-spin-slow" />
                    SCANNING ASSETS
                </div>
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

                <div className="absolute bottom-3 px-3 py-1 rounded-full bg-indigo-100/80 backdrop-blur-sm border border-indigo-200 shadow-sm text-xs text-indigo-700 font-bold tracking-widest font-mono flex items-center gap-2">
                    <Network size={12} />
                    MAPPING DEPENDENCIES
                </div>
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

                <div className="absolute bottom-3 px-3 py-1 rounded-full bg-amber-100/80 backdrop-blur-sm border border-amber-200 shadow-sm text-xs text-amber-700 font-bold tracking-widest font-mono flex items-center gap-2">
                    <Zap size={12} />
                    OPTIMIZING FLOW
                </div>
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

                <div className="absolute bottom-3 px-3 py-1 rounded-full bg-purple-100/80 backdrop-blur-sm border border-purple-200 shadow-sm text-xs text-purple-700 font-bold tracking-widest font-mono flex items-center gap-2">
                    <Globe size={12} />
                    DRIVING STRATEGY
                </div>
            </div>
        );
    }

    return null;
};

export default ContentPanel;