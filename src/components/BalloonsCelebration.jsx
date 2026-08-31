import React from 'react';

export default function BalloonsCelebration({ isVisible = false }) {
  if (!isVisible) return null;

  const balloons = [
    { id: 1, left: '12%', color: 'radial-gradient(circle at 35% 35%, #ffd166 0%, #d48b22 100%)', delay: '0s', size: 48 },
    { id: 2, left: '28%', color: 'radial-gradient(circle at 35% 35%, #f29ab0 0%, #ad405a 100%)', delay: '0.6s', size: 56 },
    { id: 3, left: '46%', color: 'radial-gradient(circle at 35% 35%, #a586f7 0%, #5d38b8 100%)', delay: '1.2s', size: 52 },
    { id: 4, left: '68%', color: 'radial-gradient(circle at 35% 35%, #ffd166 0%, #c47c18 100%)', delay: '0.4s', size: 54 },
    { id: 5, left: '84%', color: 'radial-gradient(circle at 35% 35%, #f29ab0 0%, #9e2e4b 100%)', delay: '1.8s', size: 46 },
  ];

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 40, overflow: 'hidden' }}>
      {balloons.map((b) => (
        <div
          key={b.id}
          className="floating-balloon"
          style={{
            left: b.left,
            animationDelay: b.delay,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Balloon Body */}
          <div
            style={{
              width: `${b.size}px`,
              height: `${b.size * 1.25}px`,
              borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
              background: b.color,
              boxShadow: 'inset -4px -6px 12px rgba(0,0,0,0.35), 0 8px 25px rgba(0,0,0,0.4)',
              position: 'relative',
            }}
          >
            {/* Balloon Knot */}
            <div
              style={{
                position: 'absolute',
                bottom: '-4px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '6px',
                height: '5px',
                borderRadius: '2px',
                background: 'rgba(0,0,0,0.4)',
              }}
            />
          </div>

          {/* Balloon String */}
          <div
            style={{
              width: '1px',
              height: '55px',
              background: 'rgba(255, 255, 255, 0.4)',
              transform: 'rotate(-2deg)',
            }}
          />
        </div>
      ))}
    </div>
  );
}
