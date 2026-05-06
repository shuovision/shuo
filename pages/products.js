import Head from "next/head";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      id: "PROT-01",
      name: "Ameba Tutor Elf",
      status: "COMING_SOON",
      category: "Development Kit",
      desc: "專為嵌入式學習與快速原型設計打造的開發套件。整合 Ameba 8735B 核心，具備 AI 視覺與低功耗通訊能力，是開發者的最佳助教。",
      features: ["AI Camera Support", "Wi-Fi 6 / BLE 5.2", "Arduino Compatible"]
    },
    {
      id: "PROT-02",
      name: "Wireless Audio System",
      status: "COMING_SOON",
      category: "Audio Solution",
      desc: "高性能無線音訊傳輸系統。採用自主研發的同步算法與隔離技術，解決專業音響場景中的無線延遲與底噪干擾問題。",
      features: ["Low Latency < 20ms", "High Fidelity 24-bit", "Sync-Multi-Point"]
    }
  ];

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-[#D4AF37] relative overflow-hidden">
      <Head>
        <title>Products | SHUO VISION LAB</title>
      </Head>

      {/* 1. 藍圖/技術圖紙背景 (Blueprint CSS) */}
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

      {/* 產品頁面主體 */}
      <main className="max-w-6xl mx-auto py-24 px-6 relative z-10">
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="flex-1">
            <h2 className="text-[#D4AF37] font-mono tracking-[0.6em] text-xs mb-4 uppercase opacity-60 italic">Lab_Prototype_Registry</h2>
            <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-tight">
              產品與 <br/><span className="text-[#D4AF37] font-serif italic">技術原型</span>
            </h1>
          </div>
          <div className="text-right font-mono text-[10px] text-zinc-600 border-r-2 border-[#D4AF37]/20 pr-6 hidden md:block">
            BUILD_VER: 3.2.0<br/>
            STAGE: DEVELOPMENT<br/>
            LOCATION: TAIPEI_LAB
          </div>
        </header>

        {/* 產品展示網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {products.map((item) => (
            <div key={item.id} className="group relative border border-white/5 bg-white/[0.02] p-8 md:p-12 hover:border-[#D4AF37]/30 transition-all duration-700">
              
              {/* 狀態標籤 */}
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-[10px] text-zinc-500 tracking-widest">[{item.id}]</span>
                <span className="bg-[#D4AF37]/10 text-[#D4AF37] text-[9px] font-bold px-3 py-1 rounded-full border border-[#D4AF37]/20 animate-pulse">
                  {item.status}
                </span>
              </div>

              {/* 產品內容 */}
              <h3 className="text-zinc-600 font-mono text-xs mb-2 tracking-[0.3em]">{item.category}</h3>
              <h4 className="text-3xl md:text-5xl font-light mb-8 group-hover:text-[#D4AF37] transition-colors">{item.name}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed mb-10 min-h-[80px]">
                {item.desc}
              </p>

              {/* 技術特點列表 */}
              <div className="space-y-3 mb-12">
                {item.features.map(feat => (
                  <div key={feat} className="flex items-center gap-3 text-[10px] font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full opacity-50"></div>
                    {feat}
                  </div>
                ))}
              </div>

              {/* 裝飾用的 Blueprint 幾何圖形 */}
              <div className="absolute bottom-6 right-6 w-20 h-20 opacity-10 group-hover:opacity-30 transition-opacity">
                <svg viewBox="0 0 100 100" fill="none" stroke="#D4AF37" strokeWidth="0.5">
                  <circle cx="50" cy="50" r="40" strokeDasharray="2 2" />
                  <rect x="20" y="20" width="60" height="60" />
                  <path d="M0 50 H100 M50 0 V100" strokeDasharray="5 5" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* 底部路線圖引導 */}
        <section className="mt-40 p-12 border-2 border-dashed border-white/5 text-center">
          <h3 className="text-xl md:text-3xl font-light mb-6">「每一個原型的誕生，都代表著一次技術界線的突破。」</h3>
          <p className="text-zinc-600 font-mono text-xs tracking-widest uppercase mb-10">Searching for customized hardware? // Let's build together.</p>
          <Link href="/contact">
            <a className="inline-block px-12 py-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold uppercase tracking-widest text-[10px] transition-all">
              取得產品開發建議
            </a>
          </Link>
        </section>
      </main>

      <footer className="py-20 text-center opacity-20 text-[9px] tracking-[0.5em] uppercase border-t border-white/5 font-mono">
        © 2026 SHUO_VISION_LAB // PRODUCT_ECOSYSTEM_v1
      </footer>
    </div>
  );
}
