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
          <div className="flex items-center gap-2 text-xs font-mono text-[#667085] mb-3">
            <Link href="/" className="hover:text-[#005B5C] font-semibold">Home</Link>
            <span>/</span>
            <Link href="/jawai" className="hover:text-[#005B5C] font-semibold">Jawai</Link>
            <span>/</span>
            <span className="text-[#005B5C] font-bold">Tour Packages</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-display-brand font-bold text-[#005B5C] tracking-tight leading-tight mb-4">
            Jawai Tour Packages — Customized Wildlife & Experience Trips
          </h1>
          <p className="text-base text-[#667085] max-w-3xl leading-relaxed font-light">
            Explore Ghoomosa’s curated Jawai trip ideas for couples, families, groups, wildlife lovers, and corporate teams. Package prices are shared on request because stay category, safari availability, travel date, and inclusions can change the final quotation.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm mb-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase text-[#667085] mr-2 font-semibold">Duration:</span>
            {[
              { label: 'All Durations', val: 'all' },
              { label: '1 Night / 2 Days', val: '1n' },
              { label: '2 Nights / 3 Days', val: '2n' },
              { label: '3 Nights / 4 Days', val: '3n' },
            ].map((tab) => (
              <button
                key={tab.val}
                onClick={() => setSelectedDuration(tab.val)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase transition-all ${
                  selectedDuration === tab.val
                    ? 'bg-[#005B5C] text-white font-bold shadow-sm'
                    : 'bg-[#EEF8F6] text-[#005B5C] hover:bg-[#DDE7E5]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase text-[#667085] mr-2 font-semibold">Traveller Type:</span>
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
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase transition-all ${
                  selectedCategory === tab.val
                    ? 'bg-[#005B5C] text-white font-bold shadow-sm'
                    : 'bg-[#EEF8F6] text-[#005B5C] hover:bg-[#DDE7E5]'
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
                className="rounded-2xl bg-white border border-[#DDE7E5] shadow-sm overflow-hidden flex flex-col justify-between hover:border-[#0A7B75] hover:shadow-md transition-all group"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-[#EEF8F6]">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003F40]/70 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 text-xs font-mono uppercase tracking-wider text-[#005B5C] font-bold shadow-sm">
                      {pkg.tag}
                    </span>
                    <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#005B5C] text-xs font-mono text-white font-semibold shadow-sm">
                      {pkg.durationShort}
                    </span>
                    <span className="absolute bottom-3 left-3 text-[11px] font-mono text-white/90">
                      ID: {pkg.id}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="text-xs font-mono text-[#005B5C] uppercase tracking-wider font-bold">
                      Best For: {pkg.bestFor}
                    </div>
                    <h2 className="text-xl font-bold text-[#005B5C] group-hover:text-[#0A7B75] transition-colors leading-snug">
                      {pkg.name}
                    </h2>
                    <p className="text-xs text-[#263238] font-light leading-relaxed">
                      {pkg.overview}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-[#DDE7E5] text-xs text-[#263238]">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-[#0A7B75]">verified</span>
                        <span>{pkg.coreExperience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-[#0A7B75]">hotel</span>
                        <span className="text-[#667085]">{pkg.stayCategories.join(' • ')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="p-3.5 rounded-xl bg-[#F8FAF8] border border-[#DDE7E5] mb-4 flex items-center justify-between">
                    <span className="text-xs font-mono text-[#667085]">Pricing</span>
                    <span className="text-xs font-mono text-[#005B5C] font-bold uppercase">
                      Price on Request
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/jawai-tour-packages/${pkg.slug}`}
                      className="flex-1 text-center py-2.5 rounded-full bg-white hover:bg-[#EEF8F6] text-[#005B5C] text-xs font-mono uppercase font-semibold tracking-wider transition-all border border-[#005B5C]"
                    >
                      View Itinerary
                    </Link>
                    <a
                      href={pkgWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm"
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

        {/* Featured Resorts Cross-Promotion Section */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-1">
              Handpicked Accommodations For Your Tour
            </span>
            <h3 className="text-xl md:text-2xl font-bold font-display-brand text-[#005B5C]">
              Featured Wilderness Stays in Jawai
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* J Wild Resort */}
            <div className="p-6 rounded-3xl bg-white border border-[#005B5C]/20 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-1">
                  Private Pool Villas
                </span>
                <h4 className="text-base font-bold text-[#005B5C] mb-2">
                  Stay at J Wild Resort Jawai
                </h4>
                <p className="text-xs text-[#667085] leading-relaxed mb-4">
                  Combine your tour package with 11 secluded private pool villas set against ancient granite kopjes.
                </p>
              </div>
              <Link
                href="/j-wild-resort-jawai"
                className="w-full py-2.5 px-4 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-sm text-center"
              >
                Explore J Wild Resort →
              </Link>
            </div>

            {/* Bijapur Lodge */}
            <div className="p-6 rounded-3xl bg-white border border-[#005B5C]/20 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-1">
                  Boutique Safari Lodge
                </span>
                <h4 className="text-base font-bold text-[#005B5C] mb-2">
                  Stay at Bijapur Lodge Jawai
                </h4>
                <p className="text-xs text-[#667085] leading-relaxed mb-4">
                  6 spacious luxury suites (~550 sq. ft.), farm-led dining, swimming pool, and sustainable wilderness living.
                </p>
              </div>
              <Link
                href="/bijapur-lodge-jawai"
                className="w-full py-2.5 px-4 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-sm text-center"
              >
                Stay at Bijapur Lodge Jawai →
              </Link>
            </div>

            {/* Jawai Pugmark Safari Lodge */}
            <div className="p-6 rounded-3xl bg-white border border-[#005B5C]/20 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-1">
                  Cottages & Luxury Tents
                </span>
                <h4 className="text-base font-bold text-[#005B5C] mb-2">
                  Jawai Pugmark Safari Lodge
                </h4>
                <p className="text-xs text-[#667085] leading-relaxed mb-4">
                  Wilderness cottages, luxury tents, swimming pool, high tea, and dedicated leopard safari coordination in Sena.
                </p>
              </div>
              <Link
                href="/jawai-pugmark-safari-lodge"
                className="w-full py-2.5 px-4 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-sm text-center"
              >
                Jawai Pugmark Safari Lodge →
              </Link>
            </div>

            {/* SUJAN JAWAI */}
            <div className="p-6 rounded-3xl bg-white border border-[#005B5C]/20 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-1">
                  Ultra-Luxury Safari Camp
                </span>
                <h4 className="text-base font-bold text-[#005B5C] mb-2">
                  Stay at SUJAN JAWAI
                </h4>
                <p className="text-xs text-[#667085] leading-relaxed mb-4">
                  Intimate 10-tent conservation retreat featuring Rock Suites, private heated pools, Rabari culture, and expert-guided wilderness drives.
                </p>
              </div>
              <Link
                href="/sujan-jawai"
                className="w-full py-2.5 px-4 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-sm text-center"
              >
                Stay at SUJAN JAWAI →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Trust & Quotation Notice */}
        <div className="p-8 md:p-12 rounded-3xl bg-[#EEF8F6] border border-[#DDE7E5] text-center shadow-sm">
          <h3 className="text-xl font-bold font-display-brand text-[#005B5C] mb-2">Need a Customized Jawai Itinerary?</h3>
          <p className="text-xs md:text-sm text-[#263238] font-light max-w-xl mx-auto mb-6 leading-relaxed">
            Every traveler has different preferences for safaris, birding, and resort categories. Tell our team your dates and group size for an accurate quotation.
          </p>
          <a
            href={buildWhatsAppUrl({
              packageOrExperienceName: 'Custom Jawai Itinerary Planning',
              canonicalPath: '/jawai-tour-packages',
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#005B5C] text-white font-semibold text-xs uppercase tracking-widest hover:bg-[#0A7B75] transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            <span>Talk to a Travel Expert (+91 73000 03101)</span>
          </a>
        </div>
      </div>
    </div>
  );
}

