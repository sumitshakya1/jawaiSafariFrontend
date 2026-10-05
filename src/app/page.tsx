import React, { Suspense } from 'react';
import { ScrollDrivenCinematicStage } from '@/components/home/ScrollDrivenCinematicStage';

// Below-the-fold sections: dynamically imported to reduce first-load JS and TBT
const SignatureExperiences = React.lazy(() =>
  import('@/components/home/SignatureExperiences').then((m) => ({ default: m.SignatureExperiences }))
);
const FeaturedPackages = React.lazy(() =>
  import('@/components/home/FeaturedPackages').then((m) => ({ default: m.FeaturedPackages }))
);
const WhyJawai = React.lazy(() =>
  import('@/components/home/WhyJawai').then((m) => ({ default: m.WhyJawai }))
);
const QuickPlanner = React.lazy(() =>
  import('@/components/home/QuickPlanner').then((m) => ({ default: m.QuickPlanner }))
);
const StayInJawai = React.lazy(() =>
  import('@/components/home/StayInJawai').then((m) => ({ default: m.StayInJawai }))
);
const TravelResponsibly = React.lazy(() =>
  import('@/components/home/TravelResponsibly').then((m) => ({ default: m.TravelResponsibly }))
);
const FaqSection = React.lazy(() =>
  import('@/components/home/FaqSection').then((m) => ({ default: m.FaqSection }))
);
const FinalCtaBanner = React.lazy(() =>
  import('@/components/home/FinalCtaBanner').then((m) => ({ default: m.FinalCtaBanner }))
);

// Minimal skeleton placeholder for below-fold content to avoid CLS
function SectionSkeleton() {
  return <div className="w-full py-20 bg-[#F8FAF8]" aria-hidden="true" />;
}

export default function HomePage() {
  return (
    <div className="w-full relative">
      {/* 1. Scroll-driven cinematic storytelling stage (4 scenes) - eager, above fold */}
      <ScrollDrivenCinematicStage />

      {/* 2–9. Below-the-fold sections: lazily loaded after hero is interactive */}
      <div className="section-below-fold">
        <Suspense fallback={<SectionSkeleton />}>
          <SignatureExperiences />
        </Suspense>
      </div>

      <div className="section-below-fold">
        <Suspense fallback={<SectionSkeleton />}>
          <FeaturedPackages />
        </Suspense>
      </div>

      <div className="section-below-fold">
        <Suspense fallback={<SectionSkeleton />}>
          <WhyJawai />
        </Suspense>
      </div>

      <div className="section-below-fold">
        <Suspense fallback={<SectionSkeleton />}>
          <QuickPlanner />
        </Suspense>
      </div>

      <div className="section-below-fold">
        <Suspense fallback={<SectionSkeleton />}>
          <StayInJawai />
        </Suspense>
      </div>

      <div className="section-below-fold">
        <Suspense fallback={<SectionSkeleton />}>
          <TravelResponsibly />
        </Suspense>
      </div>

      <div className="section-below-fold">
        <Suspense fallback={<SectionSkeleton />}>
          <FaqSection />
        </Suspense>
      </div>

      <div className="section-below-fold">
        <Suspense fallback={<SectionSkeleton />}>
          <FinalCtaBanner />
        </Suspense>
      </div>
    </div>
  );
}
