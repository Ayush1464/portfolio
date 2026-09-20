import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectNavigation({ currentIndex, totalCount, onPrev, onNext }) {
  const currentFormatted = String(currentIndex + 1).padStart(2, '0');
  const totalFormatted = String(totalCount).padStart(2, '0');
  const progressPercent = ((currentIndex + 1) / totalCount) * 100;

  return (
    <div className="flex flex-col gap-4 w-full pt-6">
      {/* Visual Progress Bar */}
      <div className="w-full h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="flex items-center justify-between">
        {/* Gallery Counter */}
        <div className="text-xs font-mono font-bold tracking-widest text-gray-500 dark:text-gray-400">
          <span className="text-blue-500 dark:text-blue-400 text-sm">{currentFormatted}</span> / {totalFormatted}
        </div>

        {/* Gallery Triggers */}
        <div className="flex items-center gap-3">
          <button
            onClick={onPrev}
            className="p-3 rounded-2xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500 text-gray-900 dark:text-white transition-all active:scale-95 shadow-sm"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={onNext}
            className="p-3 rounded-2xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500 text-gray-900 dark:text-white transition-all active:scale-95 shadow-sm"
            aria-label="Next Project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
