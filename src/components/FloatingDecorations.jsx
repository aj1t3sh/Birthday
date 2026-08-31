import React, { useMemo } from 'react';

/**
 * Ambient background floating particles (hearts, sparkles, subtle glowing orbs)
 */
export default function FloatingDecorations() {
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${(i * 5.8) % 94 + 3}%`,
      animationDuration: `${12 + (i % 8) * 3}s`,
      animationDelay: `${(i * 1.3) % 10}s`,
      size: 14 + (i % 5) * 5,
      type: i % 3 === 0 ? 'heart' : i % 3 === 1 ? 'sparkle' : 'star',
      opacity: 0.25 + (i % 4) * 0.12,
    }));
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* Background Soft Glow Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '15%',
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle, rgba(255, 101, 132, 0.15) 0%, rgba(255, 101, 132, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'floatSlow 14s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '55%',
          right: '10%',
          width: '380px',
          height: '380px',
          background: 'radial-gradient(circle, rgba(246, 196, 83, 0.12) 0%, rgba(246, 196, 83, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          animation: 'floatGentle 16s ease-in-out infinite reverse',
        }}
      />

      {/* Floating Animated Symbols */}
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: p.left,
            bottom: '-20px',
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animation: `floatParticle ${p.animationDuration} linear infinite`,
            animationDelay: p.animationDelay,
            color: p.type === 'heart' ? '#ff6584' : '#f6c453',
            textShadow: '0 0 12px rgba(255, 215, 0, 0.6)',
            userSelect: 'none',
          }}
        >
          {p.type === 'heart' ? '💖' : p.type === 'sparkle' ? '✨' : '⭐'}
        </div>
      ))}
    </div>
  );
}
