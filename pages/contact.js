import Link from 'next/link';

export default function Contact() {
  return (
    <div className="bg-black min-h-screen text-white p-20 flex flex-col items-center justify-center font-sans">
      <h1 className="text-[#D4AF37] text-4xl md:text-6xl font-light mb-10 tracking-[0.2em]">CONTACT</h1>
      <p className="text-gray-400 mb-12">準備好開始您的影像計畫了嗎？</p>
      <a href="mailto:shuovision@gmail.com" className="text-2xl md:text-4xl border-b border-white/20 pb-4 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
        shuovision@gmail.com
      </a>
      <Link href="/">
        <a className="mt-20 text-[10px] tracking-[0.3em] text-gray-600 hover:text-white transition-colors">← BACK TO HOME</a>
      </Link>
    </div>
  );
}
