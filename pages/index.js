import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Head from "next/head";
import Link from "next/link";

// Supabase 初始化 (請確保 Vercel 環境變數已設定好)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  // 從 Supabase 抓取作品資料
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

      {/* 導覽列维持原樣 */}
      <nav className="p-4 md:px-12 flex flex-col md:flex-row justify-between items-center sticky top-0 bg-[#0A0A0A]/95 backdrop-blur-md z-50 border-b border-white/5 gap-4">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_8px_#D4AF37]"></div>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-sm md:text-xl font-mono group-hover:scale-105 transition-transform">SHUO_VISION_LAB</span>
          </div>
        </Link>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] md:text-xs uppercase tracking-[0.15em] items-center font-bold">
          <Link href="/about"><a className="hover:text-[#D4AF37] transition-all">About</a></Link>
          <Link href="/services"><a className="hover:text-[#D4AF37] transition-all">Services</a></Link>
          <Link href="/products"><a className="hover:text-[#D4AF37] transition-all">Products</a></Link>
          <Link href="/contact">
            <a className="px-5 py-2 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all rounded-full bg-[#D4AF37]/5">
              Contact
            </a>
          </Link>
        </div>
      </nav>

      {/* Hero Section: 終極修復：擬真 PCB 背景 + 擬真電流 (單一層) */}
      <section className="min-h-[85vh] flex items-center px-6 md:px-20 relative z-10 overflow-hidden border-b border-white/5 bg-[#0A0A0A]">
        
        {/* 動態電流背景 (單一層，解決對齊問題) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          
          {/* 1. 靜態底圖：擬真 PCB 紋理 */}
          <img 
            src="/images/pcb_bg.png" 
            alt="Professional PCB Layout Texture"
            className="absolute inset-0 w-full h-full object-cover object-right select-none"
            style={{
              opacity: '0.15' // 淡淡的底圖
            }}
          />

          {/* 2. 擬真電流動畫層 (在圖片上方亂跑的霓虹光暈) */}
          <div 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              // 定義四個不同速度、不同透明度的金色數據流渐变
              background: `
                linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.4) 50%, transparent 100%),
                linear-gradient(90deg, transparent 25%, rgba(212,175,55,0.6) 75%, transparent 100%),
                linear-gradient(90deg, transparent 50%, rgba(212,175,55,0.2) 90%, transparent 100%)
              `,
              backgroundSize: '300% 100%, 250% 100%, 400% 100%',
              backgroundPosition: '0% 0, 0% 0, 0% 0',
              mixBlendMode: 'plus-lighter', // 讓金色霓虹光暈可以與底圖融合
              filter: 'blur(3px)', // 模擬電流的高能模糊感
              animation: 'multiFlow 8s linear infinite', // 應用多重速度流動動畫
            }}
          ></div>

          {/* 定義多重流動動畫 (直接封裝在 style 中) */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes multiFlow {
              0% {
                background-position: 300% 0, 250% 0, 400% 0;
              }
              100% {
                background-position: -300% 0, -250% 0, -400% 0;
              }
            }
          `}} />
          
        </div>

        {/* 左側文字標語 (確保 z-index 比電流高) */}
        <div className="max-w-4xl relative z-10 flex flex-col justify-center h-full">
          <h2 className="text-[#D4AF37] text-[10px] md:text-sm tracking-[0.5em] mb-4 md:mb-6 uppercase opacity-80 font-mono">
            Embedded System / IoT Solutions
          </h2>
          <h1 className="text-4xl md:text-9xl font-light tracking-tighter leading-tight mb-8 text-white">
            以核心技術，<br />
            <span className="text-[#D4AF37] font-serif italic">凝結智慧果實。</span>
          </h1>
          <div className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
        </div>
      </section>

      {/* 作品展示區 (Showcase) */}
      <section className="py-20 px-6 md:px-20 relative z-10 bg-[#0A0A0A] border-t border-white/5">
        <div className="flex items-center gap-4 mb-20">
          <h3 className="text-xl md:text-3xl tracking-[0.3em] text-[#D4AF37] font-bold">PROJECT_SHOWCASE</h3>
          <div className="flex-1 h-px bg-white/5"></div>
        </div>
        
        {loading ? (
          <div className="text-center py-20 font-mono text-[10px] tracking-widest text-gray-500 animate-pulse">
            LOADING_PORTFOLIO_DATA...
          </div>
        ) : works.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            {works.map((work, index) => (
              <div key={work.id} className="group relative cursor-pointer">
                <div className="absolute -inset-1 border border-[#D4AF37]/10 rounded-sm scale-95 group-hover:scale-100 group-hover:border-[#D4AF37]/60 transition-all opacity-0 group-hover:opacity-100"></div>
                <div className="relative aspect-video overflow-hidden bg-[#1A1A1A] mb-5 border border-white/5">
                  <iframe
                    className="w-full h-full grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 scale-[1.01]"
                    src={`https://www.youtube.com/embed/${work.video_id}?rel=0&mute=1`}
                    frameBorder="0" allowFullScreen
                  ></iframe>
                </div>
                <div className="flex justify-between items-start px-2 font-mono">
                  <div>
                    <p className="text-[10px] text-[#D4AF37] tracking-[0.3em] uppercase mb-1">{work.category}</p>
                    <h4 className="text-xl font-light group-hover:text-[#D4AF37] transition-colors">{work.title}</h4>
                  </div>
                  <span className="text-[10px] text-gray-700">[{String(index + 1).padStart(2, '0')}]</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-28 text-center border border-dashed border-white/5 rounded-lg bg-[#111]">
            <p className="text-gray-600 italic tracking-[0.3em] text-[10px] uppercase font-mono">正在籌備精彩作品...</p>
          </div>
        )}
      </section>

      {/* 頁尾 */}
      <footer className="py-20 text-center opacity-30 text-[9px] tracking-[0.4em] uppercase border-t border-white/5 font-mono">
        © 2026 SHUO_VISION_LAB. // EMBEDDED_SOLUTIONS.
      </footer>
    </div>
  );
}
