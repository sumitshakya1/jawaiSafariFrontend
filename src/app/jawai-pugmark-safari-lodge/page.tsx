import type { Metadata } from 'next';
import { JAWAI_PUGMARK_LODGE } from '@/data/resorts/jawai-pugmark';
import { PropertyPageTemplate } from '@/components/resort/PropertyPageTemplate';

export const metadata: Metadata = {
  title: JAWAI_PUGMARK_LODGE.seo_title,
  description: JAWAI_PUGMARK_LODGE.seo_description,
  alternates: {
    canonical: '/jawai-pugmark-safari-lodge',
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
    title: JAWAI_PUGMARK_LODGE.seo_title,
    description: JAWAI_PUGMARK_LODGE.seo_description,
    url: 'https://ghoomosa.in/jawai-pugmark-safari-lodge',
    siteName: 'Ghoomosa — Trips That Become Stories',
    images: [
      {
        url: `https://ghoomosa.in${JAWAI_PUGMARK_LODGE.featured_image}`,
        width: 1280,
        height: 853,
        alt: 'Jawai Pugmark Safari Lodge cottages and luxury tents in Sena Jawai',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: JAWAI_PUGMARK_LODGE.seo_title,
    description: JAWAI_PUGMARK_LODGE.seo_description,
    images: [`https://ghoomosa.in${JAWAI_PUGMARK_LODGE.featured_image}`],
  },
};

export default function JawaiPugmarkSafariLodgePage() {
  const lodge = JAWAI_PUGMARK_LODGE;

  // JSON-LD Structured Data (Strict: No prices, no offers, no aggregate ratings)
  const jsonLdHotel = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: lodge.property_name,
    description: lodge.short_description,
    image: `https://ghoomosa.in${lodge.featured_image}`,
    url: 'https://ghoomosa.in/jawai-pugmark-safari-lodge',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sena, Jawai Dam Region',
      addressRegion: 'Rajasthan',
      postalCode: '306126',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.0500',
      longitude: '73.1333',
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
        item: 'https://ghoomosa.in/jawai-pugmark-safari-lodge',
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
