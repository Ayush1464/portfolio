import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroContent from './HeroContent';
import HeroScene from './HeroScene';
import ScrollIndicator from './ScrollIndicator';

export default function Hero() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (val) => {
      setScrollProgress(val);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center px-6 lg:px-16 pt-20 pb-16 overflow-hidden select-none"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        style={{ opacity, y }}
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 my-auto"
      >
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 flex justify-center lg:justify-start">
          <HeroContent />
        </div>

        {/* Right Column: 3D Scene */}
        <div className="lg:col-span-5 w-full h-[400px] lg:h-[550px] relative flex items-center justify-center">
          <HeroScene scrollProgress={scrollProgress} />
        </div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
