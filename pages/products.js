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
      image: "/images/tutor_elf.png", // 請確保 public/images/ 下有此檔案
      desc: "專為嵌入式學習打造的 AI 智慧助教。內建 Ameba 8735B 核心，具備 AI 視覺辨識與語音互動能力，協助開發者快速掌握 IoT 核心技術。",
      features: ["AMB82-mini Core", "AI Camera System", "Audio Interactive"]
    },
    {
      id: "PROT-02",
      name: "Wireless Audio System",
      status: "COMING_SOON",
      category: "Audio_Processing",
      image: "/images/wireless_audio.png", // 請確保 public/images/ 下有此檔案
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

      <main className="max-w-6xl mx-auto py-24 px-6 relative z-10">
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="flex-1">
            <h2 className="text-[#D4AF37] font-mono tracking-[0.6em] text-[10px] md:text-xs mb-3 uppercase opacity-50 italic">Lab_Prototype_Registry</h2>
            <h1 className="text-4xl md:text-7xl font-light tracking-tighter mb-8 leading-tight">產品與 <span className="text-[#D4AF37] font-serif italic">技術預覽</span></h1>
            <div className="w-16 h-[2px] bg-[#D4AF37]"></div>
          </div>
          <div className="font-mono text-[9px] text-zinc-700 text-right pr-6 hidden md:block border-r border-dashed border-white/5">
            BUILD_VER: 3.2.1<br/>
            STAGE: DEVELOPMENT<br/>
            © 2026
          </div>
        </header>

        {/* 產品展示區：左右佈局，圖片放大 2.5 倍 */}
        <div className="space-y-16">
          {products.map((item) => (
            <div key={item.id} className="p-8 md:p-12 border border-white/5 bg-[#0D0D0D]/40 hover:border-[#D4AF37]/30 transition-all duration-700 group relative">
              
              <div className="flex flex-col-reverse md:flex-row items-start gap-12">
                {/* 1. 左側文字內容 (flex-1 佔據主要空間) */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-[10px] text-zinc-600 tracking-wider">[{item.id}]</span>
                    <h4 className="text-2xl md:text-4xl font-light group-hover:text-[#D4AF37] transition-colors">{item.name}</h4>
                    <span className="text-[#D4AF37] border border-[#D4AF37]/20 text-[9px] font-bold px-3 py-1 rounded-full animate-pulse">
                      {item.status}
                    </span>
                  </div>
                  
                  <p className="text-zinc-500 text-sm md:text-lg leading-relaxed mb-10 max-w-2xl border-l-2 border-white/5 pl-8 italic">
                    {item.desc}
                  </p>

                  {/* 技術規格 */}
                  <div className="flex flex-wrap gap-x-8 gap-y-3 px-8">
                    {item.features.map(feat => (
                      <div key={feat} className="text-[11px] font-mono text-zinc-600 flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37]/40 rounded-full"></div>
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. 右側縮圖 (縮圖放大 2.5倍: md:w-80 = 320px) */}
                <div className="shrink-0 w-full md:w-80 h-auto aspect-video md:aspect-square relative overflow-hidden group cursor-zoom-in border border-white/5 group-hover:border-[#D4AF37]/40 transition-all duration-700 shadow-2xl bg-black">
                  <div 
                    className="w-full h-full relative"
                    onClick={() => setSelectedImg(item.image)}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-contain opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                    />
                    {/* 右下角放大提示 */}
                    <div className="absolute bottom-3 right-3 p-1.5 bg-black/60 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                    </div>
                  </div>
                </div>

              </div>

              {/* 背景流水號裝飾 (移到邊角不搶戲) */}
              <span className="absolute bottom-2 left-6 text-[40px] font-mono font-bold text-white/[0.02] pointer-events-none">{item.id}</span>
            </div>
          ))}
        </div>

        {/* 底部路線圖 */}
        <section className="mt-40 p-16 border-2 border-dashed border-white/5 text-center relative overflow-hidden">
          <h3 className="text-2xl md:text-4xl font-light mb-8">「我們不造輪子，我們致力於將現有 <br/>IC 技術發揮至 <span className="text-[#D4AF37] font-serif italic">極致。</span>」</h3>
          <p className="text-zinc-600 font-mono text-[11px] tracking-[0.4em] uppercase mb-12">Looking for customized hardware solutions? // Build with us.</p>
          <Link href="/contact">
            <a className="inline-block px-12 py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-bold uppercase tracking-widest text-[11px] hover:bg-[#D4AF37] hover:text-black transition-all">
              取得產品開發建議
            </a>
          </Link>
        </section>
      </main>

      {/* 頁尾 */}
      <footer className="py-20 text-center opacity-20 text-[9px] tracking-[0.5em] uppercase border-t border-white/5 font-mono relative z-10">
        © 2026 SHUO_VISION_LAB // PRODUCT_ECOSYSTEM // TAIPEI
      </footer>
    </div>
  );
}
