import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, GitBranch, ArrowUpRight, Monitor, Smartphone, Cpu } from 'lucide-react';

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const projects = [
    {
      title: 'Opiglo Platform',
      category: 'Enterprise SaaS',
      description: 'Architecting a high-performance ecosystem with real-time analytics and distributed API management.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
      tags: ['React', 'Django', 'PostgreSQL'],
      color: 'from-blue-500/20',
      icon: <Monitor className="w-5 h-5" />
    },
    {
      title: 'WaveIQ Learning',
      category: 'EdTech Engine',
      description: 'A revolutionary learning interface featuring adaptive content delivery and neural-pathway tracking.',
      image: 'https://images.unsplash.com/photo-1584697964403-1c0d5c8f8f1b',
      tags: ['TypeScript', 'Node.js', 'WebSockets'],
      color: 'from-purple-500/20',
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: 'Bricks4Kidz',
      category: 'Creative Hub',
      description: 'Gamified educational portal built for high engagement and sub-second interaction latency.',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350',
      tags: ['Next.js', 'Framer', 'GSAP'],
      color: 'from-rose-500/20',
      icon: <Smartphone className="w-5 h-5" />
    }
  ];

  return (
    <section id="projects" ref={containerRef} className="py-40 px-6 bg-[#030712] relative overflow-hidden">
      {/* --- AMBIENT NOISE TEXTURE --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="max-w-7xl mx-auto relative">
        <header className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-3 text-blue-500 font-mono text-sm mb-4">
              <span className="w-8 h-[1px] bg-blue-500"></span> 02. PORTFOLIO
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              DIGITAL <br /><span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>INNOVATIONS</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-[300px] text-sm uppercase tracking-widest leading-loose">
            Pushing the boundaries of modern web architecture and user interaction.
          </p>
        </header>

        {/* --- DYNAMIC PROJECT LIST --- */}
        <div className="flex flex-col gap-40">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative grid lg:grid-cols-12 gap-12 items-center"
    >
      {/* Image Side (8 Cols) */}
      <div className={`lg:col-span-7 relative ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
        <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-gray-900 border border-white/5">
          {/* Spotlight Effect */}
          <div 
            className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 40%)`
            }}
          />
          <img 
            src={project.image} 
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-out opacity-60 group-hover:opacity-100" 
            alt={project.title} 
          />
          
          {/* Category Tag (Floating) */}
          <div className="absolute top-6 left-6 z-20">
            <span className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold tracking-widest uppercase flex items-center gap-2">
              {project.icon} {project.category}
            </span>
          </div>
        </div>
      </div>

      {/* Content Side (5 Cols) */}
      <div className="lg:col-span-5 flex flex-col items-start px-4">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:translate-x-2 transition-transform duration-500">
          {project.title}
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map(tag => (
            <span key={tag} className="text-[11px] font-mono text-blue-400/80 border border-blue-400/20 px-3 py-1 rounded-md bg-blue-400/5">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 text-white font-bold group/link">
            VIEW CASE STUDY 
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/link:bg-white group-hover/link:text-black transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            <GitBranch className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Background Number (Decorative) */}
      <span className="absolute -bottom-10 -right-4 text-[15rem] font-black text-white/[0.02] pointer-events-none select-none">
        0{index + 1}
      </span>
    </motion.div>
  );
}