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
  const couplePkg = FLAGSHIP_PACKAGES.find((p) => p.slug === 'jawai-romantic-wilderness')!;
  const whatsappUrl = buildWhatsAppUrl({
    packageOrExperienceName: 'Jawai Romantic Wilderness Package (Couples)',
    canonicalPath: '/jawai-couple-tour',
    customMessage:
      'Hi Ghoomosa, I am planning a romantic/honeymoon trip to Jawai. Please share couple package details with private safari and luxury stay quotation.',
  });

  return (
    <div className="w-full bg-[#0b0e15] text-[#e1e2ec] min-h-screen pt-28 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/jawai-tour-packages" className="hover:text-white">Packages</Link>
          <span>/</span>
          <span className="text-[#e8a455]">Couple & Romantic</span>
        </div>

        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#e8a455]/15 border border-[#e8a455]/30 text-[#e8a455] text-xs font-mono uppercase tracking-widest mb-3">
            Romantic & Honeymoon
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Jawai Romantic Wilderness & Couple Getaways
          </h1>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            Private 4x4 open safaris exclusively for two, secluded boulder sundowners, candlelit dining under the Aravalli night stars, and ultra-luxury tented retreats.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6 mb-12">
          <h2 className="text-2xl font-serif font-bold text-white">Recommended Package: {couplePkg.name} ({couplePkg.duration})</h2>
          <p className="text-sm text-white/80 leading-relaxed">{couplePkg.overview}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-[#25D366] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#20ba59] transition-all"
            >
              <span className="material-symbols-outlined text-base align-middle mr-1.5">chat</span>
              <span>Get Couple Quote on WhatsApp</span>
            </a>
            <Link
              href={`/jawai-tour-packages/${couplePkg.slug}`}
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-widest border border-white/15"
            >
              View Full Itinerary
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
