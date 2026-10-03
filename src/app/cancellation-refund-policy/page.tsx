import React from 'react';
import type { Metadata } from 'next';
import { POLICIES_DATA } from '@/constants/policyData';
import { PolicyPageTemplate } from '@/components/legal/PolicyPageTemplate';

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | Ghoomosa',
  description: 'Transparent terms regarding cancellations, refunds, processing timelines and force majeure.',
};

export default function CancellationRefundPolicyPage() {
  const policy = POLICIES_DATA['cancellation-refund-policy'];
  return <PolicyPageTemplate policy={policy} />;
}
