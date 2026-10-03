import React from 'react';
import type { Metadata } from 'next';
import { POLICIES_DATA } from '@/constants/policyData';
import { PolicyPageTemplate } from '@/components/legal/PolicyPageTemplate';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ghoomosa',
  description: 'Understand how Ghoomosa collects, uses and protects your travel data in accordance with privacy laws.',
};

export default function PrivacyPolicyPage() {
  const policy = POLICIES_DATA['privacy-policy'];
  return <PolicyPageTemplate policy={policy} />;
}
