import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GuidePageData } from '@/constants/guidesData';
import { FLAGSHIP_PACKAGES } from '@/constants/packagesData';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

interface Props {
  guide: GuidePageData;
}

// Curated high-res Jawai landscape & wildlife imagery for aesthetic editorial enrichment
const SECTION_IMAGES = [
  'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1520637736862-4d1921f9a0c0?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1400&q=80',
];

export function GuidePageTemplate({ guide }: Props) {
  const whatsappUrl = buildWhatsAppUrl({
    packageOrExperienceName: guide.heroTitle,
    canonicalPath: `/${guide.slug}`,
    customMessage: `Hi Ghoomosa, I am reading the "${guide.heroTitle}" guide on your website. Please help me plan my Jawai trip.`,
  });

  const relatedPackages = FLAGSHIP_PACKAGES.filter((p) =>
    guide.relatedPackageIds.includes(p.id)
  );

  return (
    <div className="w-full bg-[#07090e] text-[#e1e2ec] min-h-screen pb-32">
      {/* 1. Cinematic Full-Bleed Hero Section with Ambient Parallax Background */}
      <section className="relative w-full min-h-[580px] lg:min-h-[640px] pt-32 pb-20 flex items-center justify-center overflow-hidden border-b border-white/10">
        {/* Background Layer with Dark Gradient Scrim */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2000&q=85"
            alt={guide.heroTitle}
            fill
            className="object-cover scale-105 opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/60 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,164,85,0.08)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          {/* Telemetry & Category Badge */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-[#e8a455]/15 border border-[#e8a455]/30 text-[#e8a455] text-xs font-mono uppercase tracking-widest backdrop-blur-md">
              Jawai Field Handbook
            </span>
            <span className="text-xs font-mono text-white/50 tracking-widest hidden sm:inline-block">
              25.10° N, 73.15° E • ARAVALLI REGION
            </span>
          </div>

          {/* Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-6 drop-shadow-2xl max-w-4xl mx-auto">
            {guide.heroTitle}
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
            {guide.intro}
          </p>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#e8a455] to-[#c98335] hover:from-[#ffc27e] hover:to-[#e8a455] text-black font-bold text-xs font-mono uppercase tracking-widest inline-flex items-center gap-2.5 shadow-[0_0_25px_rgba(232,164,85,0.4)] border border-[#e8a455]/80 transition-all hover:scale-105"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>Ask a Trip Expert on WhatsApp</span>
            </a>
            <Link
              href="/jawai-safari-booking"
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs font-mono uppercase tracking-widest border border-white/20 backdrop-blur-md transition-all"
            >
              Book Safari Slot
            </Link>
          </div>

          {/* Telemetry Stats Bar */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#e8a455] block">Region</span>
              <span className="text-xs font-semibold text-white">Pali, Rajasthan</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#e8a455] block">Landscape</span>
              <span className="text-xs font-semibold text-white">Granite Kopjes & Dam</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#e8a455] block">Best Window</span>
              <span className="text-xs font-semibold text-white">October — April</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#e8a455] block">Nearest Airport</span>
              <span className="text-xs font-semibold text-white">Udaipur (140 km)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Editorial Content Layout with Chapter Cards */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article Stream (2 Columns on Large Screens) */}
          <div className="lg:col-span-2 space-y-12">
            {guide.sections.map((sec, idx) => {
              const bgImg = SECTION_IMAGES[idx % SECTION_IMAGES.length];
              const isEven = idx % 2 === 1;

              return (
                <article
                  key={idx}
                  className="rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 overflow-hidden hover:border-[#e8a455]/40 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                >
                  {/* Optional Visual Banner for Chapters */}
                  {idx === 0 || isEven ? (
                    <div className="relative h-64 md:h-80 w-full overflow-hidden">
                      <Image
                        src={bgImg}
                        alt={sec.title}
                        fill
                        className="object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e15] via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#e8a455]">
                        CHAPTER {String(idx + 1).padStart(2, '0')}
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 pb-0 flex items-center justify-between border-b border-white/5">
                      <span className="text-xs font-mono tracking-widest text-[#e8a455] uppercase">
                        CHAPTER {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                  )}

                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 leading-snug">
                      {sec.title}
                    </h2>
                    <p className="text-sm md:text-base text-white/80 whitespace-pre-line leading-relaxed mb-6 font-light">
                      {sec.desc}
                    </p>

                    {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                      <div className="p-5 rounded-2xl bg-black/50 border border-white/10">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#e8a455] block mb-3 font-semibold">
                          Field Highlights & Observations
                        </span>
                        <ul className="space-y-2.5 text-xs md:text-sm text-white/80">
                          {sec.bulletPoints.map((bp, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5">
                              <span className="text-[#e8a455] text-base leading-none mt-0.5">•</span>
                              <span>{bp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}

            {/* FAQs Accordion/Cards */}
            {guide.faqs && guide.faqs.length > 0 && (
              <section className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-2xl text-[#e8a455]">help</span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                    Frequently Asked Questions
                  </h3>
                </div>
                <div className="space-y-4">
                  {guide.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all"
                    >
                      <h4 className="text-base font-bold text-white mb-2">{faq.q}</h4>
                      <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sticky Luxury Sidebar (Table of Contents & Quick Conversion) */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="sticky top-28 p-6 md:p-8 rounded-3xl bg-gradient-to-b from-black/90 to-black/70 border border-white/15 backdrop-blur-2xl space-y-6 shadow-2xl">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#e8a455] block mb-1">
                  Trip Planning Concierge
                </span>
                <h3 className="text-xl font-serif font-bold text-white">Plan Your Jawai Trip</h3>
                <p className="text-xs text-white/60 mt-1 leading-relaxed">
                  Personalized advice from local naturalists & certified safari trackers.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/60">Phone / WhatsApp</span>
                  <span className="font-mono text-[#e8a455] font-semibold">+91 73000 03101</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/60">Pricing</span>
                  <span className="font-mono text-white">Price on Request</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/60">Average Response</span>
                  <span className="font-mono text-[#25D366]">Within 15 mins</span>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-[1.02]"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Enquire on WhatsApp</span>
              </a>

              <Link
                href="/jawai-safari-booking"
                className="w-full py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 border border-white/15 transition-all"
              >
                <span>Book Safari Enquiry</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>

              <div className="pt-4 border-t border-white/10 text-center">
                <span className="text-[11px] text-white/50 block mb-3">Explore Related Guides:</span>
                <div className="flex flex-col gap-2 text-xs font-mono text-white/70">
                  <Link href="/best-time-to-visit-jawai" className="hover:text-[#e8a455] transition-colors">
                    → Best Time to Visit
                  </Link>
                  <Link href="/how-to-reach-jawai" className="hover:text-[#e8a455] transition-colors">
                    → How to Reach Jawai
                  </Link>
                  <Link href="/things-to-do-in-jawai" className="hover:text-[#e8a455] transition-colors">
                    → Things to Do
                  </Link>
                  <Link href="/responsible-travel" className="hover:text-[#e8a455] transition-colors">
                    → Responsible Wildlife Code
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* 3. Bottom Related Packages Carousel/Grid */}
        {relatedPackages.length > 0 && (
          <section className="mt-20 pt-12 border-t border-white/10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#e8a455] block mb-1">
                  Curated Expeditions
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                  Recommended Packages for this Guide
                </h3>
              </div>
              <Link
                href="/jawai-tour-packages"
                className="text-xs font-mono uppercase tracking-wider text-[#e8a455] hover:underline inline-flex items-center gap-1"
              >
                <span>View All 10 Packages</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden flex flex-col md:flex-row hover:border-[#e8a455]/50 transition-all group"
                >
                  <div className="relative h-52 md:h-auto md:w-2/5 shrink-0">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono text-[#e8a455]">
                      {pkg.durationShort}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-white/50 block mb-1">
                        Best for {pkg.bestFor}
                      </span>
                      <h4 className="text-lg font-bold text-white group-hover:text-[#e8a455] transition-colors mb-2">
                        {pkg.name}
                      </h4>
                      <p className="text-xs text-white/70 line-clamp-2 leading-relaxed mb-4">
                        {pkg.overview}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-xs font-mono text-[#e8a455] font-semibold">
                        Price on Request
                      </span>
                      <Link
                        href={`/jawai-tour-packages/${pkg.slug}`}
                        className="text-xs font-mono uppercase text-white hover:text-[#e8a455] flex items-center gap-1"
                      >
                        <span>Itinerary</span>
                        <span className="material-symbols-outlined text-xs">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
