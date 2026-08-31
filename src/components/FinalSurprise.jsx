import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, RotateCcw } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import { triggerConfettiBurst, triggerHeartBurst } from '../utils/confetti';
import { playChime, playCelebrationSound } from '../utils/audioHelper';

export default function FinalSurprise({ onReplay }) {
  const { finalScreen } = birthdayConfig;
  const [loveCount, setLoveCount] = useState(0);

  const handleSendLove = (e) => {
    setLoveCount((prev) => prev + 1);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    triggerHeartBurst(x, y);
    playChime(783.99, 0.7, 'triangle');
  };

  const handleReplayClick = () => {
    triggerConfettiBurst();
    playCelebrationSound();
    if (onReplay) onReplay();
  };

  return (
    <section
      id="final-surprise"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '60px 20px 40px 20px',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 30%, #2f123b 0%, #12061c 65%, #08020d 100%)',
      }}
    >
      {/* Background Soft Photo Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${birthdayConfig.photoPath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(35px) brightness(0.22) saturate(1.4)',
          transform: 'scale(1.15)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Radiant Vignette Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(13, 7, 22, 0.4) 0%, rgba(13, 7, 22, 0.95) 85%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '680px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        {/* Floating Heart Icon Badge */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut',
          }}
          style={{
            fontSize: '3.5rem',
            filter: 'drop-shadow(0 0 20px #ff6584)',
          }}
        >
          💖
        </motion.div>

        {/* Message Line 1 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.7rem, 6vw, 2.5rem)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {finalScreen.line1}
        </motion.h2>

        {/* Message Line 2 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: 'clamp(1.6rem, 5.5vw, 2.2rem)',
            color: '#f6c453',
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          "{finalScreen.line2}"
        </motion.p>

        {/* Highlighted Birthday Heading (Komal) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            marginTop: '8px',
            padding: '16px 28px',
            borderRadius: '24px',
            background: 'rgba(255, 255, 255, 0.07)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(246, 196, 83, 0.4)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 6.5vw, 2.7rem)',
              fontWeight: 800,
              color: '#ffffff',
              margin: 0,
            }}
          >
            {finalScreen.line3Heading}
          </h1>
        </motion.div>

        {/* Sender Sign-off */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            fontSize: 'clamp(1.05rem, 4vw, 1.25rem)',
            color: '#ffa5b7',
            fontWeight: 600,
            fontFamily: 'var(--font-sans)',
            margin: '4px 0 16px 0',
          }}
        >
          {finalScreen.line4Sign}
        </motion.p>

        {/* Interactive "Send Love" Hearts Tap Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSendLove}
            className="btn-primary"
            style={{
              fontSize: '1rem',
              padding: '14px 28px',
              cursor: 'pointer',
            }}
          >
            <Heart size={18} fill="#fff" />
            <span>Send Love to Brother ({loveCount > 0 ? `❤️ ${loveCount}` : 'Tap! ❤️'})</span>
          </motion.button>

          {/* Replay Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReplayClick}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 24px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#f1e6f5',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            <RotateCcw size={16} />
            <span>{finalScreen.replayButton}</span>
          </motion.button>
        </motion.div>

        {/* Footer Tribute */}
        <div
          style={{
            marginTop: '36px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            width: '100%',
            maxWidth: '360px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.3rem',
              color: '#d4af37',
              margin: 0,
            }}
          >
            {finalScreen.footerNote}
          </p>
        </div>
      </div>
    </section>
  );
}
