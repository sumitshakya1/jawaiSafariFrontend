'use client';

import React from 'react';
import { useHeroProgress } from '@/hooks/useHeroProgress';

export interface ProgressBarProps {
  initialProgress?: number;
  increment?: number;
  intervalMs?: number;
  className?: string;
}

/**
 * Global reusable timeline progress bar with smooth interval-based animation.
 */
export function ProgressBar({
  initialProgress = 25,
  increment = 0.15,
  intervalMs = 50,
  className = '',
}: ProgressBarProps) {
  const { progress } = useHeroProgress({
    initialProgress,
    increment,
    intervalMs,
  });

  return (
    <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-white/10 z-20 ${className}`}>
      <div
        className="h-full bg-[#005B5C] transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
