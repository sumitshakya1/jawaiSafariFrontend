import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/global/config/site.config';

export function SiteFooter() {
  const exploreLinks = [
    { label: 'Leopard Safari', href: '/safari' },
    { label: 'Bird Watching', href: '#experiences' },
    { label: 'Crocodile Spotting', href: '#experiences' },
    { label: 'Jawai Dam Experience', href: '#experiences' },
    { label: 'Village & Culture', href: '#experiences' },
    { label: 'Granite Hill Drive', href: '#experiences' },
  ];

  const packageLinks = [
    { label: 'Discover Jawai (1N/2D)', href: '#packages' },
    { label: 'Jawai Wild Escape (1N/2D)', href: '#packages' },
    { label: 'Jawai Wildlife Explorer (2N/3D)', href: '#packages' },
    { label: 'Jawai Leopard Trail (2N/3D)', href: '#packages' },
    { label: 'Jawai Adventure Trail (2N/3D)', href: '#packages' },
    { label: 'Romantic Wilderness (2N/3D)', href: '#packages' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Nocturnal Expedition (Slide 04)', href: '/celestial' },
    { label: 'Sanctuary Deep-Dive (Slide 03)', href: '/sanctuary' },
    { label: 'Expedition Manifest', href: '/work' },
  ];

  const policyLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Booking Policy', href: '#' },
    { label: 'Cancellation & Refund', href: '#' },
    { label: 'Payment Policy', href: '#' },
    { label: 'Safari & Adventure Policy', href: '#' },
    { label: 'Wildlife Disclaimer', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Grievance Redressal', href: '#' },
  ];

  return (
    <footer className="w-full bg-[#06090c] text-white border-t border-white/10 pt-16 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        {/* Top Brand Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-display-brand text-2xl md:text-3xl text-white tracking-widest uppercase italic">
                {SITE_CONFIG.name}
              </span>
              <span className="text-white/30 text-xl font-light">/</span>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-primary">
                {SITE_CONFIG.tagline}
              </span>
            </div>
            <p className="text-xs text-white/50 mt-2 max-w-md">
              A bespoke travel and experience marketplace curating intimate wildlife, landscape, and cultural narratives across Jawai, Rajasthan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-primary/10 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider hover:bg-primary hover:text-black transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              <span>WhatsApp: {SITE_CONFIG.phone}</span>
            </a>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-white/80 text-xs font-mono uppercase tracking-wider hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">call</span>
              <span>Call Concierge</span>
            </a>
          </div>
        </div>

        {/* 4 Column Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10 text-xs">
          {/* Explore Jawai */}
          <div>
            <h4 className="font-display-hero text-sm uppercase tracking-wider text-white mb-4">
              Explore Jawai
            </h4>
            <ul className="space-y-2.5">
              {exploreLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h4 className="font-display-hero text-sm uppercase tracking-wider text-white mb-4">
              Tailored Packages
            </h4>
            <ul className="space-y-2.5">
              {packageLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display-hero text-sm uppercase tracking-wider text-white mb-4">
              Ghoomosa Story
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operations & Coordinates */}
          <div>
            <h4 className="font-display-hero text-sm uppercase tracking-wider text-white mb-4">
              Field Operations
            </h4>
            <div className="space-y-3 text-white/60 leading-relaxed">
              <p>Jawai Bandh, Pali District, Rajasthan 306126</p>
              <p className="font-mono text-[11px] text-primary">
                Coordinates: 25.10° N, 73.15° E
              </p>
              <p className="text-[11px] text-white/40 pt-2">
                All expeditions operate with registered regional partners and certified trackers.
              </p>
            </div>
          </div>
        </div>

        {/* Policies Row */}
        <div className="py-6 border-b border-white/5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-white/40">
          {policyLinks.map((p, idx) => (
            <span key={idx} className="hover:text-primary transition-colors cursor-pointer">
              {p.label}
            </span>
          ))}
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/40">
          <div>
            © {new Date().getFullYear()} GHOOMOSA.IN • All rights reserved.
          </div>
          <div>
            Trips That Become Stories • Rajasthan Wildlife Editorial
          </div>
        </div>
      </div>
    </footer>
  );
}
