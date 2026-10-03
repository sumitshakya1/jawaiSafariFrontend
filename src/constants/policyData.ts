export interface PolicyPageData {
  slug: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: { heading: string; content: string[] }[];
}

export const POLICIES_DATA: Record<string, PolicyPageData> = {
  'privacy-policy': {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    subtitle: 'How Ghoomosa collects, utilizes, and protects your personal travel information',
    lastUpdated: 'October 02, 2026',
    sections: [
      {
        heading: 'Purpose',
        content: [
          'Ghoomosa collects personal information necessary to respond to travel enquiries, prepare customized quotations, coordinate requested services, provide trip support, improve website functionality, and meet applicable legal obligations.',
        ],
      },
      {
        heading: 'Data Collected',
        content: [
          'We collect name, phone number, email address, travel dates, traveller count, stay and activity preferences, origin city, enquiry details, communications, device/usage information, cookies, and transaction information where applicable.',
          'Government identification documents (such as Aadhaar, Voter ID, or Passport) are only requested when operationally required by forest/local administration for safari permits or hotel check-in.',
        ],
      },
      {
        heading: 'How Data is Used',
        content: [
          'Your information is used for quotation preparation, booking coordination with local operators, customer support, operational trip updates, fraud and security checks, analytics, and legal compliance.',
          'Marketing communications are only sent where explicit consent has been provided, and you may opt out at any time.',
        ],
      },
      {
        heading: 'Information Sharing',
        content: [
          'Relevant information is shared strictly with verified hotels, safari/activity operators, transport providers, payment processors, and local authorities when required to fulfil your requested travel services or comply with law.',
        ],
      },
      {
        heading: 'Data Retention & Security',
        content: [
          'We retain personal data only for as long as necessary for booking execution, support, accounting, and legal requirements, after which data is securely archived or anonymized.',
          'We implement access controls, encryption in transit, restricted staff permissions, and audit logging to safeguard your information.',
        ],
      },
      {
        heading: 'User Rights & Grievance Contact',
        content: [
          'You may request access to, correction of, or deletion of your personal data by contacting our team at privacy@ghoomosa.in or +91 73000 03101.',
        ],
      },
    ],
  },
  'terms-and-conditions': {
    slug: 'terms-and-conditions',
    title: 'Terms & Conditions',
    subtitle: 'Standard terms governing your use of Ghoomosa.in and travel services arranged through Ghoomosa',
    lastUpdated: 'October 02, 2026',
    sections: [
      {
        heading: 'Scope & Agreement',
        content: [
          'These terms govern the use of Ghoomosa.in, enquiries submitted, quotations generated, and travel services arranged through Ghoomosa.',
        ],
      },
      {
        heading: 'Quotations & Trip Descriptions',
        content: [
          'Website package descriptions are indicative trip ideas. Price, inclusions, and operational availability are confirmed only in a formal written quotation and booking confirmation.',
        ],
      },
      {
        heading: 'Third-Party Fulfilment',
        content: [
          'Hotels, safari operators, transporters, guides, and activity providers independently fulfil components of a trip. Ghoomosa coordinates services under the customer booking while supplier-specific operating rules also apply.',
        ],
      },
      {
        heading: 'Traveller Responsibility & Accurate Details',
        content: [
          'Travellers must provide accurate names, ages, contact numbers, and valid identification where required. Guests must arrive on time for scheduled activities and follow safety, wildlife, property, and local authority instructions at all times.',
        ],
      },
      {
        heading: 'Wildlife Disclaimer',
        content: [
          'All wildlife encounters occur in open, unfenced natural habitats. No animal or bird sighting can ever be guaranteed.',
        ],
      },
      {
        heading: 'Itinerary Changes & Force Majeure',
        content: [
          'Itineraries may require reasonable modifications due to weather, road closures, local administration orders, safety conditions, supplier availability, or force majeure events.',
        ],
      },
    ],
  },
  'booking-policy': {
    slug: 'booking-policy',
    title: 'Booking Policy',
    subtitle: 'Information on enquiries, quotation confirmation, and reservation processes',
    lastUpdated: 'October 02, 2026',
    sections: [
      {
        heading: 'Enquiry vs. Confirmed Booking',
        content: [
          'Submitting an enquiry form or initiating a WhatsApp conversation does not create a confirmed booking. A booking is confirmed only when Ghoomosa issues an official written booking confirmation following receipt of the required advance payment and supplier confirmation.',
        ],
      },
      {
        heading: 'Traveller Identification',
        content: [
          'Correct names, age details, and valid photo ID copies must be provided within the requested timeframe to ensure safari slot registration and hotel reservations.',
        ],
      },
      {
        heading: 'Availability & Itinerary Priority',
        content: [
          'Vehicles, specific resort rooms, and naturalist slots remain subject to real-time availability until confirmed. The final customized quotation and written voucher control over general sample website itineraries.',
        ],
      },
      {
        heading: 'Special Requests',
        content: [
          'Dietary preferences, room configurations, private vehicles, and special celebration setups are subject to operational confirmation and may involve additional charges.',
        ],
      },
    ],
  },
  'cancellation-refund-policy': {
    slug: 'cancellation-refund-policy',
    title: 'Cancellation & Refund Policy',
    subtitle: 'Transparent terms regarding cancellations, refunds, and rescheduling',
    lastUpdated: 'October 02, 2026',
    sections: [
      {
        heading: 'Booking-Specific Terms',
        content: [
          'Because different boutique lodges and safari operators maintain distinct cancellation windows, your official quotation and booking voucher will clearly specify the exact cancellation schedule applicable to your trip.',
        ],
      },
      {
        heading: 'Customer Cancellation Procedure',
        content: [
          'Cancellations must be submitted in writing through our official communication channels (email to support@ghoomosa.in or WhatsApp to +91 73000 03101) quoting your Booking ID. The effective cancellation time is when Ghoomosa acknowledges the request.',
        ],
      },
      {
        heading: 'Non-Refundable Components',
        content: [
          'Certain components (such as peak season lodge bookings, registered safari vehicle permits, or specialized private transport) may be non-refundable once locked in; these terms will be disclosed prior to payment.',
        ],
      },
      {
        heading: 'Refund Calculations & Processing Timelines',
        content: [
          'Eligible refunds are calculated after deducting supplier cancellation charges, non-refundable permit fees, and applicable payment gateway charges. Refunds are processed within 7 to 10 working days following supplier reconciliation.',
        ],
      },
      {
        heading: 'Force Majeure & Unforeseen Events',
        content: [
          'In events of natural disruption, government road closures, or safety restrictions, Ghoomosa will facilitate rescheduling, credit notes, or refunds in accordance with partner terms.',
        ],
      },
    ],
  },
  'payment-policy': {
    slug: 'payment-policy',
    title: 'Payment Policy',
    subtitle: 'Secure payment methods, billing schedules, and transaction security',
    lastUpdated: 'October 02, 2026',
    sections: [
      {
        heading: 'Quotation-Based Payments',
        content: [
          'Public fixed prices are not displayed in Phase 1. Payments are requested strictly against an authorized Ghoomosa quotation or booking reference.',
        ],
      },
      {
        heading: 'Approved Payment Channels',
        content: [
          'Payments should only be made to official Ghoomosa bank accounts or authorized payment gateway links provided on official invoices. Always verify the beneficiary name before transferring.',
        ],
      },
      {
        heading: 'Payment Schedule',
        content: [
          'Standard bookings require an advance deposit to secure stays and safari slots, with the balance due according to the date stipulated in your quotation.',
        ],
      },
      {
        heading: 'Taxes & Invoicing',
        content: [
          'Applicable GST and statutory taxes are itemized clearly on your invoice in compliance with Indian tax regulations.',
        ],
      },
      {
        heading: 'Security Caution',
        content: [
          'Ghoomosa staff will never request your debit/credit card PIN, UPI PIN, or bank OTP. Never disclose sensitive financial credentials to anyone.',
        ],
      },
    ],
  },
  'safari-adventure-policy': {
    slug: 'safari-adventure-policy',
    title: 'Safari & Adventure Policy',
    subtitle: 'Safety protocols, vehicle etiquette, and wilderness guidelines',
    lastUpdated: 'October 02, 2026',
    sections: [
      {
        heading: 'Nature of Wilderness Activities',
        content: [
          'Wildlife and open 4x4 drives take place in natural rugged terrain involving dust, varying temperatures, and uneven tracks. Guests should be prepared for outdoor environments.',
        ],
      },
      {
        heading: 'No Sighting Guarantee',
        content: [
          'Wildlife sightings are natural and can never be guaranteed. Trackers use deep local knowledge to maximize viewing opportunities ethically.',
        ],
      },
      {
        heading: 'Vehicle Safety & Conduct',
        content: [
          'Guests must remain seated inside the safari vehicle while moving. Standing on seats, leaning outward dangerously, or alighting without driver instruction is strictly prohibited. Children must be supervised by an adult at all times.',
        ],
      },
      {
        heading: 'Wildlife & Ecological Code',
        content: [
          'No feeding, calling, baiting, or provoking animals. Flash photography and littering are strictly banned. Do not pressure drivers to drive off-trail or approach animals unsafely.',
        ],
      },
      {
        heading: 'Health & Medical Considerations',
        content: [
          'Guests with pregnancy, severe back/neck conditions, or limited mobility must inform our team prior to booking so suitable smooth-terrain routes can be arranged.',
        ],
      },
    ],
  },
  'disclaimer': {
    slug: 'disclaimer',
    title: 'General Disclaimer',
    subtitle: 'Information accuracy, visual representations, and travel responsibility',
    lastUpdated: 'October 02, 2026',
    sections: [
      {
        heading: 'Website Information',
        content: [
          'Content on Ghoomosa.in is provided for travel planning and inspiration. While we strive for accuracy, local operational details, timings, and access routes can evolve. Confirmed written vouchers govern purchased services.',
        ],
      },
      {
        heading: 'Imagery & Visual Representation',
        content: [
          'Images on this website are authentic representations of the Jawai landscape and wildlife. Specific animal encounters, exact weather conditions, and seasonal dam water levels cannot be guaranteed on any particular date.',
        ],
      },
      {
        heading: 'Third-Party Links',
        content: [
          'Our website may contain references or links to external resources; Ghoomosa is not responsible for the content or privacy practices of external websites.',
        ],
      },
      {
        heading: 'Personal Belongings & Travel Risks',
        content: [
          'Travellers remain responsible for their personal belongings, photography equipment, appropriate clothing, and personal health precautions during travel.',
        ],
      },
    ],
  },
  'cookie-policy': {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    subtitle: 'Information about how cookies and tracking technologies are utilized',
    lastUpdated: 'October 02, 2026',
    sections: [
      {
        heading: 'Essential Cookies',
        content: [
          'These cookies are necessary for basic website operations, security, session management, and remembering form preferences.',
        ],
      },
      {
        heading: 'Analytics Cookies',
        content: [
          'We use privacy-compliant analytics tools (such as Google Analytics 4) to understand site traffic, popular packages, and user journeys so we can improve our content and performance.',
        ],
      },
      {
        heading: 'Managing Cookie Preferences',
        content: [
          'You can manage or disable cookies through your internet browser settings at any time, though some interactive features may operate with reduced functionality.',
        ],
      },
    ],
  },
  'grievance-redressal': {
    slug: 'grievance-redressal',
    title: 'Grievance Redressal',
    subtitle: 'Dedicated escalation mechanism and customer dispute resolution',
    lastUpdated: 'October 02, 2026',
    sections: [
      {
        heading: 'Dedicated Support & Grievance Contact',
        content: [
          'Ghoomosa is committed to swift, transparent resolution of any traveller concerns. For unresolved booking or operational matters, contact our Grievance Officer at grievance@ghoomosa.in or +91 73000 03101.',
        ],
      },
      {
        heading: 'Required Information for Escalation',
        content: [
          'To help us investigate promptly, please provide your Booking ID / Lead Reference, Full Name, Contact Number, detailed description of the issue, and any supporting documentation/receipts.',
        ],
      },
      {
        heading: 'Resolution Process & Timeline',
        content: [
          'We acknowledge grievances within 24 business hours and aim to provide formal resolution within 7 working days following investigation with the relevant service partners.',
        ],
      },
    ],
  },
};
