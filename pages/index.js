import { useEffect, useState, useCallback } from "react";
import { createClient } from "@supabase/supabase-js";
import Head from "next/head";
import Link from "next/link";
// 引入動態粒子套件
import Particles from "react-tsparticles";
import { loadEngine } from "tsparticles-engine";

// Supabase 初始化 (請確保 Vercel 環境變數中已設定好 URL 與 KEY)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  // 初始化粒子引擎
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
      } catch (err) { 
        console.error("Fetch error:", err); 
      } finally { 
        setLoading(false); 
      }
    }
    fetchWorks();
  }, []);

  // 電路光點 (Circuit Electricity) 粒子效果設定
  const particlesOptions = {
    fpsLimit: 60,
    particles: {
      color: { value: "#D4AF37" }, // 金色光點
      number: { value: 50, density: { enable: true, area: 800 } }, 
      opacity: {
        value: 0.6,
        random: { enable: true, minimumValue: 0.2 } // 隨機閃爍感
      },
      shape: { type: "circle" },
      size: {
        value: { min: 1, max: 3 },
        random: true
      },
      move: {
        enable: true,
        speed: { min: 1, max: 5 }, // 類訊號傳輸速度
        direction: "none",
        random: true, // 模擬電路中無序但快速的電子
        straight: false,
        outModes: { default: "out" },
        links: {
          enable: true,
          distance: 120,
          color: "#D4AF37",
          opacity: 0.2, // 淡淡的連線模擬匯流排網格
          width: 1
        }
      },
      shadow: {
        enable: true,
        color: "#D4AF37",
        blur: 5
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" }, // 滑鼠靠近會產生連結
        onClick: { enable: true, mode: "push" } 
      },
      modes: {
        grab: { distance: 180, links: { opacity: 0.5 } }
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

      {/* Hero Section: 擬真 PCB 背景 + 亂跑的電路光點 */}
      <section className="min-h-[85vh] flex items-center px-6 md:px-20 relative z-10 overflow-hidden border-b border-white/5">
        
        {/* 底層：剛產生的擬真 PCB 背景圖 (位於 public/pcb_bg.png) */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img 
            src="/images/pcb_bg.png" 
            alt="Professional PCB Layout"
            className="w-full h-full object-cover object-right select-none"
          />
        </div>

        {/* 中層：動態電路光點粒子 */}
        <Particles 
          id="hero-particles" 
          init={particlesInit} 
          options={particlesOptions} 
          className="absolute inset-0 z-10 opacity-50"
        />
        
        {/* 左側標語文字 */}
        <div className="max-w-4xl relative z-20">
          <h2 className="text-[#D4AF37] text-[10px] md:text-sm tracking-[0.5em] mb-4 uppercase opacity-80 font-mono">
            Embedded System / IoT Solutions
          </h2>
          <h1 className="text-4xl md:text-8xl font-light tracking-tighter leading-tight mb-8">
            以核心技術，<br />
            <span className="text-[#D4AF37] font-serif italic">凝結智慧果實。</span>
          </h1>
          <div className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
        </div>
      </section>

      {/* 作品展示區 */}
      <section className="py-20 md:py-32 px-6 md:px-20 relative z-10 bg-[#0A0A0A]">
        <div className="flex items-center gap-4 mb-20">
          <h3 className="text-xl md:text-2xl tracking-[0.3em] text-[#D4AF37] font-bold">PROJECT_SHOWCASE</h3>
          <div className="flex-1 h-px bg-white/5"></div>
        </div>
        
        {loading ? (
          <div className="text-center py-20 font-mono text-[10px] tracking-widest text-gray-500 animate-pulse">
            LOADING_PORTFOLIO_DATA...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {works.map((work, index) => (
              <div key={work.id} className="group cursor-pointer">
                <div className="relative aspect-video overflow-hidden bg-[#111] mb-6 border border-white/5 group-hover:border-[#D4AF37]/30 transition-all duration-700">
                  <iframe
                    className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                    src={`https://www.youtube.com/embed/${work.video_id}?rel=0&mute=1`}
                    frameBorder="0" allowFullScreen
                  ></iframe>
                </div>
                <div className="flex justify-between items-start font-mono">
                  <div>
                    <p className="text-[10px] text-[#D4AF37] tracking-widest uppercase mb-1">{work.category}</p>
                    <h4 className="text-xl font-light group-hover:text-[#D4AF37] transition-colors">{work.title}</h4>
                  </div>
                  <span className="text-[10px] text-gray-700">[{String(index + 1).padStart(2, '0')}]</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="py-20 text-center opacity-30 text-[9px] tracking-[0.4em] uppercase border-t border-white/5 font-mono">
        © 2026 SHUO_VISION_LAB // ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
