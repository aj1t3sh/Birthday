import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { storyContent, getAssetUrl } from '../config/storyContent';
import { playChime } from '../utils/audioHelper';

export default function CircularPhotoOrbit({ isMini = false }) {
  const photos = storyContent.photos;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const totalPhotos = photos.length; // 7 photos

  // Responsive Radius & Photo Size
  const radius = isMini ? 85 : 124; // in px for mobile; scaled on larger screens
  const photoWidth = isMini ? 46 : 68;
  const photoHeight = isMini ? 62 : 92;

  const handlePhotoClick = (index) => {
    setSelectedPhotoIndex(index);
    setIsPaused(true);
    playChime(659.25, 0.4, 'sine');
  };

  const handleCloseModal = () => {
    setSelectedPhotoIndex(null);
    setIsPaused(false);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: isMini ? '240px' : '360px',
        aspectRatio: '1/1',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Central Ambient Glow */}
      <div
        className="animate-glow-breathe"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: isMini ? '160px' : '260px',
          height: isMini ? '160px' : '260px',
          background: 'radial-gradient(circle, rgba(142, 117, 235, 0.28) 0%, rgba(242, 154, 176, 0.15) 45%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative Orbit Ring Guide Line */}
      <div
        style={{
          position: 'absolute',
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          borderRadius: '50%',
          border: '1px dashed rgba(142, 117, 235, 0.25)',
          pointerEvents: 'none',
        }}
      />

      {/* Center Birthday Focal Point */}
      {!isMini && (
        <div
          style={{
            position: 'absolute',
            zIndex: 15,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            maxWidth: '130px',
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            style={{ fontSize: '1.6rem', marginBottom: '2px' }}
          >
            🎂
          </motion.div>

          <span
            style={{
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '1.8px',
              color: 'var(--gold-sparkle)',
              fontFamily: 'var(--font-sans)',
              textTransform: 'uppercase',
              lineHeight: 1.2,
            }}
          >
            HAPPY BIRTHDAY
          </span>

          <span
            style={{
              fontSize: '0.88rem',
              fontWeight: 700,
              color: '#ffffff',
              fontFamily: 'var(--font-serif)',
              marginTop: '1px',
            }}
          >
            Bauni ❤️
          </span>
        </div>
      )}

      {/* 360° Rotating Circular Container */}
      <div
        className={`animate-orbit-spin ${isPaused ? 'paused-orbit' : ''}`}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {photos.map((photo, index) => {
          // Calculate angle for 7 photos
          const angleDeg = (360 / totalPhotos) * index;
          const angleRad = (angleDeg * Math.PI) / 180;
          const x = radius * Math.cos(angleRad);
          const y = radius * Math.sin(angleRad);

          return (
            <div
              key={photo.id || index}
              style={{
                position: 'absolute',
                transform: `translate(${x}px, ${y}px)`,
                width: `${photoWidth}px`,
                height: `${photoHeight}px`,
              }}
            >
              {/* Counter-Rotating Container (Keeps Photo Upright!) */}
              <div
                className={`animate-orbit-counter-spin ${isPaused ? 'paused-orbit' : ''}`}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.15, zIndex: 50 }}
                  whileTap={{ scale: 1.12, zIndex: 50 }}
                  onClick={() => handlePhotoClick(index)}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    backgroundColor: '#12173a',
                    border: '1.5px solid rgba(242, 154, 176, 0.4)',
                    boxShadow: '0 8px 24px rgba(3, 5, 18, 0.65), 0 0 12px rgba(142, 117, 235, 0.3)',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                >
                  <img
                    src={getAssetUrl(photo.src)}
                    alt={photo.title || `Memory ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: photo.objectPosition || 'center 15%',
                      display: 'block',
                    }}
                  />

                  {/* Gentle gradient mask */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(5,8,23,0.5) 100%)',
                    }}
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              backgroundColor: 'rgba(5, 7, 20, 0.96)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 'calc(var(--safe-top) + 12px) 16px calc(var(--safe-bottom) + 16px) 16px',
            }}
            onClick={handleCloseModal}
          >
            {/* Header */}
            <div
              style={{
                width: '100%',
                maxWidth: '480px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#ffffff',
                zIndex: 1002,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <span style={{ fontSize: '0.82rem', letterSpacing: '1.5px', color: 'var(--gold-sparkle)', fontWeight: 600 }}>
                {photos[selectedPhotoIndex].title || `Memory ${selectedPhotoIndex + 1}`}
              </span>

              <button
                onClick={handleCloseModal}
                aria-label="Close"
                style={{
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#ffffff',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Photo View */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '420px',
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '12px 0',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                style={{
                  maxHeight: '68vh',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(142, 117, 235, 0.3)',
                  border: '1.5px solid rgba(242, 154, 176, 0.4)',
                }}
              >
                <img
                  src={getAssetUrl(photos[selectedPhotoIndex].src)}
                  alt="Full memory"
                  style={{
                    width: '100%',
                    maxHeight: '68vh',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </motion.div>
            </div>

            {/* Caption */}
            {photos[selectedPhotoIndex].caption && (
              <div
                style={{
                  maxWidth: '420px',
                  width: '100%',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  textAlign: 'center',
                  zIndex: 1002,
                  color: '#ffffff',
                  fontSize: '0.94rem',
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                "{photos[selectedPhotoIndex].caption}"
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
