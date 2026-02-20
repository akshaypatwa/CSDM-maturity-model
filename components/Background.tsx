import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-900">
      {/* Deep Space Gradient - Elegant & Professional */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-[#0f172a]"></div>

      {/* Subtle Dark Color Accents - Deep & Rich */}
      <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-blue-900/20 blur-[120px] animate-pulse-slow"></div>
      <div className="absolute top-[-10%] right-[10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px] animate-pulse-slow delay-1000"></div>

      {/* Bottom Accent - Deep Cyan */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/20 blur-[100px]"></div>

      {/* Professional Grid Pattern - Subtle Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Ambient Light - Very Soft */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
        <div className="absolute -inset-[100%] w-[200%] h-[200%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,transparent_100deg,#1e293b_140deg,transparent_180deg)] mix-blend-overlay filter blur-3xl"></div>
      </div>

      {/* Floating Particles - Starlight */}
      <div className="absolute w-full h-full opacity-40">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse blur-[0.5px]"></div>
        <div className="absolute top-3/4 left-3/4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse delay-700 blur-[0.5px]"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse blur-[0.5px]"></div>
      </div>

      {/* Fine Noise Texture for Matte Finish */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default Background;