import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import { triggerConfettiBurst } from '../utils/confetti';
import { playCelebrationSound, startMusicBoxMelody } from '../utils/audioHelper';

export default function WelcomeScreen({ onOpenSurprise }) {
  const handleOpen = () => {
    triggerConfettiBurst();
    playCelebrationSound();
    startMusicBoxMelody();
    if (onOpenSurprise) {
      onOpenSurprise();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 900,
        padding: '24px',
        textAlign: 'center',
        background: 'radial-gradient(circle at center, #240d33 0%, #0d0716 100%)',
      }}
    >
      <div
        className="glass-card-gold"
        style={{
          width: '100%',
          maxWidth: '440px',
          padding: '40px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {/* Animated Badge */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '9999px',
            background: 'rgba(246, 196, 83, 0.15)',
            border: '1px solid rgba(246, 196, 83, 0.35)',
            color: '#f6c453',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.5px',
          }}
        >
          <Sparkles size={14} />
          <span>A Special Delivery For You</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 8vw, 3.2rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#ffffff',
            margin: 0,
          }}
        >
          Hey <span className="text-gold-gradient">{birthdayConfig.nickname}</span> 👀
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 4vw, 1.2rem)',
            color: '#e0d0e6',
            lineHeight: 1.6,
            maxWidth: '320px',
            margin: '4px 0 16px 0',
          }}
        >
          {birthdayConfig.welcome.subtitle}
        </motion.p>

        {/* Action Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleOpen}
          className="btn-primary"
          style={{
            fontSize: '1.15rem',
            padding: '18px 36px',
            width: '100%',
            maxWidth: '300px',
            cursor: 'pointer',
          }}
        >
          <span>{birthdayConfig.welcome.buttonText}</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
