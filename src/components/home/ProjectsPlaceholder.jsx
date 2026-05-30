import { AnimatePresence, motion } from 'framer-motion';

const SKELETON_COUNT = 4;

function SkeletonCard({ index }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white dark:border-dark-border dark:bg-dark-card"
    >
      <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-dark-bg">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/5"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: index * 0.15 }}
        />
        <div className="flex h-full flex-col items-center justify-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-dashed border-brand-500/40 bg-brand-500/5">
            <svg
              className="h-6 w-6 text-brand-500/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-xs font-medium text-zinc-400">Loading from database…</p>
        </div>
      </div>

      <div className="space-y-3 p-6">
        <div className="h-5 w-3/4 animate-pulse rounded-lg bg-zinc-200 dark:bg-dark-border" />
        <div className="h-3 w-full animate-pulse rounded bg-zinc-100 dark:bg-dark-border/80" />
        <div className="h-3 w-5/6 animate-pulse rounded bg-zinc-100 dark:bg-dark-border/80" />
        <div className="flex gap-2 pt-1">
          <div className="h-6 w-16 animate-pulse rounded-full bg-zinc-200 dark:bg-dark-border" />
          <div className="h-6 w-20 animate-pulse rounded-full bg-zinc-200 dark:bg-dark-border" />
        </div>
      </div>
    </motion.li>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className="group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white transition-shadow hover:shadow-xl hover:shadow-brand-500/10 dark:border-dark-border dark:bg-dark-card"
    >
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-brand-500/20 via-dark-card/50 to-cyan-500/10">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="font-display text-4xl font-bold text-brand-500/35">
            {project.category === 'web' ? '</>' : 'Ai'}
          </span>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-white">
            {project.title}
          </h3>
          <span className="chip chip-framework shrink-0 capitalize">{project.category}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        {project.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="chip text-[11px]">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.li>
  );
}

export default function ProjectsPlaceholder({ loading, projects, error, activeFilter = 'all' }) {
  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="mt-10">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.ul
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
              <SkeletonCard key={i} index={i} />
            ))}
          </motion.ul>
        ) : error ? (
          <motion.p
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-600 dark:text-red-400"
          >
            Could not load projects: {error}. Start the API with{' '}
            <code className="rounded bg-black/10 px-1 dark:bg-white/10">
              uvicorn app.main:app --reload
            </code>{' '}
            in the <code className="rounded bg-black/10 px-1 dark:bg-white/10">backend</code> folder.
          </motion.p>
        ) : filtered.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-zinc-500"
          >
            {projects.length === 0
              ? 'No projects in the database yet.'
              : `No projects in the "${activeFilter}" category.`}
          </motion.p>
        ) : (
          <motion.ul
            key="projects"
            layout
            className="grid gap-6 sm:grid-cols-2"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
