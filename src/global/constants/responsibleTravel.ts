export interface ResponsibleTravelPillar {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const RESPONSIBLE_TRAVEL_PILLARS: ResponsibleTravelPillar[] = [
  {
    id: 'silence',
    icon: 'volume_off',
    title: 'Maintain Silence',
    description: 'Keep decibel levels low. Whispering ensures apex leopards remain undisturbed in their natural cave habitats.',
  },
  {
    id: 'distance',
    icon: 'social_distance',
    title: 'Safe Perimeter',
    description: 'Our 4x4 drivers maintain an ethical standoff buffer. We never crowd, corner, or chase animals.',
  },
  {
    id: 'noflash',
    icon: 'flash_off',
    title: 'No Flash Photography',
    description: 'Artificial bursts disorient feline night vision. Starlight and natural ambient dusk illumination are strictly respected.',
  },
  {
    id: 'plastic',
    icon: 'delete_sweep',
    title: 'Zero Plastic Footprint',
    description: 'Carry reusable thermal flasks. We enforce a leave-no-trace protocol across all granite Kopjes zones.',
  },
  {
    id: 'community',
    icon: 'groups',
    title: 'Honor Rabari Heritage',
    description: 'The Rabari people have protected these boulders for millennia. Always seek gracious consent before photographing.',
  },
  {
    id: 'wild',
    icon: 'pets',
    title: 'Wildlife Is Wild',
    description: 'Every sighting is a rare ecological privilege. No ethical operator can or ever should guarantee sightings.',
  },
];
