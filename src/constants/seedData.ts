import {
  IHeroSlideDTO,
  IExpeditionDTO,
  IQuoteDTO,
  INavItemDTO,
  ISocialLinkDTO,
} from '@/types';

export const SEED_SLIDES: IHeroSlideDTO[] = [
  {
    id: 'slide-01',
    slideNumber: '01',
    totalSlides: '04',
    kicker: 'LAND OF THE LEOPARD',
    title: 'JAWAI',
    quote: '“Granite thrones sculpted by antiquity, where predators walk amidst quiet temples.”',
    coordinates: '25.10° N, 73.15° E — KOPJES EXPEDITION',
    actionLabel: 'EXPLORE JAWAI',
    actionHref: '/safari',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqpsLVyq-O-k06M9ro5BZ2twuDnq8V01cc6KE2OY2-pl3vJssFkEWFJ6ZjFkW1Ea3hpZNbwIrNp1LqrZMcP6k9gwSo1pTAGggUY85ZDKzlZTbclelVdRIwn6yi_TR62ZNDYW3mMSFynlU_4Aid8jThqgYNHZmQz4UBi8IXPIMy5TAw4QqKXb_HxHcGhfquWS26F4FKI8mRfMjCEz0cUl-u16mmgpFakVIyEZWbVJ4svF85hdDO7A-2',
    localFallbackUrl: '/images/jawai-hero.png',
    specsRibbon: [
      { label: 'HABITAT', value: 'Plutonic Rock Outcrops', isPrimary: true },
      { label: 'SPECIES', value: 'Panthera Pardus Fusca', isPrimary: false },
      { label: 'SANCTUARY', value: 'Rabari Belt', isPrimary: false },
    ],
    initialProgress: 25,
  },
  {
    id: 'slide-02',
    slideNumber: '02',
    totalSlides: '04',
    kicker: 'Dusk Tracking & Savannah',
    title: 'Safari',
    quote: '“Ghost of the granite boulders, stalking the golden amber twilight.”',
    coordinates: 'Dusk Tracking & Savannah',
    actionLabel: 'Explore Expedition',
    actionHref: '#expedition-manifest',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAIPiNWp9eFK-PVFUY4iOnThDWnm0511bfJG0cIkNYg3F2yxi44KRk6VoxGtUrnAejP1KSOCgIuwUJYDQ5CCLox8BuTIE1mGOOf2BWZ3_n2qkKWxAH-ptrX-qD5yW3p5ayBp7cEL3uZVkRxKoMvm19WFwxkpi0hzODspPEud_R-BTRsBcW0mv5jmdtIPDbdp_3uSryIcFlXS-VRjJTPP76TXpQYlQEm69OpbcINw1c1YSnGaznTutLy',
    localFallbackUrl: '/images/safari-hero.png',
    chips: [
      { label: 'Rabari Coexistence', variant: 'primary' },
      { label: 'Custom 4x4 Tracking', variant: 'tertiary' },
      { label: '25° 04′ N · Jawai Hills', variant: 'variant' },
    ],
    initialProgress: 50,
  },
  {
    id: 'slide-03',
    slideNumber: '03',
    totalSlides: '04',
    kicker: 'NOCTURNAL CLIFF HABITAT',
    title: 'SANCTUARY',
    quote: '“Above the moonlit gorges, apex stillness dissolves into an ocean of ancient stars.”',
    coordinates: 'NOCTURNAL SANCTUARY PASS',
    coordinatesSubtext: '25.1324° N, 73.1897° E',
    badgeLabel: 'NOCTURNAL SANCTUARY PASS',
    actionLabel: 'EXPLORE SANCTUARY',
    actionHref: '#explore-deep-dive',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCi4bN6KG0yG7Y2ro0_oFLqeeX7z7nqZkeRM6fU50zpUeDkwqD2QdHO03zAMn7PDNr3s14mTvGs4QTVQ81GsjQOJTrWdbgT24i13F4YSmi5pdb2RiimNmTP26-nQIysddNZcs3mXXpSWWAp-ehvTINrm-g13eDDomh6SJqxAUF1P6pNTuvYdFh169c2xy9jHxRmD46Me12ISTSwsUhwNrMWO7pgGRmgVldQ6m2yn7acAT7XMvf8hzM1',
    localFallbackUrl: '/images/sanctuary-hero.png',
    specsRibbon: [
      { label: 'ELEVATION', value: '580 MTRS', isPrimary: false },
      { label: 'SOLITARY APEX', value: 'PANTHERA PARDUS FUSCA', isPrimary: true },
      { label: 'CELESTIAL TRANSIT', value: 'MILKY WAY CORE', isPrimary: false },
    ],
    soundFrequencyText: '38 DB AMBIENCE • ARAVALLI NIGHT',
    initialProgress: 75,
  },
  {
    id: 'slide-04',
    slideNumber: '04',
    totalSlides: '04',
    kicker: 'CELESTIAL TRANSIT & NEBULA',
    title: 'NOCTURNAL',
    quote: '“Where prehistoric granite cradles the quiet monarch beneath a billion burning suns.”',
    coordinates: 'BORTLE 2 ASTRONOMICAL BELT',
    coordinatesSubtext: '25.15° N, 73.22° E',
    badgeLabel: 'ASTRONOMICAL EXPEDITION PASS',
    actionLabel: 'EXPLORE CELESTIAL',
    actionHref: '#celestial-manifest',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkdZsQC5g0czXw5AkyxBJFXVynjxcEm6SNsdaaT6fbhnVaFtO4Het47TQ6fZtXaLoFhzAFAE5_IWGTq-QHu9BEmYPs7lJRxlfV3c94orI605nfPQ422-xz_L_gnWIoGvrXzgBj1L0x1Z1rt_DETl7rXeQ5wH36CixmgZxJscnVoHugymjSWYTCC41yrUCuGdJNJOVrSmKLDxk3unzWnUh-UjgQK_Bw9M6OK9rQnB-10Z0HvW04Gxtk',
    localFallbackUrl: '/images/sanctuary-hero.png',
    specsRibbon: [
      { label: 'LIGHT POLLUTION', value: 'CLASS 2 BORTLE', isPrimary: false },
      { label: 'APEX WATCH', value: 'MIDNIGHT PROWL', isPrimary: true },
      { label: 'TERRAIN', value: 'MAGMA GRANITE RIFT', isPrimary: false },
    ],
    chips: [
      { label: 'Milky Way Core', variant: 'primary' },
      { label: 'Astro-Wildlife Recon', variant: 'tertiary' },
      { label: 'Pitch Slate Void', variant: 'variant' },
    ],
    soundFrequencyText: '24 DB QUIET • DEEP SKY OBSERVATORY',
    initialProgress: 100,
  },
];

