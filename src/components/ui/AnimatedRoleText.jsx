import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedRoleText({ roles, intervalMs = 2800 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [roles.length, intervalMs]);

  return (
    <span className="relative inline-block min-h-[1.4em] min-w-[12ch] text-brand-500">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-0 whitespace-nowrap font-semibold"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
