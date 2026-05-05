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
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchWorks();
  }, []);

  return (
    <div className="bg-background min-h-screen text-white selection:bg-primary">
      <Head>
        <title>SHUO VISION | 碩果工作室</title>
      </Head>

      {/* 強化版導覽列 */}
      <nav className="p-6 md:px-20 flex justify-between items-center sticky top-0 bg-background/90 backdrop-blur-md z-50 border-b border-white/5">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <span className="text-primary font-bold tracking-[0.3em] text-lg">SHUO VISION</span>
        </div>
        
        {/* 這邊就是你的分頁按鈕 */}
        <div className="flex gap-6 md:gap-10 text-[11px] uppercase tracking-[0.2em] items-center">
          <Link href="/about">
            <a className="hover:text-primary transition-colors cursor-pointer">About</a>
          </Link>
          <Link href="/services">
            <a className="hover:text-primary transition-colors cursor-pointer">Services</a>
          </Link>
          <Link href="/contact">
            <a className="px-5 py-2 border border-primary/40 text-primary hover:bg-primary hover:text-black transition-all rounded-full">
              Contact
            </a>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="h-[80vh] flex flex-col justify-center px-8 md:px-20">
        <h2 className="text-accent text-xs tracking-[0.5em] mb-6 uppercase opacity-60">Creative Studio</h2>
        <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-none mb-8">
          以願景，<br />
          <span className="text-primary font-serif italic">凝結成果。</span>
        </h1>
        <div className="w-20 h-[1px] bg-primary"></div>
      </section>

      {/* 作品區 */}
      <section className="py-20 px-8 md:px-20">
        <h3 className="text-xl tracking-[0.3em] mb-12 text-primary/80">SELECTED VISIONS</h3>
        {loading ? (
          <div className="text-gray-600 animate-pulse text-xs tracking-widest">LOADING...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {works.map((work) => (
              <div key={work.id} className="group">
                <div className="relative aspect-video overflow-hidden bg-secondary mb-4 border border-white/5">
                  <iframe
                    className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                    src={`https://www.youtube.com/embed/${work.video_id}`}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <h4 className="text-lg font-light">{work.title}</h4>
              </div>
            ))}
          </div>
        )}
      </section>

      <footer className="py-20 text-center opacity-30 text-[10px] tracking-widest">
        © 2026 SHUO VISION STUDIO.
      </footer>
    </div>
  );
}
