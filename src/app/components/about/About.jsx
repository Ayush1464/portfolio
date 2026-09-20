import { useRef } from 'react';
import { useInView } from 'framer-motion';
import AboutIntro from './AboutIntro';
import AboutPrinciples from './AboutPrinciples';
import AboutJourney from './AboutJourney';

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.15 });

  return (
    <section id="about" ref={containerRef} className="py-32 px-6 lg:px-16 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AboutIntro isInView={isInView} />
        <AboutPrinciples isInView={isInView} />
        <AboutJourney isInView={isInView} />
      </div>
    </section>
  );
}
