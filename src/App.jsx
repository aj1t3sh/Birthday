import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import WelcomeScreen from './components/WelcomeScreen';
import HeroSection from './components/HeroSection';
import BlessingLetter from './components/BlessingLetter';
import StarOfToday from './components/StarOfToday';
import MakeAWish from './components/MakeAWish';
import FinalSurprise from './components/FinalSurprise';
import FloatingDecorations from './components/FloatingDecorations';
import MusicPlayer from './components/MusicPlayer';
import { playChime } from './utils/audioHelper';

export default function App() {
  const [stage, setStage] = useState('loading'); // 'loading' | 'welcome' | 'experience'
  const letterRef = useRef(null);

  const handleLoadingComplete = () => {
    setStage('welcome');
  };

  const handleOpenSurprise = () => {
    setStage('experience');
  };

  const handleScrollToLetter = () => {
    if (letterRef.current) {
      letterRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setStage('welcome');
    }, 400);
  };

  return (
    <div className="app-container">
      {/* Ambient background particles & lighting */}
      <FloatingDecorations />

      {/* Floating Music Toggle Control */}
      {stage === 'experience' && <MusicPlayer autoStart={true} />}

      <AnimatePresence mode="wait">
        {stage === 'loading' && (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        )}

        {stage === 'welcome' && (
          <WelcomeScreen key="welcome" onOpenSurprise={handleOpenSurprise} />
        )}
      </AnimatePresence>

      {stage === 'experience' && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ width: '100%', position: 'relative', zIndex: 5 }}
        >
          {/* 1. Main Birthday Hero */}
          <HeroSection onScrollToLetter={handleScrollToLetter} />

          {/* 2. Personal Blessing Letter */}
          <BlessingLetter letterRef={letterRef} />

          {/* 3. Photo Memory Section: The Star of Today */}
          <StarOfToday />

          {/* 4. Interactive Make a Wish (Cake & Candle Ceremony) */}
          <MakeAWish />

          {/* 5. Final Surprise Screen */}
          <FinalSurprise onReplay={handleReplay} />
        </motion.main>
      )}
    </div>
  );
}
