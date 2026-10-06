import type { Metadata } from 'next';
import { SUJAN_JAWAI } from '@/data/resorts/sujan-jawai';
import { PropertyPageTemplate } from '@/components/resort/PropertyPageTemplate';

export const metadata: Metadata = {
  title: SUJAN_JAWAI.seo_title,
  description: SUJAN_JAWAI.seo_description,
  alternates: {
    canonical: '/sujan-jawai',
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
    title: SUJAN_JAWAI.seo_title,
    description: SUJAN_JAWAI.seo_description,
    url: 'https://ghoomosa.in/sujan-jawai',
    siteName: 'Ghoomosa — Trips That Become Stories',
    images: [
      {
        url: `https://ghoomosa.in${SUJAN_JAWAI.featured_image}`,
        width: 1280,
        height: 853,
        alt: 'SUJAN JAWAI ultra-luxury tented safari camp and boulder landscape',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SUJAN_JAWAI.seo_title,
    description: SUJAN_JAWAI.seo_description,
    images: [`https://ghoomosa.in${SUJAN_JAWAI.featured_image}`],
  },
};

export default function SujanJawaiPage() {
  const camp = SUJAN_JAWAI;

  // JSON-LD Structured Data (Strict: No prices, no offers, no aggregate ratings)
  const jsonLdHotel = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: camp.property_name,
    description: camp.short_description,
    image: `https://ghoomosa.in${camp.featured_image}`,
    url: 'https://ghoomosa.in/sujan-jawai',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bisalpur, Jawai Region',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.1000',
      longitude: '73.2000',
    },
    amenityFeature: camp.amenities.map((a) => ({
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
        name: camp.property_name,
        item: 'https://ghoomosa.in/sujan-jawai',
      },
    ],
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: camp.faq_items.map((item) => ({
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
      <PropertyPageTemplate property={camp} />
    </>
  );
}
