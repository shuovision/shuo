import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Products() {
  const [selectedImg, setSelectedImg] = useState(null);

  const products = [
    {
      id: "PROT-01",
      name: "Ameba Tutor Elf",
      status: "COMING_SOON",
      category: "AI_Education_Kit",
      image: "/images/tutor_elf.png",
      desc: "專為嵌入式學習打造的 AI 智慧助教。內建 Ameba 8735B 核心，具備 AI 視覺辨識與語音互動能力，協助開發者快速掌握 IoT 核心技術。",
      features: ["AMB82-mini Core", "AI Camera System"]
    },
    {
      id: "PROT-02",
      name: "Wireless Audio System",
      status: "COMING_SOON",
      category: "Audio_Processing",
      image: "/images/wireless_audio.png",
      desc: "高性能無線音訊傳輸方案。採用自主研發的同步算法與隔離技術，實現低於 20ms 的超低延遲，為專業音響改裝提供極致穩定性。",
      features: ["24-bit/96kHz Hi-Res", "Latency < 20ms"]
    }
  ];

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-[#D4AF37] relative overflow-hidden">
      <Head>
        <title>Products | SHUO VISION LAB</title>
      </Head>

      {/* 燈箱 Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-20 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <img 
            src={selectedImg} 
            className="max-w-full max-h-[90vh] object-contain shadow-[0_0_60px_rgba(212,175,55,0.1)]"
            alt="Full Preview"
          />
          <div className="absolute top-8 right-8 text-[#D4AF37] font-mono text-xs cursor-pointer border border-[#D4AF37]/30 px-3 py-1">
            CLOSE_ESC
          </div>
        </div>
      )}

      {/* 導覽列 */}
      <nav className="p-4 md:px-12 flex justify-between items-center sticky top-0 bg-[#0A0A0A]/90 backdrop-blur-lg z-50 border-b border-[#D4AF37]/10">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_12px_#D4AF37]"></div>
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] text-sm md:text-xl font-mono uppercase">Shuo_Vision_Lab</span>
          </div>
        </Link>
        <div className="flex gap-4 md:gap-10 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-white/70">
          <Link href="/about"><a className="hover:text-[#D4AF37] transition-all">About</a></Link>
          <Link href="/services"><a className="hover:text-[#D4AF37] transition-all">Services</a></Link>
          <Link href="/products"><a className="text-[#D4AF37]">Products</a></Link>
          <Link href="/contact">
            <a className="px-6 py-2 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 rounded-full bg-[#D4AF37]/5 text-[9px] md:text-xs">CONTACT</a>
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto py-24 px-6 relative z-10">
        <header className="mb-20">
          <h2 className="text-[#D4AF37] font-mono tracking-[0.5em] text-[10px] mb-2 uppercase opacity-40">Lab_Inventory</h2>
          <h1 className="text-3xl md:text-5xl font-light tracking-tighter mb-6">產品與 <span className="text-[#D4AF37] font-serif italic">預覽。</span></h1>
          <div className="w-10 h-[1px] bg-[#D4AF37]/50"></div>
        </header>

        {/* 產品展示區：極簡、精確 */}
        <div className="space-y-8">
          {products.map((item) => (
            <div key={item.id} className="p-6 md:p-8 border border-white/5 bg-[#0D0D0D]/30 hover:border-[#D4AF37]/20 transition-all duration-500 group relative">
              
              <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
                {/* 1. 左側文字內容 */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-xl md:text-2xl font-light group-hover:text-[#D4AF37] transition-colors">{item.name}</h4>
                    <span className="text-[#D4AF37] border border-[#D4AF37]/20 text-[8px] font-bold px-2 py-0.5 rounded animate-pulse">
                      {item.status}
                    </span>
                  </div>
                  
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-xl italic border-l border-white/10 pl-5">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-5">
                    {item.features.map(feat => (
                      <div key={feat} className="text-[10px] font-mono text-zinc-600 flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#D4AF37]/30 rounded-full"></div>
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. 右側縮圖 (鎖定為 160px，縮圖感最強) */}
                <div className="shrink-0 w-full md:w-40 h-auto aspect-square relative overflow-hidden group cursor-zoom-in border border-white/5 group-hover:border-[#D4AF37]/40 transition-all duration-500 bg-black">
                  <div 
                    className="w-full h-full"
                    onClick={() => setSelectedImg(item.image)}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    {/* 掃描線裝飾 */}
                    <div className="absolute inset-x-0 h-[1px] bg-[#D4AF37]/20 top-0 group-hover:animate-[scan_2s_linear_infinite] opacity-0 group-hover:opacity-100"></div>
                  </div>
                </div>

              </div>
              <span className="absolute bottom-2 right-4 text-[24px] font-mono font-bold text-white/[0.02] pointer-events-none uppercase tracking-tighter">{item.id}</span>
            </div>
          ))}
        </div>

        {/* CSS 動畫 */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scan {
            0% { top: 0%; }
            100% { top: 100%; }
          }
        `}} />

        <footer className="mt-32 py-10 text-center">
          <Link href="/contact">
            <a className="text-[#D4AF37] font-mono text-[10px] tracking-[0.4em] hover:text-white transition-all">
              [ INITIATE_PROJECT_ENQUIRY ]
            </a>
          </Link>
        </footer>
      </main>
    </div>
  );
}
