import Link from 'next/link';

export default function Services() {
  return (
    <div className="bg-black min-h-screen text-white p-20 flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-10 tracking-widest">OUR SERVICES</h1>
      <Link href="/">
        <a className="text-[#D4AF37] border-b border-[#D4AF37] pb-1">Back to Home</a>
      </Link>
    </div>
  );
}
