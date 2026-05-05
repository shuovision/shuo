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
    <div className="bg-[#0A0A0A] min-h-screen text-white selection:bg-[#D4AF37] selection:text-black font-sans relative overflow-hidden">
      <Head>
        <title>SHUO VISION | IoT & Embedded Engineering LAB</title>
      </Head>

      {/* 導覽列 */}
      <nav className="p-4 md:px-12 flex flex-col md:row justify-between items-center sticky top-0 bg-[#0A0A0A]/95 backdrop-blur-md z-50 border-b border-white/5 gap-4">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse"></div>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-sm md:text-xl font-mono">SHUO_VISION_LAB</span>
          </div>
        </Link>
        <div className="flex gap-8 text-[10px] md:text-xs uppercase tracking-[0.15em] items-center font-bold">
          <Link href="/about"><a className="hover:text-[#D4AF37]">About</a></Link>
          <Link href="/contact">
            <a className="px-5 py-2 border border-[#D4AF37]/50 text-[#D4AF37] rounded-full">Contact</a>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center px-6 md:px-20 relative overflow-hidden bg-[#0A0A0A]">
        
        {/* 動態電流容器 */}
        <div className="absolute inset-0 z-0">
          {/* 1. 底層靜態圖 */}
          <img 
            src="/images/pcb_bg.png" 
            className="absolute inset-0 w-full h-full object-cover object-right opacity-10"
            alt="PCB Base"
          />

          {/* 2. 流動電流層 (使用 Inline Style 確保路徑與動畫生效) */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.8) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
              WebkitMaskImage: 'url("/images/pcb_bg.png")',
              maskImage: 'url("/images/pcb_bg.png")',
              WebkitMaskSize: 'cover',
              maskSize: 'cover',
              WebkitMaskPosition: 'right',
              maskPosition: 'right',
              animation: 'flow 3s linear infinite',
            }}
          ></div>

          {/* 定義動畫鍵影 (直接寫在 style 標籤中) */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes flow {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `}} />
        </div>

        {/* 文字主體 */}
        <div className="max-w-4xl relative z-10">
          <h2 className="text-[#D4AF37] text-xs tracking-[0.5em] mb-4 opacity-80 font-mono uppercase">Embedded System Lab</h2>
          <h1 className="text-4xl md:text-8xl font-light tracking-tighter leading-tight mb-8">
            以核心技術，<br />
            <span className="text-[#D4AF37] font-serif italic">凝結智慧果實。</span>
          </h1>
          <div className="w-16 h-[1px] bg-[#D4AF37]"></div>
        </div>
      </section>

      {/* 作品區 */}
      <section className="py-20 px-6 md:px-20 bg-[#0A0A0A]">
        <h3 className="text-xl tracking-[0.3em] text-[#D4AF37] font-bold mb-12">PROJECT_SHOWCASE</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {works.map((work) => (
            <div key={work.id} className="relative group">
              <div className="aspect-video bg-zinc-900 mb-4 border border-white/5 overflow-hidden">
                <iframe className="w-full h-full opacity-60 group-hover:opacity-100" src={`https://www.youtube.com/embed/${work.video_id}?mute=1`} frameBorder="0"></iframe>
              </div>
              <h4 className="text-xl font-light">{work.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
