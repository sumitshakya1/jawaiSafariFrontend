import React from 'react';
import type { Metadata } from 'next';
import { POLICIES_DATA } from '@/constants/policyData';
import { PolicyPageTemplate } from '@/components/legal/PolicyPageTemplate';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Ghoomosa',
  description: 'Standard terms and conditions governing travel bookings, quotations and services arranged by Ghoomosa.',
};

export default function TermsConditionsPage() {
  const policy = POLICIES_DATA['terms-and-conditions'];
  return <PolicyPageTemplate policy={policy} />;
}
