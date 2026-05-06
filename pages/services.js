import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Services() {
  const codeBgRef = useRef(null);

  // JavaScript 腳本：動態生成程式碼數據流 (移除網格)
  useEffect(() => {
    const codeBg = codeBgRef.current;
    if (!codeBg) return;

    // 清空舊內容 (確保不重複生成)
    codeBg.innerHTML = '';

    const streams = 30; // 數據束的數量
    const characters = "01/"; // 數據束使用的字元

    for (let i = 0; i < streams; i++) {
      const stream = document.createElement('div');
      stream.style.cssText = `
        position: absolute;
        top: 0;
        font-family: monospace;
        font-size: 10px;
        color: rgba(212, 175, 55, 0.4); /* 淡淡淡淡淡淡金 */
        white-space: pre;
        pointer-events: none;
        opacity: 0.7;
      `;

      // 隨機初始位置、速度與內容長度
      stream.style.left = `${Math.random() * 100}%`;
      stream.style.animation = `codeFlow ${Math.random() * 15 + 10}s linear infinite`; // 10-25s 隨機速度
      stream.style.animationDelay = `${Math.random() * 10}s`; // 隨機延遲
      
      let content = "";
      const length = Math.random() * 50 + 20; // 每束數據的長度
      for (let j = 0; j < length; j++) {
        content += characters.charAt(Math.random() * characters.length);
        if (Math.random() < 0.1) content += " //_Opt()_"; // 隨機加入註解
        if (Math.random() < 0.2) content += "\n"; // 隨機換行
      }
      stream.textContent = content;

      codeBg.appendChild(stream);
    }
  }, []);

  const serviceList = [
    {
      id: "01",
      title: "IOT_INTEGRATION",
      subtitle: "物聯網與嵌入式整合",
      desc: "專精於 Realtek Ameba 及 ESP32 等主流 SoC 應用開發。從傳感器數據採集、RTOS 任務分配到無線傳輸協定優化，提供穩定且高效的連網解決方案。",
      tags: ["Realtek Ameba", "ESP32", "RTOS", "MQTT/HTTP"]
    },
    {
      id: "02",
      title: "ANALOG_POWER_APP",
      subtitle: "電源管理與類比電路應用",
      desc: "整合市場現有 PMIC 與 GaN 元件，開發高效能電源系統。包含 AC-DC 轉換、USB-PD 快充協議導入及精準的電量監測系統，優化能效與穩定性。",
      tags: ["PMIC Application", "GaN Technology", "USB-PD", "DC-DC"]
    },
    {
      id: "03",
      title: "AUDIO_HARDWARE_LAB",
      subtitle: "專業音訊硬體與模組優化",
      desc: "致力於高品質音訊電路研發。包含音訊訊號隔離技術、ZK 功率放大模組優化、多聲道無線環繞傳輸及麥克風前端放大電路 (MAX9814/LM386)。",
      tags: ["Signal Isolation", "Audio Filter", "Multi-channel", "Module Tuning"]
    }
  ];

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-[#D4AF37] relative overflow-hidden">
      <Head>
        <title>Services | SHUO VISION LAB</title>
      </Head>

      {/* 定義數據流動動畫 (放在 style 中確保全域生效) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes codeFlow {
          0% { transform: translateY(-100%) rotate(-15deg); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { transform: translateY(100vh) rotate(-15deg); opacity: 0; }
        }
      `}} />

      {/* 2. 統一導覽列 유지 */}
      <nav className="p-4 md:px-12 flex justify-between items-center sticky top-0 bg-[#0A0A0A]/90 backdrop-blur-lg z-50 border-b border-[#D4AF37]/10">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_12px_#D4AF37]"></div>
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] text-sm md:text-xl font-mono group-hover:scale-105 transition-transform uppercase">
              Shuo_Vision_Lab
            </span>
          </div>
        </Link>
        <div className="flex gap-4 md:gap-10 text-[10px] md:text-xs uppercase tracking-[0.2em] items-center font-bold">
          <Link href="/about"><a className="hover:text-[#D4AF37] transition-all text-white/70">About</a></Link>
          <Link href="/services"><a className="text-[#D4AF37]">Services</a></Link>
          <Link href="/products"><a className="hover:text-[#D4AF37] transition-all text-white/70">Products</a></Link>
          <Link href="/contact">
            <a className="px-6 py-2 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 rounded-full bg-[#D4AF37]/5 text-[9px] md:text-xs">
              CONTACT_US
            </a>
          </Link>
        </div>
      </nav>

      {/* 3. 程式碼底圖層 (JavaScript 會填充這裡) */}
      <div ref={codeBgRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.08]"></div>

      {/* 服務標題 유지 */}
      <main className="max-w-6xl mx-auto py-24 px-6 relative z-10">
        <header className="mb-24">
          <h2 className="text-[#D4AF37] font-mono tracking-[0.6em] text-xs mb-4 uppercase opacity-60 italic">Engineering_Service_Catalog</h2>
          <h1 className="text-4xl md:text-7xl font-light tracking-tighter mb-8 leading-tight">專業應用與 <br/><span className="text-[#D4AF37] font-serif italic">技術整合方案</span></h1>
          <div className="w-20 h-1 bg-[#D4AF37]"></div>
        </header>

        {/* 服務項目網格 유지 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {serviceList.map((service) => (
            <div key={service.id} className="relative group border border-white/5 bg-white/[0.01] p-10 hover:border-[#D4AF37]/40 transition-all duration-500">
              <span className="absolute -top-4 -right-2 text-[80px] font-mono font-bold text-white/[0.03] group-hover:text-[#D4AF37]/5 transition-colors pointer-events-none select-none">{service.id}</span>
              <h3 className="text-[#D4AF37] font-mono text-xs tracking-[0.3em] mb-2">{service.title}</h3>
              <h4 className="text-xl md:text-2xl font-light mb-6 text-white group-hover:translate-x-2 transition-transform duration-300">{service.subtitle}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed mb-10 min-h-[100px]">{service.desc}</p>
              
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[8px] font-mono border border-zinc-800 px-2 py-1 text-zinc-600 group-hover:border-[#D4AF37]/20 group-hover:text-[#D4AF37]/50 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 底部導引 유지 */}
        <section className="mt-40 py-20 text-center border-t border-white/5">
          <div className="flex justify-center items-center gap-4 mb-10 opacity-30">
            <div className="h-[1px] w-20 bg-[#D4AF37]"></div>
            <span className="font-mono text-xs tracking-widest uppercase">Consultation_Ready</span>
            <div className="h-[1px] w-20 bg-[#D4AF37]"></div>
          </div>
          <h3 className="text-2xl md:text-4xl font-light mb-12">我們協助您從原型開發 <br/>走入 <span className="text-[#D4AF37] font-serif italic tracking-wide">量產應用的最終環節。</span></h3>
          <Link href="/contact">
            <a className="inline-block px-12 py-4 border border-[#D4AF37] text-[#D4AF37] uppercase tracking-[0.2em] font-bold text-xs hover:bg-[#D4AF37] hover:text-black transition-all">
              啟動技術支援
            </a>
          </Link>
        </section>
      </main>

      <footer className="py-20 text-center opacity-20 text-[9px] tracking-[0.4em] uppercase border-t border-white/5 font-mono">
        © 2026 SHUO_VISION_LAB // SERVICE_LAYER_STABLE
      </footer>
    </div>
  );
}
