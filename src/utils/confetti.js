import confetti from 'canvas-confetti';

/**
 * Birthday Confetti helpers
 */

// Colors: Gold, Rose Pink, Champagne, Velvet Plum, Warm Coral, White Sparkle
const celebrationColors = ['#ffd700', '#ff6b8b', '#ff8e53', '#f8bbd0', '#e040fb', '#ffffff', '#ff4081'];

export function triggerConfettiBurst() {
  const count = 120;
  const defaults = {
    origin: { y: 0.7 },
    colors: celebrationColors,
    zIndex: 9999,
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

export function triggerSideCannons() {
  const end = Date.now() + 2.5 * 1000;
  const colors = ['#ffd700', '#ff69b4', '#ff1493', '#ffa07a', '#ffffff'];

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.8 },
      colors: colors,
      zIndex: 9999
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.8 },
      colors: colors,
      zIndex: 9999
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

export function triggerHeartBurst(x = 0.5, y = 0.5) {
  confetti({
    particleCount: 30,
    spread: 80,
    origin: { x, y },
    colors: ['#ff4081', '#ff1744', '#f50057', '#ff80ab'],
    shapes: ['circle'],
    scalar: 1.2,
    zIndex: 9999
  });
}
