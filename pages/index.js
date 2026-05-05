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

  // 動態數據流背景設定 (Matrix Effect)
  const particlesOptions = {
    fpsLimit: 60,
    particles: {
      color: { value: "#D4AF37" }, // 金色數據
      number: { value: 30, density: { enable: true, area: 800 } }, // 數量不太太多
      opacity: { value: 0.1 }, // 非常淡，不搶主體
      shape: { type: "char", character: { value: ["0", "1", "{", "}", "[", "]", "/", "*"], font: "Monospace", fill: true } },
      size: { value: 8 },
      move: { enable: true, speed: 0.5, direction: "bottom", straight: true, outModes: { default: "out" } }
    },
    interactivity: { events: { onHover: { enable: true, mode: "grab" } }, modes: { grab: { distance: 150, links: { opacity: 0.2 } } } },
    detectRetina: true,
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white selection:bg-[#D4AF37] selection:text-black font-sans relative overflow-hidden">
      <Head>
        <title>SHUO VISION | IoT & Embedded Engineering LAB</title>
      </Head>

      {/* 動態代碼背景 (TSPaticles) */}
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0 z-0" />

      {/* 導覽列 (Responsive Nav) */}
      <nav className="p-4 md:px-12 flex flex-col md:flex-row justify-between items-center sticky top-0 bg-[#0A0A0A]/95 backdrop-blur-sm z-50 border-b border-white/5 gap-4">
        {/* Logo 區 - 模擬硬體指示燈 */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_10px_#D4AF37]"></div>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-sm md:text-xl font-mono group-hover:scale-105 transition-transform">SHUO_VISION_LAB</span>
          </div>
        </Link>
        
        {/* 選單區 - 包含 Products */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] md:text-xs uppercase tracking-[0.15em] items-center font-bold">
          <Link href="/about"><a className="hover:text-[#D4AF37] transition-all">About</a></Link>
          <Link href="/services"><a className="hover:text-[#D4AF37] transition-all">Services</a></Link>
          <Link href="/products"><a className="hover:text-[#D4AF37] transition-all">Products</a></Link>
          {/* Contact 連結特別加上外框 (Call to Action) */}
          <Link href="/contact">
            <a className="px-5 py-2 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 rounded-full bg-[#D4AF37]/5 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
              Contact
            </a>
          </Link>
        </div>
      </nav>

      {/* Hero Section - 文字在左，電路在右 */}
      <section className="min-h-[75vh] md:min-h-[85vh] flex items-center px-6 md:px-20 relative z-10 overflow-hidden border-b border-white/5 bg-[#0A0A0A]">
        {/* 背景光暈 */}
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-[100px] -z-10"></div>
        
        {/* 電路圖背景裝飾 (SVG) - 放置於右側 */}
        <div className="absolute right-[-5%] md:right-[5%] top-1/2 -translate-y-1/2 w-[120%] md:w-[60%] h-full opacity-10 pointer-events-none z-0">
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* 金色線條幾何電路圖案 */}
            <g stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.8">
              {/* 中央處理核心 */}
              <rect x="200" y="200" width="100" height="100" rx="2" />
              <circle cx="250" cy="250" r="15" />
              
              {/* 向上延伸分支 (模擬通訊協定) */}
              <path d="M250,200 L250,100 L350,100 L350,50" />
              <circle cx="350" cy="50" r="4" fill="#D4AF37" />
              <path d="M250,150 L300,150 L300,120" />
              
              {/* 向右延伸分支 (模擬 ESP32 GPIO) */}
              <path d="M300,220 L400,220 L400,180 L450,180" />
              <path d="M300,250 L420,250" />
              <path d="M300,280 L400,280 L400,320 L450,320" />
              <rect x="440" y="170" width="20" height="170" rx="1" opacity="0.5" />

              {/* 向左延伸分支 */}
              <path d="M200,250 L100,250 L100,350 L50,350" />
              <circle cx="50" cy="350" r="4" fill="#D4AF37" fillOpacity="0.5"/>
              
              {/* 向下延伸分支 (模擬 Ameba 音訊 I/O) */}
              <path d="M230,300 L230,400 L150,400" />
              <path d="M270,300 L270,420 L350,420" />
              <rect x="130" y="390" width="20" height="20" rx="1" />
              <circle cx="360" cy="420" r="10" />

              {/* 裝飾性節點 */}
              <circle cx="250" cy="150" r="2" fill="#D4AF37" />
              <circle cx="150" cy="250" r="2" fill="#D4AF37" />
              <circle cx="250" cy="350" r="2" fill="#D4AF37" />
            </g>
          </svg>
        </div>

        {/* 左側文字主體 */}
        <div className="max-w-4xl relative z-10 flex flex-col justify-center h-full">
          <h2 className="text-[#D4AF37] text-[10px] md:text-sm tracking-[0.5em] mb-4 md:mb-6 uppercase opacity-70 font-mono">
            Embedded System / IoT Solutions
          </h2>
          <h1 className="text-4xl md:text-9xl font-light tracking-tighter leading-tight md:leading-none mb-6 md:mb-8 text-white">
            以核心技術，<br />
            <span className="text-[#D4AF37] font-serif italic">凝結智慧果實。</span>
          </h1>
          <div className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
        </div>
      </section>

      {/* 作品展示區 (Showcase) */}
      <section className="py-16 md:py-32 px-6 md:px-20 relative z-10 bg-black/50 border-t border-white/5">
        <div className="flex items-center gap-4 mb-12 md:mb-20">
          <h3 className="text-xl md:text-3xl tracking-[0.3em] text-[#D4AF37] font-bold">PROJECT_SHOWCASE</h3>
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-gray-700 text-xs font-mono hidden md:block">[ WORKS 2026 ]</span>
        </div>
        
        {loading ? (
          // 載入中畫面
          <div className="text-center py-20">
            <div className="w-8 h-8 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 animate-pulse text-[10px] tracking-widest uppercase font-mono">Connecting_Database...</p>
          </div>
        ) : works.length > 0 ? (
          // 作品列表網格
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            {works.map((work, index) => (
              <div key={work.id} className="group relative">
                {/* 電子螢幕框框 - 鼠標懸停效果 */}
                <div className="absolute -inset-1 border border-[#D4AF37]/10 rounded-sm scale-95 group-hover:scale-100 group-hover:border-[#D4AF37]/60 transition-all opacity-0 group-hover:opacity-100"></div>
                
                {/* 影片容器 */}
                <div className="relative aspect-video overflow-hidden bg-[#1A1A1A] mb-5 shadow-[0_0_30px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_60px_rgba(212,175,55,0.3)] transition-all duration-700">
                  <iframe
                    className="w-full h-full grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 scale-[1.01]"
                    src={`https://www.youtube.com/embed/${work.video_id}?rel=0&showinfo=0&autoplay=0&mute=1`} // 預設靜音、無相關影片
                    frameBorder="0" allowFullScreen
                  ></iframe>
                </div>
                
                {/* 作品文字資訊 */}
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
          // 空資料畫面
          <div className="py-28 text-center border-2 border-dashed border-white/5 rounded-lg bg-[#111] hover:border-[#D4AF37]/30 transition-colors">
            <p className="text-gray-600 italic tracking-[0.3em] text-[10px] uppercase font-mono">正在籌備精彩作品...</p>
            <p className="text-[#D4AF37] text-xs mt-3">await_project_data();</p>
          </div>
        )}
      </section>

      {/* 頁尾 (Footer) */}
      <footer className="py-20 text-center opacity-30 text-[9px] tracking-[0.3em] uppercase border-t border-white/5 font-mono">
        © 2026 SHUO_VISION_LAB. // EMBEDDED_SOLUTIONS.
      </footer>
    </div>
  );
}
