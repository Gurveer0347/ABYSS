import Link from "next/link";
import { ArrowLeft, MapPin, Phone } from "lucide-react";
import { CustomCursor } from "@/components/layout/CustomCursor";

export default function Tier2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-[#0F172A] selection:bg-[#E0F2FE] selection:text-[#0F172A] cursor-none overflow-x-hidden pt-20 flex flex-col">
      <CustomCursor />
      <Navbar />
      <main className="relative flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-5 border-b border-[#E2E8F0] bg-white/80 backdrop-blur-xl">
      <div className="flex gap-8 items-center text-[10px] tracking-[0.3em] uppercase font-sans font-semibold text-[#64748B]">
        <Link href="/" className="flex items-center gap-2 hover:text-[#0F172A] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Hub
        </Link>
        <Link href="/tier-2/collection" className="hover:text-[#0F172A] transition-colors">Timepieces</Link>
        <Link href="/tier-2/heritage" className="hover:text-[#0F172A] transition-colors">Maison</Link>
      </div>
      
      <div className="absolute left-1/2 -translate-x-1/2 text-3xl font-serif tracking-[0.4em] font-medium text-[#0F172A] z-50">
        <Link href="/tier-2" className="hover:text-[#0EA5E9] transition-colors">AURA</Link>
      </div>

      <div className="flex gap-8 items-center text-[10px] tracking-[0.3em] uppercase font-sans font-semibold text-[#64748B]">
        <Link href="/tier-2/boutiques" className="hover:text-[#0F172A] transition-colors">Boutiques</Link>
        <Link href="/tier-2/support" className="hover:text-[#0F172A] transition-colors">Service</Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-white py-16 px-8 mt-auto relative z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm font-sans tracking-widest text-[#64748B]">
        <div>
          <div className="text-[#0F172A] font-serif text-2xl mb-6 tracking-[0.3em]">AURA</div>
          <p className="font-light leading-relaxed">
            Forging eternity since 1884. The pinnacle of luminous chronometric performance.
          </p>
        </div>
        <div>
          <h4 className="text-[#0F172A] mb-6 uppercase tracking-[0.2em] font-bold">The Collection</h4>
          <ul className="space-y-4 font-light">
            <li><Link href="/tier-2/collection?query=ice" className="hover:text-[#0EA5E9] transition-colors cursor-pointer">The Ice Platinum</Link></li>
            <li><Link href="/tier-2/collection?query=white" className="hover:text-[#0EA5E9] transition-colors cursor-pointer">Luminous White</Link></li>
            <li><Link href="/tier-2/collection?query=frost" className="hover:text-[#0EA5E9] transition-colors cursor-pointer">Deep Frost</Link></li>
            <li><Link href="/tier-2/collection?query=rose" className="hover:text-[#0EA5E9] transition-colors cursor-pointer">Rose Frost</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#0F172A] mb-6 uppercase tracking-[0.2em] font-bold">Boutiques</h4>
          <ul className="space-y-4 font-light">
            <li><Link href="/tier-2/boutiques?loc=geneva" className="flex items-center gap-3 hover:text-[#0EA5E9] transition-colors cursor-pointer"><MapPin className="w-4 h-4"/> Geneva</Link></li>
            <li><Link href="/tier-2/boutiques?loc=london" className="flex items-center gap-3 hover:text-[#0EA5E9] transition-colors cursor-pointer"><MapPin className="w-4 h-4"/> London</Link></li>
            <li><Link href="/tier-2/boutiques?loc=ny" className="flex items-center gap-3 hover:text-[#0EA5E9] transition-colors cursor-pointer"><MapPin className="w-4 h-4"/> New York</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#0F172A] mb-6 uppercase tracking-[0.2em] font-bold">Client Care</h4>
          <ul className="space-y-4 font-light">
            <li className="flex items-center gap-3"><Phone className="w-4 h-4"/> +41 22 123 4567</li>
            <li><Link href="/tier-2/support" className="hover:text-[#0EA5E9] transition-colors cursor-pointer">Service Centers</Link></li>
            <li><Link href="/tier-2/support" className="hover:text-[#0EA5E9] transition-colors cursor-pointer">Register Authenticity</Link></li>
            <li><Link href="/tier-2/support" className="hover:text-[#0EA5E9] transition-colors cursor-pointer">Manuals</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
