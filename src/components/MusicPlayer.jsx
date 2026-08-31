import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Music } from 'lucide-react';
import { toggleMelody, setMuted, startMusicBoxMelody, stopMelody } from '../utils/audioHelper';

export default function MusicPlayer({ autoStart = false }) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (autoStart) {
      const started = toggleMelody();
      setIsPlaying(started);
    }
    return () => {
      stopMelody();
    };
  }, [autoStart]);

  const handleToggle = () => {
    const active = toggleMelody();
    setIsPlaying(active);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '18px',
        right: '18px',
        zIndex: 999,
      }}
    >
      <button
        onClick={handleToggle}
        aria-label={isPlaying ? "Mute music" : "Play music"}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 14px',
          background: 'rgba(25, 12, 38, 0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(246, 196, 83, 0.35)',
          borderRadius: '9999px',
          color: '#f6c453',
          cursor: 'pointer',
          boxShadow: isPlaying ? '0 0 20px rgba(246, 196, 83, 0.4)' : '0 4px 12px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
          fontSize: '0.85rem',
          fontWeight: 600,
        }}
      >
        {isPlaying ? (
          <>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '14px' }}>
              <span style={{ width: '3px', height: '12px', background: '#f6c453', borderRadius: '2px', animation: 'floatGentle 0.8s ease-in-out infinite alternate' }} />
              <span style={{ width: '3px', height: '16px', background: '#ff6584', borderRadius: '2px', animation: 'floatSlow 0.6s ease-in-out infinite alternate' }} />
              <span style={{ width: '3px', height: '10px', background: '#f6c453', borderRadius: '2px', animation: 'floatGentle 1s ease-in-out infinite alternate' }} />
            </div>
            <span>Music On</span>
          </>
        ) : (
          <>
            <VolumeX size={15} color="#e0d0e6" />
            <span style={{ color: '#e0d0e6' }}>Music Off</span>
          </>
        )}
      </button>
    </div>
  );
}
