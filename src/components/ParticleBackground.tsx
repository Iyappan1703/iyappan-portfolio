import { motion } from 'framer-motion';
import { useMemo } from 'react';

type ParticleBackgroundProps = {
  mouse?: { x: number; y: number };
};

export function ParticleBackground({ mouse }: ParticleBackgroundProps) {
  const nodes = useMemo(
    () =>
      Array.from({ length: 24 }, (_, index) => ({
        id: index,
        x: (index * 13 + 6) % 100,
        y: (index * 17 + 5) % 100,
        delay: `${(index % 8) * 0.12}s`,
        duration: `${8 + (index % 6) * 0.9}s`,
      })),
    [],
  );

  const links = [
    [0, 4], [1, 6], [2, 9], [3, 11], [5, 10], [7, 14], [8, 12], [13, 17], [15, 19], [16, 21], [18, 22], [20, 23],
  ];

  const driftNodes = useMemo(
    () =>
      Array.from({ length: 16 }, (_, index) => ({
        id: index,
        x: 8 + (index % 5) * 16 + (index % 3) * 4,
        y: 10 + (index % 4) * 18 + (index % 7) * 2,
        delay: `${(index % 7) * 0.14}s`,
        duration: `${7 + (index % 5) * 0.8}s`,
      })),
    [],
  );

  return (
    <div className="particle-layer" aria-hidden="true">
      <svg className="particle-network" viewBox="0 0 100 100" preserveAspectRatio="none">
        {links.map(([from, to]) => {
          const start = nodes[from];
          const end = nodes[to];
          return <line key={`${from}-${to}`} x1={start.x} y1={start.y} x2={end.x} y2={end.y} />;
        })}
      </svg>
      {nodes.map((node) => (
        <motion.span
          key={node.id}
          className="particle-dot"
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 4.5 + (node.id % 5), repeat: Infinity, ease: 'easeInOut' }}
          style={{ left: `${node.x}%`, top: `${node.y}%`, animationDelay: node.delay, animationDuration: node.duration }}
        />
      ))}
      {driftNodes.map((node) => (
        <motion.span
          key={`drift-${node.id}`}
          className="digital-particle"
          animate={{ x: [0, 18, -10, 0], y: [0, -12, 8, 0], opacity: [0.35, 0.7, 0.45, 0.35], scale: [0.9, 1.2, 0.95] }}
          transition={{ duration: 8 + (node.id % 5), repeat: Infinity, ease: 'easeInOut', delay: node.delay }}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        />
      ))}
      {mouse ? <motion.span className="mouse-pulse" animate={{ x: mouse.x, y: mouse.y }} transition={{ type: 'spring', stiffness: 160, damping: 18, mass: 0.35 }} /> : null}
    </div>
  );
}
