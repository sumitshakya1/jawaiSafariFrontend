import type { Metadata } from 'next';
import { BIJAPUR_LODGE_JAWAI } from '@/data/resorts/bijapur-lodge';
import { PropertyPageTemplate } from '@/components/resort/PropertyPageTemplate';

export const metadata: Metadata = {
  title: BIJAPUR_LODGE_JAWAI.seo_title,
  description: BIJAPUR_LODGE_JAWAI.seo_description,
  alternates: {
    canonical: '/bijapur-lodge-jawai',
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
    title: BIJAPUR_LODGE_JAWAI.seo_title,
    description: BIJAPUR_LODGE_JAWAI.seo_description,
    url: 'https://ghoomosa.in/bijapur-lodge-jawai',
    siteName: 'Ghoomosa — Trips That Become Stories',
    images: [
      {
        url: `https://ghoomosa.in${BIJAPUR_LODGE_JAWAI.featured_image}`,
        width: 1280,
        height: 853,
        alt: 'Bijapur Lodge Jawai boutique luxury safari lodge',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: BIJAPUR_LODGE_JAWAI.seo_title,
    description: BIJAPUR_LODGE_JAWAI.seo_description,
    images: [`https://ghoomosa.in${BIJAPUR_LODGE_JAWAI.featured_image}`],
  },
};

export default function BijapurLodgeJawaiPage() {
  const lodge = BIJAPUR_LODGE_JAWAI;

  // JSON-LD Structured Data (Strict: No prices, no offers, no aggregate ratings)
  const jsonLdHotel = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: lodge.property_name,
    description: lodge.short_description,
    image: `https://ghoomosa.in${lodge.featured_image}`,
    url: 'https://ghoomosa.in/bijapur-lodge-jawai',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Near Jawai Reservoir, Pali Marwar',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.0833',
      longitude: '73.1667',
    },
    amenityFeature: lodge.amenities.map((a) => ({
      '@type': 'LocationFeatureSpecification',
      name: a.name,
      value: true,
    })),
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
        name: lodge.property_name,
        item: 'https://ghoomosa.in/bijapur-lodge-jawai',
      },
    ],
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: lodge.faq_items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
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
      <PropertyPageTemplate property={lodge} />
    </>
  );
}
