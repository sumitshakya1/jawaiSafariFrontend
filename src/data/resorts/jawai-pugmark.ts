import { PropertyItem } from './types';

export const JAWAI_PUGMARK_LODGE: PropertyItem = {
  property_name: 'Jawai Pugmark Safari Lodge',
  slug: 'jawai-pugmark-safari-lodge',
  destination_id: 'jawai',
  destination_name: 'Sena, Jawai Dam Region, Rajasthan',
  eyebrow: 'Leopard Safari Stay - Sena, Jawai',
  hero_title_line: 'A Safari Lodge Stay Near the Wild Landscapes of Jawai',
  short_description:
    'A nature-focused safari lodge in Sena near the Jawai landscape, offering cottage and luxury tent accommodation, curated leopard safari experiences, dining, high tea and a swimming pool in a peaceful wilderness setting.',
  property_type: 'Safari Lodge / Boutique Wilderness Stay',

  // STRICT COMMERCIAL INVARIANT: rates are never public
  pricing_mode: 'PRICE_ON_REQUEST',
  public_price: null,

  featured_image: '/images/resorts/jawai-pugmark/jawai-pugmark-safari-lodge.webp',
  hero_image: '/images/resorts/jawai-pugmark/jawai-pugmark-safari-lodge.webp',

  about_paragraphs: [
    'Jawai Pugmark Safari Lodge is a wilderness-focused stay in Sena, Jawai, Rajasthan, created for travellers who want to experience the region’s dramatic granite hills, open landscapes and leopard safari culture while staying in a comfortable, nature-led setting.',
    'The property combines cottages and luxury tent-style accommodation with dining, high tea, a swimming pool and safari-oriented experiences. Its location in the Jawai landscape makes it relevant for couples, families, photographers and wildlife travellers planning a relaxed stay with local exploration.',
    'Through Ghoomosa, travellers can enquire for the stay together with Jawai safari, local sightseeing and custom trip planning. Wildlife sightings are always subject to natural animal movement, local rules, route access and operating conditions.',
  ],

  verified_facts: [
    'Located in the peaceful village of Sena within the Jawai Dam wildlife buffer zone',
    'Features a balanced blend of solid-built cottages and authentic canvas luxury tents',
    'On-site swimming pool for leisure breaks between morning and evening game drives',
    'Signature high-tea sessions and multi-course dining serving regional delicacies',
    'Experienced local naturalists assisting with leopard tracking and habitat orientation',
    'Close road access to Jawai Bandh water edge, birding sites, and granite hills',
  ],

  quick_facts: [
    { label: 'Location', value: 'Sena / Jawai Dam region, Rajasthan 306126' },
    { label: 'Stay Type', value: 'Safari Lodge / Resort' },
    { label: 'Accommodation', value: 'Cottages & Luxury Tents' },
    { label: 'Key Appeal', value: 'Leopard safari stay, pool, high tea' },
    { label: 'Pricing', value: 'Price on Request' },
    { label: 'Booking Through', value: 'Ghoomosa enquiry' },
  ],

  highlights: [
    'Leopard safari-oriented stay',
    'Premium cottages and luxury tents',
    'Swimming pool',
    'Food and high-tea experiences',
    'Jawai hills and wilderness setting',
    'Suitable for couples, families and wildlife travellers',
  ],

  room_categories: [
    {
      room_name: 'Premium Cottage',
      room_slug: 'premium-cottage',
      short_description:
        'A comfortable cottage-style stay blending nature-led design with modern essentials for a relaxed Jawai escape.',
      // Strict verification rule: No unverified room size, bed size, or occupancy published
      occupancy_text: null,
      bedroom_count: null,
      bathroom_count: null,
      room_size: null,
      private_pool: false,
      mountain_view: true,
      gallery_images: [
        '/images/resorts/jawai-pugmark/jawai-pugmark-premium-cottage.webp',
        '/images/resorts/jawai-pugmark/jawai-pugmark-safari-lodge.webp',
      ],
      feature_list: [
        'Solid masonry cottage construction with natural stone accents',
        'En-suite private bathroom with running hot & cold water',
        'Private verandah sit-out overlooking resort greenery',
        'Daily housekeeping and morning safari wakeup service',
      ],
      display_order: 1,
      is_active: true,
    },
    {
      room_name: 'Elegant Cottage',
      room_slug: 'elegant-cottage',
      short_description:
        'A more refined cottage option for travellers looking for additional comfort in the wilderness setting.',
      occupancy_text: null,
      bedroom_count: null,
      bathroom_count: null,
      room_size: null,
      private_pool: false,
      mountain_view: true,
      gallery_images: [
        '/images/resorts/jawai-pugmark/jawai-pugmark-elegant-cottage.webp',
        '/images/resorts/jawai-pugmark/jawai-pugmark-resort-pool.webp',
      ],
      feature_list: [
        'Spacious room footprint with elevated aesthetic touches',
        'Quiet location on the property for enhanced seclusion',
        'Comfortable sitting area and outdoor garden verandah',
        'En-suite modern bathroom with essential toiletries',
      ],
      display_order: 2,
      is_active: true,
    },
    {
      room_name: 'Ultra Luxury Tent',
      room_slug: 'ultra-luxury-tent',
      short_description:
        'A spacious luxury tent-style stay designed for guests seeking a premium glamping-style Jawai experience.',
      occupancy_text: null,
      bedroom_count: null,
      bathroom_count: null,
      room_size: null,
      private_pool: false,
      mountain_view: true,
      gallery_images: [
        '/images/resorts/jawai-pugmark/jawai-pugmark-ultra-luxury-tent.webp',
        '/images/resorts/jawai-pugmark/jawai-pugmark-safari-lodge.webp',
      ],
      feature_list: [
        'Premium canvas safari tent mounted on a solid elevated stone plinth',
        'Attached permanent bathroom with modern plumbing fixtures',
        'Shaded front deck with safari camp chairs facing nature',
        'Authentic jungle camp atmosphere with contemporary comforts',
      ],
      display_order: 3,
      is_active: true,
    },
    {
      room_name: 'Luxury Tent',
      room_slug: 'luxury-tent',
      short_description:
        'A contemporary tented accommodation option combining outdoor ambience with hotel-style comfort.',
      occupancy_text: null,
      bedroom_count: null,
      bathroom_count: null,
      room_size: null,
      private_pool: false,
      mountain_view: true,
      gallery_images: [
        '/images/resorts/jawai-pugmark/jawai-pugmark-luxury-tent.webp',
        '/images/resorts/jawai-pugmark/jawai-pugmark-resort-pool.webp',
      ],
      feature_list: [
        'Classic safari-style canvas suite for true wilderness enthusiasts',
        'Attached en-suite bathroom with fresh water supply',
        'Outdoor patio to enjoy early morning bird calls and sunsets',
        'Convenient proximity to the central pool and dining pavilion',
      ],
      display_order: 4,
      is_active: true,
    },
  ],

  gallery: [
    {
      id: 'pug-gal-1',
      url: '/images/resorts/jawai-pugmark/jawai-pugmark-safari-lodge.webp',
      alt: 'Jawai Pugmark Safari Lodge in Sena Rajasthan grounds and entrance',
      category: 'Property',
      width: 1280,
      height: 853,
      caption: 'Peaceful wilderness setting in Sena, Jawai',
    },
    {
      id: 'pug-gal-2',
      url: '/images/resorts/jawai-pugmark/jawai-pugmark-premium-cottage.webp',
      alt: 'Premium Cottage at Jawai Pugmark Safari Lodge',
      category: 'Accommodation',
      width: 1280,
      height: 853,
      caption: 'Comfortable cottage accommodation blending nature-led design',
    },
    {
      id: 'pug-gal-3',
      url: '/images/resorts/jawai-pugmark/jawai-pugmark-elegant-cottage.webp',
      alt: 'Elegant Cottage exterior at Jawai Pugmark Lodge',
      category: 'Accommodation',
      width: 1280,
      height: 853,
      caption: 'Refined cottage option with garden outlook',
    },
    {
      id: 'pug-gal-4',
      url: '/images/resorts/jawai-pugmark/jawai-pugmark-ultra-luxury-tent.webp',
      alt: 'Ultra Luxury Tent accommodation at Jawai Pugmark',
      category: 'Accommodation',
      width: 1280,
      height: 853,
      caption: 'Spacious luxury tent for a glamping-style experience',
    },
    {
      id: 'pug-gal-5',
      url: '/images/resorts/jawai-pugmark/jawai-pugmark-luxury-tent.webp',
      alt: 'Luxury tent accommodation at Jawai Pugmark',
      category: 'Accommodation',
      width: 1280,
      height: 853,
      caption: 'Contemporary canvas tent with attached private bath',
    },
    {
      id: 'pug-gal-6',
      url: '/images/resorts/jawai-pugmark/jawai-pugmark-resort-pool.webp',
      alt: 'Swimming pool at Jawai Pugmark Safari Lodge',
      category: 'Pool',
      width: 1280,
      height: 853,
      caption: 'Refreshing swimming pool for daytime relaxation',
    },
    {
      id: 'pug-gal-7',
      url: '/images/resorts/jawai-pugmark/jawai-pugmark-leopard-safari.webp',
      alt: 'Jawai safari landscape near Jawai Pugmark',
      category: 'Safari',
      width: 1280,
      height: 853,
      caption: 'Guided 4x4 open Gypsy drives across local leopard kopjes',
    },
    {
      id: 'pug-gal-8',
      url: '/images/resorts/jawai-pugmark/jawai-pugmark-jawai-dam-stay.webp',
      alt: 'Scenic Jawai Dam reservoir waters near Sena',
      category: 'Destination',
      width: 1280,
      height: 853,
      caption: 'Jawai Dam reservoir shoreline with marsh crocodiles and birds',
    },
  ],

  videos: [], // No crawlable hosted video yet

  amenities: [
    { name: 'Cottages & Luxury Tents', icon: 'holiday_village', description: 'Dual choices of stone cottages and canvas luxury tents.' },
    { name: 'Swimming Pool', icon: 'pool', description: 'Centrally situated pool for afternoon dips and sun lounging.' },
    { name: 'Safari Assistance', icon: 'directions_car', description: 'Curated 4x4 leopard safari coordination with local trackers.' },
    { name: 'Dining Pavilion', icon: 'restaurant', description: 'Multi-cuisine dining serving fresh regional and Indian meals.' },
    { name: 'Signature High Tea', icon: 'local_cafe', description: 'Relaxed evening high tea sessions served with local snacks.' },
    { name: 'Wilderness Setting', icon: 'park', description: 'Quiet rural landscape in Sena surrounded by open acacia trees.' },
  ],

  food_relaxation_section: {
    title: 'Food, High Tea & Poolside Relaxation',
    subtitle: 'Unwind in the Jawai Countryside',
    description:
      'Jawai Pugmark brings together safari-led adventure and a relaxed resort atmosphere. Guests can unwind by the pool, enjoy freshly prepared meals and afternoon high tea, and plan Jawai wildlife experiences around their stay.',
    highlights: [
      'Hearty buffet and à la carte regional meals celebrating local Rajasthani flavours',
      'Daily sunset high tea served with hot savouries and tea as safari parties return',
      'Poolside deck with sun chairs for quiet reading and midday sunbathing',
      'Evening open-air bonfire area for sharing wildlife stories under starlit skies',
    ],
  },

  experience_links: [
    {
      title: 'Jawai Leopard Safari',
      slug: 'jawai-leopard-safari',
      href: '/jawai-leopard-safari',
      tag: 'Predator Tracking',
      description:
        'Venture into the boulder-strewn kopjes of Sena and Bera to observe leopards in their natural granite habitat.',
      image: '/images/safari-hero.png',
    },
    {
      title: 'Jawai Dam & Lake Excursions',
      slug: 'jawai-dam',
      href: '/jawai-dam',
      tag: 'Scenic Reservoir',
      description:
        'Explore the vast catchment area of Jawai Dam known for basking marsh crocodiles and scenic water panoramas.',
      image: '/images/sanctuary-hero.png',
    },
    {
      title: 'Crocodile Spotting Drives',
      slug: 'jawai-crocodile-spotting',
      href: '/jawai-crocodile-spotting',
      tag: 'Reptile Habitats',
      description:
        'Observe ancient mugger crocodiles sunning themselves on granite riverbanks along the reservoir margins.',
      image: '/images/sanctuary-hero.png',
    },
    {
      title: 'Bird Watching Trails',
      slug: 'jawai-bird-watching',
      href: '/jawai-bird-watching',
      tag: 'Avian Sanctuary',
      description:
        'Spot resident waterbirds and seasonal migratory flocks including pelicans, cranes, and bar-headed geese.',
      image: '/images/jawai-hero.png',
    },
    {
      title: 'Rabari Village Experience',
      slug: 'jawai-village-experience',
      href: '/jawai-village-experience',
      tag: 'Cultural Heritage',
      description:
        'Interact with the indigenous red-turbaned Rabari pastoral community and learn about their timeless pastoral lifestyle.',
      image: '/images/jawai-hero.png',
    },
    {
      title: 'Wildlife Photography Trails',
      slug: 'jawai-wildlife-photography',
      href: '/jawai-wildlife-photography',
      tag: 'Lens Expeditions',
      description:
        'Capture raw wildlife encounters and striking rock textures under dramatic morning and sunset light.',
      image: '/images/celestial-hero.png',
    },
  ],

  why_stay: [
    {
      title: 'Authentic Sena Location Near Jawai Dam',
      description:
        'Situated in Sena, the lodge provides an uncommercialized rural setting while remaining within easy reach of top leopard spotting hills.',
    },
    {
      title: 'Choice of Cottages and Luxury Tents',
      description:
        'Whether you prefer the thermal comfort of solid cottages or the romantic flair of canvas glamping tents, the lodge caters to varied travel styles.',
    },
    {
      title: 'Swimming Pool & Leisure Amenities',
      description:
        'A dedicated swimming pool and expansive green grounds provide comfortable downtime during the warm afternoon hours.',
    },
    {
      title: 'Focused on Leopard Safari Expeditions',
      description:
        'Built with wildlife enthusiasts in mind, the lodge schedule is harmonized around early dawn and golden hour dusk game drives.',
    },
    {
      title: 'Ghoomosa Coordinated Stay & Safari Packages',
      description:
        'Book your entire Jawai expedition seamlessly with allocated 4x4 Gypsies, registered trackers, transparent advice, and responsive on-ground care.',
    },
  ],

  location_getting_there: {
    title: 'Location & Nearby Jawai Sights',
    description:
      'Jawai Pugmark Safari Lodge is located in Sena, in the Jawai Dam region of Rajasthan (PIN 306126), offering scenic access to both wildlife kopjes and regional transport routes.',
    distance_info: [
      'Jawai Bandh Railway Station (JWB): Approx. 22 km (~35 minutes drive)',
      'Falna Railway Station (FA): Approx. 35 km (~50 minutes drive)',
      'Udaipur Maharana Pratap Airport (UDR): Approx. 145 km (~3 hours drive)',
      'Jodhpur Airport (JDH): Approx. 165 km (~3.2 hours drive)',
    ],
    itinerary_steps: [
      {
        day: 'Day 1',
        title: 'Check-in & Sundowner High Tea',
        text: 'Arrive at Sena and settle into your cottage or tent. Enjoy afternoon high tea by the pool and an evening orientation drive.',
      },
      {
        day: 'Day 2',
        title: 'Morning Leopard Drive & Dam Visit',
        text: 'Sunrise open Gypsy leopard tracking across boulder ridges. Afternoon pool leisure. Sunset excursion to Jawai Dam for crocodile spotting.',
      },
      {
        day: 'Day 3',
        title: 'Morning Nature Trail & Departure',
        text: 'Early morning bird walk through village scrub. Full breakfast at the lodge and onward transfer to Udaipur or Jodhpur.',
      },
    ],
  },

  form_config: {
    show_safari_checkbox: true,
    show_pickup_checkbox: false,
    preferred_stay_label: 'Preferred Accommodation Type',
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
      name: 'Bijapur Lodge Jawai',
      slug: 'bijapur-lodge-jawai',
      tag: 'Boutique Safari Lodge',
      image: '/images/resorts/bijapur-lodge/bijapur-lodge-jawai.webp',
      description: 'Boutique 6-suite wilderness lodge with farm-led dining, pool, and eco-initiatives.',
    },
    {
      name: 'SUJAN JAWAI',
      slug: 'sujan-jawai',
      tag: 'Ultra-Luxury Safari Camp',
      image: '/images/resorts/sujan-jawai/sujan-jawai-luxury-safari-camp.webp',
      description: 'Exclusive 10-tent conservation-led luxury camp in Bisalpur with private pool suites and wilderness drives.',
    },
  ],

  seo_title: 'Jawai Pugmark Safari Lodge | Leopard Safari Resort in Jawai',
  seo_description:
    'Explore Jawai Pugmark Safari Lodge in Sena, Jawai. View cottages, luxury tents, photos, amenities and leopard safari experiences. Check stay availability with Ghoomosa.',
  canonical_url: 'https://ghoomosa.in/jawai-pugmark-safari-lodge',

  faq_items: [
    {
      question: 'Where is Jawai Pugmark Safari Lodge located?',
      answer:
        'The property is shown in the Sena / Jawai Dam area of Rajasthan, within the broader Jawai wildlife landscape.',
    },
    {
      question: 'What type of accommodation is available at Jawai Pugmark?',
      answer:
        'The property’s public website lists Premium Cottage, Elegant Cottage, Ultra Luxury Tent and Luxury Tent categories.',
    },
    {
      question: 'Does Jawai Pugmark offer leopard safari experiences?',
      answer:
        'The property promotes safari experiences. Ghoomosa can help coordinate safari and stay planning subject to availability, local rules and natural conditions.',
    },
    {
      question: 'Does Jawai Pugmark have a swimming pool?',
      answer:
        'The property’s website lists a pool among its main amenities.',
    },
    {
      question: 'Is Jawai Pugmark suitable for families?',
      answer:
        'The stay can be considered for family trips; final room suitability and occupancy should be confirmed for the travel dates.',
    },
    {
      question: 'Can I book Jawai Pugmark with a Jawai safari package?',
      answer:
        'Yes, Ghoomosa can prepare a stay-plus-experience quotation based on dates, group size and required activities.',
    },
    {
      question: 'What is the price of Jawai Pugmark Safari Lodge?',
      answer:
        'Rates vary by dates, stay category, occupancy and package. Current prices are shared on request.',
    },
    {
      question: 'How do I book Jawai Pugmark Safari Lodge?',
      answer:
        'Submit the Ghoomosa availability form or use the WhatsApp CTA with your dates and guest details.',
    },
  ],

  whatsapp_template:
    'Hi Ghoomosa,\nI would like to check availability for Jawai Pugmark Safari Lodge.\nCheck-in: {checkin}\nCheck-out: {checkout}\nAdults: {adults}\nChildren: {children}\nPreferred Stay: {villa}\nSafari Required: {safari}\nPlease share the best available stay and package options.\nPage: {page_url}\nSource: {utm_source}',
  whatsapp_number: '+917300003101',
  nearby_attractions: [
    {
      name: 'Jawai Dam & Reservoir',
      distance: 'Approx. 15 km',
      description: 'Western Rajasthan’s largest dam reservoir, famous for basking marsh crocodiles and migratory flamingos.',
      link: '/jawai-dam',
    },
    {
      name: 'Leopard Caves & Leopard Hills',
      distance: 'Adjacent (Sena Kopjes)',
      description: 'Granite boulder terrain and natural rock caves sheltering wild leopards.',
      link: '/leopard-caves-jawai',
    },
    {
      name: 'Rabari Village Experience',
      distance: 'Within Sena Village',
      description: 'Guided cultural interactions with indigenous red-turbaned Rabari shepherd families.',
      link: '/jawai-village-experience',
    },
    {
      name: 'Kambeshwar Mahadev Temple',
      distance: 'Approx. 20 km',
      description: 'Scenic hillside Shiva shrine offering panoramic views of granite kopjes and valleys.',
      link: '/kambeshwar-mahadev-temple-jawai',
    },
  ],
  is_featured: true,
  is_active: true,
  display_order: 3,
};
