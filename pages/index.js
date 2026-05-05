import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Head from "next/head";

// 初始化 Supabase 客戶端
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. 從資料庫抓取作品集
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

  // 2. 處理平滑捲動的函式
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // 扣除 header 高度
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-background min-h-screen text-white selection:bg-primary selection:text-black font-sans">
      <Head>
        <title>SHUO VISION | 碩果工作室</title>
        <meta name="description" content="碩果工作室 - 以願景，凝結成果。專業影片製作與創意設計。" />
      </Head>

      {/* 導覽列：增加毛玻璃與陰影 */}
      <nav className="p-6 md:px-20 flex justify-between items-center sticky top-0 bg-background/90 backdrop-blur-md z-50 border-b border-white/5">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src="/logo.png" alt="Logo" className="h-8 md:h-10 w-auto group-hover:scale-110 transition-transform" />
          <span className="text-primary font-bold tracking-[0.3em] text-lg md:text-xl">SHUO VISION</span>
        </div>
        
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em]">
          <a href="#visions" onClick={(e) => handleScroll(e, 'visions')} className="hover:text-primary transition-colors">Visions</a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-primary transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section：增加進場動畫與漸層感 */}
      <section className="h-[85vh] flex flex-col justify-center px-8 md:px-20 relative">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[120px] -z-10"></div>
        <h2 className="text-accent text-xs md:text-sm tracking-[0.5em] mb-6 uppercase opacity-70">Professional Creative Studio</h2>
        <h1 className="text-6xl md:text-9xl font-light tracking-tighter leading-[0.9] mb-8">
          以願景，<br />
          <span className="text-primary font-serif italic">凝結成果。</span>
        </h1>
        <div className="w-20 h-[1px] bg-primary animate-pulse"></div>
      </section>

      {/* 作品展示區 (Visions) */}
      <section id="visions" className="py-24 px-8 md:px-20 bg-black/20">
        <div className="flex justify-between items-end mb-16">
          <h3 className="text-2xl md:text-3xl tracking-[0.3em] text-primary">SELECTED VISIONS</h3>
          <span className="text-gray-600 text-xs tracking-widest hidden md:block">WORKS / 2026</span>
        </div>
        
        {loading ? (
          <div className="py-20 flex justify-center">
            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : works.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {works.map((work, index) => (
              <div key={work.id} className="group cursor-pointer">
                <div className="relative aspect-video overflow-hidden bg-secondary mb-6 border border-white/5 group-hover:border-primary/40 transition-all duration-500 shadow-2xl">
                  <iframe
                    className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-[1.01]"
                    src={`https://www.youtube.com/embed/${work.video_id}?rel=0&showinfo=0`}
                    title={work.title}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex justify-between items-start px-2">
                  <div>
                    <p className="text-[9px] text-primary tracking-[0.4em] uppercase mb-2 font-bold">{work.category || "PROJECT"}</p>
                    <h4 className="text-xl md:text-2xl font-light group-hover:text-primary transition-colors">{work.title}</h4>
                  </div>
                  <span className="text-[10px] text-gray-700 font-mono italic">[{String(index + 1).padStart(2, '0')}]</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-white/10 rounded-lg">
            <p className="text-gray-500 italic tracking-widest text-sm uppercase">正在籌備精彩作品...</p>
          </div>
        )}
      </section>

      {/* 聯絡區：正式化聯絡資訊 */}
      <footer id="contact" className="py-48 px-8 text-center bg-secondary/20">
        <p className="text-gray-500 mb-6 tracking-[0.4em] text-xs uppercase">Ready to start a project?</p>
        <a 
          href="mailto:hello@shuovision.com" 
          className="text-3xl md:text-6xl font-light mb-12 inline-block hover:text-primary transition-all duration-500 underline underline-offset-[16px] decoration-1 decoration-white/10 hover:decoration-primary"
        >
          hello@shuovision.com
        </a>
        
        <div className="mt-32 flex flex-col items-center">
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent mb-8"></div>
          <div className="text-[9px] tracking-[0.3em] text-gray-700 uppercase">
            © 2026 SHUO VISION STUDIO. <br className="md:hidden" /> ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
