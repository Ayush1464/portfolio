import * as THREE from 'three';

export default function CharacterEnvironment() {
  const deskMaterial = new THREE.MeshStandardMaterial({
    color: '#0f172a',
    roughness: 0.3,
    metalness: 0.2,
  });

  const wallMaterial = new THREE.MeshStandardMaterial({
    color: '#1e293b',
    roughness: 0.9,
    metalness: 0.05,
  });

  return (
    <group position={[0, -1.2, 0]}>
      {/* Sleek Workspace Desk */}
      <mesh position={[0, 0.58, 0.4]} receiveShadow>
        <boxGeometry args={[2.2, 0.06, 1.0]} />
        <primitive object={deskMaterial} />
      </mesh>

      {/* Desk Leg Supports */}
      <mesh position={[-0.95, 0.28, 0.4]}>
        <boxGeometry args={[0.06, 0.54, 0.9]} />
        <primitive object={deskMaterial} />
      </mesh>
      <mesh position={[0.95, 0.28, 0.4]}>
        <boxGeometry args={[0.06, 0.54, 0.9]} />
        <primitive object={deskMaterial} />
      </mesh>

      {/* Soft Contact Floor Plane */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 12]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </group>
  );
}
