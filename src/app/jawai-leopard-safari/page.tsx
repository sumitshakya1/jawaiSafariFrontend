import React from 'react';
import type { Metadata } from 'next';
import { SIGNATURE_EXPERIENCES } from '@/constants/experiencesData';
import { ActivityPageTemplate } from '@/components/experiences/ActivityPageTemplate';

export const metadata: Metadata = {
  title: 'Jawai Leopard Safari - Enquiry & Travel Guide | Ghoomosa',
  description:
    'Plan a Jawai leopard safari with practical trip information, responsible wildlife guidance and customized quotation support from Ghoomosa.',
};

export default function LeopardSafariPage() {
  const exp = SIGNATURE_EXPERIENCES.find((e) => e.slug === 'jawai-leopard-safari')!;
  return <ActivityPageTemplate experience={exp} />;
}
