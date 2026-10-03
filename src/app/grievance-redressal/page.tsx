import React from 'react';
import type { Metadata } from 'next';
import { POLICIES_DATA } from '@/constants/policyData';
import { PolicyPageTemplate } from '@/components/legal/PolicyPageTemplate';

export const metadata: Metadata = {
  title: 'Grievance Redressal | Ghoomosa',
  description: 'Dedicated customer dispute escalation mechanism and grievance contact details for Ghoomosa.',
};

export default function GrievanceRedressalPage() {
  const policy = POLICIES_DATA['grievance-redressal'];
  return <PolicyPageTemplate policy={policy} />;
}
