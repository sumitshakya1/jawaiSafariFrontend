'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/global/config/site.config';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export function GlobalFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappConciergeUrl = buildWhatsAppUrl({
    packageOrExperienceName: 'Ghoomosa Concierge Desk',
    canonicalPath: '/',
    customMessage:
      'Hi Ghoomosa, I am looking for information regarding Jawai safaris and custom tour planning.',
  });

  return (
    <footer className="w-full bg-[#003F40] text-white pt-16 pb-12 border-t border-[#0A7B75]/30 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* 1. Top Section: Logo in white container, Tagline, Concierge WhatsApp CTA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-12 border-b border-white/10 gap-8">
          <div className="space-y-3">
            <Link href="/" className="inline-block" title="Ghoomosa – Trips That Become Stories">
              {/* TODO: Replace with transparent/white SVG logo when supplied by client */}
              <div className="bg-white p-3 sm:p-3.5 rounded-2xl inline-block shadow-sm">
                <Image
                  src="/images/ghoomosa-logo.png"
                  alt="Ghoomosa – Trips That Become Stories"
                  width={180}
                  height={60}
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-xs text-white/70 max-w-md font-light leading-relaxed">
              Curated wildlife safaris, luxury camps, and cultural journeys in Jawai, Rajasthan. Trips thoughtfully planned by local naturalists and certified operators.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={whatsappConciergeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#25D366] text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-[#20BA59] transition-colors shadow-md"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>WhatsApp Concierge: {SITE_CONFIG.phone}</span>
            </a>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider border border-white/15 transition-colors"
            >
              <span className="material-symbols-outlined text-sm text-[#FDBA21]">call</span>
              <span>Call Us Direct</span>
            </a>
          </div>
        </div>

        {/* 2. Main 5-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 py-12">
          {/* Col 1: Explore Jawai Experiences */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#FDBA21] font-bold mb-4 pb-1 border-b border-white/10 flex items-center gap-1.5">
              <span>Signature Experiences</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-light">
              <li>
                <Link href="/jawai-leopard-safari" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Jawai Leopard Safari</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-bird-watching" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Bird Watching at Dam</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-crocodile-spotting" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Crocodile Spotting</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-dam" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Jawai Dam Experience</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-jungle-safari" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Wilderness Safari</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-hill-drive" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Hill & Rock Drive</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-village-experience" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Rabari Village Walk</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-wildlife-photography" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Photography Tours</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Flagship Tour Packages */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#FDBA21] font-bold mb-4 pb-1 border-b border-white/10 flex items-center gap-1.5">
              <span>Flagship Packages</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-light">
              <li>
                <Link href="/jawai-tour-packages/discover-jawai" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Discover Jawai (1N/2D)</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-tour-packages/jawai-wild-escape" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Jawai Wild Escape (1N/2D)</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-tour-packages/jawai-wildlife-explorer" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Wildlife Explorer (2N/3D)</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-tour-packages/jawai-leopard-trail" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Jawai Leopard Trail (2N/3D)</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-tour-packages/jawai-family-adventure" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Family Adventure (2N/3D)</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-tour-packages/jawai-romantic-wilderness" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Romantic Wilderness (2N/3D)</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-tour-packages/soul-of-jawai" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Soul of Jawai (3N/4D)</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-tour-packages" className="text-[#FDBA21] font-semibold hover:underline block pt-1">
                  View All 10 Packages →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Audiences & Segments */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#FDBA21] font-bold mb-4 pb-1 border-b border-white/10 flex items-center gap-1.5">
              <span>Travel Styles</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-light">
              <li>
                <Link href="/jawai-family-tour" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Family Safari Holidays</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-couple-tour" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Couples & Honeymoon</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-corporate-tour" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Corporate Team Offsites</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-group-tour" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Group Expeditions</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-luxury-stays" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Luxury Tents & Lodges</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-safari-booking" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group text-[#FDBA21] font-medium">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Direct Safari Quotation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Destination Guides & Origin Cities */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#FDBA21] font-bold mb-4 pb-1 border-b border-white/10 flex items-center gap-1.5">
              <span>Trip Planning</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-light">
              <li>
                <Link href="/jawai-travel-guide" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Complete Jawai Guide</span>
                </Link>
              </li>
              <li>
                <Link href="/best-time-to-visit-jawai" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Best Time to Visit</span>
                </Link>
              </li>
              <li>
                <Link href="/how-to-reach-jawai" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>How to Reach (Air/Rail/Road)</span>
                </Link>
              </li>
              <li>
                <Link href="/things-to-do-in-jawai" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Top Things to Do</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-from-udaipur" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>From Udaipur (140 km)</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-from-jodhpur" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>From Jodhpur (150 km)</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-from-ahmedabad" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>From Ahmedabad (290 km)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Accreditation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#FDBA21] font-bold mb-4 pb-1 border-b border-white/10 flex items-center gap-1.5">
              <span>Company & Ethics</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-light">
              <li>
                <Link href="/about" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>About Ghoomosa</span>
                </Link>
              </li>
              <li>
                <Link href="/responsible-travel" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group text-[#FDBA21] font-medium">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>12 Golden Principles</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Contact Concierge Desk</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Travel Blog & Guides</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-hotels-resorts" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Resorts & Stays Directory</span>
                </Link>
              </li>
              <li>
                <Link href="/safari-adventure-policy" className="hover:text-[#FDBA21] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#FDBA21] transition-colors">›</span>
                  <span>Field Safety Standards</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Conservation Commitment Card */}
        <div className="my-8 p-5 rounded-2xl bg-[#005B5C]/60 border border-[#0A7B75]/40 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="w-10 h-10 rounded-full bg-[#0A7B75]/40 border border-[#0A7B75] flex items-center justify-center shrink-0 text-[#25D366]">
            <span className="material-symbols-outlined text-xl">eco</span>
          </div>
          <div className="flex-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#FDBA21] block font-semibold">
              Responsible Wildlife Commitment
            </span>
            <p className="text-xs text-white/80 leading-relaxed mt-0.5">
              Strict compliance with ethical safari guidelines. We enforce vehicle spacing, maintain silent approach protocols, prohibit off-track vegetation disruption, and honor the sacred Rabari leopard coexistence.
            </p>
          </div>
          <Link
            href="/responsible-travel"
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono uppercase tracking-wider text-white border border-white/20 shrink-0 transition-colors"
          >
            Read Charter →
          </Link>
        </div>

        {/* 4. Balanced Legal & Policy Row */}
        <div className="py-5 border-y border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 text-[11px] text-white/70">
            <Link href="/privacy-policy" className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 hover:text-white transition-all border border-white/15">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 hover:text-white transition-all border border-white/15">
              Terms & Conditions
            </Link>
            <Link href="/booking-policy" className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 hover:text-white transition-all border border-white/15">
              Booking Policy
            </Link>
            <Link href="/cancellation-refund-policy" className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 hover:text-white transition-all border border-white/15">
              Cancellation & Refund
            </Link>
            <Link href="/payment-policy" className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 hover:text-white transition-all border border-white/15">
              Payment Policy
            </Link>
            <Link href="/safari-adventure-policy" className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 hover:text-white transition-all border border-white/15">
              Safari Policy
            </Link>
            <Link href="/disclaimer" className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 hover:text-white transition-all border border-white/15">
              Disclaimer
            </Link>
            <Link href="/cookie-policy" className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 hover:text-white transition-all border border-white/15">
              Cookie Policy
            </Link>
            <Link href="/grievance-redressal" className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 hover:text-white transition-all border border-white/15">
              Grievance Redressal
            </Link>
          </div>
        </div>

        {/* 5. Bottom Bar with Disclaimer, Copyright & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/60 gap-4 text-center md:text-left">
          <p className="max-w-2xl leading-relaxed">
            <strong className="text-white/80">Wildlife Disclaimer:</strong> Sightings are subject to natural animal movements in unfenced Aravalli wilderness. Ghoomosa guarantees certified naturalist expertise and authentic tracks, without artificial baiting.
          </p>

          <div className="flex items-center gap-6">
            <p className="font-mono text-[11px] text-white/60">
              © {new Date().getFullYear()} Ghoomosa.in. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-white/80 hover:text-[#FDBA21] transition-colors p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15"
              aria-label="Back to Top"
            >
              <span>Top</span>
              <span className="material-symbols-outlined text-sm">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
