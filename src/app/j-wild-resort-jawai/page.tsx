import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { J_WILD_RESORT_JAWAI } from '@/data/resorts/j-wild-resort';
import { AvailabilityForm } from '@/components/resort/AvailabilityForm';
import { GallerySection } from '@/components/resort/GallerySection';
import { VideoSection } from '@/components/resort/VideoSection';

export const metadata: Metadata = {
  title: J_WILD_RESORT_JAWAI.seo_title,
  description: J_WILD_RESORT_JAWAI.seo_description,
  alternates: {
    canonical: '/j-wild-resort-jawai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: J_WILD_RESORT_JAWAI.seo_title,
    description: J_WILD_RESORT_JAWAI.seo_description,
    url: 'https://ghoomosa.in/j-wild-resort-jawai',
    siteName: 'Ghoomosa — Trips That Become Stories',
    images: [
      {
        url: 'https://ghoomosa.in/images/resorts/j-wild/j-wild-resort-jawai.webp',
        width: 1280,
        height: 853,
        alt: 'J Wild Resort Jawai private pool villa and mountain view',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: J_WILD_RESORT_JAWAI.seo_title,
    description: J_WILD_RESORT_JAWAI.seo_description,
    images: ['https://ghoomosa.in/images/resorts/j-wild/j-wild-resort-jawai.webp'],
  },
};

export default function JWildResortJawaiPage() {
  const resort = J_WILD_RESORT_JAWAI;

  // JSON-LD Structured Data
  const jsonLdHotel = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: resort.property_name,
    description: resort.short_description,
    image: `https://ghoomosa.in${resort.featured_image}`,
    url: 'https://ghoomosa.in/j-wild-resort-jawai',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jawai Bandh / Bera Region',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.1234',
      longitude: '73.1890',
    },
    amenityFeature: resort.amenities.map((a) => ({
      '@type': 'LocationFeatureSpecification',
      name: a.name,
      value: true,
    })),
    // STRICT COMMERCIAL INVARIANT: No priceRange, no offers, no aggregateRating
  };

  const jsonLdBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ghoomosa.in/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Jawai Hotels & Resorts',
        item: 'https://ghoomosa.in/jawai-hotels-resorts',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: resort.property_name,
        item: 'https://ghoomosa.in/j-wild-resort-jawai',
      },
    ],
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: resort.faq_items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const jsonLdVideo = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: resort.videos[0]?.title || 'J Wild Resort Jawai Walkthrough',
    description: resort.videos[0]?.description || 'Walkthrough of J Wild Resort Jawai',
    thumbnailUrl: `https://ghoomosa.in${resort.videos[0]?.poster}`,
    contentUrl: `https://ghoomosa.in${resort.videos[0]?.url}`,
    uploadDate: resort.videos[0]?.uploadDate || '2026-10-06T00:00:00Z',
    duration: resort.videos[0]?.duration || 'PT29S',
  };

  const whatsappDirectHref = `https://wa.me/917300003101?text=${encodeURIComponent(
    'Hi Ghoomosa, I would like to check availability and rates for J Wild Resort Jawai. Please share available pool villa options.'
  )}`;

  return (
    <article className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen">
      {/* Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHotel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideo) }}
      />

      {/* ── Breadcrumb UI ────────────────────────────────────────────────────────── */}
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
            {resort.property_name}
          </li>
        </ol>
      </nav>

      {/* ── 1. Hero Section ─────────────────────────────────────────────────────── */}
      <header className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
        {/* Optimized critical hero image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={resort.hero_image}
            alt="J Wild Resort Jawai private pool villa and mountain view"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={75}
            className="object-cover object-center"
          />
          {/* Controlled dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center">
          {/* Brand Clarity Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[11px] font-mono uppercase tracking-wider text-white/90 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FDBA21]" />
            <span>Stay enquiry & trip planning by Ghoomosa.</span>
          </div>

          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-[#FDBA21] font-bold mb-3 drop-shadow-md">
            Private Pool Villas — Mountain Views — Jawai Wilderness
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display-brand font-black tracking-tight text-white uppercase drop-shadow-xl mb-4">
            {resort.property_name}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/90 font-light max-w-2xl leading-relaxed mb-8 drop-shadow">
            A nature-led luxury stay in Jawai for couples, families and travellers who want to combine private villa comfort with wildlife, landscapes and local experiences.
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
              href={whatsappDirectHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA59] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 text-center"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              <span>Get Best Quote on WhatsApp</span>
            </a>
          </div>

          {/* Pricing microcopy */}
          <p className="text-[11px] font-mono text-white/75 mt-4 tracking-wide">
            Rates are provided on request based on travel dates, room category and occupancy.
          </p>
        </div>
      </header>

      {/* ── 2. Quick Property Facts ──────────────────────────────────────────────── */}
      <section className="py-12 bg-[#EEF8F6] border-y border-[#DDE7E5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {resort.quick_facts.map((fact, idx) => (
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

      {/* ── 3. About J Wild Resort Jawai ────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#005B5C]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold">
                Luxury Wilderness Retreat
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-brand font-bold text-[#005B5C] tracking-tight">
              About J Wild Resort Jawai
            </h2>

            {resort.about_paragraphs.map((p, idx) => (
              <p key={idx} className="text-sm sm:text-base text-[#263238] font-light leading-relaxed">
                {p}
              </p>
            ))}

            {/* Verified Facts Checklist */}
            <div className="pt-4 border-t border-[#DDE7E5]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#005B5C] font-bold block mb-4">
                Verified Resort Facts:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#263238]">
                {resort.verified_facts.map((fact, fIdx) => (
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
                src="/images/resorts/j-wild/j-wild-jawai-hospitality.webp"
                alt="Traditional Rabari hospitality and warm welcome at J Wild Resort Jawai"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FDBA21] font-bold block">
                    Warm Marwari Hospitality
                  </span>
                  <p className="text-xs text-white/90 mt-1">
                    Authentic local warmth combined with quiet private villa luxury.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Villa Categories ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#EEF8F6] border-t border-[#DDE7E5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
              Accommodations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-brand font-bold text-[#005B5C] mb-3">
              J Wild Jawai Rooms & Private Pool Villas
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
              Every villa features an individual plunge pool, private courtyard, and mountain-facing sit-out. Select your preferred accommodation category below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resort.room_categories.map((room) => (
              <div
                key={room.room_slug}
                className="bg-white rounded-3xl border border-[#DDE7E5] shadow-sm hover:border-[#0A7B75] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Image Carousel / Primary view */}
                  <div className="relative h-64 w-full bg-[#DDE7E5]">
                    <Image
                      src={room.gallery_images[0] || resort.featured_image}
                      alt={`${room.room_name} at J Wild Jawai Resort`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                      {room.private_pool && (
                        <span className="px-3 py-1 rounded-full bg-[#005B5C] text-[10px] font-mono text-[#FDBA21] uppercase tracking-wider font-bold shadow-sm">
                          Private Plunge Pool
                        </span>
                      )}
                    </div>
                    {room.mountain_view && (
                      <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded-md bg-black/60 text-white text-[10px] font-mono">
                        Mountain View
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <span className="text-[11px] font-mono text-[#667085] block mb-1">
                      {room.occupancy_text} • {room.bedroom_count} Bed / {room.bathroom_count} Bath
                    </span>
                    <h3 className="text-xl font-bold text-[#005B5C] mb-2 leading-snug">
                      {room.room_name}
                    </h3>

                    {/* Room size rendered strictly only if non-null */}
                    {room.room_size && (
                      <span className="text-xs font-mono text-[#0A7B75] font-semibold block mb-2">
                        Size: {room.room_size}
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

                {/* Footer CTA */}
                <div className="p-6 pt-0 border-t border-[#DDE7E5]">
                  <div className="flex items-center justify-between py-2 text-[11px] font-mono text-[#667085] mb-3">
                    <span>Pricing Mode</span>
                    <span className="text-[#005B5C] font-bold uppercase">Price on Request</span>
                  </div>

                  <a
                    href={`#availability`}
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
            J Wild Jawai Photos & Gallery
          </h2>
          <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
            Explore authentic photography of the private pool villas, courtyards, mountain vistas, dining spaces, and the surrounding Jawai wilderness.
          </p>
        </div>

        <GallerySection propertySlug={resort.slug} items={resort.gallery} />
      </section>

      {/* ── 6. Video / Resort Walkthrough ───────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#EEF8F6] border-y border-[#DDE7E5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <VideoSection
            propertySlug={resort.slug}
            videoUrl={resort.videos[0].url}
            posterUrl={resort.videos[0].poster}
            title={resort.videos[0].title}
            description={resort.videos[0].description}
          />
        </div>
      </section>

      {/* ── 7. Resort Amenities ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
            Comfort & Recreation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-brand font-bold text-[#005B5C] mb-3">
            Resort Facilities & Amenities
          </h2>
          <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
            Thoughtfully curated amenities crafted for private leisure, family recreation, and tranquil wilderness unwinding.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resort.amenities.map((amenity, idx) => (
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

      {/* ── 8. Jawai Experiences Near / With The Stay ───────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#EEF8F6] border-t border-[#DDE7E5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
              Jawai Wilderness Expeditions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-brand font-bold text-[#005B5C] mb-3">
              Jawai Experiences Near J Wild Resort
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
              Combine your private pool stay with legendary leopard tracking, crocodile spotting at Jawai Dam, and indigenous Rabari cultural walks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {resort.experience_links.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#DDE7E5] shadow-xs hover:border-[#0A7B75] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full bg-[#DDE7E5] overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-[10px] font-mono uppercase tracking-wider text-[#005B5C] font-bold">
                      {exp.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#005B5C] mb-2 group-hover:text-[#0A7B75] transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-[#667085] leading-relaxed">{exp.description}</p>
                  </div>
                </div>

                <div className="p-6 pt-0">
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
              <strong className="text-[#263238]">Wildlife Notice:</strong> Wildlife safari and spotting experiences are subject to natural conditions, local rules, route access and availability. Sighting wild animals cannot be guaranteed in natural habitats.
            </p>
          </div>
        </div>
      </section>

      {/* ── 9. Why Stay At J Wild Resort Jawai ──────────────────────────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
            The Ghoomosa Perspective
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-brand font-bold text-[#005B5C] mb-3">
            Why Stay at J Wild Resort Jawai
          </h2>
          <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
            Discover what sets this luxury wilderness retreat apart for travellers seeking seclusion, natural beauty, and authentic exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resort.why_stay.map((item, idx) => (
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
      </section>

      {/* ── 10. J Wild Jawai Price & Booking ────────────────────────────────────── */}
      <section id="availability" className="py-16 sm:py-24 bg-[#EEF8F6] border-y border-[#DDE7E5] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
              Transparent Travel Planning
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-brand font-bold text-[#005B5C] mb-4">
              J Wild Jawai Price & Booking
            </h2>
            <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-white border border-[#DDE7E5] text-xs text-[#263238] leading-relaxed mb-6">
              J Wild Resort Jawai rates vary depending on travel dates, villa category, occupancy, meal plan and applicable seasonal conditions. Ghoomosa does not publish contracted resort rates publicly. Share your travel dates to receive the current applicable quote and availability.
            </div>
          </div>

          <AvailabilityForm
            propertySlug={resort.slug}
            propertyName={resort.property_name}
            whatsappNumber={resort.whatsapp_number}
            roomCategories={resort.room_categories.map((r) => ({
              room_name: r.room_name,
              room_slug: r.room_slug,
            }))}
          />
        </div>
      </section>

      {/* ── 11. Location & How To Include It in a Jawai Trip ─────────────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block">
              Trip Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-display-brand font-bold text-[#005B5C]">
              Location & How to Include J Wild in Your Jawai Trip
            </h2>
            <p className="text-xs sm:text-sm text-[#263238] font-light leading-relaxed">
              J Wild Resort is situated in the heart of the Jawai wilderness belt in southwestern Rajasthan, approximately 14 km from Jawai Bandh railway station (JWB) and 140 km from Udaipur’s Maharana Pratap Airport (UDR).
            </p>
            <p className="text-xs sm:text-sm text-[#263238] font-light leading-relaxed">
              A 2-night or 3-night stay at J Wild provides the ideal pacing: embark on morning leopard tracking through granite boulder trails, return to the resort for poolside leisure and afternoon shade, and head out for sunset crocodile tracking near the Jawai Bandh reservoir.
            </p>
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
                Recommended 3-Day Itinerary Flow:
              </h3>
              <div className="space-y-3 text-xs text-[#263238]">
                <div className="p-3.5 rounded-xl bg-[#EEF8F6] border border-[#DDE7E5]">
                  <strong className="text-[#005B5C]">Day 1:</strong> Arrival & check-in to your private pool villa. Evening sundowner and orientation walk around granite kopjes.
                </div>
                <div className="p-3.5 rounded-xl bg-[#EEF8F6] border border-[#DDE7E5]">
                  <strong className="text-[#005B5C]">Day 2:</strong> Dawn 4x4 leopard safari with senior tracker. Midday relaxation by your private plunge pool. Late afternoon Jawai Bandh crocodile & bird watching drive.
                </div>
                <div className="p-3.5 rounded-xl bg-[#EEF8F6] border border-[#DDE7E5]">
                  <strong className="text-[#005B5C]">Day 3:</strong> Gentle morning hill trek or Rabari village heritage walk. Breakfast and transfer to Udaipur, Jodhpur, or Ahmedabad.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. Frequently Asked Questions ──────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#EEF8F6] border-t border-[#DDE7E5]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
              Common Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-brand font-bold text-[#005B5C] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#667085]">
              Everything you need to know about planning your stay at J Wild Resort Jawai with Ghoomosa.
            </p>
          </div>

          <div className="space-y-4">
            {resort.faq_items.map((faq, idx) => (
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
        </div>
      </section>

      {/* ── 13. Related Content & Jawai Packages ────────────────────────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
            Extend Your Trip
          </span>
          <h2 className="text-3xl sm:text-4xl font-display-brand font-bold text-[#005B5C] mb-3">
            Related Jawai Packages & Guides
          </h2>
          <p className="text-xs sm:text-sm text-[#667085]">
            Explore handcrafted expedition packages combining verified stays with dedicated safari allocations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/jawai-leopard-safari"
            className="p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-xs hover:border-[#0A7B75] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FDBA21] font-bold block mb-2">
                Core Wildlife
              </span>
              <h3 className="text-base font-bold text-[#005B5C] mb-2">Jawai Leopard Safari</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                4x4 open Gypsy tracking across ancient granite hills with seasoned naturalists.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-[#005B5C] mt-4 block">
              View Safari Details →
            </span>
          </Link>

          <Link
            href="/jawai-tour-packages"
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

      {/* ── 14. Final WhatsApp Availability CTA ─────────────────────────────────── */}
      <footer className="w-full bg-[#003F40] text-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FDBA21] font-bold block mb-3">
            Plan Your Wilderness Stay
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-brand font-bold text-white mb-4">
            Check J Wild Jawai Availability on WhatsApp
          </h2>
          <p className="text-xs sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed mb-8 font-light">
            Have specific travel dates in mind? Connect directly with Ghoomosa’s Jawai travel desk on WhatsApp for instant villa checks, custom safari combinations, and verified quotes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappDirectHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA59] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              <span>Check J Wild Availability on WhatsApp</span>
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
