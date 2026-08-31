import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Heart, Sparkles } from 'lucide-react';
import CircularPhotoOrbit from '../components/CircularPhotoOrbit';
import StoryFooterNav from '../components/StoryFooterNav';
import { storyContent } from '../config/storyContent';
import { playCelebrationSound, playChime } from '../utils/audioHelper';

export default function Page6GrandFinale({ onReplay, onPrev }) {
  const { page6_finale } = storyContent;

  const handleRestart = () => {
    playCelebrationSound();
    onReplay();
  };

  const handlePrev = () => {
    playChime(587.33, 0.4, 'sine');
    onPrev();
  };

  return (
    <div className="page-wrapper bg-grand-finale" style={{ position: 'relative' }}>
      {/* Mini Background Orbit for Magical Atmosphere */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.35,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <CircularPhotoOrbit isMini={true} />
      </div>

      <div className="page-container" style={{ justifyContent: 'center', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '14px',
            maxWidth: '420px',
            margin: '0 auto',
          }}
        >
          {/* Top Heart Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'var(--pink-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 25px rgba(242, 154, 176, 0.6)',
            }}
          >
            <Heart size={20} color="#ffffff" fill="#ffffff" />
          </motion.div>

          {/* Texts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '2px',
                color: 'var(--gold-sparkle)',
                textTransform: 'uppercase',
              }}
            >
              {page6_finale.title}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.3rem, 8vw, 3.2rem)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.5px',
                lineHeight: 1.1,
              }}
            >
              {page6_finale.name}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.45rem, 5.2vw, 1.9rem)',
                color: 'var(--pink-sparkle)',
                fontWeight: 700,
                marginTop: '2px',
              }}
            >
              {page6_finale.nickname}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ delay: 1.8, duration: 0.7 }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.05rem, 3.8vw, 1.25rem)',
                fontStyle: 'italic',
                color: 'var(--text-main)',
                whiteSpace: 'pre-line',
                lineHeight: 1.5,
                marginTop: '8px',
              }}
            >
              {page6_finale.subline}
            </motion.p>
          </div>

          {/* Credit */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.7 }}
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.35rem',
              color: 'var(--gold-sparkle)',
              whiteSpace: 'pre-line',
              marginTop: '4px',
            }}
          >
            {page6_finale.credit}
          </motion.p>

          {/* Replay Button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.6 }}
            style={{ marginTop: '16px' }}
          >
            <button
              onClick={handleRestart}
              className="btn-celebrate-gold"
              style={{
                padding: '12px 28px',
                fontSize: '0.9rem',
              }}
            >
              <RotateCcw size={15} />
              <span>{page6_finale.replayButtonText}</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Navigation Footer */}
      <StoryFooterNav onPrev={handlePrev} showNext={false} isDark={true} />
    </div>
  );
}
