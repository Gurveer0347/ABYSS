"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Tier3() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Z-Axis Depth Scaling
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const opacityImage = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  const rotateXText = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const zText = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const ySlamText = useTransform(scrollYProgress, [0, 0.5], [0, -300]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-black perspective-[1000px] overflow-hidden">
      
      {/* 
        Sticky viewport container doing the heavily requested Persona / Manga 
        aggressive Z-axis slam and halftone overlays!
      */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden [transform-style:preserve-3d]">
        
        {/* Halftone / Manga Dotted Overlay */}
        <div className="absolute inset-0 z-50 pointer-events-none opacity-20 mix-blend-screen bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:8px_8px]" />

        {/* Deep Background Z-Layer (The Estate) */}
        <motion.div 
          style={{ scale: scaleImage, opacity: opacityImage }}
          className="absolute inset-0 w-full h-full flex items-center justify-center transform-gpu"
        >
           {/* Brutalist structural placeholder mimicking extreme perspective */}
           <div className="w-[80vw] h-[60vh] bg-red-600 skew-x-[-15deg] shadow-[0_0_100px_rgba(220,38,38,0.4)] flex items-center justify-center overflow-hidden border-8 border-black">
              <div className="w-[120%] h-full bg-white opacity-10 skew-x-[30deg] translate-x-12" />
           </div>
        </motion.div>

        {/* Foreground Manga-Style Typography Slam Layer */}
        <motion.div 
          style={{ rotateX: rotateXText, z: zText, y: ySlamText }}
          className="relative z-40 flex flex-col items-center pointer-events-none transform-gpu"
        >
          <div className="relative">
            <h1 className="text-[15vw] leading-none font-black text-transparent bg-clip-text bg-white [-webkit-text-stroke:4px_black] uppercase italic drop-shadow-[15px_15px_0_rgba(220,38,38,1)] transform -skew-x-12">
              VISTA
            </h1>
            <div className="absolute top-1/2 left-0 w-[120%] h-4 bg-black -rotate-6 transform -translate-y-1/2 mix-blend-overlay" />
          </div>
          
          <div className="mt-8 bg-black text-white px-8 py-2 border-4 border-red-600 font-bold uppercase tracking-[0.5em] transform skew-x-12 text-2xl">
            Unleashed Depth
          </div>
        </motion.div>

        {/* Aggressive Masking Wipe Layer (revealed via scroll) */}
        <motion.div
           style={{ 
             clipPath: useTransform(scrollYProgress, [0.3, 0.8], ["polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", "polygon(0% 0%, 100% -50%, 100% 100%, 0% 100%)"])
           }}
           className="absolute inset-0 bg-white z-40 flex flex-col items-center justify-center transform-gpu"
        >
           <h2 className="text-8xl font-black text-black uppercase italic -skew-x-12 mb-12">
              The Reality Shift.
           </h2>
           <Link href="/tier-3/vision" className="pointer-events-auto">
             <button className="flex items-center gap-4 bg-red-600 text-white px-12 py-6 text-2xl font-bold uppercase tracking-widest skew-x-[-15deg] hover:scale-110 hover:bg-black transition-all">
               <span className="skew-x-[15deg]">Enter Vision Mode</span> 
               <ArrowRight className="w-8 h-8 skew-x-[15deg]" />
             </button>
           </Link>
        </motion.div>

      </div>
      {/* Expanded CEO Polish: Heritage & Dominance Section */}
      <section className="bg-black relative z-50 text-white pb-64 overflow-hidden border-t-8 border-red-600 border-dashed">
         
         {/* Halftone / Manga Dotted Overlay */}
         <div className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-screen bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:8px_8px] z-0" />
         
         {/* Huge scrolling marquee */}
         <div className="flex overflow-hidden whitespace-nowrap bg-red-600 py-4 transform -skew-y-3 my-32">
            <motion.div 
               animate={{ x: ["0%", "-50%"] }} 
               transition={{ duration: 20, ease: "linear", repeat: Infinity }}
               className="flex whitespace-nowrap text-4xl md:text-6xl font-black italic uppercase tracking-widest text-black"
            >
               <span>/// ACQUIRING MASTERPIECES /// DOMINATING THE SKYLINE /// DEFINING LUXURY /// FORGING THE FUTURE</span>
               <span className="ml-8">/// ACQUIRING MASTERPIECES /// DOMINATING THE SKYLINE /// DEFINING LUXURY /// FORGING THE FUTURE</span>
            </motion.div>
         </div>

         <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-32 relative z-10">
            <div>
               <h3 className="text-white bg-black border-4 border-red-600 px-6 py-2 inline-block font-black tracking-[0.5em] text-sm transform skew-x-12 mb-12">
                 CORPORATE HERITAGE
               </h3>
               <h2 className="text-6xl md:text-8xl font-black italic uppercase text-transparent [-webkit-text-stroke:2px_white] drop-shadow-[5px_5px_0_red] mb-12 -skew-x-6 leading-none">
                 Global <br/> Domi<br className="md:hidden"/>nance.
               </h2>
               <p className="text-xl leading-loose font-bold tracking-widest uppercase opacity-80 border-l-4 border-red-600 pl-8">
                 VISTA was not founded to compete. We were established to monopolize the absolute peak of brutalist luxury. We command over $4.2 Billion in managed architectural assets globally. When foreign syndicates require off-market sanctuaries, they contact VISTA.
               </p>
            </div>
            
            <div className="relative flex flex-col justify-center">
               <div className="absolute w-full h-[120%] bg-red-900 border-8 border-x-white border-y-transparent skew-x-12 border-dashed opacity-50 z-0 mix-blend-screen" />
               <div className="relative z-10 grid grid-cols-2 gap-8 text-center uppercase">
                  <div className="bg-black border-4 border-red-600 p-8 transform -skew-x-12 hover:scale-105 transition-transform hover:bg-white hover:text-black hover:border-black cursor-crosshair">
                     <h4 className="text-5xl font-black italic mb-2">142</h4>
                     <p className="text-xs tracking-[0.3em] font-bold">Monolithic Estates</p>
                  </div>
                  <div className="bg-black border-4 border-red-600 p-8 transform skew-x-12 hover:scale-105 transition-transform hover:bg-white hover:text-black hover:border-black cursor-crosshair">
                     <h4 className="text-5xl font-black italic mb-2">$4B+</h4>
                     <p className="text-xs tracking-[0.3em] font-bold">Asset Volume</p>
                  </div>
                  <div className="bg-black border-4 border-white p-8 transform skew-x-[20deg] col-span-2 group hover:bg-red-600 hover:border-red-600 transition-colors cursor-crosshair mt-8">
                     <h4 className="text-4xl font-black italic mb-2 group-hover:text-black">Zero Compromise</h4>
                     <p className="text-[10px] tracking-[0.5em] font-black mix-blend-difference">Our architecture breaks the laws of physics, not the law of aesthetics.</p>
                  </div>
               </div>
            </div>
         </div>
         
      </section>
    </div>
  );
}
