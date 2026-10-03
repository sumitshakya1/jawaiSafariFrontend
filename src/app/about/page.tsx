import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/global/config/site.config';
import { buildWhatsAppUrl } from '@/global/lib/whatsapp/buildWhatsAppUrl';

export const metadata: Metadata = {
  title: 'About Ghoomosa | Our Story, Travel Philosophy & Experiences',
  description:
    'Discover Ghoomosa, a travel brand beginning its journey in Jawai, Rajasthan and built to curate meaningful wildlife, family, cultural, adventure, luxury and corporate trips across India and beyond.',
  keywords: ['About Ghoomosa', 'Ghoomosa travel', 'Ghoomosa trips', 'Ghoomosa Jawai'],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Ghoomosa - Trips That Become Stories',
    description:
      'Our journey begins in Jawai, Rajasthan. Discover the philosophy behind Ghoomosa and the experience-led travel brand we are building for India and beyond.',
    url: 'https://jawai-safari-frontend.vercel.app/about',
    siteName: 'Ghoomosa',
    images: [
      {
        url: '/images/ghoomosa-logo.png',
        width: 1024,
        height: 342,
        alt: 'About Ghoomosa – Trips That Become Stories',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Ghoomosa - Trips That Become Stories',
    description:
      'Our journey begins in Jawai, Rajasthan. Discover the philosophy behind Ghoomosa and the experience-led travel brand we are building for India and beyond.',
    images: ['/images/ghoomosa-logo.png'],
  },
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://jawai-safari-frontend.vercel.app/about#webpage',
      url: 'https://jawai-safari-frontend.vercel.app/about',
      name: 'About Ghoomosa - Travel Experiences That Become Stories',
      description:
        'Discover Ghoomosa, a travel brand beginning its journey in Jawai, Rajasthan and built to curate meaningful wildlife, family, cultural, adventure, luxury and corporate trips across India and beyond.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://jawai-safari-frontend.vercel.app/#website',
        name: 'Ghoomosa',
        url: 'https://jawai-safari-frontend.vercel.app',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://jawai-safari-frontend.vercel.app/about#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://jawai-safari-frontend.vercel.app',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'About Ghoomosa',
          item: 'https://jawai-safari-frontend.vercel.app/about',
        },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://jawai-safari-frontend.vercel.app/#organization',
      name: 'Ghoomosa',
      url: 'https://jawai-safari-frontend.vercel.app',
      logo: 'https://jawai-safari-frontend.vercel.app/images/ghoomosa-logo.png',
      slogan: 'Trips That Become Stories',
      telephone: '+91-73000-03101',
    },
  ],
};

