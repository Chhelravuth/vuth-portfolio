import { motion } from "framer-motion";
import { animatedRoles, profile, skillChips, stats } from "../../data/profile";
import AnimatedRoleText from "../ui/AnimatedRoleText";
import FloatingElements from "./FloatingElements";
import VisualSkillChips from "./VisualSkillChips";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.11, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-4 pb-24 pt-28 md:px-8 lg:px-12"
    >
      <FloatingElements />

      <div
        className="pointer-events-none absolute inset-0 bg-hero-glow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[length:48px_48px] opacity-60"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left — Hero copy */}
          <div className="relative z-10">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-600 backdrop-blur-md dark:text-brand-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              {profile.availability}
            </motion.div>
</motion.div>

        {/* 📸 ចាប់ផ្ដើមដុំកូដរូបថតរបស់បង Chhel Ravuth */}
        <motion.div
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6 inline-block"
        >
          <img 
            src="../../../assets/me.png"
            alt="Chhel Ravuth" 
            className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-brand-500 shadow-xl"
          />
        </motion.div>
        {/* 📸 ចប់ដុំកូដរូបថត */}

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display text-sm font-medium uppercase tracking-[0.28em] text-zinc-500"
        >
          Hello, everyone that hear me – I'm vuth
        </motion.p>
            <motion.h1
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-3 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.25rem]"
            >
              <motion.span
                className="block bg-gradient-to-r from-zinc-900 via-brand-600 to-cyan-600 bg-clip-text text-transparent dark:from-white dark:via-brand-300 dark:to-cyan-400"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
              >
                {profile.name}
              </motion.span>
            </motion.h1>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6"
            >
              <p className="font-display text-xl font-semibold text-zinc-800 dark:text-zinc-200 sm:text-2xl">
                {profile.role}
              </p>
              <motion.div
                className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-brand-500 via-cyan-400 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
                style={{ originX: 0 }}
              />
              <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
                specializing in <AnimatedRoleText roles={animatedRoles} />
              </p>
            </motion.div>

            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-primary">
                View Projects
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
              <a href="#contact" className="btn-ghost">
                Contact Me
              </a>
            </motion.div>

            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4, borderColor: "rgba(14, 15, 15, 0.45)" }}
                  className="rounded-xl border border-zinc-200/80 bg-white/70 p-4 backdrop-blur-md dark:border-dark-border dark:bg-dark-card/70"
                >
                  <p className="font-display text-2xl font-bold text-brand-500">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-wide text-zinc-500">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Floating skills panel */}
          <motion.div
            initial={{ opacity: 0, y: 48, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10"
            style={{ perspective: 1200 }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative rounded-2xl border border-zinc-200/80 bg-white/75 p-6 shadow-2xl shadow-brand-500/15 backdrop-blur-xl dark:border-white/10 dark:bg-dark-card/85 sm:p-8"
            >
              {/* Orbit ring behind avatar */}
              <motion.div
                className="pointer-events-none absolute -right-4 -top-4 h-32 w-32 rounded-full border border-brand-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                aria-hidden
              />
              <motion.div
                className="pointer-events-none absolute -right-2 -top-2 h-24 w-24 rounded-full border border-dashed border-cyan-500/25"
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                aria-hidden
              />

              <div className="relative mb-6 flex items-center gap-4 border-b border-zinc-200/80 pb-6 dark:border-dark-border">
                <motion.div
                  animate={{ rotate: [0, 4, 0, -4, 0] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 via-brand-600 to-cyan-500 font-display text-2xl font-bold text-white shadow-lg shadow-brand-500/40"
                >
                  CR
                </motion.div>
                <div>
                  <p className="font-display text-lg font-bold text-zinc-900 dark:text-white">
                    {profile.name}
                  </p>
                  <p className="text-sm font-semibold text-brand-500">
                    {profile.role}
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-500">
                    {profile.age} YEAR · {profile.location}
                  </p>
                </div>
              </div>

              <VisualSkillChips skills={skillChips} />
            </motion.div>

            <div
              className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-brand-500/25 via-transparent to-cyan-500/20 blur-md"
              aria-hidden
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
