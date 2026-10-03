import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Jawai from Jodhpur - Distance, Taxi Route & Tour Packages | Ghoomosa',
  description:
    'Travel to Jawai from Jodhpur (150 km, 3 hours). Private cab transfers, leopard safaris, stays and 1N/2D & 2N/3D packages by Ghoomosa.',
};

export default function JawaiFromJodhpurPage() {
  const whatsappUrl = buildWhatsAppUrl({
    packageOrExperienceName: 'Jawai Trip from Jodhpur (Transfer + Safari)',
    canonicalPath: '/jawai-from-jodhpur',
    customMessage:
      'Hi Ghoomosa, I am looking to travel to Jawai from Jodhpur. Please share package options with private taxi transfer, stay, and safaris.',
  });

  return (
    <div className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen pt-28 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/how-to-reach-jawai" className="hover:text-white">Routes</Link>
          <span>/</span>
          <span className="text-[#FDBA21]">Jawai from Jodhpur</span>
        </div>

        <div className="mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#FDBA21]/15 border border-[#FDBA21]/30 text-[#FDBA21] text-xs font-mono uppercase tracking-widest mb-3">
            Origin City Route Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Jodhpur to Jawai: Distance, Travel Guide & Packages
          </h1>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            Jodhpur, the Blue City, is located 150 km North of Jawai via NH62 and Pali highway. The scenic 3-hour drive makes Jawai a seamless wildlife getaway directly from Jodhpur Airport or Mehrangarh Fort hotels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
            <span className="text-xs font-mono text-white/50 uppercase block mb-1">Distance</span>
            <span className="text-xl font-bold text-white">150 km</span>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
            <span className="text-xs font-mono text-white/50 uppercase block mb-1">Drive Time</span>
            <span className="text-xl font-bold text-white">~3 Hours</span>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
            <span className="text-xs font-mono text-white/50 uppercase block mb-1">Highway Route</span>
            <span className="text-xl font-bold text-[#FDBA21]">NH 62 via Pali</span>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6 mb-12">
          <h2 className="text-xl font-serif font-bold text-white">Jodhpur + Jawai Combined Expedition</h2>
          <p className="text-sm text-white/80 leading-relaxed">
            Combine Jodhpur’s blue city heritage with 2 nights of leopard tracking in Jawai. We provide air-conditioned SUV transfers, luxury tent accommodation, and private open 4x4 Gypsy drives.
          </p>
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#20ba59] transition-all"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>Get Jodhpur-Jawai Package Quote</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
