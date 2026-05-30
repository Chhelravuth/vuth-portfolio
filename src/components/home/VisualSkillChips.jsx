import { motion } from 'framer-motion';

const categoryStyles = {
  design: {
    border: 'border-fuchsia-500/35',
    bg: 'bg-fuchsia-500/10 hover:bg-fuchsia-500/20',
    text: 'text-fuchsia-700 dark:text-fuchsia-300',
    dot: 'bg-fuchsia-400',
    glow: 'shadow-fuchsia-500/20',
  },
  code: {
    border: 'border-emerald-500/35',
    bg: 'bg-emerald-500/10 hover:bg-emerald-500/20',
    text: 'text-emerald-700 dark:text-emerald-300',
    dot: 'bg-emerald-400',
    glow: 'shadow-emerald-500/20',
  },
  framework: {
    border: 'border-brand-500/35',
    bg: 'bg-brand-500/10 hover:bg-brand-500/20',
    text: 'text-brand-700 dark:text-brand-300',
    dot: 'bg-brand-400',
    glow: 'shadow-brand-500/25',
  },
};

const categoryLabels = {
  design: 'Design Tools',
  code: 'Languages',
  framework: 'Frameworks',
};

const categories = ['design', 'code', 'framework'];

export default function VisualSkillChips({ skills }) {
  const groups = categories.map((cat) => ({
    category: cat,
    items: skills.filter((s) => s.category === cat),
  }));

  return (
    <div className="space-y-5">
      {groups.map(({ category, items }) => {
        const style = categoryStyles[category];
        return (
          <div key={category}>
            <p className="mb-2.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500">
              <span className={`h-px flex-1 bg-gradient-to-r from-zinc-300/80 to-transparent dark:from-dark-border`} />
              {categoryLabels[category]}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, i) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                    boxShadow: '0 8px 24px rgba(14,165,233,0.15)',
                  }}
                  className={`inline-flex cursor-default items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold shadow-sm transition-colors ${style.border} ${style.bg} ${style.text} ${style.glow}`}
                >
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${style.dot}`} />
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
