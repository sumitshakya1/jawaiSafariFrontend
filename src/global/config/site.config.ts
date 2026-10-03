export const SITE_CONFIG = {
  name: 'GHOOMOSA',
  tagline: 'Trips That Become Stories',
  subBrand: 'ADVENTURA — Nocturnal Safari Editorial',
  domain: 'https://ghoomosa.in',
  phone: '+91 73000 03101',
  phoneRaw: '+917300003101',
  whatsappNumber: '917300003101',
  primaryDestination: 'Jawai, Rajasthan',
  coordinates: '25.10° N, 73.15° E',
  meta: {
    title: 'Jawai Tour Packages & Safari Experiences | Ghoomosa',
    description:
      'Plan a complete Jawai trip with wildlife safaris, bird watching, stays, transfers and customized packages. Get your Jawai quotation on WhatsApp.',
    themeColor: '#10131a',
  },
  social: {
    instagram: 'https://instagram.com/ghoomosa.in',
    whatsapp: 'https://wa.me/917300003101',
  },
  disclaimers: {
    wildlife: 'Wildlife is wild — sightings depend on natural animal movement and can never be guaranteed.',
    pricing: 'Price on Request — Final quotation depends on travel dates, group size, stay category, and seasonal availability.',
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
