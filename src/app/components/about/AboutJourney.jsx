import { motion } from 'framer-motion';

export default function AboutJourney({ isInView }) {
  const milestones = [
    {
      period: '2024 — PRESENT',
      role: 'Frontend Developer',
      org: 'Dreamwave Innovation Pvt. Ltd.',
      detail:
        'Architecting reusable React component libraries, integrating secure RESTful APIs, and optimizing production web apps.',
    },
    {
      period: 'CORE FOCUS',
      role: 'Production Architecture',
      org: 'Modern Web Stack',
      detail:
        'Specializing in React, JavaScript/ES6+, TypeScript, Next.js, Zustand/Redux state management, and high-performance UI systems.',
    },
  ];

  return (
    <div className="text-left">
      <div className="mb-12">
        <span className="text-xs font-bold text-blue-500 font-mono tracking-[0.2em] uppercase mb-2 block">
          03. MILESTONES
        </span>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
          Development Journey.
        </h3>
      </div>

      <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 pl-8 space-y-12">
        {milestones.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
            className="relative group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-950 group-hover:scale-125 transition-transform" />

            <div className="p-8 rounded-3xl bg-white/40 dark:bg-slate-900/40 border border-gray-200/50 dark:border-white/5 backdrop-blur-md hover:border-blue-500/30 transition-all">
              <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 tracking-widest block mb-2">
                {item.period}
              </span>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {item.role}
              </h4>
              <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-4">
                {item.org}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-normal">
                {item.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
