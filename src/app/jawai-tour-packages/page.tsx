'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FLAGSHIP_PACKAGES, PackageItem } from '@/constants/packagesData';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export default function PackagesHubPage() {
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPackages = FLAGSHIP_PACKAGES.filter((pkg) => {
    if (selectedDuration === '1n' && pkg.nights !== 1) return false;
    if (selectedDuration === '2n' && pkg.nights !== 2) return false;
    if (selectedDuration === '3n' && pkg.nights !== 3) return false;
    if (selectedCategory !== 'all' && !pkg.bestFor.toLowerCase().includes(selectedCategory.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Breadcrumbs & Title */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-3">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/jawai" className="hover:text-white">Jawai</Link>
            <span>/</span>
            <span className="text-[#FDBA21]">Tour Packages</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-black text-white tracking-tight leading-tight mb-4">
            Jawai Tour Packages — Customized Wildlife & Experience Trips
          </h1>
          <p className="text-base text-white/70 max-w-3xl leading-relaxed">
            Explore Ghoomosa’s curated Jawai trip ideas for couples, families, groups, wildlife lovers, and corporate teams. Package prices are shared on request because stay category, safari availability, travel date, and inclusions can change the final quotation.
          </p>
        </div>

        {/* Filter Controls (Client-side interactive filters without duplicate URLs) */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase text-white/50 mr-2">Duration:</span>
            {[
              { label: 'All Durations', val: 'all' },
              { label: '1 Night / 2 Days', val: '1n' },
              { label: '2 Nights / 3 Days', val: '2n' },
              { label: '3 Nights / 4 Days', val: '3n' },
            ].map((tab) => (
              <button
                key={tab.val}
                onClick={() => setSelectedDuration(tab.val)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase transition-all ${
                  selectedDuration === tab.val
                    ? 'bg-[#FDBA21] text-black font-bold'
                    : 'bg-white/5 text-white/70 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase text-white/50 mr-2">Traveller Type:</span>
            {[
              { label: 'All', val: 'all' },
              { label: 'Families', val: 'families' },
              { label: 'Couples', val: 'couples' },
              { label: 'Wildlife', val: 'wildlife' },
              { label: 'Corporate', val: 'corporate' },
            ].map((tab) => (
              <button
                key={tab.val}
                onClick={() => setSelectedCategory(tab.val)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase transition-all ${
                  selectedCategory === tab.val
                    ? 'bg-[#FDBA21] text-black font-bold shadow-[0_0_12px_rgba(232,164,85,0.3)]'
                    : 'bg-white/5 text-white/70 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPackages.map((pkg) => {
            const pkgWhatsApp = buildWhatsAppUrl({
              packageOrExperienceName: pkg.name,
              duration: pkg.duration,
              packageId: pkg.id,
              canonicalPath: `/jawai-tour-packages/${pkg.slug}`,
            });

            return (
              <div
                key={pkg.id}
                className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-white/25 transition-all group"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white backdrop-blur-md text-xs font-mono uppercase tracking-wider text-[#FDBA21] border border-[#FDBA21]/30">
                      {pkg.tag}
                    </span>
                    <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white backdrop-blur-md text-xs font-mono text-white">
                      {pkg.durationShort}
                    </span>
                    <span className="absolute bottom-3 left-3 text-[11px] font-mono text-white/60">
                      ID: {pkg.id}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-mono text-[#FDBA21] uppercase tracking-wider mb-2">
                      Best For: {pkg.bestFor}
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#FDBA21] transition-colors">
                      {pkg.name}
                    </h2>
                    <p className="text-xs text-white/70 leading-relaxed mb-6">
                      {pkg.overview}
                    </p>

                    <div className="space-y-2 mb-6 text-xs text-white/80">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-[#FDBA21]">verified</span>
                        <span>{pkg.coreExperience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-[#FDBA21]">hotel</span>
                        <span>{pkg.stayCategories.join(' • ')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 mb-4 flex items-center justify-between">
                    <span className="text-xs font-mono text-white/60">Pricing</span>
                    <span className="text-xs font-mono text-[#FDBA21] font-bold uppercase">
                      Price on Request
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/jawai-tour-packages/${pkg.slug}`}
                      className="flex-1 text-center py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider transition-all border border-white/10"
                    >
                      View Itinerary
                    </Link>
                    <a
                      href={pkgWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-sm">chat</span>
                      <span>Get Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust & Quotation Notice */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-black/80 to-black/40 border border-white/10 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Need a Customized Jawai Itinerary?</h3>
          <p className="text-xs text-white/70 max-w-xl mx-auto mb-6">
            Every traveler has different preferences for safaris, birding, and resort categories. Tell our team your dates and group size for an accurate quotation.
          </p>
          <a
            href={buildWhatsAppUrl({
              packageOrExperienceName: 'Custom Jawai Itinerary Planning',
              canonicalPath: '/jawai-tour-packages',
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#20ba59] transition-all"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            <span>Talk to a Travel Expert (+91 73000 03101)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
