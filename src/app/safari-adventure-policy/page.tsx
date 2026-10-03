import React from 'react';
import type { Metadata } from 'next';
import { POLICIES_DATA } from '@/constants/policyData';
import { PolicyPageTemplate } from '@/components/legal/PolicyPageTemplate';

export const metadata: Metadata = {
  title: 'Safari & Adventure Policy | Ghoomosa',
  description: 'Safety rules, vehicle protocols, wildlife ethics, and guest conduct guidelines on safari.',
};

export default function SafariAdventurePolicyPage() {
  const policy = POLICIES_DATA['safari-adventure-policy'];
  return <PolicyPageTemplate policy={policy} />;
}
