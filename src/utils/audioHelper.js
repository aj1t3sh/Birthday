/**
 * Web Audio API based sound synthesizer for interactive effects and dreamy birthday chimes.
 * Does not rely on external MP3 files that could fail, works on any modern mobile browser.
 */

let audioCtx = null;
let isMuted = false;
let bgMusicInterval = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function setMuted(muted) {
  isMuted = muted;
  if (muted && bgMusicInterval) {
    stopMelody();
  }
}

export function getMuted() {
  return isMuted;
}

/**
 * Play a sparkling fairy chime note
 */
export function playChime(freq = 587.33, duration = 0.8, type = 'sine') {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    
    // Smooth bell-like envelope
    gain.gain.setValueAtTime(0.01, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {
    // Graceful fallback
  }
}

/**
 * Play celebration chord (magic shimmer)
 */
export function playCelebrationSound() {
  if (isMuted) return;
  // C major 9 arpeggio with sparkling glockenspiel feel
  const notes = [523.25, 659.25, 783.99, 987.77, 1046.50, 1318.51];
  notes.forEach((freq, idx) => {
    setTimeout(() => {
      playChime(freq, 1.2, 'triangle');
    }, idx * 90);
  });
}

/**
 * Play candle blow sound (soft breath + sparkling chime)
 */
export function playCandleBlowSound() {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    // Pink noise buffer for gentle breath/whoosh
    const bufferSize = ctx.sampleRate * 0.4;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.15));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.35);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();

    // Followed by celebration sparkles
    setTimeout(() => {
      playCelebrationSound();
    }, 200);
  } catch {
    playCelebrationSound();
  }
}

// Gentle birthday music-box melody: Happy Birthday notes in high octave
// [Note freq in Hz, duration in ms]
const melodyNotes = [
  [523.25, 300], // C5
  [523.25, 300], // C5
  [587.33, 600], // D5
  [523.25, 600], // C5
  [698.46, 600], // F5
  [659.25, 1200], // E5

  [523.25, 300], // C5
  [523.25, 300], // C5
  [587.33, 600], // D5
  [523.25, 600], // C5
  [783.99, 600], // G5
  [698.46, 1200], // F5

  [523.25, 300], // C5
  [523.25, 300], // C5
  [1046.50, 600], // C6
  [880.00, 600], // A5
  [698.46, 600], // F5
  [659.25, 600], // E5
  [587.33, 1000], // D5

  [932.33, 300], // Bb5
  [932.33, 300], // Bb5
  [880.00, 600], // A5
  [698.46, 600], // F5
  [783.99, 600], // G5
  [698.46, 1400], // F5
];

let melodyTimeout = null;
let currentMelodyStep = 0;
let isPlayingMelody = false;

export function startMusicBoxMelody() {
  if (isPlayingMelody || isMuted) return;
  isPlayingMelody = true;
  currentMelodyStep = 0;

  function step() {
    if (!isPlayingMelody || isMuted) return;
    const [freq, dur] = melodyNotes[currentMelodyStep];
    playChime(freq, (dur / 1000) * 1.5, 'sine');

    currentMelodyStep = (currentMelodyStep + 1) % melodyNotes.length;
    // Delay slightly more between phrases
    const delay = dur + (currentMelodyStep % 6 === 0 ? 400 : 80);
    melodyTimeout = setTimeout(step, delay);
  }

  step();
}

export function stopMelody() {
  isPlayingMelody = false;
  if (melodyTimeout) {
    clearTimeout(melodyTimeout);
    melodyTimeout = null;
  }
}

export function toggleMelody() {
  if (isPlayingMelody) {
    stopMelody();
    return false;
  } else {
    getAudioContext();
    startMusicBoxMelody();
    return true;
  }
}
