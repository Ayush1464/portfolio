import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import LucrativeButton from '../ui/LucrativeButton';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroContent() {
  const { theme } = useTheme();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const textColor = theme === 'dark' ? 'text-gray-100' : 'text-gray-900';
  const mutedColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const secondaryBtnStyle =
    theme === 'dark'
      ? 'border-gray-700 hover:border-gray-500 bg-white/5 text-white hover:bg-white/10'
      : 'border-gray-300 hover:border-gray-400 bg-gray-100/80 text-gray-900 hover:bg-gray-200';

  return (
    <div className="flex flex-col items-start justify-center text-left relative z-10 max-w-2xl">
      {/* 1. Small Intro Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-5"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs md:text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-sm">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Available for Hire
        </span>
      </motion.div>

      {/* 2. Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-[1.05]"
      >
        HELLO, I'M{' '}
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          AYUSH
        </span>
      </motion.h1>

      {/* 3. Sub-Heading Role */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 tracking-tight ${textColor}`}
      >
        Frontend Developer <br />
        <span className="text-blue-500 dark:text-blue-400">& Software Engineer</span>
      </motion.p>

      {/* 4. Editorial Body Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={`text-base sm:text-lg lg:text-xl ${mutedColor} mb-10 leading-relaxed font-normal`}
      >
        I build modern, high-performance web applications with React, intuitive design systems, and thoughtful user interaction.
      </motion.p>

      {/* 5. CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-wrap gap-4 items-center"
      >
        <LucrativeButton
          onClick={() => scrollToSection('projects')}
          label="View My Work"
        />

        <button
          onClick={() => scrollToSection('contact')}
          className={`px-8 py-5 rounded-2xl border font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 ${secondaryBtnStyle}`}
        >
          Contact Me <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
}
