/**
 * Central registry of all routes in ADVENTURA.
 */
export const RouteRegistry = {
  HOME: '/',
  SAFARI: '/safari',
  SANCTUARY: '/sanctuary',
  CELESTIAL: '/celestial',
  WORK: '/work',
  ABOUT: '/about',
  CONTACT: '/contact',

  SLIDES: [
    { slideNumber: '01', path: '/', title: 'JAWAI' },
    { slideNumber: '02', path: '/safari', title: 'SAFARI' },
    { slideNumber: '03', path: '/sanctuary', title: 'SANCTUARY' },
    { slideNumber: '04', path: '/celestial', title: 'CELESTIAL' },
  ],
} as const;
