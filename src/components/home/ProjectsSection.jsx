import { motion } from 'framer-motion';
import { useState } from 'react';
import { useProjects } from '../../hooks/useProjects';
import ProjectsPlaceholder from './ProjectsPlaceholder';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web Dev' },
  { id: 'design', label: 'Graphic Design' },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { projects, loading, error } = useProjects();

  return (
    <section
      id="projects"
      className="border-t border-zinc-200/80 bg-zinc-50/50 px-4 py-24 dark:border-dark-border dark:bg-dark-card/20 md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Work</p>
          <h2 className="section-heading mt-2">Selected projects</h2>
          <p className="section-sub">
            A filterable showcase of web and graphic design work — loaded dynamically from your
            database.
          </p>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeFilter === f.id
                  ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30'
                  : 'border border-zinc-200 bg-white text-zinc-600 hover:border-brand-500/40 dark:border-dark-border dark:bg-dark-card dark:text-zinc-300'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <ProjectsPlaceholder
          loading={loading}
          projects={projects}
          error={error}
          activeFilter={activeFilter}
        />
      </div>
    </section>
  );
}
