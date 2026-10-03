'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GHOOMOSA_PACKAGES, GhoomosaPackage } from '@/global/constants/packages';
import { WhatsAppButton } from '@/global/components/cta/WhatsAppButton';

export function FeaturedPackages() {
  const [selectedPkg, setSelectedPkg] = useState<GhoomosaPackage | null>(null);

  return (
    <section id="packages" className="relative w-full py-20 md:py-28 bg-[#F8FAF8] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="w-6 h-[2px] bg-[#005B5C]" />
              <span className="font-mono text-[11px] font-bold text-[#005B5C] tracking-[0.25em] uppercase">
                FLAGSHIP EXPEDITIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display-brand text-[#005B5C] tracking-tight">
              Curated Jawai Packages
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#475467] max-w-2xl font-light">
              Each journey is tailor-crafted by local naturalists and safari masters. Fixed public pricing is omitted in Phase 1 to support customized inclusions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/jawai-tour-packages"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#005B5C] text-[#005B5C] hover:bg-[#EEF8F6] text-xs font-mono font-semibold uppercase tracking-wider transition-colors"
            >
              <span>View All 10 Packages</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GHOOMOSA_PACKAGES.slice(0, 6).map((pkg) => (
            <article
              key={pkg.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#DDE7E5] shadow-sm hover:shadow-md hover:border-[#0A7B75] transition-all duration-300 flex flex-col"
            >
              {/* Image & Badges */}
              <div className="relative h-64 w-full overflow-hidden bg-[#EEF8F6]">
                <Image
                  src={pkg.imageUrl}
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003F40]/70 via-transparent to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-mono font-bold text-[#005B5C] shadow-sm">
                    {pkg.duration}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#005B5C]/90 backdrop-blur-sm text-[10px] font-mono uppercase tracking-wider text-white">
                    {pkg.id}
                  </span>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#FDBA21] font-semibold block">
                    {pkg.bestFor}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {pkg.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-xs md:text-sm text-[#263238] font-light leading-relaxed">
                    {pkg.overview}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-[#DDE7E5]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#475467] font-semibold block">
                      Expedition Inclusions
                    </span>
                    <ul className="space-y-1">
                      {pkg.highlights.slice(0, 3).map((hl, i) => (
                        <li key={i} className="text-xs text-[#263238] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0A7B75] shrink-0" />
                          <span className="line-clamp-1">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Pricing & CTA */}
                <div className="pt-4 border-t border-[#DDE7E5] flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#475467] block">
                      Quotation
                    </span>
                    <span className="text-xs font-semibold text-[#005B5C]">
                      Price on Request
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/jawai-tour-packages/${pkg.slug}`}
                      className="px-3.5 py-2 rounded-full border border-[#DDE7E5] hover:border-[#005B5C] text-[#263238] hover:text-[#005B5C] text-xs font-semibold transition-colors"
                    >
                      Details
                    </Link>
                    <WhatsAppButton
                      packageOrExperienceName={pkg.name}
                      packageId={pkg.id}
                      canonicalPath={`/jawai-tour-packages/${pkg.slug}`}
                      variant="editorial"
                      size="sm"
                    >
                      Get Quote
                    </WhatsAppButton>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
