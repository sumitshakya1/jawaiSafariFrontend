import React from 'react';
import type { Metadata } from 'next';
import { SIGNATURE_EXPERIENCES } from '@/constants/experiencesData';
import { ActivityPageTemplate } from '@/components/experiences/ActivityPageTemplate';

export const metadata: Metadata = {
  title: 'Jawai Hill & Rocky Terrain Adventure | Ghoomosa',
  description:
    'Add a verified rocky-terrain adventure experience to your Jawai trip. Route, vehicle and timing are confirmed according to local operations.',
};

export default function HillDrivePage() {
  const exp = SIGNATURE_EXPERIENCES.find((e) => e.slug === 'jawai-hill-drive')!;
  return <ActivityPageTemplate experience={exp} />;
}
