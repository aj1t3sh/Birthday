import React from 'react';
import { VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SoundtrackToggle({ isPlaying, onToggle }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 'calc(var(--safe-top) + 12px)',
        right: '16px',
        zIndex: 90,
      }}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
        aria-label={isPlaying ? "Mute soundtrack" : "Play soundtrack"}
        style={{
          background: 'rgba(25, 20, 16, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          color: '#ffffff',
          padding: '6px 12px',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.72rem',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        }}
      >
        {isPlaying ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '10px' }}>
              <div className="eq-1" style={{ width: '2px', background: '#d4af37', borderRadius: '1px' }} />
              <div className="eq-2" style={{ width: '2px', background: '#c86b76', borderRadius: '1px' }} />
              <div className="eq-3" style={{ width: '2px', background: '#d4af37', borderRadius: '1px' }} />
            </div>
            <span>Sound</span>
          </>
        ) : (
          <>
            <VolumeX size={12} style={{ opacity: 0.7 }} />
            <span style={{ opacity: 0.7 }}>Muted</span>
          </>
        )}
      </motion.button>
    </div>
  );
}
