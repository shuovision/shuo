import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-[#D4AF37] selection:text-black relative overflow-hidden">
      <Head>
        <title>About | SHUO VISION LAB</title>
      </Head>

      {/* 1. 工程座標網格背景 (讓畫面不單調的關鍵) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

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
              CONTACT
            </a>
          </Link>
        </div>
      </nav>

      {/* About 主內容 */}
      <main className="max-w-6xl mx-auto py-24 px-6 relative z-10">
        
        {/* 第一區塊：標題與數據感 */}
        <section className="mb-40 flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-1">
            <h2 className="text-[#D4AF37] font-mono tracking-[0.6em] text-xs mb-8 uppercase opacity-60">System_Profile_v3.0</h2>
            <h1 className="text-5xl md:text-8xl font-light mb-12 tracking-tighter leading-tight">
              整合與優化，<br />
              定義 <span className="text-[#D4AF37] italic font-serif">硬體新邊界。</span>
            </h1>
            <div className="w-20 h-[2px] bg-[#D4AF37] mb-12"></div>
            <p className="text-zinc-400 leading-relaxed tracking-wide text-lg md:text-xl max-w-2xl">
              碩果影像實驗室 (SHUO VISION LAB) 專注於將市場頂尖的 SoC 技術與實際產業需求無縫對接。
              我們不只做整合，更追求在極限環境下的系統表現。
            </p>
          </div>
          {/* 右側：模擬系統狀態顯示 */}
          <div className="w-full md:w-64 border border-[#D4AF37]/20 p-6 font-mono text-[10px] space-y-4 opacity-40">
            <div className="flex justify-between text-[#D4AF37]"><span>STATUS:</span> <span>STABLE</span></div>
            <div className="flex justify-between"><span>UPTIME:</span> <span>2026.05.06</span></div>
            <div className="flex justify-between"><span>LOAD:</span> <span>OPTIMIZED</span></div>
            <div className="h-[1px] bg-[#D4AF37]/20"></div>
            <div className="text-[9px] leading-tight text-zinc-500">
              SYS_BOOT: OK<br/>
              FW_VER: 2.1.0_LATEST<br/>
              HARDWARE_READY...
            </div>
          </div>
        </section>

        {/* 第二區塊：核心技術 (採用卡片非對稱佈局) */}
        <section className="mb-40">
          <div className="flex items-center gap-4 mb-20">
            <h3 className="text-[#D4AF37] font-mono tracking-[0.5em] text-xs uppercase">Core_Competency</h3>
            <div className="flex-1 h-[1px] bg-[#D4AF37]/20"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all relative group overflow-hidden">
              <span className="absolute top-4 right-4 text-[40px] font-serif italic text-white/5 group-hover:text-[#D4AF37]/10 transition-colors">01</span>
              <h4 className="text-[#D4AF37] font-bold mb-4 font-mono tracking-widest text-sm">MCU INTEGRATION</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">針對 Realtek Ameba 及 ESP32 系列進行深度韌體開發，優化 RTOS 多工效能與低功耗表現。</p>
            </div>
            <div className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all relative group overflow-hidden md:translate-y-12">
              <span className="absolute top-4 right-4 text-[40px] font-serif italic text-white/5 group-hover:text-[#D4AF37]/10 transition-colors">02</span>
              <h4 className="text-[#D4AF37] font-bold mb-4 font-mono tracking-widest text-sm">AUDIO SOLUTION</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">提供高品質音訊隔離、ZK 模組改裝與多聲道無線傳輸方案，解決系統雜訊與延遲問題。</p>
            </div>
            <div className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all relative group overflow-hidden">
              <span className="absolute top-4 right-4 text-[40px] font-serif italic text-white/5 group-hover:text-[#D4AF37]/10 transition-colors">03</span>
              <h4 className="text-[#D4AF37] font-bold mb-4 font-mono tracking-widest text-sm">POWER DESIGN</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">導入 GaN 高效能組件與 PD 快充協議，針對現有 PMIC 進行高效電路整合，提升系統轉換效率。</p>
            </div>
          </div>
        </section>

        {/* 第三區塊：行動號召 */}
        <section className="relative py-24 text-center border-y border-white/5 bg-white/[0.01]">
          <h3 className="text-2xl md:text-5xl font-light mb-12">尋求卓越的 <span className="text-[#D4AF37] font-serif italic">硬體整合方案？</span></h3>
          <Link href="/contact">
            <a className="px-12 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              Contact_Technician
            </a>
          </Link>
        </section>
      </main>

      {/* 頁尾 */}
      <footer className="py-20 text-center opacity-20 text-[9px] tracking-[0.6em] uppercase border-t border-white/5 font-mono">
        © 2026 SHUO_VISION_LAB // ALL_SYSTEMS_GO
      </footer>
    </div>
  );
}
