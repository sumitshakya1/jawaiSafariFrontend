export interface ExperienceItem {
  id: string;
  slug: string;
  name: string;
  category: 'Wildlife' | 'Nature' | 'Adventure' | 'Culture' | 'Photography';
  heroTitle: string;
  shortDesc: string;
  longDesc: string;
  heroImage: string;
  scheduling: string;
  criticalNote: string;
  whatToExpect: string[];
  idealTraveller: string[];
  whatToCarry: string[];
  responsibleTravelNote: string;
  relatedPackageIds: string[];
  faq: { q: string; a: string }[];
}

export const SIGNATURE_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'EXP-JAW-001',
    slug: 'jawai-leopard-safari',
    name: 'Jawai Leopard Safari',
    category: 'Wildlife',
    heroTitle: "Jawai Leopard Safari - Explore Rajasthan's Wild Granite Landscape",
    shortDesc:
      "A Jawai leopard safari is an open-vehicle wildlife experience through the region's rugged granite landscape with experienced local operators. Sightings depend entirely on natural wildlife movement.",
    longDesc:
      'The granite boulder formations of Jawai provide natural cave shelters where Indian leopards (Panthera pardus fusca) have lived in natural co-existence with the local Rabari pastoral community for centuries. Unlike fenced national parks, Jawai is an open landscape where safari vehicles explore natural trails with skilled local trackers.',
    heroImage: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1400&q=80',
    scheduling: 'Morning (05:45 AM - 08:45 AM) / Evening (04:15 PM - 07:15 PM)',
    criticalNote: 'Wildlife sightings depend entirely on natural animal movement in open wilderness and are never guaranteed.',
    whatToExpect: [
      'Open-top 4x4 Maruti Gypsy with high ground clearance',
      'Accompanied by a licensed local driver and experienced tracker naturalist',
      'Navigation across rocky slopes, thorn scrub, and boulder vantage points',
      'High chances of observing leopard behavior, territorial scanning, and cub interactions',
    ],
    idealTraveller: ['Wildlife Enthusiasts', 'Photographers', 'Families', 'Couples'],
    whatToCarry: [
      'Neutral-colored clothing (khaki, olive, brown)',
      'Telephoto camera lens (70-200mm, 100-400mm, or 200-600mm)',
      'Binoculars and sunglass protection',
      'Warm jacket or fleece for dawn/dusk drives (especially Nov - Feb)',
    ],
    responsibleTravelNote:
      'Strict silence is maintained during animal observation. Off-trail pursuit, flash photography, and shouting are strictly prohibited.',
    relatedPackageIds: ['GHM-JAW-001', 'GHM-JAW-003', 'GHM-JAW-004'],
    faq: [
      {
        q: 'Is a leopard sighting guaranteed?',
        a: 'No. Leopards are wild and free in an unfenced natural ecosystem. Sightings depend on natural movement, though Jawai has one of the highest leopard densities in the world.',
      },
      {
        q: 'How long does a safari last?',
        a: 'Each safari drive typically lasts between 2.5 to 3.5 hours depending on light and tracking progress.',
      },
    ],
  },
  {
    id: 'EXP-JAW-002',
    slug: 'jawai-bird-watching',
    name: 'Bird Watching',
    category: 'Nature',
    heroTitle: 'Jawai Bird Watching Experience',
    shortDesc:
      "Explore the water bodies and open landscapes around Jawai with a bird-focused experience. Seasonal resident and migratory species make the region exceptionally rewarding for birders.",
    longDesc:
      'With the vast expanse of Jawai Bandh (Dam) and surrounding marshlands, the region serves as a premier wintering ground for over 150 species of birds, including Greater and Lesser Flamingos, Demoiselle Cranes, Bar-headed Geese, Pelicans, and numerous raptors.',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=80',
    scheduling: 'Early morning (06:30 AM - 10:00 AM) and Late afternoon',
    criticalNote: 'Species abundance varies by season; migratory peaks occur between October and March.',
    whatToExpect: [
      'Vast wetland viewing across the Jawai Dam reservoir',
      'Spottings of migratory flamingos, cranes, storks, and eagles',
      'Spotting scope & field guide assistance',
    ],
    idealTraveller: ['Birders', 'Nature Lovers', 'Avian Photographers'],
    whatToCarry: ['Spotting scope / Binoculars (8x42 or 10x42)', 'Telephoto lens', 'Hat and sun protection'],
    responsibleTravelNote: 'Maintain a respectful distance from nesting and feeding water birds to avoid disturbing migratory flocks.',
    relatedPackageIds: ['GHM-JAW-003', 'GHM-JAW-008'],
    faq: [
      {
        q: 'Which months are best for bird watching in Jawai?',
        a: 'The peak migratory bird season is from late October to March when thousands of flamingos and cranes arrive at Jawai Dam.',
      },
    ],
  },
  {
    id: 'EXP-JAW-003',
    slug: 'jawai-crocodile-spotting',
    name: 'Crocodile Spotting',
    category: 'Nature',
    heroTitle: 'Crocodile Spotting in Jawai',
    shortDesc:
      'Observe the Jawai water landscape responsibly with a local operator. Marsh crocodiles (Mugger) can often be seen basking on sandbanks and rocky shores.',
    longDesc:
      'Jawai Dam is home to one of the largest healthy populations of Marsh Crocodiles (Crocodylus palustris) in Rajasthan. Basking along the shallow granite shoals and sunny banks, these prehistoric reptiles offer incredible wildlife observation.',
    heroImage: 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1400&q=80',
    scheduling: 'Mid-morning (10:00 AM - 01:00 PM) when sun basking is at peak',
    criticalNote: 'No close approach to water edge; strict safety perimeters are enforced.',
    whatToExpect: [
      'Panoramic vantage points over reservoir basking banks',
      'Observation of 10 to 14 foot marsh crocodiles sunbathing',
      'Safe elevated viewing locations guided by operators',
    ],
    idealTraveller: ['Families', 'Reptile Enthusiasts', 'Macro/Telephoto Photographers'],
    whatToCarry: ['Binoculars', 'Polarized sunglasses to cut water glare'],
    responsibleTravelNote: 'Never throw stones, bait, or attempt to approach crocodiles on foot near water shorelines.',
    relatedPackageIds: ['GHM-JAW-003', 'GHM-JAW-006'],
    faq: [
      {
        q: 'Is crocodile spotting safe?',
        a: 'Yes. All viewings take place from designated elevated boulder outposts and vehicles with zero water-entry.',
      },
    ],
  },
  {
    id: 'EXP-JAW-004',
    slug: 'jawai-jungle-safari',
    name: 'Wilderness & Jungle Drive',
    category: 'Wildlife',
    heroTitle: 'Jawai Wilderness Safari & Nature Drive',
    shortDesc:
      'A broader wilderness drive combining rugged landscape, wildlife observation, and local terrain beyond the granite hills.',
    longDesc:
      'Traverse through the acacia scrublands, dry deciduous forests, and river valleys surrounding Jawai. In addition to apex predators, this wilderness drive exposes travellers to Indian striped hyenas, jungle cats, jackals, blue bulls (nilgai), and desert foxes.',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=80',
    scheduling: 'Dawn & Dusk drives subject to seasonal daylight',
    criticalNote: 'Jawai is an open community conservation landscape, not a fenced or notified national park.',
    whatToExpect: [
      'Deep exploration of thorn forest tracks and sandy river beds',
      'Nocturnal animal tracking on dusk returns',
      'Panoramic sunset viewpoints over ancient rock formations',
    ],
    idealTraveller: ['Wilderness Enthusiasts', 'Adventure Seekers', 'Photographers'],
    whatToCarry: ['Dust mask / bandana for open trails', 'Comfortable safari clothing', 'Jacket for evening'],
    responsibleTravelNote: 'Strictly avoid plastic litter and respect grazing livestock in community scrublands.',
    relatedPackageIds: ['GHM-JAW-004', 'GHM-JAW-005'],
    faq: [
      {
        q: 'What is the difference between Leopard Safari and Wilderness Drive?',
        a: 'While Leopard Safaris prioritize boulder cave kopjes, the Wilderness Drive covers broader scrubland, dry river washes, and diverse nocturnal species.',
      },
    ],
  },
  {
    id: 'EXP-JAW-005',
    slug: 'jawai-hill-drive',
    name: 'Hill & Rocky Terrain Drive',
    category: 'Adventure',
    heroTitle: 'Jawai Hill & Rocky Terrain Adventure',
    shortDesc:
      'An adventure-led drive across permitted rugged granite terrain with trained local 4x4 off-road operators.',
    longDesc:
      'Feel the adrenaline of custom 4x4 Gypsies crawling up sheer 45-degree smooth granite rock faces. Reaching the summit of these monolithic million-year-old boulders rewards you with stunning 360-degree views of the Aravalli horizon.',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80',
    scheduling: 'Late Afternoon / Golden Hour (04:30 PM - 06:30 PM)',
    criticalNote: 'Conducted only by verified drivers on structurally safe and permitted rocky routes.',
    whatToExpect: [
      'Thrilling steep angle 4x4 hill climbing and descent',
      'Unobstructed sunset vantage points from boulder peaks',
      'High-tea setup opportunities on natural rock shelves',
    ],
    idealTraveller: ['Adventure Seekers', 'Couples', 'Groups & Friends'],
    whatToCarry: ['Flat shoes with good grip (sneakers or hiking shoes)', 'Windbreaker jacket'],
    responsibleTravelNote: 'Vehicles must strictly adhere to designated rock routes to prevent soil erosion and disturbance.',
    relatedPackageIds: ['GHM-JAW-005', 'GHM-JAW-010'],
    faq: [
      {
        q: 'Can seniors or young children do the hill drive?',
        a: 'Yes, provided they are seated comfortably. Drivers adjust incline angles according to guest comfort preferences.',
      },
    ],
  },
  {
    id: 'EXP-JAW-006',
    slug: 'jawai-dam',
    name: 'Jawai Dam Experience',
    category: 'Nature',
    heroTitle: 'Jawai Dam Experience, Birdlife & Views',
    shortDesc:
      'Landscape views, birdlife, and a peaceful nature experience around Jawai Dam, the largest water reservoir in Western Rajasthan.',
    longDesc:
      'Built across the Jawai River by Maharaja Umaid Singh of Jodhpur in 1957, Jawai Dam is an engineering marvel and the ecological lifeblood of the region. The shimmering expanse of blue water contrasted against ancient granite peaks creates breathtaking vistas.',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80',
    scheduling: 'Sunrise (06:00 AM) or Sunset (05:30 PM)',
    criticalNote: 'Subject to local dam administration access rules and seasonal water levels.',
    whatToExpect: [
      'Grand architectural viewpoint over the dam spillways and gates',
      'Panoramic water reflections with mountains in the background',
      'Tranquil breeze and high bird density',
    ],
    idealTraveller: ['Couples', 'Families', 'Landscape Photographers'],
    whatToCarry: ['Camera with wide-angle lens', 'Sunglasses and sun hat'],
    responsibleTravelNote: 'Respect barrier boundaries and never venture into restricted deep water sectors.',
    relatedPackageIds: ['GHM-JAW-003', 'GHM-JAW-007'],
    faq: [
      {
        q: 'Can we do boating in Jawai Dam?',
        a: 'Commercial boating is restricted to protect the fragile aquatic and crocodile ecosystem; scenic views are enjoyed from elevated perimeter banks.',
      },
    ],
  },
  {
    id: 'EXP-JAW-007',
    slug: 'jawai-village-experience',
    name: 'Village & Culture Experience',
    category: 'Culture',
    heroTitle: 'Jawai Village & Culture Experience',
    shortDesc:
      'A respectful introduction to local Rabari shepherd life, traditional mud architecture, organic farming, and centuries of harmonious human-wildlife co-existence.',
    longDesc:
      'The indigenous Rabari pastoralists are the guardians of Jawai. Renowned for their crimson turbans, silver jewelry, and peaceful ethos, a guided village walk offers rare authentic cultural insights into rural Rajasthan living in complete balance with nature.',
    heroImage: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1400&q=80',
    scheduling: 'Mid-morning or late afternoon (approx. 1.5 to 2 hours)',
    criticalNote: 'Photography of residents and private spaces must always be strictly permission-based.',
    whatToExpect: [
      'Guided walk through Rabari dharas (homesteads) with a local village elder',
      'Demonstration of traditional spinning, pottery, and chai brewing',
      'Stories of leopard encounters and sacred beliefs passed down generations',
    ],
    idealTraveller: ['Cultural Enthusiasts', 'Slow Travellers', 'Families'],
    whatToCarry: ['Modest attire covering shoulders and knees', 'Slip-on comfortable shoes'],
    responsibleTravelNote: 'Never distribute candy or cash to children; support local cooperative craft artisans instead.',
    relatedPackageIds: ['GHM-JAW-006', 'GHM-JAW-008'],
    faq: [
      {
        q: 'Is English or Hindi spoken in the villages?',
        a: 'Local villagers speak Marwari; our accompanying Ghoomosa guide translates seamlessly into English or Hindi.',
      },
    ],
  },
  {
    id: 'EXP-JAW-008',
    slug: 'jawai-wildlife-photography',
    name: 'Wildlife Photography',
    category: 'Photography',
    heroTitle: 'Jawai Wildlife Photography Experience',
    shortDesc:
      'A slower, observation-led experience for serious photographers focused on lighting, positioning, animal behavior, and uncluttered granite compositions.',
    longDesc:
      'Jawai is celebrated worldwide for dramatic leopard silhouettes against golden granite boulders. This dedicated photography session provides specialized vehicle positioning, bean bags, extended waiting times, and low-angle tracking.',
    heroImage: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1400&q=80',
    scheduling: 'Customized golden hour windows (Dawn 05:30 AM & Dusk 04:00 PM)',
    criticalNote: 'Wildlife welfare always takes precedence over photography. No baiting or disturbing animals.',
    whatToExpect: [
      'Vehicle positioned strategically for optimal natural lighting and clean backgrounds',
      'Patience-driven stalking allowing natural predator behavior to unfold',
      'Bean bag mounts and gimbal supports accommodated',
    ],
    idealTraveller: ['Wildlife Photographers', 'Documentary Filmmakers', 'Enthusiasts'],
    whatToCarry: ['DSLR/Mirrorless bodies with fast lenses (f/2.8 or f/4)', 'Dust covers & lens wipes', 'Spare batteries'],
    responsibleTravelNote: 'Flash photography is strictly prohibited at all times to avoid blinding nocturnal animals.',
    relatedPackageIds: ['GHM-JAW-004', 'GHM-JAW-009'],
    faq: [
      {
        q: 'Can we rent photography equipment in Jawai?',
        a: 'We can arrange camera bodies and prime telephoto lenses upon advance request prior to arrival.',
      },
    ],
  },
];
