import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Head from "next/head";
import Link from "next/link";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className="bg-background min-h-screen text-white selection:bg-primary selection:text-black">
      <Head>
        <title>SHUO VISION | 碩果工作室</title>
      </Head>

      {/* 修正後的導覽列：確保手機也能看到按鈕 */}
      <nav className="p-4 md:px-20 flex flex-col md:flex-row justify-between items-center sticky top-0 bg-background/90 backdrop-blur-md z-50 border-b border-white/5 gap-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-7 w-auto" />
          <span className="text-primary font-bold tracking-[0.3em] text-base md:text-lg">SHUO VISION</span>
        </div>
        
        {/* 選項區：移除 hidden，讓手機也看得到 */}
        <div className="flex gap-4 md:gap-10 text-[10px] md:text-xs uppercase tracking-[0.2em] items-center">
          <Link href="/about"><a className="hover:text-primary transition-colors">About</a></Link>
          <Link href="/services"><a className="hover:text-primary transition-colors">Services</a></Link>
          <Link href="/contact">
            <a className="px-4 py-1.5 border border-primary/40 text-primary hover:bg-primary hover:text-black transition-all rounded-full">
              Contact
            </a>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-[70vh] flex flex-col justify-center px-8 md:px-20">
        <h2 className="text-accent text-[10px] tracking-[0.5em] mb-4 uppercase opacity-60 font-light">Professional Creative Studio</h2>
        <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-none mb-8">
          以願景，<br />
          <span className="text-primary font-serif italic">凝結成果。</span>
        </h1>
        <div className="w-16 h-[1px] bg-primary"></div>
      </section>

      {/* 作品展示區 */}
      <section className="py-20 px-8 md:px-20">
        <h3 className="text-lg md:text-xl tracking-[0.4em] mb-12 text-primary font-bold">SELECTED VISIONS</h3>
        {loading ? (
          <div className="text-gray-600 animate-pulse text-[10px] tracking-widest uppercase">Fetching Visions...</div>
        ) : works.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {works.map((work, index) => (
              <div key={work.id} className="group cursor-pointer">
                <div className="relative aspect-video overflow-hidden bg-secondary mb-4 border border-white/5 group-hover:border-primary/50 transition-all">
                  <iframe
                    className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                    src={`https://www.youtube.com/embed/${work.video_id}`}
                    frameBorder="0" allowFullScreen
                  ></iframe>
                </div>
                <div className="flex justify-between items-end">
                  <h4 className="text-lg font-light">{work.title}</h4>
                  <span className="text-[9px] text-gray-700 font-mono">/ 0{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-white/10 rounded-lg">
            <p className="text-gray-500 italic tracking-[0.2em] text-[10px] uppercase">正在籌備精彩作品...</p>
          </div>
        )}
      </section>

      <footer className="py-20 text-center opacity-20 text-[9px] tracking-[0.3em] uppercase">
        © 2026 SHUO VISION STUDIO.
      </footer>
    </div>
  );
}
