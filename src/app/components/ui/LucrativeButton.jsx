import React, { useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";

const LucrativeButton = ({ onClick, label = "Explore My Work" }) => {
  const iconRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Move the soft background glow
    if (glowRef.current) {
      glowRef.current.style.left = `${x}px`;
      glowRef.current.style.top = `${y}px`;
    }

    // Move the floating Zap icon (Magnetic effect)
    if (iconRef.current) {
      iconRef.current.style.left = `${x}px`;
      iconRef.current.style.top = `${y}px`;
    }
  };

  return (
    <button
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className="group relative overflow-hidden px-10 py-5 rounded-2xl bg-slate-950 text-white font-bold border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/50 hover:shadow-[0_0_50px_rgba(168,85,247,0.25)]"
    >
      {/* 1. LAYERED BACKGROUND GRADIENT */}
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,255,0.15),transparent_70%)]" />
      
      {/* 2. FOLLOWING GLOW LAYER */}
      <span 
        ref={glowRef}
        className="pointer-events-none absolute w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-1/2 -translate-y-1/2"
      />

      {/* 3. THE FLOATING ICON (The "Lucrative" Part) */}
      <span 
        ref={iconRef}
        className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition-all duration-150 ease-out -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-cyan-500/20 blur-xl rounded-full animate-pulse" />
          <Zap className="w-6 h-6 text-cyan-400 fill-cyan-400/30 drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
        </div>
      </span>

      {/* 4. BUTTON CONTENT */}
      <span className="relative z-30 flex items-center gap-4">
        <span className="tracking-[0.15em] uppercase text-xs font-black italic">
          {label}
        </span>
        <div className="h-8 w-[1px] bg-white/10 group-hover:bg-purple-500/50 transition-colors mx-1" />
        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 text-purple-400" />
      </span>

      {/* 5. GLOSSY FINISH */}
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
    </button>
  );
};

export default LucrativeButton;