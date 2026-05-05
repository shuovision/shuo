import Link from 'next/link';
import Head from 'next/head';

export default function Products() {
  const productList = [
    {
      name: "ESP32-IoT Gateway Pro",
      category: "Wireless Gateway",
      specs: "Dual-Core, Wi-Fi/BLE 5.0, RS-485 Isolated",
      desc: "專為工業環境設計的物聯網閘道器，支援多種感測器協議與 MQTT 雲端上傳。",
      img: "https://via.placeholder.com/600x400/111111/D4AF37?text=ESP32+Gateway" 
    },
    {
      name: "Ameba Audio Streamer V1",
      category: "High-Res Audio",
      specs: "Realtek 8735B, 24-bit DAC, LDAC Support",
      desc: "基於 Ameba 平台開發的高品質無線音訊串流模組，完美整合 ZK 系列放大器。",
      img: "https://via.placeholder.com/600x400/111111/D4AF37?text=Ameba+Audio"
    },
    {
      name: "ZK-Logic Controller",
      category: "Automation",
      specs: "12V-24V Input, 8-Ch Relay, ESP32 Powered",
      desc: "整合式邏輯控制器，適用於智慧家居與小型自動化生產線控制。",
      img: "https://via.placeholder.com/600x400/111111/D4AF37?text=ZK+Controller"
    }
  ];

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-[#D4AF37]">
      <Head><title>Products | SHUO VISION</title></Head>

      <nav className="p-6 md:px-20 flex justify-between items-center sticky top-0 bg-[#0A0A0A]/95 z-50 border-b border-white/5">
        <Link href="/">
          <a className="text-[#D4AF37] font-bold tracking-widest text-lg font-mono">SHUO_VISION_LAB</a>
        </Link>
        <Link href="/"><a className="text-[10px] tracking-widest opacity-50 hover:opacity-100">← HOME</a></Link>
      </nav>

      <main className="max-w-6xl mx-auto px-8 py-20">
        <header className="mb-20">
          <h2 className="text-[#D4AF37] text-xs tracking-[0.5em] mb-4 uppercase">Product Portfolio</h2>
          <h1 className="text-4xl md:text-6xl font-light">研發產品列表</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productList.map((product, index) => (
            <div key={index} className="bg-[#111] border border-white/5 hover:border-[#D4AF37]/30 transition-all group">
              <div className="aspect-[4/3] bg-zinc-900 overflow-hidden">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="p-6">
                <p className="text-[#D4AF37] text-[9px] tracking-widest uppercase mb-2">{product.category}</p>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-500 text-xs mb-4 font-mono">{product.specs}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{product.desc}</p>
                <Link href="/contact">
                  <a className="text-[10px] tracking-[0.2em] border-b border-[#D4AF37] text-[#D4AF37] pb-1">取得技術規格</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-20 text-center opacity-20 text-[9px] tracking-[0.3em]">
        © 2026 SHUO_VISION_LAB.
      </footer>
    </div>
  );
}
