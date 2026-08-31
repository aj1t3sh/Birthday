import React from 'react';
import { VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StoryHeader({
  currentPage = 1,
  totalPages = 9,
  isDark = false,
  isMusicPlaying = false,
  onToggleMusic,
}) {
  const currentFormatted = String(currentPage).padStart(2, '0');
  const totalFormatted = String(totalPages).padStart(2, '0');
  const progressPercent = (currentPage / totalPages) * 100;

  const textColor = isDark ? '#faf5fc' : '#1e1712';
  const mutedTextColor = isDark ? '#7e7087' : '#9c8e81';
  const trackBg = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)';

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: 'calc(var(--safe-top) + 6px) 16px 8px 16px',
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '520px',
          pointerEvents: 'auto',
        }}
      >
        {/* Minimal Progress Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <span
            style={{
              fontSize: '0.74rem',
              fontWeight: 600,
              letterSpacing: '2px',
              color: textColor,
              fontFamily: 'var(--font-sans)',
            }}
          >
            {currentFormatted} <span style={{ color: mutedTextColor, margin: '0 2px' }}>/</span> {totalFormatted}
          </span>

          {/* Thin Progress Line */}
          <div
            style={{
              width: '42px',
              height: '2px',
              background: trackBg,
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progressPercent}%`,
                background: 'linear-gradient(90deg, #d4af37 0%, #c86b76 100%)',
                transition: 'width 0.35s ease',
              }}
            />
          </div>
        </div>

        {/* Ambient Sound Pill */}
        {onToggleMusic && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onToggleMusic}
            aria-label={isMusicPlaying ? "Mute music" : "Play music"}
            style={{
              background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.1)',
              color: textColor,
              padding: '4px 10px',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.7rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            {isMusicPlaying ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '9px' }}>
                <div className="eq-1" style={{ width: '2px', background: '#d4af37', borderRadius: '1px' }} />
                <div className="eq-2" style={{ width: '2px', background: '#c86b76', borderRadius: '1px' }} />
                <div className="eq-3" style={{ width: '2px', background: '#d4af37', borderRadius: '1px' }} />
              </div>
            ) : (
              <VolumeX size={12} style={{ opacity: 0.7 }} />
            )}
          </motion.button>
        )}
      </div>
    </header>
  );
}
