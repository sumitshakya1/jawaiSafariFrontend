export interface PackageItem {
  id: string;
  slug: string;
  name: string;
  duration: string;
  durationShort: string;
  nights: number;
  days: number;
  bestFor: string;
  coreExperience: string;
  tag: string;
  image: string;
  overview: string;
  whyChoose: string[];
  itinerary: { day: number; title: string; desc: string; highlights?: string[] }[];
  inclusions: string[];
  exclusions: string[];
  stayCategories: string[];
  customizationOptions: string[];
  operationalNotes: string[];
  faq: { q: string; a: string }[];
}

export const FLAGSHIP_PACKAGES: PackageItem[] = [
  {
    id: 'GHM-JAW-001',
    slug: 'discover-jawai',
    name: 'Discover Jawai',
    duration: '1 Night / 2 Days',
    durationShort: '1N / 2D',
    nights: 1,
    days: 2,
    bestFor: 'First-time visitors',
    coreExperience: 'Stay + one signature safari/experience + Jawai landscape orientation',
    tag: 'Signature Intro',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Designed for travellers seeking a concise yet deeply immersive first glimpse of the rugged granite kopjes of Jawai. Experience prime evening leopard tracking followed by an authentic nocturnal campfire dinner and sunrise vista orientation.',
    whyChoose: [
      'Perfect short weekend safari getaway from Udaipur, Jodhpur, or Ahmedabad',
      'Open 4x4 Gypsy wildlife drive with experienced local tracker naturalists',
      'Curated boutique granite-view stay with authentic Rajasthani hospitality',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival, Check-in & Evening Leopard Safari',
        desc: 'Arrive in Jawai by midday. Check-in to your selected heritage/luxury camp. At 4:00 PM, embark on your first 4x4 open-top wildlife drive across the granite boulder terrain with a local tracker.',
        highlights: ['4x4 Leopard Tracking', 'Sunset over Granite Hills', 'Fireside Dinner'],
      },
      {
        day: 2,
        title: 'Dawn Landscape Orientation & Departure',
        desc: 'Wake up to morning birdsong. Enjoy an early tea overlooking the Aravalli foothills followed by a scenic orientation drive before check-out and onward journey.',
        highlights: ['Morning Savanna Vistas', 'Traditional Breakfast', 'Transfer Coordination'],
      },
    ],
    inclusions: [
      '1 Night Accommodation in selected category',
      '1 Dedicated 4x4 Open Safari Drive with local tracker',
      'All meals (Breakfast, Lunch, Dinner)',
      'Forest & village entry facilitation',
    ],
    exclusions: [
      'Personal expenses & gratuities',
      'Flight / Train tickets',
      'Camera fee if applicable on special lenses',
    ],
    stayCategories: ['Luxury Glamping Tent', 'Heritage Safari Lodge', 'Boutique Nature Camp'],
    customizationOptions: [
      'Add private transfer from Udaipur / Jodhpur airport',
      'Upgrade to dedicated naturalist photography vehicle',
    ],
    operationalNotes: [
      'Safari timings: 05:45 AM (Dawn) & 04:15 PM (Dusk).',
      'Sightings depend on natural animal movement in open wilderness and are never guaranteed.',
    ],
    faq: [
      {
        q: 'What is the best time to arrive for the 1N/2D package?',
        a: 'We recommend arriving by 1:00 PM on Day 1 to comfortably check-in and refresh before the 4:00 PM evening safari.',
      },
      {
        q: 'Is this package suitable for families with senior citizens?',
        a: 'Yes, our vehicles and stays are selected for comfortable accessibility with prior notice.',
      },
    ],
  },
  {
    id: 'GHM-JAW-002',
    slug: 'jawai-wild-escape',
    name: 'Jawai Wild Escape',
    duration: '1 Night / 2 Days',
    durationShort: '1N / 2D',
    nights: 1,
    days: 2,
    bestFor: 'Weekend travellers',
    coreExperience: 'Short wildlife escape + sunrise/sunset experience',
    tag: 'Quick Getaway',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80',
    overview:
      'A dynamic 36-hour wildlife escape built around golden hour drives. Catch both the dramatic crimson sunset over Jawai Dam and the tranquil mist of dawn on high granite ridges.',
    whyChoose: [
      'Dual golden hour tracking slots (dusk and dawn)',
      'High-clearance terrain drives to scenic panoramic viewpoints',
      'Designed for busy professionals wanting high wildlife immersion in minimal time',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Check-in & Golden Hour Sunset Safari',
        desc: 'Arrive by 2:00 PM. Depart at 4:30 PM for sunset kopje tracking where leopards frequently bask on sun-warmed rocks.',
      },
      {
        day: 2,
        title: 'Dawn Safari & Dam Birding Experience',
        desc: '06:00 AM morning wildlife drive towards the water catchment and birding zones. Return for breakfast and departure.',
      },
    ],
    inclusions: ['1 Night Stay', '2 Wildlife & Landscape Drives', 'Full Board Dining'],
    exclusions: ['Intercity transportation', 'Beverages not mentioned'],
    stayCategories: ['Premium Safari Resort', 'Wilderness Tent'],
    customizationOptions: ['Add high-tea atop granite boulders'],
    operationalNotes: ['Layered clothing recommended for chilly morning safari breezes.'],
    faq: [
      {
        q: 'How many drives are included in Wild Escape?',
        a: 'This package includes two separate drives: 1 evening tracking drive and 1 morning landscape/wildlife drive.',
      },
    ],
  },
  {
    id: 'GHM-JAW-003',
    slug: 'jawai-wildlife-explorer',
    name: 'Jawai Wildlife Explorer',
    duration: '2 Nights / 3 Days',
    durationShort: '2N / 3D',
    nights: 2,
    days: 3,
    bestFor: 'Families / wildlife travellers',
    coreExperience: 'Leopard-focused safari + birding/crocodile landscape + Jawai Dam',
    tag: 'Most Popular',
    image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80',
    overview:
      'The quintessential balanced Jawai expedition. Over three days and two nights, discover the full biodiversity of the region: multiple leopard tracking drives across granite kopjes, migratory flamingo wetlands at Jawai Dam, and sunbathing marsh crocodiles.',
    whyChoose: [
      'Comprehensive coverage: leopards, crocodiles, migratory birdlife, and local Rabari culture',
      '3 distinct wildlife & landscape drives across different sectors',
      'Relaxed pacing ideal for photography enthusiasts and multi-generational families',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival, Orientation & Evening Leopard Tracking',
        desc: 'Arrival and traditional welcome. Afternoon briefing by your naturalist. 4:00 PM sunset leopard drive across rocky hills.',
      },
      {
        day: 2,
        title: 'Dawn Safari, Jawai Dam & Crocodile Wetland Expedition',
        desc: '06:00 AM morning safari. Midday leisure. Afternoon visit to Jawai Dam for bird watching (flamingos, pelicans) and marsh crocodile spotting.',
      },
      {
        day: 3,
        title: 'Rabari Pastoral Heritage Walk & Departure',
        desc: 'Morning stroll through a local Rabari shepherd settlement. Breakfast and seamless checkout.',
      },
    ],
    inclusions: [
      '2 Nights Luxury Accommodation',
      '3 Curated 4x4 Wildlife & Wetland Drives',
      'All gourmet meals and high tea',
      'Experienced Naturalist Tracker escort',
    ],
    exclusions: ['Personal insurance', 'Transport to/from Jawai base'],
    stayCategories: ['Luxury Tent', 'Heritage Suite', 'Eco Stone Villa'],
    customizationOptions: ['Private sundowner experience on secluded granite peak'],
    operationalNotes: ['Binoculars provided on request in vehicle.'],
    faq: [
      {
        q: 'What wildlife besides leopards will we see?',
        a: 'Jawai is home to marsh crocodiles, striped hyenas, Indian foxes, nilgai, and over 150 species of resident and migratory birds around Jawai Dam.',
      },
    ],
  },
  {
    id: 'GHM-JAW-004',
    slug: 'jawai-leopard-trail',
    name: 'Jawai Leopard Trail',
    duration: '2 Nights / 3 Days',
    durationShort: '2N / 3D',
    nights: 2,
    days: 3,
    bestFor: 'Wildlife enthusiasts',
    coreExperience: 'Multiple wildlife drive opportunities + local landscape',
    tag: 'Wildlife Focused',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Dedicated strictly to serious wildlife tracking. Four comprehensive open-vehicle game drives coordinated with local trackers across northern and southern granite clusters.',
    whyChoose: [
      '4 dedicated safari tracking sessions maximizing viewing opportunities',
      'Expert tracker naturalists with decades of territory knowledge',
      'Focus on animal behavior, cave shelters, and nocturnal territory patrols',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Check-in & Sector A Evening Tracking',
        desc: 'Check-in, tracker briefing, and 4-hour evening game drive in the core boulder ranges.',
      },
      {
        day: 2,
        title: 'Dual Game Drives (Morning Sector B + Evening Sector C)',
        desc: 'Early 05:30 AM drive focusing on active leopards returning to caves. Afternoon drive across the riverbeds and open scrubland.',
      },
      {
        day: 3,
        title: 'Final Dawn Tracking & Departure',
        desc: 'Final morning drive for behavioral observation and departure after breakfast.',
      },
    ],
    inclusions: ['2 Nights Stay', '4 Intensive 4x4 Tracking Drives', 'Full Board Dining'],
    exclusions: ['Camera equipment rental', 'Gratuities'],
    stayCategories: ['Wildlife Safari Camp', 'Luxury Suite'],
    customizationOptions: ['Dedicated lens bean-bags and vehicle mount setups'],
    operationalNotes: ['Strict silence and no flash photography enforced during encounters.'],
    faq: [
      {
        q: 'How many people per safari vehicle?',
        a: 'We offer private Gypsy vehicles with maximum 4-6 guests per vehicle for optimal viewing angles.',
      },
    ],
  },
  {
    id: 'GHM-JAW-005',
    slug: 'jawai-adventure-trail',
    name: 'Jawai Adventure Trail',
    duration: '2 Nights / 3 Days',
    durationShort: '2N / 3D',
    nights: 2,
    days: 3,
    bestFor: 'Adventure travellers',
    coreExperience: 'Safari + verified hill/off-road experience + sunset landscape',
    tag: 'Thrill & Terrain',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Combine wildlife tracking with technical 4x4 steep rock climbs on ancient monolithic granite formations, off-road river sand tracks, and scenic hilltop vantage points.',
    whyChoose: [
      'Technical granite hill ascents driven by trained off-road specialists',
      'Spectacular 360-degree panoramic viewpoints of the entire Jawai basin',
      'Wilderness hiking along permitted ancient rock clefts',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Off-road Granite Ascent Sunset',
        desc: 'Technical 4x4 climb up permitted granite domes for an unforgettable sunset panorama.',
      },
      {
        day: 2,
        title: 'Morning Wildlife Safari & Riverbed Sand Trail',
        desc: 'Dawn wildlife drive followed by afternoon riverbed off-road exploration.',
      },
      {
        day: 3,
        title: 'Sunrise Ridge Walk & Departure',
        desc: 'Guided nature hike along safe granite trails before breakfast.',
      },
    ],
    inclusions: ['2 Nights Stay', 'Off-road Rock Drive', '2 Wildlife Safaris', 'All Meals'],
    exclusions: ['Adventure insurance', 'Personal gear'],
    stayCategories: ['Adventure Wilderness Camp', 'Luxury Lodge'],
    customizationOptions: ['Sunset bush tea setup on cliff peak'],
    operationalNotes: ['Requires reasonable mobility; not recommended for severe back ailments.'],
    faq: [
      {
        q: 'Are the rock climbing drives safe?',
        a: 'Yes, all off-road drives are conducted by licensed professional drivers on permitted routes adhering to strict vehicle safety protocols.',
      },
    ],
  },
  {
    id: 'GHM-JAW-006',
    slug: 'jawai-family-adventure',
    name: 'Jawai Family Adventure',
    duration: '2 Nights / 3 Days',
    durationShort: '2N / 3D',
    nights: 2,
    days: 3,
    bestFor: 'Families',
    coreExperience: 'Family-paced safari, nature, stay and flexible sightseeing',
    tag: 'Family Friendly',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Thoughtfully paced for children, parents, and grandparents. Combines comfortable wildlife drives with engaging village crafts, stargazing sessions, and relaxing resort amenities.',
    whyChoose: [
      'Comfort-focused safari vehicles with cushioned seating',
      'Kid-friendly naturalist guides with wildlife identification sheets',
      'Spacious family interconnected suites or glamping tents',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Check-in, Pool Leisure & Evening Safari',
        desc: 'Gentle afternoon safari tailored for child safety and comfortable wildlife spotting.',
      },
      {
        day: 2,
        title: 'Dam Bird Sanctuary, Pottery & Night Stargazing',
        desc: 'Morning flamingo spotting, afternoon local pottery workshop, and evening telescope stargazing.',
      },
      {
        day: 3,
        title: 'Breakfast with Nature Views & Checkout',
        desc: 'Relaxed breakfast and family photo opportunities.',
      },
    ],
    inclusions: ['2 Nights Family Accommodation', '2 Family Safaris', 'All Meals & Snacks'],
    exclusions: ['Extra bed charges for additional children unless specified'],
    stayCategories: ['Family Resort Villa', 'Luxury Swiss Tent'],
    customizationOptions: ['Custom kid-friendly meal menus'],
    operationalNotes: ['Children must remain seated during wildlife drives.'],
    faq: [
      {
        q: 'Is Jawai safe for young children?',
        a: 'Yes. Wildlife viewings happen securely inside open 4x4 vehicles with strict naturalist protocols.',
      },
    ],
  },
  {
    id: 'GHM-JAW-007',
    slug: 'jawai-romantic-wilderness',
    name: 'Jawai Romantic Wilderness',
    duration: '2 Nights / 3 Days',
    durationShort: '2N / 3D',
    nights: 2,
    days: 3,
    bestFor: 'Couples',
    coreExperience: 'Private-feel stay + safari + sunset/nature experience',
    tag: 'Romantic Escape',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
    overview:
      'An intimate wilderness journey designed for couples and honeymooners. Experience private open-top safaris, secluded hilltop sundowners, and candlelit dinners under the starlit Aravalli sky.',
    whyChoose: [
      'Private 4x4 vehicle exclusively for two on all drives',
      'Candlelit dinners under the Milky Way canopy',
      'Bespoke sunset high-tea on private granite cliffs',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival, Champagne Welcome & Sunset Safari',
        desc: 'Welcome at luxury lodge. Private sunset safari followed by poolside candlelight dinner.',
      },
      {
        day: 2,
        title: 'Morning Safari & Exclusive Hilltop Sundowner',
        desc: 'Private dawn safari. Afternoon spa/relaxation. Sunset high tea on a private boulder peak.',
      },
      {
        day: 3,
        title: 'Private Sunrise Breakfast & Departure',
        desc: 'Gourmet breakfast in your tent deck before checkout.',
      },
    ],
    inclusions: ['2 Nights Luxury Stay', 'Private Safaris', 'Gourmet Dining & Private Setups'],
    exclusions: ['Special vintage alcohol'],
    stayCategories: ['Private Pool Villa', 'Ultra-Luxury Tent'],
    customizationOptions: ['Flower decoration & customized celebration cake'],
    operationalNotes: ['Prior intimation needed for special dietary requirements.'],
    faq: [
      {
        q: 'Can we arrange a private surprise dinner?',
        a: 'Yes, we curate private bush dinners and granite sundowner setups upon request.',
      },
    ],
  },
  {
    id: 'GHM-JAW-008',
    slug: 'soul-of-jawai',
    name: 'Soul of Jawai',
    duration: '3 Nights / 4 Days',
    durationShort: '3N / 4D',
    nights: 3,
    days: 4,
    bestFor: 'Experiential travellers',
    coreExperience: 'Wildlife + nature + culture + slow travel',
    tag: 'Immersive Slow Travel',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    overview:
      'A slow, profound immersion into the symbiotic harmony between the red-turbaned Rabari pastoralists and the wild leopards of Jawai. Experience 4 distinct safaris, village walks, dam boat vistas, and heritage temples.',
    whyChoose: [
      'Deep cultural immersion into the unique human-wildlife co-existence of Jawai',
      'Unrushed itinerary with 4 game drives across multiple distinct habitats',
      'Visit Devgiri Temple tucked inside leopard granite caves',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & North Ridge Safari',
        desc: 'Orientation and introductory evening wildlife drive in Northern Jawai.',
      },
      {
        day: 2,
        title: 'Dawn Safari & Rabari Pastoral Life Experience',
        desc: 'Morning wildlife drive. Afternoon cultural interaction with Rabari shepherds.',
      },
      {
        day: 3,
        title: 'Jawai Dam Wetlands & Devgiri Cave Temple Visit',
        desc: 'Crocodile and birding exploration followed by sunset at ancient rock shrines.',
      },
      {
        day: 4,
        title: 'Final Morning Game Drive & Farewell',
        desc: 'Final dawn safari and relaxed mid-day departure.',
      },
    ],
    inclusions: ['3 Nights Stay', '4 Custom Drives', 'Cultural Guide', 'All Meals'],
    exclusions: ['Personal gratuities', 'Special donations'],
    stayCategories: ['Heritage Haveli Suite', 'Luxury Glamping Tent'],
    customizationOptions: ['Add cycling trails through rural village paths'],
    operationalNotes: ['Modest attire recommended when visiting local community shrines.'],
    faq: [
      {
        q: 'What makes the Rabari-Leopard relationship unique?',
        a: 'The Rabari people venerate leopards as sacred guardians of their spiritual deity and have co-existed peacefully with zero recorded human-wildlife conflict for centuries.',
      },
    ],
  },
  {
    id: 'GHM-JAW-009',
    slug: 'jawai-signature-escape',
    name: 'Jawai Signature Escape',
    duration: '2 or 3 Nights',
    durationShort: '2N / 3N Custom',
    nights: 3,
    days: 4,
    bestFor: 'Premium travellers',
    coreExperience: 'Premium stay + personalized safari/transfer plan',
    tag: 'Ultra Luxury',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80',
    overview:
      'The pinnacle of bespoke luxury safari hospitality in India. Private luxury tented suites with private plunge pools, senior naturalist trackers, fine dining, and seamless airport transfers.',
    whyChoose: [
      'Stays at Relais & Châteaux style ultra-luxury wilderness camps',
      'Dedicated Mercedes/Innova Crysta airport transfers included',
      'Unlimited personalized game drives with senior master naturalists',
    ],
    itinerary: [
      {
        day: 1,
        title: 'VIP Chauffeur Pickup & Sunset Game Drive',
        desc: 'Private airport transfer to Jawai. Sunset champagne safari.',
      },
      {
        day: 2,
        title: 'Master Naturalist Expedition & Bush Dining',
        desc: 'Private dawn tracking followed by midday spa treatments and private cliffside dinner.',
      },
      {
        day: 3,
        title: 'Wetlands & Deep Wilderness Exploration',
        desc: 'Exploration of remote rocky outposts and migratory bird corridors.',
      },
      {
        day: 4,
        title: 'Dawn Drive & VIP Airport Transfer',
        desc: 'Morning drive and transfer back to Udaipur / Jodhpur Airport.',
      },
    ],
    inclusions: ['Luxury Stay', 'Private Airport Transfers', 'All Safaris & Drinks', 'All Meals'],
    exclusions: ['Charter flights (can be arranged upon request)'],
    stayCategories: ['Ultra-Luxury Wilderness Suite', 'Private Pool Villa'],
    customizationOptions: ['Helicopter transfer from Udaipur to Jawai helipad'],
    operationalNotes: ['Concierge available 24/7 during your stay.'],
    faq: [
      {
        q: 'Can private chartered flights land near Jawai?',
        a: 'Yes, private charters land at Udaipur (UDR) or Jodhpur (JDH), and helicopter transfers directly to Jawai helipads can be facilitated.',
      },
    ],
  },
  {
    id: 'GHM-JAW-010',
    slug: 'jawai-corporate-escape',
    name: 'Jawai Corporate Escape',
    duration: 'Custom (2N/3D or 3N/4D)',
    durationShort: 'Custom Nights',
    nights: 2,
    days: 3,
    bestFor: 'Corporate / teams',
    coreExperience: 'Stay + team activities + meals + travel logistics + curated experiences',
    tag: 'Corporate Offsite',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Re-energize your leadership team or company with a nature-led offsite in the wilderness. Features conference setups with audio-visual equipment, curated team safaris, outdoor leadership challenges, and private group banquets.',
    whyChoose: [
      'Full resort buyout options for complete privacy and focus',
      'High-speed Wi-Fi, audio-visual conference equipment in open-air courtyards',
      'Team building safaris, off-road challenges, and fireside strategy sessions',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Group Arrival, Team Lunch & Ice-breaker Sunset Safari',
        desc: 'Coordinated convoy transfers from airport/railway. Afternoon safari in multiple 4x4 Gypsies followed by open-air networking dinner.',
      },
      {
        day: 2,
        title: 'Morning Strategy Session & Afternoon Off-road Team Challenge',
        desc: 'Morning conference session in resort hall. Afternoon technical rock climb and sunset leadership debrief.',
      },
      {
        day: 3,
        title: 'Sunrise Walk, Gala Breakfast & Group Departure',
        desc: 'Morning nature walk, awards breakfast, and coordinated departure transfers.',
      },
    ],
    inclusions: [
      'Resort accommodation for group',
      'Conference facilities & AV setup',
      'Group Safaris with naturalists',
      'All meals, conference high teas & gala dinners',
    ],
    exclusions: ['Individual personal room services'],
    stayCategories: ['Resort Buyout', 'Boutique Camp Buyout'],
    customizationOptions: ['Branded welcome kits, keynote sound setups, live folk performances'],
    operationalNotes: [
      'Compliance with local ecological sound restrictions (no loud DJ music in wilderness zones).',
    ],
    faq: [
      {
        q: 'What is the maximum group size Jawai can accommodate?',
        a: 'Boutique luxury lodges host 20 to 60 delegates comfortably. Multi-resort clusters can host up to 150 delegates.',
      },
    ],
  },
];
