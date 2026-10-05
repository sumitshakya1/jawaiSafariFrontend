'use client';

import React from 'react';
import { buildWhatsAppUrl, WhatsAppContext } from '@/global/lib/whatsapp/buildWhatsAppUrl';

interface WhatsAppButtonProps extends WhatsAppContext {
  children?: React.ReactNode;
  className?: string;
  variant?: 'editorial' | 'accent' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
}

export function WhatsAppButton({
  children = 'Get Quote on WhatsApp',
  className = '',
  variant = 'editorial',
  size = 'md',
  ...context
}: WhatsAppButtonProps) {
  const url = buildWhatsAppUrl(context);

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }[size];

  const variantClasses = {
    editorial:
      'bg-[#005B5C] hover:bg-[#0A7B75] text-white font-semibold shadow-sm transition-colors',
    accent:
      'bg-[#FDBA21] hover:bg-[#F7941D] text-[#263238] font-bold shadow-sm transition-colors',
    whatsapp:
      'bg-[#25D366] hover:bg-[#20BA59] text-black font-semibold shadow-md transition-colors',
  }[variant];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200 active:scale-95 ${sizeClasses} ${variantClasses} ${className}`}
    >
      <svg className="w-[18px] h-[18px] shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
      </svg>
      <span>{children}</span>
    </a>
  );
}
