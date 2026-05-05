import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Head from "next/head";
import Link from "next/link"; // 引入 Next.js 的 Link 組件用於分頁

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
    <div className="bg-background min-h-screen text-white selection:bg-primary selection:text-black">
      <Head>
        <title>SHUO VISION | 碩果工作室</title>
        <meta name="description" content="以願景，凝結成果 - 碩果工作室專業影片製作" />
      </Head>

      {/* 導覽列：包含分頁選項 */}
      <nav className="p-6 md:px-20 flex justify-between items-center sticky top-0 bg-background/90 backdrop-blur-md z-50 border-b border-white/5">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src="/logo.png" alt="Logo" className="h-8 md:h-10 w-auto" />
          <span className="text-primary font-bold tracking-[0.3em] text-lg md:text-xl">SHUO VISION</span>
        </div>
        
        {/* 選項區：這裡使用了 Link 來實現真正的分頁跳轉 */}
        <div className="flex gap-6 md:gap-10 text-[10px] md:text-xs uppercase tracking-[0.2em] items-center">
          <Link href="/about">
            <a className="hover:text-primary transition-colors">About</a>
          </Link>
          <Link href="/services">
            <a className="hover:text-primary transition-colors">Services</a>
          </Link>
          <Link href="/contact">
            <a className="px-4 py-2 border border-primary/30 text-primary hover:bg-primary hover:text-black transition-all rounded-full">
              Contact
            </a>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-[85vh] flex flex-col justify-center px-8 md:px-20">
        <h2 className="text-accent text-xs tracking-[0.5em] mb-6 uppercase opacity-70">Professional Creative Studio</h2>
        <h1 className="text-6xl md:text-9xl font-light tracking-tighter leading-[0.9] mb-8">
          以願景，<br />
          <span className="text-primary font-serif italic">凝結成果。</span>
        </h1>
        <div className="w-20 h-[1px] bg-primary animate-pulse"></div>
      </section>

      {/* 作品展示區 (Visions) */}
      <section id="visions" className="py-24 px-8 md:px-20 bg-black/20">
        <h3 className="text-2xl tracking-[0.3em] mb-16 text-primary">SELECTED VISIONS</h3>
        
        {loading ? (
          <div className="py-20 flex justify-center">
            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {works.map((work, index) => (
              <div key={work.id} className="group">
                <div className="relative aspect-video overflow-hidden bg-secondary mb-6 border border-white/5 group-hover:border-primary/40 transition-all duration-500 shadow-2xl">
                  <iframe
                    className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000"
                    src={`https://www.youtube.com/embed/${work.video_id}?rel=0`}
                    title={work.title}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex justify-between items-start px-2">
                  <div>
                    <p className="text-[9px] text-primary tracking-[0.4em] uppercase mb-2 font-bold">{work.category || "PROJECT"}</p>
                    <h4 className="text-xl md:text-2xl font-light">{work.title}</h4>
                  </div>
                  <span className="text-[10px] text-gray-700 font-mono">/ 0{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 頁尾 */}
      <footer className="py-32 px-8 text-center bg-secondary/20">
        <h2 className="text-3xl md:text-5xl font-light mb-8 hover:text-primary transition-colors underline underline-offset-[12px] decoration-1 decoration-white/10">
          hello@shuovision.com
        </h2>
        <div className="mt-20 text-[9px] tracking-[0.3em] text-gray-700 uppercase">
          © 2026 SHUO VISION STUDIO. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
