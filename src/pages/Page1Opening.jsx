import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { storyContent } from '../config/storyContent';
import { startMusicBoxMelody, playChime } from '../utils/audioHelper';

export default function Page1Opening({ onNext }) {
  const { page1_opening } = storyContent;

  const handleBegin = () => {
    // Start the existing birthday tune on the first user interaction
    startMusicBoxMelody();
    playChime(587.33, 0.8, 'sine');
    onNext();
  };

  return (
    <div className="page-wrapper bg-celebration-night">
      {/* Background Breathing Glow */}
      <div
        className="animate-glow-breathe"
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          width: '340px',
          height: '340px',
          background: 'radial-gradient(circle, rgba(142, 117, 235, 0.28) 0%, rgba(242, 154, 176, 0.12) 50%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(35px)',
          pointerEvents: 'none',
        }}
      />

      <div className="page-container" style={{ justifyContent: 'center', textAlign: 'center' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '18px',
            maxWidth: '380px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* 01 SEPTEMBER Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(255, 209, 102, 0.12)',
              border: '1px solid rgba(255, 209, 102, 0.35)',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '2px',
              color: 'var(--gold-sparkle)',
              textTransform: 'uppercase',
            }}
          >
            <Sparkles size={13} />
            <span>{page1_opening.date}</span>
          </motion.div>

          {/* Texts: "Today isn't just another day. It's Bauni's day. 🎂" */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 0.85, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.15rem, 4.2vw, 1.45rem)',
                fontStyle: 'italic',
                color: 'var(--text-muted)',
              }}
            >
              {page1_opening.lead1}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 7vw, 2.7rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.2,
                marginTop: '4px',
              }}
            >
              {page1_opening.lead2}
            </motion.h1>
          </div>

          {/* Button: [ Open your surprise ✨ ] */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            style={{ marginTop: '20px' }}
          >
            <button
              onClick={handleBegin}
              className="btn-celebrate-primary"
              style={{
                padding: '14px 34px',
                fontSize: '0.98rem',
              }}
            >
              <span>{page1_opening.buttonText}</span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
