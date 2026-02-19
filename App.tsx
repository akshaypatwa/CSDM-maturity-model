import React, { useState } from 'react';
import Background from './components/Background';
import NavBar from './components/NavBar';
import ContentPanel from './components/ContentPanel';
import Controls from './components/Controls';
import { STAGES } from './constants';
import { ViewMode } from './types';

const App: React.FC = () => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>('application');

  const handleStageSelect = (index: number) => {
    setCurrentStageIndex(index);
  };

  const handleNext = () => {
    if (currentStageIndex < STAGES.length - 1) {
      setCurrentStageIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStageIndex > 0) {
      setCurrentStageIndex(prev => prev - 1);
    }
  };

  return (
    <div className="relative h-screen w-screen text-slate-900 selection:bg-cyan-200 overflow-hidden flex flex-col font-sans bg-slate-50">
      <Background />
      
      {/* Top Navigation - Auto Height */}
      <header className="flex-none z-20 pt-2">
         <NavBar 
           currentStageIndex={currentStageIndex} 
           onStageSelect={handleStageSelect}
         />
      </header>

      {/* Main Content - Flex Grow to fill space */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 w-full max-w-[1800px] mx-auto z-10 min-h-0 py-2">
        <ContentPanel 
          stage={STAGES[currentStageIndex]} 
          viewMode={viewMode}
        />
      </main>

      {/* Footer Controls - Fixed Height */}
      <footer className="flex-none py-4 z-30 flex justify-center">
        <Controls 
          viewMode={viewMode}
          setViewMode={setViewMode}
          onNext={handleNext}
          onPrev={handlePrev}
          canNext={currentStageIndex < STAGES.length - 1}
          canPrev={currentStageIndex > 0}
          currentStageIndex={currentStageIndex}
        />
      </footer>
    </div>
  );
};

export default App;