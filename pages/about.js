import Link from 'next/link';
import Head from 'next/head';

export default function About() {
  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      <Head>
        <title>About | SHUO VISION</title>
      </Head>

      {/* 導覽列 */}
      <nav className="p-6 md:px-20 flex justify-between items-center sticky top-0 bg-[#0F0F0F]/90 backdrop-blur-md z-50">
{/* 更新後的導覽列選項 */}
<div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] md:text-xs uppercase tracking-[0.15em] items-center font-bold">
  <Link href="/about"><a className="hover:text-[#D4AF37]">About</a></Link>
  <Link href="/services"><a className="hover:text-[#D4AF37]">Services</a></Link>
  <Link href="/products"><a className="hover:text-[#D4AF37]">Products</a></Link> {/* 新增這行 */}
  <Link href="/contact">
    <a className="px-5 py-2 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all rounded-full bg-[#D4AF37]/5">
      Contact
    </a>
  </Link>
</div>
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-8 py-20 md:py-40">
        {/* 核心標語 */}
        <section className="mb-32">
          <h2 className="text-[#D4AF37] text-xs tracking-[0.5em] mb-8 uppercase opacity-60">IoT & Embedded Systems Lab</h2>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-12 tracking-tight">
            以嵌入式核心，<br />
            連結<span className="text-[#D4AF37] font-serif italic"> 智慧生活的願景。</span>
          </h1>
          <div className="w-16 h-[1px] bg-[#D4AF37]"></div>
        </section>

        {/* 品牌故事內容 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 text-gray-400 leading-relaxed tracking-wide">
          <div className="space-y-6">
            <p>
              <strong className="text-white">SHUO VISION 碩果工作室</strong> 致力於嵌入式系統開發與硬軟體整合方案。我們精通於 <strong>ESP32</strong>、<strong>Realtek Ameba</strong> 等主流微處理器平台的深度應用，為各類智慧產品提供核心動力。
            </p>
            <p>
              從感測器數據採集、無線通訊協定開發，到音訊處理與訊號傳輸，我們擅長將複雜的電子硬體架構簡化為高效且穩定的產品方案。
            </p>
          </div>
          <div className="space-y-6">
            <p>
              我們不僅提供技術實作，更強調系統的穩定性與擴充性。無論是音訊無線傳輸、RS-485 隔離通訊，或是基於 IoT 架構的自動化控制，我們都能協助客戶在最短的時間內完成從原型（Prototype）到產品化的關鍵步驟。
            </p>
            <p className="border-l border-[#D4AF37]/30 pl-6 italic font-serif text-white">
              「我們將每一行代碼，轉化為真實世界的觸感與連結。」
            </p>
          </div>
        </section>

        {/* 技術核心項目 */}
        <section className="mt-40 py-20 border-y border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-[#D4AF37] text-xl mb-2 font-mono">ESP32</div>
            <div className="text-[10px] tracking-widest uppercase">多元控制中心</div>
          </div>
          <div>
            <div className="text-[#D4AF37] text-xl mb-2 font-mono">Ameba</div>
            <div className="text-[10px] tracking-widest uppercase">高階音訊聯網</div>
          </div>
          <div>
            <div className="text-[#D4AF37] text-xl mb-2 font-mono">Wireless</div>
            <div className="text-[10px] tracking-widest uppercase">無線通訊整合</div>
          </div>
          <div>
            <div className="text-[#D4AF37] text-xl mb-2 font-mono">PCB</div>
            <div className="text-[10px] tracking-widest uppercase">硬體電路設計</div>
          </div>
        </section>

        {/* 底部導引 */}
        <div className="mt-40 text-center">
          <Link href="/services">
            <a className="inline-block px-10 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 rounded-full tracking-[0.2em] text-sm">
              查看開發案例
            </a>
          </Link>
          <div className="mt-8">
            <Link href="/">
              <a className="text-gray-600 hover:text-white transition-colors text-[10px] tracking-widest uppercase">← Back to Projects</a>
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-20 text-center opacity-20 text-[9px] tracking-[0.3em] uppercase">
        © 2026 SHUO VISION STUDIO. EMBEDDED SOLUTIONS.
      </footer>
    </div>
  );
}
