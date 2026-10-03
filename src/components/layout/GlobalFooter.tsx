'use client';

import React from 'react';
import Link from 'next/link';
import { buildWhatsAppUrl } from '@/utils/whatsapp';
import { SocialLinksBar } from '@/components/common/SocialIcons';

export function GlobalFooter() {
  const whatsappUrl = buildWhatsAppUrl({
    packageOrExperienceName: 'General Jawai Travel Enquiry',
    canonicalPath: '/',
    customMessage:
      'Hi Ghoomosa, I am looking to plan a bespoke safari expedition to Jawai, Rajasthan. Please share available packages, stays, and a customized quotation.',
  });

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#05070a] border-t border-white/10 text-white/80 pt-16 pb-12 relative z-20 overflow-hidden">
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e8a455]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#005B5C]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 1. Top Expedition Hotline & Concierge Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-white/[0.04] border border-white/10 p-6 md:p-8 mb-16 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-[11px] font-mono tracking-widest text-[#e8a455] uppercase">
                  Field Concierge Active • 25.10° N, 73.15° E
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight">
                Ready to Experience the Granite Wilderness of Jawai?
              </h3>
              <p className="text-xs md:text-sm text-white/60 mt-1 leading-relaxed">
                Connect directly with certified local naturalists. Receive personalized itineraries, custom 4x4 Gypsy slots, and transparent quotations.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 w-full lg:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase font-mono tracking-wider transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-105"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>WhatsApp: +91 73000 03101</span>
              </a>

              <Link
                href="/jawai-safari-booking"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase font-mono tracking-wider border border-white/20 transition-all hover:border-[#e8a455]/50"
              >
                <span>Reserve Safari Slot</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Structured 5-Column Navigation Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Contact Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 pr-0 lg:pr-4">
            <Link href="/" className="inline-block mb-3">
              <span className="font-serif font-black text-2xl tracking-[0.2em] text-white uppercase block">
                GHOOMOSA
              </span>
              <span className="text-[11px] font-mono tracking-widest text-[#e8a455] uppercase block mt-0.5">
                Trips That Become Stories
              </span>
            </Link>

            <p className="text-xs text-white/60 leading-relaxed mb-6 font-light">
              Pioneering ethical wildlife safaris, luxury boulder glamping, and cultural immersion across the Aravalli granite kopjes of Pali, Rajasthan.
            </p>

            <div className="space-y-2 text-xs font-mono text-white/70 mb-5">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#e8a455]">location_on</span>
                <span>Jawai Bandh, Pali, Rajasthan</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#25D366]">call</span>
                <span>+91 73000 03101</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#e8a455]">mail</span>
                <span>expeditions@ghoomosa.in</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block mb-2">Connect with Us</span>
              <SocialLinksBar iconClassName="w-4 h-4" />
            </div>
          </div>

          {/* Col 2: Experiences */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#e8a455] font-bold mb-4 pb-1 border-b border-white/10 flex items-center gap-1.5">
              <span>Signature Safaris</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              <li>
                <Link href="/jawai-leopard-safari" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Leopard Safari</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-bird-watching" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Bird Watching</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-crocodile-spotting" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Crocodile Spotting</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-jungle-safari" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Jungle Safari</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-hill-drive" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Granite Hill Drive</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-dam" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Jawai Dam Experience</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-village-experience" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Rabari Village Walk</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-wildlife-photography" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Photography Tours</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Tour Packages */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#e8a455] font-bold mb-4 pb-1 border-b border-white/10 flex items-center gap-1.5">
              <span>Expedition Packages</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              <li>
                <Link href="/jawai-tour-packages" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group font-medium text-white">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>All 10 Packages Hub</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-tour-packages/jawai-wildlife-explorer" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Wildlife Explorer (2N/3D)</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-tour-packages/jawai-wild-escape" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Jawai Wild Escape (1N/2D)</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-family-tour" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Family Safari Tours</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-couple-tour" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Couple & Romantic Getaway</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-corporate-tour" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Corporate Offsites & RFP</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-group-tour" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Group Safari Tours</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-luxury-stays" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Luxury Tented Camps</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Route Planning & Origin Cities */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#e8a455] font-bold mb-4 pb-1 border-b border-white/10 flex items-center gap-1.5">
              <span>Travel & Routes</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              <li>
                <Link href="/how-to-reach-jawai" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group font-medium text-white">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>How to Reach Jawai</span>
                </Link>
              </li>
              <li>
                <Link href="/best-time-to-visit-jawai" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Best Time to Visit</span>
                </Link>
              </li>
              <li>
                <Link href="/things-to-do-in-jawai" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Things to Do in Jawai</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-travel-guide" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Expedition Field Guide</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-from-udaipur" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>From Udaipur (140 km)</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-from-jodhpur" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>From Jodhpur (150 km)</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-from-ahmedabad" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>From Ahmedabad (290 km)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Accreditation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#e8a455] font-bold mb-4 pb-1 border-b border-white/10 flex items-center gap-1.5">
              <span>Company & Ethics</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              <li>
                <Link href="/about" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>About Ghoomosa</span>
                </Link>
              </li>
              <li>
                <Link href="/responsible-travel" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group text-[#e8a455] font-medium">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>12 Golden Principles</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Contact Concierge Desk</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Expedition Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/jawai-hotels-resorts" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Resorts & Stays Directory</span>
                </Link>
              </li>
              <li>
                <Link href="/safari-adventure-policy" className="hover:text-[#e8a455] transition-colors flex items-center gap-1.5 group">
                  <span className="text-white/30 group-hover:text-[#e8a455] transition-colors">›</span>
                  <span>Field Safety Standards</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Conservation Commitment Card */}
        <div className="my-10 p-5 rounded-2xl bg-gradient-to-r from-[#005B5C]/20 via-black/40 to-[#e8a455]/10 border border-white/10 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="w-10 h-10 rounded-full bg-[#0A7B75]/30 border border-[#0A7B75]/60 flex items-center justify-center shrink-0 text-[#25D366]">
            <span className="material-symbols-outlined text-xl">eco</span>
          </div>
          <div className="flex-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#e8a455] block font-semibold">
              Responsible Wildlife Commitment
            </span>
            <p className="text-xs text-white/70 leading-relaxed mt-0.5">
              Strict compliance with ethical safari guidelines. We enforce vehicle spacing, maintain silent approach protocols, prohibit off-track vegetation disruption, and honor the sacred Rabari leopard coexistence.
            </p>
          </div>
          <Link
            href="/responsible-travel"
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono uppercase tracking-wider text-white border border-white/15 shrink-0 transition-colors"
          >
            Read Charter →
          </Link>
        </div>

        {/* 4. Balanced Legal & Policy Row (Clean Single Line on Desktop) */}
        <div className="py-5 border-y border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 text-[11px] text-white/50">
            <Link href="/privacy-policy" className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/[0.03] hover:bg-white/10 hover:text-white transition-all border border-white/5">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/[0.03] hover:bg-white/10 hover:text-white transition-all border border-white/5">
              Terms & Conditions
            </Link>
            <Link href="/booking-policy" className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/[0.03] hover:bg-white/10 hover:text-white transition-all border border-white/5">
              Booking Policy
            </Link>
            <Link href="/cancellation-refund-policy" className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/[0.03] hover:bg-white/10 hover:text-white transition-all border border-white/5">
              Cancellation & Refund
            </Link>
            <Link href="/payment-policy" className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/[0.03] hover:bg-white/10 hover:text-white transition-all border border-white/5">
              Payment Policy
            </Link>
            <Link href="/safari-adventure-policy" className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/[0.03] hover:bg-white/10 hover:text-white transition-all border border-white/5">
              Safari Policy
            </Link>
            <Link href="/disclaimer" className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/[0.03] hover:bg-white/10 hover:text-white transition-all border border-white/5">
              Disclaimer
            </Link>
            <Link href="/cookie-policy" className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/[0.03] hover:bg-white/10 hover:text-white transition-all border border-white/5">
              Cookie Policy
            </Link>
            <Link href="/grievance-redressal" className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/[0.03] hover:bg-white/10 hover:text-white transition-all border border-white/5">
              Grievance Redressal
            </Link>
          </div>
        </div>

        {/* 5. Bottom Bar with Disclaimer, Copyright & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 gap-4 text-center md:text-left">
          <p className="max-w-2xl leading-relaxed">
            <strong className="text-white/60">Wildlife Disclaimer:</strong> Sightings are subject to natural animal movements in unfenced Aravalli wilderness. Ghoomosa guarantees certified naturalist expertise and authentic tracks, without artificial baiting.
          </p>

          <div className="flex items-center gap-6">
            <p className="font-mono text-[11px]">
              © {new Date().getFullYear()} Ghoomosa.in. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-white/60 hover:text-[#e8a455] transition-colors p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
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
