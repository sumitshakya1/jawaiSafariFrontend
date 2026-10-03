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
        <div className="flex items-center gap-2 text-xs font-mono text-[#667085] mb-6">
          <Link href="/" className="hover:text-[#005B5C]">Home</Link>
          <span>/</span>
          <Link href="/how-to-reach-jawai" className="hover:text-[#005B5C]">Routes</Link>
          <span>/</span>
          <span className="text-[#005B5C] font-semibold">Jawai from Jodhpur</span>
        </div>

        <div className="mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#EEF8F6] border border-[#005B5C]/20 text-[#005B5C] text-xs font-mono uppercase tracking-widest mb-3 font-semibold">
            Origin City Route Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-display-brand font-bold text-[#005B5C] tracking-tight mb-4">
            Jodhpur to Jawai: Distance, Travel Guide & Packages
          </h1>
          <p className="text-sm md:text-base text-[#263238] font-light leading-relaxed">
            Jodhpur, the Blue City, is located 150 km North of Jawai via NH62 and Pali highway. The scenic 3-hour drive makes Jawai a seamless wildlife getaway directly from Jodhpur Airport or Mehrangarh Fort hotels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm text-center">
            <span className="text-xs font-mono text-[#667085] uppercase block mb-1">Distance</span>
            <span className="text-xl font-bold text-[#263238]">150 km</span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm text-center">
            <span className="text-xs font-mono text-[#667085] uppercase block mb-1">Drive Time</span>
            <span className="text-xl font-bold text-[#263238]">~3 Hours</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#EEF8F6] border border-[#005B5C]/20 text-center">
            <span className="text-xs font-mono text-[#005B5C] uppercase block mb-1 font-semibold">Highway Route</span>
            <span className="text-xl font-bold text-[#005B5C]">NH 62 via Pali</span>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-[#DDE7E5] shadow-sm space-y-6 mb-12">
          <h2 className="text-2xl font-display-brand font-bold text-[#005B5C]">Jodhpur + Jawai Combined Expedition</h2>
          <p className="text-sm text-[#263238] font-light leading-relaxed">
            Combine Jodhpur’s blue city heritage with 2 nights of leopard tracking in Jawai. We provide air-conditioned SUV transfers, luxury tent accommodation, and private open 4x4 Gypsy drives.
          </p>
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] text-[#263238] font-bold text-xs font-mono uppercase tracking-widest hover:bg-[#20ba59] transition-all shadow-sm"
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
