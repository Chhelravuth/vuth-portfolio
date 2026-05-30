import { motion } from 'framer-motion';

const orbs = [
  { size: 72, top: '10%', left: '6%', delay: 0, duration: 8 },
  { size: 44, top: '58%', left: '3%', delay: 1.2, duration: 9 },
  { size: 96, top: '18%', right: '4%', delay: 0.4, duration: 7 },
  { size: 52, top: '72%', right: '10%', delay: 1.8, duration: 6.5 },
  { size: 28, top: '42%', left: '42%', delay: 0.8, duration: 10 },
];

const floatingLabels = [
  { label: 'React', top: '28%', right: '10%', rotate: -4 },
  { label: 'PS', top: '48%', right: '18%', rotate: 6 },
  { label: 'PHP', top: '38%', left: '12%', rotate: 3 },
];

export default function FloatingElements() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {orbs.map((orb, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full border border-brand-500/25 bg-gradient-to-br from-brand-500/15 via-transparent to-cyan-500/10 shadow-[0_0_40px_rgba(14,165,233,0.12)] backdrop-blur-sm"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            right: orb.right,
          }}
          animate={{
            y: [0, -22, 0, 16, 0],
            x: [0, 12, 0, -10, 0],
            scale: [1, 1.08, 1, 0.95, 1],
            opacity: [0.5, 0.85, 0.5],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {floatingLabels.map((item, i) => (
        <motion.div
          key={item.label}
          className="absolute hidden rounded-xl border border-white/10 bg-dark-card/90 px-3 py-1.5 font-display text-xs font-bold text-zinc-200 shadow-xl backdrop-blur-md sm:block"
          style={{ top: item.top, right: item.right, left: item.left, rotate: item.rotate }}
          animate={{
            y: [0, -14, 0],
            rotate: [item.rotate, item.rotate + 5, item.rotate],
          }}
          transition={{
            duration: 4.5 + i,
            delay: i * 0.35,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {item.label}
        </motion.div>
      ))}

      <motion.div
        className="absolute left-1/2 top-1/3 h-px w-[min(90vw,520px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-500/40 to-transparent"
        animate={{ opacity: [0.2, 0.6, 0.2], scaleX: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
