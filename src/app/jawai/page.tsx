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
    <div className="w-full bg-[#0b0e15] text-[#e1e2ec] min-h-screen pt-28 pb-20">
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 p-8 md:p-16 bg-gradient-to-r from-black/90 via-black/60 to-transparent">
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1800&q=80"
              alt="Jawai Granite Landscape"
              fill
              className="object-cover opacity-35"
              priority
            />
          </div>

          <div className="max-w-3xl">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#e8a455]/15 border border-[#e8a455]/30 text-[#e8a455] text-xs font-mono uppercase tracking-widest mb-4">
              Destination Flagship
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white tracking-tight leading-tight mb-6">
              Jawai, Rajasthan — Wildlife, Granite Kopjes & Living Culture
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8">
              Jawai offers a rare mix of dramatic billion-year-old granite hills, open wildlife habitat, the vast Jawai Dam landscape, migratory birdlife, and living pastoral Rabari culture. It is ideal for travellers who want a slower, nature-led Rajasthan experience beyond conventional city sightseeing.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={generalWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs uppercase tracking-widest inline-flex items-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Get Customized Quote on WhatsApp</span>
              </a>
              <Link
                href="/jawai-tour-packages"
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-widest border border-white/15 transition-all"
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
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#e8a455] font-bold">
            Landscape & Ecology
          </span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mt-2">
            Why Visit Jawai?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <span className="material-symbols-outlined text-3xl text-[#e8a455] mb-4">pets</span>
            <h3 className="text-lg font-bold text-white mb-2">Unfenced Leopard Sanctuary</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Leopards roam freely across natural granite boulder caves in complete peaceful co-existence with local shepherd communities.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <span className="material-symbols-outlined text-3xl text-[#e8a455] mb-4">water</span>
            <h3 className="text-lg font-bold text-white mb-2">Jawai Dam & Wetlands</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              The largest reservoir in Western Rajasthan, hosting thousands of migratory flamingos, cranes, pelicans, and large marsh crocodiles.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <span className="material-symbols-outlined text-3xl text-[#e8a455] mb-4">terrain</span>
            <h3 className="text-lg font-bold text-white mb-2">Monolithic Granite Hills</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Million-year-old smooth granite domes providing steep technical 4x4 climbs, panoramic sunset views, and deep starry skies.
            </p>
          </div>
        </div>
      </section>

      {/* Top Experiences Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#e8a455] font-bold">
              Field Activities
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mt-2">
              Signature Experiences in Jawai
            </h2>
          </div>
          <Link
            href="/jawai-safari-booking"
            className="text-xs font-mono uppercase tracking-widest text-[#e8a455] hover:underline inline-flex items-center gap-1"
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
              className="group rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden hover:border-[#e8a455]/50 transition-all flex flex-col justify-between"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={exp.heroImage}
                  alt={exp.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-white">
                  {exp.category}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-white text-base group-hover:text-[#e8a455] transition-colors mb-2">
                    {exp.name}
                  </h3>
                  <p className="text-xs text-white/60 line-clamp-3 leading-relaxed mb-4">
                    {exp.shortDesc}
                  </p>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#e8a455] flex items-center gap-1">
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
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#e8a455] font-bold">
              Curated Itineraries
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mt-2">
              Featured Jawai Packages
            </h2>
            <p className="text-xs text-white/50 mt-1">
              Prices on Request — Customized based on travel dates, stay category, and inclusions.
            </p>
          </div>
          <Link
            href="/jawai-tour-packages"
            className="text-xs font-mono uppercase tracking-widest text-[#e8a455] hover:underline inline-flex items-center gap-1"
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
                className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden flex flex-col justify-between"
              >
                <div className="relative h-56 w-full">
                  <Image src={pkg.image} alt={pkg.name} fill className="object-cover" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-xs font-mono uppercase tracking-wider text-[#e8a455]">
                    {pkg.tag}
                  </span>
                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-xs font-mono text-white">
                    {pkg.durationShort}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-2">
                      <span>{pkg.id}</span>
                      <span>Best for {pkg.bestFor}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-xs text-white/70 leading-relaxed mb-6">{pkg.overview}</p>
                  </div>
                  <div>
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                      <Link
                        href={`/jawai-tour-packages/${pkg.slug}`}
                        className="text-xs font-mono uppercase tracking-wider text-white hover:text-[#e8a455] transition-colors"
                      >
                        Itinerary Details →
                      </Link>
                      <a
                        href={pkgWhatsApp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-[#25D366] text-black text-[11px] font-mono uppercase font-bold tracking-wider hover:bg-[#20ba59] transition-all"
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
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#005B5C]/20 to-[#0A7B75]/10 border border-[#0A7B75]/30">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4">
            How Long Should You Stay in Jawai?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-sm text-white/80">
            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <strong className="text-[#e8a455] block mb-1">1 Night / 2 Days</strong>
              Ideal for a short safari escape from Udaipur or Jodhpur with 1-2 prime game tracking drives.
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <strong className="text-[#e8a455] block mb-1">2 Nights / 3 Days</strong>
              Balanced first visit covering leopards, Jawai Dam birding, crocodiles, and granite climbs.
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <strong className="text-[#e8a455] block mb-1">3 Nights / 4 Days</strong>
              Slow travel itinerary with pastoral Rabari culture, cave temples, and unhurried wildlife sessions.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-wider">
            <Link href="/best-time-to-visit-jawai" className="hover:text-[#e8a455] underline">
              Best Time to Visit
            </Link>
            <span>•</span>
            <Link href="/how-to-reach-jawai" className="hover:text-[#e8a455] underline">
              How to Reach Jawai
            </Link>
            <span>•</span>
            <Link href="/jawai-hotels-resorts" className="hover:text-[#e8a455] underline">
              Stays & Resorts
            </Link>
            <span>•</span>
            <Link href="/responsible-travel" className="hover:text-[#e8a455] underline">
              Responsible Wildlife Code
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
