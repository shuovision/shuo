import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-[#D4AF37] selection:text-black relative overflow-hidden">
      <Head>
        <title>About | SHUO VISION LAB</title>
      </Head>

      {/* 統一導覽列 */}
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

      {/* About 主內容 */}
      <main className="max-w-5xl mx-auto py-24 px-6 relative z-10">
        
        {/* 第一部分：系統整合定位 */}
        <section className="mb-32">
          <h2 className="text-[#D4AF37] font-mono tracking-[0.5em] text-xs mb-6 uppercase opacity-60">Application_Strategy</h2>
          <h1 className="text-4xl md:text-7xl font-light mb-12 tracking-tighter leading-tight">
            以成熟方案，<br />
            建構 <span className="text-[#D4AF37] italic font-serif">穩健的應用架構。</span>
          </h1>
          <div className="space-y-8 text-zinc-400 leading-relaxed tracking-wide text-lg md:text-xl border-l-2 border-[#D4AF37]/30 pl-8 max-w-3xl">
            <p>
              「碩果影像實驗室 (SHUO VISION LAB)」的核心優勢在於對市場現有 IC 技術的深度挖掘與整合應用。我們不重複造輪子，而是專注於將頂尖半導體廠商的晶片潛力發揮至極致。
            </p>
            <p>
              我們擅長根據客戶需求篩選最合適的硬體方案，從 <span className="text-white">PCB 系統佈局</span> 到 <span className="text-white">韌體邏輯優化</span>，確保每一組電路都能在實際場景中展現卓越的穩定性與效能。
            </p>
          </div>
        </section>

        {/* 第二部分：核心技術清單 (Core Stack) */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-[#D4AF37] font-mono tracking-[0.4em] text-xs mb-8 uppercase">Technical_Capabilities</h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white/5 p-6 border border-white/5 hover:border-[#D4AF37]/30 transition-all group">
                <h4 className="text-white font-bold mb-2 font-mono">SOC INTEGRATION</h4>
                <p className="text-zinc-500 text-sm">Realtek Ameba 系列 (8735B/8722) 深度開發、ESP32 無線通訊架構整合、RTOS 系統移植與優化。</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/5 hover:border-[#D4AF37]/30 transition-all group">
                <h4 className="text-white font-bold mb-2 font-mono">ANALOG APPLICATION</h4>
                <p className="text-zinc-500 text-sm">市場現有電源管理 IC (PMIC) 整合應用、AC-DC 穩定轉換電路設計、高效能 Gallium Nitride (GaN) 充電方案導入。</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/5 hover:border-[#D4AF37]/30 transition-all group">
                <h4 className="text-white font-bold mb-2 font-mono">AUDIO HARDWARE</h4>
                <p className="text-zinc-500 text-sm">ZK 功率放大模組優化、MAX9814/LM386 音訊前端電路開發、多聲道無線環繞系統整合。</p>
              </div>
            </div>
          </div>
          
          {/* 右側修飾圖案 */}
          <div className="relative flex justify-center items-center opacity-40 hidden md:flex">
            <div className="absolute w-64 h-64 border border-[#D4AF37]/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute w-48 h-48 border border-[#D4AF37]/40 border-dashed rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <span className="font-mono text-[#D4AF37] text-[10px] tracking-[0.5em] rotate-90 uppercase text-center">SYSTEM_INTEGRATION_EXPERTS</span>
          </div>
        </section>

        {/* 第三部分：服務理念 */}
        <section className="text-center py-20 border-t border-white/5">
          <p className="text-zinc-500 text-sm font-mono tracking-widest uppercase mb-6">Service_Workflow</p>
          <h3 className="text-2xl md:text-4xl font-light italic mb-10">「讓現有的 IC 技術，在您的產品中發揮 100% 的價值。」</h3>
          <Link href="/contact">
            <a className="inline-block px-10 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
              啟動專案洽談
            </a>
          </Link>
        </section>
      </main>

      {/* 背景裝飾光暈 */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] -z-10"></div>

      <footer className="py-20 text-center border-t border-white/5 font-mono opacity-20 text-[9px] tracking-[0.5em] uppercase">
        © 2026 SHUO_VISION_LAB // SYSTEM_INTEGRATION_OK
      </footer>
    </div>
  );
}
