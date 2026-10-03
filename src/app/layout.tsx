import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { GlobalFooter } from '@/components/layout/GlobalFooter';
import { FloatingWhatsApp } from '@/global/components/cta/FloatingWhatsApp';
import { SITE_CONFIG } from '@/global/config/site.config';

export const metadata: Metadata = {
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
  ],
  authors: [{ name: 'Ghoomosa Editorial' }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: 'Plan a complete Jawai trip with wildlife safaris, bird watching, stays, transfers and customized packages.',
    url: SITE_CONFIG.domain,
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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#005B5C',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
