import { useEffect, useState, useCallback } from "react";
import { createClient } from "@supabase/supabase-js";
import Head from "next/head";
import Link from "next/link";
// 引入動態背景套件
import Particles from "react-tsparticles";
import { loadEngine } from "tsparticles-engine";

// Supabase 初始化 (確保你的 Vercel 環境變數已設定)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  // 初始化動態背景引擎
  const particlesInit = useCallback(async (engine) => {
    await loadEngine(engine);
  }, []);

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

  // 強化版：擬真電路光點跑動設定 (模擬數據匯流排)
  const particlesOptions = {
    fpsLimit: 60,
    particles: {
      color: { value: "#D4AF37" }, // 金色光點
      number: { 
        value: 100, // 增加光點數量，讓效果更明顯
        density: { enable: true, area: 800 } 
      }, 
      opacity: {
        value: 0.8, // 提高亮度
        random: { enable: true, minimumValue: 0.3 } // 隨機閃爍感
      },
      shape: { type: "circle" }, // 圓形光點
      size: {
        value: { min: 1, max: 4 }, // 隨機大小，有些像開關訊號，有些像數據束
        random: true
      },
      move: {
        enable: true,
        speed: { min: 3, max: 9 }, // **提高速度**，模擬高速通訊
        direction: "bottom-right", // **指定方向**：主要由左上向右下移動，呼應 PCB 的佈局
        random: false, // **不使用隨機**：讓光點沿著大致的方向前進
        straight: false, // 允許稍微偏離
        outModes: { default: "out" },
        // **拖影效果** (Attract)：這能讓光點在移動時產生金色的拖影
        trail: {
          enable: true,
          length: 5, // 拖影長度
          fillColor: "#0A0A0A" // 拖影顏色與背景一致，產生漸隱效果
        },
        links: {
          enable: true,
          distance: 100,
          color: "#D4AF37",
          opacity: 0.3, // 淡淡的連線模擬複雜的數據網格
          width: 1
        }
      },
      // **增加光暈效果** (Glow)
      shadow: {
        enable: true,
        color: "#D4AF37",
        blur: 7, // 增加光暈範圍
        opacity: 0.5
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" }, // 滑鼠靠近會吸引光點並產生連結
        onClick: { enable: true, mode: "push" } 
      },
      modes: {
        grab: { distance: 200, links: { opacity: 0.6 } }
      }
    },
    detectRetina: true,
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white selection:bg-[#D4AF37] selection:text-black font-sans relative overflow-hidden">
      <Head>
        <title>SHUO VISION | IoT & Embedded Engineering LAB</title>
      </Head>

      {/* 導覽列 */}
      <nav className="p-4 md:px-12 flex flex-col md:flex-row justify-between items-center sticky top-0 bg-[#0A0A0A]/95 backdrop-blur-sm z-50 border-b border-white/5 gap-4">
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

      {/* Hero Section - 擬真 PCB 背景 + 亂跑的電路光點 */}
      <section className="min-h-[85vh] md:min-h-[90vh] flex items-center px-6 md:px-20 relative z-10 overflow-hidden border-b border-white/5 bg-[#0A0A0A]">
        
        {/* 底層：擬真 PCB 紋理背景 (放在 public/images/pcb_bg.png) */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none select-none">
          <img 
            src="/images/pcb_bg.png" 
            alt="Professional PCB Layout Texture"
            className="w-full h-full object-cover object-right"
          />
        </div>
        
        {/* 中層：動態電路光點 ( TSPaticles) - 疊加在 PCB 之上 */}
        <Particles 
            id="hero-particles" 
            init={particlesInit} 
            options={particlesOptions} 
            className="absolute inset-0 z-10 opacity-60 pointer-events-none" 
        />
        
        {/* 背景裝飾光暈 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] -z-10"></div>

        {/* 上層：左側文字主體 */}
        <div className="max-w-4xl relative z-20 flex flex-col justify-center h-full">
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

      {/* 頁尾 */}
      <footer className="py-20 text-center opacity-30 text-[9px] tracking-[0.3em] uppercase border-t border-white/5 font-mono">
        © 2026 SHUO_VISION_LAB. // EMBEDDED_SOLUTIONS.
      </footer>
    </div>
  );
}
