import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SIGNATURE_EXPERIENCES } from '@/constants/experiencesData';
import { FLAGSHIP_PACKAGES } from '@/constants/packagesData';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Jawai Rajasthan Travel Guide, Safari & Experiences | Ghoomosa',
  description:
    'Discover Jawai, Rajasthan: wildlife experiences, Jawai Dam, bird watching, stays, trip ideas and practical planning guides by Ghoomosa.',
};

export default function JawaiDestinationPage() {
  const generalWhatsApp = buildWhatsAppUrl({
    packageOrExperienceName: 'Jawai Destination Planning',
    canonicalPath: '/jawai',
    customMessage:
      'Hi Ghoomosa, I am planning a visit to Jawai, Rajasthan. Please help me with recommendations for wildlife safaris, stays, and customized itineraries.',
  });

  return (
    <div className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen pt-28 pb-20">
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="relative rounded-3xl overflow-hidden border border-[#DDE7E5] p-8 md:p-16 bg-[#003F40]">
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1800&q=80"
              alt="Jawai Granite Landscape"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>

          <div className="max-w-3xl">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#FDBA21]/20 border border-[#FDBA21]/40 text-[#FDBA21] text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
              Destination Flagship
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display-brand font-bold text-white tracking-tight leading-tight mb-6">
              Jawai, Rajasthan — Wildlife, Granite Kopjes & Living Culture
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 font-light">
              Jawai offers a rare mix of dramatic billion-year-old granite hills, open wildlife habitat, the vast Jawai Dam landscape, migratory birdlife, and living pastoral Rabari culture. It is ideal for travellers who want a slower, nature-led Rajasthan experience beyond conventional city sightseeing.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={generalWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-[#263238] font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Get Customized Quote on WhatsApp</span>
              </a>
              <Link
                href="/jawai-tour-packages"
                className="px-6 py-3.5 rounded-full bg-white text-[#005B5C] font-semibold text-xs uppercase tracking-widest border border-white hover:bg-[#EEF8F6] transition-all"
              >
                Explore Tour Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit Jawai Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#005B5C] font-bold">
            Landscape & Ecology
          </span>
          <h2 className="text-2xl md:text-4xl font-display-brand font-bold text-[#005B5C] mt-2">
            Why Visit Jawai?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm hover:border-[#0A7B75] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#EEF8F6] text-[#005B5C] flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl">pets</span>
            </div>
            <h3 className="text-lg font-bold text-[#005B5C] mb-2">Unfenced Leopard Sanctuary</h3>
            <p className="text-sm text-[#263238] font-light leading-relaxed">
              Leopards roam freely across natural granite boulder caves in complete peaceful co-existence with local shepherd communities.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm hover:border-[#0A7B75] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#EEF8F6] text-[#005B5C] flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl">water</span>
            </div>
            <h3 className="text-lg font-bold text-[#005B5C] mb-2">Jawai Dam & Wetlands</h3>
            <p className="text-sm text-[#263238] font-light leading-relaxed">
              The largest reservoir in Western Rajasthan, hosting thousands of migratory flamingos, cranes, pelicans, and large marsh crocodiles.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm hover:border-[#0A7B75] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#EEF8F6] text-[#005B5C] flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl">terrain</span>
            </div>
            <h3 className="text-lg font-bold text-[#005B5C] mb-2">Monolithic Granite Hills</h3>
            <p className="text-sm text-[#263238] font-light leading-relaxed">
              Million-year-old smooth granite domes providing steep technical 4x4 climbs, panoramic sunset views, and deep starry skies.
            </p>
          </div>
        </div>
      </section>

      {/* Top Experiences Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#005B5C] font-bold">
              Field Activities
            </span>
            <h2 className="text-2xl md:text-4xl font-display-brand font-bold text-[#005B5C] mt-2">
              Signature Experiences in Jawai
            </h2>
          </div>
          <Link
            href="/jawai-safari-booking"
            className="text-xs font-mono uppercase tracking-widest text-[#005B5C] hover:text-[#0A7B75] inline-flex items-center gap-1 font-semibold"
          >
            <span>Book Safari Enquiry</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIGNATURE_EXPERIENCES.map((exp) => (
            <Link
              key={exp.id}
              href={`/${exp.slug}`}
              className="group rounded-2xl bg-white border border-[#DDE7E5] overflow-hidden hover:border-[#0A7B75] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative h-48 w-full overflow-hidden bg-[#EEF8F6]">
                <Image
                  src={exp.heroImage}
                  alt={exp.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-[10px] font-mono uppercase tracking-wider text-[#005B5C] font-bold shadow-sm">
                  {exp.category}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-[#005B5C] text-base group-hover:text-[#0A7B75] transition-colors mb-2">
                    {exp.name}
                  </h3>
                  <p className="text-xs text-[#263238] font-light line-clamp-3 leading-relaxed mb-4">
                    {exp.shortDesc}
                  </p>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#005B5C] font-semibold flex items-center gap-1">
                  <span>Explore Guide</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Flagship Packages in Jawai */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#005B5C] font-bold">
              Curated Itineraries
            </span>
            <h2 className="text-2xl md:text-4xl font-display-brand font-bold text-[#005B5C] mt-2">
              Featured Jawai Packages
            </h2>
            <p className="text-xs text-[#667085] mt-1 font-light">
              Prices on Request — Customized based on travel dates, stay category, and inclusions.
            </p>
          </div>
          <Link
            href="/jawai-tour-packages"
            className="text-xs font-mono uppercase tracking-widest text-[#005B5C] hover:text-[#0A7B75] inline-flex items-center gap-1 font-semibold"
          >
            <span>View All 10 Packages</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FLAGSHIP_PACKAGES.slice(0, 3).map((pkg) => {
            const pkgWhatsApp = buildWhatsAppUrl({
              packageOrExperienceName: pkg.name,
              duration: pkg.duration,
              packageId: pkg.id,
              canonicalPath: `/jawai-tour-packages/${pkg.slug}`,
            });

            return (
              <div
                key={pkg.id}
                className="rounded-2xl bg-white border border-[#DDE7E5] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#0A7B75] transition-all"
              >
                <div className="relative h-56 w-full bg-[#EEF8F6]">
                  <Image src={pkg.image} alt={pkg.name} fill className="object-cover" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-xs font-mono uppercase tracking-wider text-[#005B5C] font-bold shadow-sm">
                    {pkg.tag}
                  </span>
                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#005B5C] text-xs font-mono text-white font-semibold shadow-sm">
                    {pkg.durationShort}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#667085] mb-2">
                      <span>{pkg.id}</span>
                      <span>Best for {pkg.bestFor}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#005B5C] mb-2">{pkg.name}</h3>
                    <p className="text-xs text-[#263238] font-light leading-relaxed mb-4">{pkg.overview}</p>
                  </div>
                  <div>
                    <div className="pt-4 border-t border-[#DDE7E5] flex items-center justify-between gap-3">
                      <Link
                        href={`/jawai-tour-packages/${pkg.slug}`}
                        className="text-xs font-mono uppercase tracking-wider text-[#005B5C] hover:text-[#0A7B75] font-semibold transition-colors"
                      >
                        Itinerary Details →
                      </Link>
                      <a
                        href={pkgWhatsApp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-[#005B5C] text-white text-[11px] font-mono uppercase font-bold tracking-wider hover:bg-[#0A7B75] transition-all"
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How Long to Stay & Planning Links */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="p-8 md:p-12 rounded-3xl bg-[#EEF8F6] border border-[#DDE7E5] shadow-sm">
          <h3 className="text-xl md:text-2xl font-display-brand font-bold text-[#005B5C] mb-4">
            How Long Should You Stay in Jawai?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-sm text-[#263238]">
            <div className="p-5 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm">
              <strong className="text-[#005B5C] block mb-1 font-bold">1 Night / 2 Days</strong>
              <p className="text-xs text-[#263238] font-light leading-relaxed">
                Ideal for a short safari escape from Udaipur or Jodhpur with 1-2 prime game tracking drives.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm">
              <strong className="text-[#005B5C] block mb-1 font-bold">2 Nights / 3 Days</strong>
              <p className="text-xs text-[#263238] font-light leading-relaxed">
                Balanced first visit covering leopards, Jawai Dam birding, crocodiles, and granite climbs.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm">
              <strong className="text-[#005B5C] block mb-1 font-bold">3 Nights / 4 Days</strong>
              <p className="text-xs text-[#263238] font-light leading-relaxed">
                Slow travel itinerary with pastoral Rabari culture, cave temples, and unhurried wildlife sessions.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-wider text-[#005B5C]">
            <Link href="/best-time-to-visit-jawai" className="hover:underline font-semibold">
              Best Time to Visit
            </Link>
            <span className="text-[#DDE7E5]">•</span>
            <Link href="/how-to-reach-jawai" className="hover:underline font-semibold">
              How to Reach Jawai
            </Link>
            <span className="text-[#DDE7E5]">•</span>
            <Link href="/jawai-hotels-resorts" className="hover:underline font-semibold">
              Stays & Resorts
            </Link>
            <span className="text-[#DDE7E5]">•</span>
            <Link href="/responsible-travel" className="hover:underline font-semibold">
              Responsible Wildlife Code
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

