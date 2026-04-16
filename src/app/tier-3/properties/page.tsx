"use client";

import { motion } from "framer-motion";

const PROPERTIES = [
  { id: 1, name: "The Monolith", location: "Tokyo, Japan", price: "$45M", specs: "12,000 SQFT", src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop" },
  { id: 2, name: "Skyline Zero", location: "Neo Reykjavik", price: "$82M", specs: "9,500 SQFT", src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop" },
  { id: 3, name: "Brutalist Coast", location: "Pacific Rim", price: "$32M", specs: "8,000 SQFT", src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop" },
];

export default function Properties() {
  return (
    <div className="min-h-screen pt-40 px-8 pb-32">
       <div className="max-w-7xl mx-auto">
          
          <header className="mb-32 flex flex-col items-start gap-4">
            <motion.h1 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-7xl md:text-9xl font-black italic uppercase text-transparent [-webkit-text-stroke:3px_white] drop-shadow-[10px_10px_0_red] -skew-x-12"
            >
              PORTFOLIO
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-4 bg-red-600 block w-full max-w-2xl skew-x-[30deg]"
            />
          </header>

          <div className="flex flex-col gap-40">
            {PROPERTIES.map((prop, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={prop.id}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`group cursor-pointer flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center relative pointer-events-auto`}
                >
                  {/* Aggressive Image Container skewing */}
                  <div className="w-full md:w-[70%] aspect-[16/9] bg-red-900 border-8 border-white p-2 transform -skew-x-6 hover:skew-x-0 transition-transform duration-700 relative overflow-hidden group">
                     {/* The unique Real Estate unspash image */}
                     <motion.img 
                       src={prop.src} 
                       className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                     />
                     <div className="absolute top-0 right-0 bg-red-600 text-white font-black text-2xl p-4 skew-x-12 transform origin-top-right">
                       /// ASSET {prop.id} ///
                     </div>
                  </div>
                  
                  <div className={`w-full md:w-[40%] flex flex-col ${isEven ? 'items-start text-left' : 'items-end text-right'} z-10 md:-ml-24 md:mr-0`}>
                    <div className="bg-white text-black px-6 py-2 font-black uppercase tracking-[0.5em] text-sm transform skew-x-12 mb-4">
                      {prop.location}
                    </div>
                    <h3 className="text-5xl md:text-7xl font-black italic uppercase [-webkit-text-stroke:2px_white] text-transparent drop-shadow-[5px_5px_0_red] mb-6 whitespace-nowrap">
                      {prop.name}
                    </h3>
                    <div className="flex flex-col gap-2 font-black text-xl tracking-widest text-white uppercase bg-black/80 backdrop-blur border-l-4 border-red-600 p-6">
                      <span className="text-red-500">{prop.specs}</span>
                      <span className="text-4xl mt-2">{prop.price}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
       </div>
    </div>
  );
}
