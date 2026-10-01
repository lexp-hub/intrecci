import React, { useEffect, useRef } from 'react';

export const Atmosphere = ({ enabled = true, effectType = 'snow', isDark = false }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled || effectType === 'none') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = effectType === 'fireflies' ? 28 : 42;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size:
          effectType === 'snow'
            ? Math.random() * 2.8 + 1.2
            : effectType === 'fireflies'
            ? Math.random() * 2.5 + 1.5
            : Math.random() * 4 + 2.5, 
        speedY:
          effectType === 'snow'
            ? Math.random() * 0.8 + 0.35
            : effectType === 'fireflies'
            ? -(Math.random() * 0.4 + 0.15)
            : Math.random() * 1.0 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        swaySpeed: Math.random() * 0.016 + 0.008,
        swayOffset: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.45 + 0.2,
        pulseSpeed: Math.random() * 0.025 + 0.01,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02
      });
    }

    let time = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 1;

      particles.forEach(p => {
        p.swayOffset += p.swaySpeed;
        p.x += p.speedX + Math.sin(p.swayOffset) * 0.45;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        } else if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }

        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (effectType === 'snow') {
          const flakeOpacity = isDark ? p.opacity * 0.8 : p.opacity * 0.6;
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? `rgba(225, 235, 250, ${flakeOpacity})`
            : `rgba(160, 185, 215, ${flakeOpacity})`;
          ctx.fill();
        } else if (effectType === 'fireflies') {
          const currentOpacity =
            (Math.sin(time * p.pulseSpeed + p.swayOffset) * 0.35 + 0.65) * p.opacity;

          ctx.fillStyle = isDark ? "#FBBF24" : "#D97706";
          ctx.fill();

          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 250, 220, ${currentOpacity * 0.9})`;
          ctx.fill();
        } else if (effectType === 'leaves') {
          const leafColors = ['#D97706', '#EA580C', '#C2410C', '#B45309'];
          const color = leafColors[Math.floor(p.size * 10) % leafColors.length];

          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.5, 0, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.globalAlpha = p.opacity * (isDark ? 0.6 : 0.4);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [enabled, effectType, isDark]);

  return (
    <>
      

      {enabled && effectType !== 'none' && (
        <canvas
          ref={canvasRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0.85
          }}
        />
      )}
    </>
  );
};

export default Atmosphere;
