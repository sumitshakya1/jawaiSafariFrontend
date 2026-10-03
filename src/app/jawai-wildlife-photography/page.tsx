import React from 'react';
import type { Metadata } from 'next';
import { SIGNATURE_EXPERIENCES } from '@/constants/experiencesData';
import { ActivityPageTemplate } from '@/components/experiences/ActivityPageTemplate';

export const metadata: Metadata = {
  title: 'Jawai Wildlife Photography Experience | Ghoomosa',
  description:
    'A slower, observation-led experience for serious photographers focused on lighting, positioning, animal behavior, and uncluttered granite compositions.',
};

export default function WildlifePhotographyPage() {
  const exp = SIGNATURE_EXPERIENCES.find((e) => e.slug === 'jawai-wildlife-photography')!;
  return <ActivityPageTemplate experience={exp} />;
}
