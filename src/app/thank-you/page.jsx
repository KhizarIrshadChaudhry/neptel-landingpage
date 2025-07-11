'use client';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#0B0F14] via-[#334459] to-[#0B0F14 font-sans">
      <section className="flex flex-1 flex-col items-center justify-center w-full text-center py-32">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl px-8 py-16 max-w-lg mx-auto flex flex-col items-center gap-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-2 text-white drop-shadow">Thank You</h1>
          <p className="text-lg text-white/90 mb-6">
            Thank you for considering Neptel.<br />We look forward to working with you.
          </p>
          <Link href="/">
            <button className="mt-2 px-6 py-3 rounded-full bg-white text-[#232526] font-semibold text-base shadow hover:bg-gray-100 transition">
              Return to Home
            </button>
          </Link>
        </div>
      </section>
      <div className="h-40" />
      <Footer />
    </main>
  );
} 