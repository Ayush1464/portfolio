import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ProjectEnvironment() {
  const particlesRef = useRef();

  const [positions] = useMemo(() => {
    const pos = new Float32Array(50 * 3);
    for (let i = 0; i < 50; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return [pos];
  }, []);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <group position={[0, -1.3, 0]}>
      {/* Studio Floor Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[16, 16]} />
        <meshStandardMaterial color="#0b0f17" roughness={0.8} metalness={0.2} />
      </mesh>

      {/* Architectural Floor Grid */}
      <gridHelper args={[16, 16, '#1e293b', '#0f172a']} position={[0, 0.01, 0]} />

      {/* Floating Studio Dust Particles */}
      <points ref={particlesRef} position={[0, 1.5, 0]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.04} color="#60a5fa" transparent opacity={0.4} />
      </points>
    </group>
  );
}
