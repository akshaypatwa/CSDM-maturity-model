import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-50">
      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-50 via-slate-50 to-white"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>
      
      {/* Animated Light Beam - Subtle Blue */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
        <div className="absolute -inset-[100%] w-[200%] h-[200%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,transparent_100deg,#bae6fd_140deg,transparent_180deg)] mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Floating Particles - Darker for visibility */}
      <div className="absolute w-full h-full">
         <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/20 rounded-full animate-ping"></div>
         <div className="absolute top-3/4 left-3/4 w-4 h-4 bg-purple-400/20 rounded-full animate-ping delay-700"></div>
         <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Background;