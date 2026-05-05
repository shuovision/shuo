import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Head from "next/head";
import Link from "next/link";

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
      } catch (err) { console.error(err); } finally { setLoading(false); }
    }
    fetchWorks();
  }, []);

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-[#D4AF37]">
      <Head>
        <title>SHUO VISION | IoT & Embedded Lab</title>
      </Head>

      {/* 導覽列 */}
      <nav className="p-4 md:px-12 flex justify-between items-center sticky top-0 bg-[#0A0A0A]/95 backdrop-blur-md z-50 border-b border-white/5">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_8px_#D4AF37]"></div>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] font-mono">SHUO_VISION_LAB</span>
          </div>
        </Link>
        <div className="flex gap-8 text-[10px] md:text-xs uppercase font-bold tracking-widest items-center">
          <Link href="/about"><a className="hover:text-[#D4AF37]">About</a></Link>
          <Link href="/services"><a className="hover:text-[#D4AF37]">Services</a></Link>
          <Link href="/products"><a className="hover:text-[#D4AF37]">Products</a></Link>
          <Link href="/contact">
            <a className="px-5 py-2 border border-[#D4AF37]/50 text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition-all">Contact</a>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-[85vh] relative flex items-center px-6 md:px-20 overflow-hidden bg-[#0A0A0A]">
        
        {/* 背景與電流效果容器 */}
        <div className="absolute inset-0 z-0">
          {/* 1. 靜態 PCB 底圖 - 設定為 object-right 讓線路集中在右側 */}
          <img 
            src="/images/pcb_bg.png" 
            className="absolute inset-0 w-full h-full object-cover object-right opacity-20"
            alt="PCB Structure"
          />

          {/* 2. 模擬電流：使用多道細長的斜向掃描線，看起來就像在走線路上跑 */}
          <div className="absolute inset-0 w-full h-full opacity-40">
            <div className="electricity-scan"></div>
          </div>

          {/* CSS 動畫：模擬數據脈衝 */}
          <style dangerouslySetInnerHTML={{ __html: `
            .electricity-scan {
              width: 100%;
              height: 100%;
              background: linear-gradient(
                115deg, 
                transparent 40%, 
                rgba(212, 175, 55, 0.4) 45%, 
                rgba(212, 175, 55, 0.8) 50%, 
                rgba(212, 175, 55, 0.4) 55%, 
                transparent 60%
              );
              background-size: 300% 100%;
              animation: scanFlow 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }

            @keyframes scanFlow {
              0% { background-position: 150% 0; }
              100% { background-position: -150% 0; }
            }
          `}} />
        </div>

        {/* 文字主體 - 加入陰影確保在動態背景下清晰 */}
        <div className="relative z-10 max-w-4xl drop-shadow-2xl">
          <h2 className="text-[#D4AF37] text-xs tracking-[0.5em] mb-4 font-mono opacity-80 uppercase">Embedded & IoT Solution</h2>
          <h1 className="text-4xl md:text-8xl font-light tracking-tighter leading-tight mb-8">
            以核心技術，<br />
            <span className="text-[#D4AF37] font-serif italic">凝結智慧果實。</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
        </div>
      </section>

      {/* 作品展示區 */}
      <section className="py-20 px-6 md:px-20 bg-[#0A0A0A]">
        <div className="flex items-center gap-4 mb-20">
          <h3 className="text-xl tracking-[0.3em] text-[#D4AF37] font-bold font-mono">PROJECT_SHOWCASE</h3>
          <div className="flex-1 h-px bg-white/5"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {works.map((work, index) => (
            <div key={work.id} className="group cursor-pointer">
              <div className="aspect-video bg-[#111] mb-6 border border-white/5 overflow-hidden group-hover:border-[#D4AF37]/30 transition-all">
                <iframe className="w-full h-full opacity-60 group-hover:opacity-100" src={`https://www.youtube.com/embed/${work.video_id}?mute=1`} frameBorder="0"></iframe>
              </div>
              <div className="flex justify-between items-center font-mono">
                <h4 className="text-xl font-light group-hover:text-[#D4AF37] transition-colors uppercase">{work.title}</h4>
                <span className="text-[10px] text-gray-700">[{String(index + 1).padStart(2, '0')}]</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-20 text-center opacity-20 text-[9px] tracking-[0.4em] uppercase border-t border-white/5 font-mono">
        © 2026 SHUO_VISION_LAB // EMBEDDED_SOLUTIONS.
      </footer>
    </div>
  );
}
