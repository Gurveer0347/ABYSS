"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TIMELINE = [
  { year: "1884", title: "The Genesis", desc: "AURA is established in a small cabin in the Swiss Alps, producing only three highly complex marine chronometers in its first year." },
  { year: "1932", title: "Conquering The Sky", desc: "The Aviator 01 is commissioned by trans-Atlantic pilots looking for magnetic-resistant precision." },
  { year: "1965", title: "Depths of the Abyss", desc: "The initial Deep Diver withstands pressure at 500 meters, remaining completely intact and accurate during naval testing." },
  { year: "2026", title: "The Obsidian Era", desc: "Introduction of the zero-gravity simulation chamber, pushing AURA into an untouched echelon of mechanical precision." },
];

export default function Heritage() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (lineRef.current) {
      gsap.to(lineRef.current, {
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        height: "100%",
        ease: "none",
      });
    }
  }, []);

  return (
    <div className="pt-32 pb-40 px-8 min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif text-champagne mb-6"
        >
          OUR HERITAGE
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-neutral-400 font-light tracking-wide text-lg"
        >
          A century of defying limits.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto relative timeline-container py-12">
        {/* Animated Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 w-[1px] h-full bg-champagne/10 transform md:-translate-x-1/2">
           <div ref={lineRef} className="w-full h-0 bg-champagne" />
        </div>

        {TIMELINE.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              key={item.year}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className={`relative flex items-center mb-32 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
            >
               {/* Dot */}
               <div className="absolute left-[16px] md:left-1/2 transform -translate-x-[50%] w-2 h-2 bg-obsidian border-2 border-champagne rounded-full z-10 shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
               
               <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                 <div className="text-4xl md:text-6xl font-serif text-champagne/30 mb-4">{item.year}</div>
                 <h3 className="text-2xl font-serif text-white mb-4">{item.title}</h3>
                 <p className="text-neutral-400 font-light leading-relaxed">{item.desc}</p>
               </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
