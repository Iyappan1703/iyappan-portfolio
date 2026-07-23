import { motion } from 'framer-motion';

type CursorGlowProps = {
  cursorPos: { x: number; y: number };
};

export function CursorGlow({ cursorPos }: CursorGlowProps) {
  return (
    <>
      <motion.div className="cursor-ring" animate={{ x: cursorPos.x, y: cursorPos.y }} transition={{ type: 'spring', stiffness: 180, damping: 24, mass: 0.35 }} />
      <motion.div className="cursor-trail trail-a" animate={{ x: cursorPos.x, y: cursorPos.y }} transition={{ type: 'spring', stiffness: 140, damping: 20, mass: 0.25 }} />
      <motion.div className="cursor-trail trail-b" animate={{ x: cursorPos.x, y: cursorPos.y }} transition={{ type: 'spring', stiffness: 120, damping: 16, mass: 0.2 }} />
    </>
  );
}
