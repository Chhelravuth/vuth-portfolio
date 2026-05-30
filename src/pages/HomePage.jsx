import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';
import HeroSection from '../components/home/HeroSection';
import ProjectsSection from '../components/home/ProjectsSection';

/**
 * HomePage — dynamic portfolio landing for Chhel Ravuth
 *
 * SAVE TO: src/pages/HomePage.jsx
 *
 * Sections:
 *  • HeroSection          — name, role, framer-motion floats, VisualSkillChips
 *  • AboutSection         — grouped skills (design / code / frameworks)
 *  • ProjectsSection      — filterable grid + ProjectsPlaceholder (API-ready)
 *  • ContactSection       — form → POST /api/contact
 */
export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />

      <footer className="border-t border-zinc-200/80 px-4 py-10 text-center text-sm text-zinc-500 dark:border-dark-border">
        © {new Date().getFullYear()}{' '}
        <span className="font-medium text-zinc-700 dark:text-zinc-300">Chhel Ravuth</span>
        . Crafted with React & Tailwind CSS.
      </footer>
    </main>
  );
}
