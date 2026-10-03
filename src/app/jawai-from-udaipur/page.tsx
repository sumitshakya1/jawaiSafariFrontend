import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Jawai from Udaipur - Travel Route, Transfers & Packages | Ghoomosa',
  description:
    'Plan your Jawai trip from Udaipur (140 km, 2.5 hours). Private cab transfers, leopard safaris, stays and 1N/2D & 2N/3D packages.',
};

export default function JawaiFromUdaipurPage() {
  const whatsappUrl = buildWhatsAppUrl({
    packageOrExperienceName: 'Jawai Trip from Udaipur (Transfer + Safari)',
    canonicalPath: '/jawai-from-udaipur',
    customMessage:
      'Hi Ghoomosa, I am looking to travel to Jawai from Udaipur. Please share package options with private taxi transfer, stay, and safaris.',
  });

  return (
    <div className="w-full bg-[#0b0e15] text-[#e1e2ec] min-h-screen pt-28 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/how-to-reach-jawai" className="hover:text-white">Routes</Link>
          <span>/</span>
          <span className="text-[#e8a455]">Jawai from Udaipur</span>
        </div>

        <div className="mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#e8a455]/15 border border-[#e8a455]/30 text-[#e8a455] text-xs font-mono uppercase tracking-widest mb-3">
            Origin City Route Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Udaipur to Jawai: Distance, Travel Guide & Packages
          </h1>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            Udaipur is the most popular gateway to Jawai. Located just 140 km away via smooth national highway NH27, the drive takes only 2.5 to 3 hours, making it the ideal weekend safari extension.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
            <span className="text-xs font-mono text-white/50 uppercase block mb-1">Distance</span>
            <span className="text-xl font-bold text-white">140 km</span>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
            <span className="text-xs font-mono text-white/50 uppercase block mb-1">Drive Time</span>
            <span className="text-xl font-bold text-white">2.5 - 3 Hours</span>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
            <span className="text-xs font-mono text-white/50 uppercase block mb-1">Highway Route</span>
            <span className="text-xl font-bold text-[#e8a455]">NH 27 (4-Lane)</span>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6 mb-12">
          <h2 className="text-xl font-serif font-bold text-white">Recommended Itinerary: Udaipur + Jawai</h2>
          <p className="text-sm text-white/80 leading-relaxed">
            Many travellers combine the royal palace heritage of Udaipur with 2 nights in Jawai for wildlife. We coordinate private airport/hotel pickups in Udaipur, direct transfer to your Jawai camp, 3 game drives, and drop-back to Udaipur.
          </p>
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#20ba59] transition-all"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>Get Udaipur-Jawai Package Quote</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
