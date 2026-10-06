import { PropertyItem } from './types';

// TODO: Re-verify current suite square footage, capacity, and full-board inclusions with official SUJAN website/property team before publishing live marketing collateral.
// Verified from thesujanlife.com and Relais & Châteaux: 10 tented suites total; full board; heated outdoor pool; Panthera and Eden private pools.

export const SUJAN_JAWAI: PropertyItem = {
  property_name: 'SUJAN JAWAI',
  slug: 'sujan-jawai',
  destination_id: 'jawai',
  destination_name: 'Bisalpur / Jawai, Rajasthan',
  eyebrow: 'Ultra-Luxury Safari Camp • Relais & Châteaux',
  hero_title_line: 'Conservation-Led Luxury in Rajasthan’s Leopard Country',
  brand_notice: 'Stay & Jawai trip enquiry by Ghoomosa.',
  short_description:
    'An intimate tented wilderness experience among Jawai’s granite hills, combining expert-guided safari drives, refined hospitality, local culture and extraordinary privacy.',
  about_paragraphs: [
    'SUJAN JAWAI is an intimate luxury tented safari camp set within Rajasthan’s dramatic Jawai landscape, where granite hills, open scrub, reservoir habitats, rural communities and wildlife come together in one of India’s most distinctive wilderness regions.',
    'The camp is known for combining conservation-led tourism with highly refined hospitality. Guests can explore Jawai through expert-guided wilderness drives, birding, village walks, hikes, horse riding and meaningful interactions with local communities, then return to spacious private tented suites designed for privacy and connection with nature.',
    'For travellers planning a complete Jawai journey, Ghoomosa can combine SUJAN JAWAI with transfers, local exploration and custom travel planning based on dates, group size and availability.',
  ],
  verified_facts: [
    'Pioneering conservation tourism model in Jawai embedded directly among billion-year-old granite kopjes',
    'Intimate scale: strictly 10 tented suites and private encampment options in total',
    'Distinctive suite categories: Tented Rock Suites, Family Felidae Suite, Royal Panthera Suite with private heated pool, and Eden at Jawai three-bedroom private camp',
    'Positioned as a Relais & Châteaux sustainable luxury wilderness property with full-board hospitality',
    'Twice-daily expert-guided wilderness drives and naturalists exploring the wider ecosystem',
    'Diverse outdoor experiences: birdwatching, village walks, granite hikes, horseback riding and Rabari cultural interaction',
  ],
  property_type: 'Ultra-Luxury Safari Camp / Conservation Retreat',

  // STRICT COMMERCIAL INVARIANT: rates are never public
  pricing_mode: 'PRICE_ON_REQUEST',
  public_price: null,

  featured_image: '/images/resorts/sujan-jawai/sujan-jawai-luxury-safari-camp.webp',
  hero_image: '/images/resorts/sujan-jawai/sujan-jawai-granite-landscape.webp',

  quick_facts: [
    { label: 'Location', value: 'Bisalpur / Jawai, Pali district, Rajasthan' },
    { label: 'Stay Type', value: 'Ultra-luxury tented safari camp / Relais & Châteaux' },
    { label: 'Tents & Encampments', value: '10 tented suites / private encampments' },
    { label: 'Suitable For', value: 'Couples, honeymooners, families, small groups, wildlife travellers' },
    { label: 'Pricing', value: 'Price on Request' },
    { label: 'Booking Coordination', value: 'Ghoomosa stay & trip planning' },
  ],

  highlights: [
    'Only 10 tented suites / private encampments',
    'Tented Rock Suites',
    'Family Felidae Suite',
    'Royal Panthera Suite with private heated pool',
    'Eden at Jawai - three-bedroom private encampment with private pool',
    'Wilderness drives and expert naturalists',
    'Birding, hikes, village walks and horse riding',
    'Relais & Châteaux positioning',
    'Full-board luxury experience',
  ],

  room_categories: [
    {
      room_name: 'Tented Rock Suite',
      room_slug: 'tented-rock-suite',
      short_description:
        'Signature luxury tent for couples seeking privacy and direct wilderness views.',
      capacity: 'Sleeps 2',
      occupancy_text: '2 Guests',
      bed_type: 'King Bed',
      size_sqft: '1,141 sq ft',
      size_sqm: '106 sqm',
      approx_size: 'Approx. 1,141 sq. ft. (106 sqm)',
      private_pool: false,
      last_verified_at: '2026-10-06',
      source_note: 'Relais & Châteaux / Official SUJAN listing (approximate dimensions)',
      gallery_images: [
        '/images/resorts/sujan-jawai/sujan-jawai-rock-suite.webp',
        '/images/resorts/sujan-jawai/sujan-jawai-luxury-safari-camp.webp',
      ],
      feature_list: [
        'Private outdoor deck with panoramic wilderness views',
        'Spacious canvas interior with writing desk and bespoke leather lounge furniture',
        'En-suite bathroom with luxury shower and twin vanities',
        'Individual climate control for year-round comfort',
      ],
      display_order: 1,
      is_active: true,
    },
    {
      room_name: 'Family Felidae Suite',
      room_slug: 'family-felidae-suite',
      short_description:
        'Premium family / friends option with two-tent layout and wilderness views.',
      capacity: 'Families & Groups',
      occupancy_text: 'Up to 4-5 Guests',
      bed_type: '2 King Beds',
      size_sqft: '2,282 sq ft',
      size_sqm: '212 sqm',
      approx_size: 'Approx. 2,282 sq. ft. (212 sqm)',
      private_pool: false,
      last_verified_at: '2026-10-06',
      source_note: 'Relais & Châteaux / Official SUJAN listing (approximate dimensions)',
      gallery_images: [
        '/images/resorts/sujan-jawai/sujan-jawai-felidae-family-suite.webp',
        '/images/resorts/sujan-jawai/sujan-jawai-rock-suite.webp',
      ],
      feature_list: [
        'Two connected luxury tents sharing a common plinth and private verandah',
        'Two separate en-suite bathrooms for family independence',
        'Expansive shared outdoor living deck framing granite kopjes',
        'Personalised family stay amenities and naturalist briefings',
      ],
      display_order: 2,
      is_active: true,
    },
    {
      room_name: 'Royal Panthera Suite',
      room_slug: 'royal-panthera-suite',
      short_description:
        'High-end romantic/private stay with private heated pool; ideal for honeymoon or special occasion.',
      capacity: 'Sleeps 2',
      occupancy_text: 'Romantic / Honeymoon Privacy',
      bed_type: 'King Bed',
      size_sqft: '2,680 sq ft',
      size_sqm: '249 sqm',
      approx_size: 'Approx. 2,680 sq. ft. (249 sqm)',
      private_pool: true,
      last_verified_at: '2026-10-06',
      source_note: 'Relais & Châteaux / Official SUJAN listing (approximate dimensions)',
      gallery_images: [
        '/images/resorts/sujan-jawai/sujan-jawai-panthera-suite-private-pool.webp',
        '/images/resorts/sujan-jawai/sujan-jawai-rock-suite.webp',
      ],
      feature_list: [
        'Private heated swimming pool overlooking boulder hills',
        'Dedicated private lounge and dining tent for intimate dining',
        'Secluded elevated positioning for maximum romantic privacy',
        'Private butler service and bespoke bush dining setups',
      ],
      display_order: 3,
      is_active: true,
    },
    {
      room_name: 'Eden at Jawai',
      room_slug: 'eden-at-jawai',
      short_description:
        'Top-tier private camp for families / groups seeking maximum seclusion.',
      capacity: 'Exclusive Encampment',
      occupancy_text: 'Three-Bedroom Private Encampment',
      bed_type: '3 King Beds',
      size_sqft: '4,672 sq ft',
      size_sqm: '434 sqm',
      approx_size: 'Approx. 4,672 sq. ft. (434 sqm)',
      private_pool: true,
      last_verified_at: '2026-10-06',
      source_note: 'Relais & Châteaux / Official SUJAN listing (approximate dimensions)',
      gallery_images: [
        '/images/resorts/sujan-jawai/sujan-jawai-eden-private-camp.webp',
        '/images/resorts/sujan-jawai/sujan-jawai-panthera-suite-private-pool.webp',
      ],
      feature_list: [
        'Private three-bedroom encampment with exclusive entrance',
        'Private swimming pool and traditional boma campfire area',
        'Bespoke private lounge tent and dining pavilions',
        'Dedicated camp staff, private tracker and dedicated 4x4 safari vehicles',
      ],
      display_order: 4,
      is_active: true,
    },
  ],

  gallery: [
    {
      id: 'sujan-gal-1',
      url: '/images/resorts/sujan-jawai/sujan-jawai-luxury-safari-camp.webp',
      alt: 'SUJAN JAWAI luxury tented safari camp and boulder landscape',
      category: 'Property',
      width: 1280,
      height: 853,
      caption: 'Intimate tented camp set against ancient granite kopjes in Bisalpur',
    },
    {
      id: 'sujan-gal-2',
      url: '/images/resorts/sujan-jawai/sujan-jawai-rock-suite.webp',
      alt: 'Tented Rock Suite interior with canvas lounge at SUJAN JAWAI',
      category: 'Suites',
      width: 1280,
      height: 853,
      caption: 'Tented Rock Suite blending industrial canvas architecture and refined comfort',
    },
    {
      id: 'sujan-gal-3',
      url: '/images/resorts/sujan-jawai/sujan-jawai-felidae-family-suite.webp',
      alt: 'Family Felidae Suite two-tent layout at SUJAN JAWAI',
      category: 'Suites',
      width: 1280,
      height: 853,
      caption: 'Family Felidae Suite with connected plinth and shared outdoor deck',
    },
    {
      id: 'sujan-gal-4',
      url: '/images/resorts/sujan-jawai/sujan-jawai-panthera-suite-private-pool.webp',
      alt: 'Royal Panthera Suite private heated pool at SUJAN JAWAI',
      category: 'Pool',
      width: 1280,
      height: 853,
      caption: 'Private heated swimming pool in the secluded Royal Panthera Suite',
    },
    {
      id: 'sujan-gal-5',
      url: '/images/resorts/sujan-jawai/sujan-jawai-eden-private-camp.webp',
      alt: 'Eden at Jawai three-bedroom private encampment and pool',
      category: 'Suites',
      width: 1280,
      height: 853,
      caption: 'Exclusive three-bedroom Eden at Jawai private wilderness encampment',
    },
    {
      id: 'sujan-gal-6',
      url: '/images/resorts/sujan-jawai/sujan-jawai-leopard-safari.webp',
      alt: 'Open 4x4 wilderness drive in Jawai leopard country',
      category: 'Safari',
      width: 1280,
      height: 853,
      caption: 'Expert-guided wilderness drives across monolithic granite kopjes',
    },
    {
      id: 'sujan-gal-7',
      url: '/images/resorts/sujan-jawai/sujan-jawai-birding.webp',
      alt: 'Birdwatching near Jawai Reservoir wetlands with naturalists',
      category: 'Destination',
      width: 1280,
      height: 853,
      caption: 'Waterbird watching along the seasonal shorelines of Jawai Reservoir',
    },
    {
      id: 'sujan-gal-8',
      url: '/images/resorts/sujan-jawai/sujan-jawai-camp-dining.webp',
      alt: 'Outdoor campfire dining under the stars at SUJAN JAWAI',
      category: 'Dining & Leisure',
      width: 1280,
      height: 853,
      caption: 'Campfire dining and regional Rajasthani gastronomy under open skies',
    },
  ],

  videos: [], // Crawlable video with stable poster to be added when supplied

  amenities: [
    { name: 'Heated Outdoor Pool', icon: 'pool', description: 'Central heated outdoor pool overlooking the granite boulder landscapes.' },
    { name: 'Wilderness Spa & Wellness', icon: 'spa', description: 'Curated wellness pavilions offering holistic massages and organic treatments.' },
    { name: 'Full-Board Dining', icon: 'restaurant', description: 'Gourmet regional and international dining with estate-fresh ingredients (subject to quote).*' },
    { name: 'Wi-Fi Connectivity', icon: 'wifi', description: 'High-speed wireless connectivity provided throughout suites and lounge spaces.*' },
    { name: 'Climate-Controlled Suites', icon: 'ac_unit', description: 'Year-round heating and air conditioning tailored to desert temperature shifts.*' },
    { name: 'Yoga & Meditation Decks', icon: 'self_improvement', description: 'Morning guided yoga sessions on open decks facing ancient kopjes.' },
    { name: 'Cycling & Mountain Biking', icon: 'pedal_bike', description: 'Guided off-road cycling excursions across rural tracks and scrub paths.' },
    { name: 'Granite Hill Hikes', icon: 'hiking', description: 'Naturalist-led walking excursions exploring rock formations, fissures and caves.' },
    { name: 'Horseback Riding', icon: 'pets', description: 'Guided riding across sand riverbeds, pastures and kopje foothills.' },
    { name: 'Expert Birdwatching Outings', icon: 'flutter_dash', description: 'Shoreline excursions observing flamingos, migratory cranes and resident raptors.' },
    { name: 'Rabari Community Walks', icon: 'groups', description: 'Meaningful, respectful guided village visits with indigenous shepherd families.' },
    { name: 'Twice-Daily Safari Drives', icon: 'directions_car', description: 'Custom open 4x4 vehicles with senior naturalists interpreting ecology and wildlife.' },
    { name: 'Junior Rangers Program', icon: 'child_care', description: 'Engaging wildlife and tracking activities tailored for young wilderness explorers.*' },
    { name: 'Secure On-Site Parking', icon: 'local_parking', description: 'Private secure parking facilities for road-travelling guests.*' },
  ],

  nature_birding_section: {
    title: 'Avian Diversity & Wetland Exploration',
    subtitle: 'Birding in Jawai',
    description:
      'The vast catchment of the Jawai Reservoir and surrounding seasonal scrub wetlands host an extraordinary variety of birdlife. Guests at SUJAN JAWAI can embark on specialized birding outings with camp naturalists, exploring shoreline habitats where migratory flamingos, cranes, bar-headed geese, raptors and resident waders congregate.',
    highlights: [
      'Guided shorebird drives across the scenic Jawai Dam reservoir shoreline',
      'Seasonal observation of greater flamingos, demoiselle cranes, and pelicans',
      'Resident raptor observation including fish eagles, harriers, and prairie falcons',
      'Dawn walks equipped with binoculars and spotting scopes for avian photography',
    ],
    image: '/images/resorts/sujan-jawai/sujan-jawai-birding.webp',
  },

  activities_section: {
    title: 'Active Wilderness Pursuits & Granite Trails',
    subtitle: 'Beyond Vehicle Safaris',
    description:
      'Beyond open vehicle drives, Jawai’s billion-year-old terrain invites deeper foot and equestrian exploration. SUJAN JAWAI offers active wilderness pursuits led by experienced trackers and guides.',
    activities: [
      {
        title: 'Horse Riding Adventures',
        description:
          'Guided horseback rides across open grasslands, dry sand riverbeds, and around ancient granite kopje foothills.',
      },
      {
        title: 'Granite Hill Hikes & Walks',
        description:
          'Morning and late-afternoon hikes exploring granite crevices, rock caves, and elevated ridge vantage points.',
      },
      {
        title: 'Rabari Community Village Wander',
        description:
          'Respectful, guided walks through rural settlements interacting with indigenous Rabari pastoralists in their traditional pastoral rhythms.',
      },
      {
        title: 'Sacred Hilltop Temple Trails',
        description:
          'Exploration of historic shrines and cave temples carved into granite boulder formations overlooking the valleys.',
      },
      {
        title: 'Landscape Photography Sessions',
        description:
          'Golden-hour vantage points capturing dramatic light across scrublands, granite boulders, and reflective reservoir waters.',
      },
      {
        title: 'Evening Stargazing Sessions',
        description:
          'Unpolluted night skies revealing constellations and desert astronomy accompanied by resident camp naturalists.',
      },
    ],
  },

  dining_section: {
    title: 'Dining & Full-Board Wilderness Gastronomy',
    subtitle: 'Farm-Fresh Regional Flavours & Campfire Evenings',
    description:
      'SUJAN JAWAI is listed by Relais & Châteaux as full board, with cuisine blending authentic Rajasthani specialities with Western influences using fresh local and organic ingredients. Dining can be communal or arranged in intimate outdoor settings depending on the stay experience.',
    highlights: [
      'Farm-to-table culinary philosophy utilising organic estate harvests and regional Marwari produce',
      'Authentic Mewari and royal Rajput recipes alongside sophisticated Western courses',
      'Intimate outdoor bush dinners and live campfire grill atmospheres under unpolluted stars',
      'Sunset high tea and aperitif setups overlooking the dramatic granite hills',
      'Dedicated vegetarian, vegan, and personalised dietary preparations by master chefs',
    ],
    image: '/images/resorts/sujan-jawai/sujan-jawai-camp-dining.webp',
  },

  sustainability_section: {
    title: 'Conservation-Led Tourism & Responsible Travel',
    subtitle: 'Pioneering Human-Wildlife Coexistence',
    description:
      'SUJAN JAWAI is fundamentally rooted in conservation tourism, proving that responsible luxury can directly protect biodiversity, regenerate wildlife habitats, and support traditional local livelihoods without disrupting nature.',
    initiatives: [
      'Community-led coexistence model fostering peaceful harmony between wild leopards and local shepherds',
      'Habitat stewardship and ecosystem preservation across ancient granite kopje scrublands',
      'Direct local employment, skill advancement, and support for local rural schools and clinics',
      'Low-impact, low-density camp architecture maintaining pristine wilderness integrity',
    ],
    note: 'Ghoomosa actively advocates responsible wildlife travel. Wildlife sightings are never guaranteed and depend on natural conditions.',
  },

  why_stay: [
    {
      title: 'Only 10 Tented Suites',
      description:
        'Maximum exclusivity and privacy with strictly 10 tented accommodations across a private wilderness expanse.',
    },
    {
      title: 'Pioneering Conservation Heritage',
      description:
        'Recognised Relais & Châteaux property established on proven coexistence and sustainable wilderness protection.',
    },
    {
      title: 'Private Heated Pool Suites',
      description:
        'Unmatched luxury in the Royal Panthera Suite and Eden at Jawai private encampment featuring heated private pools.',
    },
    {
      title: 'Comprehensive Wilderness Drives',
      description:
        'Expert-guided twice-daily drives interpreting ecology, geology, fauna, and local Rabari heritage.',
    },
    {
      title: 'Diverse Outdoor Activities',
      description:
        'Horse riding, mountain biking, birdwatching, granite hiking, and meaningful community interactions.',
    },
    {
      title: 'Seamless Ghoomosa Trip Coordination',
      description:
        'Complete end-to-end Jawai planning combining bespoke transfers, safari allocations, and personalized itineraries.',
    },
  ],

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
      title: 'Jawai Tour Packages',
      slug: 'jawai-tour-packages',
      href: '/jawai-tour-packages',
      tag: 'Luxury Itineraries',
      description:
        'Complete multi-day Jawai tour packages combining luxury accommodations, private safaris, and transfers.',
      image: '/images/jawai-hero.png',
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
      title: 'Things to Do in Jawai',
      slug: 'things-to-do-in-jawai',
      href: '/things-to-do-in-jawai',
      tag: 'Destination Guide',
      description:
        'Comprehensive guide to dam excursions, cave temples, village walks, photography spots, and wildlife.',
      image: '/images/celestial-hero.png',
    },
  ],

  location_getting_there: {
    title: 'Reaching SUJAN JAWAI & Route Architecture',
    description:
      'SUJAN JAWAI is situated in Bisalpur near the Jawai wilderness region in Pali district, Rajasthan. The camp is accessible by private road transfer from major airport gateways and railway junctions.',
    distance_info: [
      'Udaipur Maharana Pratap Airport (UDR): Approx. 160 km (~3 to 3.5 hours scenic drive)',
      'Jodhpur Airport (JDH): Approx. 165 km (~3 to 3.5 hours drive via highway)',
      'Ahmedabad SVBP International Airport (AMD): Approx. 300 km (~5.5 hours drive)',
      'Jawai Bandh Railway Station (JWB) & Falna (FA): Approx. 25-35 km (~40 minutes transfer)',
    ],
    itinerary_steps: [
      {
        day: 'Day 1',
        title: 'Arrival, Camp Settling & Sunset Sundowner Drive',
        text: 'Private transfer to Bisalpur, check-in to your luxury tented suite, orientation with resident naturalists, and a late-afternoon sunset drive.',
      },
      {
        day: 'Day 2',
        title: 'Dawn Leopard Tracking, Wetland Birding & Campfire Bush Dinner',
        text: 'Morning wilderness drive across granite boulder kopjes, afternoon birdwatching along the Jawai Reservoir, and an evening outdoor bush dinner.',
      },
      {
        day: 'Day 3',
        title: 'Morning Rabari Walk, Leisure Breakfast & Onward Journey',
        text: 'Guided sunrise village walk learning about local pastoral coexistence, relaxed poolside breakfast, and private onward transfer.',
      },
    ],
  },

  nearby_attractions: [
    {
      name: 'Jawai Dam & Reservoir',
      distance: 'Approx. 18 km',
      description: 'Western Rajasthan’s largest dam reservoir, famous for basking marsh crocodiles and migratory flamingos.',
      link: '/jawai-dam',
    },
    {
      name: 'Kambeshwar Mahadev Temple',
      distance: 'Approx. 12 km',
      description: 'Scenic hillside Shiva shrine offering panoramic views of granite kopjes and valleys.',
      link: '/kambeshwar-mahadev-temple-jawai',
    },
    {
      name: 'Ranakpur Jain Temple',
      distance: 'Approx. 52 km',
      description: '15th-century marble temple complex renowned worldwide for its 1,444 uniquely carved marble pillars.',
      link: '/ranakpur-jain-temple-near-jawai',
    },
    {
      name: 'Kumbhalgarh Fort',
      distance: 'Approx. 63 km',
      description: 'UNESCO World Heritage hill fortress featuring a 36-km stone wall and Mewar history.',
      link: '/kumbhalgarh-fort-from-jawai',
    },
  ],

  faq_items: [
    {
      question: 'What is SUJAN JAWAI?',
      answer:
        'SUJAN JAWAI is an intimate luxury tented wilderness camp in Rajasthan’s Jawai region, known for conservation-led tourism, expert safari drives, refined tented suites and immersive local experiences.',
    },
    {
      question: 'How many tents are at SUJAN JAWAI?',
      answer:
        'The current official SUJAN website and Relais & Châteaux listing describe 10 tented suites and private encampment options in total.',
    },
    {
      question: 'What accommodation categories are available?',
      answer:
        'The property features Tented Rock Suites, the Family Felidae Suite, the Royal Panthera Suite with a private heated pool, and Eden at Jawai, an exclusive three-bedroom private encampment.',
    },
    {
      question: 'Does SUJAN JAWAI have private pool accommodation?',
      answer:
        'Yes. The Royal Panthera Suite includes a private heated pool, while Eden at Jawai includes a private pool as part of its exclusive three-bedroom encampment.',
    },
    {
      question: 'Can I book leopard safari experiences at SUJAN JAWAI?',
      answer:
        'The camp operates expert-guided wilderness drives. Ghoomosa can help plan your stay and Jawai safari itinerary subject to current availability, park guidelines and operating conditions.',
    },
    {
      question: 'Is SUJAN JAWAI suitable for families?',
      answer:
        'Yes. The Family Felidae Suite (two connected tents) and Eden at Jawai private encampment are specifically designed for families and small groups, subject to current occupancy rules.',
    },
    {
      question: 'What other activities are available at SUJAN JAWAI?',
      answer:
        'The camp’s experience program includes birding, village walks, hiking across granite kopjes, horseback riding, temple visits, and Rabari-led cultural interactions, subject to schedule and availability.',
    },
    {
      question: 'What is the price of SUJAN JAWAI?',
      answer:
        'Rates vary substantially by suite category, travel date, occupancy, and inclusions. Ghoomosa does not publish rack rates publicly and shares the current applicable quote on request.',
    },
    {
      question: 'How far is SUJAN JAWAI from Udaipur and Jodhpur?',
      answer:
        'The camp is approximately 160 km from Udaipur Airport (around 3 to 3.5 hours drive) and approximately 165 km from Jodhpur Airport.',
    },
    {
      question: 'How do I book SUJAN JAWAI through Ghoomosa?',
      answer:
        'Submit the Ghoomosa availability form on this page or WhatsApp your travel dates, guest count and preferred suite so our team can provide current availability and custom itinerary options.',
    },
  ],

  form_config: {
    show_safari_checkbox: true,
    show_transfer_checkbox: true,
    transfer_checkbox_label: 'Private Airport / City Transfer Required?',
    preferred_stay_label: 'Preferred Suite / Encampment',
    include_flexible_stay_option: true,
  },

  cross_link_properties: [
    {
      name: 'J Wild Resort Jawai',
      slug: 'j-wild-resort-jawai',
      tag: 'Private Pool Villas',
      image: '/images/resorts/j-wild/j-wild-resort-jawai.webp',
      description: 'Luxury resort in Jawai featuring 11 private pool villas with granite mountain views.',
    },
    {
      name: 'Bijapur Lodge Jawai',
      slug: 'bijapur-lodge-jawai',
      tag: 'Boutique Safari Lodge',
      image: '/images/resorts/bijapur-lodge/bijapur-lodge-jawai.webp',
      description: 'Boutique 6-suite wilderness lodge with farm-led dining, swimming pool, and sustainable hospitality.',
    },
    {
      name: 'Jawai Pugmark Safari Lodge',
      slug: 'jawai-pugmark-safari-lodge',
      tag: 'Cottages & Luxury Tents',
      image: '/images/resorts/jawai-pugmark/jawai-pugmark-safari-lodge.webp',
      description: 'Nature-focused safari lodge in Sena offering cottages, luxury tents, swimming pool, and high tea.',
    },
  ],

  whatsapp_template:
    'Hi Ghoomosa,\nI would like to check SUJAN JAWAI availability.\nCheck-in: {checkin}\nCheck-out: {checkout}\nAdults: {adults}\nChildren: {children}\nPreferred Stay: {suite}\nSafari Required: {safari}\nTransfer Required: {transfer}\nPlease share the best available stay and complete Jawai itinerary.\nProperty: SUJAN JAWAI\nPage: {page_url}\nSource: {utm_source}',

  whatsapp_number: '+91 73000 03101',
  is_featured: true,
  is_active: true,
  display_order: 4,

  seo_title: 'SUJAN JAWAI | Luxury Leopard Safari Camp & Tented Suites',
  seo_description:
    'Explore SUJAN JAWAI, an ultra-luxury tented safari camp in Rajasthan’s leopard country. View suites, private pools, wilderness drives, birding and experiences. Check availability with Ghoomosa.',
  canonical_url: 'https://ghoomosa.in/sujan-jawai',
};
