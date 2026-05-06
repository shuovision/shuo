import Head from "next/head";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      id: "PROT-01",
      name: "Ameba Tutor Elf",
      status: "COMING_SOON",
      category: "AI_Education_Kit",
      image: "/images/tutor_elf.png", // 請確保圖片路徑正確
      desc: "專為嵌入式學習與快速原型設計打造的 AI 智慧助教。內建 Ameba 8735B 核心與高畫質鏡頭，支援語音互動與視覺辨識，縮短開發者的學習曲線。",
      features: ["Realtek AMB82-mini Integrated", "1080p AI Camera", "Beamforming Mic Array"]
    },
    {
      id: "PROT-02",
      name: "Wireless Audio System",
      status: "COMING_SOON",
      category: "Audio_Processing",
      image: "/images/wireless_audio.png", // 請確保圖片路徑正確
      desc: "次世代高保真無線音訊解決方案。透過精確的同步算法，實現低於 20ms 的超低延遲傳輸，完美應用於家庭劇院與專業音響改裝。",
      features: ["24-bit/96kHz Hi-Res", "Low Latency < 20ms", "High Signal Isolation"]
    }
  ];

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-[#D4AF37] relative overflow-hidden">
      <Head>
        <title>Products | SHUO VISION LAB</title>
      </Head>

      {/* 藍圖背景裝飾 */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: `radial-gradient(#D4AF37 0.5px, transparent 0.5px), linear-gradient(#D4AF37 0.2px, transparent 0.2px), linear-gradient(90deg, #D4AF37 0.2px, transparent 0.2px)`,
             backgroundSize: '40px 40px, 120px 120px, 120px 120px'
           }}>
      </div>

      {/* 統一導覽列 */}
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
            <a className="px-6 py-2 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all rounded-full bg-[#D4AF37]/5 text-[9px] md:text-xs">
              CONTACT_US
            </a>
          </Link>
        </div>
      </nav>

      {/* 頁面標題 */}
      <main className="max-w-6xl mx-auto py-24 px-6 relative z-10">
        <header className="mb-24">
          <h2 className="text-[#D4AF37] font-mono tracking-[0.6em] text-xs mb-4 uppercase opacity-60">Technical_Prototype_Registry</h2>
          <h1 className="text-4xl md:text-8xl font-light tracking-tighter mb-8 leading-tight">產品與 <span className="text-[#D4AF37] font-serif italic">設計預覽</span></h1>
          <div className="w-20 h-1 bg-[#D4AF37]"></div>
        </header>

        {/* 產品列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {products.map((item) => (
            <div key={item.id} className="group relative">
              {/* 1. 產品模擬圖容器 */}
              <div className="aspect-square md:aspect-video mb-8 overflow-hidden bg-white/[0.02] border border-white/5 relative group-hover:border-[#D4AF37]/40 transition-all duration-700 shadow-2xl">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                />
                {/* 裝飾線條 */}
                <div className="absolute top-4 left-4 font-mono text-[9px] text-[#D4AF37]/50 uppercase tracking-widest bg-black/60 px-2 py-1 backdrop-blur-md">
                  Simulated_Render_v3
                </div>
              </div>

              {/* 2. 產品文字資訊 */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-[#D4AF37] font-mono text-[10px] tracking-[0.4em] mb-2">{item.category}</h3>
                  <h4 className="text-3xl font-light mb-4 group-hover:text-[#D4AF37] transition-colors">{item.name}</h4>
                </div>
                <span className="text-[#D4AF37] border border-[#D4AF37]/30 text-[9px] font-bold px-3 py-1 animate-pulse">
                  {item.status}
                </span>
              </div>

              <p className="text-zinc-500 text-sm leading-relaxed mb-8 border-l border-white/10 pl-6 italic">
                {item.desc}
              </p>

              {/* 技術規格 */}
              <div className="grid grid-cols-1 gap-3 px-6">
                {item.features.map(feat => (
                  <div key={feat} className="flex items-center gap-3 text-[10px] font-mono text-zinc-400">
                    <span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span>
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 底部導引 */}
        <section className="mt-40 p-12 bg-white/[0.02] border border-white/5 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-light mb-6 tracking-wide">需要專屬的產品開發建議？</h3>
            <Link href="/contact">
              <a className="inline-block px-12 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                啟動專案諮詢
              </a>
            </Link>
          </div>
        </section>
      </main>

      <footer className="py-20 text-center opacity-20 text-[9px] tracking-[0.5em] uppercase border-t border-white/5 font-mono">
        © 2026 SHUO_VISION_LAB // PRODUCT_ENGINE_STABLE
      </footer>
    </div>
  );
}
