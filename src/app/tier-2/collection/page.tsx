"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

// Tailor generated imagery bypassing the API bottleneck via CSS distinct hues.
const WATCHES = [
  { id: 1, name: "The Ice Platinum", price: "$124,000", metal: "Platinum 950", caliber: "Ice-O", src: "/assets/watch.png", css: "" },
  { id: 2, name: "Luminous White", price: "$89,500", metal: "White Gold", caliber: "102-C", src: "/assets/watch2.png", css: "" },
  { id: 3, name: "Deep Frost", price: "$95,000", metal: "Titanium", caliber: "105-X", src: "/assets/watch.png", css: "grayscale contrast-125 brightness-75" },
  { id: 4, name: "Rose Frost", price: "$240,000", metal: "18K Rose Gold", caliber: "110-T", src: "/assets/watch2.png", css: "sepia-[0.3] hue-rotate-[-30deg] saturate-[1.5]" },
];

export default function Collection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const router = useRouter();
  const watch = WATCHES.find(w => w.id === selectedId);

  return (
    <div className="pt-32 pb-24 px-8 min-h-screen relative bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence>
          {!selectedId && (
            <motion.header 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
               className="mb-20 text-center"
            >
               <h1 className="text-5xl md:text-7xl font-serif text-[#0F172A] mb-6 tracking-tight">
                 THE LUMINOUS COLLECTION
               </h1>
               <p className="text-[#64748B] max-w-xl mx-auto font-sans tracking-[0.2em] uppercase text-xs">
                 Select a timepiece to engage.
               </p>
            </motion.header>
          )}
        </AnimatePresence>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 relative z-10 pointer-events-auto">
          {WATCHES.map((w) => (
            <motion.div 
              key={w.id}
              layoutId={`card-container-${w.id}`}
              onClick={() => setSelectedId(w.id)}
              className="cursor-pointer group relative flex flex-col pointer-events-auto"
            >
              <motion.div 
                layoutId={`image-container-${w.id}`}
                className="aspect-square bg-gradient-to-tr from-[#E2E8F0] to-white rounded-3xl mb-8 flex items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(226,232,240,0.5)] group-hover:shadow-[0_30px_60px_rgba(226,232,240,0.8)] transition-shadow duration-500"
              >
                  <motion.img 
                    layoutId={`image-${w.id}`}
                    src={w.src} 
                    alt={w.name} 
                    className={`w-[120%] h-[120%] object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] mix-blend-multiply ${w.css}`} 
                  />
              </motion.div>
              
              <div className="flex justify-between items-end px-4">
                <motion.div layoutId={`text-container-${w.id}`}>
                  <h3 className="text-3xl font-serif text-[#0F172A] mb-2">{w.name}</h3>
                  <div className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#64748B]">{w.metal}</div>
                </motion.div>
                <motion.div layoutId={`price-${w.id}`} className="text-sm font-sans font-medium text-[#0F172A]">
                  {w.price}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && watch && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-2xl px-8 py-20 overflow-y-auto"
          >
            <button 
              onClick={() => setSelectedId(null)}
              className="fixed top-8 left-8 flex items-center gap-2 text-sm font-sans font-bold uppercase tracking-widest text-[#0F172A] hover:text-[#0EA5E9] transition-colors z-50 bg-white/50 px-6 py-3 rounded-full backdrop-blur-md pointer-events-auto cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" /> Back to Grid
            </button>

            <motion.div 
              layoutId={`card-container-${watch.id}`}
              className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-16 pointer-events-auto"
            >
              <motion.div 
                layoutId={`image-container-${watch.id}`}
                className="w-full lg:w-1/2 aspect-[4/5] flex items-center justify-center relative overflow-hidden rounded-3xl"
              >
                 <motion.img 
                   layoutId={`image-${watch.id}`}
                   src={watch.src} 
                   className={`w-[120%] h-[120%] object-cover z-10 ${watch.css}`} 
                 />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                 <motion.div layoutId={`text-container-${watch.id}`}>
                   <h2 className="text-6xl md:text-8xl font-serif text-[#0F172A] mb-4 leading-none">{watch.name}</h2>
                   <div className="text-xs font-sans font-bold uppercase tracking-[0.4em] text-[#0EA5E9] mb-8 flex gap-4 items-center">
                     <span>{watch.metal}</span> • <span>{watch.caliber}</span>
                   </div>
                 </motion.div>
                 
                 <p className="text-lg text-[#64748B] font-light leading-loose mb-12 max-w-lg">
                   Every AURA timepiece leverages a zero-gravity escapement, virtually eliminating friction. Absolute luminous perfection achieved through micro-engineering. This specific asset stream leverages high-end unique imagery globally.
                 </p>
                 
                 <div className="flex items-center gap-8">
                   <motion.div layoutId={`price-${watch.id}`} className="text-3xl font-serif text-[#0F172A]">
                     {watch.price}
                   </motion.div>
                   <button 
                     onClick={() => router.push(`/tier-2/checkout?item=${watch.id}`)}
                     className="bg-[#0F172A] text-white px-10 py-5 font-sans font-bold text-xs uppercase tracking-widest hover:bg-[#0EA5E9] transition-colors shadow-2xl flex items-center gap-3 cursor-pointer pointer-events-auto"
                   >
                     Acquire <ArrowUpRight className="w-4 h-4" />
                   </button>
                 </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
