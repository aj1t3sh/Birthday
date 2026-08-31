import React from 'react';

export default function StoryHeader({
  currentPage = 1,
  totalPages = 6,
  isDark = true,
}) {
  const currentFormatted = String(currentPage).padStart(2, '0');
  const totalFormatted = String(totalPages).padStart(2, '0');
  const progressPercent = (currentPage / totalPages) * 100;

  const textColor = isDark ? '#f5f7fc' : '#1e1712';
  const mutedTextColor = isDark ? '#7d88b2' : '#9c8e81';
  const trackBg = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)';

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: 'calc(var(--safe-top) + 8px) 16px 8px 16px',
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '520px',
        }}
      >
        {/* Minimal Progress Indicator */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
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
              width: '46px',
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
                background: 'linear-gradient(90deg, #ffd166 0%, #f29ab0 100%)',
                transition: 'width 0.35s ease',
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
