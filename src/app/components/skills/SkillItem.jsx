import { ArrowUpRight } from 'lucide-react';

export default function SkillItem({ skill, isSelected, onHover }) {
  const IconComponent = skill.icon;
  const isCore = skill.level === 'core';

  return (
    <div
      onMouseEnter={() => onHover(skill)}
      className={`group relative flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
        isSelected
          ? 'bg-blue-500/10 dark:bg-blue-500/15 border-blue-500/40 text-blue-600 dark:text-blue-400 shadow-md translate-x-1'
          : 'bg-white/40 dark:bg-slate-900/40 border-gray-200/60 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 hover:bg-white/80 dark:hover:bg-slate-900/80'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`p-2 rounded-xl transition-colors ${
            isSelected
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 group-hover:text-blue-500'
          }`}
        >
          <IconComponent className="w-4 h-4" />
        </div>
        <span
          className={`font-semibold tracking-wide transition-colors ${
            isCore
              ? 'text-base text-gray-900 dark:text-white font-bold'
              : 'text-sm text-gray-700 dark:text-gray-300'
          } ${isSelected ? 'text-blue-600 dark:text-blue-400' : ''}`}
        >
          {skill.name}
        </span>
      </div>

      <ArrowUpRight
        className={`w-4 h-4 transition-all duration-300 ${
          isSelected
            ? 'opacity-100 translate-x-0 -translate-y-0 text-blue-500'
            : 'opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-0 text-gray-400'
        }`}
      />
    </div>
  );
}
