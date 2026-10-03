import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FLAGSHIP_PACKAGES } from '@/constants/packagesData';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Jawai Family Tour Packages - Wildlife & Stays for Families | Ghoomosa',
  description:
    'Family-paced Jawai leopard safari packages with comfortable 4x4 Gypsies, kid-friendly naturalist guides, resort stays and dam visits.',
};

export default function FamilyTourPage() {
  const familyPkg = FLAGSHIP_PACKAGES.find((p) => p.slug === 'jawai-family-adventure')!;
  const whatsappUrl = buildWhatsAppUrl({
    packageOrExperienceName: 'Jawai Family Safari Package',
    canonicalPath: '/jawai-family-tour',
    customMessage:
      'Hi Ghoomosa, I am planning a family trip to Jawai with kids/parents. Please share family-friendly safari package options and quotation.',
  });

  return (
    <div className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen pt-28 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/jawai-tour-packages" className="hover:text-white">Packages</Link>
          <span>/</span>
          <span className="text-[#FDBA21]">Family Tour</span>
        </div>

        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#FDBA21]/15 border border-[#FDBA21]/30 text-[#FDBA21] text-xs font-mono uppercase tracking-widest mb-3">
            Family Wilderness
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Jawai Family Safari & Nature Tour
          </h1>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            Thoughtfully planned for children, parents, and seniors. Experience comfortable cushioned safari drives, engaging wildlife identification sheets, flamingo birding at Jawai Dam, and heritage village pottery.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6 mb-12">
          <h2 className="text-2xl font-serif font-bold text-white">Recommended Package: {familyPkg.name} ({familyPkg.duration})</h2>
          <p className="text-sm text-white/80 leading-relaxed">{familyPkg.overview}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-[#25D366] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#20ba59] transition-all"
            >
              <span className="material-symbols-outlined text-base align-middle mr-1.5">chat</span>
              <span>Get Family Quote on WhatsApp</span>
            </a>
            <Link
              href={`/jawai-tour-packages/${familyPkg.slug}`}
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
