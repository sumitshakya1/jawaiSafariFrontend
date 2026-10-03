'use client';

import React from 'react';
import { ChipFactory, ChipVariantType } from '@/core/factories/ChipFactory';

export interface ChipProps {
  variant?: ChipVariantType;
  children: React.ReactNode;
  className?: string;
  hasPulseDot?: boolean;
}

/**
 * Global reusable Chip component driven by polymorphic OOP BaseChip classes.
 */
export function Chip({
  variant = 'primary',
  children,
  className = '',
  hasPulseDot = false,
}: ChipProps) {
  const chipEntity = ChipFactory.create(variant);
  const classes = chipEntity.getClasses(className);

  return (
    <span className={classes}>
      {hasPulseDot && (
        <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_#e8a455] inline-block mr-2" />
      )}
      {children}
    </span>
  );
}
