import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Head from "next/head";
import Link from "next/link";

// Supabase 初始化
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWorks() {
      try {
        const { data, error } = await supabase
          .from("portfolio_works")
          .select("*")
          .order("created_at", { ascending: false });
        if (!error) setWorks(data || []);
      } catch (err) { 
        console.error("Fetch error:", err); 
      } finally { 
        setLoading(false); 
      }
    }
    fetchWorks();
  }, []);

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white selection:bg-[#D4AF37] selection:text-black font-sans relative overflow-hidden">
      <Head>
        <title>SHUO VISION | IoT & Embedded Engineering LAB</title>
      </Head>

      {/* 全域特效 CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-glow {
          text-shadow: 0 0 30px rgba(212, 175, 55, 0.4);
        }
        .project-card:hover .scan-line {
          animation: scan 2s linear infinite;
        }
        @keyframes scan {
          0% { top: -10%; opacity: 0; }
          50% { opacity: 0.5; }
          100% { top: 110%; opacity: 0; }
        }
      `}} />

      {/* 導覽列 - 優化透明度與邊界 */}
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
          <Link href="/about"><a className="hover:text-[#D4AF37] transition-all">About</a></Link>
          <Link href="/services"><a className="hover:text-[#D4AF37] transition-all">Services</a></Link>
          <Link href="/products"><a className="hover:text-[#D4AF37] transition-all">Products</a></Link>
          <Link href="/contact">
            <a className="px-6 py-2 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 rounded-full bg-[#D4AF37]/5 text-[9px] md:text-xs">
              CONTACT_US
            </a>
          </Link>
        </div>
      </nav>

      {/* Hero Section - 深度強化 */}
      <section className="min-h-[85vh] flex items-center px-6 md:px-20 relative z-10 overflow-hidden">
        {/* PCB 背景圖 - 增加視差靜態層 */}
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none select-none overflow-hidden">
          <img 
            src="/images/pcb_bg.png" 
            alt="PCB Layout"
            className="w-full h-full object-cover object-right scale-105"
          />
          {/* 漸層遮罩讓背景邊緣更自然融合 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/80"></div>
        </div>

        {/* 左側文字標語 - 加入微光效果 */}
        <div className="max-w-4xl relative z-10">
          <h2 className="text-[#D4AF37] text-[10px] md:text-sm tracking-[0.6em] mb-6 uppercase opacity-70 font-mono">
            Embedded System / IoT Solutions
          </h2>
          <h1 className="text-4xl md:text-9xl font-light tracking-tighter leading-tight md:leading-none mb-10 text-white hero-glow">
            以核心技術，<br />
            <span className="text-[#D4AF37] font-serif italic">凝結智慧果實。</span>
          </h1>
          <div className="w-20 md:w-40 h-[1px] bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent"></div>
        </div>
      </section>

      {/* 作品展示區 (Showcase) - 增加掃描線特效 */}
      <section className="py-24 md:py-40 px-6 md:px-20 relative z-10 bg-[#0A0A0A]">
        <div className="flex items-center gap-6 mb-20 md:mb-32">
          <h3 className="text-xl md:text-2xl tracking-[0.4em] text-[#D4AF37] font-bold font-mono">PROJECT_SHOWCASE</h3>
          <div className="flex-1 h-[1px] bg-white/5"></div>
          <span className="text-zinc-800 text-[10px] font-mono uppercase tracking-[0.3em] hidden lg:block">System_Stability_Confirmed</span>
        </div>
        
        {loading ? (
          <div className="text-center py-20 font-mono text-[10px] tracking-widest text-zinc-600 animate-pulse">
            INITIALIZING_PORTFOLIO_ENGINE...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            {works.map((work, index) => (
              <div key={work.id} className="group cursor-pointer project-card relative">
                {/* 影片容器與掃描線 */}
                <div className="relative aspect-video overflow-hidden bg-[#0D0D0D] mb-8 border border-white/5 group-hover:border-[#D4AF37]/40 transition-all duration-700 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                  {/* 動態掃描線 */}
                  <div className="scan-line absolute left-0 w-full h-[2px] bg-[#D4AF37]/30 z-20 pointer-events-none blur-sm"></div>
                  
                  <iframe
                    className="w-full h-full opacity-40 group-hover:opacity-100 transition-opacity duration-1000 scale-[1.03] group-hover:scale-100"
                    src={`https://www.youtube.com/embed/${work.video_id}?rel=0&mute=1&controls=0`}
                    frameBorder="0" allowFullScreen
                  ></iframe>
                </div>
                
                {/* 作品文字 */}
                <div className="flex justify-between items-start font-mono px-2">
                  <div className="space-y-2">
                    <p className="text-[10px] text-[#D4AF37] tracking-[0.3em] uppercase opacity-60">{work.category || "Hardware Design"}</p>
                    <h4 className="text-2xl font-light tracking-tight group-hover:text-[#D4AF37] transition-colors duration-500">{work.title}</h4>
                  </div>
                  <div className="text-[10px] text-zinc-800 font-bold border border-zinc-900 px-2 py-1">
                    REV_{String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer - 強化專業標誌 */}
      <footer className="py-24 text-center border-t border-white/5 font-mono">
        <div className="opacity-20 text-[9px] tracking-[0.5em] uppercase mb-4">
          Precision Engineering // System Integration // 2026
        </div>
        <div className="text-[#D4AF37]/30 text-[10px] tracking-[0.2em]">
          © SHUO_VISION_LAB
        </div>
      </footer>
    </div>
  );
}
