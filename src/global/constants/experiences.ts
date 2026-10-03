export interface GhoomosaExperience {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  category: 'Wildlife' | 'Adventure' | 'Culture' | 'Landscape';
  timing: string;
  duration: string;
  season: string;
  description: string;
  whatToExpect: string[];
  safetyNote: string;
  imageUrl: string;
}

export const GHOOMOSA_EXPERIENCES: GhoomosaExperience[] = [
  {
    id: 'exp-leopard',
    name: 'Jawai Leopard Safari',
    slug: 'jawai-leopard-safari',
    tagline: 'Apex predators stalking ancient granite kopjes',
    category: 'Wildlife',
    timing: 'Dawn (05:30 - 08:30) & Dusk (16:00 - 19:00)',
    duration: '3 - 3.5 Hours per drive',
    season: 'Year-round (Peak: Oct — April)',
    description:
      'Open-vehicle tracking through prehistoric volcanic granite boulders with seasoned Rabari spotters. Witness how wild leopards live in harmonic balance with temple priests and pastoral villagers.',
    whatToExpect: [
      'Custom 4x4 open safari vehicle with elevated tiered seating',
      'Accompanied by veteran local naturalist and Rabari terrain tracker',
      'Panoramic granite views from high cliff vantage points',
      'Ethical distance maintained with strict zero-disturbance code',
    ],
    safetyNote: 'Sightings depend on natural animal movement in the wild and can never be guaranteed.',
    imageUrl: '/images/jawai-hero.png',
  },
  {
    id: 'exp-birding',
    name: 'Jawai Bird Watching',
    slug: 'jawai-bird-watching',
    tagline: 'Wetland sanctuary hosting 100+ migratory species',
    category: 'Landscape',
    timing: 'Morning (06:30 - 09:30)',
    duration: '2.5 - 3 Hours',
    season: 'October to March (Migratory Season)',
    description:
      'The expansive Jawai Dam reservoir transforms into a thriving avian metropolis. Spot flamingos, bar-headed geese, sarus cranes, and pelicans against dramatic granite horizons.',
    whatToExpect: [
      'High-powered spotting scopes and binocular support',
      'Comprehensive checklist of wetland and raptor species',
      'Peaceful water-edge reconnaissance away from engine noise',
    ],
    safetyNote: 'Water levels and bird species density vary by season and monsoon inflows.',
    imageUrl: '/images/sanctuary-hero.png',
  },
  {
    id: 'exp-crocodile',
    name: 'Crocodile Spotting at Jawai Dam',
    slug: 'jawai-crocodile-spotting',
    tagline: 'Prehistoric Muggers basking on granite islands',
    category: 'Wildlife',
    timing: 'Mid-Morning (09:30 - 12:00) during sunning hours',
    duration: '2 Hours',
    season: 'Year-round (Best winter sun hours)',
    description:
      'Jawai reservoir hosts one of northern India’s largest populations of Indian Mugger crocodiles (Crocodylus palustris), often seen basking lazily across low-lying granite ledges.',
    whatToExpect: [
      'Safe elevated shoreline observation points',
      'Telephoto observation of adult muggers up to 14 feet long',
      'Naturalist explanations of wetland ecology and food chains',
    ],
    safetyNote: 'Strict perimeter maintained. Approaching the water edge directly is forbidden.',
    imageUrl: '/images/safari-hero.png',
  },
  {
    id: 'exp-dam',
    name: 'Jawai Dam Panoramic Experience',
    slug: 'jawai-dam',
    tagline: 'Rajasthan’s largest reservoir nestled between granite cliffs',
    category: 'Landscape',
    timing: 'Sunset (17:00 - 19:00)',
    duration: '2 Hours',
    season: 'Year-round',
    description:
      'Commissioned by Maharaja Umaid Singh in 1946, the Jawai Dam is a colossal engineering marvel set within a Martian landscape of granite pillars.',
    whatToExpect: [
      'Spectacular sunset viewpoints overlooking 100+ sq km of water',
      'Traditional spiced Masala Chai and refreshments at sunset',
      'Spectacular reflections of crimson evening skies over the waters',
    ],
    safetyNote: 'Certain dam gate crest areas are protected by irrigation department guidelines.',
    imageUrl: '/images/celestial-hero.png',
  },
  {
    id: 'exp-hilldrive',
    name: 'Granite Hill & Terrain Drive',
    slug: 'jawai-hill-drive',
    tagline: 'High-angle rock crawling over billion-year-old stone',
    category: 'Adventure',
    timing: 'Late Afternoon',
    duration: '2.5 Hours',
    season: 'October to June',
    description:
      'Experience the incredible traction and torque of custom 4x4 vehicles ascending seemingly impassable 45-degree granite inclines with certified expedition drivers.',
    whatToExpect: [
      'Thrill of genuine geological rock climbing on sheer stone',
      'Top-of-the-world 360-degree vistas across Marwar plains',
      'Strict safety protocols and low-speed technical navigation',
    ],
    safetyNote: 'Operated exclusively on verified, privately permitted routes by certified drivers.',
    imageUrl: '/images/jawai-hero.png',
  },
  {
    id: 'exp-village',
    name: 'Rabari Pastoralist & Village Culture',
    slug: 'jawai-village-experience',
    tagline: 'The ancient red-turban guardians of the wilderness',
    category: 'Culture',
    timing: 'Morning or Evening',
    duration: '2 Hours',
    season: 'Year-round',
    description:
      'Meet the Rabari community, pastoral nomads who have shared this terrain with predators for centuries. Discover their unique pastoral rituals, hand-woven attire, and living philosophy of coexistence.',
    whatToExpect: [
      'Respectful, authentic visit hosted with community elders',
      'Insight into organic milk harvesting and nomadic camel herding',
      'Conversations on how Rabaris peacefully coexist with leopards',
    ],
    safetyNote: 'Photography of residents and interior dwellings is strictly consent-based.',
    imageUrl: '/images/safari-hero.png',
  },
];
