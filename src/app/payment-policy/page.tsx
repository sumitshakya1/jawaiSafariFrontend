import React from 'react';
import type { Metadata } from 'next';
import { POLICIES_DATA } from '@/constants/policyData';
import { PolicyPageTemplate } from '@/components/legal/PolicyPageTemplate';

export const metadata: Metadata = {
  title: 'Payment Policy | Ghoomosa',
  description: 'Quotation-based payment procedures, approved channels, tax invoicing and safety policies.',
};

export default function PaymentPolicyPage() {
  const policy = POLICIES_DATA['payment-policy'];
  return <PolicyPageTemplate policy={policy} />;
}
