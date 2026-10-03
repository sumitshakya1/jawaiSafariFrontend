export interface GuidePageData {
  slug: string;
  title: string;
  heroTitle: string;
  metaDesc: string;
  intro: string;
  sections: { title: string; desc: string; bulletPoints?: string[] }[];
  faqs: { q: string; a: string }[];
  relatedPackageIds: string[];
}

export const TRAVEL_GUIDES_DATA: Record<string, GuidePageData> = {
  'things-to-do-in-jawai': {
    slug: 'things-to-do-in-jawai',
    title: 'Things to Do in Jawai - Wildlife, Nature & Culture | Ghoomosa',
    heroTitle: 'Top Things to Do in Jawai: Beyond the Leopard Safari',
    metaDesc:
      'Explore the best things to do in Jawai, including safari, bird watching, Jawai Dam, nature, culture and photography experiences.',
    intro:
      'While Jawai is famed globally for its granite hill leopards, the region offers a diverse tapestry of outdoor and cultural pursuits, from vast wetland bird watching to technical rock climbing and pastoral village encounters.',
    sections: [
      {
        title: '1. Track Leopards on Ancient Granite Kopjes',
        desc: 'Embark on open 4x4 Gypsy safaris during dawn and dusk. Local trackers utilize centuries-old territory intuition to observe leopards basking on monolithic boulders.',
        bulletPoints: ['Morning safari 05:45 AM', 'Evening safari 04:15 PM', 'Accompanied by skilled tracker-naturalists'],
      },
      {
        title: '2. Marvel at Migratory Birds at Jawai Dam',
        desc: 'Visit the vast waters of Jawai Bandh between October and March to witness thousands of Greater Flamingos, Demoiselle Cranes, Bar-headed Geese, and Pelicans.',
      },
      {
        title: '3. Spot Marsh Crocodiles Basking on Sandbanks',
        desc: 'Observe prehistoric 12-foot mugger crocodiles warming themselves on the granite shoals around the water reservoir from safe, elevated vantage points.',
      },
      {
        title: '4. Experience 4x4 Technical Granite Rock Crawling',
        desc: 'Feel the thrill as skilled drivers navigate custom 4x4 Gypsies up sheer 45-degree rock faces to reach panoramic sunset vantage points.',
      },
      {
        title: '5. Walk with the Indigenous Rabari Shepherds',
        desc: 'Engage in respectful cultural interactions with the iconic red-turbaned pastoral community who have peacefully co-existed with leopards for generations.',
      },
      {
        title: '6. Savor a Granite Hilltop Sundowner',
        desc: 'End your evening with artisanal tea or champagne atop a secluded boulder overlooking the crimson sunset across the Aravalli hills.',
      },
    ],
    faqs: [
      {
        q: 'How many days are needed to experience all activities in Jawai?',
        a: 'A 2-night / 3-day or 3-night / 4-day itinerary allows you to comfortably enjoy multiple safaris, dam birding, crocodile spotting, and village walks.',
      },
    ],
    relatedPackageIds: ['GHM-JAW-003', 'GHM-JAW-008'],
  },
  'best-time-to-visit-jawai': {
    slug: 'best-time-to-visit-jawai',
    title: 'Best Time to Visit Jawai - Seasonal Travel Guide | Ghoomosa',
    heroTitle: 'Best Time to Visit Jawai: Season-by-Season Guide',
    metaDesc:
      'Compare seasons for wildlife, bird watching, weather and trip planning to choose the best time for your Jawai visit.',
    intro:
      'Jawai offers unique wildlife appeal throughout the year. Understanding seasonal weather patterns helps you tailor your journey for optimal predator tracking or migratory birding.',
    sections: [
      {
        title: 'Winter (October to March) — Peak Season',
        desc: 'Pleasant daytime temperatures (20°C to 28°C) and crisp nights (8°C to 14°C). Leopards frequently bask on sun-warmed rocks, and thousands of migratory flamingos and cranes populate Jawai Dam.',
        bulletPoints: ['Prime leopard basking behavior', 'Peak migratory birding season', 'Ideal weather for outdoor activities'],
      },
      {
        title: 'Summer (April to June) — High Wildlife Activity',
        desc: 'Warm days (32°C to 42°C). With sparse foliage and concentrated waterholes, wildlife tracking becomes exceptionally predictable around natural springs and shaded granite crevices.',
        bulletPoints: ['Fewer tourists and private safari tracks', 'High predator visibility near water sources', 'Dramatic golden hour photography light'],
      },
      {
        title: 'Monsoon (July to September) — Lush Greenery & Full Dam',
        desc: 'The arid landscape transforms into vibrant emerald hills with rushing streams. While heavy rain can limit vehicle access on certain rock slopes, the scenery is breathtaking.',
        bulletPoints: ['Emerald green Aravalli landscapes', 'Full water levels at Jawai Dam', 'Serene, uncrowded luxury retreats'],
      },
    ],
    faqs: [
      {
        q: 'Which months are best for migratory bird watching?',
        a: 'November to February is the prime window for flamingos, cranes, and migratory raptors at Jawai Dam.',
      },
    ],
    relatedPackageIds: ['GHM-JAW-001', 'GHM-JAW-003'],
  },
  'how-to-reach-jawai': {
    slug: 'how-to-reach-jawai',
    title: 'How to Reach Jawai by Road, Rail & Air | Ghoomosa',
    heroTitle: 'How to Reach Jawai: Complete Road, Rail & Air Route Guide',
    metaDesc:
      'Plan your route to Jawai from Udaipur, Jodhpur, Ahmedabad and nearby cities with practical road, rail and airport guidance.',
    intro:
      'Jawai is centrally nestled in the Pali district of Southern Rajasthan, easily accessible via smooth national highways, nearby commercial airports, and direct rail connections.',
    sections: [
      {
        title: 'By Air (Nearest Commercial Airports)',
        desc: '1. Udaipur Airport (Maharana Pratap Airport - UDR): 140 km (~2.5 to 3 hours by road via NH27).\n2. Jodhpur Airport (JDH): 150 km (~3 hours by road via NH62).\n3. Ahmedabad International Airport (AMD): 290 km (~5 to 6 hours by road).',
      },
      {
        title: 'By Train (Nearest Railway Stations)',
        desc: '1. Jawai Bandh Railway Station (JWB): 15-20 km (Connected to major trains on Delhi-Ahmedabad/Mumbai line).\n2. Falna Railway Station (FA): 35 km (Major junction with daily express trains from Delhi, Mumbai, Jaipur, and Ahmedabad).',
      },
      {
        title: 'By Road (Driving Distances & Times)',
        desc: '• From Udaipur: 140 km | 2.5 - 3 hours via NH27\n• From Jodhpur: 150 km | 3 hours via NH62\n• From Ahmedabad: 290 km | 5 - 6 hours via NH27\n• From Jaipur: 380 km | 6.5 hours via NH48 & NH62',
      },
    ],
    faqs: [
      {
        q: 'Does Ghoomosa provide airport pickup transfers?',
        a: 'Yes, private air-conditioned SUV transfers (Innova Crysta / Fortuner / Mercedes) can be seamlessly bundled with any safari package from Udaipur, Jodhpur, or Ahmedabad.',
      },
    ],
    relatedPackageIds: ['GHM-JAW-001', 'GHM-JAW-009'],
  },
  'jawai-travel-guide': {
    slug: 'jawai-travel-guide',
    title: 'Jawai Travel Guide - Plan Your Complete Trip | Ghoomosa',
    heroTitle: 'Jawai Travel Guide: The Definitive Expedition Handbook',
    metaDesc:
      'A complete Jawai planning guide covering experiences, stays, itinerary ideas, responsible travel, best time and how to reach.',
    intro:
      'Nestled where the ancient Aravalli mountain ranges crumble into the Thar desert plains, Jawai is an extraordinary landscape of raw granite kopjes, pastoral heritage, and wild leopards.',
    sections: [
      {
        title: 'Why Jawai is Unique in World Wildlife',
        desc: 'Unlike conventional national parks where animals are fenced or confined, Jawai represents a living conservation model where wild apex predators share rocky ridges with villages and cattle herds in mutual harmony.',
      },
      {
        title: 'Selecting the Right Itinerary Duration',
        desc: '• 1N/2D: Ideal for weekend escapes and quick leopard tracking.\n• 2N/3D: Balanced first-time visit covering leopards, Jawai Dam birding, and crocodiles.\n• 3N/4D: Complete slow travel immersion with cultural village walks and luxury wellness.',
      },
      {
        title: 'Essential Packing Checklist',
        desc: 'Neutral safari wear, warm windbreakers for open morning drives, UV sunglasses, telephoto zoom lenses, and comfortable walking shoes.',
      },
    ],
    faqs: [
      {
        q: 'Is advance booking required for Jawai safaris?',
        a: 'Yes, because vehicle quotas per sector are regulated to prevent overcrowding and maintain wildlife ethics, reserving your dates in advance is strongly advised.',
      },
    ],
    relatedPackageIds: ['GHM-JAW-003', 'GHM-JAW-004', 'GHM-JAW-008'],
  },
  'responsible-travel': {
    slug: 'responsible-travel',
    title: 'Responsible Travel & Wildlife Awareness | Ghoomosa',
    heroTitle: 'Explore Freely. Travel Responsibly. Leave Only Stories Behind.',
    metaDesc:
      'Discover Ghoomosa’s 12 wildlife and community guidelines for ethical, sustainable travel in Jawai, Rajasthan.',
    intro:
      'Jawai’s remarkable human-wildlife harmony exists because local communities and conscious travellers respect the delicate balance of nature. We ask every guest to follow these 12 golden principles.',
    sections: [
      {
        title: 'The 12 Golden Wildlife & Community Principles',
        desc: '1. Maintain Silence: Keep noise low and let wildlife remain undisturbed.\n2. Say No to Plastic: Avoid single-use plastic and help keep Jawai clean.\n3. Respect Wildlife: Never feed, chase, provoke or disturb animals.\n4. Arrive Early: Reach at least 30 minutes before your confirmed safari or activity.\n5. No Flash Photography: Protect wildlife by avoiding flash during sightings.\n6. Follow Your Guide: Always follow instructions from your naturalist and driver.\n7. Keep a Safe Distance: Do not ask operators to approach wildlife too closely.\n8. Do Not Litter: Carry all waste back to the lodge and dispose of it responsibly.\n9. Respect Local Communities: Respect traditions, privacy, property, and local ways of life.\n10. Ask Before Photographing People: Obtain consent before photographing residents or private spaces.\n11. Avoid Loud Music: Keep natural and community areas peaceful.\n12. Wildlife is Wild: Sightings depend on nature and can never be guaranteed.',
      },
    ],
    faqs: [
      {
        q: 'Why is flash photography strictly banned?',
        a: 'Leopards and nocturnal creatures have highly sensitive tapetum lucidum eyes. Bright flashes can cause temporary blindness, disorientation, and panic.',
      },
    ],
    relatedPackageIds: ['GHM-JAW-003', 'GHM-JAW-008'],
  },
};
