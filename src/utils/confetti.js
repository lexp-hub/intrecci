import confetti from 'canvas-confetti';

export const triggerVictoryConfetti = () => {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 28, spread: 360, ticks: 60, zIndex: 999 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 40 * (timeLeft / duration);

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.15, 0.4), y: Math.random() - 0.2 },
      colors: ['#FACC15', '#4ADE80', '#60A5FA', '#C084FC', '#F87171']
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.6, 0.85), y: Math.random() - 0.2 },
      colors: ['#FACC15', '#4ADE80', '#60A5FA', '#C084FC', '#F87171']
    });
  }, 250);
};
