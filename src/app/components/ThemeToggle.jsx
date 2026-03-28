import { motion } from "framer-motion";
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-md hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
        ) : (
          <Moon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
        )}
      </motion.div>
    </motion.button>
  );
}
