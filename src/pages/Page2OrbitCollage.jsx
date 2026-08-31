import React from 'react';
import { motion } from 'framer-motion';
import CircularPhotoOrbit from '../components/CircularPhotoOrbit';
import StoryFooterNav from '../components/StoryFooterNav';
import { storyContent } from '../config/storyContent';
import { playChime } from '../utils/audioHelper';

export default function Page2OrbitCollage({ onNext, onPrev }) {
  const { page2_orbit } = storyContent;

  const handleNext = () => {
    playChime(659.25, 0.4, 'sine');
    onNext();
  };

  const handlePrev = () => {
    playChime(587.33, 0.4, 'sine');
    onPrev();
  };

  return (
    <div className="page-wrapper bg-orbit-space">
      <div className="page-container" style={{ justifyContent: 'space-between', textAlign: 'center' }}>
        {/* Top Mini Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: '0.74rem',
            fontWeight: 600,
            letterSpacing: '2px',
            color: 'var(--gold-sparkle)',
            textTransform: 'uppercase',
          }}
        >
          Memory Orbit • 07 Photographs
        </motion.div>

        {/* The 7-Photo Rotating Circular Memory Wheel */}
        <div style={{ width: '100%', margin: 'auto 0' }}>
          <CircularPhotoOrbit />

          <p
            style={{
              fontSize: '0.76rem',
              color: 'var(--text-dim)',
              letterSpacing: '0.8px',
              marginTop: '18px',
            }}
          >
            {page2_orbit.hint}
          </p>
        </div>

        {/* Bottom Spacer */}
        <div style={{ height: '4px' }} />
      </div>

      {/* Navigation Footer */}
      <StoryFooterNav
        onPrev={handlePrev}
        onNext={handleNext}
        nextLabel={page2_orbit.nextButtonText}
        isDark={true}
      />
    </div>
  );
}
