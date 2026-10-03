import React from 'react';
import type { Metadata } from 'next';
import { SIGNATURE_EXPERIENCES } from '@/constants/experiencesData';
import { ActivityPageTemplate } from '@/components/experiences/ActivityPageTemplate';

export const metadata: Metadata = {
  title: 'Jawai Bird Watching Experience | Ghoomosa',
  description:
    'Plan a bird watching experience around Jawai’s water and open landscapes. Seasonal sightings vary; request current availability and itinerary.',
};

export default function BirdWatchingPage() {
  const exp = SIGNATURE_EXPERIENCES.find((e) => e.slug === 'jawai-bird-watching')!;
  return <ActivityPageTemplate experience={exp} />;
}
