'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PropertyItem } from '@/data/resorts/types';
import { AvailabilityForm } from '@/components/resort/AvailabilityForm';
import { GallerySection } from '@/components/resort/GallerySection';
import { VideoSection } from '@/components/resort/VideoSection';
import {
  trackWhatsAppClick,
  trackRelatedPackageClick,
  trackSuiteView,
} from '@/lib/analytics';

interface PropertyPageTemplateProps {
  property: PropertyItem;
}

export function PropertyPageTemplate({ property }: PropertyPageTemplateProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const cleanNumber = (property.whatsapp_number || '+91 73000 03101').replace(/[^0-9]/g, '');
  const directWhatsAppHref = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    `Hi Ghoomosa, I would like to check availability and rates for ${property.property_name}. Please share available options.`
  )}`;

  return (
    <article className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen pb-16 sm:pb-0">
      {/* ── Sticky Mobile Lead Capture CTA Bar ───────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#DDE7E5] p-3 flex sm:hidden items-center gap-2 shadow-2xl">
        <a
          href="#availability"
          className="flex-1 py-3 px-3 rounded-full bg-[#005B5C] text-white font-bold text-xs uppercase tracking-wider text-center shadow-sm"
        >
          Check Availability
        </a>
        <a
          href={directWhatsAppHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackWhatsAppClick({
              property_id: property.slug,
              cta_location: 'sticky_mobile_bar',
              page_url: `https://ghoomosa.in/${property.slug}`,
            })
          }
          className="py-3 px-4 rounded-full bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>

      {/* ── Breadcrumb UI ──────────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="pt-24 sm:pt-28 pb-4 max-w-7xl mx-auto px-6 md:px-12">
        <ol className="flex items-center gap-2 text-xs font-mono text-[#667085]">
          <li>
            <Link href="/" className="hover:text-[#005B5C] transition-colors font-semibold">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href="/jawai-hotels-resorts"
              className="hover:text-[#005B5C] transition-colors font-semibold"
            >
              Jawai Hotels & Resorts
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-[#005B5C] font-bold">
            {property.property_name}
          </li>
        </ol>
      </nav>

      {/* ── 1. Hero Section ─────────────────────────────────────────────────────── */}
      <header className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={property.hero_image}
            alt={`${property.property_name} wilderness landscape`}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={90}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center">
          {/* Brand Clarity Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[11px] font-mono uppercase tracking-wider text-white/90 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FDBA21]" />
            <span>{property.brand_notice || 'Stay enquiry & trip planning by Ghoomosa.'}</span>
          </div>

          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-[#FDBA21] font-bold mb-3 drop-shadow-md">
            {property.eyebrow}
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display-brand font-black tracking-tight text-white uppercase drop-shadow-xl mb-3">
            {property.property_name}
          </h1>

          {property.hero_title_line && (
            <span className="text-base sm:text-xl font-display-hero text-white/90 italic font-normal mb-3 drop-shadow">
              &ldquo;{property.hero_title_line}&rdquo;
            </span>
          )}

          <p className="text-sm sm:text-base md:text-lg text-white/90 font-light max-w-2xl leading-relaxed mb-8 drop-shadow">
            {property.short_description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#availability"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg text-center"
            >
              Check Availability
            </a>
            <a
              href={directWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick({
                  property_id: property.slug,
                  cta_location: 'hero_secondary_button',
                  page_url: `https://ghoomosa.in/${property.slug}`,
                })
              }
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA59] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 text-center"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              <span>Get Best Quote on WhatsApp</span>
            </a>
          </div>

          <p className="text-[11px] font-mono text-white/75 mt-4 tracking-wide">
            Rates are provided on request based on travel dates, room category and occupancy.
          </p>
        </div>
      </header>

      {/* ── 2. Quick Property Facts ──────────────────────────────────────────────── */}
      <section className="py-12 bg-[#EEF8F6] border-y border-[#DDE7E5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {property.quick_facts.map((fact, idx) => (
              <div
                key={idx}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-[#DDE7E5] shadow-xs flex flex-col justify-between"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#667085] font-semibold block mb-1">
                  {fact.label}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#005B5C] leading-snug">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. About Section ────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#005B5C]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold">
                {property.property_type}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-brand font-bold text-[#005B5C] tracking-tight">
              About {property.property_name}
            </h2>

            {property.about_paragraphs.map((p, idx) => (
              <p key={idx} className="text-sm sm:text-base text-[#263238] font-light leading-relaxed">
                {p}
              </p>
            ))}

            <div className="pt-4 border-t border-[#DDE7E5]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#005B5C] font-bold block mb-4">
                Verified Facts & Hospitality Highlights:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#263238]">
                {property.verified_facts.map((fact, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <span className="text-[#0A7B75] font-bold shrink-0 mt-0.5">✓</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative h-96 sm:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-[#DDE7E5]">
              <Image
                src={property.featured_image}
                alt={`${property.property_name} featured setting`}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FDBA21] font-bold block">
                    Ghoomosa Verified Stay
                  </span>
                  <p className="text-xs text-white/90 mt-1">
                    Authentic local wilderness comfort with curated safari access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Stay Options / Room Categories ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#EEF8F6] border-t border-[#DDE7E5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
              Accommodations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-brand font-bold text-[#005B5C] mb-3">
              Suites & Stay Options at {property.property_name}
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
              Explore available categories below. Every stay is coordinated with verified Ghoomosa on-ground safari logistics.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 ${
              property.room_categories.length === 1
                ? 'max-w-2xl mx-auto'
                : property.room_categories.length === 2
                ? 'md:grid-cols-2 max-w-4xl mx-auto'
                : property.room_categories.length === 4
                ? 'sm:grid-cols-2 lg:grid-cols-4'
                : 'md:grid-cols-3'
            } gap-8`}
          >
            {property.room_categories.map((room) => (
              <div
                key={room.room_slug}
                className="bg-white rounded-3xl border border-[#DDE7E5] shadow-sm hover:border-[#0A7B75] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 w-full bg-[#DDE7E5]">
                    <Image
                      src={room.gallery_images[0] || property.featured_image}
                      alt={`${room.room_name} at ${property.property_name}`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                      {room.private_pool && (
                        <span className="px-3 py-1 rounded-full bg-[#005B5C] text-[10px] font-mono text-[#FDBA21] uppercase tracking-wider font-bold shadow-sm">
                          Private Pool
                        </span>
                      )}
                      {(room.approx_size || room.size_sqft) && (
                        <span className="px-2.5 py-1 rounded-md bg-black/60 text-white text-[10px] font-mono">
                          {room.approx_size || `Approx. ${room.size_sqft}`}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Render occupancy & details only if non-null */}
                    {(room.occupancy_text || room.capacity || room.bed_type) && (
                      <span className="text-[11px] font-mono text-[#667085] block mb-1">
                        {room.occupancy_text || room.capacity}
                        {room.bed_type ? ` • ${room.bed_type}` : ''}
                      </span>
                    )}

                    <h3 className="text-xl font-bold text-[#005B5C] mb-2 leading-snug">
                      {room.room_name}
                    </h3>

                    {/* Room size rendered strictly only if non-null */}
                    {(room.room_size || room.size_sqft) && (
                      <span className="text-xs font-mono text-[#0A7B75] font-semibold block mb-2">
                        Size: {room.room_size || `Approx. ${room.size_sqft}${room.size_sqm ? ` (${room.size_sqm})` : ''}`}
                      </span>
                    )}

                    <p className="text-xs text-[#263238] font-light leading-relaxed mb-5">
                      {room.short_description}
                    </p>

                    <div className="space-y-2 border-t border-[#DDE7E5] pt-4 mb-4">
                      {room.feature_list.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#263238]">
                          <span className="text-[#0A7B75] font-bold">✓</span>
                          <span className="text-[11px]">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#DDE7E5]">
                  <div className="flex items-center justify-between py-2 text-[11px] font-mono text-[#667085] mb-3">
                    <span>Pricing Mode</span>
                    <span className="text-[#005B5C] font-bold uppercase">Price on Request</span>
                  </div>

                  <a
                    href="#availability"
                    onClick={() => {
                      setSelectedCategory(room.room_name);
                      trackSuiteView({
                        property_id: property.slug,
                        suite_name: room.room_name,
                      });
                    }}
                    className="w-full py-3 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <span>Check Availability</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Photo Gallery ────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
            Visual Exploration
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-brand font-bold text-[#005B5C] mb-3">
            {property.property_name} Photos & Gallery
          </h2>
          <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
            Take a visual tour of the property grounds, accommodations, pool, dining setups, and the surrounding Jawai wilderness.
          </p>
        </div>

        <GallerySection propertySlug={property.slug} items={property.gallery} />
      </section>

      {/* ── 6. Video Walkthrough (if available) ─────────────────────────────────── */}
      {property.videos && property.videos.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#EEF8F6] border-y border-[#DDE7E5]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <VideoSection
              propertySlug={property.slug}
              videoUrl={property.videos[0].url}
              posterUrl={property.videos[0].poster}
              title={property.videos[0].title}
              description={property.videos[0].description}
            />
          </div>
        </section>
      )}

      {/* ── 7. Amenities ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
            Hospitality & Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-brand font-bold text-[#005B5C] mb-3">
            Amenities & Services
          </h2>
          <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
            Curated comfort amenities designed to complement your wilderness safaris and restful leisure downtime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {property.amenities.map((amenity, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#DDE7E5] shadow-xs flex items-start gap-4 hover:border-[#0A7B75] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EEF8F6] text-[#005B5C] flex items-center justify-center shrink-0 font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-base font-bold text-[#005B5C] mb-1">{amenity.name}</h3>
                {amenity.description && (
                  <p className="text-xs text-[#667085] leading-relaxed">{amenity.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 8. Optional Dining Section ─────────────────────────────────────────── */}
      {property.dining_section && (
        <section className="py-16 sm:py-24 bg-[#EEF8F6] border-t border-[#DDE7E5]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block">
                  {property.dining_section.subtitle || 'Gastronomy'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-display-brand font-bold text-[#005B5C]">
                  {property.dining_section.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#263238] font-light leading-relaxed">
                  {property.dining_section.description}
                </p>
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#263238]">
                  {property.dining_section.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="text-[#0A7B75] font-bold">✦</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-[#DDE7E5]">
                <Image
                  src={property.dining_section.image || property.featured_image}
                  alt={property.dining_section.title}
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 9. Optional Food, High Tea & Relaxation Section ───────────────────── */}
      {property.food_relaxation_section && (
        <section className="py-16 sm:py-24 bg-[#EEF8F6] border-t border-[#DDE7E5]">
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
              {property.food_relaxation_section.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display-brand font-bold text-[#005B5C] mb-4">
              {property.food_relaxation_section.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed max-w-2xl mx-auto mb-10">
              {property.food_relaxation_section.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {property.food_relaxation_section.highlights.map((h, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-[#DDE7E5] shadow-xs flex items-start gap-3">
                  <span className="text-[#FDBA21] font-bold text-lg">✦</span>
                  <p className="text-xs text-[#263238] font-medium leading-relaxed">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 10. Leopard Safari & Wildlife Experiences ─────────────────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
            Jawai Wildlife Landscape
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-brand font-bold text-[#005B5C] mb-3">
            Explore Jawai’s Wildlife Landscape
          </h2>
          <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
            Combine your stay with guided leopard safaris, bird watching, crocodile spotting, and landscape drives through southern Rajasthan’s premier wildlife corridor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {property.experience_links.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-[#DDE7E5] shadow-xs hover:border-[#0A7B75] hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 w-full bg-[#DDE7E5] overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-[10px] font-mono uppercase tracking-wider text-[#005B5C] font-bold">
                    {exp.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-[#005B5C] mb-2 group-hover:text-[#0A7B75] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-[#667085] leading-relaxed">{exp.description}</p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={exp.href}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#005B5C] hover:text-[#0A7B75] uppercase tracking-wider transition-colors"
                >
                  <span>Explore Experience</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Wildlife disclaimer banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DDE7E5] flex items-center gap-3 text-xs text-[#667085]">
          <span className="text-base text-[#FDBA21]">ℹ</span>
          <p>
            <strong className="text-[#263238]">Wildlife Notice:</strong> Leopard and other wildlife sightings are never guaranteed and depend on natural movement, weather, route access, local rules and operating conditions.
          </p>
        </div>
      </section>

      {/* ── Optional Nature & Birding Section ─────────────────────────────────── */}
      {property.nature_birding_section && (
        <section className="py-16 sm:py-24 bg-[#EEF8F6] border-t border-[#DDE7E5]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block">
                  {property.nature_birding_section.subtitle || 'Avian Diversity & Wetlands'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-display-brand font-bold text-[#005B5C]">
                  {property.nature_birding_section.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#263238] font-light leading-relaxed">
                  {property.nature_birding_section.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#263238]">
                  {property.nature_birding_section.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#DDE7E5]">
                      <span className="text-[#0A7B75] font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-[#DDE7E5]">
                <Image
                  src={property.nature_birding_section.image || property.featured_image}
                  alt={property.nature_birding_section.title}
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 11. Optional Culture & Local Experiences ──────────────────────────── */}
      {property.culture_section && (
        <section className="py-16 sm:py-24 bg-[#EEF8F6] border-t border-[#DDE7E5]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
                {property.culture_section.subtitle}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display-brand font-bold text-[#005B5C] mb-3">
                {property.culture_section.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                {property.culture_section.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {property.culture_section.experiences.map((exp, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-[#DDE7E5] shadow-xs flex items-start gap-3">
                  <span className="text-[#0A7B75] font-bold">✓</span>
                  <p className="text-xs text-[#263238] leading-relaxed">{exp}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Optional Activities & Hikes Section ───────────────────────────────── */}
      {property.activities_section && (
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 md:px-12 border-t border-[#DDE7E5]">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
              {property.activities_section.subtitle || 'Active Wilderness Exploration'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display-brand font-bold text-[#005B5C] mb-3">
              {property.activities_section.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
              {property.activities_section.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {property.activities_section.activities.map((act, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#DDE7E5] shadow-xs flex flex-col justify-between hover:border-[#0A7B75] transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EEF8F6] text-[#005B5C] flex items-center justify-center font-bold mb-3">
                    ✦
                  </div>
                  <h3 className="text-base font-bold text-[#005B5C] mb-2">{act.title}</h3>
                  <p className="text-xs text-[#667085] leading-relaxed">{act.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 12. Optional Sustainability Section ───────────────────────────────── */}
      {property.sustainability_section && (
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 md:px-12 border-t border-[#DDE7E5]">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#005B5C]/20 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
                {property.sustainability_section.subtitle}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display-brand font-bold text-[#005B5C] mb-3">
                {property.sustainability_section.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed max-w-3xl">
                {property.sustainability_section.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#263238]">
              {property.sustainability_section.initiatives.map((init, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#EEF8F6]">
                  <span className="text-[#0A7B75] font-bold">🌿</span>
                  <span>{init}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#DDE7E5]">
              {property.sustainability_section.note ? (
                <p className="text-[11px] font-mono text-[#667085]">
                  {property.sustainability_section.note}
                </p>
              ) : <div />}
              <Link
                href="/responsible-travel"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#005B5C] hover:text-[#0A7B75] uppercase tracking-wider"
              >
                <span>Responsible Travel Guide →</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── 13. Why Stay Section ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#EEF8F6] border-t border-[#DDE7E5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
              The Ghoomosa Perspective
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-brand font-bold text-[#005B5C] mb-3">
              Why Stay at {property.property_name}
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
              Curated reasons travellers choose this property for their Jawai wilderness expedition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {property.why_stay.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-[#DDE7E5] shadow-xs hover:border-[#0A7B75] transition-all"
              >
                <span className="text-xs font-mono text-[#FDBA21] font-bold tracking-widest block mb-2">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-[#005B5C] mb-3">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 14. Price & Availability Section ──────────────────────────────────── */}
      <section id="availability" className="py-16 sm:py-24 max-w-4xl mx-auto px-6 md:px-12 scroll-mt-20">
        <div className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
            Transparent Travel Planning
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-brand font-bold text-[#005B5C] mb-4">
            {property.property_name} Price & Booking
          </h2>
          <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-[#EEF8F6] border border-[#DDE7E5] text-xs text-[#263238] leading-relaxed mb-6">
            Rates vary depending on travel dates, accommodation category, occupancy, meal plan and applicable seasonal conditions. Ghoomosa does not publish contracted resort rates publicly. Share your travel dates to receive the current applicable quote and availability.
          </div>
        </div>

        <AvailabilityForm
          propertySlug={property.slug}
          propertyName={property.property_name}
          whatsappNumber={property.whatsapp_number || '+91 73000 03101'}
          roomCategories={property.room_categories.map((r) => ({
            room_name: r.room_name,
            room_slug: r.room_slug,
          }))}
          initialSelectedCategory={selectedCategory}
          showSafariCheckbox={property.form_config?.show_safari_checkbox}
          showPickupCheckbox={property.form_config?.show_pickup_checkbox || property.form_config?.show_transfer_checkbox}
          pickupLabel={property.form_config?.transfer_checkbox_label || (property.form_config?.show_transfer_checkbox ? 'Airport / City Transfer Required?' : 'Airport / City Pickup Required?')}
          preferredStayLabel={property.form_config?.preferred_stay_label}
          includeFlexibleOption={property.form_config?.include_flexible_stay_option}
          customWhatsAppTemplate={property.whatsapp_template}
        />
      </section>

      {/* ── 15. Location & Getting There ──────────────────────────────────────── */}
      {property.location_getting_there && (
        <section className="py-16 sm:py-24 bg-[#EEF8F6] border-t border-[#DDE7E5]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block">
                  Trip Architecture
                </span>
                <h2 className="text-3xl sm:text-4xl font-display-brand font-bold text-[#005B5C]">
                  {property.location_getting_there.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#263238] font-light leading-relaxed">
                  {property.location_getting_there.description}
                </p>

                <div className="space-y-2 pt-2 text-xs font-mono text-[#005B5C]">
                  {property.location_getting_there.distance_info.map((dist, dIdx) => (
                    <div key={dIdx} className="p-3 rounded-xl bg-white border border-[#DDE7E5]">
                      • {dist}
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
                  <Link
                    href="/how-to-reach-jawai"
                    className="px-5 py-2.5 rounded-full bg-[#005B5C] text-white font-semibold hover:bg-[#0A7B75] transition-colors"
                  >
                    How to Reach Jawai →
                  </Link>
                  <Link
                    href="/things-to-do-in-jawai"
                    className="px-5 py-2.5 rounded-full bg-white text-[#005B5C] border border-[#DDE7E5] font-semibold hover:bg-[#EEF8F6] transition-colors"
                  >
                    Things to Do in Jawai →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="p-8 rounded-3xl bg-white border border-[#DDE7E5] shadow-xs space-y-4">
                  <h3 className="text-base font-bold text-[#005B5C] font-mono uppercase tracking-wider">
                    Recommended Itinerary Flow:
                  </h3>
                  <div className="space-y-3 text-xs text-[#263238]">
                    {property.location_getting_there.itinerary_steps.map((step, sIdx) => (
                      <div key={sIdx} className="p-3.5 rounded-xl bg-[#EEF8F6] border border-[#DDE7E5]">
                        <strong className="text-[#005B5C]">{step.day} — {step.title}:</strong>{' '}
                        <span>{step.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 16. Frequently Asked Questions ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-brand font-bold text-[#005B5C] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#667085]">
            Everything you need to know about planning your stay at {property.property_name} with Ghoomosa.
          </p>
        </div>

        <div className="space-y-4">
          {property.faq_items.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white rounded-2xl border border-[#DDE7E5] p-5 sm:p-6 transition-all open:shadow-md"
            >
              <summary className="cursor-pointer text-sm sm:text-base font-bold text-[#005B5C] list-none flex items-center justify-between">
                <span>{faq.question}</span>
                <span className="text-xl text-[#0A7B75] group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="mt-4 text-xs sm:text-sm text-[#263238] font-light leading-relaxed border-t border-[#DDE7E5] pt-4">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ── 17. Other Stays in Jawai (Cluster Cross-Link) ──────────────────────── */}
      {property.cross_link_properties && property.cross_link_properties.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#EEF8F6] border-t border-[#DDE7E5]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
                Explore Alternative Accommodations
              </span>
              <h2 className="text-2xl sm:text-3xl font-display-brand font-bold text-[#005B5C]">
                Other Featured Stays in Jawai
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {property.cross_link_properties.map((other, idx) => (
                <Link
                  key={idx}
                  href={`/${other.slug}`}
                  className="bg-white rounded-3xl border border-[#DDE7E5] p-5 shadow-xs hover:border-[#0A7B75] hover:shadow-md transition-all flex items-center gap-4 group"
                >
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-[#DDE7E5] shrink-0">
                    <Image
                      src={other.image}
                      alt={other.name}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#FDBA21] font-bold block mb-1">
                      {other.tag}
                    </span>
                    <h3 className="text-base font-bold text-[#005B5C] group-hover:text-[#0A7B75] transition-colors leading-snug">
                      {other.name}
                    </h3>
                    <p className="text-xs text-[#667085] line-clamp-2 mt-1">
                      {other.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Nearby Attractions Slot (Data-Driven) ─────────────────────────────── */}
      {property.nearby_attractions && property.nearby_attractions.length > 0 && (
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-6 md:px-12 border-t border-[#DDE7E5]">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-1">
              Regional Landmarks
            </span>
            <h2 className="text-2xl sm:text-3xl font-display-brand font-bold text-[#005B5C]">
              Nearby Attractions & Historical Points
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {property.nearby_attractions.map((attraction, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#DDE7E5] shadow-xs flex flex-col justify-between group hover:border-[#005B5C] transition-all"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#005B5C] uppercase font-bold block mb-1">
                    {attraction.distance}
                  </span>
                  <h3 className="text-base font-bold text-[#005B5C] mb-2 group-hover:text-[#0A7B75] transition-colors">
                    {attraction.name}
                  </h3>
                  <p className="text-xs text-[#667085] leading-relaxed mb-4">
                    {attraction.description}
                  </p>
                </div>
                {attraction.link && (
                  <Link
                    href={attraction.link}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#005B5C] hover:text-[#0A7B75] uppercase tracking-wider pt-2 border-t border-[#DDE7E5]"
                  >
                    <span>Explore Place</span>
                    <span>→</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 18. Related Jawai Packages & Guides ───────────────────────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
            Complete Expedition Planning
          </span>
          <h2 className="text-3xl sm:text-4xl font-display-brand font-bold text-[#005B5C] mb-3">
            Related Jawai Packages & Guides
          </h2>
          <p className="text-xs sm:text-sm text-[#667085]">
            Handcrafted itineraries combining verified stays with dedicated safari allocations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/jawai-leopard-safari"
            onClick={() =>
              trackRelatedPackageClick({
                property_id: property.slug,
                package_id: 'jawai-leopard-safari',
              })
            }
            className="p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-xs hover:border-[#0A7B75] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FDBA21] font-bold block mb-2">
                Core Wildlife
              </span>
              <h3 className="text-base font-bold text-[#005B5C] mb-2">Jawai Leopard Safari</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                4x4 open Gypsy tracking across granite boulder hills with seasoned naturalists.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-[#005B5C] mt-4 block">
              View Safari Details →
            </span>
          </Link>

          <Link
            href="/jawai-tour-packages"
            onClick={() =>
              trackRelatedPackageClick({
                property_id: property.slug,
                package_id: 'jawai-tour-packages',
              })
            }
            className="p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-xs hover:border-[#0A7B75] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FDBA21] font-bold block mb-2">
                Curated Itineraries
              </span>
              <h3 className="text-base font-bold text-[#005B5C] mb-2">Jawai Tour Packages</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Complete multi-day Jawai itineraries featuring stays, safaris, and transfers.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-[#005B5C] mt-4 block">
              Explore 10 Packages →
            </span>
          </Link>

          <Link
            href="/things-to-do-in-jawai"
            onClick={() =>
              trackRelatedPackageClick({
                property_id: property.slug,
                package_id: 'things-to-do-in-jawai',
              })
            }
            className="p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-xs hover:border-[#0A7B75] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FDBA21] font-bold block mb-2">
                Destination Guide
              </span>
              <h3 className="text-base font-bold text-[#005B5C] mb-2">Things to Do in Jawai</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Essential guide to dam visits, village trails, birdwatching, and photography.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-[#005B5C] mt-4 block">
              Read Travel Guide →
            </span>
          </Link>

          <Link
            href="/how-to-reach-jawai"
            onClick={() =>
              trackRelatedPackageClick({
                property_id: property.slug,
                package_id: 'how-to-reach-jawai',
              })
            }
            className="p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-xs hover:border-[#0A7B75] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FDBA21] font-bold block mb-2">
                Logistics & Routes
              </span>
              <h3 className="text-base font-bold text-[#005B5C] mb-2">How to Reach Jawai</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Detailed rail and road route options from Udaipur, Jodhpur, and Ahmedabad.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-[#005B5C] mt-4 block">
              View Route Advice →
            </span>
          </Link>
        </div>
      </section>

      {/* ── 19. Final WhatsApp CTA Section ────────────────────────────────────── */}
      <footer className="w-full bg-[#003F40] text-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FDBA21] font-bold block mb-3">
            Plan Your Wilderness Stay
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-brand font-bold text-white mb-4">
            Check {property.property_name} Availability on WhatsApp
          </h2>
          <p className="text-xs sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed mb-8 font-light">
            Have specific travel dates in mind? Connect directly with Ghoomosa’s Jawai travel desk on WhatsApp for instant room checks, custom safari combinations, and verified quotes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={directWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick({
                  property_id: property.slug,
                  cta_location: 'final_footer_button',
                  page_url: `https://ghoomosa.in/${property.slug}`,
                })
              }
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA59] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              <span>Check Availability on WhatsApp</span>
            </a>
            <a
              href="#availability"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs uppercase tracking-wider transition-all text-center"
            >
              Fill Enquiry Form
            </a>
          </div>

          <p className="text-[11px] font-mono text-white/60 mt-6">
            Ghoomosa Concierge: +91 73000 03101 • Private Safari & Stay Coordinators
          </p>
        </div>
      </footer>
    </article>
  );
}
