import { motion } from 'framer-motion';
import { profile, skillChips } from '../../data/profile';
import SkillChip from '../ui/SkillChip';

const groups = [
  { key: 'design', title: 'Design Tools', description: 'Visual identity, motion, and print-ready assets.' },
  { key: 'code', title: 'Languages', description: 'Semantic markup, styling systems, and application logic.' },
  { key: 'framework', title: 'Frameworks', description: 'Modern SPAs and API backends for production apps.' },
];

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-zinc-200/80 px-4 py-24 dark:border-dark-border md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">About Me</p>
          <h2 className="section-heading mt-2">Building at the intersection of design & code</h2>
          <p className="section-sub">
            I&apos;m <strong className="text-zinc-800 dark:text-zinc-200">{profile.name}</strong>, a{' '}
            {profile.age}-year-old {profile.role.toLowerCase()} based in {profile.location}. I merge
            creative tooling with engineering discipline to ship experiences that feel premium and
            perform flawlessly.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {groups.map((group, i) => (
            <motion.article
              key={group.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="rounded-2xl border border-zinc-200/80 bg-white/50 p-6 backdrop-blur-sm dark:border-dark-border dark:bg-dark-card/50"
            >
              <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-white">
                {group.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {skillChips
                  .filter((s) => s.category === group.key)
                  .map((skill) => (
                    <SkillChip key={skill.name} {...skill} />
                  ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
