import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function CharacterLighting({ mousePos }) {
  const keyLightRef = useRef();

  useFrame(() => {
    if (keyLightRef.current && mousePos.current) {
      // Key light subtly shifts with mouse
      keyLightRef.current.position.x = 4 + mousePos.current.x * 1.5;
      keyLightRef.current.position.y = 5 + mousePos.current.y * 1.5;
    }
  });

  return (
    <>
      {/* Soft Ambient Base Lighting */}
      <ambientLight intensity={0.75} color="#f8fafc" />

      {/* Primary Key Light (Main soft light from top-front-right) */}
      <directionalLight
        ref={keyLightRef}
        position={[4, 5, 4]}
        intensity={2.0}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
      />

      {/* Secondary Fill Light (Soft cool fill from top-left) */}
      <directionalLight position={[-4, 3, 2]} intensity={0.8} color="#93c5fd" />

      {/* Rim / Back Light (Separates character from background with warm rim edge) */}
      <pointLight position={[0, 3, -3]} intensity={3.5} color="#a855f7" distance={8} />

      {/* Soft Laptop Glow Light */}
      <pointLight position={[0, 0.2, 0.8]} intensity={1.2} color="#38bdf8" distance={2} />
    </>
  );
}
