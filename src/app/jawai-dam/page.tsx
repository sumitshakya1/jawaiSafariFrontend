import React from 'react';
import type { Metadata } from 'next';
import { SIGNATURE_EXPERIENCES } from '@/constants/experiencesData';
import { ActivityPageTemplate } from '@/components/experiences/ActivityPageTemplate';

export const metadata: Metadata = {
  title: 'Jawai Dam Experience, Birdlife & Views | Ghoomosa',
  description:
    'Explore the Jawai Dam landscape, birdlife and scenic views as part of a customized Jawai itinerary.',
};

export default function JawaiDamPage() {
  const exp = SIGNATURE_EXPERIENCES.find((e) => e.slug === 'jawai-dam')!;
  return <ActivityPageTemplate experience={exp} />;
}
