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
    <div className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen pt-28 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#667085] mb-6">
          <Link href="/" className="hover:text-[#005B5C]">Home</Link>
          <span>/</span>
          <Link href="/jawai-tour-packages" className="hover:text-[#005B5C]">Packages</Link>
          <span>/</span>
          <span className="text-[#005B5C] font-semibold">Group Travel</span>
        </div>

        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#EEF8F6] border border-[#005B5C]/20 text-[#005B5C] text-xs font-mono uppercase tracking-widest mb-3 font-semibold">
            Group Wilderness
          </span>
          <h1 className="text-3xl md:text-5xl font-display-brand font-bold text-[#005B5C] tracking-tight mb-4">
            Jawai Group Tour & Friends Expeditions
          </h1>
          <p className="text-sm md:text-base text-[#263238] font-light leading-relaxed">
            Coordinated 4x4 convoy safaris, exclusive camp buyouts, campfire barbecue evenings, and personalized team activities across the Jawai wilderness.
          </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-white border border-[#DDE7E5] shadow-sm space-y-6 text-center">
          <h2 className="text-2xl font-display-brand font-bold text-[#005B5C]">
            Custom Group Planning & Quotation
          </h2>
          <p className="text-sm text-[#263238] font-light max-w-xl mx-auto leading-relaxed">
            Tell us your group count, preferred dates, and room requirements for a streamlined multi-vehicle proposal.
          </p>
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] text-[#263238] font-bold text-xs font-mono uppercase tracking-widest hover:bg-[#20ba59] transition-all shadow-sm"
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
