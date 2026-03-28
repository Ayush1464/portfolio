import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Zap } from "lucide-react";
import { useTheme } from "./context/ThemeContext";
import { useState } from "react";
import LucrativeButton from "./ui/LucrativeButton";

export default function Hero() {
  const { theme } = useTheme();

  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textColor =
    theme === "dark" ? "text-gray-300" : "text-gray-700";
  const mutedColor =
    theme === "dark" ? "text-gray-400" : "text-gray-600";
  const borderColor =
    theme === "dark" ? "border-gray-700" : "border-gray-300";

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* Floating icons */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/4 left-10 hidden lg:block"
      >
        <Code2 className="w-16 h-16 text-gray-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-1/4 right-10 hidden lg:block"
      >
        <Sparkles className="w-20 h-20 text-gray-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute top-1/3 right-1/4 hidden lg:block"
      >
        <Zap className="w-12 h-12 text-gray-500" />
      </motion.div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="px-4 py-2 rounded-full border border-blue-500/20">
            ✨ Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl mb-6"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
            Ayush Mahapatra
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`text-3xl md:text-4xl mb-4 ${textColor}`}
        >
          Frontend Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`text-lg md:text-xl ${mutedColor} mb-12 max-w-2xl mx-auto`}
        >
          I build scalable, high-performance web apps with modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* 🔥 Fancy Button */}
       <LucrativeButton 
            onClick={() => scrollToSection("projects")} 
            label="Explore My Work" 
          />

          <button
            onClick={() => scrollToSection("contact")}
            className={`px-8 py-4 rounded-full border ${borderColor}`}
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}