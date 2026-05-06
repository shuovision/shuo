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
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <img 
            src={selectedImg} 
            className="max-w-full max-h-[90vh] object-contain shadow-2xl border border-white/10"
            alt="Full Size"
          />
          <div className="absolute top-5 right-5 text-[#D4AF37] text-2xl font-mono cursor-pointer">CLOSE [×]</div>
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
        <div className="flex gap-4 md:gap-10 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
          <Link href="/about"><a className="hover:text-[#D4AF37] transition-all text-white/70">About</a></Link>
          <Link href="/services"><a className="hover:text-[#D4AF37] transition-all text-white/70">Services</a></Link>
          <Link href="/products"><a className="text-[#D4AF37]">Products</a></Link>
          <Link href="/contact">
            <a className="px-6 py-2 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all rounded-full bg-[#D4AF37]/5 text-[9px] md:text-xs">CONTACT</a>
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto py-20 px-6 relative z-10">
        <header className="mb-20">
          <h2 className="text-[#D4AF37] font-mono tracking-[0.5em] text-[10px] mb-2 uppercase opacity-50">Product_Registry</h2>
          <h1 className="text-4xl md:text-6xl font-light tracking-tighter mb-6">產品與 <span className="text-[#D4AF37] font-serif italic">預覽。</span></h1>
          <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
        </header>

        {/* 產品展示區：極簡清單風格 */}
        <div className="divide-y divide-white/5">
          {products.map((item) => (
            <div key={item.id} className="py-12 flex items-start gap-8 group">
              
              {/* 1. 左側文字內容 (佔據大部分空間) */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-[9px] text-zinc-600">[{item.id}]</span>
                  <h4 className="text-xl md:text-3xl font-light group-hover:text-[#D4AF37] transition-colors">{item.name}</h4>
                  <span className="text-[#D4AF37] border border-[#D4AF37]/20 text-[8px] px-2 py-0.5 rounded animate-pulse">
                    {item.status}
                  </span>
                </div>
                
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {item.features.map(feat => (
                    <div key={feat} className="text-[10px] font-mono text-zinc-600 flex items-center gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37]/40 rounded-full"></div>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. 右側小縮圖 (寬度固定，非常小) */}
              <div className="shrink-0">
                <div 
                  className="w-20 h-20 md:w-32 md:h-32 relative cursor-zoom-in border border-white/5 overflow-hidden bg-[#111] group-hover:border-[#D4AF37]/30 transition-all"
                  onClick={() => setSelectedImg(item.image)}
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-contain opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                  {/* 右下角放大提示 */}
                  <div className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 底部導引 */}
        <footer className="mt-32 pt-20 border-t border-white/5 text-center">
          <Link href="/contact">
            <a className="text-[#D4AF37] font-mono text-xs tracking-widest hover:text-white transition-colors">
              [ INITIATE_TECHNICAL_CONSULTATION ]
            </a>
          </Link>
        </footer>
      </main>
    </div>
  );
}