export default function AboutPage() {
  const whatsappUrl = buildWhatsAppUrl({
    packageOrExperienceName: 'Ghoomosa Story & Trip Planning',
    canonicalPath: '/about',
    customMessage:
      'Hi Ghoomosa, I read your story on the About page and would like to plan a journey with you.',
  });

  const travelStyles = [
    {
      title: 'Wildlife & Nature',
      icon: 'pets',
      desc: 'Safaris, birding, landscapes, nature stays and responsible outdoor experiences.',
    },
    {
      title: 'Culture & Local Experiences',
      icon: 'temple_hindu',
      desc: 'Meaningful connections with local traditions, communities, food and stories.',
    },
    {
      title: 'Family & Group Holidays',
      icon: 'groups',
      desc: 'Flexible itineraries designed around comfort, pace, age groups and shared experiences.',
    },
    {
      title: 'Couples & Romantic Escapes',
      icon: 'favorite',
      desc: 'Thoughtfully planned stays and experiences for couples, celebrations and honeymoons.',
    },
    {
      title: 'Adventure & Exploration',
      icon: 'explore',
      desc: 'Outdoor, terrain-based and activity-led journeys where safety and local operating conditions allow.',
    },
    {
      title: 'Luxury & Signature Travel',
      icon: 'diamond',
      desc: 'Private, premium and highly curated journeys with selected stays and personalized planning.',
    },
    {
      title: 'Corporate & Team Travel',
      icon: 'business_center',
      desc: 'Offsites, retreats, incentive trips and group journeys with coordinated logistics.',
    },
  ];

  const travelFeelPillars = [
    {
      label: 'Personal, not generic',
      desc: 'A trip should reflect who is travelling, why they are travelling and how they want to experience the destination.',
      icon: 'person',
    },
    {
      label: 'Local, not disconnected',
      desc: 'We aim to work with destination-level partners, operators and stays so local knowledge becomes part of the journey.',
      icon: 'storefront',
    },
    {
      label: 'Clear, not confusing',
      desc: 'From enquiry and quotation to itinerary, inclusions and trip support, information should be easy to understand.',
      icon: 'visibility',
    },
    {
      label: 'Responsible, not intrusive',
      desc: 'Wildlife, nature, communities and local environments deserve respect. Experiences should follow responsible behaviour and applicable local rules.',
      icon: 'eco',
    },
    {
      label: 'Memorable, not merely completed',
      desc: 'A successful trip is one travellers remember and want to talk about.',
      icon: 'auto_awesome',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <div className="w-full min-h-screen bg-[#F8FAF8] text-[#263238] pt-28 md:pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-12 space-y-20">

          {/* 1. Hero Section */}
          <section className="space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#005B5C]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#005B5C] font-bold">
                ABOUT GHOOMOSA
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display-brand font-bold text-[#005B5C] tracking-tight leading-[1.15]">
              About Ghoomosa - Travel Experiences That Become Stories
            </h1>

            <p className="font-display-hero text-xl sm:text-2xl text-[#0A7B75] font-semibold tracking-wide">
              Travel Beyond Destinations. Create Stories That Stay With You.
            </p>

            <div className="space-y-4 text-base sm:text-lg text-[#344054] font-light leading-relaxed pt-2">
              <p>
                Ghoomosa is a travel brand built around a simple belief: the best journeys are not
                remembered only by the places we visit, but by the stories, people, landscapes and
                experiences we carry home.
              </p>
              <p>
                Our journey begins in <strong className="font-semibold text-[#005B5C]">Jawai, Rajasthan</strong> – a landscape of
                wildlife, granite hills, open skies and living local culture. From this beginning,
                Ghoomosa is being built to curate meaningful journeys across Rajasthan, India and, over
                time, destinations around the world.
              </p>
              <p>
                Whether it is a wildlife escape, family holiday, romantic journey, cultural
                experience, adventure, luxury retreat, group trip or corporate offsite, our purpose
                remains the same: to make every trip thoughtfully planned, locally connected and
                worth remembering.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/jawai"
                className="px-7 py-3.5 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <span>Explore Jawai</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-[#EEF8F6] text-[#005B5C] border border-[#005B5C] font-mono text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <span>Plan Your Trip</span>
                <span className="material-symbols-outlined text-sm">calendar_month</span>
              </Link>
            </div>
          </section>

          {/* 2. The Meaning Behind Ghoomosa */}
          <section className="p-8 sm:p-12 rounded-3xl bg-white border border-[#DDE7E5] shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FDBA21]" />
              <span className="font-mono text-xs font-bold text-[#005B5C] uppercase tracking-widest">
                NAME & PHILOSOPHY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display-brand font-bold text-[#005B5C]">
              The Meaning Behind Ghoomosa
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#344054] font-light leading-relaxed">
              <p>
                <strong>Ghoomo</strong> represents travelling, exploring and experiencing new places.
                <strong> Sa</strong> is inspired by the respectful warmth and hospitality associated
                with Rajasthan, especially the Marwar region. Together, Ghoomosa represents travel
                with discovery, respect, warmth and a sense of belonging.
              </p>
              <p>
                It is a name rooted in Rajasthan, but a travel philosophy designed to go far beyond
                one destination.
              </p>
              <p className="font-editorial-quote italic text-lg sm:text-xl text-[#005B5C] font-normal pt-2">
                “Ghoomosa – Trips That Become Stories.”
              </p>
            </div>
          </section>

          {/* 3. Where Our Story Begins */}
          <section className="p-8 sm:p-12 rounded-3xl bg-[#EEF8F6] border border-[#DDE7E5] shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0A7B75]" />
              <span className="font-mono text-xs font-bold text-[#005B5C] uppercase tracking-widest">
                OUR LAUNCH CHAPTER
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display-brand font-bold text-[#005B5C]">
              Where Our Story Begins
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#344054] font-light leading-relaxed">
              <p>
                Ghoomosa begins in <strong>Jawai, Rajasthan</strong> – a destination where wildlife,
                rugged landscapes, local communities and slow travel come together in a rare way.
                Jawai gives us the foundation for the kind of travel we want to build:
                experience-led, locally connected, responsible and personal.
              </p>
              <p>
                As Ghoomosa grows, the destination list will grow too. The philosophy will not change.
                Every new journey should help travellers experience a place more deeply, not simply
                pass through it.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/jawai"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#005B5C] hover:text-[#0A7B75]"
              >
                <span>Discover Jawai</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </section>

          {/* 4. How We Want Travel to Feel */}
          <section className="space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-[#005B5C] uppercase tracking-widest">
                OUR STANDARD OF CARE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display-brand font-bold text-[#005B5C]">
                How We Want Travel to Feel
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {travelFeelPillars.map((p, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#DDE7E5] hover:border-[#0A7B75] transition-colors shadow-sm space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF8F6] text-[#005B5C] flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">{p.icon}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#005B5C]">
                      {p.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475467] font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. What We Curate */}
          <section className="space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-[#005B5C] uppercase tracking-widest">
                PORTFOLIO OF JOURNEYS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display-brand font-bold text-[#005B5C]">
                What We Curate
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {travelStyles.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#DDE7E5] hover:border-[#0A7B75] transition-colors shadow-sm space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EEF8F6] text-[#005B5C] flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#005B5C]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475467] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Our Promise & Built for Many Destinations */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#DDE7E5] shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#005B5C]" />
                <span className="font-mono text-xs font-bold text-[#005B5C] uppercase tracking-widest">
                  TRANSPARENCY
                </span>
              </div>
              <h2 className="text-2xl font-display-brand font-bold text-[#005B5C]">
                Our Promise
              </h2>
              <p className="text-sm sm:text-base text-[#344054] font-light leading-relaxed">
                Ghoomosa aims to combine thoughtful trip planning, destination knowledge, transparent
                communication and dependable coordination. We do not promise wildlife sightings, perfect
                weather or circumstances beyond human control. We do promise to plan responsibly,
                communicate clearly and help travellers make informed choices.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#DDE7E5] shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FDBA21]" />
                <span className="font-mono text-xs font-bold text-[#005B5C] uppercase tracking-widest">
                  THE FUTURE
                </span>
              </div>
              <h2 className="text-2xl font-display-brand font-bold text-[#005B5C]">
                Built for Many Destinations, Starting with One
              </h2>
              <p className="text-sm sm:text-base text-[#344054] font-light leading-relaxed">
                Today, our first chapter is Jawai. Tomorrow, Ghoomosa can take the same experience-led
                approach to Rajasthan, the rest of India and international destinations. The
                platform, brand and service philosophy are being built from day one for that wider
                journey.
              </p>
            </div>
          </section>

          {/* 7. Closing CTA */}
          <section className="p-8 sm:p-12 rounded-3xl bg-[#005B5C] text-white shadow-xl space-y-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="font-mono text-xs font-semibold text-[#FDBA21] uppercase tracking-[0.25em]">
                START A CONVERSATION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display-brand font-bold text-white">
                Your next trip should be more than a booking.
              </h2>
              <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed">
                Tell us where you want to go, who you are travelling with and the kind of experience
                you want. We will help turn the idea into a journey worth remembering.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link
                href="/jawai"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-[#005B5C] hover:bg-[#EEF8F6] font-mono text-xs font-semibold uppercase tracking-wider text-center transition-colors shadow-sm"
              >
                Explore Jawai
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] text-black hover:bg-[#20BA59] font-mono text-xs font-semibold uppercase tracking-wider text-center transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>WhatsApp Quote</span>
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-mono text-xs font-semibold uppercase tracking-wider text-center transition-colors shadow-sm"
              >
                Request Callback
              </Link>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
