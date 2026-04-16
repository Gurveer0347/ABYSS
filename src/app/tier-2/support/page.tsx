"use client";

import { motion } from "framer-motion";
import { MessageCircle, PenTool, ShieldAlert } from "lucide-react";

export default function Support() {
  return (
    <div className="pt-32 px-8 min-h-screen bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-serif text-[#0F172A] mb-4">Client Care</h1>
        <p className="text-[#64748B] tracking-[0.2em] text-xs uppercase mb-16">Uncompromising service.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-white p-8 border border-[#E2E8F0] shadow-xl hover:shadow-2xl transition-shadow cursor-pointer">
              <ShieldAlert className="w-8 h-8 text-[#0EA5E9] mb-6" />
              <h3 className="text-xl font-serif text-[#0F172A] mb-2">Register Authenticity</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">Ensure your timepiece is recorded in the immutable AURA vault.</p>
           </div>
           <div className="bg-white p-8 border border-[#E2E8F0] shadow-xl hover:shadow-2xl transition-shadow cursor-pointer">
              <PenTool className="w-8 h-8 text-[#0EA5E9] mb-6" />
              <h3 className="text-xl font-serif text-[#0F172A] mb-2">Service Request</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">Schedule a specialized courier to retrieve your watch for maintenance.</p>
           </div>
           <div className="bg-white p-8 border border-[#E2E8F0] shadow-xl hover:shadow-2xl transition-shadow cursor-pointer">
              <MessageCircle className="w-8 h-8 text-[#0EA5E9] mb-6" />
              <h3 className="text-xl font-serif text-[#0F172A] mb-2">Concierge</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">Speak directly with a master horologist in Geneva.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
