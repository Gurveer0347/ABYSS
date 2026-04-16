"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { Lock, ShieldCheck, Watch } from "lucide-react";

function CheckoutContent() {
  const params = useSearchParams();
  const itemId = params.get("item");

  return (
    <div className="pt-40 px-8 min-h-screen bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-[0_20px_50px_rgba(226,232,240,0.5)] flex flex-col md:flex-row gap-16 border border-[#E2E8F0]">
         <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-serif text-[#0F172A] mb-8">Secure Checkout</h1>
            
            <form className="space-y-6 pointer-events-auto">
               <div>
                 <label className="text-xs uppercase tracking-[0.2em] text-[#64748B] font-bold">Full Name</label>
                 <input type="text" className="w-full mt-2 border-b border-[#E2E8F0] bg-transparent py-2 focus:outline-none focus:border-[#0EA5E9] transition-colors" placeholder="Arthur Pendragon" />
               </div>
               <div>
                 <label className="text-xs uppercase tracking-[0.2em] text-[#64748B] font-bold">Shipping Address (Fully Insured)</label>
                 <input type="text" className="w-full mt-2 border-b border-[#E2E8F0] bg-transparent py-2 focus:outline-none focus:border-[#0EA5E9] transition-colors" placeholder="123 Luminous Ave, Geneva" />
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="text-xs uppercase tracking-[0.2em] text-[#64748B] font-bold">Card</label>
                   <input type="text" className="w-full mt-2 border-b border-[#E2E8F0] bg-transparent py-2 focus:outline-none focus:border-[#0EA5E9] transition-colors" placeholder="**** **** **** 4242" />
                 </div>
                 <div>
                   <label className="text-xs uppercase tracking-[0.2em] text-[#64748B] font-bold">CVC</label>
                   <input type="text" className="w-full mt-2 border-b border-[#E2E8F0] bg-transparent py-2 focus:outline-none focus:border-[#0EA5E9] transition-colors" placeholder="***" />
                 </div>
               </div>

               <button type="button" className="w-full bg-[#0F172A] text-white py-4 mt-8 uppercase tracking-widest text-xs font-bold hover:bg-[#0EA5E9] transition-colors flex justify-center items-center gap-2 cursor-pointer transition-transform active:scale-95 shadow-xl">
                 <Lock className="w-4 h-4"/> Confirm Purchase
               </button>
            </form>
         </div>

         <div className="w-full md:w-1/2 bg-[#F1F5F9] rounded-2xl p-8 flex flex-col justify-between">
            <div>
               <h3 className="text-sm font-sans uppercase tracking-[0.2em] text-[#64748B] font-bold mb-6">Order Summary</h3>
               <div className="flex items-center gap-4 mb-8">
                 <div className="w-16 h-16 bg-white border border-[#E2E8F0] rounded-xl flex items-center justify-center p-2">
                    <Watch className="w-8 h-8 text-[#0EA5E9]" />
                 </div>
                 <div>
                    <div className="font-serif text-lg text-[#0F172A]">AURA Timepiece {itemId ? `#${itemId}` : "Selection"}</div>
                    <div className="text-xs text-[#64748B]">Bespoke Packaging</div>
                 </div>
               </div>
               <div className="flex justify-between border-t border-[#E2E8F0] pt-4 mb-2">
                 <span className="text-[#64748B]">Subtotal</span>
                 <span className="text-[#0F172A] font-serif">TBD</span>
               </div>
               <div className="flex justify-between mb-2">
                 <span className="text-[#64748B]">Insured Shipping</span>
                 <span className="text-[#0EA5E9] uppercase text-xs tracking-widest">Complimentary</span>
               </div>
            </div>

            <div className="flex items-center gap-4 text-[#64748B] text-xs pt-8 border-t border-[#E2E8F0]">
               <ShieldCheck className="w-6 h-6 text-[#0EA5E9]" />
               Every order is dispatched via armored courier with full insurance liability assumed by AURA Maison.
            </div>
         </div>
      </div>
    </div>
  );
}

export default function Checkout() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8FAFC]" />}>
      <CheckoutContent />
    </Suspense>
  );
}
