import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { storyContent } from '../config/storyContent';
import StoryFooterNav from '../components/StoryFooterNav';
import BalloonsCelebration from '../components/BalloonsCelebration';
import { playCandleBlowSound, playCelebrationSound, playChime } from '../utils/audioHelper';
import { triggerConfettiBurst } from '../utils/confetti';

export default function Page4CakeCelebration({ onNext, onPrev }) {
  const { page4_cake } = storyContent;
  const [isBlown, setIsBlown] = useState(false);

  const handleBlowCandle = () => {
    if (isBlown) return;
    setIsBlown(true);
    playCandleBlowSound();
    triggerConfettiBurst();
    setTimeout(() => {
      triggerConfettiBurst();
    }, 600);
  };

  const handleNext = () => {
    playCelebrationSound();
    onNext();
  };

  const handlePrev = () => {
    playChime(587.33, 0.4, 'sine');
    onPrev();
  };

  return (
    <div className="page-wrapper bg-cake-magic">
      {/* Rising Festive Balloons */}
      <BalloonsCelebration isVisible={isBlown} />

      {/* Radial Magic Glow behind the Cake */}
      <div
        className={isBlown ? "" : "animate-glow-breathe"}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '380px',
          height: '380px',
          background: isBlown
            ? 'radial-gradient(circle, rgba(242, 154, 176, 0.35) 0%, rgba(142, 117, 235, 0.2) 45%, rgba(0,0,0,0) 70%)'
            : 'radial-gradient(circle, rgba(142, 117, 235, 0.28) 0%, rgba(84, 130, 237, 0.12) 50%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
          borderRadius: '50%',
          filter: 'blur(35px)',
          transition: 'all 0.8s ease',
        }}
      />

      <div className="page-container" style={{ justifyContent: 'center', textAlign: 'center' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            width: '100%',
            maxWidth: '420px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Header Title */}
          {!isBlown ? (
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.6rem, 6vw, 2.2rem)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.25,
              }}
            >
              {page4_cake.intro}
            </motion.h2>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                padding: '14px 18px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 209, 102, 0.45)',
                borderRadius: '16px',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 25px rgba(242, 154, 176, 0.3)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', fontSize: '1.3rem' }}>
                <span>✨</span>
                <span>🎂</span>
                <span>✨</span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.05rem, 4vw, 1.35rem)',
                  color: 'var(--gold-sparkle)',
                  fontWeight: 600,
                  lineHeight: 1.45,
                }}
              >
                "{page4_cake.blessing}"
              </h3>
            </motion.div>
          )}

          {/* Animated Birthday Cake (SVG/CSS) */}
          <div
            onClick={handleBlowCandle}
            style={{
              position: 'relative',
              cursor: isBlown ? 'default' : 'pointer',
              padding: '18px 0 6px 0',
              userSelect: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* 3 Glowing Candle Flames */}
            <div style={{ display: 'flex', gap: '22px', marginBottom: '-2px' }}>
              {[0, 1, 2].map((idx) => (
                <div
                  key={idx}
                  style={{
                    position: 'relative',
                    width: '14px',
                    height: '26px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <AnimatePresence>
                    {!isBlown ? (
                      <motion.div
                        key={`flame-${idx}`}
                        exit={{ opacity: 0, y: -12, scale: 0.2 }}
                        transition={{ duration: 0.35, delay: idx * 0.08 }}
                        className="candle-flame"
                        style={{
                          width: '12px',
                          height: '22px',
                          borderRadius: '50% 50% 35% 35%',
                          background: 'radial-gradient(ellipse at center, #ffffff 15%, #ffd54f 55%, #f29ab0 90%)',
                          boxShadow: '0 0 14px #ffd54f, 0 0 24px rgba(242, 154, 176, 0.5)',
                        }}
                      />
                    ) : (
                      <motion.div
                        initial={{ opacity: 0.8, y: 0, scale: 0.5 }}
                        animate={{ opacity: 0, y: -20, scale: 1.4 }}
                        transition={{ duration: 1, delay: idx * 0.08 }}
                        style={{ fontSize: '0.9rem', position: 'absolute', top: '-6px' }}
                      >
                        💨
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* 3 Candles */}
            <div style={{ display: 'flex', gap: '22px', marginBottom: '-1px' }}>
              {[0, 1, 2].map((idx) => (
                <div
                  key={`stick-${idx}`}
                  style={{
                    width: '6px',
                    height: '24px',
                    background: 'repeating-linear-gradient(45deg, #fff, #fff 3px, #f29ab0 3px, #f29ab0 6px)',
                    borderRadius: '2px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                  }}
                />
              ))}
            </div>

            {/* Cake Top Tier */}
            <div
              style={{
                width: '130px',
                height: '38px',
                background: 'linear-gradient(180deg, #f29ab0 0%, #ad405a 100%)',
                borderRadius: '14px 14px 4px 4px',
                border: '1.5px solid rgba(255, 255, 255, 0.35)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingTop: '2px',
              }}
            >
              <span style={{ fontSize: '10px' }}>🍓</span>
              <span style={{ fontSize: '10px' }}>✨</span>
              <span style={{ fontSize: '10px' }}>🍓</span>
            </div>

            {/* Cake Bottom Tier */}
            <div
              style={{
                width: '180px',
                height: '48px',
                margin: '-3px auto 0 auto',
                background: 'linear-gradient(180deg, #faeec7 0%, #ffd166 50%, #cc9622 100%)',
                borderRadius: '6px 6px 16px 16px',
                border: '1.5px solid rgba(255, 255, 255, 0.35)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.92rem', fontWeight: 700, color: '#1a1202' }}>
                Bauni ❤️
              </span>
            </div>

            {/* Cake Stand */}
            <div
              style={{
                width: '210px',
                height: '8px',
                margin: '2px auto 0 auto',
                background: 'linear-gradient(90deg, #ffd166 0%, #faeec7 50%, #cc9622 100%)',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
              }}
            />
          </div>

          {/* Action Button */}
          <div style={{ marginTop: '8px' }}>
            {!isBlown ? (
              <button
                onClick={handleBlowCandle}
                className="btn-celebrate-gold"
                style={{
                  padding: '12px 30px',
                }}
              >
                <Sparkles size={16} />
                <span>{page4_cake.buttonBlow}</span>
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="btn-celebrate-primary"
                style={{
                  padding: '12px 30px',
                }}
              >
                <span>{page4_cake.nextButtonText}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <StoryFooterNav onPrev={handlePrev} onNext={handleNext} isDark={true} />
    </div>
  );
}
