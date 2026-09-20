import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function SkillDetails({ activeSkill }) {
  if (!activeSkill) return null;

  const IconComponent = activeSkill.icon;

  return (
    <div className="sticky top-28 p-8 rounded-3xl bg-slate-900/90 dark:bg-slate-950/90 border border-gray-200/20 dark:border-white/10 shadow-2xl backdrop-blur-xl text-white">
      <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 tracking-widest uppercase mb-6">
        <Sparkles className="w-3.5 h-3.5" /> TOOLKIT FOCUS
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSkill.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-blue-500/20 border border-blue-500/30 text-blue-400">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-2xl font-black tracking-tight">{activeSkill.name}</h4>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-gray-300 uppercase tracking-widest">
                {activeSkill.level === 'core' ? 'Core Expertise' : 'Supporting Tool'}
              </span>
            </div>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed font-normal pt-2 border-t border-white/10">
            {activeSkill.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
