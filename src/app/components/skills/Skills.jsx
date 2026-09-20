import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillsCategories } from './skillsData';
import SkillCategory from './SkillCategory';
import SkillDetails from './SkillDetails';
import { ArrowRight } from 'lucide-react';

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.15 });
  const [activeSkill, setActiveSkill] = useState(skillsCategories[0].skills[0]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-32 px-6 lg:px-16 relative overflow-hidden text-left"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl"
        >
          <span className="text-xs font-bold text-blue-500 font-mono tracking-[0.2em] uppercase mb-3 block">
            02 — SKILLS & TOOLKIT
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-gray-900 dark:text-white mb-6">
            Tools I use <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              to build things.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-normal leading-relaxed">
            From client interfaces to APIs, these are the technologies and tools I use to turn complex ideas into working products.
          </p>
        </motion.div>

        {/* Grid Layout: Left Categories (8 cols), Right Focus Details (4 cols) */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-8 space-y-16">
            {skillsCategories.map((category, idx) => (
              <SkillCategory
                key={category.id}
                category={category}
                activeSkill={activeSkill}
                onHoverSkill={setActiveSkill}
                isInView={isInView}
                index={idx}
              />
            ))}
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <SkillDetails activeSkill={activeSkill} />
          </div>
        </div>

        {/* Personal Tagline & Transition to Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-12 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
        >
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 italic">
            A toolkit shaped by the products I've built and continuous iteration.
          </p>

          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-3 text-sm font-bold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors uppercase tracking-widest"
          >
            THE TOOLS ARE ONLY PART OF THE STORY.{' '}
            <span className="flex items-center gap-1 text-blue-500 font-semibold group-hover:translate-x-1 transition-transform">
              See what I've built <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
