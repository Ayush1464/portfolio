import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Globe({ targetState, mousePos, scrollProgress }) {
  const mainGroupRef = useRef();
  const monitorScreenRef = useRef();

  useFrame((state) => {
    if (!mainGroupRef.current) return;
    const t = state.clock.getElapsedTime();

    // Subtle ambient breathing motion for the desk setup
    if (mainGroupRef.current) {
      mainGroupRef.current.position.y = Math.sin(t * 0.8) * 0.08;
    }

    // Gentle rotation/perspective change on scroll & subtle idle wobble
    if (monitorScreenRef.current) {
      monitorScreenRef.current.rotation.y = Math.sin(t * 0.3) * 0.05 + (scrollProgress - 0.5) * 0.3;
    }

    // Mouse tilt tracking (subtle parallax)
    const mouseX = mousePos.current ? (mousePos.current.x * Math.PI) / 30 : 0;
    const mouseY = mousePos.current ? (mousePos.current.y * Math.PI) / 30 : 0;

    // Smooth Lerp toward Section Target Position
    mainGroupRef.current.position.x = THREE.MathUtils.lerp(
      mainGroupRef.current.position.x,
      targetState.x + mouseX * 0.4,
      0.04
    );
    mainGroupRef.current.position.y = THREE.MathUtils.lerp(
      mainGroupRef.current.position.y,
      targetState.y - mouseY * 0.4,
      0.04
    );
    mainGroupRef.current.position.z = THREE.MathUtils.lerp(
      mainGroupRef.current.position.z,
      targetState.z,
      0.04
    );

    const targetScale = targetState.scale || 1.0;
    mainGroupRef.current.scale.setScalar(
      THREE.MathUtils.lerp(mainGroupRef.current.scale.x, targetScale, 0.04)
    );
  });

  return (
    <group ref={mainGroupRef}>
      {/* --- FLOOR / SURFACE ACCENT --- */}
      <mesh position={[0, -1.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#070a12" roughness={0.8} metalness={0.2} />
      </mesh>

      {/* --- DESK SETUP (Matching reference image) --- */}
      {/* Desk Top Surface */}
      <mesh position={[0, -0.6, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.2, 0.1, 2.0]} />
        <meshStandardMaterial color="#1e1b18" roughness={0.4} metalness={0.2} />
      </mesh>

      {/* Desk Legs */}
      {/* Left A-Frame Leg */}
      <mesh position={[-1.8, -1.2, 0]} rotation={[0, 0, 0.15]}>
        <boxGeometry args={[0.08, 1.2, 1.6]} />
        <meshStandardMaterial color="#334155" roughness={0.3} metalness={0.8} />
      </mesh>
      {/* Right A-Frame Leg */}
      <mesh position={[1.8, -1.2, 0]} rotation={[0, 0, -0.15]}>
        <boxGeometry args={[0.08, 1.2, 1.6]} />
        <meshStandardMaterial color="#334155" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* --- CURVED ULTRAWIDE MONITOR --- */}
      <group ref={monitorScreenRef} position={[0, 0.35, -0.2]}>
        {/* Monitor Back Housing */}
        <mesh castShadow>
          <boxGeometry args={[3.2, 1.2, 0.12]} />
          <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.8} />
        </mesh>

        {/* Glow Screen Panel (IDE Interface display) */}
        <mesh position={[0, 0, 0.07]}>
          <planeGeometry args={[3.1, 1.12]} />
          <meshBasicMaterial color="#090d16" />
        </mesh>

        {/* IDE Sidebar UI Strip */}
        <mesh position={[-1.3, 0, 0.08]}>
          <planeGeometry args={[0.4, 1.05]} />
          <meshBasicMaterial color="#1e293b" />
        </mesh>

        {/* IDE Code Text Lines (Glowing Syntax Lines) */}
        {/* Line 1 */}
        <mesh position={[-0.3, 0.35, 0.08]}>
          <planeGeometry args={[1.4, 0.04]} />
          <meshBasicMaterial color="#c084fc" />
        </mesh>
        {/* Line 2 */}
        <mesh position={[-0.1, 0.25, 0.08]}>
          <planeGeometry args={[1.8, 0.04]} />
          <meshBasicMaterial color="#60a5fa" />
        </mesh>
        {/* Line 3 */}
        <mesh position={[0.2, 0.15, 0.08]}>
          <planeGeometry args={[2.0, 0.04]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
        {/* Line 4 */}
        <mesh position={[0.0, 0.05, 0.08]}>
          <planeGeometry args={[1.6, 0.04]} />
          <meshBasicMaterial color="#4ade80" />
        </mesh>
        {/* Line 5 */}
        <mesh position={[-0.2, -0.05, 0.08]}>
          <planeGeometry args={[1.2, 0.04]} />
          <meshBasicMaterial color="#f472b6" />
        </mesh>
        {/* Line 6 */}
        <mesh position={[0.1, -0.15, 0.08]}>
          <planeGeometry args={[1.7, 0.04]} />
          <meshBasicMaterial color="#60a5fa" />
        </mesh>

        {/* Screen Ambient Backlight Glow */}
        <pointLight position={[0, 0, -0.3]} intensity={1.5} color="#38bdf8" distance={4} />

        {/* Monitor Stand */}
        <mesh position={[0, -0.7, -0.1]}>
          <cylinderGeometry args={[0.06, 0.08, 0.4, 16]} />
          <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, -0.88, 0]}>
          <boxGeometry args={[0.8, 0.04, 0.6]} />
          <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>

      {/* --- DEVELOPER CHARACTER SILHOUETTE (Sitting at Desk) --- */}
      <group position={[0, -0.4, 0.45]}>
        {/* Head */}
        <mesh position={[0, 0.42, 0]} castShadow>
          <sphereGeometry args={[0.22, 32, 32]} />
          <meshStandardMaterial color="#0b0f19" roughness={0.9} />
        </mesh>

        {/* Torso / Hoodie */}
        <mesh position={[0, -0.05, 0]} castShadow>
          <cylinderGeometry args={[0.28, 0.38, 0.7, 32]} />
          <meshStandardMaterial color="#0f172a" roughness={0.8} />
        </mesh>

        {/* Ergonomic Office Chair Backrest */}
        <mesh position={[0, 0.05, 0.25]} castShadow>
          <boxGeometry args={[0.7, 0.9, 0.12]} />
          <meshStandardMaterial color="#030712" roughness={0.7} />
        </mesh>
        {/* Chair Headrest */}
        <mesh position={[0, 0.58, 0.22]} castShadow>
          <boxGeometry args={[0.4, 0.2, 0.1]} />
          <meshStandardMaterial color="#030712" roughness={0.7} />
        </mesh>
      </group>

      {/* --- DESK ACCESSORIES (Keyboard, Mousepad, Coffee Mug, Desk Light) --- */}
      {/* Desk Mat */}
      <mesh position={[0, -0.54, 0.35]}>
        <boxGeometry args={[2.4, 0.02, 0.9]} />
        <meshStandardMaterial color="#090d16" roughness={0.9} />
      </mesh>

      {/* Backlit Mechanical Keyboard */}
      <mesh position={[-0.1, -0.52, 0.38]}>
        <boxGeometry args={[1.1, 0.03, 0.38]} />
        <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.5} />
      </mesh>

      {/* Coffee Mug */}
      <mesh position={[1.2, -0.48, 0.25]}>
        <cylinderGeometry args={[0.1, 0.1, 0.22, 24]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.3} />
      </mesh>

      {/* Modern Desk Bar Lamp */}
      <group position={[1.2, -0.2, -0.2]}>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.5, 16]} />
          <meshStandardMaterial color="#475569" metalness={0.9} />
        </mesh>
        <mesh position={[-0.2, 0.45, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.6, 0.03, 0.06]} />
          <meshStandardMaterial color="#475569" metalness={0.9} />
        </mesh>
        <spotLight position={[-0.2, 0.43, 0]} intensity={1.2} color="#ffedd5" distance={1.8} angle={0.8} />
      </group>

      {/* --- VERTICAL AMBIENT LED LIGHT PILLARS (Left & Right from image) --- */}
      {/* Left Vertical LED Light Bar */}
      <group position={[-3.6, 0.2, -0.5]}>
        <mesh>
          <cylinderGeometry args={[0.04, 0.04, 4.2, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <pointLight intensity={2.5} color="#e0f2fe" distance={5} />
      </group>

      {/* Right Vertical LED Light Bar */}
      <group position={[3.6, 0.2, -0.5]}>
        <mesh>
          <cylinderGeometry args={[0.04, 0.04, 4.2, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <pointLight intensity={2.5} color="#e0f2fe" distance={5} />
      </group>
    </group>
  );
}
