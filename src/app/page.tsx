"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    id: 1,
    title: "ABYSS",
    subtitle: "The Baseline Excellence",
    href: "/tier-1",
    bgClass: "bg-[#EFE8D8] text-[#2E0A10]",
    hoverBg: "bg-[#D0C5B0]", // Premium Minimalist Burgundy Theme
    customHoverEffect: null
  },
  {
    id: 2,
    title: "AURA",
    subtitle: "Luminous Synchronization",
    href: "/tier-2",
    bgClass: "bg-[#F8FAFC] text-[#0F172A]", // Platinum / Ice Blue theme
    hoverBg: "bg-[#E2E8F0]",
    customHoverEffect: (
      // Ice Blue X-Ray Simulation
      <div className="absolute inset-0 z-0 overflow-hidden mix-blend-multiply opacity-50">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(224,242,254,0.8)_0%,transparent_70%)] rounded-full animate-pulse blur-3xl" />
         <div className="absolute w-[200%] h-[200%] bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] [background-size:40px_40px] opacity-20 transform rotate-12 -translate-y-1/4" />
      </div>
    )
  },
  {
    id: 3,
    title: "VISTA",
    subtitle: "MNC Architecture",
    href: "/tier-3",
    bgClass: "bg-black text-white", // Brutalist Manga Red/Black
    hoverBg: "bg-black",
    customHoverEffect: (
      // Manga Slam / Halftone Simulation
      <div className="absolute inset-0 z-0 overflow-hidden">
         <div className="absolute inset-0 opacity-30 mix-blend-screen bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:8px_8px]" />
         <div className="absolute bottom-0 w-full h-[80%] bg-red-600 border-t-8 border-white skew-y-12 transform origin-bottom-left transition-transform duration-700 ease-out translate-y-12 group-hover:translate-y-0" />
      </div>
    )
  },
];

export default function LandingHub() {
  const [hoveredTier, setHoveredTier] = useState<number | null>(null);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-black relative">
      {TIERS.map((tier) => {
        const isHovered = hoveredTier === tier.id;
        const isAnyHovered = hoveredTier !== null;

        return (
          <motion.div
            key={tier.id}
            onMouseEnter={() => setHoveredTier(tier.id)}
            onMouseLeave={() => setHoveredTier(null)}
            animate={{
              flex: isHovered ? 3 : isAnyHovered ? 1 : 2,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 25,
              mass: 0.8,
            }}
            className={cn(
               "group relative flex flex-col items-center justify-center cursor-pointer border-r border-black/10 last:border-0",
               tier.bgClass,
               "overflow-hidden transition-colors duration-700"
            )}
          >
            {/* Base Hover Background Transition */}
            <div className={cn(
              "absolute inset-0 opacity-0 transition-opacity duration-700",
              isHovered && "opacity-100",
              tier.hoverBg
            )} />

            {/* Injected Deep Theme Visuals matching the destination sites exactly */}
            {isHovered && tier.customHoverEffect}

            <div className="relative z-10 flex flex-col items-center text-center p-8 pointer-events-none">
              <motion.h2 
                animate={{
                  scale: isHovered ? 1.2 : 1,
                  y: isHovered ? -10 : 0,
                  skewX: isHovered && tier.id === 3 ? -12 : 0 // Manga skew only for Tier 3
                }}
                className={cn(
                  "text-3xl md:text-5xl font-serif font-black uppercase tracking-widest mb-4 whitespace-nowrap transition-all duration-300",
                  tier.id === 1 ? "text-[#2E0A10]" : 
                  tier.id === 2 ? "text-[#0F172A]" : 
                  "text-transparent bg-clip-text bg-white [-webkit-text-stroke:2px_black] drop-shadow-[5px_5px_0_red] italic" // Specific style mapping for VISTA
                )}
              >
                {tier.title}
              </motion.h2>

              <AnimatePresence>
                {(isHovered || !isAnyHovered) && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={cn(
                      "text-sm md:text-lg font-sans tracking-wide max-w-sm uppercase font-bold",
                      tier.id === 1 ? "text-[#4A0E18]" : 
                      tier.id === 2 ? "text-[#64748B] tracking-[0.3em]" : 
                      "text-white bg-black px-4 py-1"
                    )}
                  >
                    {tier.subtitle}
                  </motion.p>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="mt-12 pointer-events-auto"
                  >
                    <Link href={tier.href}>
                      <button className={cn(
                        "group flex items-center justify-center gap-4 px-10 py-5 font-sans uppercase tracking-[0.3em] text-xs font-bold transition-all duration-300",
                        tier.id === 1 ? "bg-[#2E0A10] text-[#EFE8D8] hover:bg-black rounded-sm" :
                        tier.id === 2 ? "bg-[#0F172A] text-white hover:bg-[#0EA5E9] shadow-2xl rounded-none" :
                        "bg-red-600 border-4 border-black text-black hover:bg-white skew-x-[-15deg] shadow-[5px_5px_0_white]"
                      )}>
                        <span className={tier.id === 3 ? "skew-x-[15deg]" : ""}>Engage Protocol</span>
                        <ArrowRight className={cn("w-4 h-4 group-hover:translate-x-2 transition-transform", tier.id === 3 ? "skew-x-[15deg]" : "")} />
                      </button>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Cross-column dulling overlay */}
            <motion.div 
               animate={{ opacity: isAnyHovered && !isHovered ? 0.5 : 0 }}
               className="absolute inset-0 bg-black mix-blend-overlay pointer-events-none"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
