import { useState, useEffect } from 'react';

const sectionTargets = [
  { progress: 0.0, x: 2.2, y: 0.2, z: -1.0, scale: 1.1, opacity: 0.85 }, // Hero
  { progress: 0.2, x: 2.6, y: 0.8, z: -2.0, scale: 0.95, opacity: 0.75 }, // About
  { progress: 0.4, x: -2.4, y: 0.1, z: -1.5, scale: 0.85, opacity: 0.70 }, // Skills
  { progress: 0.6, x: 2.2, y: -0.4, z: -0.5, scale: 1.15, opacity: 0.85 }, // Projects
  { progress: 0.8, x: 0.0, y: 0.0, z: -3.5, scale: 0.8, opacity: 0.65 }, // Experience
  { progress: 1.0, x: 2.4, y: 0.6, z: -2.5, scale: 0.7, opacity: 0.55 }, // Contact
];

export function useScrollScene() {
  const [targetState, setTargetState] = useState(sectionTargets[0]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      setScrollProgress(progress);

      // Find bounding keyframes
      let prevKey = sectionTargets[0];
      let nextKey = sectionTargets[sectionTargets.length - 1];

      for (let i = 0; i < sectionTargets.length - 1; i++) {
        if (progress >= sectionTargets[i].progress && progress <= sectionTargets[i + 1].progress) {
          prevKey = sectionTargets[i];
          nextKey = sectionTargets[i + 1];
          break;
        }
      }

      const range = nextKey.progress - prevKey.progress;
      const factor = range > 0 ? (progress - prevKey.progress) / range : 0;

      // Linear interpolation between scroll keyframes
      setTargetState({
        x: prevKey.x + (nextKey.x - prevKey.x) * factor,
        y: prevKey.y + (nextKey.y - prevKey.y) * factor,
        z: prevKey.z + (nextKey.z - prevKey.z) * factor,
        scale: prevKey.scale + (nextKey.scale - prevKey.scale) * factor,
        opacity: prevKey.opacity + (nextKey.opacity - prevKey.opacity) * factor,
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { targetState, scrollProgress };
}
