"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const THEMES = [
  { id: "extravagant", label: "Midnight Monolith", bg: "bg-black", text: "text-rose-500", accent: "border-rose-500" },
  { id: "anime", label: "Neo-Tokyo Loft (Anime)", bg: "bg-indigo-950", text: "text-cyan-400", accent: "border-cyan-400" },
  { id: "manga", label: "Illustrated Estate (Manga)", bg: "bg-white", text: "text-black", accent: "border-black" },
  { id: "luxury", label: "Golden Penthouse", bg: "bg-zinc-900", text: "text-amber-500", accent: "border-amber-500" }
];

export default function Vision() {
  const [activeTheme, setActiveTheme] = useState(THEMES[0]);

  return (
    <motion.div 
      className={cn("min-h-screen pt-40 px-8 pb-32 transition-colors duration-1000", activeTheme.bg, activeTheme.text)}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 h-full items-center">
        <div className="w-full lg:w-1/3 flex flex-col gap-8 z-10 relative">
           <h1 className="text-5xl font-serif">Virtual <br/> Visions.</h1>
           <p className="font-sans uppercase tracking-[0.2em] text-xs opacity-70 leading-loose">
             Experience our properties through custom architectural rendering engines. 
           </p>
           
           <div className="flex flex-col gap-4 mt-8">
             {THEMES.map(t => (
                <button 
                  key={t.id}
                  onClick={() => setActiveTheme(t)}
                  className={cn(
                    "text-left p-6 border transition-all duration-300 font-sans tracking-widest text-xs uppercase",
                    activeTheme.id === t.id ? "bg-current text-black shadow-[0_0_30px_rgba(current,0.2)]" : "border-current/20 hover:border-current"
                  )}
                >
                  {t.label}
                </button>
             ))}
           </div>
        </div>

        <div className="w-full lg:w-2/3 h-[60vh] lg:h-[80vh] relative flex items-center justify-center overflow-hidden border border-current/20">
          {/* Abstract structural visualization mapped to the theme */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTheme.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Spinning/Morphing Architecture shape */}
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                 className={cn("absolute w-[80%] h-[80%] border-[2px] opacity-30", activeTheme.accent)}
                 style={{ borderRadius: activeTheme.id === 'anime' ? '0%' : activeTheme.id === 'luxury' ? '50%' : '10%' }}
               />
               <motion.div
                 animate={{ rotate: -360 }}
                 transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                 className={cn("absolute w-[120%] h-[120%] border-[1px] border-dashed opacity-20", activeTheme.accent)}
                 style={{ borderRadius: activeTheme.id === 'manga' ? '0%' : '50%' }}
               />
               
               <h2 className="text-6xl md:text-8xl font-black mix-blend-difference drop-shadow-2xl uppercase text-center font-serif">
                 {activeTheme.label.split(' ')[0]} <br/> 
                 <span className="font-sans italic font-light opacity-50">{activeTheme.label.split(' ')[1] || 'Vision'}</span>
               </h2>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
