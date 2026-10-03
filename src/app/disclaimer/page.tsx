import React from 'react';
import type { Metadata } from 'next';
import { POLICIES_DATA } from '@/constants/policyData';
import { PolicyPageTemplate } from '@/components/legal/PolicyPageTemplate';

export const metadata: Metadata = {
  title: 'Disclaimer | Ghoomosa',
  description: 'General information disclaimer, wildlife sighting disclaimer and image representation terms.',
};

export default function DisclaimerPage() {
  const policy = POLICIES_DATA['disclaimer'];
  return <PolicyPageTemplate policy={policy} />;
}
