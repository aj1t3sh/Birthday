import React, { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

/**
 * Elegant framed photo component for Bauni
 * 
 * 📸 PHOTO USAGE:
 * To replace the photo, add your sister's photo at:
 * public/images/bauni.jpg
 */
export default function PhotoFrame({
  src = birthdayConfig.photoPath,
  alt = "Komal (Bauni)",
  size = 220,
  shape = "circle", // "circle" or "rounded"
  showSparkles = true,
  className = "",
}) {
  const [imageError, setImageError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const borderRadius = shape === "circle" ? "50%" : "28px";

  return (
    <div
      className={`animate-float-slow ${className}`}
      style={{
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Outer Halo Glow */}
      <div
        style={{
          position: 'absolute',
          inset: '-10px',
          borderRadius: shape === "circle" ? "50%" : "36px",
          background: 'linear-gradient(135deg, rgba(246, 196, 83, 0.5) 0%, rgba(255, 101, 132, 0.45) 50%, rgba(186, 104, 200, 0.4) 100%)',
          filter: 'blur(14px)',
          opacity: 0.85,
          animation: 'pulseGoldHalo 4s ease-in-out infinite',
          zIndex: 1,
        }}
      />

      {/* Decorative Golden Outer Ring */}
      <div
        style={{
          position: 'absolute',
          inset: '-4px',
          borderRadius: shape === "circle" ? "50%" : "32px",
          border: '2px solid rgba(246, 196, 83, 0.65)',
          background: 'transparent',
          zIndex: 2,
          boxShadow: '0 0 20px rgba(246, 196, 83, 0.4)',
        }}
      />

      {/* Main Image Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: borderRadius,
          overflow: 'hidden',
          backgroundColor: '#1c0f2b',
          border: '3px solid rgba(255, 255, 255, 0.85)',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6)',
          zIndex: 3,
        }}
      >
        {!imageError ? (
          <img
            src={src}
            alt={alt}
            onLoad={() => setLoaded(true)}
            onError={() => setImageError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
              transition: 'opacity 0.5s ease',
              opacity: loaded ? 1 : 0.8,
            }}
          />
        ) : (
          /* Graceful Fallback if bauni.jpg is missing */
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(145deg, #3d1445 0%, #1f0b29 100%)',
              color: '#fff',
              textAlign: 'center',
              padding: '16px',
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '8px' }}>👑</div>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                color: '#f6c453',
                fontWeight: 700,
              }}
            >
              Bauni
            </span>
            <span style={{ fontSize: '0.75rem', color: '#e0d0e6', marginTop: '4px' }}>
              Add photo to /images/bauni.jpg
            </span>
          </div>
        )}
      </div>

      {/* Floating Sparkles & Heart Badges around Frame */}
      {showSparkles && (
        <>
          <div
            className="animate-twinkle"
            style={{
              position: 'absolute',
              top: '-6px',
              right: '8px',
              zIndex: 4,
              fontSize: '1.4rem',
              filter: 'drop-shadow(0 0 8px #f6c453)',
            }}
          >
            ✨
          </div>
          <div
            className="animate-twinkle"
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '-8px',
              zIndex: 4,
              fontSize: '1.3rem',
              filter: 'drop-shadow(0 0 8px #ff6584)',
              animationDelay: '1.5s',
            }}
          >
            💖
          </div>
          <div
            className="animate-twinkle"
            style={{
              position: 'absolute',
              top: '40%',
              right: '-14px',
              zIndex: 4,
              fontSize: '1.1rem',
              filter: 'drop-shadow(0 0 6px #ffd700)',
              animationDelay: '0.8s',
            }}
          >
            🌟
          </div>
        </>
      )}
    </div>
  );
}
