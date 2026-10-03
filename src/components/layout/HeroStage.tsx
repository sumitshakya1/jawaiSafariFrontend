'use client';

import React from 'react';

export interface HeroStageProps {
  backgroundImageUrl: string;
  children: React.ReactNode;
  variant?: 'center' | 'bottom-left' | 'split-vertical';
  scrimVariant?: 'jawai' | 'safari' | 'sanctuary';
  className?: string;
}

export function HeroStage({
  backgroundImageUrl,
  children,
  scrimVariant = 'jawai',
  className = '',
}: HeroStageProps) {
  return (
    <section className={`relative w-full min-h-[100svh] h-screen -mt-24 overflow-hidden select-none bg-[#F8FAF8] ${className}`.trim()}>
      {/* Scenic Background Layer */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out scale-100"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      />

      {/* Atmospheric Editorial Scrim Layers */}
      {scrimVariant === 'jawai' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/80 via-transparent to-surface-container-lowest/90 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-surface-container-lowest/20 to-surface-container-lowest/70 pointer-events-none" />
        </>
      )}

      {scrimVariant === 'safari' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-surface-container-lowest/90 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/60 via-transparent to-surface-container-lowest/40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/50 to-transparent pointer-events-none" />
        </>
      )}

      {scrimVariant === 'sanctuary' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/80 via-transparent to-surface-container-lowest/90 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-surface-container-lowest/20 to-surface-container-lowest/80 pointer-events-none" />
        </>
      )}

      {/* Content Injection */}
      {children}
    </section>
  );
}
