"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { MapPin } from "lucide-react";

function BoutiquesContent() {
  const params = useSearchParams();
  const loc = params.get("loc");

  return (
    <div className="pt-32 px-8 min-h-screen bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-serif text-[#0F172A] mb-4">AURA Boutiques</h1>
        <p className="text-[#64748B] tracking-[0.2em] text-xs uppercase mb-16">
          Global access point: {loc ? loc.toUpperCase() : "Select a location"}
        </p>

        <div className="w-full h-[60vh] bg-[#E2E8F0] flex flex-col items-center justify-center border border-white shadow-2xl relative overflow-hidden group cursor-pointer pointer-events-auto">
          {/* Mock Map View */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-multiply group-hover:scale-105 transition-transform duration-1000 blur-[2px]" />
          
          <div className="bg-white/90 backdrop-blur-md p-8 text-center relative z-10 shadow-2xl">
             <MapPin className="w-8 h-8 text-[#0EA5E9] mx-auto mb-4 animate-bounce" />
             <h2 className="text-2xl font-serif text-[#0F172A] mb-2">{loc === "geneva" ? "Rue du Rhône 10" : loc === "london" ? "New Bond Street" : loc === "ny" ? "5th Avenue" : "AURA Flagship"}</h2>
             <p className="font-sans tracking-widest uppercase text-xs text-[#64748B] hover:text-[#0EA5E9] transition-colors">Book Private Appointment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Boutiques() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8FAFC]" />}>
      <BoutiquesContent />
    </Suspense>
  );
}
