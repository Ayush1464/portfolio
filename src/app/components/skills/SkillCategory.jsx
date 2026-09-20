import { motion } from 'framer-motion';
import SkillItem from './SkillItem';

export default function SkillCategory({ category, activeSkill, onHoverSkill, isInView, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
        <span className="text-xs font-mono font-bold text-blue-500 tracking-widest">{category.tag}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{category.title}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        {category.skills.map((skill) => (
          <SkillItem
            key={skill.name}
            skill={skill}
            isSelected={activeSkill?.name === skill.name}
            onHover={onHoverSkill}
          />
        ))}
      </div>
    </motion.div>
  );
}
