import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import PhotoFrame from './PhotoFrame';
import { triggerHeartBurst } from '../utils/confetti';
import { playChime } from '../utils/audioHelper';

export default function HeroSection({ onScrollToLetter }) {
  const handleHeartClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    triggerHeartBurst(x, y);
    playChime(659.25, 0.8, 'triangle');
  };

  return (
    <section
      className="section-container"
      style={{
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '60px',
        paddingBottom: '40px',
        position: 'relative',
      }}
    >
      {/* Photo Frame Section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ marginBottom: '32px' }}
      >
        <PhotoFrame
          src={birthdayConfig.photoPath}
          alt={birthdayConfig.realName}
          size={230}
          shape="circle"
          showSparkles={true}
        />
      </motion.div>

      {/* Main Birthday Headings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{ width: '100%', maxWidth: '600px' }}
      >
        {/* Real Name Heading */}
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 7vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '12px',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
          }}
        >
          🎉 Happy Birthday, <span className="text-rose-gradient">{birthdayConfig.realName}</span>! 🎂
        </h1>

        {/* Loving Nickname Subheading */}
        <h2
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: 'clamp(1.5rem, 5.5vw, 2.1rem)',
            fontWeight: 600,
            color: '#f6c453',
            lineHeight: 1.3,
            marginBottom: '24px',
            textShadow: '0 2px 10px rgba(246, 196, 83, 0.3)',
          }}
        >
          {birthdayConfig.hero.subHeading}
        </h2>

        {/* Emotional Quote Card */}
        <div
          className="glass-card-gold"
          style={{
            padding: '22px 24px',
            margin: '0 auto 32px auto',
            maxWidth: '520px',
            position: 'relative',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(1rem, 3.8vw, 1.18rem)',
              color: '#fff5ea',
              lineHeight: 1.7,
              margin: 0,
              whiteSpace: 'pre-line',
            }}
          >
            "{birthdayConfig.hero.message}"
          </p>
        </div>

        {/* Navigation / Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={onScrollToLetter}
          className="btn-primary btn-gold"
          style={{
            padding: '16px 36px',
            fontSize: '1.1rem',
            cursor: 'pointer',
          }}
        >
          <span>{birthdayConfig.hero.buttonText}</span>
          <ChevronDown size={18} />
        </motion.button>
      </motion.div>
    </section>
  );
}
