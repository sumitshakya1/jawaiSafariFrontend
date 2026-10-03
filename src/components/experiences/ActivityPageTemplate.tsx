import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExperienceItem } from '@/constants/experiencesData';
import { FLAGSHIP_PACKAGES } from '@/constants/packagesData';
import { CURATED_MEDIA, CuratedTopicMedia } from '@/constants/curatedMedia';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

interface Props {
  experience: ExperienceItem;
}

function getMediaForExperience(slug: string): CuratedTopicMedia {
  if (slug.includes('bird')) return CURATED_MEDIA.birding;
  if (slug.includes('croc')) return CURATED_MEDIA.crocodile;
  if (slug.includes('dam')) return CURATED_MEDIA.dam;
  if (slug.includes('hill') || slug.includes('drive')) return CURATED_MEDIA.offroad;
  if (slug.includes('village') || slug.includes('culture')) return CURATED_MEDIA.culture;
  if (slug.includes('photography')) return CURATED_MEDIA.photography;
  return CURATED_MEDIA.leopard;
}

export function ActivityPageTemplate({ experience }: Props) {
  const media = getMediaForExperience(experience.slug);

  const whatsappUrl = buildWhatsAppUrl({
    packageOrExperienceName: experience.name,
    canonicalPath: `/${experience.slug}`,
    customMessage: `Hi Ghoomosa, I am interested in the "${experience.name}" experience in Jawai, Rajasthan. Please share available slots, inclusions, and a customized quotation.`,
  });

  const relatedPackages = FLAGSHIP_PACKAGES.filter((p) =>
    experience.relatedPackageIds.includes(p.id)
  );

  return (
    <div className="w-full bg-[#07090e] text-[#e1e2ec] min-h-screen pb-32">
      {/* 1. Full-Bleed Dark Luxury Hero Section */}
      <section className="relative w-full min-h-[580px] lg:min-h-[640px] pt-32 pb-20 flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10">
          <Image
            src={media.hero}
            alt={experience.name}
            fill
            className="object-cover scale-105 opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/60 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,164,85,0.08)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          {/* Badge & Telemetry */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-[#e8a455]/15 border border-[#e8a455]/30 text-[#e8a455] text-xs font-mono uppercase tracking-widest backdrop-blur-md">
              {experience.category} Experience
            </span>
            <span className="text-xs font-mono text-white/50 tracking-widest hidden sm:inline-block">
              JAWAI FIELD SECTOR
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-6 drop-shadow-2xl max-w-4xl mx-auto">
            {experience.heroTitle}
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
            {experience.shortDesc}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#e8a455] to-[#c98335] hover:from-[#ffc27e] hover:to-[#e8a455] text-black font-bold text-xs font-mono uppercase tracking-widest inline-flex items-center gap-2.5 shadow-[0_0_25px_rgba(232,164,85,0.4)] border border-[#e8a455]/80 transition-all hover:scale-105"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>Enquire Slots on WhatsApp (+91 73000 03101)</span>
            </a>
            <Link
              href="/jawai-safari-booking"
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs font-mono uppercase tracking-widest border border-white/20 backdrop-blur-md transition-all"
            >
              Book Safari Slot
            </Link>
          </div>

          {/* Activity Telemetry Bar */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#e8a455] block">Timing</span>
              <span className="text-xs font-semibold text-white truncate block">{experience.scheduling}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#e8a455] block">Category</span>
              <span className="text-xs font-semibold text-white">{experience.category}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#e8a455] block">Vehicle</span>
              <span className="text-xs font-semibold text-white">4x4 Open Gypsy</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#e8a455] block">Pricing</span>
              <span className="text-xs font-semibold text-[#e8a455]">Price on Request</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Activity Photo Gallery (4 Unique High-Res Visuals for this activity) */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pt-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#e8a455] block mb-1">
              Field Gallery
            </span>
            <h2 className="text-2xl font-serif font-bold text-white">
              Visual Moments from {experience.name}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {media.gallery.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden group relative h-60 flex flex-col justify-end p-4"
            >
              <Image
                src={item.url}
                alt={item.caption}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="relative z-10">
                <span className="text-[10px] font-mono text-[#e8a455] uppercase block mb-1">
                  {item.tag}
                </span>
                <p className="text-xs text-white/90 font-light leading-snug line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Main Content Details Grid */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Overview Card */}
            <article className="rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 p-6 md:p-8 shadow-xl">
              <h2 className="text-2xl font-serif font-bold text-white mb-4">About this Experience</h2>
              <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                {experience.longDesc}
              </p>
            </article>

            {/* What to Expect */}
            <article className="rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 p-6 md:p-8 shadow-xl">
              <h2 className="text-2xl font-serif font-bold text-white mb-6">What to Expect on Field</h2>
              <ul className="space-y-4 text-sm text-white/80">
                {experience.whatToExpect.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-lg text-[#e8a455] mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* What to Carry & Ideal For */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#e8a455]">backpack</span>
                  <span>What to Carry</span>
                </h3>
                <ul className="space-y-2.5 text-xs md:text-sm text-white/70">
                  {experience.whatToCarry.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#e8a455]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#e8a455]">group</span>
                  <span>Ideal For</span>
                </h3>
                <ul className="space-y-2.5 text-xs md:text-sm text-white/70">
                  {experience.idealTraveller.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#e8a455]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Responsible Wildlife Protocol */}
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-[#005B5C]/20 to-[#0A7B75]/10 border border-[#0A7B75]/35 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#e8a455]">eco</span>
                <span>Responsible Wildlife & Travel Protocol</span>
              </h3>
              <p className="text-xs md:text-sm text-white/75 leading-relaxed font-light">
                {experience.responsibleTravelNote}
              </p>
              <div className="pt-2 text-xs text-[#e8a455] font-mono">
                <strong>CRITICAL NOTE:</strong> {experience.criticalNote}
              </div>
            </div>

            {/* FAQs */}
            {experience.faq && experience.faq.length > 0 && (
              <section className="pt-4">
                <h3 className="text-2xl font-serif font-bold text-white mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {experience.faq.map((item, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all"
                    >
                      <h4 className="text-base font-bold text-white mb-2">{item.q}</h4>
                      <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="sticky top-28 p-6 md:p-8 rounded-3xl bg-gradient-to-b from-black/90 to-black/70 border border-white/15 backdrop-blur-2xl space-y-6 shadow-2xl">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#e8a455] block mb-1">
                  Activity Overview
                </span>
                <h3 className="text-xl font-serif font-bold text-white">{experience.name}</h3>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-start justify-between text-xs gap-4">
                  <span className="text-white/60">Scheduling</span>
                  <span className="font-mono text-white text-right">{experience.scheduling}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/60">Category</span>
                  <span className="font-mono text-[#e8a455]">{experience.category}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/60">Pricing</span>
                  <span className="font-mono text-[#e8a455] font-bold">Price on Request</span>
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
                <span>Reserve Safari Slot</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </aside>
        </div>

        {/* Related Packages */}
        {relatedPackages.length > 0 && (
          <section className="mt-20 pt-12 border-t border-white/10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8">
              Tour Packages Featuring {experience.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPackages.map((pkg) => (
                <Link
                  key={pkg.id}
                  href={`/jawai-tour-packages/${pkg.slug}`}
                  className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#e8a455]/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[11px] font-mono text-[#e8a455] block mb-1">{pkg.durationShort}</span>
                    <h4 className="text-lg font-bold text-white group-hover:text-[#e8a455] transition-colors mb-2">
                      {pkg.name}
                    </h4>
                    <p className="text-xs text-white/60 line-clamp-2 leading-relaxed mb-4">{pkg.overview}</p>
                  </div>
                  <span className="text-xs font-mono uppercase text-white/80 group-hover:text-white flex items-center gap-1">
                    <span>View Itinerary</span>
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
