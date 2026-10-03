import React from 'react';

export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-surface-container-low/70 border border-white/5 rounded-none ${className}`}
    />
  );
}
