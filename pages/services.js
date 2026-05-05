import Head from "next/head";

export default function Services() {
  return (
    <div className="bg-background min-h-screen text-white p-20">
      <Head><title>Services | SHUO VISION</title></Head>
      <h1 className="text-primary text-6xl font-serif italic mb-10">我們的服務</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="border border-white/10 p-8 hover:border-primary transition-all">
          <h2 className="text-primary tracking-widest mb-4">01 / VIDEO PRODUCTION</h2>
          <p className="text-gray-400 text-sm">從企劃到拍攝，將您的視覺願景轉化為高品質影像。</p>
        </div>
        {/* 可以依此類推複製更多服務卡片 */}
      </div>
      <a href="/" className="mt-20 inline-block text-xs tracking-widest text-gray-500 hover:text-primary">← BACK TO HOME</a>
    </div>
  );
}
