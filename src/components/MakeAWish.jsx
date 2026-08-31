import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import { triggerConfettiBurst, triggerSideCannons } from '../utils/confetti';
import { playCandleBlowSound } from '../utils/audioHelper';

export default function MakeAWish({ onScrollToFinal }) {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const { wishSection } = birthdayConfig;

  const handleMakeWish = () => {
    if (!candlesBlown) {
      setCandlesBlown(true);
      playCandleBlowSound();
      triggerConfettiBurst();
      triggerSideCannons();
    }
  };

  return (
    <section
      id="make-a-wish"
      className="section-container"
      style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <div
        className="glass-card-gold"
        style={{
          padding: 'clamp(32px, 6vw, 48px) clamp(18px, 5vw, 36px)',
          borderRadius: '32px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Wish Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 6.5vw, 2.7rem)',
              color: '#ffffff',
              fontWeight: 800,
              marginBottom: '10px',
            }}
          >
            {wishSection.title}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: 'clamp(1.4rem, 5vw, 1.8rem)',
              color: '#f6c453',
              margin: '0 0 32px 0',
            }}
          >
            {wishSection.subtitle}
          </p>
        </motion.div>

        {/* Interactive Layered Birthday Cake */}
        <div
          style={{
            position: 'relative',
            width: '240px',
            height: '210px',
            margin: '0 auto 36px auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          {/* Candles */}
          <div
            style={{
              display: 'flex',
              gap: '26px',
              marginBottom: '6px',
              zIndex: 3,
            }}
          >
            {[0, 1, 2].map((candleIndex) => (
              <div
                key={candleIndex}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                {/* Flame or Smoke */}
                {!candlesBlown ? (
                  <div style={{ position: 'relative', height: '32px', width: '16px' }}>
                    {/* Flame Glow */}
                    <div
                      className="animate-flame-glow"
                      style={{
                        position: 'absolute',
                        inset: '-8px',
                        background: 'radial-gradient(circle, rgba(255, 170, 0, 0.9) 0%, rgba(255, 60, 0, 0.4) 50%, transparent 70%)',
                        borderRadius: '50%',
                        filter: 'blur(6px)',
                      }}
                    />
                    {/* Main Teardrop Flame */}
                    <div
                      className="animate-flame"
                      style={{
                        width: '14px',
                        height: '24px',
                        background: 'linear-gradient(to top, #ff2a00 0%, #ff9900 40%, #ffffaa 100%)',
                        borderRadius: '50% 50% 35% 35%',
                        boxShadow: '0 0 12px #ffbb00',
                      }}
                    />
                  </div>
                ) : (
                  /* Smoke puff animation */
                  <div
                    style={{
                      height: '32px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '1.2rem',
                        animation: 'smokeRise 1.2s ease-out forwards',
                        opacity: 0.7,
                      }}
                    >
                      💨
                    </div>
                  </div>
                )}

                {/* Candle Stick */}
                <div
                  style={{
                    width: '10px',
                    height: '36px',
                    background:
                      candleIndex === 1
                        ? 'repeating-linear-gradient(45deg, #f6c453, #f6c453 6px, #ffffff 6px, #ffffff 12px)'
                        : 'repeating-linear-gradient(45deg, #ff6584, #ff6584 6px, #ffffff 6px, #ffffff 12px)',
                    borderRadius: '4px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Top Cake Tier */}
          <div
            style={{
              width: '160px',
              height: '52px',
              background: 'linear-gradient(180deg, #ff7597 0%, #e04369 100%)',
              borderRadius: '16px 16px 6px 6px',
              border: '2px solid rgba(255, 255, 255, 0.4)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
            }}
          >
            {/* Frosting drips */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '14px',
                background: '#ffffff',
                borderRadius: '16px 16px 8px 8px',
                opacity: 0.9,
              }}
            />
            <span style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 700, zIndex: 2, marginTop: '8px' }}>
              ✨ Bauni ✨
            </span>
          </div>

          {/* Bottom Cake Tier */}
          <div
            style={{
              width: '220px',
              height: '68px',
              background: 'linear-gradient(180deg, #fce4ec 0%, #f8bbd0 60%, #ec407a 100%)',
              borderRadius: '18px 18px 10px 10px',
              border: '2px solid rgba(255, 255, 255, 0.5)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: '0 18px',
              zIndex: 1,
              marginTop: '-4px',
            }}
          >
            {/* Strawberries / Jewels */}
            <span style={{ fontSize: '1.1rem' }}>🍓</span>
            <span style={{ fontSize: '1.1rem' }}>💖</span>
            <span style={{ fontSize: '1.1rem' }}>🍓</span>
            <span style={{ fontSize: '1.1rem' }}>💖</span>
            <span style={{ fontSize: '1.1rem' }}>🍓</span>
          </div>

          {/* Cake Stand */}
          <div
            style={{
              width: '240px',
              height: '14px',
              background: 'linear-gradient(90deg, #d4af37 0%, #fff2b2 50%, #d4af37 100%)',
              borderRadius: '8px',
              boxShadow: '0 6px 16px rgba(0,0,0,0.5)',
              marginTop: '-2px',
            }}
          />
        </div>

        {/* Action Button or Wish Reveal */}
        {!candlesBlown ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleMakeWish}
            className="btn-primary"
            style={{
              fontSize: '1.15rem',
              padding: '18px 36px',
              cursor: 'pointer',
            }}
          >
            <span>{wishSection.buttonText}</span>
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: 'spring' }}
            style={{
              padding: '24px 20px',
              borderRadius: '24px',
              background: 'rgba(246, 196, 83, 0.14)',
              border: '1px solid rgba(246, 196, 83, 0.4)',
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🌟✨🎉</div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.3rem, 5vw, 1.7rem)',
                color: '#ffffff',
                fontWeight: 700,
                lineHeight: 1.4,
                marginBottom: '10px',
              }}
            >
              "{wishSection.revealedMessage}"
            </h3>
            <p
              style={{
                color: '#f6c453',
                fontSize: '1rem',
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              {wishSection.subCelebration}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
