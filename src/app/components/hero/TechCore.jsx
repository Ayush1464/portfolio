import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function TechCore() {
  const outerGroupRef = useRef();
  const innerCoreRef = useRef();
  const wireframeRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y += delta * 0.4;
      innerCoreRef.current.rotation.x += delta * 0.2;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.y -= delta * 0.25;
      wireframeRef.current.rotation.z += delta * 0.15;
    }

    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.5;
    if (ring2Ref.current) ring2Ref.current.rotation.z -= delta * 0.6;
    if (ring3Ref.current) ring3Ref.current.rotation.z += delta * 0.4;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <group ref={outerGroupRef}>
        {/* Glowing Inner Core */}
        <mesh ref={innerCoreRef}>
          <icosahedronGeometry args={[1.1, 1]} />
          <meshPhysicalMaterial
            color="#3b82f6"
            emissive="#1e40af"
            emissiveIntensity={0.6}
            roughness={0.1}
            metalness={0.8}
            transmission={0.6}
            thickness={0.5}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Outer Tech Wireframe Shell */}
        <mesh ref={wireframeRef}>
          <icosahedronGeometry args={[1.45, 1]} />
          <meshStandardMaterial
            color="#8b5cf6"
            wireframe
            wireframeLinewidth={1.5}
            emissive="#6366f1"
            emissiveIntensity={0.8}
          />
        </mesh>

        {/* Central Pulsing Light */}
        <pointLight color="#60a5fa" intensity={4} distance={6} />
        <pointLight color="#ec4899" intensity={3} distance={5} position={[0, -1, 1]} />

        {/* React Orbital Ring 1 */}
        <group rotation={[Math.PI / 3, 0, 0]} ref={ring1Ref}>
          <mesh>
            <torusGeometry args={[2.0, 0.02, 16, 100]} />
            <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={1} />
          </mesh>
          <mesh position={[2.0, 0, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={1.5} />
          </mesh>
        </group>

        {/* React Orbital Ring 2 */}
        <group rotation={[-Math.PI / 3, Math.PI / 4, 0]} ref={ring2Ref}>
          <mesh>
            <torusGeometry args={[2.1, 0.02, 16, 100]} />
            <meshStandardMaterial color="#c084fc" emissive="#8b5cf6" emissiveIntensity={1} />
          </mesh>
          <mesh position={[-2.1, 0, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={1.5} />
          </mesh>
        </group>

        {/* React Orbital Ring 3 */}
        <group rotation={[0, Math.PI / 3, Math.PI / 6]} ref={ring3Ref}>
          <mesh>
            <torusGeometry args={[1.9, 0.02, 16, 100]} />
            <meshStandardMaterial color="#f472b6" emissive="#ec4899" emissiveIntensity={1} />
          </mesh>
          <mesh position={[0, 1.9, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#f472b6" emissive="#f472b6" emissiveIntensity={1.5} />
          </mesh>
        </group>
      </group>
    </Float>
  );
}
