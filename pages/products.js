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
            <button className="absolute top-0 right-0 text-[#D4AF37] text-4xl p-4 font-light">×</button>
          </div>
        </div>
      )}

      {/* 統一導覽列 */}
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
              CONTACT_US
            </a>
          </Link>
        </div>
      </nav>

      {/* 頁面標題 */}
      <main className="max-w-6xl mx-auto py-24 px-6 relative z-10">
        <header className="mb-24">
          <h2 className="text-[#D4AF37] font-mono tracking-[0.6em] text-xs mb-4 uppercase opacity-60">Technical_Prototype_Registry</h2>
          <h1 className="text-4xl md:text-8xl font-light tracking-tighter mb-8 leading-tight">產品與 <span className="text-[#D4AF37] font-serif italic">預覽。</span></h1>
          <div className="w-20 h-1 bg-[#D4AF37]"></div>
        </header>

        {/* 產品展示區 */}
        <div className="space-y-12">
          {products.map((item) => (
            <div key={item.id} className="group relative border border-white/5 bg-[#0D0D0D]/50 p-6 md:p-10 hover:border-[#D4AF37]/30 transition-all duration-500">
              
              <div className="flex flex-col md:flex-row gap-10">
                {/* 1. 左側文字內容 */}
                <div className="flex-1 order-2 md:order-1">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-[#D4AF37] font-mono text-[9px] tracking-[0.3em] mb-1">{item.category}</h3>
                      <h4 className="text-2xl md:text-4xl font-light group-hover:text-[#D4AF37] transition-colors">{item.name}</h4>
                    </div>
                    <span className="text-[#D4AF37] border border-[#D4AF37]/20 text-[9px] font-bold px-3 py-1 animate-pulse">
                      {item.status}
                    </span>
                  </div>

                  <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-xl">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {item.features.map(feat => (
                      <div key={feat} className="text-[10px] font-mono text-zinc-500 flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span>
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. 右側縮圖 (點擊開啟 Modal) */}
                <div className="w-full md:w-56 lg:w-72 order-1 md:order-2">
                  <div 
                    className="relative aspect-square cursor-zoom-in overflow-hidden border border-white/5 group-hover:border-[#D4AF37]/40 transition-all shadow-xl bg-black"
                    onClick={() => setSelectedImg(item.image)}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    {/* 掃描裝飾小圖示 */}
                    <div className="absolute bottom-2 right-2 p-1 bg-black/50 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* 背景流水號裝飾 */}
              <span className="absolute bottom-4 right-6 text-[40px] font-mono font-bold text-white/[0.02] pointer-events-none">{item.id}</span>
            </div>
          ))}
        </div>

        {/* 底部導引區 */}
        <section className="mt-32 py-20 text-center border-t border-white/5">
          <p className="text-zinc-600 font-mono text-[10px] tracking-[0.4em] uppercase mb-8">Engineering_Consultation_Service</p>
          <h3 className="text-2xl md:text-4xl font-light mb-12">準備好將您的構想 <br/>轉化為 <span className="text-[#D4AF37] font-serif italic">實體產品？</span></h3>
          <Link href="/contact">
            <a className="inline-block px-12 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold uppercase tracking-widest text-[11px] transition-all duration-500">
              立即取得技術支援
            </a>
          </Link>
        </section>
      </main>

      <footer className="py-20 text-center opacity-20 text-[9px] tracking-[0.5em] uppercase border-t border-white/5 font-mono">
        © 2026 SHUO_VISION_LAB // PRODUCT_ENGINE_STABLE
      </footer>
    </div>
  );
}
