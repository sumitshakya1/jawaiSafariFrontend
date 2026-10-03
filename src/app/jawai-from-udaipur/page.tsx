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
    <div className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen pt-28 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#667085] mb-6">
          <Link href="/" className="hover:text-[#005B5C]">Home</Link>
          <span>/</span>
          <Link href="/how-to-reach-jawai" className="hover:text-[#005B5C]">Routes</Link>
          <span>/</span>
          <span className="text-[#005B5C] font-semibold">Jawai from Udaipur</span>
        </div>

        <div className="mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#EEF8F6] border border-[#005B5C]/20 text-[#005B5C] text-xs font-mono uppercase tracking-widest mb-3 font-semibold">
            Origin City Route Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-display-brand font-bold text-[#005B5C] tracking-tight mb-4">
            Udaipur to Jawai: Distance, Travel Guide & Packages
          </h1>
          <p className="text-sm md:text-base text-[#263238] font-light leading-relaxed">
            Udaipur is the most popular gateway to Jawai. Located just 140 km away via smooth national highway NH27, the drive takes only 2.5 to 3 hours, making it the ideal weekend safari extension.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm text-center">
            <span className="text-xs font-mono text-[#667085] uppercase block mb-1">Distance</span>
            <span className="text-xl font-bold text-[#263238]">140 km</span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm text-center">
            <span className="text-xs font-mono text-[#667085] uppercase block mb-1">Drive Time</span>
            <span className="text-xl font-bold text-[#263238]">2.5 - 3 Hours</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#EEF8F6] border border-[#005B5C]/20 text-center">
            <span className="text-xs font-mono text-[#005B5C] uppercase block mb-1 font-semibold">Highway Route</span>
            <span className="text-xl font-bold text-[#005B5C]">NH 27 (4-Lane)</span>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-[#DDE7E5] shadow-sm space-y-6 mb-12">
          <h2 className="text-2xl font-display-brand font-bold text-[#005B5C]">Recommended Itinerary: Udaipur + Jawai</h2>
          <p className="text-sm text-[#263238] font-light leading-relaxed">
            Many travellers combine the royal palace heritage of Udaipur with 2 nights in Jawai for wildlife. We coordinate private airport/hotel pickups in Udaipur, direct transfer to your Jawai camp, 3 game drives, and drop-back to Udaipur.
          </p>
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] text-[#263238] font-bold text-xs font-mono uppercase tracking-widest hover:bg-[#20ba59] transition-all shadow-sm"
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
