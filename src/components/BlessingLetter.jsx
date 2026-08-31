import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Heart, Sparkles } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';

export default function BlessingLetter({ letterRef }) {
  const { letter } = birthdayConfig;

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={letterRef}
      id="blessing-letter"
      className="section-container"
      style={{
        paddingTop: '60px',
        paddingBottom: '60px',
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
        className="glass-card"
        style={{
          background: 'linear-gradient(160deg, rgba(38, 20, 56, 0.85) 0%, rgba(20, 10, 32, 0.95) 100%)',
          border: '1px solid rgba(246, 196, 83, 0.35)',
          borderRadius: '28px',
          padding: 'clamp(28px, 6vw, 48px) clamp(20px, 5vw, 40px)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(246, 196, 83, 0.12)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative Top Stamp / Wax Seal Accent */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '24px',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #e53e66 0%, #9c1b3c 100%)',
            border: '2px solid rgba(255, 255, 255, 0.6)',
            boxShadow: '0 4px 15px rgba(229, 62, 102, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '1.2rem',
            transform: 'rotate(-12deg)',
          }}
          title="With Love"
        >
          💌
        </div>

        {/* Letter Header */}
        <motion.div variants={itemVariants} style={{ marginBottom: '24px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#f6c453',
              fontSize: '0.9rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginBottom: '12px',
            }}
          >
            <Mail size={16} />
            <span>A Brother's Blessing</span>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.7rem, 6vw, 2.3rem)',
              color: '#ffffff',
              fontWeight: 700,
              margin: 0,
            }}
          >
            {letter.salutation}
          </h3>
        </motion.div>

        {/* Letter Body Paragraphs */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            fontSize: 'clamp(1rem, 3.8vw, 1.12rem)',
            color: '#f1e6f5',
            lineHeight: 1.8,
            fontFamily: 'var(--font-sans)',
          }}
        >
          {letter.paragraphs.map((p, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              style={{
                margin: 0,
                // Highlight the paragraph containing "Bauni"
                color: p.includes('Bauni') ? '#ffffff' : '#f1e6f5',
                fontWeight: p.includes('Bauni') ? 500 : 400,
              }}
            >
              {p}
            </motion.p>
          ))}

          {/* Highlighted Closing Wishes */}
          <motion.div
            variants={itemVariants}
            style={{
              marginTop: '12px',
              padding: '16px 20px',
              borderRadius: '16px',
              background: 'rgba(246, 196, 83, 0.09)',
              border: '1px solid rgba(246, 196, 83, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                fontSize: '1.2rem',
                color: '#f6c453',
                margin: 0,
              }}
            >
              {letter.closingGreeting}
            </p>
            <p
              style={{
                fontStyle: 'italic',
                color: '#ffa5b7',
                margin: 0,
                fontSize: '1.05rem',
              }}
            >
              {letter.closingWish}
            </p>
          </motion.div>

          {/* Sign Off */}
          <motion.div
            variants={itemVariants}
            style={{
              marginTop: '20px',
              textAlign: 'right',
            }}
          >
            <p style={{ color: '#e0d0e6', fontSize: '1rem', margin: 0, fontStyle: 'italic' }}>
              {letter.signOff}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '2rem',
                color: '#ff6584',
                fontWeight: 700,
                marginTop: '4px',
                margin: 0,
              }}
            >
              {letter.senderName}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
