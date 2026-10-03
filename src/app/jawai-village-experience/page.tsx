import React from 'react';
import type { Metadata } from 'next';
import { SIGNATURE_EXPERIENCES } from '@/constants/experiencesData';
import { ActivityPageTemplate } from '@/components/experiences/ActivityPageTemplate';

export const metadata: Metadata = {
  title: 'Jawai Village & Culture Experience | Ghoomosa',
  description:
    'A respectful introduction to local Rabari shepherd life, traditional mud architecture, organic farming, and centuries of harmonious human-wildlife co-existence.',
};

export default function VillageExperiencePage() {
  const exp = SIGNATURE_EXPERIENCES.find((e) => e.slug === 'jawai-village-experience')!;
  return <ActivityPageTemplate experience={exp} />;
}
