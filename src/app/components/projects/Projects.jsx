import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useInView } from 'framer-motion';
import { projectsData } from './projectsData';
import ProjectScene from './ProjectScene';
import ProjectDetails from './ProjectDetails';
import ProjectNavigation from './ProjectNavigation';

export default function Projects() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.15 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (val) => {
      setScrollProgress(val);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % projectsData.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeProject = projectsData[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-32 px-6 lg:px-16 relative overflow-hidden text-left"
    >
      {/* Subtle ambient spatial light */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl"
        >
          <span className="text-xs font-bold text-blue-500 font-mono tracking-[0.2em] uppercase mb-3 block">
            03 — SELECTED WORK
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-gray-900 dark:text-white mb-6">
            Things I've <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              built.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-normal leading-relaxed">
            A selection of products, systems and experiments I've worked on across the web.
          </p>
        </motion.div>

        {/* 3D Exhibition Studio Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-12">
          {/* 3D Studio Stage (7 cols) */}
          <div className="lg:col-span-7">
            <ProjectScene activeProject={activeProject} scrollProgress={scrollProgress} />
          </div>

          {/* Project Editorial Information (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <ProjectDetails project={activeProject} />
            <ProjectNavigation
              currentIndex={activeIndex}
              totalCount={projectsData.length}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
