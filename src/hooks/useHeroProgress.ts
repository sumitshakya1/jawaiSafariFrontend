'use client';

import { useState, useEffect } from 'react';

interface UseHeroProgressOptions {
  initialProgress?: number;
  increment?: number;
  intervalMs?: number;
  maxProgress?: number;
  autoStart?: boolean;
}

/**
 * Hook driving the hero timeline progress bar animation.
 * Defaults to starting at 25%, incrementing +0.15% every 50ms with full cleanup on unmount.
 */
export function useHeroProgress({
  initialProgress = 25,
  increment = 0.15,
  intervalMs = 50,
  maxProgress = 100,
  autoStart = true,
}: UseHeroProgressOptions = {}) {
  const [progress, setProgress] = useState<number>(initialProgress);
  const [isRunning, setIsRunning] = useState<boolean>(autoStart);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev < maxProgress) {
          return Math.min(prev + increment, maxProgress);
        }
        clearInterval(timer);
        return prev;
      });
    }, intervalMs);

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, increment, intervalMs, maxProgress]);

  const reset = (val = initialProgress) => {
    setProgress(val);
    setIsRunning(true);
  };

  const pause = () => setIsRunning(false);
  const resume = () => setIsRunning(true);

  return { progress, isRunning, reset, pause, resume };
}
