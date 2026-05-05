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

  // 從資料庫抓取作品集
  useEffect(() => {
    async function fetchWorks() {
      const { data, error } = await supabase
        .from("portfolio_works")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) setWorks(data);
      setLoading(false);
    }
    fetchWorks();
  }, []);

  return (
    <div className="bg-background min-h-screen text-white selection:bg-primary selection:text-black">
      <Head>
        <title>SHUO VISION | 碩果工作室</title>
      </Head>

      {/* 導覽列 */}
      <nav className="p-8 flex justify-between items-center sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <span className="text-primary font-bold tracking-[0.3em] text-xl">SHUO VISION</span>
        </div>
        <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em]">
          <a href="#visions" className="hover:text-primary transition-colors">Visions</a>
          <a href="#fruits" className="hover:text-primary transition-colors">Fruits</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-[90vh] flex flex-col justify-center px-8 md:px-20">
        <h2 className="text-accent text-sm tracking-[0.5em] mb-6 uppercase animate-fade-in">Professional Creative Studio</h2>
        <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-none mb-8">
          以願景，<br />
          <span className="text-primary font-serif italic">凝結成果。</span>
        </h1>
        <div className="w-20 h-[1px] bg-primary"></div>
      </section>

      {/* 作品展示區 (Visions) */}
      <section id="visions" className="py-20 px-8 md:px-20">
        <h3 className="text-2xl tracking-[0.3em] mb-12 text-primary">SELECTED VISIONS</h3>
        
        {loading ? (
          <div className="text-gray-500 italic">載入中...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {works.map((work) => (
              <div key={work.id} className="group cursor-pointer">
                <div className="relative aspect-video overflow-hidden bg-secondary mb-4 border border-white/5 group-hover:border-primary/50 transition-all">
                  {/* YouTube 嵌入 */}
                  <iframe
                    className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                    src={`https://www.youtube.com/embed/${work.video_id}`}
                    title={work.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-primary tracking-widest uppercase mb-1">{work.category}</p>
                    <h4 className="text-xl font-light">{work.title}</h4>
                  </div>
                  <span className="text-[10px] text-gray-600 italic">/ 0{works.indexOf(work) + 1}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 聯絡區 */}
      <footer id="contact" className="py-40 px-8 text-center bg-secondary/30">
        <p className="text-gray-500 mb-4 tracking-widest">READY TO START A PROJECT?</p>
        <h2 className="text-4xl md:text-5xl font-light mb-10 hover:text-primary transition-colors cursor-pointer underline underline-offset-8">
          hello@shuovision.com
        </h2>
        <div className="mt-20 text-[10px] tracking-[0.2em] text-gray-700">
          © 2026 SHUO VISION STUDIO. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
