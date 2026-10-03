import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FLAGSHIP_PACKAGES } from '@/constants/packagesData';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return FLAGSHIP_PACKAGES.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pkg = FLAGSHIP_PACKAGES.find((p) => p.slug === params.slug);
  if (!pkg) return { title: 'Package Not Found | Ghoomosa' };

  return {
    title: `${pkg.name} (${pkg.durationShort}) - Jawai Tour Package | Ghoomosa`,
    description: pkg.overview.slice(0, 160),
  };
}

export default function PackageDetailPage({ params }: Props) {
  const pkg = FLAGSHIP_PACKAGES.find((p) => p.slug === params.slug);
  if (!pkg) notFound();

  const pkgWhatsApp = buildWhatsAppUrl({
    packageOrExperienceName: pkg.name,
    duration: pkg.duration,
    packageId: pkg.id,
    canonicalPath: `/jawai-tour-packages/${pkg.slug}`,
  });

  return (
    <div className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#667085] mb-6">
          <Link href="/" className="hover:text-[#005B5C]">Home</Link>
          <span>/</span>
          <Link href="/jawai-tour-packages" className="hover:text-[#005B5C]">Packages</Link>
          <span>/</span>
          <span className="text-[#005B5C] font-semibold">{pkg.name}</span>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden border border-[#DDE7E5] p-6 md:p-12 bg-[#003F40] mb-12 shadow-sm">
          <div className="absolute inset-0 -z-10">
            <Image
              src={pkg.image}
              alt={pkg.name}
              fill
              className="object-cover opacity-35"
              priority
            />
          </div>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-[#FDBA21]/20 border border-[#FDBA21]/40 text-[#FDBA21] text-xs font-mono uppercase tracking-wider font-semibold">
                {pkg.tag}
              </span>
              <span className="px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-mono font-medium backdrop-blur-sm">
                {pkg.duration}
              </span>
              <span className="text-xs font-mono text-white/80 font-medium">ID: {pkg.id}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-display-brand font-bold text-white tracking-tight leading-tight mb-4">
              {pkg.name}
            </h1>

            <p className="text-sm md:text-base text-white/90 leading-relaxed font-light mb-6">
              {pkg.overview}
            </p>

            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 inline-block mb-6">
              <span className="text-xs font-mono text-white/80 block mb-0.5">Indicative Pricing:</span>
              <span className="text-sm font-mono text-[#FDBA21] font-bold uppercase">
                Price on Request — Customized to your travel dates and stay tier
              </span>
            </div>

            <div>
              <a
                href={pkgWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-[#263238] font-bold text-xs font-mono uppercase tracking-widest transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Get Quote on WhatsApp (+91 73000 03101)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Content & Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Why Choose This Trip */}
            <section className="p-6 md:p-8 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm">
              <h2 className="text-xl font-display-brand font-bold text-[#005B5C] mb-4">Why Choose This Trip?</h2>
              <ul className="space-y-3 text-sm text-[#263238] font-light">
                {pkg.whyChoose.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-base text-[#005B5C] mt-0.5 shrink-0">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Day-Wise Itinerary */}
            <section>
              <h2 className="text-2xl font-display-brand font-bold text-[#005B5C] mb-6">Day-by-Day Itinerary</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm relative"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-md bg-[#EEF8F6] text-[#005B5C] border border-[#005B5C]/20 text-xs font-mono font-bold">
                        Day {day.day}
                      </span>
                      <h3 className="text-lg font-bold text-[#005B5C]">{day.title}</h3>
                    </div>
                    <p className="text-sm text-[#263238] font-light leading-relaxed mb-4">{day.desc}</p>
                    {day.highlights && day.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {day.highlights.map((hl, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md bg-[#F8FAF8] border border-[#DDE7E5] text-[11px] font-mono text-[#667085]"
                          >
                            • {hl}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm">
                <h3 className="text-base font-bold text-[#005B5C] flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-[#25D366]">check</span>
                  <span>Inclusions</span>
                </h3>
                <ul className="space-y-2 text-xs text-[#263238] font-light">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#005B5C] font-bold">•</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm">
                <h3 className="text-base font-bold text-red-600 flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined">close</span>
                  <span>Exclusions</span>
                </h3>
                <ul className="space-y-2 text-xs text-[#263238] font-light">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Stay Categories */}
            <section className="p-6 md:p-8 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm">
              <h3 className="text-lg font-display-brand font-bold text-[#005B5C] mb-2">Available Stay Categories</h3>
              <p className="text-xs text-[#667085] mb-4 font-light">
                Specific boutique resorts or luxury camps are allocated upon mutual preference and real-time confirmation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pkg.stayCategories.map((stay, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#F8FAF8] border border-[#DDE7E5] text-center">
                    <span className="material-symbols-outlined text-2xl text-[#005B5C] mb-2">hotel</span>
                    <span className="block text-xs font-bold text-[#263238]">{stay}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Operational Notes & Wildlife Reminder */}
            <section className="p-6 rounded-2xl bg-[#EEF8F6] border border-[#DDE7E5] shadow-sm">
              <h3 className="text-base font-bold text-[#005B5C] flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#005B5C]">info</span>
                <span>Important Operational Notes</span>
              </h3>
              <ul className="space-y-2 text-xs text-[#263238] font-light">
                {pkg.operationalNotes.map((note, i) => (
                  <li key={i}>• {note}</li>
                ))}
                <li>
                  • Cancellations are governed by our partner lodge schedules. View our full{' '}
                  <Link href="/cancellation-refund-policy" className="text-[#005B5C] font-semibold underline">
                    Cancellation & Refund Policy
                  </Link>
                  .
                </li>
                <li>
                  • Please review our 12 golden principles on{' '}
                  <Link href="/responsible-travel" className="text-[#005B5C] font-semibold underline">
                    Responsible Wildlife Travel
                  </Link>
                  .
                </li>
              </ul>
            </section>

            {/* FAQs */}
            {pkg.faq && pkg.faq.length > 0 && (
              <section>
                <h3 className="text-xl font-display-brand font-bold text-[#005B5C] mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {pkg.faq.map((item, i) => (
                    <div key={i} className="p-5 rounded-xl bg-white border border-[#DDE7E5] shadow-sm">
                      <h4 className="text-sm font-bold text-[#005B5C] mb-1.5">{item.q}</h4>
                      <p className="text-xs text-[#263238] font-light leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sticky Sidebar Booking RFP */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono text-[#005B5C] font-bold uppercase tracking-wider block mb-1">
                  Enquiry & Quote
                </span>
                <h3 className="text-xl font-display-brand font-bold text-[#005B5C]">{pkg.name}</h3>
                <span className="text-xs text-[#667085] block mt-1 font-mono">Package ID: {pkg.id}</span>
              </div>

              <div className="pt-4 border-t border-[#DDE7E5] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#667085]">Duration</span>
                  <span className="font-mono text-[#263238] font-semibold">{pkg.duration}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#667085]">Best For</span>
                  <span className="font-mono text-[#263238] font-semibold">{pkg.bestFor}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#667085]">Pricing</span>
                  <span className="font-mono text-[#005B5C] font-bold">Price on Request</span>
                </div>
              </div>

              <a
                href={pkgWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-[#263238] font-bold text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Get Instant Quote</span>
              </a>

              <Link
                href="/jawai-safari-booking"
                className="w-full py-3.5 rounded-xl bg-[#005B5C] hover:bg-[#0A7B75] text-white font-semibold text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span>Submit Detailed Form</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>

              <p className="text-[11px] text-[#667085] text-center leading-relaxed font-light">
                By submitting an enquiry, you agree to our{' '}
                <Link href="/privacy-policy" className="underline text-[#005B5C]">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 p-4 bg-white/95 border-t border-[#DDE7E5] backdrop-blur-xl flex items-center justify-between gap-4 shadow-lg">
        <div>
          <span className="text-[10px] font-mono text-[#005B5C] font-bold uppercase block">Price on Request</span>
          <span className="text-xs font-bold text-[#263238] truncate max-w-[160px] block">{pkg.name}</span>
        </div>
        <a
          href={pkgWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full bg-[#25D366] text-[#263238] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
        >
          <span className="material-symbols-outlined text-sm">chat</span>
          <span>Get Quote</span>
        </a>
      </div>
    </div>
  );
}
