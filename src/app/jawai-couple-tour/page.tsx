import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FLAGSHIP_PACKAGES } from '@/constants/packagesData';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Jawai Couple & Honeymoon Safari Tour Packages | Ghoomosa',
  description:
    'Romantic wilderness escapes in Jawai with private 4x4 safaris, granite hilltop sunset high-tea, poolside candlelit dinners, and luxury tent stays.',
};

export default function CoupleTourPage() {
  const couplePkg = FLAGSHIP_PACKAGES.find((p) => p.slug === 'jawai-romantic-wilderness') || FLAGSHIP_PACKAGES[0];
  const whatsappUrl = buildWhatsAppUrl({
    packageOrExperienceName: 'Jawai Romantic Wilderness Package (Couples)',
    canonicalPath: '/jawai-couple-tour',
    customMessage:
      'Hi Ghoomosa, I am planning a romantic/honeymoon trip to Jawai. Please share couple package details with private safari and luxury stay quotation.',
  });

  return (
    <div className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen pt-28 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#667085] mb-6">
          <Link href="/" className="hover:text-[#005B5C]">Home</Link>
          <span>/</span>
          <Link href="/jawai-tour-packages" className="hover:text-[#005B5C]">Packages</Link>
          <span>/</span>
          <span className="text-[#005B5C] font-semibold">Couple & Romantic</span>
        </div>

        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#EEF8F6] border border-[#005B5C]/20 text-[#005B5C] text-xs font-mono uppercase tracking-widest mb-3 font-semibold">
            Romantic & Honeymoon
          </span>
          <h1 className="text-3xl md:text-5xl font-display-brand font-bold text-[#005B5C] tracking-tight mb-4">
            Jawai Romantic Wilderness & Couple Getaways
          </h1>
          <p className="text-sm md:text-base text-[#263238] font-light leading-relaxed">
            Private 4x4 open safaris exclusively for two, secluded boulder sundowners, candlelit dining under the Aravalli night stars, and ultra-luxury tented retreats.
          </p>
        </div>

        <div className="p-8 md:p-10 rounded-3xl bg-white border border-[#DDE7E5] shadow-sm space-y-6 mb-12">
          <h2 className="text-2xl font-display-brand font-bold text-[#005B5C]">
            Recommended Package: {couplePkg.name} ({couplePkg.duration})
          </h2>
          <p className="text-sm text-[#263238] font-light leading-relaxed">{couplePkg.overview}</p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-[#25D366] text-[#263238] font-bold text-xs font-mono uppercase tracking-widest hover:bg-[#20ba59] transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-base align-middle mr-1.5">chat</span>
              <span>Get Couple Quote on WhatsApp</span>
            </a>
            <Link
              href={`/jawai-tour-packages/${couplePkg.slug}`}
              className="px-6 py-3.5 rounded-full bg-white text-[#005B5C] font-semibold text-xs font-mono uppercase tracking-widest border border-[#005B5C] hover:bg-[#EEF8F6] transition-all"
            >
              View Full Itinerary
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
