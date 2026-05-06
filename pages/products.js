import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Products() {
  const [selectedImg, setSelectedImg] = useState(null); // 控制燈箱彈窗

  const products = [
    {
      id: "PROT-01",
      name: "Ameba Tutor Elf",
      status: "COMING_SOON",
      category: "AI_Education_Kit",
      image: "/images/tutor_elf.png",
      desc: "專為嵌入式學習打造的 AI 智慧助教。內建 Ameba 8735B 核心，具備 AI 視覺辨識與語音互動能力，協助開發者快速掌握 IoT 核心技術。",
      features: ["AMB82-mini Core", "AI Camera System", "Audio Interactive"]
    },
    {
      id: "PROT-02",
      name: "Wireless Audio System",
      status: "COMING_SOON",
      category: "Audio_Processing",
      image: "/images/wireless_audio.png",
      desc: "高性能無線音訊傳輸方案。採用自主研發的同步算法與隔離技術，實現低於 20ms 的超低延遲，為專業音響改裝提供極致穩定性。",
      features: ["24-bit/96kHz Hi-Res", "Latency < 20ms", "Zero Ground Noise"]
    }
  ];

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-[#D4AF37] relative overflow-hidden">
      <Head>
        <title>Products | SHUO VISION LAB</title>
      </Head>

      {/* 藍圖背景裝飾 */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" 
           style={{ 
             backgroundImage: `radial-gradient(#D4AF37 0.5px, transparent 0.5px), linear-gradient(#D4AF37 0.2px, transparent 0.2px), linear-gradient(90deg, #D4AF37 0.2px, transparent 0.2px)`,
             backgroundSize: '40px 40px, 120px 120px, 120px 120px'
           }}>
      </div>

      {/* 燈箱 Modal (點擊圖片後出現) */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-20 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <img 
              src={selectedImg} 
              alt="Full Size Product" 
              className="max-w-full max-h-full object-contain shadow-[0_0_50px_rgba(212,175,55,0.2)] border border-white/10"
            />
            <div className="absolute top-5 right-5 text-[#D4AF37] font-mono text-[10px] cursor-pointer tracking-widest bg-black/50 px-3 py-1 border border-white/10">
              [ CLOSE_ESC ]
            </div>
          </div>
        </div>
      )}

      {/* 統一導覽列 - 確保全站高度與間距一致 */}
      <nav className="p-4 md:px-12 flex justify-between items-center sticky top-0 bg-[#0A0A0A]/90 backdrop-blur-lg z-50 border-b border-[#D4AF37]/10">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_12px_#D4AF37]"></div>
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] text-sm md:text-xl font-mono uppercase transition-transform group-hover:scale-105">
              Shuo_Vision_Lab
            </span>
          </div>
        </Link>
        <div className="flex gap-4 md:gap-10 text-[10px] md:text-xs uppercase tracking-[0.2em] items-center font-bold">
          <Link href="/about"><a className="hover:text-[#D4AF37] transition-all text-white/70">About</a></Link>
          <Link href="/services"><a className="hover:text-[#D4AF37] transition-all text-white/70">Services</a></Link>
          <Link href="/products"><a className="text-[#D4AF37]">Products</a></Link>
          <Link href="/contact">
            <a className="px-6 py-2 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 rounded-full bg-[#D4AF37]/5 text-[9px] md:text-xs">
              CONTACT
            </a>
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto py-20 px-6 relative z-10">
        <header className="mb-20">
          <h2 className="text-[#D4AF37] font-mono tracking-[0.5em] text-[10px] mb-2 uppercase opacity-40 italic">Technical_Prototype_Registry</h2>
          <h1 className="text-4xl md:text-6xl font-light tracking-tighter mb-6">產品與 <span className="text-[#D4AF37] font-serif italic">預覽。</span></h1>
          <div className="w-10 h-[1px] bg-[#D4AF37]/30"></div>
        </header>

        {/* 產品展示區：清單式佈局 */}
        <div className="space-y-6">
          {products.map((item) => (
            <div key={item.id} className="p-6 md:p-8 border border-white/5 bg-[#0D0D0D]/40 hover:border-[#D4AF37]/20 transition-all duration-500 group relative">
              
              <div className="flex items-start gap-6 md:gap-12">
                {/* 1. 左側文字內容 */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h4 className="text-lg md:text-2xl font-light group-hover:text-[#D4AF37] transition-colors">{item.name}</h4>
                    <span className="text-[#D4AF37] border border-[#D4AF37]/20 text-[7px] font-bold px-1.5 py-0.5 rounded animate-pulse">
                      {item.status}
                    </span>
                  </div>
                  
                  <p className="text-zinc-500 text-xs md:text-sm leading-relaxed mb-6 italic border-l border-white/10 pl-4">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {item.features.map(feat => (
                      <div key={feat} className="text-[9px] font-mono text-zinc-600 flex items-center gap-1.5">
                        <div className="w-1 h-1 bg-[#D4AF37]/30 rounded-full"></div>
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. 右側縮圖 (固定尺寸：w-24 到 w-32) */}
                <div className="shrink-0">
                  <div 
                    className="w-24 h-24 md:w-32 md:h-32 relative cursor-zoom-in border border-white/5 bg-black group-hover:border-[#D4AF37]/40 transition-all duration-500 overflow-hidden"
                    onClick={() => setSelectedImg(item.image)}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    {/* 裝飾線條 */}
                    <div className="absolute inset-x-0 h-[1px] bg-[#D4AF37]/30 top-0 group-hover:animate-[scan_1.5s_linear_infinite] opacity-0 group-hover:opacity-100"></div>
                  </div>
                </div>
              </div>

              {/* 背景序號裝飾 */}
              <span className="absolute bottom-2 left-6 text-[30px] font-mono font-bold text-white/[0.02] pointer-events-none">{item.id}</span>
            </div>
          ))}
        </div>

        {/* 底部行動導引 */}
        <section className="mt-24 pt-10 border-t border-white/5 text-center">
          <Link href="/contact">
            <a className="text-[#D4AF37] font-mono text-[9px] tracking-[0.4em] hover:text-white transition-all uppercase">
              [ INITIATE_TECHNICAL_CONSULTATION ]
            </a>
          </Link>
        </section>
      </main>

      {/* 掃描動畫定義 */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `}} />

      <footer className="py-20 text-center opacity-20 text-[9px] tracking-[0.5em] uppercase border-t border-white/5 font-mono">
        © 2026 SHUO_VISION_LAB // PRODUCT_ENGINE_STABLE
      </footer>
    </div>
  );
}