export const SEED_EXPEDITIONS: IExpeditionDTO[] = [
  {
    id: 'expedition-safari',
    phaseKicker: 'Phase 02 — Jawai Basin',
    title: 'The Apex Encounter',
    description:
      'Between ancient magma-carved granite monoliths and desert riverbeds, high-density leopard clans thrive alongside the nomadic Rabari herdsmen in quiet harmony.',
    specRows: [
      { label: 'Recommended Hour', value: '17:15 — 20:30 IST', highlight: true },
      { label: 'Vessel Type', value: 'Open-Top Safari Spec 4WD', highlight: false },
    ],
    cards: [
      {
        id: 'safari-card-1',
        badgeText: 'Granite Caves',
        title: 'Rock Outcrop Recon',
        description:
          'Silent approach beneath the shadows of prehistoric kopjes where solitary cats rest during dusk thermals.',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCoKVksJXryvPiyVTATxDSw3YAK1GmzD6sNxpdKfu86NwGrXt2dQMeMlv4Moq78WuOHq3lE4ltt1h-Y3ocqm_V6MrtSYebHmxWOoojCDRhm8j-f-ZZiiKLWXiJXD93tAZKqwu8W2D6KX_Y7C6W1MDxNcZZYpxc1A8GUzwygnY0krIwgowPzKXGYXN7Q7S7L8BJN9n7Aq_8tWsS-Z-et6-avKaAr_SptT7Aa3VG2dd8eC_p4NKML1olu',
        altText:
          'A wild Indian leopard prowling on smooth giant volcanic granite boulders at dusk in Jawai Rajasthan, surrounded by golden dry grass and acacia trees, dramatic warm orange sunset rim lighting, 8k cinematic wildlife photography.',
      },
      {
        id: 'safari-card-2',
        badgeText: 'Rabari Pastoral',
        title: 'Symbiotic Guardians',
        description:
          'Centuries of cultural reverence preserve unhindered passage for apex predators across tribal grazing ranges.',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAPVe3rNhluN9YD9ReDzyEkmdIzYSPk79VMZ_LA9vYygtzznbRYNlhzF8LGzV-Iop9Jui6Gsk-hpZ9w0hA7wKDzAXA6H7889WQ20hqhKXkWux4g2J6eCz9qIS27b3PjVHZkGXRayJrMl84pEMOlWsxvIg-CpPjuo5GlWvIj7famY36IqMcEADuCzcTZCceRs6s1q825zVbhp2jBHFImwlegiXfaOugiI1t0W8YokD_61IszOewuXMSo',
        altText:
          'A traditional Rabari shepherd in red turban walking alongside his flock of goats past towering rocky hills at twilight in Rajasthan India, atmospheric dusty golden hour ambiance, high contrast fine art photography.',
      },
    ],
  },
];

export const SEED_QUOTES: IQuoteDTO[] = [
  {
    id: 'quote-rabari',
    text: '“We share this granite dome not by dominance, but by ancestral pact. When the sky turns black, the crags belong only to the spotted kings.”',
    author: '— Mohan Rabari, Head Indigenous Tracker',
    iconName: 'psychology_alt',
  },
];

export const SEED_NAV_ITEMS: INavItemDTO[] = [
  { id: 'nav-home', label: 'Home', href: '/', dataPath: 'home', isActive: true },
  { id: 'nav-work', label: 'Work', href: '/work', dataPath: 'work' },
  { id: 'nav-about', label: 'About', href: '/about', dataPath: 'about' },
];

export const SEED_SOCIAL_LINKS: ISocialLinkDTO[] = [
  { id: 'soc-whatsapp', label: 'WhatsApp Concierge Desk', href: 'https://wa.me/917300003101?text=Hi%20Ghoomosa%2C%20I%20am%20interested%20in%20planning%20a%20Jawai%20safari%20expedition.', icon: 'whatsapp' },
  { id: 'soc-ig', label: 'Follow on Instagram', href: 'https://instagram.com/ghoomosa', icon: 'instagram' },
  { id: 'soc-fb', label: 'Connect on Facebook', href: 'https://facebook.com/ghoomosa', icon: 'facebook' },
  { id: 'soc-yt', label: 'Watch on YouTube', href: 'https://youtube.com/@ghoomosa', icon: 'youtube' },
];
