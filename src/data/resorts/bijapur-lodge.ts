import { PropertyItem } from './types';

export const BIJAPUR_LODGE_JAWAI: PropertyItem = {
  property_name: 'Bijapur Lodge Jawai',
  slug: 'bijapur-lodge-jawai',
  destination_id: 'jawai',
  destination_name: 'Jawai, Pali Marwar, Rajasthan',
  eyebrow: 'Boutique Safari Lodge - Jawai Dam Region',
  hero_title_line: 'Luxury Wilderness Stay Near Jawai Dam',
  short_description:
    'A boutique wilderness lodge near the Jawai landscape combining spacious suites, leopard safari experiences, local culture, sustainability, farm-led dining and relaxed poolside living.',
  property_type: 'Boutique Wilderness & Safari Lodge',

  // STRICT COMMERCIAL INVARIANT: rates are never public
  pricing_mode: 'PRICE_ON_REQUEST',
  public_price: null,

  featured_image: '/images/resorts/bijapur-lodge/bijapur-lodge-jawai.webp',
  hero_image: '/images/resorts/bijapur-lodge/bijapur-lodge-jawai.webp',

  about_paragraphs: [
    'Bijapur Lodge Jawai is a boutique wilderness retreat near the Jawai Reservoir in Rajasthan, created for travellers who want a close connection with the region’s granite hills, wildlife, local communities and open landscapes without giving up comfort.',
    'Spread across a nature-led property, the lodge combines spacious suites, a swimming pool, safari experiences, birding, local food, sundowners and cultural interactions. The setting makes it suitable for wildlife travellers, couples, families, photographers and guests planning a slower luxury escape in Jawai.',
    'Ghoomosa can combine the stay with leopard safari, Jawai sightseeing, cultural experiences and custom trip planning based on travel dates, group size and availability.',
  ],

  verified_facts: [
    'Boutique wilderness property spread over approximately 5 acres in Pali Marwar',
    'Exclusive low-density inventory of just 6 luxury suites ensuring quiet privacy',
    'Spacious suite footprint of approx. 550 sq. ft. with private garden courtyards',
    'Large swimming pool set amidst indigenous tree plantations and open lawns',
    'Farm-to-table culinary philosophy featuring estate-grown herbs and regional cuisines',
    'Convenient base for morning and dusk leopard tracking, wetland birding, and Rabari cultural trails',
  ],

  quick_facts: [
    { label: 'Location', value: 'Near Jawai Reservoir, Pali Marwar, Rajasthan' },
    { label: 'Stay Type', value: 'Boutique wilderness / safari lodge' },
    { label: 'Suites', value: '6 luxury suites (~550 sq. ft.)' },
    { label: 'Suitable For', value: 'Wildlife travellers, couples, families, photographers' },
    { label: 'Pricing', value: 'Price on Request' },
    { label: 'Booking Through', value: 'Ghoomosa enquiry' },
  ],

  highlights: [
    '6 luxury suites',
    'Approx. 550 sq. ft. suite size',
    'Swimming pool',
    'Leopard safari experiences',
    'Birding and wildlife activities',
    'Local/Rabari cultural experiences',
    'Sundowners, picnics and stargazing',
    'Sustainability-focused hospitality',
  ],

  room_categories: [
    {
      room_name: 'Luxury Wilderness Suite',
      room_slug: 'luxury-wilderness-suite',
      short_description:
        'Spacious suites at Bijapur Lodge blend modern comfort with a quiet wilderness setting. Large windows and garden courtyards connect the interiors with the surrounding Jawai landscape, while in-room amenities support a comfortable safari stay.',
      occupancy_text: '2 Adults (Extra bed for child/third guest on request)',
      bedroom_count: 1,
      bathroom_count: 1,
      bed_type: 'King-sized bed',
      approx_size: 'Approx. 550 sq. ft.',
      room_size: 'Approx. 550 sq. ft.', // Verified in fact sheet
      private_pool: false,
      mountain_view: true,
      gallery_images: [
        '/images/resorts/bijapur-lodge/bijapur-lodge-jawai-suite.webp',
        '/images/resorts/bijapur-lodge/bijapur-lodge-jawai-courtyard.webp',
        '/images/resorts/bijapur-lodge/bijapur-lodge-swimming-pool-jawai.webp',
      ],
      feature_list: [
        'Spacious ~550 sq. ft. layout with private garden courtyard',
        'Plush king-size bed with bespoke linens',
        'Generous picture windows overlooking grassland and hinterland',
        'Large en-suite bathroom with luxury rain shower & vanity',
        'High-speed Wi-Fi, air conditioning, minibar & coffee/tea maker',
        // TODO: Verify if personalized butler service is active for all seasonal bookings before publishing
        'Attentive personalized service and safari wake-up refreshments',
      ],
      display_order: 1,
      is_active: true,
    },
  ],

  gallery: [
    {
      id: 'bjp-gal-1',
      url: '/images/resorts/bijapur-lodge/bijapur-lodge-jawai.webp',
      alt: 'Bijapur Lodge Jawai exterior and landscaped gardens',
      category: 'Property',
      width: 1280,
      height: 853,
      caption: 'Boutique 5-acre estate setting near Jawai Reservoir',
    },
    {
      id: 'bjp-gal-2',
      url: '/images/resorts/bijapur-lodge/bijapur-lodge-jawai-suite.webp',
      alt: 'Bijapur Lodge Jawai luxury suite interior with king bed',
      category: 'Suites',
      width: 1280,
      height: 853,
      caption: 'Spacious 550 sq. ft. suite with quiet garden outlook',
    },
    {
      id: 'bjp-gal-3',
      url: '/images/resorts/bijapur-lodge/bijapur-lodge-swimming-pool-jawai.webp',
      alt: 'Swimming pool at Bijapur Lodge Jawai with sun loungers',
      category: 'Pool',
      width: 1280,
      height: 853,
      caption: 'Outdoor swimming pool surrounded by tranquil trees',
    },
    {
      id: 'bjp-gal-4',
      url: '/images/resorts/bijapur-lodge/bijapur-lodge-jawai-dining.webp',
      alt: 'Outdoor dining experience at Bijapur Lodge Jawai',
      category: 'Dining & Leisure',
      width: 1280,
      height: 853,
      caption: 'Farm-led dining featuring seasonal regional cuisines',
    },
    {
      id: 'bjp-gal-5',
      url: '/images/resorts/bijapur-lodge/bijapur-lodge-leopard-safari-jawai.webp',
      alt: 'Safari landscape near Bijapur Lodge Jawai with 4x4 Gypsy',
      category: 'Safari',
      width: 1280,
      height: 853,
      caption: 'Open Gypsy game drives across nearby granite boulder kopjes',
    },
    {
      id: 'bjp-gal-6',
      url: '/images/resorts/bijapur-lodge/bijapur-lodge-jawai-sundowner.webp',
      alt: 'Evening sundowner and stargazing setup in Jawai',
      category: 'Details',
      width: 1280,
      height: 853,
      caption: 'Sunset vantage point overlooking the scrub wilderness',
    },
    {
      id: 'bjp-gal-7',
      url: '/images/resorts/bijapur-lodge/bijapur-lodge-jawai-courtyard.webp',
      alt: 'Garden courtyard at Bijapur Lodge Jawai',
      category: 'Property',
      width: 1280,
      height: 853,
      caption: 'Private verandahs and lush courtyards for quiet leisure',
    },
  ],

  videos: [], // No official crawlable video hosted yet; flagged for future addition

  amenities: [
    { name: 'Swimming Pool', icon: 'pool', description: 'Centrally located pool for midday relaxation between safaris.' },
    { name: 'Play Area & Lawns', icon: 'sports_soccer', description: 'Outdoor recreational lawn space for leisurely walks.' },
    { name: 'Complimentary Wi-Fi', icon: 'wifi', description: 'Reliable wireless connectivity across suites and lounge.' },
    { name: 'On-site Birding with Naturalist', icon: 'flutter_dash', description: 'Expert guided bird walks spotting native scrub species.' },
    { name: 'Nature & Wildlife Library', icon: 'menu_book', description: 'Curated selection of Indian wildlife books and flora guides.' },
    { name: 'Air-Conditioned Suites', icon: 'ac_unit', description: 'Individual climate control for year-round comfort.' },
    { name: 'Private Garden Courtyard', icon: 'yard', description: 'Dedicated personal sit-out framing open hinterlands.' },
    { name: 'Dining & Bar Spaces', icon: 'restaurant', description: 'Intimate dining room with interactive kitchen access.' },
    { name: 'Bush & Lakeside Dining', icon: 'outdoor_grill', description: 'Special outdoor barbecue and bush dinners subject to weather.' },
    { name: 'Bonfire & Stargazing', icon: 'local_fire_department', description: 'Evening gathering by open fire beneath unpolluted skies.' },
  ],

  dining_section: {
    title: 'Farm-Led Dining & Wilderness Experiences',
    subtitle: 'Estate Harvests & Regional Flavours',
    description:
      'Bijapur Lodge highlights a farm-to-table approach, with herbs and vegetables grown on the property and additional produce sourced through local communities. Dining can include regional Indian cuisines alongside selected international flavours, with experiences ranging from intimate meals to outdoor settings such as bush dinners and lakeside barbecues.',
    highlights: [
      'Authentic Rajasthani & Mewari specialties prepared with estate-fresh herbs',
      'Gujarati and regional Marwari vegetarian heritage recipes',
      'Select Hyderabadi culinary classics and continental comfort courses',
      'Indoor fireplace dining and warm communal lounge ambience',
      'Interactive open kitchen engaging guests with resident culinary chefs',
      'Special bush dinners and lakeside barbecues arranged upon request',
    ],
    image: '/images/resorts/bijapur-lodge/bijapur-lodge-jawai-dining.webp',
  },

  experience_links: [
    {
      title: 'Jawai Leopard Safari',
      slug: 'jawai-leopard-safari',
      href: '/jawai-leopard-safari',
      tag: 'Big Cat Tracking',
      description:
        'Track wild leopards across monolithic granite ridges in open 4x4 Gypsies with seasoned local spotters.',
      image: '/images/safari-hero.png',
    },
    {
      title: 'Bird Watching in Jawai',
      slug: 'jawai-bird-watching',
      href: '/jawai-bird-watching',
      tag: 'Wetland Habitats',
      description:
        'Explore the seasonal wetlands of Jawai Dam hosting migratory flamingos, cranes, pelicans, and raptors.',
      image: '/images/sanctuary-hero.png',
    },
    {
      title: 'Jawai Dam & Reservoir Excursions',
      slug: 'jawai-dam',
      href: '/jawai-dam',
      tag: 'Historic Landmark',
      description:
        'Visit western Rajasthan’s largest reservoir to spot marsh crocodiles basking on granite water-edges.',
      image: '/images/jawai-hero.png',
    },
    {
      title: 'Wildlife Photography Trails',
      slug: 'jawai-wildlife-photography',
      href: '/jawai-wildlife-photography',
      tag: 'Golden Hour Angles',
      description:
        'Capture predator silhouettes against dramatic sunset skies and prehistoric granite boulder landscapes.',
      image: '/images/celestial-hero.png',
    },
  ],

  culture_section: {
    title: 'Culture & Local Experiences',
    subtitle: 'Living Heritage of the Jawai Belt',
    description:
      'Immerse in the timeless pastoral rhythm of southern Rajasthan with respect and local sensitivity.',
    experiences: [
      'Rabari shepherd community interaction rooted in centuries of peaceful wildlife coexistence',
      'Visits to traditional artisan villages and local textile craft centers',
      'Secluded jungle picnics amidst ancient banyan trees and dry riverbeds',
      'Hilltop and lakeside sunset sundowners framing panoramic granite kopjes',
      'Scenic jeep drives through raw countryside and boulder-flanked village pathways',
      'Outdoor sunrise breakfast setups near the Jawai Dam shoreline',
      'Evening acoustic folk music gatherings around the central bonfire',
      'Stargazing sessions under Rajasthan’s clear, low-pollution night skies',
      'Cycling trails along peaceful perimeter village lanes',
      'Excursions to historic regional temples sculpted into stone caves',
    ],
  },

  sustainability_section: {
    title: 'Property-Led Sustainability Initiatives',
    subtitle: 'Eco-Minded Wilderness Hospitality',
    description:
      'Bijapur Lodge incorporates mindful architectural and operational practices that honor the sensitive Jawai ecosystem.',
    initiatives: [
      'Extensive indigenous tree plantation and micro-habitat regeneration across the 5-acre estate',
      'Reuse of traditional clay roof tiles salvaged from regional vernacular architecture',
      'Reclaimed seasoned timber from historic structures repurposed for doors and ceiling rafters',
      'Solar energy integration supporting daytime resort power requirements',
      'Rainwater harvesting structures designed to recharge local subterranean aquifers',
      'Greywater filtration and conscious irrigation management for estate gardens',
      'Direct local sourcing of farm ingredients providing fair livelihood to nearby village farmers',
    ],
    note: 'These practices are self-reported property initiatives and are not presented as third-party environmental certifications.',
  },

  why_stay: [
    {
      title: 'Intimate Boutique Scale (~5 Acres, 6 Suites)',
      description:
        'With only 6 private suites across 5 acres of grounds, guests enjoy rare tranquility, spaciousness, and unhurried personalized attention.',
    },
    {
      title: 'Spacious 550 Sq. Ft. Suites & Courtyards',
      description:
        'Each suite provides generous interiors, king bedding, private garden courtyards, and picture windows framing the open wilderness.',
    },
    {
      title: 'Farm-to-Table Gastronomy',
      description:
        'Savor fresh estate-grown produce, authentic Marwari and Rajasthani recipes, and custom outdoor dining experiences.',
    },
    {
      title: 'All-Round Wildlife & Birding Immersion',
      description:
        'Positioned conveniently for both boulder leopard safaris and the waterbird habitats of the Jawai Reservoir.',
    },
    {
      title: 'Seamless Ghoomosa Trip Coordination',
      description:
        'Benefit from dedicated private 4x4 safari allocations, expert naturalists, regional transfers, and responsive itinerary support.',
    },
  ],

  location_getting_there: {
    title: 'Location & Getting to Bijapur Lodge',
    description:
      'Bijapur Lodge is situated near the Jawai Reservoir in the Pali Marwar district of southern Rajasthan, providing swift road connectivity to major transport hubs.',
    distance_info: [
      'Udaipur Maharana Pratap Airport (UDR): Approx. 120 km (~2.5 hours via NH27)',
      'Jodhpur Airport (JDH): Approx. 150 km (~3 hours via NH62)',
      'Ahmedabad Sardar Vallabhbhai Patel Airport (AMD): Approx. 280 km (~5 hours by road)',
      'Jawai Bandh Railway Station (JWB): Approx. 18 km (~30 minutes transfer)',
    ],
    itinerary_steps: [
      {
        day: 'Day 1',
        title: 'Arrival & Sundowner Orientation',
        text: 'Check into your suite. Unwind by the pool followed by a tranquil sunset sundowner and farm-fresh dinner.',
      },
      {
        day: 'Day 2',
        title: 'Dawn Leopard Safari & Dam Excursion',
        text: 'Early morning 4x4 leopard safari in the granite hills. Midday leisure and on-site birding. Afternoon excursion to Jawai Dam.',
      },
      {
        day: 'Day 3',
        title: 'Village Walk & Forward Departure',
        text: 'Gentle sunrise cycle trail or Rabari village walk. Breakfast at the lodge followed by onward transfer.',
      },
    ],
  },

  form_config: {
    show_safari_checkbox: true,
    show_pickup_checkbox: true,
    preferred_stay_label: 'Preferred Suite Option',
  },

  cross_link_properties: [
    {
      name: 'J Wild Resort Jawai',
      slug: 'j-wild-resort-jawai',
      tag: 'Private Pool Villas',
      image: '/images/resorts/j-wild/j-wild-resort-jawai.webp',
      description: 'Luxury 11 private pool villas with mountain views and outdoor courtyards.',
    },
    {
      name: 'Jawai Pugmark Safari Lodge',
      slug: 'jawai-pugmark-safari-lodge',
      tag: 'Cottages & Luxury Tents',
      image: '/images/resorts/jawai-pugmark/jawai-pugmark-safari-lodge.webp',
      description: 'Nature-focused safari lodge in Sena featuring cottages, luxury tents, and pool.',
    },
    {
      name: 'SUJAN JAWAI',
      slug: 'sujan-jawai',
      tag: 'Ultra-Luxury Safari Camp',
      image: '/images/resorts/sujan-jawai/sujan-jawai-luxury-safari-camp.webp',
      description: 'Exclusive 10-tent conservation-led luxury camp in Bisalpur with private pool suites and wilderness drives.',
    },
  ],

  seo_title: 'Bijapur Lodge Jawai | Luxury Safari Resort & Leopard Safari Stay',
  seo_description:
    'Explore Bijapur Lodge Jawai, a boutique luxury safari lodge near Jawai Dam. View suites, pool, dining, wildlife experiences and photos. Check availability with Ghoomosa.',
  canonical_url: 'https://ghoomosa.in/bijapur-lodge-jawai',

  faq_items: [
    {
      question: 'Where is Bijapur Lodge located?',
      answer:
        'Bijapur Lodge is situated near the Jawai Reservoir / Jawai Dam region in Pali Marwar, Rajasthan.',
    },
    {
      question: 'How many suites does Bijapur Lodge Jawai have?',
      answer: 'The current official accommodation page describes 6 suites.',
    },
    {
      question: 'What is the approximate suite size?',
      answer: 'The current property fact sheet lists suites at approximately 550 sq. ft.',
    },
    {
      question: 'Does Bijapur Lodge offer leopard safari experiences?',
      answer:
        'The property promotes guided leopard safari and wildlife experiences. Ghoomosa can coordinate safari planning subject to availability and local operating conditions.',
    },
    {
      question: 'Does Bijapur Lodge have a swimming pool?',
      answer:
        'Yes, the property’s public website lists a swimming pool among its hospitality facilities.',
    },
    {
      question: 'Is Bijapur Lodge suitable for bird watching?',
      answer:
        'The property promotes on-site birding and birding trips in the Jawai region.',
    },
    {
      question: 'What is the price of Bijapur Lodge Jawai?',
      answer:
        'Rates vary by travel date, occupancy, package and seasonal availability. Ghoomosa shares current pricing on request.',
    },
    {
      question: 'Can Ghoomosa arrange stay plus safari?',
      answer:
        'Yes. Ghoomosa can prepare a combined stay, safari and local experience quotation based on your travel requirements.',
    },
    {
      question: 'How far is Bijapur Lodge from Udaipur?',
      answer:
        'The current property fact sheet lists Udaipur airport at approximately 120 km / around 2.5 hours by road.',
    },
  ],

  whatsapp_template:
    'Hi Ghoomosa,\nI want to check Bijapur Lodge Jawai availability.\nCheck-in: {checkin}\nCheck-out: {checkout}\nAdults: {adults}\nChildren: {children}\nSafari Required: {safari}\nPickup Required: {pickup}\nPlease share the best available stay and Jawai package options.\nProperty: Bijapur Lodge Jawai\nPage: {page_url}\nSource: {utm_source}',
  whatsapp_number: '+917300003101',
  nearby_attractions: [
    {
      name: 'Jawai Dam & Reservoir',
      distance: 'Approx. 12 km',
      description: 'Western Rajasthan’s largest dam reservoir, famous for basking marsh crocodiles and migratory flamingos.',
      link: '/jawai-dam',
    },
    {
      name: 'Ranakpur Jain Temple',
      distance: 'Approx. 45 km',
      description: '15th-century marble temple complex renowned worldwide for its 1,444 uniquely carved marble pillars.',
      link: '/ranakpur-jain-temple-near-jawai',
    },
    {
      name: 'Ranakpur Dam',
      distance: 'Approx. 48 km',
      description: 'Scenic freshwater reservoir framed by forested Aravalli foothills.',
      link: '/ranakpur-dam-near-jawai',
    },
    {
      name: 'Kumbhalgarh Fort',
      distance: 'Approx. 58 km',
      description: 'UNESCO World Heritage hill fortress featuring a 36-km stone wall and Mewar history.',
      link: '/kumbhalgarh-fort-from-jawai',
    },
  ],
  is_featured: true,
  is_active: true,
  display_order: 2,
};
