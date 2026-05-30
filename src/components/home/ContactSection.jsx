import { motion } from 'framer-motion';
import { useState } from 'react';
import { profile } from '../../data/profile';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000';

const initialForm = { name: '', email: '', message: '' };

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Request failed');

      setForm(initialForm);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="border-t border-zinc-200/80 px-4 py-24 dark:border-dark-border md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Contact</p>
            <h2 className="section-heading mt-2">Let&apos;s build something remarkable</h2>
            <p className="section-sub">
              Have a project in mind? Send a message — submissions are stored via your FastAPI
              backend once connected.
            </p>
            <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="font-medium text-zinc-800 dark:text-zinc-200">Email:</span>{' '}
              {profile.email}
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-zinc-200/80 bg-white/70 p-6 backdrop-blur-md dark:border-dark-border dark:bg-dark-card/80 sm:p-8"
          >
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-brand-500/30 transition focus:ring-2 dark:border-dark-border dark:bg-dark-bg"
                placeholder="Your name"
              />
            </label>

            <label className="mt-4 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-brand-500/30 transition focus:ring-2 dark:border-dark-border dark:bg-dark-bg"
                placeholder="you@email.com"
              />
            </label>

            <label className="mt-4 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="mt-1.5 w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-brand-500/30 transition focus:ring-2 dark:border-dark-border dark:bg-dark-bg"
                placeholder="Tell me about your project..."
              />
            </label>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary mt-6 w-full disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="mt-3 text-center text-sm text-emerald-600">Message sent successfully.</p>
            )}
            {status === 'error' && (
              <p className="mt-3 text-center text-sm text-red-500">
                Could not reach the API yet. Start the FastAPI server or check VITE_API_URL.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
