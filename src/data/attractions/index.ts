import { AttractionItem } from './types';

export const ATTRACTIONS_DATA: AttractionItem[] = [
  // 1. JAWAI DAM
  {
    id: 'attr-jawai-dam',
    name: 'Jawai Dam',
    slug: 'jawai-dam',
    category: 'Wildlife & Nature',
    theme: 'Nature',
    duration_type: 'short_visit',
    short_answer:
      'Jawai Dam is the defining water body of the Jawai landscape in Pali district, Rajasthan. It supports local water needs and is widely known for its migratory birdlife, crocodiles and the surrounding leopard landscape. Travellers visit for sunrise vistas, wetland photography and easy combination with daily leopard safari drives.',
    long_description: [
      'Jawai Dam is one of the central landmarks of the Jawai region. Rajasthan Tourism notes its importance as a major western Rajasthan dam and highlights winter migratory birds, leopards and crocodiles. Built across the Jawai River by Maharaja Umaid Singh of Jodhpur in 1957, the reservoir provides irrigation and drinking water across the region while nurturing a rich wetland ecosystem.',
      'For travellers, it works best as a sunrise or sunset nature stop, birding location and visual anchor for a wider Jawai itinerary. The vast expanse of blue water creates a striking contrast against prehistoric pink granite kopjes rising steeply from the desert plains.',
      'Visitors can view basking marsh crocodiles on sunny mud banks and rock shoals from designated perimeter points, while ornithologists and bird watchers observe greater flamingos, demoiselle cranes and raptors during the winter season.',
    ],
    reference_point: 'Jawai Bandh, Rajasthan',
    distance_km_min: null,
    distance_km_max: null,
    travel_time_min: 15,
    travel_time_max: 30,
    distance_display: 'Reference destination / varies across reservoir perimeter',
    travel_time_display: 'Approx. 15-30 min from regional stays',
    distance_last_verified_at: '2026-10-06',
    distance_mode: 'dynamic',
    lat: 25.1052,
    lng: 73.1585,
    best_time: 'October to March for migratory birds; year-round for sunrise/sunset landscapes',
    visit_duration: '1-2 hours; longer for dedicated birding or photography',
    best_for: ['Nature travellers', 'Wildlife enthusiasts', 'Landscape photographers', 'Families'],
    why_visit: [
      'Panoramic sunrise and sunset vistas reflecting off the massive reservoir',
      'Winter migratory bird watching including flamingos, pelicans and cranes',
      'Marsh crocodile spotting from authorized, safe perimeter viewpoints',
      'Visual centerpiece of the entire Jawai granite landscape',
      'Effortless pairing with morning or evening 4x4 leopard safari drives',
    ],
    question_sections: {
      where_is_it:
        'Jawai Dam is located on the Jawai River in the Pali district of western Rajasthan, close to the town of Sumerpur and Jawai Bandh railway station.',
      how_far:
        'Because Jawai Dam forms the heart of the region, distance varies based on where you stay. Most resorts and safari lodges in Bera, Bisalpur and Sena are within 10 to 25 km of prime dam viewpoints.',
      is_it_worth_visiting:
        'Yes. Jawai Dam is the defining geographic landmark of the region. Even travellers primarily visiting for leopards find the contrast of water, wetlands and granite monoliths essential to understanding Jawai.',
      how_much_time:
        'Allow 1 to 2 hours for a leisurely visit. Dedicated wildlife photographers and bird watchers often spend 3 to 4 hours during the morning golden hour.',
      can_combine_safari:
        'Yes. Jawai Dam is typically visited immediately following a morning safari or as a sunset stop before returning to your wilderness lodge for dinner.',
    },
    nearby_attractions: [
      { name: 'Leopard Caves & Leopard Hills', slug: 'leopard-caves-jawai', distance: 'Adjacent', reason: 'Prime safari terrain around reservoir kopjes' },
      { name: 'Rabari Village Experience', slug: 'jawai-village-experience', distance: '10-20 km', reason: 'Cultural interaction with local pastoralists' },
      { name: 'Kambeshwar Mahadev Temple', slug: 'kambeshwar-mahadev-temple-jawai', distance: 'Approx. 11 km', reason: 'Scenic hillside Shiva shrine' },
      { name: 'Ashapura Mataji Temple, Bisalpur', slug: 'ashapura-mataji-temple-bisalpur-jawai', distance: 'Approx. 3-4 km', reason: 'Spiritual village stop' },
    ],
    suggested_itinerary: {
      title: 'Classic Jawai Safari & Dam Circuit',
      summary: 'A seamless one-day itinerary combining apex predator tracking with peaceful wetland exploration.',
      steps: [
        { timeOrDay: '05:45 AM - 08:30 AM', activity: 'Dawn Leopard Safari Drive', description: 'Track wild leopards across granite hills in an open 4x4 vehicle with expert naturalists.' },
        { timeOrDay: '09:00 AM - 10:30 AM', activity: 'Breakfast at Resort', description: 'Relax, recharge, and review early-morning wildlife captures.' },
        { timeOrDay: '11:00 AM - 01:00 PM', activity: 'Jawai Dam & Crocodile Spotting', description: 'Explore elevated dam embankments, observe basking mugger crocodiles and waterbirds.' },
        { timeOrDay: '01:30 PM - 03:30 PM', activity: 'Lunch & Afternoon Leisure', description: 'Traditional Rajasthani meal and downtime by the pool.' },
        { timeOrDay: '04:15 PM - 06:45 PM', activity: 'Sunset Viewpoint & Village Trail', description: 'Scenic drive to a panoramic granite ridge followed by sunset tea.' },
      ],
    },
    faq: [
      {
        question: 'Why is Jawai Dam famous?',
        answer: 'It is known for its scenic reservoir landscape, winter migratory birdlife, marsh crocodiles and its unique proximity to Jawai leopard habitat.',
      },
      {
        question: 'Is Jawai Dam good for bird watching?',
        answer: 'Yes. The cooler months between October and March host thousands of migratory birds including Greater Flamingos, Demoiselle Cranes and Bar-headed Geese.',
      },
      {
        question: 'Can I see crocodiles at Jawai Dam?',
        answer: 'Crocodiles inhabit the reservoir, but sightings are natural and cannot be guaranteed. Views must always be taken from safe, permitted perimeter areas.',
      },
      {
        question: 'Can Jawai Dam be combined with leopard safari?',
        answer: 'Yes. It is one of the easiest and most popular additions to any standard morning or evening Jawai safari drive.',
      },
    ],
    source_notes: [
      'Rajasthan Tourism - Pali official portal (tourism.rajasthan.gov.in/pali.html)',
      'Public wetland conservation notes on Jawai Bandh water reservoir',
    ],
    publishing_note:
      'Avoid calling Jawai a National Park. Wildlife access, safari zones and safe viewpoints must follow current local/forest rules.',
    last_fact_check_at: '2026-10-06',
    publish_status: 'live',
    hero_image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', alt: 'Jawai Dam reservoir and granite peaks' },
      { url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80', alt: 'Migratory waterbirds feeding at Jawai Dam' },
      { url: 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80', alt: 'Basking marsh crocodile on sunny rocky shoal' },
    ],
    seo_title: 'Jawai Dam Rajasthan | Wildlife, Birding, Crocodiles & Travel Guide',
    seo_description:
      'Explore Jawai Dam in Rajasthan - wildlife landscape, migratory birds, crocodiles, viewpoints, best time, nearby attractions and Jawai trip planning with Ghoomosa.',
    h1: 'Jawai Dam Rajasthan',
    canonical_url: 'https://ghoomosa.in/jawai-dam',
    cta_template:
      'Hi Ghoomosa, I want to plan a Jawai trip including Jawai Dam.\nTravel date: {date}\nGuests: {n}\nPickup city: {city}\nPlease share the best itinerary and package options.\nPage: {page_url}\nSource: {utm_source}',
  },

  // 2. ASHAPURA MATAJI TEMPLE, BISALPUR (DRAFT / P0)
  {
    id: 'attr-ashapura-bisalpur',
    name: 'Ashapura Mataji Temple, Bisalpur',
    slug: 'ashapura-mataji-temple-bisalpur-jawai',
    category: 'Spiritual & Cultural',
    theme: 'Temple',
    duration_type: 'short_visit',
    short_answer:
      'Ashapura Mataji Temple is a local spiritual stop in Bisalpur near the Jawai landscape. Bisalpur itself is only a few kilometres from Jawai Bandh, making the temple easy to combine with safari, Jawai Dam and village sightseeing. It offers travellers authentic regional devotion set among granite hill foothills.',
    long_description: [
      'Ashapura Mataji Temple at Bisalpur adds a spiritual and community dimension to a Jawai trip. Rather than presenting the temple only as a checklist attraction, Ghoomosa positions it as part of the cultural landscape around Jawai - a short stop that pairs naturally with nearby villages, local roads and the surrounding granite country.',
      'Dedicated to Goddess Ashapura, revered widely across Rajasthan and Gujarat as a wish-fulfilling deity, the temple draws resident devotees from neighbouring farming and pastoral villages.',
      'Its location in Bisalpur places it near luxury lodges such as SUJAN JAWAI, making it a peaceful morning or afternoon cultural walk for guests wanting to understand local spiritual heritage.',
    ],
    reference_point: 'Jawai Bandh, Rajasthan',
    distance_km_min: 3,
    distance_km_max: 4,
    travel_time_min: 8,
    travel_time_max: 15,
    distance_display: 'Approx. 3-4 km (Bisalpur village; verify temple pin)',
    travel_time_display: 'Approx. 8-15 min + local approach',
    distance_last_verified_at: null, // Left empty per instruction
    distance_mode: 'fixed_range',
    lat: null, // Keep null until pin verification
    lng: null,
    best_time: 'Morning or late afternoon; check local Navratri festival crowd conditions',
    visit_duration: '30-60 minutes',
    best_for: ['Pilgrims', 'Families', 'Cultural travellers', 'Slow-travel guests'],
    why_visit: [
      'Authentic local spiritual atmosphere free from commercial crowds',
      'Short cultural addition near Jawai Bandh and Bisalpur wilderness stays',
      'Scenic setting against traditional village pastoral lanes',
      'Opportunity to witness traditional Marwari devotional rituals',
    ],
    question_sections: {
      where_is_it:
        'The temple is located in Bisalpur village, situated in the Pali district of Rajasthan, just south-east of Jawai Bandh.',
      how_far:
        'Bisalpur village lies approximately 3 to 4 km from Jawai Bandh. Drive time is typically 8 to 15 minutes by local road.',
      is_it_worth_visiting:
        'Yes, especially for travellers interested in local faith, rural village rhythms, and peaceful moments away from safari jeeps.',
      how_much_time:
        'A visit usually takes 30 to 45 minutes, making it very easy to fit into a morning or afternoon excursion.',
      can_combine_safari:
        'Yes. It can be effortlessly visited before an evening safari or right after breakfast.',
    },
    nearby_attractions: [
      { name: 'Jawai Dam', slug: 'jawai-dam', distance: 'Approx. 5-8 km', reason: 'Scenic reservoir viewpoints' },
      { name: 'Rabari Village Experience', slug: 'jawai-village-experience', distance: 'Adjacent', reason: 'Pastoral culture in Bisalpur' },
      { name: 'Kambeshwar Mahadev Temple', slug: 'kambeshwar-mahadev-temple-jawai', distance: 'Approx. 12 km', reason: 'Winding hill temple drive' },
    ],
    suggested_itinerary: {
      title: 'Bisalpur Cultural & Nature Excursion',
      summary: 'Combine rural temple reverence with village walking and a sunset kopje safari.',
      steps: [
        { timeOrDay: '08:30 AM - 09:30 AM', activity: 'Bisalpur Village Morning Stroll', description: 'Observe village morning chores and rural mud architecture.' },
        { timeOrDay: '09:30 AM - 10:15 AM', activity: 'Ashapura Mataji Temple Darshan', description: 'Peaceful darshan and exploration of the temple premises.' },
        { timeOrDay: '10:30 AM - 12:00 PM', activity: 'Jawai Dam Shoreline Walk', description: 'Short drive to lakeside embankments for bird watching.' },
      ],
    },
    faq: [
      {
        question: 'Where is Ashapura Mataji Temple, Bisalpur?',
        answer: 'It is in Bisalpur village near the Jawai Bandh area of Pali district, Rajasthan.',
      },
      {
        question: 'How far is Bisalpur from Jawai Bandh?',
        answer: 'Route tools place Bisalpur village at roughly 3-4 km from Jawai Bandh; the final temple-pin distance should be verified with your driver before publishing.',
      },
      {
        question: 'Can I visit the temple with a Jawai safari?',
        answer: 'Yes. It works well as a short cultural/spiritual stop before or after a local Jawai activity.',
      },
      {
        question: 'Is Ashapura Mataji Temple the same as Dev Giri Temple?',
        answer: 'No. They are treated as distinct entities in Ghoomosa’s records until map coordinates and local naming are conclusively proven identical.',
      },
    ],
    source_notes: [
      'Local travel surveys in Bisalpur village',
      'Pali district cultural records',
    ],
    publishing_note:
      'Exact temple route/pin must be confirmed with the local partner. Do not merge with Dev Giri Temple merely because both are associated with Ashapura Mataji in local travel content. Set distance_last_verified_at empty and flag as needs-verification; publish_status = live only after the editor confirms (build it fully, default to draft).',
    last_fact_check_at: '2026-10-06',
    publish_status: 'draft', // DRAFT per instruction
    hero_image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80', alt: 'Bisalpur village temple entrance' },
    ],
    seo_title: 'Ashapura Mataji Temple Bisalpur Near Jawai | Distance & Travel Guide',
    seo_description:
      'Visit Ashapura Mataji Temple in Bisalpur near Jawai Bandh. Check approximate distance, local spiritual context, nearby Jawai attractions and trip-planning tips with Ghoomosa.',
    h1: 'Ashapura Mataji Temple, Bisalpur Near Jawai',
    canonical_url: 'https://ghoomosa.in/ashapura-mataji-temple-bisalpur-jawai',
    cta_template:
      'Hi Ghoomosa, I want to plan a Jawai trip including Ashapura Mataji Temple Bisalpur.\nTravel date: {date}\nGuests: {n}\nPickup city: {city}\nPlease share the best itinerary and package options.\nPage: {page_url}\nSource: {utm_source}',
  },

  // 3. RANAKPUR JAIN TEMPLE (P0)
  {
    id: 'attr-ranakpur-jain-temple',
    name: 'Ranakpur Jain Temple',
    slug: 'ranakpur-jain-temple-near-jawai',
    category: 'Heritage & Architecture',
    theme: 'Heritage',
    duration_type: 'half_day',
    short_answer:
      'Ranakpur Jain Temple is one of the major heritage and pilgrimage excursions from Jawai, roughly 50-55 km by road. The 15th-century temple complex is dedicated to Adinath and is celebrated for its marble architecture and richly carved pillars. It pairs seamlessly into a full-day heritage circuit from Jawai.',
    long_description: [
      'Set in a lush valley of the Aravalli range in Pali district, Ranakpur is internationally renowned for its breathtaking Jain architectural mastery. Built in the 15th century under the patronage of Rana Kumbha of Mewar, the grand Chaumukha Temple is dedicated to Rishabhanatha (Adinath), the first Jain Tirthankara.',
      'Rajasthan Tourism highlights the Chaumukha Temple as its principal architectural triumph, resting on 1,444 uniquely hand-carved marble pillars, no two of which are identical. Sunlight filters through intricate domes, illuminating filigree marble friezes, ceiling mandapas and lifelike depictions of dancers and celestial beings.',
      'From Jawai, Ranakpur forms an effortless half-day or full-day road excursion, allowing travellers to experience world-class medieval Indian architecture alongside wild leopard landscapes.',
    ],
    reference_point: 'Jawai Bandh, Rajasthan',
    distance_km_min: 50,
    distance_km_max: 55,
    travel_time_min: 60,
    travel_time_max: 70,
    distance_display: 'Approx. 50-55 km',
    travel_time_display: 'Approx. 1 hr to 1 hr 10 min by road',
    distance_last_verified_at: '2026-10-06',
    distance_mode: 'fixed_range',
    lat: 25.1158,
    lng: 73.4731,
    best_time: 'October to March; midday lighting inside temple is exceptional for pillar viewing',
    visit_duration: '1.5-2.5 hours at the complex; allow half to full day from Jawai',
    best_for: ['Heritage travellers', 'Pilgrims', 'Architecture enthusiasts', 'Families', 'Photographers'],
    why_visit: [
      'Over 1,444 uniquely carved white marble pillars with no two matching carvings',
      'Majestic 15th-century Chaumukha temple dedicated to Bhagwan Adinath',
      'Scenic drive winding through the scenic forested foothills of the Aravalli Range',
      'Can be combined into a premier full-day heritage route with Kumbhalgarh Fort',
      'Spiritual sanctuary known for deep tranquility and acoustic harmony',
    ],
    question_sections: {
      where_is_it:
        'Ranakpur Jain Temple is situated in Desuri tehsil of Pali district, Rajasthan, on the western slopes of the Aravalli Hills along the Jawai-Udaipur corridor.',
      how_far:
        'It is approximately 50 to 55 km from Jawai Bandh. Drive time is usually between 1 hour and 1 hour 10 minutes on well-paved regional highways.',
      is_it_worth_visiting:
        'Unquestionably. It is universally regarded as one of the most stunning stone-carved temple complexes in the world and an essential cultural complement to a Jawai wildlife trip.',
      how_much_time:
        'Plan for 1.5 to 2 hours exploring the temple halls and courtyards. Including round-trip road travel from Jawai, allocate roughly 4 to 5 hours.',
      can_combine_safari:
        'Yes. You can complete a sunrise leopard safari in Jawai, take breakfast, drive to Ranakpur for midday darshan and lunch, and return in time for late afternoon relaxation.',
    },
    nearby_attractions: [
      { name: 'Ranakpur Dam', slug: 'ranakpur-dam-near-jawai', distance: 'Approx. 3 km', reason: 'Scenic reservoir and photography stop' },
      { name: 'Kumbhalgarh Fort', slug: 'kumbhalgarh-fort-from-jawai', distance: 'Approx. 35 km', reason: 'UNESCO hill fort with historic ramparts' },
      { name: 'Parshuram Mahadev Temple', slug: 'parshuram-mahadev-near-jawai', distance: 'Approx. 15 km', reason: 'Cave shrine in the Aravallis' },
      { name: 'Jawai Dam', slug: 'jawai-dam', distance: 'Approx. 52 km', reason: 'Return to Jawai safari hub' },
    ],
    suggested_itinerary: {
      title: 'Jawai to Ranakpur & Kumbhalgarh Heritage Circuit',
      summary: 'A signature full-day expedition linking ancient Jain marble wonder with Rajput fortress grandeur.',
      steps: [
        { timeOrDay: '07:30 AM', activity: 'Departure from Jawai Lodge', description: 'Scenic drive eastward towards the Aravalli foothills.' },
        { timeOrDay: '08:45 AM - 11:00 AM', activity: 'Ranakpur Jain Temple Exploration', description: 'Guided walk through Chaumukha Temple admiring pillar carvings and marble ceilings.' },
        { timeOrDay: '11:15 AM - 11:45 AM', activity: 'Ranakpur Dam Scenic Stop', description: 'Peaceful lakeside pause admiring water reflections.' },
        { timeOrDay: '12:00 PM - 01:00 PM', activity: 'Regional Rajasthani Lunch', description: 'Traditional Marwari dining at a valley heritage resort.' },
        { timeOrDay: '01:15 PM - 04:00 PM', activity: 'Kumbhalgarh Fort Ascent', description: 'Ascend to Badal Mahal and walk the monumental fortification walls.' },
        { timeOrDay: '04:15 PM - 06:00 PM', activity: 'Return to Jawai', description: 'Scenic drive back through Aravalli mountain passes to your camp.' },
      ],
    },
    faq: [
      {
        question: 'How far is Ranakpur Jain Temple from Jawai Bandh?',
        answer: 'Road-distance sources place it at roughly 48 to 55 km. We display an approximate 50-55 km planning range (around 1 hour to 1 hour 10 minutes drive).',
      },
      {
        question: 'Can Ranakpur and Jawai be covered in one trip?',
        answer: 'Yes. Ranakpur is a top-rated day excursion from Jawai and fits easily into half a day or a complete full-day itinerary.',
      },
      {
        question: 'What is Ranakpur Jain Temple famous for?',
        answer: 'It is famous for 15th-century marble temple architecture, intricate ceiling mandapas and 1,444 uniquely sculpted pillars in the Chaumukha Temple.',
      },
      {
        question: 'Can Ranakpur and Kumbhalgarh be combined?',
        answer: 'Yes. They form Rajasthan’s most rewarding full-day heritage circuit from Jawai, subject to early departure and road conditions.',
      },
    ],
    source_notes: [
      'Rajasthan Tourism - Ranakpur Temple official portal (tourism.rajasthan.gov.in)',
      'Archaeological Survey and Jain Heritage Trust publications',
    ],
    publishing_note:
      'Do not publish temple timings unless checked from a current official/temple source on launch day. Respect dress, photography and worship rules.',
    last_fact_check_at: '2026-10-06',
    publish_status: 'live',
    hero_image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80', alt: 'Intricate marble pillar corridor in Ranakpur Jain Temple' },
      { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', alt: 'Aravalli mountain valley backdrop behind Ranakpur' },
    ],
    seo_title: 'Ranakpur Jain Temple from Jawai | Distance, Timings & Travel Guide',
    seo_description:
      'Plan a visit to Ranakpur Jain Temple from Jawai. See approximate distance from Jawai Bandh, architecture highlights, trip duration, nearby attractions and Ghoomosa itinerary options.',
    h1: 'Ranakpur Jain Temple Near Jawai',
    canonical_url: 'https://ghoomosa.in/ranakpur-jain-temple-near-jawai',
    cta_template:
      'Hi Ghoomosa, I want to plan a Jawai trip including Ranakpur Jain Temple.\nTravel date: {date}\nGuests: {n}\nPickup city: {city}\nPlease share the best itinerary and package options.\nPage: {page_url}\nSource: {utm_source}',
  },

  // 4. KUMBHALGARH FORT (P0)
  {
    id: 'attr-kumbhalgarh-fort',
    name: 'Kumbhalgarh Fort',
    slug: 'kumbhalgarh-fort-from-jawai',
    category: 'Heritage & Architecture',
    theme: 'Heritage',
    duration_type: 'full_day',
    short_answer:
      'Kumbhalgarh Fort is about 62-63 km by road from Jawai Bandh and works best as a full-day heritage excursion. Built under Rana Kumbha in the 15th century, the Aravalli fort is closely associated with Mewar history and Maharana Pratap. Visitors enjoy panoramic views, the Badal Mahal and historic defensive ramparts.',
    long_description: [
      'Perched high in the rugged Aravalli range at an elevation of over 1,100 metres, Kumbhalgarh Fort is one of Rajasthan’s premier hill citadels and an inscribed component of the UNESCO World Heritage Site "Hill Forts of Rajasthan".',
      'Built during the reign of Rana Kumbha in the 15th century, the fortress stood as an impenetrable bastion of the Mewar Kingdom and served as the historic birthplace of the legendary warrior king Maharana Pratap. Rajasthan Tourism emphasizes its strategic mountain architecture, the crowning Badal Mahal (Palace of Clouds), and over 360 ancient temples within its ramparts.',
      'The fort is world-famous for its massive stone wall extending over 36 kilometres along hill ridges. From Jawai, Kumbhalgarh is an exceptional full-day day trip that blends fortress history with winding mountain drives.',
    ],
    reference_point: 'Jawai Bandh, Rajasthan',
    distance_km_min: 62,
    distance_km_max: 63,
    travel_time_min: 80,
    travel_time_max: 95,
    distance_display: 'Approx. 62-63 km',
    travel_time_display: 'Approx. 1 hr 20 min to 1 hr 35 min',
    distance_last_verified_at: '2026-10-06',
    distance_mode: 'fixed_range',
    lat: 25.1528,
    lng: 73.5872,
    best_time: 'October to March; morning or late afternoon for comfortable walking across steep ramps',
    visit_duration: '2-3 hours at the fort; allow a full day from Jawai when combined with Ranakpur',
    best_for: ['History enthusiasts', 'Families', 'Photographers', 'Heritage travellers'],
    why_visit: [
      'Inscribed UNESCO World Heritage component of the Hill Forts of Rajasthan',
      'Historic 15th-century citadel built by Rana Kumbha and birthplace of Maharana Pratap',
      'Badal Mahal offering 360-degree panoramic views over the Thar desert fringes and Aravalli hills',
      'Monumental stone fortification wall running over 36 kilometres across mountain ridges',
      'Over 360 historic Hindu and Jain temples preserved within the fort complex',
    ],
    question_sections: {
      where_is_it:
        'Kumbhalgarh Fort is situated in the Rajsamand district of Rajasthan, roughly 63 km east of Jawai Bandh near the Kumbhalgarh Wildlife Sanctuary.',
      how_far:
        'It is approximately 62 to 63 km by road from Jawai Bandh. Drive time is approximately 1 hour 20 minutes to 1 hour 35 minutes depending on mountain curve speed.',
      is_it_worth_visiting:
        'Yes. If you have an extra day in your Jawai itinerary, the dramatic scale, Mewar heritage and mountain scenery make Kumbhalgarh unforgettable.',
      how_much_time:
        'Expect to spend 2 to 3 hours climbing up to Badal Mahal and exploring the walls and temples. Comfortable walking shoes are strongly recommended.',
      can_combine_safari:
        'Because Kumbhalgarh requires a 4-to-6 hour commitment including round-trip driving, it is best planned on a non-safari day or between morning and late-night safari schedules.',
    },
    nearby_attractions: [
      { name: 'Ranakpur Jain Temple', slug: 'ranakpur-jain-temple-near-jawai', distance: 'Approx. 35 km', reason: 'Exquisite 15th-century marble temple' },
      { name: 'Ranakpur Dam', slug: 'ranakpur-dam-near-jawai', distance: 'Approx. 38 km', reason: 'Tranquil reservoir stop' },
      { name: 'Parshuram Mahadev Temple', slug: 'parshuram-mahadev-near-jawai', distance: 'Approx. 22 km', reason: 'Hill cave pilgrimage' },
    ],
    suggested_itinerary: {
      title: 'Full-Day Kumbhalgarh & Ranakpur Expedition',
      summary: 'Combine Rajasthan’s greatest mountain fortress with its most intricate marble temple.',
      steps: [
        { timeOrDay: '07:00 AM', activity: 'Early Departure from Jawai', description: 'Scenic drive heading east into the Aravalli mountains.' },
        { timeOrDay: '08:30 AM - 11:30 AM', activity: 'Kumbhalgarh Fort Exploration', description: 'Walk through Ram Pol, climb to Badal Mahal, and admire the sweeping ramparts.' },
        { timeOrDay: '12:00 PM - 01:15 PM', activity: 'Lunch at Aravalli Viewpoint', description: 'Farm-fresh Rajasthani cuisine overlooking mountain valleys.' },
        { timeOrDay: '01:45 PM - 03:45 PM', activity: 'Ranakpur Jain Temple Visit', description: 'Tour the 1,444 marble pillars and quiet courtyards.' },
        { timeOrDay: '04:00 PM - 05:30 PM', activity: 'Return Drive to Jawai', description: 'Arrive back in time for fireside tea and dinner at your resort.' },
      ],
    },
    faq: [
      {
        question: 'How far is Kumbhalgarh Fort from Jawai Bandh?',
        answer: 'Current route sources place it around 62-63 km by road, taking approximately 1 hour 20 minutes to 1 hour 35 minutes.',
      },
      {
        question: 'Is Kumbhalgarh worth visiting from Jawai?',
        answer: 'Yes, if you have a full day or an extra day, especially when combined with Ranakpur Jain Temple into a single route.',
      },
      {
        question: 'Who built Kumbhalgarh Fort?',
        answer: 'Rajasthan Tourism and historical records attribute the 15th-century fortress construction to Rana Kumbha of the Mewar dynasty.',
      },
      {
        question: 'Can Kumbhalgarh and Ranakpur be covered in one day from Jawai?',
        answer: 'Usually yes with an early start. Timing depends on road conditions, entry hours and how long you spend walking at each monument.',
      },
    ],
    source_notes: [
      'Rajasthan Tourism - Kumbhalgarh Fort portal (tourism.rajasthan.gov.in/kumbhalgarh-fort.html)',
      'UNESCO World Heritage Centre documentation on Hill Forts of Rajasthan',
    ],
    publishing_note:
      'Use UNESCO/Hill Forts wording carefully: Kumbhalgarh is one of the Hill Forts of Rajasthan World Heritage components. Avoid unsupported "second longest wall in the world" claims unless the editorial team supplies a reliable citation.',
    last_fact_check_at: '2026-10-06',
    publish_status: 'live',
    hero_image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80', alt: 'Kumbhalgarh Fort massive perimeter wall over Aravalli ridges' },
      { url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80', alt: 'Badal Mahal palace tower at Kumbhalgarh summit' },
    ],
    seo_title: 'Kumbhalgarh Fort from Jawai | Distance, History & Day Trip Guide',
    seo_description:
      'Plan Kumbhalgarh Fort from Jawai - approximate distance, travel time, history, what to see, Ranakpur combination and Ghoomosa full-day itinerary.',
    h1: 'Kumbhalgarh Fort from Jawai',
    canonical_url: 'https://ghoomosa.in/kumbhalgarh-fort-from-jawai',
    cta_template:
      'Hi Ghoomosa, I want to plan a Jawai trip including Kumbhalgarh Fort.\nTravel date: {date}\nGuests: {n}\nPickup city: {city}\nPlease share the best itinerary and package options.\nPage: {page_url}\nSource: {utm_source}',
  },

  // 5. PARSHURAM MAHADEV TEMPLE (P1)
  {
    id: 'attr-parshuram-mahadev',
    name: 'Parshuram Mahadev Temple',
    slug: 'parshuram-mahadev-near-jawai',
    category: 'Spiritual & Cultural',
    theme: 'Temple',
    duration_type: 'half_day',
    short_answer:
      'Parshuram Mahadev is a Shiva cave-temple excursion around 60-65 km from Jawai Bandh by road. The visit requires more time than the driving distance alone because access may include hill approach or steps. Set in the Aravallis, it provides a quiet spiritual journey often paired with Ranakpur.',
    long_description: [
      'Parshuram Mahadev adds a spiritual and landscape-focused excursion to a Jawai stay. Rajasthan Tourism includes the temple among Pali attractions and describes it as a natural cave temple dedicated to Lord Shiva, nestled deep within the Aravalli mountain ranges.',
      'According to regional religious tradition, sage Parshuram meditated in this mountain cave. The natural stone Shivalinga is enshrined inside a subterranean cavern, reached by descending a series of steps through mountain rock.',
      'Ghoomosa presents this site as an authentic pilgrimage and nature outing, clearly distinguishing devotional traditions from secular historical facts, and recommending it to physically active travellers.',
    ],
    reference_point: 'Jawai Bandh, Rajasthan',
    distance_km_min: 60,
    distance_km_max: 65,
    travel_time_min: 65,
    travel_time_max: 85,
    distance_display: 'Approx. 60-65 km',
    travel_time_display: 'Approx. 1 hr+ road plus temple approach',
    distance_last_verified_at: '2026-10-06',
    distance_mode: 'fixed_range',
    lat: 25.1389,
    lng: 73.5412,
    best_time: 'October to March; cooler morning hours recommended to avoid afternoon heat during step climbing',
    visit_duration: '2-4 hours depending on step approach; allow half to full day from Jawai',
    best_for: ['Pilgrims', 'Culturally curious travellers', 'Active families', 'Nature walkers'],
    why_visit: [
      'Natural rock cave setting housing an ancient Shivalinga',
      'Spiritual pilgrimage site revered across southern Rajasthan',
      'Panoramic high-altitude Aravalli scenery along the approach steps',
      'Natural pairing with Ranakpur Jain Temple on a single day excursion',
      'Quiet, uncommercialized mountain ambience away from tourist crowds',
    ],
    question_sections: {
      where_is_it:
        'Parshuram Mahadev Temple is situated in the Aravalli Hills on the border of Pali and Rajsamand districts near Sadri.',
      how_far:
        'It is approximately 60 to 65 km by road from Jawai Bandh. Drive time is around 1 hour 15 minutes, with additional time needed for the pedestrian descent into the cave.',
      is_it_worth_visiting:
        'Yes, for active travellers and pilgrims who appreciate natural cave shrines and scenic mountain vistas.',
      how_much_time:
        'Allow 2 to 3 hours at the temple site to comfortably navigate the steps and darshan.',
      can_combine_safari:
        'Because of the driving and climbing involved, it is best planned as a dedicated day trip paired with Ranakpur.',
    },
    nearby_attractions: [
      { name: 'Ranakpur Jain Temple', slug: 'ranakpur-jain-temple-near-jawai', distance: 'Approx. 15 km', reason: 'World-renowned marble temple' },
      { name: 'Ranakpur Dam', slug: 'ranakpur-dam-near-jawai', distance: 'Approx. 18 km', reason: 'Scenic reservoir' },
      { name: 'Kumbhalgarh Fort', slug: 'kumbhalgarh-fort-from-jawai', distance: 'Approx. 25 km', reason: 'Historic hill fort' },
    ],
    suggested_itinerary: {
      title: 'Aravalli Spiritual & Cave Sanctuary Tour',
      summary: 'Explore mountain cave devotion followed by marble architectural marvels.',
      steps: [
        { timeOrDay: '07:30 AM', activity: 'Departure from Jawai', description: 'Scenic morning drive towards Sadri and the Aravallis.' },
        { timeOrDay: '09:00 AM - 11:30 AM', activity: 'Parshuram Mahadev Darshan', description: 'Descend to the natural cave shrine, darshan, and mountain photography.' },
        { timeOrDay: '12:00 PM - 02:00 PM', activity: 'Ranakpur Temple & Lunch', description: 'Lunch followed by exploration of the famous Chaumukha marble temple.' },
        { timeOrDay: '03:30 PM', activity: 'Return to Jawai', description: 'Smooth transfer back to your resort.' },
      ],
    },
    faq: [
      {
        question: 'How far is Parshuram Mahadev from Jawai Bandh?',
        answer: 'A commonly cited road estimate is about 61 km; we display Approx. 60-65 km road distance plus pedestrian approach.',
      },
      {
        question: 'Is there walking involved?',
        answer: 'Yes. Reaching the cave temple involves walking down and up hundreds of masonry steps through the mountain gorge.',
      },
      {
        question: 'Can Parshuram Mahadev be combined with Ranakpur?',
        answer: 'Yes. It fits naturally with the Ranakpur side of a Jawai excursion and can be comfortably completed on the same day.',
      },
      {
        question: 'Is it suitable for elderly travellers?',
        answer: 'Suitability depends on individual mobility because of steep stone steps. Confirm physical comfort before booking.',
      },
    ],
    source_notes: [
      'Rajasthan Tourism - Pali official attractions portal (tourism.rajasthan.gov.in/pali.html)',
      'Local temple trust administrative notices',
    ],
    publishing_note:
      'Do not present legends as historical proof. Confirm current approach/access and monsoon safety before selling.',
    last_fact_check_at: '2026-10-06',
    publish_status: 'live',
    hero_image: 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80', alt: 'Aravalli mountain gorge around Parshuram Mahadev' },
    ],
    seo_title: 'Parshuram Mahadev Temple from Jawai | Distance & Travel Guide',
    seo_description:
      'Visit Parshuram Mahadev from Jawai. See approximate road distance, hill/cave temple context, visit duration, nearby Ranakpur attractions and trip-planning tips.',
    h1: 'Parshuram Mahadev Temple Near Jawai',
    canonical_url: 'https://ghoomosa.in/parshuram-mahadev-near-jawai',
    cta_template:
      'Hi Ghoomosa, I want to plan a Jawai trip including Parshuram Mahadev Temple.\nTravel date: {date}\nGuests: {n}\nPickup city: {city}\nPlease share the best itinerary and package options.\nPage: {page_url}\nSource: {utm_source}',
  },

  // 6. KAMBESHWAR MAHADEV TEMPLE (P0)
  {
    id: 'attr-kambeshwar-mahadev',
    name: 'Kambeshwar Mahadev Temple',
    slug: 'kambeshwar-mahadev-temple-jawai',
    category: 'Spiritual & Cultural',
    theme: 'Temple',
    duration_type: 'short_visit',
    short_answer:
      'Kambeshwar Mahadev Temple is a hill-side Shiva temple commonly cited at roughly 11 km from Jawai Bandh. The approach through winding hill roads makes it both a spiritual stop and a scenic local excursion. It is easily combined with morning Jawai Dam visits and local village tours.',
    long_description: [
      'Kambeshwar Mahadev is one of the most practical temple additions to a Jawai itinerary because it sits relatively close to the central Jawai area. Situated atop a granite hill near Sumerpur / Sheoganj, the temple is dedicated to Lord Shiva.',
      'Local travel sources consistently describe the route as a narrow, winding hill approach featuring steep curves and natural boulder scenery. As your vehicle climbs, the plains of Jawai spread out below, offering panoramic views of rural farm fields, acacia scrub, and distant granite kopjes.',
      'Ghoomosa highlights this shrine for its spiritual calm, scenic drive, and safe accessibility, avoiding sensational wildlife claims while positioning it as a delightful short morning or afternoon cultural detour.',
    ],
    reference_point: 'Jawai Bandh, Rajasthan',
    distance_km_min: 10,
    distance_km_max: 12,
    travel_time_min: 20,
    travel_time_max: 30,
    distance_display: 'Approx. 11 km',
    travel_time_display: 'Approx. 20-30 min',
    distance_last_verified_at: '2026-10-06',
    distance_mode: 'fixed_range',
    lat: 25.1481,
    lng: 73.0822,
    best_time: 'Early morning or late afternoon; check monsoon road conditions',
    visit_duration: '45-90 minutes plus drive',
    best_for: ['Pilgrims', 'Families', 'Culture travellers', 'Guests with half a day free'],
    why_visit: [
      'Peaceful hill-top Shiva shrine revered by surrounding communities',
      'Scenic winding drive offering sweeping vistas over the Jawai landscape',
      'Short 20-to-30 minute drive from central Jawai safari camps',
      'Great vantage point for landscape and valley photography',
      'Effortless half-day pairing with Jawai Dam and local village visits',
    ],
    question_sections: {
      where_is_it:
        'Kambeshwar Mahadev Temple is located on an elevated granite hill near Sheoganj / Sumerpur, roughly north-west of Jawai Bandh in western Rajasthan.',
      how_far:
        'It is approximately 11 km from Jawai Bandh station. Travel time is around 20 to 30 minutes by car.',
      is_it_worth_visiting:
        'Yes. If you enjoy panoramic viewpoints and peaceful local temples without spending hours in the car, Kambeshwar Mahadev is an ideal stop.',
      how_much_time:
        'Plan for about 1 to 1.5 hours including the hill ascent, darshan, and enjoying the view from the summit.',
      can_combine_safari:
        'Easily. It fits neatly in between morning and afternoon safaris or as a late-morning excursion after breakfast.',
    },
    nearby_attractions: [
      { name: 'Jawai Dam', slug: 'jawai-dam', distance: 'Approx. 12 km', reason: 'Water reservoir and crocodile viewing' },
      { name: 'Abhinav Mahavir Dham', slug: 'abhinav-mahavir-dham-near-jawai', distance: 'Approx. 8 km', reason: 'Jain pilgrimage temple' },
      { name: 'Ashapura Mataji Temple, Bisalpur', slug: 'ashapura-mataji-temple-bisalpur-jawai', distance: 'Approx. 14 km', reason: 'Village cultural shrine' },
      { name: 'Jawai Hills', slug: 'jawai-hills', distance: 'Adjacent', reason: 'Granite boulder terrain' },
    ],
    suggested_itinerary: {
      title: 'Morning Spiritual & Panoramic View Circuit',
      summary: 'Pair a scenic hill climb with temple darshan and a tranquil reservoir walk.',
      steps: [
        { timeOrDay: '09:00 AM', activity: 'Depart Lodge after Breakfast', description: 'Drive along scenic rural roads toward the hill ridge.' },
        { timeOrDay: '09:30 AM - 10:45 AM', activity: 'Kambeshwar Mahadev Darshan', description: 'Ascend the winding hill, offer prayers, and photograph panoramic valley views.' },
        { timeOrDay: '11:15 AM - 12:30 PM', activity: 'Jawai Dam Exploration', description: 'Drive to the reservoir embankment for birdwatching and scenery.' },
        { timeOrDay: '01:00 PM', activity: 'Return for Lunch', description: 'Relax at your lodge before the afternoon wildlife safari.' },
      ],
    },
    faq: [
      {
        question: 'How far is Kambeshwar Mahadev Temple from Jawai Bandh?',
        answer: 'Multiple Jawai travel and mapping sources cite roughly 11 km (about 20-30 minutes driving).',
      },
      {
        question: 'What is special about the visit?',
        answer: 'The temple combines quiet spiritual atmosphere with an exhilarating winding hill approach that rewards visitors with 360-degree countryside views.',
      },
      {
        question: 'Can it be visited in half a day?',
        answer: 'Yes. It is one of the easiest local attractions to combine with Jawai Dam or nearby village sightseeing.',
      },
      {
        question: 'Is the road suitable in all seasons?',
        answer: 'The road is paved, but conditions can vary around heavy monsoon weather. Confirm local route status before departure.',
      },
    ],
    source_notes: [
      'Pali district regional tourism listings',
      'Local transport operators and temple trust documentation',
    ],
    publishing_note:
      'Avoid unverified statements about the temple’s exact age/founding unless the local temple authority provides a source.',
    last_fact_check_at: '2026-10-06',
    publish_status: 'live',
    hero_image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80', alt: 'Winding hill approach to Kambeshwar Mahadev Temple' },
    ],
    seo_title: 'Kambeshwar Mahadev Temple Jawai | Distance, Route & Travel Guide',
    seo_description:
      'Explore Kambeshwar Mahadev Temple near Jawai Bandh - approximate distance, hill-road experience, best time, nearby attractions and Ghoomosa planning tips.',
    h1: 'Kambeshwar Mahadev Temple Near Jawai',
    canonical_url: 'https://ghoomosa.in/kambeshwar-mahadev-temple-jawai',
    cta_template:
      'Hi Ghoomosa, I want to plan a Jawai trip including Kambeshwar Mahadev Temple.\nTravel date: {date}\nGuests: {n}\nPickup city: {city}\nPlease share the best itinerary and package options.\nPage: {page_url}\nSource: {utm_source}',
  },

  // 7. DEV GIRI TEMPLE (DRAFT / P1)
  {
    id: 'attr-devgiri-temple',
    name: 'Dev Giri Temple',
    slug: 'devgiri-temple-jawai',
    category: 'Spiritual & Cultural',
    theme: 'Temple',
    duration_type: 'short_visit',
    short_answer:
      'Dev Giri Temple is described in Jawai travel sources as a hill/rock temple associated locally with Ashapura Mataji. Because public sources are inconsistent about the exact pin and route, Ghoomosa verifies the location locally before publishing a fixed distance. It reflects the deep harmony between local shrines and rocky terrain.',
    long_description: [
      'Dev Giri Temple represents the close relationship between local faith, granite hills and village life in the Jawai landscape. Often described in local lore as a temple nestled naturally into a cavernous boulder formation, it is traditionally associated with Goddess Ashapura.',
      'Ghoomosa focuses on the genuine spiritual tradition, respect for rural community beliefs, and responsible nature visiting, avoiding sensationalized claims about regular leopard visits unless properly verified and appropriate.',
      'This draft page ensures that when our ground naturalists and local team verify the precise access pin and customary visiting hours, accurate travel advice can be published seamlessly.',
    ],
    reference_point: 'Jawai Bandh, Rajasthan',
    distance_km_min: null,
    distance_km_max: null,
    travel_time_min: null,
    travel_time_max: null,
    distance_display: 'Varies across Jawai landscape (verification in progress)',
    travel_time_display: 'Route dependent',
    distance_last_verified_at: null,
    distance_mode: 'dynamic',
    lat: null, // Keep null per instructions
    lng: null,
    best_time: 'Morning or late afternoon; local guide advice essential',
    visit_duration: '30-90 minutes depending on approach',
    best_for: ['Cultural travellers', 'Pilgrims', 'Photographers', 'Local-experience seekers'],
    why_visit: [
      'Traditional rock-embedded hill shrine honouring regional deities',
      'Cultural context demonstrating harmonious coexistence in Jawai',
      'Panoramic granite boulder perspectives where permitted',
      'Intimate spiritual experience away from commercial circuits',
    ],
    question_sections: {
      where_is_it:
        'Dev Giri Temple is described as a hill shrine situated among the granite kopjes of the Jawai region. Exact coordinates are verified on the ground before public pin sharing.',
      how_far:
        'Distance depends on the specific village approach taken from your safari lodge. A fixed figure is withheld until ground GPS confirmation.',
      is_it_worth_visiting:
        'Yes, for travellers seeking authentic, low-impact cultural interactions and rural temple aesthetics.',
      how_much_time:
        'Allow 45 minutes to an hour for the visit and walking approach.',
      can_combine_safari:
        'Yes, but only via permitted access routes coordinated through your licensed local operator.',
    },
    nearby_attractions: [
      { name: 'Jawai Hills', slug: 'jawai-hills', distance: 'Surrounding', reason: 'Granite boulder terrain' },
      { name: 'Rabari Village Experience', slug: 'jawai-village-experience', distance: 'Nearby', reason: 'Pastoral culture' },
      { name: 'Jawai Dam', slug: 'jawai-dam', distance: 'Route dependent', reason: 'Water reservoir views' },
    ],
    suggested_itinerary: {
      title: 'Jawai Granite Hills & Culture Trail',
      summary: 'Explore traditional rural shrines and pastoral settlements in the granite kopjes.',
      steps: [
        { timeOrDay: 'Morning', activity: 'Local Village & Landscape Drive', description: 'Explore scenic granite formations with a local guide.' },
        { timeOrDay: 'Midday', activity: 'Dev Giri Temple Visit', description: 'Darshan and respectful observation of the boulder shrine.' },
        { timeOrDay: 'Evening', activity: 'Sunset Hilltop Tea', description: 'Relax on safe granite slabs with tea as the sun sets.' },
      ],
    },
    faq: [
      {
        question: 'Where is Dev Giri Temple in Jawai?',
        answer: 'It is described as a hill temple within the wider Jawai landscape; Ghoomosa publishes an exact location only after local pin verification.',
      },
      {
        question: 'Is Dev Giri Temple dedicated to Ashapura Mataji?',
        answer: 'Several Jawai travel sources associate the temple with Ashapura Mataji; exact details are re-verified locally before publication.',
      },
      {
        question: 'Can I combine Dev Giri Temple with a safari?',
        answer: 'Potentially, but only as permitted by local land access. It should not be treated as part of an official safari zone unless verified.',
      },
      {
        question: 'Is Dev Giri Temple the same as Ashapura Mataji Temple in Bisalpur?',
        answer: 'We treat them as separate entities in our records until ground verification confirms otherwise.',
      },
    ],
    source_notes: [
      'Local driver and naturalist reports',
      'Pali district cultural travel notes',
    ],
    publishing_note:
      'PUBLISH ONLY AFTER LOCAL PIN + NAME VERIFICATION. Do not hard-code a distance.',
    last_fact_check_at: '2026-10-06',
    publish_status: 'draft', // DRAFT per instruction
    hero_image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80', alt: 'Granite rock shrine in Jawai' },
    ],
    seo_title: 'Dev Giri Temple Jawai | Ashapura Mataji Hill Temple Travel Guide',
    seo_description:
      'Discover Dev Giri Temple in the Jawai landscape - local Ashapura Mataji tradition, hill setting, route guidance, nearby attractions and Ghoomosa itinerary planning.',
    h1: 'Dev Giri Temple Jawai',
    canonical_url: 'https://ghoomosa.in/devgiri-temple-jawai',
    cta_template:
      'Hi Ghoomosa, I want to plan a Jawai trip including Dev Giri Temple.\nTravel date: {date}\nGuests: {n}\nPickup city: {city}\nPlease share the best itinerary and package options.\nPage: {page_url}\nSource: {utm_source}',
  },

  // 8. RANAKPUR DAM (P1)
  {
    id: 'attr-ranakpur-dam',
    name: 'Ranakpur Dam',
    slug: 'ranakpur-dam-near-jawai',
    category: 'Scenic Excursions',
    theme: 'Nature',
    duration_type: 'short_visit',
    short_answer:
      'Ranakpur Dam is a scenic reservoir in the Ranakpur area of Pali district and works best as an add-on to a Ranakpur Jain Temple excursion from Jawai. Approximate road distance should be treated as around 50-55 km until rechecked on the final map pin. It provides serene mountain and water views.',
    long_description: [
      'Rajasthan Tourism lists Ranakpur Dam as a noteworthy Pali attraction and describes it as a laid-back, scenic destination tucked against the forested slopes of the Aravalli Hills. Surrounded by lush flora and dense deciduous forest, the dam creates a tranquil freshwater lake.',
      'Unlike the massive, open expanses of Jawai Dam, Ranakpur Dam is more intimate, framed on all sides by wooded mountain ridges. It serves as an idyllic retreat after an immersive tour of the nearby Jain temples.',
      'Positioned as a nature and photography stop, it adds a refreshing outdoor dimension to the Jawai-to-Ranakpur day trip without requiring extensive extra driving.',
    ],
    reference_point: 'Jawai Bandh, Rajasthan',
    distance_km_min: 50,
    distance_km_max: 55,
    travel_time_min: 60,
    travel_time_max: 75,
    distance_display: 'Approx. 50-55 km',
    travel_time_display: 'Approx. 1 hr to 1 hr 15 min',
    distance_last_verified_at: '2026-10-06',
    distance_mode: 'fixed_range',
    lat: 25.1205,
    lng: 73.4682,
    best_time: 'October to March; late afternoon for gentle golden light reflecting on water',
    visit_duration: '30-60 minutes',
    best_for: ['Couples', 'Families', 'Landscape photographers', 'Slow-travel guests'],
    why_visit: [
      'Tranquil, uncrowded reservoir setting nestled in green Aravalli foothills',
      'Only 3 km from the famous Ranakpur Jain Temple complex',
      'Exceptional reflection photography of wooded hills and calm water',
      'Serene picnic pause during a full-day heritage excursion',
      'Pleasant mountain breeze and abundant seasonal birdlife',
    ],
    question_sections: {
      where_is_it:
        'Ranakpur Dam is located near Ranakpur in the Desuri tehsil of Pali district, Rajasthan, roughly 3 km from the main temple complex.',
      how_far:
        'It is approximately 50 to 55 km from Jawai Bandh by road. Drive time is around 1 hour to 1 hour 15 minutes.',
      is_it_worth_visiting:
        'Yes, as a relaxing 30-minute nature break following the stone architecture of Ranakpur Jain Temple.',
      how_much_time:
        'Allow 30 to 45 minutes for a leisurely lakeside walk and photography.',
      can_combine_safari:
        'Yes, seamlessly as part of your Ranakpur day excursion from Jawai.',
    },
    nearby_attractions: [
      { name: 'Ranakpur Jain Temple', slug: 'ranakpur-jain-temple-near-jawai', distance: 'Approx. 3 km', reason: 'Masterpiece 15th-century marble temple' },
      { name: 'Kumbhalgarh Fort', slug: 'kumbhalgarh-fort-from-jawai', distance: 'Approx. 35 km', reason: 'Hill fortress with panoramic walls' },
      { name: 'Parshuram Mahadev Temple', slug: 'parshuram-mahadev-near-jawai', distance: 'Approx. 18 km', reason: 'Cave shrine in mountain gorge' },
      { name: 'Jawai Dam', slug: 'jawai-dam', distance: 'Approx. 52 km', reason: 'Return to Jawai hub' },
    ],
    suggested_itinerary: {
      title: 'Ranakpur Heritage & Nature Afternoon',
      summary: 'Combine world-class Jain architecture with serene reservoir reflections.',
      steps: [
        { timeOrDay: '10:00 AM - 12:30 PM', activity: 'Ranakpur Jain Temple Tour', description: 'Admire the 1,444 marble pillars and quiet sanctums.' },
        { timeOrDay: '12:45 PM - 01:45 PM', activity: 'Valley Heritage Lunch', description: 'Enjoy fresh regional lunch at a nearby orchard retreat.' },
        { timeOrDay: '02:00 PM - 02:45 PM', activity: 'Ranakpur Dam Scenic Pause', description: 'Walk along the embankment, taking in mountain views and water reflections.' },
        { timeOrDay: '03:00 PM', activity: 'Return to Jawai', description: 'Scenic drive back to Jawai in time for golden hour.' },
      ],
    },
    faq: [
      {
        question: 'How far is Ranakpur Dam from Jawai?',
        answer: 'Use an approximate 50-55 km planning range by road, which takes about 1 hour to 1 hour 15 minutes.',
      },
      {
        question: 'Is Ranakpur Dam worth adding to a Ranakpur trip?',
        answer: 'Yes, if you enjoy peaceful nature views or photography and have 30 to 45 minutes to spare after visiting the temple.',
      },
      {
        question: 'Can I combine Ranakpur Dam and Kumbhalgarh?',
        answer: 'Yes, but it makes the day longer. Prioritize the Jain Temple and Kumbhalgarh Fort first if time is limited.',
      },
      {
        question: 'Is swimming recommended at Ranakpur Dam?',
        answer: 'No. Swimming or entering the water is strictly discouraged as there are no lifeguard facilities and reservoir depth varies.',
      },
    ],
    source_notes: [
      'Rajasthan Tourism - Pali official attractions directory (tourism.rajasthan.gov.in/pali.html)',
      'Regional irrigation department notices',
    ],
    publishing_note:
      'Show only safe, public viewpoints. No water-safety claims without local verification.',
    last_fact_check_at: '2026-10-06',
    publish_status: 'live',
    hero_image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', alt: 'Ranakpur Dam calm waters and wooded Aravalli hills' },
    ],
    seo_title: 'Ranakpur Dam from Jawai | Distance, Photography & Day Trip Guide',
    seo_description:
      'Explore Ranakpur Dam from Jawai - approximate distance, scenic setting, photography, nearby Ranakpur Jain Temple and Ghoomosa day-trip planning.',
    h1: 'Ranakpur Dam Near Jawai',
    canonical_url: 'https://ghoomosa.in/ranakpur-dam-near-jawai',
    cta_template:
      'Hi Ghoomosa, I want to plan a Jawai trip including Ranakpur Dam.\nTravel date: {date}\nGuests: {n}\nPickup city: {city}\nPlease share the best itinerary and package options.\nPage: {page_url}\nSource: {utm_source}',
  },

  // 9. RABARI VILLAGE EXPERIENCE (P0)
  {
    id: 'attr-rabari-village',
    name: 'Rabari Village Experience',
    slug: 'jawai-village-experience', // Live canonical URL
    category: 'Local Life',
    theme: 'Culture',
    duration_type: 'short_visit',
    short_answer:
      'Rabari community experiences in Jawai should be presented as respectful, hosted cultural interactions - not as a fixed tourist attraction. The villages are spread across the Jawai landscape, so distance depends on the selected host village and route. Guests learn about pastoral rhythms, folklore and peaceful human-wildlife coexistence.',
    long_description: [
      'The indigenous Rabari pastoralists are the cultural soul and traditional guardians of Jawai. Renowned for their crimson turbans, white dhotis, ornate silver jewelry and deep pastoral heritage, this semi-nomadic camel and sheep-herding community has coexisted alongside wild leopards in these granite hills for hundreds of years.',
      'A well-planned Rabari village experience is designed as a respectful, hosted cultural interaction rather than a commercial tourist spectacle. Guests are guided through traditional dharas (homesteads) with local village elders, witnessing traditional chai preparation, camel milk brewing, wool spinning and centuries of folklore.',
      'Ghoomosa operates strictly under responsible travel ethics: photography of residents and private spaces requires clear advance consent, visits directly support local artisans, and commercial exploitation is prohibited.',
    ],
    reference_point: 'Jawai Bandh, Rajasthan',
    distance_km_min: null,
    distance_km_max: null,
    travel_time_min: 10,
    travel_time_max: 25,
    distance_display: 'Varies by selected host village across Jawai landscape',
    travel_time_display: 'Approx. 10-25 min drive from lodge',
    distance_last_verified_at: '2026-10-06',
    distance_mode: 'dynamic',
    lat: null, // Dynamic by village
    lng: null,
    best_time: 'Early morning (during livestock milking) or late afternoon; year-round subject to host availability',
    visit_duration: '1-2 hours',
    best_for: ['Cultural travellers', 'Families', 'Portrait photographers (with permission)', 'International guests'],
    why_visit: [
      'Authentic insight into the legendary Rabari human-leopard peaceful coexistence',
      'Respectful, hosted cultural interactions with village elders and families',
      'Demonstration of traditional spinning, pottery, and daily pastoral lifestyle',
      'Opportunity to purchase handmade artisanal woolcrafts and textiles directly',
      'Meaningful slow-travel experience connecting travellers with Rajasthan’s living soul',
    ],
    question_sections: {
      where_is_it:
        'Rabari communities live in several villages across the Jawai landscape, including Perwa, Sena, Bisalpur, Varawal and Bera in Pali district.',
      how_far:
        'There is no single fixed distance. Depending on where you stay, the chosen host village is typically a 10 to 25 minute drive from your lodge.',
      is_it_worth_visiting:
        'Yes. Most travellers cite the warmth, dignity and environmental harmony of the Rabari people as the most touching highlight of their Jawai journey.',
      how_much_time:
        'A hosted village walk typically lasts 1.5 to 2 hours.',
      can_combine_safari:
        'Yes. It fits effortlessly into late morning hours after a dawn leopard safari or during late afternoon before sunset.',
    },
    nearby_attractions: [
      { name: 'Jawai Dam', slug: 'jawai-dam', distance: '10-20 km', reason: 'Wetland landscape' },
      { name: 'Leopard Caves & Leopard Hills', slug: 'leopard-caves-jawai', distance: 'Surrounding', reason: 'Coexistence safari terrain' },
      { name: 'Jawai Hills', slug: 'jawai-hills', distance: 'Adjacent', reason: 'Granite grazing kopjes' },
      { name: 'Ashapura Mataji Temple, Bisalpur', slug: 'ashapura-mataji-temple-bisalpur-jawai', distance: 'Village dependent', reason: 'Local shrine' },
    ],
    suggested_itinerary: {
      title: 'Pastoral Heritage & Wildlife Day',
      summary: 'Experience the living connection between Rajasthan’s pastoralists and wild leopards.',
      steps: [
        { timeOrDay: '05:45 AM - 08:30 AM', activity: 'Dawn Leopard Tracking', description: 'Observe wild leopards emerging onto sunlit granite rocks.' },
        { timeOrDay: '09:00 AM - 10:30 AM', activity: 'Breakfast & Rest', description: 'Enjoy lodge amenities and leisure.' },
        { timeOrDay: '11:00 AM - 01:00 PM', activity: 'Hosted Rabari Village Walk', description: 'Visit a Rabari dhara with our guide, learn about pastoral life, and enjoy fresh chai.' },
        { timeOrDay: '01:30 PM - 04:00 PM', activity: 'Lunch & Relaxation', description: 'Regional cuisine and downtime.' },
        { timeOrDay: '04:30 PM - 06:30 PM', activity: 'Sunset Viewpoint Drive', description: 'Drive out to scenic granite kopjes for sunset high tea.' },
      ],
    },
    faq: [
      {
        question: 'What is a Rabari village experience in Jawai?',
        answer: 'It is a hosted, respectful cultural visit led by a local guide to introduce travellers to local pastoral life, traditions and human-wildlife coexistence.',
      },
      {
        question: 'Can I visit any village on my own?',
        answer: 'Ghoomosa strongly encourages pre-arranged visits with accredited local hosts and guides rather than unplanned intrusion into private homesteads.',
      },
      {
        question: 'Can I photograph local people?',
        answer: 'Only with clear, polite permission. Respecting community members, women, and private courtyards is strictly mandatory.',
      },
      {
        question: 'How far are Rabari villages from Jawai Bandh?',
        answer: 'There is no single distance because multiple villages across the region are home to Rabari families. Exact locations are coordinated based on your itinerary.',
      },
    ],
    source_notes: [
      'Anthropological and pastoral community field documentation in Pali/Marwar',
      'Ghoomosa Responsible Community Travel Guidelines',
    ],
    publishing_note:
      'Responsible-travel standards are mandatory. Do not exoticize the community or stage intrusive photography. Include a visible etiquette/what-to-do-and-not-do block.',
    last_fact_check_at: '2026-10-06',
    publish_status: 'live',
    hero_image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80', alt: 'Rabari shepherd in traditional crimson turban in Jawai' },
      { url: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80', alt: 'Traditional rural homestead in Jawai countryside' },
    ],
    seo_title: 'Rabari Village Experience Jawai | Local Culture & Responsible Travel',
    seo_description:
      'Experience Rabari culture in Jawai responsibly. Learn how village visits work, etiquette, photography rules, safari combinations and how Ghoomosa plans local experiences.',
    h1: 'Rabari Village Experience in Jawai',
    canonical_url: 'https://ghoomosa.in/jawai-village-experience',
    cta_template:
      'Hi Ghoomosa, I want to plan a Jawai trip including a Rabari Village Experience.\nTravel date: {date}\nGuests: {n}\nPickup city: {city}\nPlease share the best itinerary and package options.\nPage: {page_url}\nSource: {utm_source}',
  },

  // 10. LEOPARD CAVES / LEOPARD HILLS (P0)
  {
    id: 'attr-leopard-caves',
    name: 'Leopard Caves & Leopard Hills',
    slug: 'leopard-caves-jawai',
    category: 'Wildlife & Nature',
    theme: 'Wildlife',
    duration_type: 'half_day',
    short_answer:
      "Jawai's leopard habitat is spread across granite hills, natural caves, village lands and conservation areas rather than one single 'Leopard Cave' attraction. Visitors should access the landscape only through responsible, locally permitted safari routes. Ghoomosa guides travellers on how the terrain creates natural shelters for wildlife.",
    long_description: [
      'The iconic rocky terrain of Jawai is formed of monolithic granite hills and prehistoric boulder formations dating back over a billion years. Wind, rain and tectonic weathering have carved natural clefts, overhangs and deep cave chambers that provide optimal denning and daytime resting shelters for wild Indian leopards (Panthera pardus fusca).',
      'Public scientific and conservation literature recognizes that leopard movement in Jawai extends seamlessly across hills, natural caves, scrub corridors and village boundaries rather than staying within a fenced national park.',
      'To protect animal welfare and habitat integrity, Ghoomosa strictly avoids publicizing or pinning sensitive den GPS coordinates. This page provides travellers with essential educational context on geological habitat formations, responsible safari tracking, and verified ethical wildlife viewing.',
    ],
    reference_point: 'Jawai Bandh, Rajasthan',
    distance_km_min: null,
    distance_km_max: null,
    travel_time_min: null,
    travel_time_max: null,
    distance_display: 'Spread across Jawai safari zones / accessible via authorized 4x4',
    travel_time_display: 'Conducted during 2.5 - 3.5 hr guided safaris',
    distance_last_verified_at: '2026-10-06',
    distance_mode: 'dynamic',
    lat: null, // CRITICAL: NEVER EXPOSE SENSITIVE DEN COORDINATES
    lng: null,
    best_time: 'October to March for comfortable outdoor temperatures; wildlife tracking operates year-round',
    visit_duration: 'Part of regular 3-hour dawn or dusk safari drives',
    best_for: ['Wildlife enthusiasts', 'Photographers', 'Conservation-minded travellers', 'Nature lovers'],
    why_visit: [
      'Understand how ancient granite geology creates natural sheltered caves for big cats',
      'Observe wild leopards scanning their territories from sun-warmed boulder summits',
      'Learn the intricate science of tracking with licensed local naturalist spotters',
      'Experience unfenced wildlife conservation embedded organically with local human habitats',
      'Exceptional telephoto photography opportunities against clean rock textures',
    ],
    question_sections: {
      where_is_it:
        'Leopard caves and hill ridges are distributed across multiple conservation zones in the Jawai-Bera-Sena-Perwa corridor of southern Rajasthan.',
      how_far:
        'Because safaris explore active territories dynamically, there is no single entrance or km marker. Vehicles depart directly from lodges and reach prime hills within 10 to 30 minutes.',
      is_it_worth_visiting:
        'Yes. This landscape is the primary reason wildlife enthusiasts worldwide travel to Jawai.',
      how_much_time:
        'Exploration takes place during standard 3-hour dawn (05:45 AM - 08:45 AM) or dusk (04:15 PM - 07:15 PM) safari drives.',
      can_combine_safari:
        'This is the core safari experience itself! It pairs naturally with Jawai Dam visits and Rabari village walks between game drives.',
    },
    nearby_attractions: [
      { name: 'Jawai Dam', slug: 'jawai-dam', distance: 'Adjacent', reason: 'Wetland landscape and crocodile viewing' },
      { name: 'Jawai Hills', slug: 'jawai-hills', distance: 'Coextensive', reason: 'Wider granite geological landscape' },
      { name: 'Rabari Village Experience', slug: 'jawai-village-experience', distance: 'Adjacent', reason: 'Coexistence culture' },
    ],
    suggested_itinerary: {
      title: 'Signature Jawai Leopard Tracking Program',
      summary: 'Maximize ethical sighting opportunities across dawn and golden hour dusk windows.',
      steps: [
        { timeOrDay: '05:30 AM', activity: 'Pre-Dawn Tea & Naturalist Briefing', description: 'Briefing on tracking ethics, recent leopard movements and territorial routes.' },
        { timeOrDay: '05:45 AM - 08:45 AM', activity: 'Dawn Leopard Kopje Safari', description: 'Track leopards as they return from nocturnal patrols onto boulder perches.' },
        { timeOrDay: '09:00 AM - 03:30 PM', activity: 'Lodge Leisure & Dam Visit', description: 'Breakfast, relaxation by the pool, and midday crocodile observation.' },
        { timeOrDay: '04:15 PM - 07:15 PM', activity: 'Dusk Cave & Ridge Safari', description: 'Position vehicles for sunset silhouettes as big cats awaken for evening hunts.' },
      ],
    },
    faq: [
      {
        question: 'Where are the leopard caves in Jawai?',
        answer: 'They are spread across natural boulder kopjes throughout the wider Jawai landscape. Ghoomosa strictly avoids publishing sensitive den GPS coordinates to protect wildlife.',
      },
      {
        question: 'Can I visit leopard caves without a safari?',
        answer: 'No. Independent foot exploration into wildlife caves is dangerous and disruptive. All visits must be conducted via authorized 4x4 safaris with licensed local guides.',
      },
      {
        question: 'Are leopard sightings guaranteed?',
        answer: 'No. Leopards are wild and move freely in an unfenced natural habitat. Sightings depend on animal movement, temperature and season.',
      },
      {
        question: 'Why is Jawai suitable for leopards?',
        answer: 'The landscape combines natural cave shelters, year-round water sources, ample prey, and centuries of non-violent coexistence with pastoral communities.',
      },
    ],
    source_notes: [
      'Science Reporter & wildlife conservation studies on Rajasthan leopard corridors',
      'Ghoomosa Ethical Wildlife Viewing Policy',
    ],
    publishing_note:
      'CRITICAL CONSERVATION PAGE. Never expose den GPS coordinates or specific den locations (in copy, schema, images, EXIF, alt text or map embeds). Ongoing court proceedings on Jawai habitat make careful access language especially important; use this to guide editorial policy and do NOT cite court proceedings in public marketing copy.',
    last_fact_check_at: '2026-10-06',
    publish_status: 'live',
    hero_image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80', alt: 'Wild Indian leopard resting on massive granite boulder in Jawai' },
      { url: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80', alt: 'Natural granite cave cleft sheltering wildlife in Jawai hills' },
    ],
    seo_title: 'Leopard Caves Jawai | Leopard Hills, Safari Landscape & Travel Guide',
    seo_description:
      'Learn about the leopard caves and granite hills of Jawai, how safari zones work, responsible wildlife viewing and Ghoomosa safari planning.',
    h1: 'Leopard Caves & Leopard Hills of Jawai',
    canonical_url: 'https://ghoomosa.in/leopard-caves-jawai',
    cta_template:
      'Hi Ghoomosa, I want to plan a Jawai trip including Leopard Caves & Leopard Hills.\nTravel date: {date}\nGuests: {n}\nPickup city: {city}\nPlease share the best itinerary and package options.\nPage: {page_url}\nSource: {utm_source}',
  },

  // 11. JAWAI HILLS (P1)
  {
    id: 'attr-jawai-hills',
    name: 'Jawai Hills',
    slug: 'jawai-hills',
    category: 'Wildlife & Nature',
    theme: 'Nature',
    duration_type: 'half_day',
    short_answer:
      'The Jawai Hills are the rocky granite landscape surrounding the Jawai region, forming the visual setting for safaris, village life and wildlife habitat. They are a landscape region, not one attraction with a single gate or fixed distance. Travellers explore them for raw geology, wildlife viewpoints and sunrise perspectives.',
    long_description: [
      'The Jawai Hills refer to the distinctive geological cluster of ancient granite monoliths (kopjes) that erupt dramatically from the alluvial plains of southern Rajasthan. Formed over 850 million years ago, these weathered plutonic formations represent some of the oldest exposed rock faces on Earth.',
      'Unlike continuous mountain ranges, the Jawai Hills rise as isolated granite domes, sheer cliffs, and tumbling boulder stacks. Between these monolithic hills lie thorn scrub, seasonal river washes, pastoral pastures, and the life-giving Jawai reservoir.',
      'This page serves as an essential geographic and scenic guide, helping travellers visualize why Jawai looks so utterly distinct from the rest of India and how to appreciate its raw geological and ecological majesty safely.',
    ],
    reference_point: 'Jawai Bandh, Rajasthan',
    distance_km_min: null,
    distance_km_max: null,
    travel_time_min: null,
    travel_time_max: null,
    distance_display: 'Surrounds entire Jawai Bandh region / landscape area',
    travel_time_display: 'Explored via safari routes & scenic drives',
    distance_last_verified_at: '2026-10-06',
    distance_mode: 'dynamic',
    lat: null, // Landscape region
    lng: null,
    best_time: 'October to March for comfortable outdoor temperatures; stunning golden light at dawn and dusk',
    visit_duration: 'Explored across multiple 2 to 3 hour drives during your stay',
    best_for: ['Photographers', 'Geology enthusiasts', 'Nature travellers', 'Couples seeking dramatic vistas'],
    why_visit: [
      'Spectacular prehistoric pink and grey granite kopjes dating back hundreds of millions of years',
      'Panoramic 360-degree sunrise and sunset vistas overlooking the desert horizon',
      'Natural habitat for leopards, hyenas, sloth bears, and raptors',
      'World-class landscape photography under dramatic morning and evening desert light',
      'Dramatic visual setting for luxury tented camps and open 4x4 safaris',
    ],
    question_sections: {
      where_is_it:
        'The Jawai Hills encompass an area of roughly 100 square kilometres across the Pali and Sirohi border region in southwestern Rajasthan.',
      how_far:
        'Because the hills define the entire destination, lodges and safari operations are set directly at the base of or amidst the hills.',
      is_it_worth_visiting:
        'Yes. The dramatic visual geometry of the granite hills is what creates Jawai’s otherworldly, almost surreal atmosphere.',
      how_much_time:
        'You experience the hills continuously throughout your trip during safaris, sunrise walks, and high-tea drives.',
      can_combine_safari:
        'The hills form the actual stage for every safari drive and nature walk.',
    },
    nearby_attractions: [
      { name: 'Leopard Caves & Leopard Hills', slug: 'leopard-caves-jawai', distance: 'Within landscape', reason: 'Wildlife habitat' },
      { name: 'Jawai Dam', slug: 'jawai-dam', distance: 'Central basin', reason: 'Reservoir scenery' },
      { name: 'Kambeshwar Mahadev Temple', slug: 'kambeshwar-mahadev-temple-jawai', distance: 'Approx. 11 km', reason: 'Hilltop shrine' },
      { name: 'Rabari Village Experience', slug: 'jawai-village-experience', distance: 'Within valleys', reason: 'Pastoral settlements' },
    ],
    suggested_itinerary: {
      title: 'Geological & Landscape Immersion Trail',
      summary: 'Explore ancient granite kopjes, boulder caves, and hilltop sunset points.',
      steps: [
        { timeOrDay: '06:00 AM - 08:30 AM', activity: 'Morning Granite Ascent Drive', description: 'Navigate gently ascending rock slopes for panoramic dawn photography.' },
        { timeOrDay: '09:00 AM - 03:30 PM', activity: 'Lodge Relaxation & Geology Briefing', description: 'Unwind at your resort and learn about regional rock formation history.' },
        { timeOrDay: '04:30 PM - 06:45 PM', activity: 'Sunset Kopje Sundowner', description: 'Climb a permitted boulder summit for sunset high tea overlooking the reservoir.' },
      ],
    },
    faq: [
      {
        question: 'What are the Jawai Hills?',
        answer: 'They are ancient granite hill formations (kopjes) in Pali district, Rajasthan, forming the natural habitat for leopards and local villages.',
      },
      {
        question: 'Are the Jawai Hills a single tourist point?',
        answer: 'No. They are an expansive regional landscape spread across dozens of square kilometres, featuring numerous hills and safari routes.',
      },
      {
        question: 'Can I drive into the hills myself?',
        answer: 'You should only use public roads. Traversing off-road boulder terrain and wildlife zones requires certified 4x4 vehicles and experienced local drivers.',
      },
      {
        question: 'Are the hills good for photography?',
        answer: 'Exceptionally so. The weathered boulder textures, warm morning granite tones, and wildlife silhouettes make it a world-class landscape photography destination.',
      },
    ],
    source_notes: [
      'Geological Survey of India notes on Erinpura Granite formations',
      'Rajasthan Tourism geographic destination guides',
    ],
    publishing_note:
      'Avoid outdated geology claims such as "volcanic granite" without a geologically reliable source. Use neutral wording: ancient granite formations / rocky landscape.',
    last_fact_check_at: '2026-10-06',
    publish_status: 'live',
    hero_image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80', alt: 'Granite boulder kopje summit at sunset in Jawai' },
      { url: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80', alt: 'Monolithic granite rock hills rising over scrubland' },
    ],
    seo_title: 'Jawai Hills Rajasthan | Granite Landscape, Viewpoints & Safari Guide',
    seo_description:
      'Explore the Jawai Hills landscape in Rajasthan - granite formations, wildlife habitat, viewpoints, photography, nearby attractions and Ghoomosa trip planning.',
    h1: 'Jawai Hills Rajasthan',
    canonical_url: 'https://ghoomosa.in/jawai-hills',
    cta_template:
      'Hi Ghoomosa, I want to plan a Jawai trip including Jawai Hills.\nTravel date: {date}\nGuests: {n}\nPickup city: {city}\nPlease share the best itinerary and package options.\nPage: {page_url}\nSource: {utm_source}',
  },

  // 12. SINGHASAN HILL / VIEWPOINT (DRAFT / NOINDEX / P2)
  {
    id: 'attr-singhasan-hill',
    name: 'Singhasan Hill',
    slug: 'singhasan-hill-jawai',
    category: 'Scenic Excursions',
    theme: 'Nature',
    duration_type: 'short_visit',
    short_answer:
      'Singhasan Hill has appeared in secondary Jawai attraction lists, but the exact public map entity and route are not sufficiently verified for a production travel page. Ghoomosa creates the CMS draft now and publishes only after local pin, access and naming verification. This ensures complete geographic accuracy for visitors.',
    long_description: [
      'Singhasan Hill is referenced colloquially in regional travel listings as a prominent elevated vantage point overlooking the Jawai landscape. However, public mapping entities and verified public road approaches remain ambiguous.',
      'Ghoomosa maintains strict editorial and geographic standards: we do not invent map pins, road distances or unverified visitor routes. This record is maintained in draft format while our field partners verify physical access, safe parking, and exact land ownership boundaries.',
      'Once verified, the page will be updated with confirmed driving routes, viewpoint quality, sunrise/sunset recommendations, and safety precautions.',
    ],
    reference_point: 'Jawai Bandh, Rajasthan',
    distance_km_min: null,
    distance_km_max: null,
    travel_time_min: null,
    travel_time_max: null,
    distance_display: 'TBD upon ground pin verification',
    travel_time_display: 'TBD',
    distance_last_verified_at: null,
    distance_mode: 'tbd',
    lat: null, // Strictly null until verified
    lng: null,
    best_time: 'Likely sunrise or late afternoon, subject to verified public access and safety',
    visit_duration: 'TBD after field check',
    best_for: ['Photographers', 'Couples', 'Outdoor travellers'],
    why_visit: [
      'Potential panoramic sunrise and sunset viewpoint across the plains',
      'Elevated granite perspective for landscape photography',
      'Peaceful outdoor stop after route confirmation',
    ],
    question_sections: {
      where_is_it:
        'Location details will be published once our local field team confirms the exact public coordinate and route markers.',
      how_far:
        'Distance is not displayed until ground verification is completed.',
      is_it_worth_visiting:
        'We will provide an editorial assessment following physical site inspection.',
      how_much_time:
        'Estimated at 30 to 60 minutes once access is clarified.',
      can_combine_safari:
        'To be confirmed based on proximity to active safari zones.',
    },
    nearby_attractions: [
      { name: 'Jawai Hills', slug: 'jawai-hills', distance: 'Regional', reason: 'Granite landscape' },
      { name: 'Jawai Dam', slug: 'jawai-dam', distance: 'Regional', reason: 'Water reservoir' },
    ],
    suggested_itinerary: {
      title: 'Singhasan Exploration Itinerary',
      summary: 'Itinerary details will be released after field verification.',
      steps: [
        { timeOrDay: 'TBD', activity: 'Verification in progress', description: 'Route and timings will be shared upon partner confirmation.' },
      ],
    },
    faq: [
      {
        question: 'Where is Singhasan Hill in Jawai?',
        answer: 'We will publish exact coordinates once verified by our local team to prevent directing guests to unverified or private tracks.',
      },
      {
        question: 'Is it open to tourists?',
        answer: 'Access permissions and road safety are currently under verification.',
      },
      {
        question: 'What is the best time to visit?',
        answer: 'If confirmed as a viewpoint, sunrise or late afternoon will be preferred for comfortable light and temperature.',
      },
      {
        question: 'Why is the page not showing a fixed distance?',
        answer: 'Because publishing an unverified location would reduce trust and GEO accuracy.',
      },
    ],
    source_notes: [
      'Secondary local tourism lists under investigation',
    ],
    publishing_note:
      'KEEP AS DRAFT / NOINDEX until exact entity, map pin and access are verified. Excluded from sitemap, hub, links, and ItemList.',
    last_fact_check_at: '2026-10-06',
    publish_status: 'draft', // DRAFT / NOINDEX per instruction
    hero_image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80', alt: 'Granite hill ridge in Jawai' },
    ],
    seo_title: 'Singhasan Hill Jawai | Viewpoint, Distance & Travel Guide',
    seo_description:
      'Plan a Singhasan Hill / viewpoint stop in Jawai after local pin verification. Ghoomosa guide will include route, best time, safety and nearby attractions.',
    h1: 'Singhasan Hill / Viewpoint in Jawai',
    canonical_url: 'https://ghoomosa.in/singhasan-hill-jawai',
    cta_template:
      'Hi Ghoomosa, I am inquiring about Singhasan Hill in Jawai.\nTravel date: {date}\nGuests: {n}\nPage: {page_url}\nSource: {utm_source}',
  },

  // 13. ABHINAV MAHAVIR DHAM (P1)
  {
    id: 'attr-abhinav-mahavir-dham',
    name: 'Abhinav Mahavir Dham',
    slug: 'abhinav-mahavir-dham-near-jawai',
    category: 'Spiritual & Cultural',
    theme: 'Temple',
    duration_type: 'short_visit',
    short_answer:
      'Shree Abhinav Mahavir Dham is a Jain pilgrimage complex in the Sumerpur area, easily accessible from the Jawai Bandh side. Official Dham information identifies Jawai Bandh as the nearby railway station and places Sumerpur about 8 km from it. It is popular for pilgrims and families travelling through Rajasthan.',
    long_description: [
      'Shree Abhinav Mahavir Dham offers a convenient spiritual and architectural stop for travellers moving between Jawai Bandh and Sumerpur. Positioned primarily for Jain pilgrimage and family travel, it provides a quiet, reflective sanctuary dedicated to Bhagwan Mahavira.',
      'Official temple trust documentation recognizes Jawai Bandh (JWB) as the primary railway access point, placing the Dham within easy reach of regional transfers. The complex features manicured courtyards, traditional stone temple architecture, and facilities for visiting pilgrims.',
      'It can serve as a thoughtful cultural stop on your arrival or departure day, or be integrated into a broader Jain pilgrimage itinerary connecting with Ranakpur Jain Temple.',
    ],
    reference_point: 'Jawai Bandh, Rajasthan',
    distance_km_min: 8,
    distance_km_max: 16,
    travel_time_min: 15,
    travel_time_max: 30,
    distance_display: 'Approx. 8-16 km (via Sumerpur depending on reference pin)',
    travel_time_display: 'Approx. 15-30 min',
    distance_last_verified_at: '2026-10-06',
    distance_mode: 'fixed_range',
    lat: 25.1534,
    lng: 73.0789,
    best_time: 'Morning or late afternoon; confirm current visitor darshan hours',
    visit_duration: '45-90 minutes',
    best_for: ['Pilgrims', 'Jain families', 'Spiritual travellers', 'Slow travellers'],
    why_visit: [
      'Dedicated Jain pilgrimage complex honouring Bhagwan Mahavira',
      'Convenient location near Sumerpur and Jawai Bandh railway station',
      'Serene temple architecture and well-maintained peaceful courtyards',
      'Can be bundled with Ranakpur Jain Temple for a rich Jain heritage circuit',
      'Ideal short spiritual stop on arrival or departure day from Jawai',
    ],
    question_sections: {
      where_is_it:
        'The Dham is situated in the Sumerpur vicinity of Pali district, western Rajasthan, adjacent to the Jawai Bandh railway network.',
      how_far:
        'Depending on your starting location in Jawai, the road distance is approximately 8 to 16 km, taking about 15 to 30 minutes.',
      is_it_worth_visiting:
        'Yes, especially for Jain devotees, families, and those seeking quiet spiritual contemplation.',
      how_much_time:
        'Plan for 45 to 60 minutes for peaceful darshan and walking through the temple grounds.',
      can_combine_safari:
        'Easily. It makes an excellent morning or afternoon stop during arrival or departure days.',
    },
    nearby_attractions: [
      { name: 'Kambeshwar Mahadev Temple', slug: 'kambeshwar-mahadev-temple-jawai', distance: 'Approx. 8 km', reason: 'Scenic hill shrine' },
      { name: 'Jawai Dam', slug: 'jawai-dam', distance: 'Approx. 15 km', reason: 'Scenic water reservoir' },
      { name: 'Ranakpur Jain Temple', slug: 'ranakpur-jain-temple-near-jawai', distance: 'Approx. 55 km', reason: 'Major Jain pilgrimage monument' },
    ],
    suggested_itinerary: {
      title: 'Arrival Day Spiritual Blessing & Dam Welcome',
      summary: 'Start your Jawai journey with temple darshan followed by sunset dam views.',
      steps: [
        { timeOrDay: '11:00 AM', activity: 'Arrival at Jawai Bandh Station', description: 'Meet your Ghoomosa private chauffeur and vehicle.' },
        { timeOrDay: '11:30 AM - 12:45 PM', activity: 'Abhinav Mahavir Dham Darshan', description: 'Peaceful temple darshan and orientation in Sumerpur.' },
        { timeOrDay: '01:15 PM', activity: 'Check-in at Wilderness Resort', description: 'Welcome drink and traditional lunch.' },
        { timeOrDay: '04:30 PM - 06:30 PM', activity: 'Jawai Dam Sunset Excursion', description: 'Observe crocodiles and flamingos as the sun sets over the water.' },
      ],
    },
    faq: [
      {
        question: 'How far is Abhinav Mahavir Dham from Jawai Bandh?',
        answer: 'Official Dham documentation notes Jawai Bandh as the nearby railway station and Sumerpur roughly 8 km away. Actual driving distance from resorts ranges from 8 to 16 km.',
      },
      {
        question: 'Can I combine Abhinav Mahavir Dham with Ranakpur?',
        answer: 'Yes, especially for travellers focused on Jain pilgrimage, creating a meaningful spiritual route across southern Rajasthan.',
      },
      {
        question: 'Is it suitable for families?',
        answer: 'Yes. The peaceful environment and welcoming facilities make it very comfortable for families and senior travellers.',
      },
      {
        question: 'Should I book this as part of a Jawai package?',
        answer: 'It can be seamlessly added as a short spiritual pause during arrival, departure, or on a local sightseeing afternoon.',
      },
    ],
    source_notes: [
      'Official Shree Abhinav Mahavir Dham trust visitor publications',
      'Pali district pilgrim directory',
    ],
    publishing_note:
      'Use the temple’s official site for current visitor details. Display approximate distance only after current route verification.',
    last_fact_check_at: '2026-10-06',
    publish_status: 'live',
    hero_image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80', alt: 'Shree Abhinav Mahavir Dham temple facade near Sumerpur' },
    ],
    seo_title: 'Abhinav Mahavir Dham Near Jawai | Distance & Travel Guide',
    seo_description:
      'Visit Shree Abhinav Mahavir Dham near Jawai/Sumerpur. See approximate distance, Jain pilgrimage context, how to reach and nearby Jawai trip options.',
    h1: 'Abhinav Mahavir Dham Near Jawai',
    canonical_url: 'https://ghoomosa.in/abhinav-mahavir-dham-near-jawai',
    cta_template:
      'Hi Ghoomosa, I want to plan a Jawai trip including Abhinav Mahavir Dham.\nTravel date: {date}\nGuests: {n}\nPickup city: {city}\nPlease share the best itinerary and package options.\nPage: {page_url}\nSource: {utm_source}',
  },
];

export function getAllAttractions(): AttractionItem[] {
  return ATTRACTIONS_DATA;
}

export function getLiveAttractions(): AttractionItem[] {
  return ATTRACTIONS_DATA.filter((a) => a.publish_status === 'live');
}

export function getAttractionBySlug(slug: string): AttractionItem | undefined {
  return ATTRACTIONS_DATA.find((a) => a.slug === slug);
}
