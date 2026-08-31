import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles, Heart } from 'lucide-react';
import { storyContent } from '../config/storyContent';
import { playCelebrationSound, playChime } from '../utils/audioHelper';
import { triggerConfettiBurst } from '../utils/confetti';

export default function SurpriseGiftBox() {
  const { title, hint, revealedMessage } = storyContent.page5_gift;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenGift = () => {
    if (isOpen) return;
    setIsOpen(true);
    playCelebrationSound();
    triggerConfettiBurst();
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '420px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '20px',
      }}
    >
      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* Closed 3D Gift Box */
          <motion.div
            key="gift-closed"
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -15 }}
            transition={{ duration: 0.6 }}
            onClick={handleOpenGift}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              userSelect: 'none',
              padding: '24px 20px',
            }}
          >
            {/* Gift Box Icon / 3D Visual */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, -2, 2, 0],
              }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              style={{
                width: '110px',
                height: '110px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #a586f7 0%, #6838c9 100%)',
                border: '2px solid rgba(255, 209, 102, 0.6)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(165, 134, 247, 0.4)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Gold Ribbon Vertical */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  width: '18px',
                  background: 'var(--gold-gradient)',
                  boxShadow: '0 0 10px rgba(255, 209, 102, 0.4)',
                }}
              />

              {/* Gold Ribbon Horizontal */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: '18px',
                  background: 'var(--gold-gradient)',
                  boxShadow: '0 0 10px rgba(255, 209, 102, 0.4)',
                }}
              />

              {/* Bow on Top */}
              <div
                style={{
                  position: 'absolute',
                  top: '-14px',
                  fontSize: '2rem',
                  filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))',
                }}
              >
                🎀
              </div>
            </motion.div>

            <div style={{ marginTop: '22px' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.4rem, 5vw, 1.8rem)',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '4px',
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.84rem',
                  color: 'var(--gold-sparkle)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}
              >
                {hint}
              </p>
            </div>
          </motion.div>
        ) : (
          /* Opened Gift Box & Heartfelt Message */
          <motion.div
            key="gift-opened"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              width: '100%',
              maxWidth: '380px',
              padding: '32px 24px',
              background: 'rgba(25, 18, 55, 0.85)',
              borderRadius: '24px',
              border: '1.5px solid rgba(255, 209, 102, 0.4)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(242, 154, 176, 0.3)',
              backdropFilter: 'blur(14px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'var(--pink-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 25px rgba(242, 154, 176, 0.6)',
              }}
            >
              <Heart size={24} color="#ffffff" fill="#ffffff" />
            </div>

            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.15rem, 4.2vw, 1.45rem)',
                fontWeight: 600,
                color: '#ffffff',
                lineHeight: 1.6,
                whiteSpace: 'pre-line',
              }}
            >
              {revealedMessage}
            </p>

            <span style={{ fontSize: '1.4rem' }}>✨🎁✨</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
