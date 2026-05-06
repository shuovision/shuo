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
      features: ["AMB82-mini Core", "AI Camera System", "Audio Interactive"]
    },
    {
      id: "PROT-02",
      name: "Wireless Audio System",
      status: "COMING_SOON",
      category: "Audio_Processing",
      image: "/images/wireless_audio.png",
      desc: "高性能無線音訊傳輸方案。採用自主研發的同步算法與隔離技術，實現低於 20ms 的超低延遲，為專業音響改裝提供極致穩定性。",
      features: ["24-bit/96kHz Hi-Res", "Latency < 20ms", "Zero Noise"]
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
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-20 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <img 
            src={selectedImg} 
            className="max-w-full max-h-[90vh] object-contain shadow-2xl border border-white/10"
            alt="Full Size Render"
          />
          <div className="absolute top-5 right-5 text-[#D4AF37] font-mono text-xs cursor-pointer bg-black/50 px-3 py-1.5 border border-white/10">
            [ CLOSE_PREVIEW ]
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
        <div className="flex gap-4 md:gap-10 text-[10px] md:text-xs uppercase tracking-[0.2em] items-center font-bold text-white/70">
          <Link href="/about"><a className="hover:text-[#D4AF37] transition-all">About</a></Link>
          <Link href="/services"><a className="hover:text-[#D4AF37] transition-all">Services</a></Link>
          <Link href="/products"><a className="text-[#D4AF37]">Products</a></Link>
          <Link href="/contact">
            <a className="px-6 py-2 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 rounded-full bg-[#D4AF37]/5 text-[9px] md:text-xs">CONTACT</a>
          </Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto py-20 px-6 relative z-10">
        <header className="mb-20">
          <h2 className="text-[#D4AF37] font-mono tracking-[0.6em] text-[10px] mb-2 uppercase opacity-50 italic">Lab_Prototype_Registry</h2>
          <h1 className="text-4xl md:text-7xl font-light tracking-tighter mb-8 leading-tight">產品與 <span className="text-[#D4AF37] font-serif italic">技術預覽</span></h1>
          <div className="w-16 h-[1px] bg-[#D4AF37]"></div>
        </header>

        <div className="space-y-10">
          {products.map((item) => (
            <div key={item.id} className="p-8 border border-white/5 bg-[#0D0D0D]/40 hover:border-[#D4AF37]/30 transition-all duration-700 group relative">
              
              <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                {/* 1. 左側文字內容 */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-[10px] text-zinc-600">[{item.id}]</span>
                    <h4 className="text-2xl md:text-3xl font-light group-hover:text-[#D4AF37] transition-colors">{item.name}</h4>
                    <span className="text-[#D4AF37] border border-[#D4AF37]/20 text-[9px] font-bold px-2 py-0.5 rounded-full animate-pulse">
                      {item.status}
                    </span>
                  </div>
                  
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-6 max-w-xl border-l border-white/10 pl-6 italic">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-6">
                    {item.features.map(feat => (
                      <div key={feat} className="text-[10px] font-mono text-zinc-600 flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#D4AF37]/40 rounded-full"></div>
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. 右側縮圖 (修正為 w-60 = 240px) */}
                <div className="shrink-0 w-full md:w-60 relative overflow-hidden group cursor-zoom-in border border-white/5 group-hover:border-[#D4AF37]/40 transition-all duration-700 bg-black aspect-square">
                  <div 
                    className="w-full h-full"
                    onClick={() => setSelectedImg(item.image)}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute bottom-2 right-2 p-1.5 bg-black/60 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                    </div>
                  </div>
                </div>

              </div>
              <span className="absolute bottom-2 left-6 text-[30px] font-mono font-bold text-white/[0.02] pointer-events-none">{item.id}</span>
            </div>
          ))}
        </div>

        <section className="mt-32 p-12 border border-dashed border-white/10 text-center">
          <Link href="/contact">
            <a className="inline-block px-12 py-4 border border-[#D4AF37] text-[#D4AF37] font-bold uppercase tracking-widest text-[10px] hover:bg-[#D4AF37] hover:text-black transition-all">
              取得技術開發建議
            </a>
          </Link>
        </section>
      </main>
    </div>
  );
}
