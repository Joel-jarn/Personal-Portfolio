import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const WORDS = ['Design', 'Create', 'Inspire'];
const DURATION_MS = 2700;

// Smooth expo-out easing for the counter
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);

  // Smooth counter with expo-out easing
  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / DURATION_MS, 1);
      setCount(Math.floor(easeOutExpo(progress) * 100));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(100);
        setTimeout(() => onComplete(), 350);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  // Word cycling
  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % WORDS.length), 900);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col"
      style={{ background: 'hsl(var(--bg))' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Top-left label */}
      <motion.div
        className="absolute top-8 left-8 md:top-10 md:left-10"
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <span
          className="text-[11px] uppercase tracking-[0.3em]"
          style={{ color: 'hsl(var(--muted))', fontFamily: 'Inter, sans-serif' }}
        >
          Portfolio
        </span>
      </motion.div>

      {/* Center rotating word */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            className="font-display italic select-none"
            style={{
              color: 'rgba(245,245,245,0.75)',
              fontSize: 'clamp(3rem, 10vw, 6.5rem)',
              fontStyle: 'italic',
            }}
            initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
            exit={{   opacity: 0, y: -18, filter: 'blur(6px)' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom — progress bar + counter */}
      <div className="p-8 md:p-10">
        {/* Progress bar */}
        <div
          className="w-full rounded-full overflow-hidden"
          style={{ height: '2px', background: 'rgba(255,255,255,0.06)' }}
        >
          <motion.div
            className="h-full accent-gradient origin-left"
            style={{
              scaleX: count / 100,
              boxShadow: '0 0 10px rgba(137,170,204,0.4)',
            }}
            transition={{ ease: 'linear', duration: 0 }}
          />
        </div>

      </div>
    </motion.div>
  );
}
