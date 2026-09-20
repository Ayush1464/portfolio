import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect, useState, Suspense } from 'react';
import * as THREE from 'three';
import ProjectObject from './ProjectObject';
import ProjectLighting from './ProjectLighting';
import ProjectEnvironment from './ProjectEnvironment';

function ProjectCameraRig({ mousePos, scrollProgress }) {
  const cameraGroup = useRef();

  useFrame(() => {
    if (!cameraGroup.current || !mousePos.current) return;

    // Mouse Parallax & Scroll Depth
    const targetX = (mousePos.current.x * Math.PI) / 28;
    const targetY = (mousePos.current.y * Math.PI) / 28;
    const scrollZ = -scrollProgress * 2.5;

    cameraGroup.current.rotation.y = THREE.MathUtils.lerp(cameraGroup.current.rotation.y, targetX, 0.06);
    cameraGroup.current.rotation.x = THREE.MathUtils.lerp(cameraGroup.current.rotation.x, -targetY, 0.06);
    cameraGroup.current.position.z = THREE.MathUtils.lerp(cameraGroup.current.position.z, scrollZ, 0.06);
  });

  return <group ref={cameraGroup} />;
}

export default function ProjectScene({ activeProject, scrollProgress = 0 }) {
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
    <div className="w-full h-full min-h-[420px] lg:min-h-[560px] relative flex items-center justify-center rounded-[2.5rem] overflow-hidden border border-gray-200/50 dark:border-white/10 shadow-2xl bg-slate-950/80 backdrop-blur-xl">
      <Canvas
        shadows
        camera={{ position: [0, 0.1, 4.0], fov: 42 }}
        dpr={isMobile ? [1, 1.25] : [1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <ProjectLighting mousePos={mousePos} />
          <ProjectCameraRig mousePos={mousePos} scrollProgress={scrollProgress} />
          <ProjectObject activeProject={activeProject} mousePos={mousePos} />
          <ProjectEnvironment />
        </Suspense>
      </Canvas>
    </div>
  );
}
