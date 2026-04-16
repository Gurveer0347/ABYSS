"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Tier2() {
  // Logic for the requested Reel 2 X-Ray Cursor mechanism
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate mouse relative to container
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div className="w-full bg-[#F8FAFC]">
      {/* 
        HERO SECTION: Luminous Platinum watch with X-Ray cursor masking effect.
        Matches User's Reel #2 request closely.
      */}
      <section 
        ref={containerRef} 
        className="relative h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Layer 1: The standard visible luxury watch image (Base Layer) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-90 scale-[0.8] md:scale-100 mix-blend-multiply">
           <img src="/assets/watch.png" alt="AURA Platinum Watch" className="w-full h-full object-contain pointer-events-none drop-shadow-2xl" />
        </div>

        {/* Text Behind Mask */}
        <div className="absolute z-10 top-[20%] w-full text-center pointer-events-none mix-blend-overlay">
           <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16,1,0.3,1] }}
              className="text-[12vw] font-serif tracking-widest text-[#94A3B8] uppercase opacity-40 font-black"
           >
             PLATINUM
           </motion.h1>
        </div>

        {/* Layer 2: The "X-Ray" View revealed purely by the cursor (Top Layer) */}
        <div 
           className="absolute inset-0 flex items-center justify-center scale-[0.8] md:scale-100 pointer-events-none z-20"
           style={{
             // The magic mask from the Reel! Only shows image in a 150px circle around cursor
             WebkitMaskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 40%, transparent 100%)`,
             maskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 40%, transparent 100%)`
           }}
        >
           {/* The X-Ray image representation (inverted, hue-shifted to simulate blue mechanical calibers) */}
           <img 
              src="/assets/watch.png" 
              alt="AURA Mechanics X-Ray" 
              className="w-full h-full object-contain filter invert sepia saturate-[3] hue-rotate-180 brightness-[0.8] contrast-150 drop-shadow-[0_0_50px_rgba(224,242,254,1)] scale-[1.05] transition-transform duration-1000 ease-out" 
           />
           {/* Interactive lighting ring around cursor */}
           <div 
             className="absolute w-[400px] h-[400px] rounded-full border border-[#0EA5E9]/30 shadow-[inset_0_0_100px_rgba(14,165,233,0.2)]"
             style={{ left: mousePos.x - 200, top: mousePos.y - 200 }}
           />
        </div>

        {/* UI Elements overlaid */}
        <div className="absolute bottom-12 w-full px-12 flex justify-between items-end z-30 pointer-events-none">
           <div className="text-left">
             <div className="text-[10px] tracking-[0.4em] font-sans text-[#64748B] mb-2 font-bold uppercase">The Movement</div>
             <div className="text-2xl font-serif text-[#0F172A]">Calibre Ice-O</div>
             <p className="font-sans text-xs text-[#64748B] max-w-xs mt-2 leading-relaxed">
               Hover to engage the spatial X-Ray matrix, revealing the internal zero-gravity escapement.
             </p>
           </div>
           <Link href="/tier-2/collection" className="pointer-events-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 bg-[#0F172A] text-white px-8 py-4 rounded-none text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-[#0284C7] transition-colors"
              >
                Enter the Collection <MoveRight className="w-4 h-4"/>
              </motion.button>
           </Link>
        </div>
      </section>
    </div>
  );
}
