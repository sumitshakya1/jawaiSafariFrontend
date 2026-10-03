export interface GhoomosaPackage {
  id: string;
  name: string;
  slug: string;
  duration: string;
  bestFor: string;
  coreExperience: string;
  highlights: string[];
  overview: string;
  itinerary: { day: number; title: string; desc: string }[];
  tag: string;
  imageUrl: string;
}

export const GHOOMOSA_PACKAGES: GhoomosaPackage[] = [
  {
    id: 'GHM-JAW-001',
    name: 'Discover Jawai',
    slug: 'discover-jawai',
    duration: '1N/2D',
    bestFor: 'First-time visitors',
    coreExperience: 'Stay + one signature safari/experience + landscape orientation',
    highlights: ['1 Signature Leopard Drive', 'Granite Kopjes Sunset', 'Curated Nature Stay', 'Local Field Naturalist'],
    overview:
      'An ideal introduction to Jawai. Experience the majestic granite kopjes, an evening leopard tracking drive with local trackers, and an intimate wilderness stay.',
    itinerary: [
      { day: 1, title: 'Arrival & Golden Dusk Safari', desc: 'Check in, orientation with your naturalist, and evening leopard drive across the ancient granite boulders.' },
      { day: 2, title: 'Sunrise Horizon & Departure', desc: 'Early morning landscape coffee, Rabari village walk, and departure transfers.' },
    ],
    tag: 'Quick Escape',
    imageUrl: '/images/jawai-hero.png',
  },
  {
    id: 'GHM-JAW-002',
    name: 'Jawai Wild Escape',
    slug: 'jawai-wild-escape',
    duration: '1N/2D',
    bestFor: 'Weekend travellers',
    coreExperience: 'Short wildlife escape + sunrise/sunset experience',
    highlights: ['2 Tracking Sessions', 'Sunrise Kopjes Recon', 'Jawai Dam Viewpoint', 'Private 4x4 Vehicle'],
    overview:
      'Engineered for travellers seeking maximum immersion in a compact weekend window. Captures both dawn starlight and twilight prowls.',
    itinerary: [
      { day: 1, title: 'Dusk Prowl & Stargazing', desc: 'Afternoon arrival, immediate dusk tracking drive, and nocturnal star reconnaissance.' },
      { day: 2, title: 'Dawn Leopard Tracking', desc: '5:30 AM tracking drive into the granite valleys, breakfast over the dam, checkout.' },
    ],
    tag: 'Weekend Special',
    imageUrl: '/images/safari-hero.png',
  },
  {
    id: 'GHM-JAW-003',
    name: 'Jawai Wildlife Explorer',
    slug: 'jawai-wildlife-explorer',
    duration: '2N/3D',
    bestFor: 'Families & Wildlife Enthusiasts',
    coreExperience: 'Leopard-focused safari + birding/crocodile landscape + Jawai Dam',
    highlights: ['3 Custom 4x4 Safaris', 'Jawai Dam Birding', 'Mugger Crocodile Recon', 'Rabari Pastoralist Heritage'],
    overview:
      'Our most comprehensive and balanced signature expedition. Combines apex leopard tracking with migratory birding, crocodile spotting at the reservoir, and deep Rabari pastoralist immersion.',
    itinerary: [
      { day: 1, title: 'Granite Citadel Arrival & Dusk Drive', desc: 'Arrival at luxury camp, orientation briefing, and initial evening tracking run across the Kopjes.' },
      { day: 2, title: 'Dam Wetland & Twilight Cave Recon', desc: 'Morning wetland drive for migratory flamingos and crocodiles; evening deep-valley leopard stalk.' },
      { day: 3, title: 'Dawn Horizon & Scenic Transfer', desc: 'Final sunrise panoramic drive with field breakfast; departure transfer to Udaipur or Jodhpur.' },
    ],
    tag: 'Most Popular',
    imageUrl: '/images/sanctuary-hero.png',
  },
  {
    id: 'GHM-JAW-004',
    name: 'Jawai Leopard Trail',
    slug: 'jawai-leopard-trail',
    duration: '2N/3D',
    bestFor: 'Wildlife Enthusiasts & Photographers',
    coreExperience: 'Multiple wildlife drive opportunities + specialized local landscape tracking',
    highlights: ['4 Open-Vehicle Tracking Drives', 'Dedicated Apex Spotter', 'Low-Angle Gimbal Setup', 'Extended Valley Permits'],
    overview:
      'Dedicated entirely to the apex monarch of the granite hills. Timed precisely for optimal morning and evening lighting windows.',
    itinerary: [
      { day: 1, title: 'Phase 01: Kopjes Territory Scan', desc: 'In-depth briefing, vehicle preparation, and first 3-hour dusk reconnaissance.' },
      { day: 2, title: 'Phase 02 & 03: Dual Valley Expeditions', desc: 'Dawn tracking through ancient caves, midday rest, and golden-hour cliff surveillance.' },
      { day: 3, title: 'Phase 04: Apex Stalk & Farewell', desc: 'Final morning tracking session; checkout and transfer.' },
    ],
    tag: 'Photographer Pick',
    imageUrl: '/images/celestial-hero.png',
  },
  {
    id: 'GHM-JAW-005',
    name: 'Jawai Adventure Trail',
    slug: 'jawai-adventure-trail',
    duration: '2N/3D',
    bestFor: 'Adventure Travellers',
    coreExperience: 'Safari + verified hill/off-road experience + sunset landscape',
    highlights: ['Rugged Rock Crawl', 'Ridge Top Sunset Point', 'Wilderness Bush Dinner', 'Off-Grid Night Recon'],
    overview:
      'For thrill-seekers drawn to raw geology and high-angle 4x4 climbs on billion-year-old volcanic granite slopes with trained expedition drivers.',
    itinerary: [
      { day: 1, title: 'Rugged Ascent & Sunset Point', desc: 'Check in, custom off-road vehicle climb to high granite ridge for panoramic sunset.' },
      { day: 2, title: 'Wilderness Navigation & Night Drive', desc: 'Full-day exploratory terrain drive, rock cleft tracking, and night star scouting.' },
      { day: 3, title: 'Granite Gorge Walk & Return', desc: 'Guided gorge walk with local trackers; private departure transfer.' },
    ],
    tag: 'High Adventure',
    imageUrl: '/images/jawai-hero.png',
  },
  {
    id: 'GHM-JAW-006',
    name: 'Jawai Romantic Wilderness',
    slug: 'jawai-romantic-wilderness',
    duration: '2N/3D',
    bestFor: 'Couples & Honeymooners',
    coreExperience: 'Private-feel stay + safari + sunset/nature experience',
    highlights: ['Private 4x4 Safaris', 'Candlelit Kopjes Bush Dinner', 'Luxury Tented Suite', 'Sundowners by the Water'],
    overview:
      'An intimate sanctuary under starlit skies. Unmatched privacy, bespoke sunset setups on solitary granite boulders, and romantic wilderness luxury.',
    itinerary: [
      { day: 1, title: 'Private Check-in & Sunset Boulder Champagne', desc: 'Welcome ritual, relaxed check-in, private sundowner on secluded granite rock.' },
      { day: 2, title: 'Private Safari & Starlit Dinner', desc: 'Private dawn safari, afternoon spa/relaxation, private candlelit dinner under the Milky Way.' },
      { day: 3, title: 'Slow Morning & Scenic Departure', desc: 'Late bush breakfast with panoramic views, leisurely departure transfer.' },
    ],
    tag: 'Couples Exclusive',
    imageUrl: '/images/safari-hero.png',
  },
];
