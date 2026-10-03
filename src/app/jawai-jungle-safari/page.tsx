import React from 'react';
import type { Metadata } from 'next';
import { SIGNATURE_EXPERIENCES } from '@/constants/experiencesData';
import { ActivityPageTemplate } from '@/components/experiences/ActivityPageTemplate';

export const metadata: Metadata = {
  title: 'Jawai Wilderness Safari & Nature Drive | Ghoomosa',
  description:
    'Discover Jawai’s rugged landscape on a curated wilderness drive with responsible wildlife practices and customized trip planning.',
};

export default function WildernessSafariPage() {
  const exp = SIGNATURE_EXPERIENCES.find((e) => e.slug === 'jawai-jungle-safari')!;
  return <ActivityPageTemplate experience={exp} />;
}
