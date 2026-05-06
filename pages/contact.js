import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-[#D4AF37] relative overflow-hidden">
      <Head>
        <title>Contact | SHUO VISION LAB</title>
      </Head>

      {/* 背景：藍圖網格與座標裝飾 */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: `radial-gradient(#D4AF37 0.5px, transparent 0.5px), linear-gradient(#D4AF37 0.2px, transparent 0.2px), linear-gradient(90deg, #D4AF37 0.2px, transparent 0.2px)`,
             backgroundSize: '40px 40px, 120px 120px, 120px 120px'
           }}>
      </div>

      {/* 統一導覽列 */}
      <nav className="p-4 md:px-12 flex justify-between items-center sticky top-0 bg-[#0A0A0A]/90 backdrop-blur-lg z-50 border-b border-[#D4AF37]/10">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></div>
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] text-sm md:text-xl font-mono uppercase">Shuo_Vision_Lab</span>
          </div>
        </Link>
        <div className="flex gap-4 md:gap-10 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
          <Link href="/about"><a className="hover:text-[#D4AF37] transition-all text-white/70">About</a></Link>
          <Link href="/services"><a className="hover:text-[#D4AF37] transition-all text-white/70">Services</a></Link>
          <Link href="/products"><a className="hover:text-[#D4AF37] transition-all text-white/70">Products</a></Link>
          <Link href="/contact"><a className="text-[#D4AF37]">Contact</a></Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto py-20 px-6 relative z-10">
        <header className="mb-20">
          <h2 className="text-[#D4AF37] font-mono tracking-[0.5em] text-[10px] mb-2 uppercase opacity-40">Communication_Interface</h2>
          <h1 className="text-4xl md:text-7xl font-light tracking-tighter mb-8 leading-tight">啟動 <span className="text-[#D4AF37] font-serif italic">技術洽談。</span></h1>
          <div className="w-12 h-[1px] bg-[#D4AF37]/40"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* 左側：實驗室座標與資訊 */}
          <div className="space-y-12">
            <div>
              <h3 className="text-[#D4AF37] font-mono text-xs tracking-[0.4em] mb-6 uppercase">Lab_Coordinates</h3>
              <div className="space-y-4 font-mono text-zinc-500 text-sm">
                <p className="flex items-center gap-4 hover:text-white transition-colors cursor-default">
                  <span className="text-[#D4AF37]/50">[LOCATION]</span> New Taipei City, Taiwan (Sanchong / Banqiao)
                </p>
                <p className="flex items-center gap-4 hover:text-white transition-colors cursor-default">
                  <span className="text-[#D4AF37]/50">[TIME_ZONE]</span> GMT+8 (Taipei)
                </p>
                <p className="flex items-center gap-4 hover:text-[#D4AF37] transition-colors cursor-pointer">
                  <span className="text-[#D4AF37]/50">[ENCRYPTED_MAIL]</span> shuovision@gmail.com
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-[#D4AF37] font-mono text-xs tracking-[0.4em] mb-6 uppercase">Network_Nodes</h3>
              <div className="flex gap-6">
                {/* 這裡可以放你的社交連結圖示 */}
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">GH</a>
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">LI</a>
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">IG</a>
              </div>
            </div>

            {/* 系統狀態裝飾 */}
            <div className="p-6 border border-dashed border-white/5 bg-white/[0.01] inline-block">
              <div className="flex items-center gap-3 font-mono text-[9px] tracking-widest text-[#D4AF37]/60">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                SYSTEM_STATUS: SECURE_CHANNEL_READY
              </div>
            </div>
          </div>

          {/* 右側：聯絡表單 */}
          <div className="bg-[#0D0D0D] border border-white/5 p-8 md:p-12 relative group shadow-2xl">
            <h3 className="font-mono text-[10px] text-zinc-600 mb-8 uppercase tracking-[0.2em]">// Submit_Project_Protocol</h3>
            
            <form className="space-y-6">
              <div className="relative">
                <input type="text" placeholder="NAME / ORGANIZATION" className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:border-[#D4AF37] outline-none transition-all placeholder:text-zinc-800 font-mono" />
              </div>
              <div className="relative">
                <input type="email" placeholder="COMMUNICATION_EMAIL" className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:border-[#D4AF37] outline-none transition-all placeholder:text-zinc-800 font-mono" />
              </div>
              <div className="relative">
                <select className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:border-[#D4AF37] outline-none transition-all text-zinc-500 font-mono">
                  <option className="bg-[#0A0A0A]">SERVICE_TYPE: IoT Integration</option>
                  <option className="bg-[#0A0A0A]">SERVICE_TYPE: Power Management</option>
                  <option className="bg-[#0A0A0A]">SERVICE_TYPE: Audio Solution</option>
                  <option className="bg-[#0A0A0A]">SERVICE_TYPE: Other</option>
                </select>
              </div>
              <div className="relative">
                <textarea rows="4" placeholder="PROJECT_DESCRIPTION_AND_REQUIREMENTS..." className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:border-[#D4AF37] outline-none transition-all placeholder:text-zinc-800 font-mono resize-none"></textarea>
              </div>
              
              <button className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                TRANSMIT_DATA
              </button>
            </form>
          </div>

        </div>

        {/* 底部裝飾 */}
        <div className="mt-40 text-center opacity-10">
          <p className="font-mono text-[8px] tracking-[1em] uppercase">Security_Protocol_Active // End_to_End_Encryption</p>
        </div>
      </main>

      <footer className="py-20 text-center opacity-20 text-[9px] tracking-[0.5em] uppercase border-t border-white/5 font-mono">
        © 2026 SHUO_VISION_LAB // TAIPEI_NODE
      </footer>
    </div>
  );
}
