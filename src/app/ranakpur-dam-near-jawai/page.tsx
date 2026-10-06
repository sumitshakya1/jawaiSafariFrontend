import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAttractionBySlug } from '@/data/attractions';
import { AttractionPageTemplate } from '@/components/attraction/AttractionPageTemplate';

const ATTRACTION_SLUG = 'ranakpur-dam-near-jawai';

export async function generateMetadata(): Promise<Metadata> {
  const attraction = getAttractionBySlug(ATTRACTION_SLUG);
  if (!attraction) return {};

  return {
    title: attraction.seo_title,
    description: attraction.seo_description,
    alternates: {
      canonical: attraction.canonical_url,
    },
    robots: {
      index: attraction.publish_status === 'live',
      follow: attraction.publish_status === 'live',
    },
    openGraph: {
      title: attraction.seo_title,
      description: attraction.seo_description,
      url: attraction.canonical_url,
      siteName: 'Ghoomosa — Trips That Become Stories',
      images: [
        {
          url: attraction.hero_image,
          width: 1200,
          height: 630,
          alt: attraction.name,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: attraction.seo_title,
      description: attraction.seo_description,
      images: [attraction.hero_image],
    },
  };
}

export default function RanakpurDamPage() {
  const attraction = getAttractionBySlug(ATTRACTION_SLUG);
  if (!attraction) notFound();

  const jsonLdAttraction = {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Place'],
    name: attraction.name,
    description: attraction.short_answer,
    url: attraction.canonical_url,
    image: attraction.hero_image,
    ...(attraction.lat && attraction.lng
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: attraction.lat,
            longitude: attraction.lng,
          },
        }
      : {}),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ranakpur / Desuri, Pali district',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
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
        name: 'Places to Visit in Jawai',
        item: 'https://ghoomosa.in/places-to-visit-in-jawai',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: attraction.name,
        item: attraction.canonical_url,
      },
    ],
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: attraction.faq.map((item) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAttraction) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <AttractionPageTemplate attraction={attraction} />
    </>
  );
}
