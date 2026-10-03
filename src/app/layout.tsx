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
    'Nocturnal Safari',
    'Rabari Coexistence',
    'Granite Kopjes',
    'Luxury Wildlife Expedition',
  ],
  authors: [{ name: 'Ghoomosa Editorial' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#10131a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-surface font-body-md text-on-surface min-h-screen selection:bg-primary-container selection:text-on-primary">
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

