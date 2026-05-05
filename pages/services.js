import Link from 'next/link';
import Head from 'next/head';

export default function Services() {
  const serviceList = [
    {
      id: "01",
      title: "Embedded Hardware Design",
      subtitle: "嵌入式硬體開發",
      desc: "基於 ESP32 與 Realtek Ameba (8735B/8722) 系列的電路設計與 PCB 佈局，整合各類感測器與電源管理模組。",
      tags: ["Circuit Design", "PCB Layout", "Prototype"]
    },
    {
      id: "02",
      title: "IoT Wireless Solution",
      subtitle: "物聯網無線方案",
      desc: "開發穩定、低延遲的 Wi-Fi、藍牙 (BLE) 與 RS-485 隔離通訊協定，實現遠端控制與數據同步。",
      tags: ["Wi-Fi/BLE", "RS-485", "MQTT/HTTP"]
    },
    {
      id: "03",
      title: "Smart Audio Integration",
      subtitle: "智慧音訊整合",
      desc: "結合 ZK 系列音訊模組與開發板，實現高品質無線音訊傳輸、語音辨識整合與多聲道控制系統。",
      tags: ["Wireless Audio", "DSP", "ZK Module"]
    },
    {
      id: "04",
      title: "Firmware Development",
      subtitle: "韌體開發與優化",
      desc: "針對產品邏輯進行韌體撰寫，優化功耗表現與反應速度，提供穩定的軟硬體交互體驗。",
      tags: ["C/C++", "FreeRTOS", "OTA"]
    }
  ];

  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      <Head>
        <title>Services | SHUO VISION</title>
      </Head>

      <nav className="p-6 md:px-20 flex justify-between items-center sticky top-0 bg-[#0F0F0F]/90 backdrop-blur-md z-50">
        <Link href="/">
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
        <Link href="/about"><a className="text-[10px] uppercase tracking-widest hover:text-[#D4AF37]">About</a></Link>
      </nav>

      <main className="max-w-6xl mx-auto px-8 py-20 md:py-32">
        <section className="mb-20">
          <h2 className="text-[#D4AF37] text-xs tracking-[0.5em] mb-4 uppercase opacity-60">Expertise</h2>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">專業技術服務</h1>
        </section>

        {/* 服務列表網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {serviceList.map((service) => (
            <div key={service.id} className="border-t border-white/10 pt-8 group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[#D4AF37] font-mono text-sm mb-2 block">{service.id}</span>
                  <h3 className="text-2xl font-light mb-1">{service.title}</h3>
                  <p className="text-[#D4AF37] text-xs font-medium tracking-widest">{service.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-loose mb-8 h-20">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[9px] border border-white/20 px-3 py-1 rounded-full text-gray-500 uppercase tracking-tighter group-hover:border-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 底部聯繫 */}
        <section className="mt-40 bg-[#1A1A1A] p-10 md:p-20 text-center rounded-sm">
          <h2 className="text-2xl md:text-3xl font-light mb-6">準備好將想法轉化為產品了嗎？</h2>
          <p className="text-gray-400 mb-10 text-sm">歡迎與我們討論您的技術需求，提供客製化開發建議。</p>
          <Link href="/contact">
            <a className="bg-[#D4AF37] text-black px-12 py-4 rounded-full font-bold tracking-widest hover:bg-white transition-all">
              開始諮詢
            </a>
          </Link>
        </section>
      </main>

      <footer className="py-16 text-center opacity-20 text-[9px] tracking-[0.3em] uppercase">
        © 2026 SHUO VISION STUDIO.
      </footer>
    </div>
  );
}
