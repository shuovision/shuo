import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Head from "next/head";
import Link from "next/link";
// 引入電流動畫 CSS
import styles from "../styles/circuit.module.css";

// Supabase 初始化 (確保你的 Vercel 環境變數已設定)
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
      } catch (err) { console.error(err); } finally { setLoading(false); }
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
            <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_10px_#D4AF37]"></div>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-sm md:text-xl font-mono group-hover:scale-105 transition-transform">SHUO_VISION_LAB</span>
          </div>
        </Link>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] md:text-xs uppercase tracking-[0.15em] items-center font-bold">
          <Link href="/about"><a className="hover:text-[#D4AF37] transition-all">About</a></Link>
          <Link href="/services"><a className="hover:text-[#D4AF37] transition-all">Services</a></Link>
          <Link href="/products"><a className="hover:text-[#D4AF37] transition-all">Products</a></Link>
          <Link href="/contact">
            <a className="px-5 py-2 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 rounded-full bg-[#D4AF37]/5 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
              Contact
            </a>
          </Link>
        </div>
      </nav>

      {/* Hero Section - 應用電流動畫 */}
      <section className="min-h-[85vh] md:min-h-[90vh] flex items-center px-6 md:px-20 relative overflow-hidden border-b border-white/5 bg-[#0A0A0A]">
        
        {/* CSS 動畫容器 */}
        <div className={styles.heroContainer}>
            {/* 底層：靜態 PCB 紋理 */}
            <img 
                src="/images/pcb_bg.png" 
                alt="Professional PCB Layout"
                className={styles.pcbBase}
            />
            {/* 上層：動態電流層 (使用同一張圖作為遮罩) */}
            <div className={styles.pcbElectricity}></div>
        </div>

        {/* 上層文字主體 - 確保 z-index 比電流高 */}
        <div className="max-w-4xl relative z-30 flex flex-col justify-center h-full">
          <h2 className="text-[#D4AF37] text-[10px] md:text-sm tracking-[0.5em] mb-4 md:mb-6 uppercase opacity-80 font-mono">
            Embedded System / IoT Solutions
          </h2>
          <h1 className="text-4xl md:text-9xl font-light tracking-tighter leading-tight md:leading-none mb-6 md:mb-8 text-white">
            以核心技術，<br />
            <span className="text-[#D4AF37] font-serif italic">凝結智慧果實。</span>
          </h1>
          <div className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
        </div>
      </section>

      {/* 作品展示區维持原樣 */}
      <section className="py-16 md:py-32 px-6 md:px-20 relative z-10 bg-[#0A0A0A] border-t border-white/5">
        <div className="flex items-center gap-4 mb-12 md:mb-20">
          <h3 className="text-xl md:text-3xl tracking-[0.3em] text-[#D4AF37] font-bold">PROJECT_SHOWCASE</h3>
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-gray-700 text-xs font-mono hidden md:block">[ WORKS 2026 ]</span>
        </div>
        
        {loading ? (
          <div className="text-center py-20">
            <div className="w-8 h-8 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 animate-pulse text-[10px] tracking-widest uppercase font-mono">Connecting_Database...</p>
          </div>
        ) : works.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            {works.map((work, index) => (
              <div key={work.id} className="group relative cursor-pointer">
                <div className="absolute -inset-1 border border-[#D4AF37]/10 rounded-sm scale-95 group-hover:scale-100 group-hover:border-[#D4AF37]/60 transition-all opacity-0 group-hover:opacity-100"></div>
                <div className="relative aspect-video overflow-hidden bg-[#1A1A1A] mb-5 shadow-[0_0_30px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_60px_rgba(212,175,55,0.3)] transition-all duration-700">
                  <iframe
                    className="w-full h-full grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 scale-[1.01]"
                    src={`https://www.youtube.com/embed/${work.video_id}?rel=0&mute=1`} 
                    frameBorder="0" allowFullScreen
                  ></iframe>
                </div>
                <div className="flex justify-between items-start px-2 font-mono">
                  <div>
                    <p className="text-[10px] text-[#D4AF37] tracking-[0.3em] uppercase mb-1">{work.category || "IoT Project"}</p>
                    <h4 className="text-lg md:text-2xl font-light group-hover:text-[#D4AF37] transition-colors">{work.title}</h4>
                  </div>
                  <span className="text-[10px] text-gray-700">[{String(index + 1).padStart(2, '0')}]</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-28 text-center border-2 border-dashed border-white/5 rounded-lg bg-[#111]">
            <p className="text-gray-600 italic tracking-[0.3em] text-[10px] uppercase font-mono">正在籌備精彩作品...</p>
          </div>
        )}
      </section>

      {/* 頁尾维持原樣 */}
      <footer className="py-20 text-center opacity-30 text-[9px] tracking-[0.3em] uppercase border-t border-white/5 font-mono">
        © 2026 SHUO_VISION_LAB. // EMBEDDED_SOLUTIONS.
      </footer>
    </div>
  );
}
