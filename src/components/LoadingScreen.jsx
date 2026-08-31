import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { birthdayConfig } from '../config/birthdayConfig';

export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, birthdayConfig.loading.durationMs || 2400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#0d0716',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '24px',
        textAlign: 'center',
      }}
    >
      {/* Glowing gift box animation */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, -6, 6, -3, 3, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.2,
          ease: 'easeInOut',
        }}
        style={{
          fontSize: '4.5rem',
          filter: 'drop-shadow(0 0 25px rgba(246, 196, 83, 0.75))',
          marginBottom: '28px',
        }}
      >
        🎁
      </motion.div>

      {/* Loading message */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.45rem',
          fontWeight: 600,
          color: '#fff8f0',
          maxWidth: '380px',
          lineHeight: 1.5,
          marginBottom: '20px',
        }}
      >
        {birthdayConfig.loading.text}
      </motion.h2>

      {/* Elegant glowing loading bar */}
      <div
        style={{
          width: '180px',
          height: '4px',
          backgroundColor: 'rgba(255, 255, 255, 0.12)',
          borderRadius: '4px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'easeInOut',
          }}
          style={{
            width: '60%',
            height: '100%',
            background: 'var(--gold-gradient)',
            borderRadius: '4px',
            boxShadow: '0 0 10px #f6c453',
          }}
        />
      </div>
    </motion.div>
  );
}
