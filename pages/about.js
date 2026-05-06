import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-[#D4AF37] selection:text-black relative overflow-hidden">
      <Head>
        <title>About | SHUO VISION LAB</title>
      </Head>

      {/* 統一的導覽列 */}
      <nav className="p-4 md:px-12 flex justify-between items-center sticky top-0 bg-[#0A0A0A]/90 backdrop-blur-lg z-50 border-b border-[#D4AF37]/10">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_12px_#D4AF37]"></div>
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] text-sm md:text-xl font-mono group-hover:scale-105 transition-transform uppercase">
              Shuo_Vision_Lab
            </span>
          </div>
        </Link>
        <div className="flex gap-4 md:gap-10 text-[10px] md:text-xs uppercase tracking-[0.2em] items-center font-bold">
          <Link href="/about"><a className="text-[#D4AF37] transition-all">About</a></Link>
          <Link href="/services"><a className="hover:text-[#D4AF37] transition-all text-white/70">Services</a></Link>
          <Link href="/products"><a className="hover:text-[#D4AF37] transition-all text-white/70">Products</a></Link>
          <Link href="/contact">
            <a className="px-6 py-2 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 rounded-full bg-[#D4AF37]/5 text-[9px] md:text-xs">
              CONTACT_US
            </a>
          </Link>
        </div>
      </nav>

      {/* About 內容區塊 */}
      <main className="max-w-4xl mx-auto py-20 px-6 relative z-10">
        <h2 className="text-[#D4AF37] font-mono tracking-[0.5em] text-sm mb-4 uppercase opacity-70">Project_Origin</h2>
        <h1 className="text-4xl md:text-6xl font-light mb-12 tracking-tighter">
          關於 <span className="text-[#D4AF37] italic font-serif">碩果影像實驗室</span>
        </h1>
        
        <div className="space-y-8 text-zinc-400 leading-relaxed tracking-wide text-lg border-l border-[#D4AF37]/20 pl-8">
          <p>
            我們專注於 <span className="text-white">嵌入式系統開發</span> 與 <span className="text-white">IoT 解決方案</span>。
            從電路佈局 (PCB Layout) 到韌體撰寫，致力於將複雜的硬體技術轉化為直覺、高效的產品體驗。
          </p>
          <p>
            「碩果」象徵著技術積累後的最終產出。在電子訊號的脈動中，我們尋求精確與穩定，為每一個專案注入硬體工程師的嚴謹魂魄。
          </p>
        </div>

        {/* 裝飾用的背景光暈 */}
        <div className="absolute top-1/2 right-[-20%] w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[120px] -z-10"></div>
      </main>

      <footer className="py-20 text-center border-t border-white/5 font-mono opacity-20 text-[9px] tracking-[0.5em] uppercase">
        © 2026 SHUO_VISION_LAB // SYSTEM_CONSISTENCY_OK
      </footer>
    </div>
  );
}
