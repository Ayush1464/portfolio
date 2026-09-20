import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function GlobeLighting({ mousePos }) {
  const keyLightRef = useRef();

  useFrame(() => {
    if (keyLightRef.current && mousePos.current) {
      keyLightRef.current.position.x = 4 + mousePos.current.x * 2;
      keyLightRef.current.position.y = 4 + mousePos.current.y * 2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} color="#f8fafc" />
      <directionalLight
        ref={keyLightRef}
        position={[4, 4, 5]}
        intensity={2.0}
        color="#ffffff"
      />
      <directionalLight position={[-5, -4, -2]} intensity={0.7} color="#60a5fa" />
      <pointLight position={[0, 4, -4]} intensity={2.5} color="#c084fc" distance={10} />
    </>
  );
}
