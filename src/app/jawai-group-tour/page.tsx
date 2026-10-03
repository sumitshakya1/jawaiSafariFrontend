import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Jawai Group Tour Packages - Friends & Family Reunions | Ghoomosa',
  description:
    'Plan group safaris, multi-vehicle convoys, campfires and shared luxury villas for friend circles and family reunions in Jawai.',
};

export default function GroupTourPage() {
  const whatsappUrl = buildWhatsAppUrl({
    packageOrExperienceName: 'Jawai Group Expedition (Friends / Multi-Family)',
    canonicalPath: '/jawai-group-tour',
    customMessage:
      'Hi Ghoomosa, I am looking to plan a group trip to Jawai for our group/friends. Please share multi-vehicle safari options, group discounts, and quotation.',
  });

  return (
    <div className="w-full bg-[#0b0e15] text-[#e1e2ec] min-h-screen pt-28 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/jawai-tour-packages" className="hover:text-white">Packages</Link>
          <span>/</span>
          <span className="text-[#e8a455]">Group Travel</span>
        </div>

        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#e8a455]/15 border border-[#e8a455]/30 text-[#e8a455] text-xs font-mono uppercase tracking-widest mb-3">
            Group Wilderness
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Jawai Group Tour & Friends Expeditions
          </h1>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            Coordinated 4x4 convoy safaris, exclusive camp buyouts, campfire barbecue evenings, and personalized team activities across the Jawai wilderness.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6 text-center">
          <h2 className="text-2xl font-serif font-bold text-white">Custom Group Planning & Quotation</h2>
          <p className="text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Tell us your group count, preferred dates, and room requirements for a streamlined multi-vehicle proposal.
          </p>
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#20ba59] transition-all"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>Enquire for Group on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
