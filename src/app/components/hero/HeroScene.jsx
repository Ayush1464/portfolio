import { Canvas } from '@react-three/fiber';
import { useRef, useEffect, useState } from 'react';
import DeveloperCharacter from './DeveloperCharacter';
import CharacterLighting from './CharacterLighting';
import CharacterEnvironment from './CharacterEnvironment';
import HeroCamera from './HeroCamera';

export default function HeroScene({ scrollProgress = 0 }) {
  const mousePos = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mousePos.current = { x, y };
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full min-h-[450px] lg:min-h-[620px] relative flex items-center justify-center">
      <Canvas
        shadows
        camera={{ position: [0, 0.2, 4.2], fov: 42 }}
        dpr={isMobile ? [1, 1.25] : [1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full"
      >
        <CharacterLighting mousePos={mousePos} />
        <HeroCamera mousePos={mousePos} scrollProgress={scrollProgress} />
        <DeveloperCharacter mousePos={mousePos} />
        <CharacterEnvironment />
      </Canvas>
    </div>
  );
}
