import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Code2, Cpu, Sparkles, Layers } from 'lucide-react';

export default function FloatingGlassPanels() {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.15;
    }
  });

  const cards = [
    {
      pos: [-2.2, 1.4, 0.5],
      icon: <Code2 className="w-4 h-4 text-blue-400" />,
      label: 'React & Next.js',
      sub: 'Component Architecture',
    },
    {
      pos: [2.2, 1.1, -0.2],
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      label: 'High Performance',
      sub: 'Sub-second Latency',
    },
    {
      pos: [-1.8, -1.5, 0.8],
      icon: <Sparkles className="w-4 h-4 text-pink-400" />,
      label: 'Interactive 3D UI',
      sub: 'R3F & Motion Design',
    },
    {
      pos: [2.0, -1.3, 0.3],
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      label: 'Modern Stack',
      sub: 'Tailwind & TypeScript',
    },
  ];

  return (
    <group ref={groupRef}>
      {cards.map((card, idx) => (
        <mesh key={idx} position={card.pos}>
          <Html transform distanceFactor={5.5} center>
            <div className="px-4 py-3 rounded-2xl bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-xl border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.3)] text-white flex items-center gap-3 select-none pointer-events-none min-w-[170px]">
              <div className="p-2 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                {card.icon}
              </div>
              <div>
                <div className="text-xs font-bold tracking-wide whitespace-nowrap">{card.label}</div>
                <div className="text-[10px] text-gray-400 whitespace-nowrap">{card.sub}</div>
              </div>
            </div>
          </Html>
        </mesh>
      ))}
    </group>
  );
}
