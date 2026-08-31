import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronRight, MailOpen, Mail } from 'lucide-react';
import { storyContent } from '../config/storyContent';
import { playChime } from '../utils/audioHelper';

export default function InteractiveEnvelope({ onFinish }) {
  const { beats, envelopePrompt, buttonOpen } = storyContent.page3_note;
  const [isOpen, setIsOpen] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    playChime(659.25, 0.6, 'sine');
  };

  const handleNextBeat = () => {
    if (currentBeat < beats.length - 1) {
      playChime(659.25, 0.35, 'sine');
      setCurrentBeat((prev) => prev + 1);
    } else {
      playChime(783.99, 0.8, 'sine');
      onFinish();
    }
  };

  const activeBeat = beats[currentBeat];

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '440px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* Closed Interactive Envelope */
          <motion.div
            key="envelope-closed"
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -15 }}
            transition={{ duration: 0.6 }}
            onClick={handleOpenEnvelope}
            style={{
              width: '100%',
              maxWidth: '320px',
              padding: '32px 20px',
              background: 'linear-gradient(145deg, #1b204e 0%, #101538 100%)',
              borderRadius: '20px',
              border: '1.5px solid rgba(142, 117, 235, 0.45)',
              boxShadow: '0 20px 50px rgba(3, 5, 18, 0.7), 0 0 25px rgba(142, 117, 235, 0.25)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            {/* Wax Seal Motif */}
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: 'var(--pink-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(242, 154, 176, 0.5)',
                color: '#ffffff',
              }}
            >
              <Mail size={24} />
            </motion.div>

            <div>
              <p
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '1.35rem',
                  color: 'var(--pink-sparkle)',
                  fontWeight: 600,
                  marginBottom: '4px',
                }}
              >
                {envelopePrompt}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  color: 'var(--text-dim)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}
              >
                A Personal Birthday Note
              </p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleOpenEnvelope();
              }}
              className="btn-celebrate-primary"
              style={{
                padding: '10px 24px',
                fontSize: '0.88rem',
                marginTop: '6px',
              }}
            >
              <MailOpen size={16} />
              <span>{buttonOpen}</span>
            </button>
          </motion.div>
        ) : (
          /* Dynamic Multi-Beat Message Card */
          <motion.div
            key="envelope-opened"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              width: '100%',
              maxWidth: '420px',
              padding: '28px 24px',
              background: 'var(--note-card-bg)',
              borderRadius: '24px',
              border: '1px solid var(--note-card-border)',
              boxShadow: 'var(--note-card-shadow)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px',
            }}
          >
            {/* Step Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '2px',
                  color: 'var(--gold-sparkle)',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                Part {currentBeat + 1} of {beats.length}
              </span>

              <div style={{ display: 'flex', gap: '4px' }}>
                {beats.map((_, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: idx === currentBeat ? '14px' : '5px',
                      height: '4px',
                      borderRadius: '2px',
                      background: idx === currentBeat ? 'var(--pink-sparkle)' : 'rgba(255, 255, 255, 0.18)',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Dynamic Animated Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBeat.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}
              >
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.2rem, 4.5vw, 1.5rem)',
                    fontWeight: 700,
                    color: 'var(--gold-sparkle)',
                  }}
                >
                  {activeBeat.title}
                </h4>

                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.02rem, 3.8vw, 1.25rem)',
                    lineHeight: 1.6,
                    color: 'var(--text-main)',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {activeBeat.body}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Next Beat Action Button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
              <button
                onClick={handleNextBeat}
                className="btn-celebrate-primary"
                style={{
                  padding: '9px 20px',
                  fontSize: '0.85rem',
                }}
              >
                <span>{currentBeat === beats.length - 1 ? "Cake Time 🎂 →" : "Next →"}</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
