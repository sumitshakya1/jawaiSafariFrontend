'use client';

import React from 'react';
import { CardFactory, CardVariantType } from '@/core/factories/CardFactory';

export interface CardProps {
  variant?: CardVariantType;
  badgeText: string;
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  metricLabel?: string;
  metricValue?: string;
  className?: string;
}

/**
 * Global reusable Card component driven by polymorphic BaseCard styles.
 */
export function Card({
  variant = 'visual-log',
  badgeText,
  imageUrl,
  altText,
  title,
  description,
  metricLabel,
  metricValue,
  className = '',
}: CardProps) {
  const cardStyle = CardFactory.create(variant);

  return (
    <div className={cardStyle.getContainerClasses(className)}>
      <div className={cardStyle.getImageContainerClasses()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={altText}
          data-alt={altText}
          className={cardStyle.getImageClasses()}
        />
        {variant === 'visual-log' && (
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent pointer-events-none" />
        )}
        <span className={cardStyle.getBadgeClasses()}>{badgeText}</span>
      </div>

      <div className={variant === 'geological-feature' ? 'flex flex-col gap-3' : 'p-6 flex flex-col gap-2'}>
        {metricLabel && metricValue && (
          <div className="flex items-center justify-between text-on-surface-variant font-label-counter text-body-sm">
            <span>{metricLabel}</span>
            <span className="text-on-surface font-bold">{metricValue}</span>
          </div>
        )}
        <h3 className={cardStyle.getTitleClasses()}>{title}</h3>
        <p className={cardStyle.getDescriptionClasses()}>{description}</p>
      </div>
    </div>
  );
}
