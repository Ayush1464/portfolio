import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import AboutVisual from './AboutVisual';

export default function AboutIntro({ isInView }) {
  const { theme } = useTheme();

  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';
  const mutedColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32">
      {/* Left Column: Editorial Text (7 Cols) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="lg:col-span-7 space-y-8 text-left"
      >
        <div>
          <span className="text-xs font-bold text-blue-500 font-mono tracking-[0.2em] uppercase mb-3 block">
            01. IDENTITY
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-gray-900 dark:text-white">
            A little <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              about me.
            </span>
          </h2>
        </div>

        <p className={`text-lg sm:text-xl lg:text-2xl leading-relaxed font-normal ${textColor}`}>
          I'm a frontend developer dedicated to crafting clean, high-performance, and intuitive digital experiences for the web.
        </p>

        <div className={`space-y-6 text-base sm:text-lg leading-relaxed ${mutedColor}`}>
          <p>
            With over 5 years of industry experience, I've engineered everything from agile startup MVPs to scalable enterprise web applications. My core expertise centers around modern React, JavaScript, and modular component architectures.
          </p>
          <p>
            I focus deeply on micro-interactions, accessibility, sub-second latency, and state management—ensuring that complex digital systems feel effortless to the user.
          </p>
        </div>
      </motion.div>

      {/* Right Column: 3D Character Portrait Frame (5 Cols) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:col-span-5"
      >
        <AboutVisual />
      </motion.div>
    </div>
  );
}
