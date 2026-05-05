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

  useEffect(() => {
    async function fetchWorks() {
      const { data } = await supabase.from("portfolio_works").select("*");
      if (data) setWorks(data);
    }
    fetchWorks();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Head><title>SHUO VISION</title></Head>

      {/* 強制顯示的導覽列 */}
      <nav className="p-6 border-b border-white/10 flex justify-between items-center bg-black sticky top-0 z-50">
        <div className="text-[#D4AF37] font-bold tracking-widest text-xl">SHUO VISION</div>
<div className="flex gap-6 text-[11px] uppercase tracking-widest">
  <Link href="/about">
    <a className="hover:text-[#D4AF37] transition-colors">About</a>
  </Link>
  <Link href="/services">
    <a className="hover:text-[#D4AF37] transition-colors">Services</a>
  </Link>
  <Link href="/contact">
    <a className="text-[#D4AF37] font-bold">Contact</a>
  </Link>
</div>
      </nav>

      <div className="p-10 md:p-20">
        <h1 className="text-5xl md:text-8xl font-light mb-10 leading-tight">以願景，<br/><span className="text-[#D4AF37] italic font-serif">凝結成果。</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          {works.length > 0 ? works.map(w => (
            <div key={w.id} className="group">
              <div className="aspect-video bg-zinc-900 border border-white/5 overflow-hidden">
                <iframe className="w-full h-full grayscale group-hover:grayscale-0 transition-all" src={`https://www.youtube.com/embed/${w.video_id}`} frameBorder="0" allowFullScreen></iframe>
              </div>
              <h4 className="mt-4 text-lg font-light">{w.title}</h4>
            </div>
          )) : <p className="text-zinc-600 italic">正在籌備精彩作品...</p>}
        </div>
      </div>
    </div>
  );
}
