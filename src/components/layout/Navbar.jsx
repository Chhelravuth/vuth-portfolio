import { useEffect, useState } from 'react';
import { profile } from '../../data/profile';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl dark:border-dark-border dark:bg-dark-bg/80'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#home" className="font-display text-lg font-bold text-zinc-900 dark:text-white">
          {profile.name.split(' ')[0]}
          <span className="text-brand-500">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-brand-500 dark:text-zinc-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsDark((d) => !d)}
          className="rounded-lg border border-zinc-200 p-2 text-zinc-600 transition hover:border-brand-500/50 dark:border-dark-border dark:text-zinc-300"
          aria-label="Toggle dark mode"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  );
}
