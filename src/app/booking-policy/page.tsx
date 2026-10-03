import React from 'react';
import type { Metadata } from 'next';
import { POLICIES_DATA } from '@/constants/policyData';
import { PolicyPageTemplate } from '@/components/legal/PolicyPageTemplate';

export const metadata: Metadata = {
  title: 'Booking Policy | Ghoomosa',
  description: 'Learn about enquiry processes, quotation confirmation, and reservation policies with Ghoomosa.',
};

export default function BookingPolicyPage() {
  const policy = POLICIES_DATA['booking-policy'];
  return <PolicyPageTemplate policy={policy} />;
}
