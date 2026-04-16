"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Tier3Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-red-600 selection:text-white font-sans overflow-x-hidden relative">
      {/* Global Manga Halftone Overlay applied everywhere */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 mix-blend-screen bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:8px_8px]" />

      <nav className="fixed top-0 w-full z-50 flex items-center justify-between p-8 mix-blend-difference text-white">
        <Link href="/" className="flex items-center gap-2 hover:text-red-500 transition-colors font-black tracking-[0.5em] uppercase text-xs skew-x-[-15deg] bg-white text-black px-4 py-2 pointer-events-auto">
          <ArrowLeft className="w-4 h-4" /> HUB EXIT
        </Link>
        
        <div className="absolute left-1/2 -translate-x-1/2 font-black text-4xl italic tracking-[0.4em] [-webkit-text-stroke:1px_white] text-transparent drop-shadow-[5px_5px_0_red] z-50">
          <Link href="/tier-3" className="pointer-events-auto hover:drop-shadow-[5px_5px_0_white] transition-all">VISTA</Link>
        </div>

        <button 
          onClick={() => setIsMenuOpen(true)}
          className="hover:scale-110 transition-transform uppercase tracking-[0.5em] text-xs font-black flex items-center gap-2 bg-red-600 px-6 py-2 skew-x-12 pointer-events-auto shadow-[5px_5px_0_white]"
        >
          <span className="-skew-x-12">SYSTEM</span> <Menu className="w-4 h-4 -skew-x-12" />
        </button>
      </nav>

      {/* Fullscreen Aggressive Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
            animate={{ opacity: 1, clipPath: "polygon(0% 0%, 100% -50%, 100% 100%, 0% 100%)" }}
            exit={{ opacity: 0, clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-red-600 text-black flex flex-col justify-center items-center pointer-events-auto"
          >
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply bg-[radial-gradient(circle,black_2px,transparent_2px)] [background-size:12px_12px] pointer-events-none" />

            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 uppercase tracking-[0.5em] text-xs font-black flex items-center gap-2 hover:scale-110 transition-transform bg-black text-white px-6 py-2 skew-x-[-15deg] shadow-[5px_5px_0_white] z-10"
            >
              <span className="skew-x-[15deg]">TERMINATE</span> <X className="w-5 h-5 skew-x-[15deg]" />
            </button>

            <div className="flex flex-col text-center space-y-12 font-black text-6xl md:text-8xl tracking-widest uppercase italic z-10">
               <motion.div whileHover={{ scale: 1.1, x: 20 }}>
                 <Link href="/tier-3" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors [-webkit-text-stroke:2px_black]">THE REALITY</Link>
               </motion.div>
               <motion.div whileHover={{ scale: 1.1, x: -20 }}>
                 <Link href="/tier-3/properties" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors [-webkit-text-stroke:2px_black]">PORTFOLIO</Link>
               </motion.div>
               <motion.div whileHover={{ scale: 1.1, x: 20 }}>
                 <Link href="/tier-3/vision" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors [-webkit-text-stroke:2px_black]">VISION OVERRIDE</Link>
               </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">{children}</main>
    </div>
  );
}
