import { useEffect, useState, useCallback } from "react";
import { createClient } from "@supabase/supabase-js";
import Head from "next/head";
import Link from "next/link";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // 改用 loadFull 確保所有功能載入

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  // 強制初始化引擎
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
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

  // 強化動態參數
  const particlesOptions = {
    fullScreen: { enable: false }, // 限制在 Hero 區域
    fpsLimit: 120,
    particles: {
      number: { value: 80, density: { enable: true, area: 800 } },
      color: { value: "#D4AF37" },
      shape: { type: "circle" },
      opacity: {
        value: { min: 0.3, max: 0.8 },
        animation: { enable: true, speed: 1, sync: false }
      },
      size: {
        value: { min: 1, max: 3 },
      },
      move: {
        enable: true,
        speed: 4, // 增加速度
        direction: "bottom-right",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#D4AF37",
        opacity: 0.3,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        grab: { distance: 200, links: { opacity: 0.6 } },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-[#D4AF37]">
      <Head><title>SHUO VISION | IoT Lab</title></Head>

      <nav className="p-4 md:px-12 flex flex-col md:flex-row justify-between items-center sticky top-0 bg-[#0A0A0A]/95 backdrop-blur-md z-50 border-b border-white/5 gap-4">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse"></div>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] font-mono uppercase">Shuo_Vision_Lab</span>
          </div>
        </Link>
        <div className="flex gap-6 text-[10px] md:text-xs uppercase font-bold tracking-widest">
          <Link href="/about"><a className="hover:text-[#D4AF37]">About</a></Link>
          <Link href="/services"><a className="hover:text-[#D4AF37]">Services</a></Link>
          <Link href="/products"><a className="hover:text-[#D4AF37]">Products</a></Link>
          <Link href="/contact"><a className="border border-[#D4AF37] px-4 py-1.5 rounded-full text-[#D4AF37]">Contact</a></Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-[80vh] relative flex items-center px-6 md:px-20 overflow-hidden border-b border-white/5">
        {/* 背景圖 */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img src="/images/pcb_bg.png" className="w-full h-full object-cover object-right" alt="PCB" />
        </div>
        
        {/* 動態粒子元件 - 加上 key 強制刷新 */}
        <Particles 
          key="hero-particles"
          id="tsparticles" 
          init={particlesInit} 
          options={particlesOptions} 
          className="absolute inset-0 z-10"
        />

        <div className="relative z-20 max-w-4xl">
          <h2 className="text-[#D4AF37] text-xs tracking-[0.5em] mb-4 font-mono opacity-80 uppercase">Embedded & IoT Solution</h2>
          <h1 className="text-4xl md:text-8xl font-light mb-8 leading-tight">以核心技術，<br/><span className="text-[#D4AF37] italic font-serif">凝結智慧果實。</span></h1>
          <div className="w-20 h-[1px] bg-[#D4AF37]"></div>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-20 px-6 md:px-20">
        <h3 className="text-[#D4AF37] text-xl font-bold tracking-widest mb-16 font-mono">PROJECT_SHOWCASE</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {works.map((work) => (
            <div key={work.id} className="group">
              <div className="aspect-video bg-zinc-900 mb-6 border border-white/5 overflow-hidden group-hover:border-[#D4AF37]/50 transition-all">
                <iframe className="w-full h-full opacity-70 group-hover:opacity-100 transition-opacity" src={`https://www.youtube.com/embed/${work.video_id}?mute=1`} frameBorder="0" allowFullScreen></iframe>
              </div>
              <h4 className="text-xl font-light font-mono uppercase">{work.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
