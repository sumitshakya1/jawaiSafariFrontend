import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Jawai from Ahmedabad - Road Route, Transfers & Weekend Tour Packages | Ghoomosa',
  description:
    'Plan a weekend safari road trip from Ahmedabad to Jawai (290 km, 5.5 hours). Private cab transfers, stays and 2N/3D safari packages.',
};

export default function JawaiFromAhmedabadPage() {
  const whatsappUrl = buildWhatsAppUrl({
    packageOrExperienceName: 'Jawai Weekend Trip from Ahmedabad',
    canonicalPath: '/jawai-from-ahmedabad',
    customMessage:
      'Hi Ghoomosa, I am planning a weekend safari trip from Ahmedabad to Jawai. Please share package options with cab transfer, luxury stay, and leopard safaris.',
  });

  return (
    <div className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen pt-28 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/how-to-reach-jawai" className="hover:text-white">Routes</Link>
          <span>/</span>
          <span className="text-[#FDBA21]">Jawai from Ahmedabad</span>
        </div>

        <div className="mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#FDBA21]/15 border border-[#FDBA21]/30 text-[#FDBA21] text-xs font-mono uppercase tracking-widest mb-3">
            Origin City Route Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Ahmedabad to Jawai: Weekend Road Trip & Tour Packages
          </h1>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            Jawai is one of the closest and most scenic wildlife destinations for travellers from Gujarat. At 290 km via smooth NH27 through Abu Road, it is the premier 2-night / 3-day weekend road trip.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
            <span className="text-xs font-mono text-white/50 uppercase block mb-1">Distance</span>
            <span className="text-xl font-bold text-white">290 km</span>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
            <span className="text-xs font-mono text-white/50 uppercase block mb-1">Drive Time</span>
            <span className="text-xl font-bold text-white">5 - 5.5 Hours</span>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
            <span className="text-xs font-mono text-white/50 uppercase block mb-1">Highway Route</span>
            <span className="text-xl font-bold text-[#FDBA21]">NH 27 via Abu Road</span>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6 mb-12">
          <h2 className="text-xl font-serif font-bold text-white">Ahmedabad Weekend Safari Packages</h2>
          <p className="text-sm text-white/80 leading-relaxed">
            Leave Ahmedabad early Friday morning, arrive in Jawai by lunchtime for your first sunset safari, spend Saturday exploring dam wetlands and crocodile banks, and return Sunday refreshed.
          </p>
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#20ba59] transition-all"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>Get Ahmedabad-Jawai Package Quote</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
