import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 md:px-12 flex justify-between items-center sticky top-0 bg-[#0A0A0A]/90 backdrop-blur-lg z-50 border-b border-[#D4AF37]/10">
      <Link href="/">
        <div className="flex items-center gap-3 cursor-pointer group">
          {/* 硬體狀態燈效果 */}
          <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_12px_#D4AF37]"></div>
          <span className="text-[#D4AF37] font-bold tracking-[0.3em] text-sm md:text-xl font-mono group-hover:scale-105 transition-transform uppercase">
            Shuo_Vision_Lab
          </span>
        </div>
      </Link>
      <div className="flex gap-4 md:gap-10 text-[10px] md:text-xs uppercase tracking-[0.2em] items-center font-bold">
        <Link href="/about"><a className="hover:text-[#D4AF37] transition-all text-white/70">About</a></Link>
        <Link href="/services"><a className="hover:text-[#D4AF37] transition-all text-white/70">Services</a></Link>
        <Link href="/products"><a className="hover:text-[#D4AF37] transition-all text-white/70">Products</a></Link>
        <Link href="/contact">
          <a className="px-6 py-2 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 rounded-full bg-[#D4AF37]/5 text-[9px] md:text-xs">
            CONTACT_US
          </a>
        </Link>
      </div>
    </nav>
  );
}
