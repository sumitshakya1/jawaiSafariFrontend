import dynamic from 'next/dynamic';
import { ScrollDrivenCinematicStage } from '@/components/home/ScrollDrivenCinematicStage';

// Below-the-fold sections: dynamically imported via Next.js dynamic to reduce initial bundle and TBT
const SignatureExperiences = dynamic(() =>
  import('@/components/home/SignatureExperiences').then((m) => m.SignatureExperiences)
);
const FeaturedPackages = dynamic(() =>
  import('@/components/home/FeaturedPackages').then((m) => m.FeaturedPackages)
);
const WhyJawai = dynamic(() =>
  import('@/components/home/WhyJawai').then((m) => m.WhyJawai)
);
const QuickPlanner = dynamic(() =>
  import('@/components/home/QuickPlanner').then((m) => m.QuickPlanner)
);
const StayInJawai = dynamic(() =>
  import('@/components/home/StayInJawai').then((m) => m.StayInJawai)
);
const TravelResponsibly = dynamic(() =>
  import('@/components/home/TravelResponsibly').then((m) => m.TravelResponsibly)
);
const FaqSection = dynamic(() =>
  import('@/components/home/FaqSection').then((m) => m.FaqSection)
);
const FinalCtaBanner = dynamic(() =>
  import('@/components/home/FinalCtaBanner').then((m) => m.FinalCtaBanner)
);

export default function HomePage() {
  return (
    <div className="w-full relative">
      {/* 1. Scroll-driven cinematic storytelling stage (4 scenes) - eager, above fold */}
      <ScrollDrivenCinematicStage />

      {/* 2–9. Below-the-fold sections: dynamically imported */}
      <SignatureExperiences />
      <FeaturedPackages />
      <WhyJawai />
      <QuickPlanner />
      <StayInJawai />
      <TravelResponsibly />
      <FaqSection />
      <FinalCtaBanner />
    </div>
  );
}
