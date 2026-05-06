import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-[#D4AF37] relative overflow-hidden">
      <Head>
        <title>Contact | SHUO VISION LAB</title>
      </Head>

      {/* 1. 背景：藍圖網格與座標裝飾 (與 Products 頁面完全一致) */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" 
           style={{ 
             backgroundImage: `radial-gradient(#D4AF37 0.5px, transparent 0.5px), linear-gradient(#D4AF37 0.2px, transparent 0.2px), linear-gradient(90deg, #D4AF37 0.2px, transparent 0.2px)`,
             backgroundSize: '40px 40px, 120px 120px, 120px 120px'
           }}>
      </div>

      {/* 2. 統一導覽列 - 確保全站高度與間距像素級對齊 */}
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
          <Link href="/products"><a className="hover:text-[#D4AF37] transition-all text-white/70">Products</a></Link>
          <Link href="/contact">
            {/* Contact 為當前頁面，使用實心金色按鈕 */}
            <a className="px-6 py-2 bg-[#D4AF37] text-black font-bold transition-all duration-500 rounded-full text-[9px] md:text-xs">
              CONTACT
            </a>
          </Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto py-20 px-6 relative z-10">
        {/* 頁面標題 - 結構與 Products 頁面一致 */}
        <header className="mb-20">
          <h2 className="text-[#D4AF37] font-mono tracking-[0.5em] text-[10px] mb-2 uppercase opacity-40 italic">Communication_Interface</h2>
          <h1 className="text-4xl md:text-6xl font-light tracking-tighter mb-6">啟動 <span className="text-[#D4AF37] font-serif italic">技術洽談。</span></h1>
          <div className="w-12 h-[1px] bg-[#D4AF37]/30"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* 左側：實驗室座標資訊 */}
          <div className="space-y-12">
            <div>
              <h3 className="text-[#D4AF37] font-mono text-[10px] tracking-[0.4em] mb-8 uppercase opacity-60">Lab_Coordinates</h3>
              <div className="space-y-6 font-mono text-zinc-500 text-sm">
                <div className="flex items-center gap-4 group">
                  <span className="text-[#D4AF37]/40 text-[9px] w-20 shrink-0">[LOCATION]</span>
                  <span className="group-hover:text-white transition-colors">New Taipei City, Taiwan (Sanchong / Banqiao)</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <span className="text-[#D4AF37]/40 text-[9px] w-20 shrink-0">[TIME_ZONE]</span>
                  <span className="group-hover:text-white transition-colors">GMT+8 (Taipei)</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <span className="text-[#D4AF37]/40 text-[9px] w-20 shrink-0">[EMAIL]</span>
                  <span className="group-hover:text-[#D4AF37] transition-colors">shuo.vision.lab@gmail.com</span>
                </div>
              </div>
            </div>

            {/* 系統狀態指示 */}
            <div className="inline-flex items-center gap-4 p-4 border border-dashed border-white/10 bg-white/[0.01]">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
              <span className="font-mono text-[9px] tracking-widest text-zinc-500">ENCRYPTED_CHANNEL_READY</span>
            </div>
          </div>

          {/* 右側：聯絡表單 (專業暗色調) */}
          <div className="bg-[#0D0D0D] border border-white/5 p-8 md:p-12 shadow-2xl relative">
            <h3 className="font-mono text-[9px] text-zinc-600 mb-10 uppercase tracking-[0.2em] italic">// Submit_Project_Protocol</h3>
            
            <form className="space-y-8">
              <div className="relative">
                <input type="text" placeholder="NAME / ORGANIZATION" className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:border-[#D4AF37] outline-none transition-all placeholder:text-zinc-800 font-mono" />
              </div>
              <div className="relative">
                <input type="email" placeholder="COMMUNICATION_EMAIL" className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:border-[#D4AF37] outline-none transition-all placeholder:text-zinc-800 font-mono" />
              </div>
              <div className="relative">
                <select className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:border-[#D4AF37] outline-none transition-all text-zinc-600 font-mono appearance-none">
                  <option className="bg-[#0A0A0A]">SERVICE: IoT Integration</option>
                  <option className="bg-[#0A0A0A]">SERVICE: Power Management</option>
                  <option className="bg-[#0A0A0A]">SERVICE: Audio Solution</option>
                  <option className="bg-[#0A0A0A]">SERVICE: Product Prototype</option>
                </select>
              </div>
              <div className="relative">
                <textarea rows="4" placeholder="PROJECT_REQUIREMENTS..." className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:border-[#D4AF37] outline-none transition-all placeholder:text-zinc-800 font-mono resize-none"></textarea>
              </div>
              
              <button className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-white transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                TRANSMIT_DATA_CORE
              </button>
            </form>
          </div>

        </div>

        {/* 底部數據串裝飾 */}
        <div className="mt-40 text-center">
          <p className="font-mono text-[8px] tracking-[1.2em] text-zinc-800 uppercase">
            SECURE_CONNECTION_CONFIRMED // NODE_ACTIVE
          </p>
        </div>
      </main>

      <footer className="py-20 text-center opacity-20 text-[9px] tracking-[0.5em] uppercase border-t border-white/5 font-mono">
        © 2026 SHUO_VISION_LAB // TAIPEI_NODE_STABLE
      </footer>
    </div>
  );
}
