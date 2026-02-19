import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-900">
      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-950"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Animated Light Beam */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
        <div className="absolute -inset-[100%] w-[200%] h-[200%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,transparent_100deg,#3b82f6_140deg,transparent_180deg)] mix-blend-color-dodge filter blur-3xl"></div>
      </div>

      {/* Floating Particles (Simulated with CSS for performance) */}
      <div className="absolute w-full h-full">
         <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
         <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-20 delay-700"></div>
         <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-10"></div>
      </div>
    </div>
  );
};

export default Background;