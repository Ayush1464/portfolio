import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, GitBranch } from 'lucide-react';

export default function ProjectDetails({ project }) {
  return (
    <div className="flex flex-col items-start text-left justify-center space-y-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6 w-full"
        >
          {/* Category Tag */}
          <div>
            <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white leading-[1.05]">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono font-semibold px-3 py-1 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-6 pt-4">
            <a
              href={project.link}
              className="group/link flex items-center gap-3 text-sm font-bold text-gray-900 dark:text-white tracking-widest uppercase"
            >
              VIEW CASE STUDY
              <div className="w-10 h-10 rounded-full border border-gray-300 dark:border-white/20 flex items-center justify-center group-hover/link:bg-gray-900 dark:group-hover/link:bg-white group-hover/link:text-white dark:group-hover/link:text-black transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </a>
            <a
              href={project.github}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub Repository"
            >
              <GitBranch className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
