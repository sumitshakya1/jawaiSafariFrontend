import React from 'react';
import type { Metadata } from 'next';
import { POLICIES_DATA } from '@/constants/policyData';
import { PolicyPageTemplate } from '@/components/legal/PolicyPageTemplate';

export const metadata: Metadata = {
  title: 'Cookie Policy | Ghoomosa',
  description: 'Understand how cookies, analytics and tracking technologies are managed on Ghoomosa.in.',
};

export default function CookiePolicyPage() {
  const policy = POLICIES_DATA['cookie-policy'];
  return <PolicyPageTemplate policy={policy} />;
}
