import { MetadataRoute } from 'next';
import { GHOOMOSA_PACKAGES } from '@/global/constants/packages';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jawai-safari-frontend.vercel.app';

  const staticRoutes = [
    '',
    '/about',
    '/jawai',
    '/jawai-leopard-safari',
    '/jawai-bird-watching',
    '/jawai-crocodile-spotting',
    '/jawai-dam',
    '/jawai-jungle-safari',
    '/jawai-hill-drive',
    '/jawai-village-experience',
    '/jawai-wildlife-photography',
    '/jawai-tour-packages',
    '/jawai-hotels-resorts',
    '/j-wild-resort-jawai',
    '/jawai-luxury-stays',
    '/jawai-corporate-tour',
    '/jawai-family-tour',
    '/jawai-couple-tour',
    '/jawai-group-tour',
    '/jawai-travel-guide',
    '/best-time-to-visit-jawai',
    '/how-to-reach-jawai',
    '/things-to-do-in-jawai',
    '/jawai-safari-booking',
    '/responsible-travel',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/booking-policy',
    '/cancellation-refund-policy',
    '/payment-policy',
    '/safari-adventure-policy',
    '/disclaimer',
    '/cookie-policy',
    '/grievance-redressal',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/jawai') ? 0.9 : 0.7,
  }));

  const packageRoutes = GHOOMOSA_PACKAGES.map((pkg) => ({
    url: `${baseUrl}/jawai-tour-packages/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...packageRoutes];
}
