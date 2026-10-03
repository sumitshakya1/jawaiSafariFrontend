import React from 'react';
import type { Metadata } from 'next';
import { SIGNATURE_EXPERIENCES } from '@/constants/experiencesData';
import { ActivityPageTemplate } from '@/components/experiences/ActivityPageTemplate';

export const metadata: Metadata = {
  title: 'Crocodile Spotting in Jawai | Ghoomosa',
  description:
    'Explore a responsible crocodile-spotting experience in the Jawai landscape with local operator support. Sightings depend on natural conditions.',
};

export default function CrocodileSpottingPage() {
  const exp = SIGNATURE_EXPERIENCES.find((e) => e.slug === 'jawai-crocodile-spotting')!;
  return <ActivityPageTemplate experience={exp} />;
}
