import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function DeveloperCharacter({ mousePos }) {
  const characterGroup = useRef();
  const headRef = useRef();
  const chestRef = useRef();
  const rightArmRef = useRef();
  const leftArmRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // 1. Natural Breathing animation (subtle chest elevation and head pitch)
    const breath = Math.sin(t * 1.5) * 0.02;
    if (chestRef.current) {
      chestRef.current.position.y = 0.9 + breath;
    }
    if (headRef.current) {
      headRef.current.position.y = 1.65 + breath * 0.6;
    }

    // 2. Mouse Head & Body Tracking (Subtle interpolation)
    if (mousePos.current) {
      const targetHeadY = (mousePos.current.x * Math.PI) / 6;
      const targetHeadX = (-mousePos.current.y * Math.PI) / 8;

      if (headRef.current) {
        headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetHeadY, 0.06);
        headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetHeadX, 0.06);
      }

      if (characterGroup.current) {
        characterGroup.current.rotation.y = THREE.MathUtils.lerp(
          characterGroup.current.rotation.y,
          targetHeadY * 0.35,
          0.04
        );
      }
    }
  });

  // Materials
  const skinMaterial = new THREE.MeshStandardMaterial({
    color: '#e5b899',
    roughness: 0.6,
    metalness: 0.1,
  });

  const hairMaterial = new THREE.MeshStandardMaterial({
    color: '#2a2421',
    roughness: 0.8,
  });

  const sweaterMaterial = new THREE.MeshStandardMaterial({
    color: '#1e293b', // Deep charcoal/slate
    roughness: 0.7,
    metalness: 0.1,
  });

  const pantsMaterial = new THREE.MeshStandardMaterial({
    color: '#0f172a',
    roughness: 0.8,
  });

  const laptopMaterial = new THREE.MeshStandardMaterial({
    color: '#94a3b8',
    metalness: 0.8,
    roughness: 0.2,
  });

  const screenMaterial = new THREE.MeshStandardMaterial({
    color: '#0284c7',
    emissive: '#0369a1',
    emissiveIntensity: 0.6,
    roughness: 0.2,
  });

  return (
    <group ref={characterGroup} position={[0, -1.2, 0]}>
      {/* 1. LOWER BODY & LEGS (Seated position) */}
      <group position={[0, 0.4, 0]}>
        {/* Left Leg */}
        <mesh position={[-0.3, -0.3, 0.3]} rotation={[0.4, 0, 0]}>
          <boxGeometry args={[0.22, 0.6, 0.22]} />
          <primitive object={pantsMaterial} />
        </mesh>
        {/* Right Leg */}
        <mesh position={[0.3, -0.3, 0.3]} rotation={[0.4, 0, 0]}>
          <boxGeometry args={[0.22, 0.6, 0.22]} />
          <primitive object={pantsMaterial} />
        </mesh>
      </group>

      {/* 2. TORSO / CHEST (Sweater) */}
      <group ref={chestRef} position={[0, 0.9, 0]}>
        <mesh position={[0, 0.25, 0]}>
          <capsuleGeometry args={[0.38, 0.5, 8, 16]} />
          <primitive object={sweaterMaterial} />
        </mesh>

        {/* Shoulders */}
        <mesh position={[-0.45, 0.4, 0]}>
          <sphereGeometry args={[0.22, 16, 16]} />
          <primitive object={sweaterMaterial} />
        </mesh>
        <mesh position={[0.45, 0.4, 0]}>
          <sphereGeometry args={[0.22, 16, 16]} />
          <primitive object={sweaterMaterial} />
        </mesh>
      </group>

      {/* 3. ARMS & HANDS (Working at desk) */}
      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.48, 1.25, 0]} rotation={[0.6, 0.2, -0.3]}>
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.1, 0.09, 0.55]} />
          <primitive object={sweaterMaterial} />
        </mesh>
        {/* Forearm & Hand */}
        <mesh position={[0, -0.55, 0.25]} rotation={[0.8, -0.2, 0]}>
          <cylinderGeometry args={[0.08, 0.07, 0.45]} />
          <primitive object={skinMaterial} />
        </mesh>
      </group>

      {/* Right Arm */}
      <group ref={rightArmRef} position={[0.48, 1.25, 0]} rotation={[0.6, -0.2, 0.3]}>
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.1, 0.09, 0.55]} />
          <primitive object={sweaterMaterial} />
        </mesh>
        {/* Forearm & Hand */}
        <mesh position={[0, -0.55, 0.25]} rotation={[0.8, 0.2, 0]}>
          <cylinderGeometry args={[0.08, 0.07, 0.45]} />
          <primitive object={skinMaterial} />
        </mesh>
      </group>

      {/* 4. HEAD & FACE */}
      <group ref={headRef} position={[0, 1.65, 0]}>
        {/* Head Sphere */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.26, 32, 32]} />
          <primitive object={skinMaterial} />
        </mesh>

        {/* Hair */}
        <mesh position={[0, 0.08, -0.02]} scale={[1.05, 1.05, 1.05]}>
          <sphereGeometry args={[0.26, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
          <primitive object={hairMaterial} />
        </mesh>

        {/* Glasses (Subtle tech aesthetic) */}
        <group position={[0, 0.03, 0.24]}>
          <mesh position={[-0.09, 0, 0]}>
            <torusGeometry args={[0.06, 0.012, 12, 24]} />
            <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[0.09, 0, 0]}>
            <torusGeometry args={[0.06, 0.012, 12, 24]} />
            <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[0, 0.02, 0]}>
            <boxGeometry args={[0.06, 0.01, 0.01]} />
            <meshStandardMaterial color="#1e293b" />
          </mesh>
        </group>
      </group>

      {/* 5. MINIMALIST LAPTOP ON WORKSPACE */}
      <group position={[0, 0.65, 0.5]} rotation={[-0.1, 0, 0]}>
        {/* Base */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.65, 0.02, 0.45]} />
          <primitive object={laptopMaterial} />
        </mesh>
        {/* Screen Open */}
        <mesh position={[0, 0.22, -0.21]} rotation={[-0.35, 0, 0]}>
          <boxGeometry args={[0.63, 0.42, 0.02]} />
          <primitive object={screenMaterial} />
        </mesh>
      </group>
    </group>
  );
}
