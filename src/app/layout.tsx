import type { Metadata, Viewport } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { GlobalFooter } from '@/components/layout/GlobalFooter';
import { FloatingWhatsApp } from '@/global/components/cta/FloatingWhatsApp';
import { SITE_CONFIG } from '@/global/config/site.config';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jawai-safari-frontend.vercel.app'),
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline} | Jawai Safari & Expeditions`,
  description:
    'Plan a complete Jawai trip with wildlife safaris, bird watching, stays, transfers and customized packages. Get your customized Jawai quotation on WhatsApp.',
  keywords: [
    'Ghoomosa',
    'Jawai Leopard Safari',
    'Jawai Tour Packages',
    'Rajasthan Wildlife',
    'Rabari Coexistence',
    'Granite Hills Jawai',
    'Luxury Wildlife Expedition',
    'Jawai Bandh',
    'Bera Safari',
  ],
  authors: [{ name: 'Ghoomosa Editorial' }],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: 'Plan a complete Jawai trip with wildlife safaris, bird watching, stays, transfers and customized packages.',
    url: 'https://jawai-safari-frontend.vercel.app',
    siteName: 'Ghoomosa',
    images: [
      {
        url: '/images/ghoomosa-logo.png',
        width: 1024,
        height: 342,
        alt: 'Ghoomosa – Trips That Become Stories',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: 'Plan a complete Jawai trip with wildlife safaris, bird watching, stays, transfers and customized packages.',
    images: ['/images/ghoomosa-logo.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#005B5C',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://jawai-safari-frontend.vercel.app/#website',
      url: 'https://jawai-safari-frontend.vercel.app',
      name: 'Ghoomosa',
      description: 'Trips That Become Stories — Curated Jawai Expeditions & Wildlife Safaris',
      inLanguage: 'en-IN',
    },
    {
      '@type': 'TravelAgency',
      '@id': 'https://jawai-safari-frontend.vercel.app/#organization',
      name: 'Ghoomosa',
      url: 'https://jawai-safari-frontend.vercel.app',
      logo: 'https://jawai-safari-frontend.vercel.app/images/ghoomosa-logo.png',
      telephone: '+91-73000-03101',
      priceRange: '₹₹₹₹',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jawai Bandh, Pali',
        addressRegion: 'Rajasthan',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://instagram.com/ghoomosa',
      ],
    },
    {
      '@type': 'TouristDestination',
      '@id': 'https://jawai-safari-frontend.vercel.app/#destination',
      name: 'Jawai, Rajasthan',
      description: 'Ancient granite kopje landscape home to wild leopards, migratory wetlands, and indigenous Rabari pastoralists.',
      touristType: ['Wildlife Tourism', 'Eco Tourism', 'Cultural Tourism'],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
        {/* Preconnect to Google Fonts CDN for Material Symbols (not self-hosted) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload LCP hero image — jawai-hero.png served via Next.js image optimization */}
        <link
          rel="preload"
          as="image"
          href="/_next/image?url=%2Fimages%2Fjawai-hero.png&w=828&q=65"
          fetchPriority="high"
        />
        {/* Material Symbols: loaded after page is interactive to avoid render-blocking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function loadMaterialIcons() {
                  var link = document.createElement('link');
                  link.rel = 'stylesheet';
                  link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block&text=arrow_forward+arrow_downward+close+chat+graphic_eq';
                  document.head.appendChild(link);
                }
                if (document.readyState === 'complete') {
                  loadMaterialIcons();
                } else {
                  window.addEventListener('load', loadMaterialIcons);
                }
              })();
            `,
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#F8FAF8] font-body-md text-[#263238] min-h-screen selection:bg-[#FDBA21] selection:text-[#263238] antialiased">
        <Header />
        <main className="w-full relative">
          {children}
        </main>
        <GlobalFooter />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
