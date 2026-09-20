import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function HeroCamera({ mousePos, scrollProgress }) {
  const cameraGroup = useRef();

  useFrame(() => {
    if (!cameraGroup.current) return;

    // 1. Mouse Parallax (Subtle camera shift)
    const mouseX = (mousePos.current.x * Math.PI) / 24;
    const mouseY = (mousePos.current.y * Math.PI) / 24;

    // 2. Scroll Camera Orbit & Depth Push
    // As user scrolls down, camera orbits around the developer figure and moves slightly upward/deeper
    const scrollAngle = scrollProgress * Math.PI * 0.25;
    const scrollY = scrollProgress * 1.5;
    const scrollZ = -scrollProgress * 2.5;

    const targetX = mouseX + Math.sin(scrollAngle) * 0.8;
    const targetY = mouseY + scrollY;
    const targetZ = scrollZ;

    cameraGroup.current.rotation.y = THREE.MathUtils.lerp(cameraGroup.current.rotation.y, targetX, 0.05);
    cameraGroup.current.rotation.x = THREE.MathUtils.lerp(cameraGroup.current.rotation.x, -targetY * 0.5, 0.05);
    cameraGroup.current.position.z = THREE.MathUtils.lerp(cameraGroup.current.position.z, targetZ, 0.05);
    cameraGroup.current.position.y = THREE.MathUtils.lerp(cameraGroup.current.position.y, scrollY * 0.2, 0.05);
  });

  return <group ref={cameraGroup} />;
}
