import { PropertyItem } from './types';

export const J_WILD_RESORT_JAWAI: PropertyItem = {
  property_name: 'J Wild Resort Jawai',
  slug: 'j-wild-resort-jawai',
  destination_id: 'jawai',
  destination_name: 'Jawai, Rajasthan',
  eyebrow: 'Private Pool Villa Resort - Jawai, Rajasthan',
  short_description:
    'A luxury wilderness retreat in Jawai with private pool villas, mountain views and easy access to wildlife, nature and local experiences.',
  property_type: 'Boutique Wilderness Resort & Pool Villas',

  // STRICT COMMERCIAL INVARIANT: rate sheet is confidential
  pricing_mode: 'PRICE_ON_REQUEST',
  public_price: null,

  featured_image: '/images/resorts/j-wild/j-wild-resort-jawai.webp',
  hero_image: '/images/resorts/j-wild/j-wild-resort-jawai.webp',

  about_paragraphs: [
    'J Wild Resort Jawai is a luxury wilderness retreat in Jawai, Rajasthan, designed for travellers looking for privacy, nature and comfort. The property features private pool villa accommodation set against the rocky, mountain-led landscape associated with the Jawai region.',
    'Guests can combine their stay with wildlife safaris, Jawai Bandh visits, local village experiences and other nature-led activities, making the resort suitable for couples, families and travellers planning a complete Jawai escape.',
    'Ghoomosa can help plan the stay together with relevant Jawai experiences, subject to availability and local operating conditions.',
  ],

  verified_facts: [
    'Boutique luxury resort featuring 11 private pool villas with private courtyards and mountain views',
    'Private plunge pool and sitting verandah included in each villa category',
    'Multi-cuisine dining, hammocks, and shaded relaxation courtyards',
    'Indoor games zone, badminton court, bicycles, and guided hill trekking',
    'Minutes away from premier leopard safari zones, sloth bear trails, and Jawai Bandh crocodile waters',
    'Authentic Rabari pastoral interaction and natural heritage guided tracking with Ghoomosa',
  ],

  quick_facts: [
    { label: 'Location', value: 'Jawai, Rajasthan' },
    { label: 'Stay Type', value: 'Private Pool Villa Resort' },
    { label: 'Suitable For', value: 'Couples, families, small groups' },
    { label: 'Key Appeal', value: 'Private pools, mountain views, wilderness setting' },
    { label: 'Pricing', value: 'Price on Request' },
    { label: 'Booking Through', value: 'Ghoomosa enquiry' },
  ],

  highlights: [
    'Private pool villa accommodation',
    'Mountain-facing setting and sit-out/verandah',
    'Private courtyard',
    'Multi-cuisine dining',
    'Game zone and outdoor recreation',
    'Bicycles and hill trekking',
    'Access to Jawai wildlife and local experiences',
  ],

  room_categories: [
    {
      room_name: 'Luxury Pool Villa',
      room_slug: 'luxury-pool-villa',
      short_description:
        'Private pool, mountain-view setting, verandah/sit-out, modern comforts.',
      occupancy_text: '2 Adults (Up to 3 guests with extra bed)',
      bedroom_count: 1,
      bathroom_count: 1,
      private_pool: true,
      mountain_view: true,
      room_size: null, // Nullable CMS field, omitted from render unless confirmed
      gallery_images: [
        '/images/resorts/j-wild/j-wild-resort-jawai-luxury-pool-villa.webp',
        '/images/resorts/j-wild/j-wild-jawai-private-pool-villa.webp',
        '/images/resorts/j-wild/j-wild-jawai-luxury-bathroom.webp',
      ],
      feature_list: [
        'Private plunge pool with stone sun deck',
        'Verandah & sitting area framing granite hills',
        'Private open-air courtyard',
        'Plush king bedding with artisanal Rajasthani motifs',
        'Ensuite luxury bathroom with premium organic toiletries',
      ],
      display_order: 1,
      is_active: true,
    },
    {
      room_name: 'Suite Pool Villa',
      room_slug: 'suite-pool-villa',
      short_description:
        'Private pool, spacious suite-style accommodation, mountain views and private sit-out.',
      occupancy_text: '2 Adults + 1 Child',
      bedroom_count: 1,
      bathroom_count: 1,
      private_pool: true,
      mountain_view: true,
      room_size: null,
      gallery_images: [
        '/images/resorts/j-wild/j-wild-jawai-suite-pool-villa.webp',
        '/images/resorts/j-wild/j-wild-jawai-pool-plunge-courtyard.webp',
        '/images/resorts/j-wild/j-wild-jawai-villa-dining.webp',
      ],
      feature_list: [
        'Dedicated living lounge area & work desk',
        'Private courtyard plunge pool',
        'Panoramic views of the rugged Jawai hillscapes',
        'Spacious dressing area and luxury bath amenities',
        'In-villa tea, coffee, and artisanal hydration bar',
      ],
      display_order: 2,
      is_active: true,
    },
    {
      room_name: 'Family Two-Bedroom Pool Villa',
      room_slug: 'family-two-bedroom-pool-villa',
      short_description:
        'Two-bedroom family-oriented private pool accommodation for families / small groups.',
      occupancy_text: '4 Adults + 2 Children',
      bedroom_count: 2,
      bathroom_count: 2,
      private_pool: true,
      mountain_view: true,
      room_size: null,
      gallery_images: [
        '/images/resorts/j-wild/j-wild-jawai-family-pool-villa.webp',
        '/images/resorts/j-wild/j-wild-jawai-villa-lounge.webp',
        '/images/resorts/j-wild/j-wild-jawai-private-pool-villa.webp',
      ],
      feature_list: [
        'Two distinct master bedrooms with private ensuite bathrooms',
        'Generous central gathering lounge for families',
        'Private family plunge pool & stone sit-out courtyard',
        'Child-friendly layout with outdoor recreational access',
        'Mountain-view sit-out for sunrise and evening teas',
      ],
      display_order: 3,
      is_active: true,
    },
  ],

  gallery: [
    {
      id: 'gal-1',
      url: '/images/resorts/j-wild/j-wild-resort-jawai.webp',
      alt: 'J Wild Resort Jawai mountain-view setting and main pool deck',
      category: 'Property',
      width: 1280,
      height: 853,
      caption: 'Main pool deck with dramatic granite kopje backdrop',
    },
    {
      id: 'gal-2',
      url: '/images/resorts/j-wild/j-wild-resort-jawai-mountain-view.webp',
      alt: 'Sunset panorama over the Jawai hills at J Wild Resort',
      category: 'Property',
      width: 1600,
      height: 1200,
      caption: 'Sunset across ancient Aravalli boulder ridges',
    },
    {
      id: 'gal-3',
      url: '/images/resorts/j-wild/j-wild-jawai-resort-night-view.webp',
      alt: 'Moonlit night view of granite kopje at J Wild Resort Jawai',
      category: 'Property',
      width: 1200,
      height: 1600,
      caption: 'Night sky and quiet granite terrain under the stars',
    },
    {
      id: 'gal-4',
      url: '/images/resorts/j-wild/j-wild-resort-jawai-luxury-pool-villa.webp',
      alt: 'Luxury Pool Villa bedroom at J Wild Jawai Resort',
      category: 'Rooms',
      width: 1280,
      height: 853,
      caption: 'Luxury Pool Villa master bedroom with king bedding',
    },
    {
      id: 'gal-5',
      url: '/images/resorts/j-wild/j-wild-jawai-suite-pool-villa.webp',
      alt: 'Suite Pool Villa interior with warm wooden accents',
      category: 'Rooms',
      width: 1280,
      height: 853,
      caption: 'Suite Pool Villa with generous interior spaces',
    },
    {
      id: 'gal-6',
      url: '/images/resorts/j-wild/j-wild-jawai-family-pool-villa.webp',
      alt: 'Family pool villa living area at J Wild Resort Jawai',
      category: 'Rooms',
      width: 1280,
      height: 852,
      caption: 'Family Pool Villa living space with comfortable seating',
    },
    {
      id: 'gal-7',
      url: '/images/resorts/j-wild/j-wild-jawai-private-pool-villa.webp',
      alt: 'J Wild Resort Jawai private pool villa courtyard and plunge pool',
      category: 'Details',
      width: 1280,
      height: 853,
      caption: 'Private plunge pool nestled in a secluded courtyard',
    },
    {
      id: 'gal-8',
      url: '/images/resorts/j-wild/j-wild-jawai-pool-plunge-courtyard.webp',
      alt: 'Private plunge pool at J Wild Jawai with sun lounger deck',
      category: 'Details',
      width: 1280,
      height: 876,
      caption: 'Private sun deck with sun loungers and plunge pool',
    },
    {
      id: 'gal-9',
      url: '/images/resorts/j-wild/j-wild-jawai-luxury-bathroom.webp',
      alt: 'Ensuite luxury bathroom with plush bathrobes and shower',
      category: 'Details',
      width: 881,
      height: 1280,
      caption: 'Spacious ensuite bathroom with modern amenities',
    },
    {
      id: 'gal-10',
      url: '/images/resorts/j-wild/j-wild-jawai-villa-dining.webp',
      alt: 'Indoor dining and seating area in J Wild villa',
      category: 'Dining & Leisure',
      width: 1280,
      height: 853,
      caption: 'Private in-villa dining corner',
    },
    {
      id: 'gal-11',
      url: '/images/resorts/j-wild/j-wild-jawai-night-dining-gazebo.webp',
      alt: 'Night dining gazebo illuminated under the Jawai starry sky',
      category: 'Dining & Leisure',
      width: 960,
      height: 1280,
      caption: 'Open-air dinner gazebo illuminated under starlit skies',
    },
    {
      id: 'gal-12',
      url: '/images/resorts/j-wild/j-wild-jawai-bonfire-experience.webp',
      alt: 'Evening bonfire gathering and ambient outdoor seating at J Wild',
      category: 'Dining & Leisure',
      width: 1600,
      height: 1200,
      caption: 'Warm evening bonfire under the night sky',
    },
    {
      id: 'gal-13',
      url: '/images/resorts/j-wild/j-wild-jawai-safari-sunset.webp',
      alt: 'Open 4x4 safari vehicle during golden hour sunset near Jawai water',
      category: 'Destination',
      width: 900,
      height: 1600,
      caption: 'Evening safari exploration across Jawai waterways and kopjes',
    },
    {
      id: 'gal-14',
      url: '/images/resorts/j-wild/j-wild-jawai-sunset-deck.webp',
      alt: 'Sunset deck overlooking the boulder-strewn Jawai plains',
      category: 'Destination',
      width: 720,
      height: 1280,
      caption: 'Panoramic sunset views from the terrace',
    },
    {
      id: 'gal-15',
      url: '/images/resorts/j-wild/j-wild-jawai-hospitality.webp',
      alt: 'Warm Rabari welcome and traditional hospitality at J Wild Resort Jawai',
      category: 'Property',
      width: 768,
      height: 1024,
      caption: 'Warm cultural hospitality rooted in the Rabari traditions of Jawai',
    },
  ],

  videos: [
    {
      id: 'vid-1',
      title: 'J Wild Resort Jawai — Property & Pool Villa Walkthrough',
      url: '/videos/resorts/j-wild/j-wild-resort-jawai-walkthrough.mp4',
      poster: '/images/resorts/j-wild/j-wild-resort-jawai-video-poster.webp',
      description:
        'Take a closer look at the private pool villas, wilderness setting and landscapes surrounding J Wild Resort Jawai.',
      duration: 'PT29S',
      uploadDate: '2026-10-06T00:00:00Z',
    },
  ],

  amenities: [
    {
      name: 'Private Pool Accommodation',
      icon: 'pool',
      description: 'Individual plunge pool in every private villa courtyard for total seclusion.',
    },
    {
      name: 'Private Courtyard',
      icon: 'deck',
      description: 'Open-air walled courtyards allowing quiet relaxation under open skies.',
    },
    {
      name: 'Mountain-View Verandah',
      icon: 'landscape',
      description: 'Elevated sit-outs framing iconic billion-year-old granite kopjes.',
    },
    {
      name: 'Multi-Cuisine Dining',
      icon: 'restaurant',
      description: 'Freshly prepared Rajasthani regional delicacies and continental favorites.',
    },
    {
      name: 'Game Zone',
      icon: 'sports_esports',
      description: 'Indoor games room suitable for all age groups and leisure breaks.',
    },
    {
      name: 'Badminton Court',
      icon: 'sports_tennis',
      description: 'Outdoor recreation court surrounded by natural greenery.',
    },
    {
      name: 'Bicycles & Trails',
      icon: 'pedal_bike',
      description: 'Complimentary bicycles to pedal around the tranquil resort perimeter.',
    },
    {
      name: 'Hill Trekking',
      icon: 'hiking',
      description: 'Gentle sunrise and sunset treks along nearby boulder ridges.',
    },
    {
      name: 'Outdoor Relaxation Areas',
      icon: 'park',
      description: 'Hammocks, shaded lawns, and starlit bonfire zones for unwind time.',
    },
  ],

  experience_links: [
    {
      title: 'Leopard Safari in Jawai',
      slug: 'jawai-leopard-safari',
      href: '/jawai-leopard-safari',
      tag: 'Apex Wildlife Drive',
      description:
        'Track wild leopards across granite boulder hills in private open 4x4 Gypsies led by experienced local trackers.',
      image: '/images/safari-hero.png',
    },
    {
      title: 'Jawai Bandh & Crocodile Spotting',
      slug: 'jawai-crocodile-spotting',
      href: '/jawai-crocodile-spotting',
      tag: 'Lake Sanctuary',
      description:
        'Visit the historic Jawai Dam reservoir to witness marsh crocodiles basking along sandy banks and granite outcrops.',
      image: '/images/sanctuary-hero.png',
    },
    {
      title: 'Rabari Village Experience',
      slug: 'jawai-village-experience',
      href: '/jawai-village-experience',
      tag: 'Living Heritage',
      description:
        'Walk through indigenous pastoral settlements to understand centuries-old peaceful coexistence with wildlife.',
      image: '/images/jawai-hero.png',
    },
    {
      title: 'Bird Watching Expeditions',
      slug: 'jawai-bird-watching',
      href: '/jawai-bird-watching',
      tag: 'Migratory Sanctuary',
      description:
        'Spot bar-headed geese, flamingos, sarus cranes, and raptors across the seasonal Jawai wetlands.',
      image: '/images/sanctuary-hero.png',
    },
    {
      title: 'Nature & Wildlife Photography',
      slug: 'jawai-wildlife-photography',
      href: '/jawai-wildlife-photography',
      tag: 'Master Frames',
      description:
        'Capture low-angle silhouettes of wildlife against golden sunset skies and monolithic stone formations.',
      image: '/images/celestial-hero.png',
    },
    {
      title: 'Hill & Wilderness Drives',
      slug: 'jawai-hill-drive',
      href: '/jawai-hill-drive',
      tag: 'Granite Thrills',
      description:
        'Navigate 45-degree granite slopes and secluded scrub forests in customized high-clearance 4x4 safari vehicles.',
      image: '/images/safari-hero.png',
    },
  ],

  why_stay: [
    {
      title: 'Privacy of Private Pool Villas',
      description:
        'Each villa at J Wild features its own private plunge pool and enclosed courtyard, offering rare personal space and tranquility away from crowded hotel corridors.',
    },
    {
      title: 'Mountain-Led Wilderness Setting',
      description:
        'Nestled directly against the rugged granite silhouette of Jawai, the resort grounds let you experience the raw beauty of Rajasthan while enjoying contemporary comforts.',
    },
    {
      title: 'Designed for Couples & Families',
      description:
        'With dedicated Luxury, Suite, and Two-Bedroom Family villas, the property caters thoughtfully to honeymooners, family reunions, and small travel parties alike.',
    },
    {
      title: 'Seamless Jawai Expedition Combos',
      description:
        'The resort serves as an ideal base for morning and dusk safaris, lake excursions, and village walks without long road transfers between activities.',
    },
    {
      title: 'Ghoomosa Coordinated Trip Planning',
      description:
        'Enjoy end-to-end trip planning with private safari gypsy allocations, seasoned trackers, customized itineraries, and responsive on-ground assistance.',
    },
  ],

  seo_title: 'J Wild Resort Jawai | Private Pool Villas, Photos & Booking',
  seo_description:
    'Explore J Wild Resort Jawai, a luxury private pool villa resort in Jawai, Rajasthan. View rooms, resort photos, videos, facilities and nearby Jawai experiences. Check availability with Ghoomosa.',
  canonical_url: 'https://ghoomosa.in/j-wild-resort-jawai',

  faq_items: [
    {
      question: 'Where is J Wild Resort Jawai located?',
      answer:
        'J Wild Resort Jawai is located in the Jawai region of Rajasthan, known for its rocky landscapes, wildlife experiences and Jawai Bandh.',
    },
    {
      question: 'Does J Wild Resort Jawai have private pools?',
      answer:
        'The resort offers private-pool villa accommodation. Availability depends on the selected room category and dates.',
    },
    {
      question: 'What room categories are available at J Wild Jawai?',
      answer:
        'The property offers Luxury Pool Villa, Suite Pool Villa and Family Two-Bedroom Pool Villa categories.',
    },
    {
      question: 'Is J Wild Jawai suitable for families?',
      answer:
        'Yes. The property includes family-oriented accommodation and can be considered for family Jawai trips, subject to occupancy and availability.',
    },
    {
      question: 'Can I combine my J Wild stay with a leopard safari?',
      answer:
        'Ghoomosa can help coordinate the stay with Jawai safari and other local experiences, subject to availability, local rules and operating conditions.',
    },
    {
      question: 'What can I experience near J Wild Resort Jawai?',
      answer:
        'Depending on the itinerary and availability, travellers can explore Jawai wildlife landscapes, Jawai Bandh, local village experiences, bird watching and other nature-led activities.',
    },
    {
      question: 'How much does J Wild Resort Jawai cost?',
      answer:
        'Rates vary by dates, villa category, occupancy, meal plan and seasonal conditions. Ghoomosa provides the current applicable quote on request.',
    },
    {
      question: 'How do I book J Wild Resort Jawai?',
      answer:
        'Use the Ghoomosa availability form or WhatsApp enquiry to share your travel dates and guest details.',
    },
  ],

  whatsapp_template:
    'Hi Ghoomosa, I would like to check availability for J Wild Resort Jawai.\nCheck-in: {checkin}\nCheck-out: {checkout}\nAdults: {adults}\nChildren: {children}\nPreferred Villa: {villa}\nPlease share the best available stay/package options.\nPage: {page_url}\nSource: {utm_source}',
  whatsapp_number: '+917300003101',
  is_featured: true,
  is_active: true,
  display_order: 1,
};
