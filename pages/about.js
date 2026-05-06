import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-[#D4AF37] selection:text-black relative overflow-hidden">
      <Head>
        <title>About | SHUO VISION LAB</title>
      </Head>

      {/* 統一導覽列 - 與首頁完全一致 */}
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
        
        {/* 第一部分：品牌理念 */}
        <section className="mb-32">
          <h2 className="text-[#D4AF37] font-mono tracking-[0.5em] text-xs mb-6 uppercase opacity-60">System_Philosophy</h2>
          <h1 className="text-4xl md:text-7xl font-light mb-12 tracking-tighter leading-tight">
            深耕底層技術，<br />
            致力於 <span className="text-[#D4AF37] italic font-serif">極致的穩定。</span>
          </h1>
          <div className="space-y-8 text-zinc-400 leading-relaxed tracking-wide text-lg md:text-xl border-l-2 border-[#D4AF37]/30 pl-8 max-w-3xl">
            <p>
              「碩果影像實驗室 (SHUO VISION LAB)」成立於對硬體工藝的極致追求。在電子訊號瞬息萬變的時代，我們深信唯有精確的底層設計，才能支撐起上層複雜的應用。
            </p>
            <p>
              我們專注於嵌入式系統開發，從 <span className="text-white">Analog/Digital IC 設計</span> 到 <span className="text-white">IoT 智慧聯網</span>，為各類通訊與音訊設備提供最堅實的硬體核心。
            </p>
          </div>
        </section>

        {/* 第二部分：核心技術清單 (Core Stack) */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-[#D4AF37] font-mono tracking-[0.4em] text-xs mb-8 uppercase">Technical_Capabilities</h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white/5 p-6 border border-white/5 hover:border-[#D4AF37]/30 transition-all group">
                <h4 className="text-white font-bold mb-2 font-mono">EMBEDDED SYSTEM</h4>
                <p className="text-zinc-500 text-sm">RTOS 開發、Realtek Ameba 系列 (8735B/8722) 整合、ESP32 應用解決方案。</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/5 hover:border-[#D4AF37]/30 transition-all group">
                <h4 className="text-white font-bold mb-2 font-mono">IC DESIGN & POWER</h4>
                <p className="text-zinc-500 text-sm">PMIC 研發、AC-DC 轉換、USB-PD 協議標準、GaN 技術應用。</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/5 hover:border-[#D4AF37]/30 transition-all group">
                <h4 className="text-white font-bold mb-2 font-mono">AUDIO ENGINEERING</h4>
                <p className="text-zinc-500 text-sm">音訊隔離技術 (RS-485)、ZK 功率放大模組整合、多聲道無線音訊傳輸。</p>
              </div>
            </div>
          </div>
          
          {/* 右側修飾圖案 - 呼應首頁的電路感 */}
          <div className="relative flex justify-center items-center opacity-40">
            <div className="absolute w-64 h-64 border border-[#D4AF37]/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute w-48 h-48 border border-[#D4AF37]/40 border-dashed rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <span className="font-mono text-[#D4AF37] text-[10px] tracking-[0.5em] rotate-90 uppercase">LAB_STABILITY_TESTED</span>
          </div>
        </section>

        {/* 第三部分：服務理念 */}
        <section className="text-center py-20 border-t border-white/5">
          <p className="text-zinc-500 text-sm font-mono tracking-widest uppercase mb-6">Execution_Process</p>
          <h3 className="text-2xl md:text-4xl font-light italic mb-10">「從零件的挑選到韌體的優化，我們絕不妥協。」</h3>
          <Link href="/contact">
            <a className="inline-block px-10 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
              與我們洽談專案
            </a>
          </Link>
        </section>
      </main>

      {/* 背景裝飾光暈 */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] -z-10"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[150px] -z-10"></div>

      <footer className="py-20 text-center border-t border-white/5 font-mono opacity-20 text-[9px] tracking-[0.5em] uppercase">
        © 2026 SHUO_VISION_LAB // PRECISION_SYSTEMS
      </footer>
    </div>
  );
}
