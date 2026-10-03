'use client';

import React from 'react';

export interface ChipProps {
  label?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'tertiary' | 'variant' | 'coordinate' | string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Chip({
  label,
  children,
  variant = 'primary',
  active = false,
  onClick,
  className = '',
}: ChipProps) {
  const content = children || label;

  let variantStyles = 'bg-[#EEF8F6] text-[#005B5C] border-[#DDE7E5] hover:border-[#005B5C]';
  if (active) {
    variantStyles = 'bg-[#005B5C] text-white border-[#005B5C] font-semibold shadow-sm';
  } else if (variant === 'tertiary') {
    variantStyles = 'bg-white text-[#F7941D] border-[#DDE7E5] shadow-sm';
  } else if (variant === 'variant') {
    variantStyles = 'bg-white/80 text-[#667085] border-[#DDE7E5] shadow-sm';
  } else if (variant === 'coordinate') {
    variantStyles = 'bg-[#F8FAF8] text-[#667085] border-[#DDE7E5]';
  }

  const Tag = onClick ? 'button' : 'span';

  return (
    <Tag
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={`inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${variantStyles} ${className}`.trim()}
    >
      {content}
    </Tag>
  );
}

