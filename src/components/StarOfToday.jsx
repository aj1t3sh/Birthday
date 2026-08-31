import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Heart } from 'lucide-react';
import { birthdayConfig } from '../config/birthdayConfig';
import PhotoFrame from './PhotoFrame';

export default function StarOfToday() {
  const { starSection } = birthdayConfig;

  return (
    <section
      id="star-of-today"
      className="section-container"
      style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        textAlign: 'center',
      }}
    >
      {/* Section Header Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          borderRadius: '9999px',
          background: 'rgba(255, 101, 132, 0.15)',
          border: '1px solid rgba(255, 101, 132, 0.35)',
          color: '#ffa5b7',
          fontSize: '0.85rem',
          fontWeight: 600,
          marginBottom: '16px',
        }}
      >
        <Star size={14} fill="#ffa5b7" />
        <span>{starSection.badge}</span>
      </motion.div>

      {/* Main Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.1rem, 7vw, 2.9rem)',
          fontWeight: 800,
          color: '#ffffff',
          marginBottom: '36px',
        }}
      >
        The Star of Today <span className="text-gold-gradient">✨</span>
      </motion.h2>

      {/* Creative Photo Spotlight Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card-gold"
        style={{
          padding: 'clamp(28px, 6vw, 44px) 20px',
          borderRadius: '32px',
          marginBottom: '32px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Soft glowing background spotlight */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '280px',
            height: '280px',
            background: 'radial-gradient(circle, rgba(246, 196, 83, 0.22) 0%, rgba(255, 101, 132, 0.1) 60%, transparent 100%)',
            filter: 'blur(30px)',
            pointerEvents: 'none',
          }}
        />

        {/* Sister's Photo in Softly Rounded Frame */}
        <div style={{ marginBottom: '28px', position: 'relative', zIndex: 2 }}>
          <PhotoFrame
            src={birthdayConfig.photoPath}
            alt={birthdayConfig.realName}
            size={210}
            shape="rounded"
            showSparkles={true}
          />
        </div>

        {/* Heartfelt Caption */}
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.15rem, 4.5vw, 1.4rem)',
            color: '#fff8f0',
            fontStyle: 'italic',
            lineHeight: 1.6,
            maxWidth: '500px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
          }}
        >
          "{starSection.quote}"
        </p>
      </motion.div>

      {/* Sweet Sister Trait Badges */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          width: '100%',
        }}
      >
        {starSection.traits.map((trait, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="glass-card"
            style={{
              padding: '20px 18px',
              textAlign: 'center',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{trait.emoji}</div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.1rem',
                color: '#f6c453',
                marginBottom: '6px',
              }}
            >
              {trait.label}
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#e0d0e6', margin: 0, lineHeight: 1.5 }}>
              {trait.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
