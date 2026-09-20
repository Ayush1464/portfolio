import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function createFallbackTexture(title) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext('2d');

  // Dark studio gradient
  const grad = ctx.createLinearGradient(0, 0, 1024, 640);
  grad.addColorStop(0, '#0f172a');
  grad.addColorStop(0.5, '#1e1b4b');
  grad.addColorStop(1, '#0284c7');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 640);

  // Title text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 48px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(title || 'PROJECT SHOWCASE', 512, 320);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function ProjectTextureSlab({ project, isActive, mousePos }) {
  const meshRef = useRef();
  const [texture, setTexture] = useState(() => createFallbackTexture(project.title));

  useEffect(() => {
    let isMounted = true;
    const loader = new THREE.TextureLoader();

    loader.load(
      project.image,
      (loadedTexture) => {
        if (isMounted && loadedTexture) {
          loadedTexture.colorSpace = THREE.SRGBColorSpace;
          loadedTexture.generateMipmaps = true;
          loadedTexture.minFilter = THREE.LinearMipmapLinearFilter;
          setTexture(loadedTexture);
        }
      },
      undefined,
      (err) => {
        console.warn(`Could not load image ${project.image}, using fallback.`, err);
      }
    );

    return () => {
      isMounted = false;
    };
  }, [project.image, project.title]);

  useFrame(() => {
    if (!meshRef.current) return;

    if (isActive) {
      // 1. Hover Tilt & Natural Spring Lerp
      const targetRotX = mousePos.current ? (-mousePos.current.y * Math.PI) / 16 : 0;
      const targetRotY = mousePos.current ? (mousePos.current.x * Math.PI) / 16 : 0;

      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.08);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.08);

      meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, 0, 0.08);
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, 0, 0.08);
      meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, 1, 0.08));
    } else {
      // Transition out active slab into depth
      meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, -3, 0.08);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, 0.5, 0.08);
      meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, 0.7, 0.08));
    }
  });

  return (
    <group ref={meshRef}>
      {/* Main Front Slab Surface */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[3.6, 2.25, 0.12]} />
        <meshPhysicalMaterial
          map={texture}
          roughness={0.2}
          metalness={0.1}
          clearcoat={0.3}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Beveled Glass Backing Frame */}
      <mesh position={[0, 0, -0.07]}>
        <boxGeometry args={[3.7, 2.35, 0.04]} />
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

export default function ProjectObject({ activeProject, mousePos }) {
  return (
    <group position={[0, 0.2, 0]}>
      <ProjectTextureSlab
        key={activeProject.id}
        project={activeProject}
        isActive={true}
        mousePos={mousePos}
      />
    </group>
  );
}
