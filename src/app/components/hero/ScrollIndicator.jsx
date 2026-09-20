import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      onClick={scrollToProjects}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group"
    >
      <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors font-semibold select-none">
        Scroll to explore
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center bg-white/10 dark:bg-black/20 backdrop-blur-md group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all"
      >
        <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors" />
      </motion.div>
    </motion.div>
  );
}
