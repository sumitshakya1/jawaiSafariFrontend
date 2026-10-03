'use client';

import React from 'react';
import { CounterFactory, CounterVariantType } from '@/core/factories/CounterFactory';

export interface CounterProps {
  current: string;
  total?: string;
  variant?: CounterVariantType;
  showHairline?: boolean;
  showBar?: boolean;
  className?: string;
}

/**
 * Global reusable Counter component driven by polymorphic CounterFactory.
 */
export function Counter({
  current,
  total = '04',
  variant = 'standard',
  showHairline = false,
  showBar = false,
  className = '',
}: CounterProps) {
  const counterStyle = CounterFactory.create(variant);

  return (
    <div className={`${counterStyle.getContainerClasses()} ${className}`.trim()}>
      <div className="flex items-baseline gap-2">
        <span className={counterStyle.getCurrentClasses()}>{current}</span>
        <span className={counterStyle.getTotalClasses()}>/ {total}</span>
        {showHairline && (
          <div className="hidden md:block w-12 h-[1px] bg-primary/40 ml-4 self-center" />
        )}
      </div>
      {showBar && (
        <div className="w-24 h-0.5 bg-surface-container-highest/60 overflow-hidden">
          <div
            className="h-full bg-primary-container transition-all duration-700"
            style={{ width: `${(parseInt(current, 10) / parseInt(total, 10)) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
}
