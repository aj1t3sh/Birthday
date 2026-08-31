import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StoryFooterNav({
  onPrev,
  onNext,
  showPrev = true,
  showNext = true,
  nextLabel = "Next",
  prevLabel = "Back",
  isDark = false,
  customNextBtn,
}) {
  const textColor = isDark ? '#faf5fc' : '#1e1712';
  const borderCol = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.12)';
  const btnBg = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)';

  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '8px 16px calc(var(--safe-bottom) + 8px) 16px',
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
          gap: '12px',
        }}
      >
        {/* Prev Button */}
        <div>
          {showPrev && onPrev ? (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onPrev}
              aria-label="Previous scene"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                background: btnBg,
                border: `1px solid ${borderCol}`,
                color: textColor,
                padding: '9px 16px',
                borderRadius: '9999px',
                fontSize: '0.84rem',
                fontWeight: 500,
                fontFamily: 'var(--font-sans)',
                cursor: 'pointer',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
              }}
            >
              <ChevronLeft size={16} />
              <span>{prevLabel}</span>
            </motion.button>
          ) : (
            <div style={{ width: '60px' }} />
          )}
        </div>

        {/* Next Button */}
        <div>
          {showNext && onNext && (
            customNextBtn ? (
              customNextBtn
            ) : (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onNext}
                aria-label="Next scene"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'var(--rose-gradient)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#ffffff',
                  padding: '9px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(200, 107, 118, 0.35)',
                }}
              >
                <span>{nextLabel}</span>
                <ChevronRight size={16} />
              </motion.button>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
