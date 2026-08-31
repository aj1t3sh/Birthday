import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import StoryHeader from './components/StoryHeader';

// 6 Celebratory Story Scenes
import Page1Opening from './pages/Page1Opening';
import Page2OrbitCollage from './pages/Page2OrbitCollage';
import Page3DynamicNote from './pages/Page3DynamicNote';
import Page4CakeCelebration from './pages/Page4CakeCelebration';
import Page5GiftSurprise from './pages/Page5GiftSurprise';
import Page6GrandFinale from './pages/Page6GrandFinale';

import { playChime } from './utils/audioHelper';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(1);
  const totalPages = 6;

  // Keyboard navigation for desktop testing
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && currentPage < totalPages) {
        setDirection(1);
        setCurrentPage((prev) => prev + 1);
        playChime(659.25, 0.35, 'sine');
      } else if (e.key === 'ArrowLeft' && currentPage > 1) {
        setDirection(-1);
        setCurrentPage((prev) => prev - 1);
        playChime(587.33, 0.35, 'sine');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages]);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleReplay = () => {
    setDirection(-1);
    setCurrentPage(1);
  };

  // Full-screen page slide animation variants
  const pageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 30 },
        opacity: { duration: 0.3 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 30 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        height: '100dvh',
        overflow: 'hidden',
        backgroundColor: 'var(--midnight-sky)',
      }}
    >
      {/* Top Minimal Progress Header (Clean, zero audio controls) */}
      <StoryHeader
        currentPage={currentPage}
        totalPages={totalPages}
        isDark={true}
      />

      {/* Main Full-Screen Viewport with Touch Drag / Swipe Handling */}
      <main style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={(e, { offset }) => {
              if (offset.x < -60 && currentPage < totalPages) {
                handleNext();
              } else if (offset.x > 60 && currentPage > 1) {
                handlePrev();
              }
            }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              touchAction: 'pan-y',
            }}
          >
            {currentPage === 1 && <Page1Opening onNext={handleNext} />}
            {currentPage === 2 && <Page2OrbitCollage onNext={handleNext} onPrev={handlePrev} />}
            {currentPage === 3 && <Page3DynamicNote onNext={handleNext} onPrev={handlePrev} />}
            {currentPage === 4 && <Page4CakeCelebration onNext={handleNext} onPrev={handlePrev} />}
            {currentPage === 5 && <Page5GiftSurprise onNext={handleNext} onPrev={handlePrev} />}
            {currentPage === 6 && <Page6GrandFinale onReplay={handleReplay} onPrev={handlePrev} />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
