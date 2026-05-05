import { useEffect, useState, useCallback } from "react";
import { createClient } from "@supabase/supabase-js";
import Head from "next/head";
import Link from "next/link";
// 引入動態背景套件
import Particles from "react-tsparticles";
import { loadEngine } from "tsparticles-engine";

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

  // 動態數據流背景設定
  const particlesOptions = {
    fpsLimit: 60,
    particles: {
      color: { value: "#D4AF37" }, // 金色數據
      number: { value: 30, density: { enable: true, area: 800 } }, // 數量不要太多
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
        <title>SHUO VISION | IoT & Embedded Engineering</title>
      </Head>

      {/* 動態代碼背景 (Matrix Effect) */}
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0 z-0" />

      {/* 導覽列 */}
      <nav className="p-4 md:px-12 flex flex-col md:flex-row justify-between items-center sticky top-0 bg-[#0A0A0A]/95 backdrop-blur-sm z-50 border-b border-white/5 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></div> {/* 模擬硬體指示燈 */}
          <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-sm md:text-xl font-mono">SHUO_VISION_LAB</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] md:text-xs uppercase tracking-[0.15em] items-center font-bold">
          <Link href="/about"><a className="hover:text-[#D4AF37] transition-all">About</a></Link>
          <Link href="/services"><a className="hover:text-[#D4AF37] transition-all">Services</a></Link>
          <Link href="/contact">
            <a className="px-5 py-2 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 rounded-full bg-[#D4AF37]/5">
              Contact_Us
            </a>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-[70vh] md:h-[85vh] flex flex-col justify-center px-6 md:px-20 text-left relative z-10">
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-[100px] -z-10"></div>
        <h2 className="text-[#D4AF37] text-[10px] md:text-sm tracking-[0.5em] mb-4 md:mb-6 uppercase opacity-70 font-mono">Embedded System / IoT Solutions</h2>
        <h1 className="text-4xl md:text-9xl font-light tracking-tighter leading-tight md:leading-none mb-6 md:mb-8">
          以核心技術，<br />
          <span className="text-[#D4AF37] font-serif italic">凝結智慧果實。</span>
        </h1>
        <div className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
      </section>

      {/* 作品展示區 */}
      <section className="py-16 md:py-32 px-6 md:px-20 relative z-10 bg-black/50 border-t border-white/5">
        <div className="flex items-center gap-4 mb-12 md:mb-20">
          <h3 className="text-xl md:text-3xl tracking-[0.3em] text-[#D4AF37] font-bold">PROJECT_SHOWCASE</h3>
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-gray-700 text-xs font-mono hidde md:block">[ WORKS 2026 ]</span>
        </div>
        
        {loading ? (
          <div className="text-center py-20">
            <div className="w-8 h-8 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 animate-pulse text-[10px] tracking-widest uppercase font-mono">Connecting_Database...</p>
          </div>
        ) : works.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            {works.map((work, index) => (
              <div key={work.id} className="group relative">
                {/* 電子螢幕框框 */}
                <div className="absolute -inset-1 border border-[#D4AF37]/20 rounded-sm scale-95 group-hover:scale-100 group-hover:border-[#D4AF37]/60 transition-all opacity-0 group-hover:opacity-100"></div>
                <div className="relative aspect-video overflow-hidden bg-[#1A1A1A] mb-5 shadow-[0_0_30px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_60px_rgba(212,175,55,0.3)] transition-all duration-700">
                  <iframe
                    className="w-full h-full grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 scale-[1.01]"
                    src={`https://www.youtube.com/embed/${work.video_id}?rel=0&showinfo=0&autoplay=0&mute=1`} // 預設靜音
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
          <div className="py-28 text-center border-2 border-dashed border-white/5 rounded-lg bg-[#111] hover:border-[#D4AF37]/30 transition-colors">
            <p className="text-gray-600 italic tracking-[0.3em] text-[10px] uppercase font-mono">正在籌備精彩作品...</p>
            <p className="text-[#D4AF37] text-xs mt-3">await_project_data();</p>
          </div>
        )}
      </section>

      <footer className="py-20 text-center opacity-30 text-[9px] tracking-[0.3em] uppercase border-t border-white/5 font-mono">
        © 2026 SHUO_VISION_LAB. // EMBEDDED_SOLUTIONS.
      </footer>
    </div>
  );
}
