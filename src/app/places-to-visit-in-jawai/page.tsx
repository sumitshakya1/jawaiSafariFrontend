import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getLiveAttractions } from '@/data/attractions';
import { PlacesHubClient } from './PlacesHubClient';

export const metadata: Metadata = {
  title: 'Places to Visit in Jawai | Nearby Attractions, Temples, Forts & Wildlife',
  description:
    'Discover places to visit in Jawai beyond the leopard safari. Explore Jawai Dam, Ranakpur Jain Temple, Kumbhalgarh Fort, cave shrines, Rabari culture and day excursions with Ghoomosa.',
  alternates: {
    canonical: 'https://ghoomosa.in/places-to-visit-in-jawai',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Places to Visit in Jawai | Nearby Attractions, Temples, Forts & Wildlife',
    description:
      'Explore the complete spectrum of Jawai attractions: granite leopard hills, Jawai Dam, Ranakpur marble temples, Kumbhalgarh fortress, and pastoral Rabari culture.',
    url: 'https://ghoomosa.in/places-to-visit-in-jawai',
    siteName: 'Ghoomosa — Trips That Become Stories',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Places to visit in Jawai Rajasthan',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Places to Visit in Jawai | Nearby Attractions, Temples, Forts & Wildlife',
    description:
      'Plan your trip to Jawai with Ghoomosa: explore temples, forts, wetlands, and wildlife landscapes surrounding Jawai Bandh.',
    images: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function PlacesToVisitInJawaiPage() {
  const liveAttractions = getLiveAttractions();

  const masterFaqs = [
    {
      question: 'What are the best places to visit near Jawai?',
      answer:
        'Popular choices include Jawai Dam, the Jawai leopard landscape, nearby hill temples, Ranakpur Jain Temple and Kumbhalgarh Fort. The best combination depends on the time available and where you are staying.',
    },
    {
      question: 'Can Ranakpur and Kumbhalgarh be visited from Jawai?',
      answer:
        'Yes. Both are practical road excursions from Jawai, and they can be planned as a full-day heritage circuit depending on start time and road conditions.',
    },
    {
      question: 'What can I do in Jawai besides leopard safari?',
      answer:
        'Travellers can explore Jawai Dam, birding, village culture, hill temples, landscape photography, spiritual sites and nearby heritage attractions.',
    },
    {
      question: 'How many days are ideal for Jawai?',
      answer:
        'Two to three days works well for safari plus local experiences; add another day if you want to include Ranakpur and Kumbhalgarh comfortably.',
    },
  ];

  // Schema.org Structured Data
  const jsonLdCollection = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Places to Visit in Jawai & Nearby Attractions',
    description:
      'Explore attractions, temples, forts, wetlands and wildlife landscapes surrounding Jawai Bandh, Rajasthan.',
    url: 'https://ghoomosa.in/places-to-visit-in-jawai',
  };

  const jsonLdItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Places to Visit in Jawai',
    itemListElement: liveAttractions.map((attr, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: attr.name,
      url: `https://ghoomosa.in/${attr.slug}`,
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
        name: 'Places to Visit in Jawai',
        item: 'https://ghoomosa.in/places-to-visit-in-jawai',
      },
    ],
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: masterFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCollection) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <PlacesHubClient
        attractions={liveAttractions}
        masterFaqs={masterFaqs}
      />
    </>
  );
}
