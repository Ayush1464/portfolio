import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function ProjectLighting({ mousePos }) {
  const keyLightRef = useRef();

  useFrame(() => {
    if (keyLightRef.current && mousePos.current) {
      keyLightRef.current.position.x = 4 + mousePos.current.x * 2;
      keyLightRef.current.position.y = 4 + mousePos.current.y * 2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.7} color="#f8fafc" />
      <directionalLight
        ref={keyLightRef}
        position={[4, 4, 5]}
        intensity={2.2}
        color="#ffffff"
        castShadow
      />
      <directionalLight position={[-4, -3, 3]} intensity={0.6} color="#60a5fa" />
      <pointLight position={[0, 3, -4]} intensity={2.5} color="#c084fc" distance={8} />
    </>
  );
}
