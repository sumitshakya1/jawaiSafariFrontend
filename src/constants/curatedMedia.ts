export interface CuratedTopicMedia {
  hero: string;
  gallery: { url: string; caption: string; tag: string }[];
}

export const CURATED_MEDIA: Record<string, CuratedTopicMedia> = {
  leopard: {
    hero: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80',
        caption: 'Adult Indian leopard patrolling granite territory at golden hour',
        tag: 'Predator Tracking',
      },
      {
        url: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=800&q=80',
        caption: 'Natural granite cave shelters where leopards rest during midday heat',
        tag: 'Cave Habitat',
      },
      {
        url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
        caption: 'Sunset silhouette against the dramatic Aravalli ridgeline',
        tag: 'Dusk Silhouette',
      },
      {
        url: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=800&q=80',
        caption: 'Intense golden eye contact from elevated rocky vantage point',
        tag: 'Close Encounter',
      },
    ],
  },
  birding: {
    hero: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
        caption: 'Flocks of migratory flamingos arriving at Jawai Dam wetlands',
        tag: 'Winter Migrants',
      },
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        caption: 'Demoiselle Cranes (Kuranja) skimming over shallow morning waters',
        tag: 'Avian Flight',
      },
      {
        url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80',
        caption: 'Tawny Eagle scanning thorn scrub savanna from an acacia perch',
        tag: 'Apex Raptors',
      },
      {
        url: 'https://images.unsplash.com/photo-1550853024-fae8cd4be47f?auto=format&fit=crop&w=800&q=80',
        caption: 'Great White Pelicans feeding along the reservoir shallows',
        tag: 'Aquatic Life',
      },
    ],
  },
  crocodile: {
    hero: 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=800&q=80',
        caption: '12-foot Marsh Crocodile (Mugger) sunbathing on granite rock shelf',
        tag: 'Reptile Basking',
      },
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        caption: 'Safe elevated vantage points over the reservoir basking banks',
        tag: 'Safe Viewing',
      },
      {
        url: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
        caption: 'Ancient reptile gliding silently through turquoise water channels',
        tag: 'Water Habitat',
      },
      {
        url: 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=800&q=80',
        caption: 'Close-up armored scale texture under afternoon desert sun',
        tag: 'Wildlife Macro',
      },
    ],
  },
  dam: {
    hero: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
        caption: 'Vast shimmering waters of Jawai Bandh against distant granite peaks',
        tag: 'Lake Panorama',
      },
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        caption: 'Sunset reflections across the historic 1957 Maharaja Umaid Singh dam',
        tag: 'Sunset Horizon',
      },
      {
        url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
        caption: 'Perimeter rocky banks providing tranquil nature walking paths',
        tag: 'Nature Walk',
      },
      {
        url: 'https://images.unsplash.com/photo-1550853024-fae8cd4be47f?auto=format&fit=crop&w=800&q=80',
        caption: 'Dawn mist rising over the reservoir with roosting waterfowl',
        tag: 'Morning Mist',
      },
    ],
  },
  offroad: {
    hero: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
        caption: 'Custom 4x4 open Gypsy crawling up steep 45-degree granite monolith',
        tag: 'Rock Crawling',
      },
      {
        url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
        caption: 'Reaching the summit of prehistoric kopje for 360-degree panorama',
        tag: 'Summit Viewpoint',
      },
      {
        url: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80',
        caption: 'Traversing dry sandy riverbeds on permitted adventure trails',
        tag: 'Riverbed Trail',
      },
      {
        url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
        caption: 'Hilltop high-tea setup perched on flat granite plateau at dusk',
        tag: 'Sunset Bush Tea',
      },
    ],
  },
  culture: {
    hero: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        caption: 'Rabari pastoral elder with iconic red turban and silver amulets',
        tag: 'Rabari Heritage',
      },
      {
        url: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80',
        caption: 'Herd of indigenous sheep and cattle grazing alongside leopard territory',
        tag: 'Coexistence',
      },
      {
        url: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
        caption: 'Traditional rural courtyard pottery and woodfire chai preparation',
        tag: 'Village Crafts',
      },
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        caption: 'Devgiri cave temple nestled inside natural granite boulder clefts',
        tag: 'Cave Shrines',
      },
    ],
  },
  photography: {
    hero: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80',
        caption: 'Telephoto vehicle positioning with customized bean bag stabilization',
        tag: 'Field Rig',
      },
      {
        url: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80',
        caption: 'Dramatic rim lighting on leopard whiskers during morning sunrise',
        tag: 'Golden Lighting',
      },
      {
        url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
        caption: 'Star trail and Milky Way photography over ancient monolith kopjes',
        tag: 'Astro Safari',
      },
      {
        url: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=800&q=80',
        caption: 'Predator gaze captured with prime 400mm / 600mm f/4 telephoto',
        tag: 'High Resolution',
      },
    ],
  },
  luxuryStays: {
    hero: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        caption: 'Private plunge pool glamping deck overlooking granite boulder ranges',
        tag: 'Private Pool',
      },
      {
        url: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
        caption: 'Plush handcrafted leather and teakwood tent interiors with luxury bathtubs',
        tag: 'Tented Suite',
      },
      {
        url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
        caption: 'Private candlelit bush dinner under the starry Aravalli night canopy',
        tag: 'Bush Dining',
      },
      {
        url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
        caption: 'Heritage haveli courtyard with royal firepits and live folk musicians',
        tag: 'Royal Heritage',
      },
    ],
  },
};
