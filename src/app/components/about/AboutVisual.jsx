import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import DeveloperCharacter from '../hero/DeveloperCharacter';

function CharacterPortraitRig({ mousePos }) {
  const groupRef = useRef();

  useFrame(() => {
    if (!groupRef.current || !mousePos.current) return;
    const targetX = (mousePos.current.x * Math.PI) / 36;
    const targetY = (mousePos.current.y * Math.PI) / 36;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]} scale={[1.15, 1.15, 1.15]}>
      <DeveloperCharacter mousePos={mousePos} />
    </group>
  );
}

export default function AboutVisual() {
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
    <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-[2.5rem] overflow-hidden border border-gray-200/50 dark:border-white/10 shadow-2xl bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-xl group">
      {/* Editorial Studio Lighting Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/10 to-transparent pointer-events-none" />

      {/* 3D Canvas Portrait */}
      <Canvas
        shadows
        camera={{ position: [0, 0.5, 2.8], fov: 45 }}
        dpr={isMobile ? [1, 1.25] : [1, 2]}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full relative z-10"
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 4, 3]} intensity={1.8} />
        <pointLight position={[-3, 2, -2]} intensity={2.5} color="#a855f7" />

        <CharacterPortraitRig mousePos={mousePos} />
      </Canvas>

      {/* Subtle Frame Badge Overlay */}
      <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between p-4 rounded-2xl bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/15 text-white">
        <span className="text-xs font-bold tracking-widest uppercase text-gray-200">AYUSH MAHAPATRA</span>
        <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
          DEVELOPER
        </span>
      </div>
    </div>
  );
}
