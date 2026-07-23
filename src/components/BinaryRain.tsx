import { useEffect, useRef } from 'react';

type RainDrop = {
  x: number;
  y: number;
  speed: number;
  opacity: number;
  size: number;
  char: '0' | '1';
  glow: number;
  pulse: number;
  flicker: number;
  trailLength: number;
  trailPhase: number;
};

export function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dropsRef = useRef<RainDrop[]>([]);
  const frameRef = useRef<number | null>(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * devicePixelRatio);
      canvas.height = Math.floor(height * devicePixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      const columnCount = Math.max(34, Math.min(86, Math.floor(width / 14)));
      const nextDrops: RainDrop[] = [];

      for (let index = 0; index < columnCount; index += 1) {
        nextDrops.push({
          x: (index * width) / columnCount + Math.random() * 8,
          y: Math.random() * height,
          speed: 0.45 + Math.random() * 1.25,
          opacity: 0.18 + Math.random() * 0.28,
          size: 10 + Math.random() * 7,
          char: Math.random() > 0.5 ? '1' : '0',
          glow: 6 + Math.random() * 6,
          pulse: Math.random() * Math.PI * 2,
          flicker: Math.random() * 0.9 + 0.1,
          trailLength: 3 + Math.floor(Math.random() * 4),
          trailPhase: Math.random() * Math.PI * 2,
        });
      }

      dropsRef.current = nextDrops;
    };

    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const now = performance.now() * 0.001;
      timeRef.current = now;

      context.clearRect(0, 0, width, height);

      for (const drop of dropsRef.current) {
        const pulse = 0.65 + 0.35 * Math.sin(now * 0.8 + drop.pulse);
        const flicker = Math.sin(now * 4.2 + drop.flicker) > 0.2 ? 1 : 0.76;
        const trailOpacity = drop.opacity * 0.24 * flicker;

        context.font = `700 ${drop.size}px Consolas, monospace`;
        context.shadowBlur = drop.glow;
        context.shadowColor = `rgba(86, 255, 173, ${0.35 * pulse})`;

        for (let segment = 0; segment < drop.trailLength; segment += 1) {
          const alpha = trailOpacity * (1 - segment / (drop.trailLength + 2));
          const yPos = drop.y - segment * (drop.size * 0.72);
          context.fillStyle = `rgba(0, 255, 140, ${alpha})`;
          context.fillText(drop.char, drop.x, yPos);
        }

        context.fillStyle = `rgba(0, 255, 140, ${trailOpacity * 1.2})`;
        context.fillText(drop.char, drop.x, drop.y);

        if (Math.random() < 0.008) {
          context.fillStyle = `rgba(255, 255, 255, ${0.22 * pulse})`;
          context.fillText(drop.char, drop.x + 1, drop.y - 1);
        }

        if (Math.random() < 0.0024) {
          context.fillStyle = 'rgba(255, 255, 255, 0.12)';
          context.fillRect(0, Math.random() * height, width, 1);
        }

        drop.y += drop.speed * (0.9 + 0.2 * pulse);

        if (drop.y > height + 24) {
          drop.y = -20 - Math.random() * 40;
          drop.x = Math.random() * width;
          drop.speed = 0.45 + Math.random() * 1.25;
          drop.opacity = 0.18 + Math.random() * 0.28;
          drop.size = 10 + Math.random() * 7;
          drop.char = Math.random() > 0.5 ? '1' : '0';
          drop.glow = 6 + Math.random() * 6;
          drop.pulse = Math.random() * Math.PI * 2;
          drop.flicker = Math.random() * 0.9 + 0.1;
          drop.trailLength = 3 + Math.floor(Math.random() * 4);
          drop.trailPhase = Math.random() * Math.PI * 2;
        }
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div className="binary-layer" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
