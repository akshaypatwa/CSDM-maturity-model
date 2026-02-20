import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-200">
      {/* Soft Foundation Gradient - Elegant & Professional */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-200 to-slate-300"></div>

      {/* Subtle Color Accents - Elegant Pastels */}
      <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-blue-200/40 blur-[120px] animate-pulse-slow"></div>
      <div className="absolute top-[-10%] right-[10%] w-[50%] h-[50%] rounded-full bg-purple-200/30 blur-[120px] animate-pulse-slow delay-1000"></div>

      {/* Bottom Accent - Fresh Cyan */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-100/50 blur-[100px]"></div>

      {/* Professional Grid Pattern - Delicate */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

      {/* Ambient Light Beam - Soft Shine */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
        <div className="absolute -inset-[100%] w-[200%] h-[200%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,transparent_100deg,#bae6fd_140deg,transparent_180deg)] mix-blend-soft-light filter blur-3xl"></div>
      </div>

      {/* Floating Particles - Very Subtle */}
      <div className="absolute w-full h-full opacity-60">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-pulse blur-[1px]"></div>
        <div className="absolute top-3/4 left-3/4 w-3 h-3 bg-purple-300 rounded-full animate-pulse delay-700 blur-[1px]"></div>
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse blur-[1px]"></div>
      </div>

      {/* Fine Noise Texture for Matte Finish */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default Background;