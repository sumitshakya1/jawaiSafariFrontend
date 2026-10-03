import React from 'react';
import { ScrollDrivenCinematicStage } from '@/components/home/ScrollDrivenCinematicStage';
import { SignatureExperiences } from '@/components/home/SignatureExperiences';
import { FeaturedPackages } from '@/components/home/FeaturedPackages';
import { WhyJawai } from '@/components/home/WhyJawai';
import { QuickPlanner } from '@/components/home/QuickPlanner';
import { StayInJawai } from '@/components/home/StayInJawai';
import { TravelResponsibly } from '@/components/home/TravelResponsibly';
import { FaqSection } from '@/components/home/FaqSection';
import { FinalCtaBanner } from '@/components/home/FinalCtaBanner';

export default function HomePage() {
  return (
    <div className="w-full relative">
      {/* 1. Scroll-driven cinematic storytelling stage (4 scenes) */}
      <ScrollDrivenCinematicStage />

      {/* 2. Signature Experiences */}
      <SignatureExperiences />

      {/* 3. Featured Expedition Packages */}
      <FeaturedPackages />

      {/* 4. Why Jawai Wilderness */}
      <WhyJawai />

      {/* 5. Interactive Expedition Planner */}
      <QuickPlanner />

      {/* 6. Luxury Wilderness Stays */}
      <StayInJawai />

      {/* 7. Responsible Travel & Conservation */}
      <TravelResponsibly />

      {/* 8. Frequently Asked Questions */}
      <FaqSection />

      {/* 9. Final CTA Booking Manifest */}
      <FinalCtaBanner />
    </div>
  );
}
