'use client';

import React, { useRef } from 'react';
import { trackVideoPlay } from '@/lib/analytics';

interface VideoSectionProps {
  propertySlug: string;
  videoUrl: string;
  posterUrl: string;
  title: string;
  description: string;
}

export function VideoSection({
  propertySlug,
  videoUrl,
  posterUrl,
  title,
  description,
}: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    trackVideoPlay({
      property_id: propertySlug,
      video_id: 'j-wild-resort-walkthrough',
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
          Resort Walkthrough
        </span>
        <h2 className="text-2xl sm:text-4xl font-display-brand font-bold text-[#005B5C] mb-3">
          Experience J Wild Jawai
        </h2>
        <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
          {description}
        </p>
      </div>

      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black border border-[#DDE7E5] aspect-video">
        <video
          ref={videoRef}
          controls
          preload="metadata"
          poster={posterUrl}
          onPlay={handlePlay}
          className="w-full h-full object-cover"
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="text-[11px] font-mono text-center text-[#667085] mt-3">
        Video preview: private pool villas, courtyards, and granite hillscapes at J Wild Resort Jawai.
      </p>
    </div>
  );
}
