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
      'bg-primary-container text-on-primary font-bold uppercase tracking-widest hover:bg-primary-container/90 shadow-[0_4px_20px_rgba(232,164,85,0.25)]',
    accent:
      'bg-gradient-to-r from-[#FDBA21] to-[#F7941D] text-slate-950 font-bold uppercase tracking-widest hover:opacity-95 shadow-lg',
    whatsapp:
      'bg-[#25D366] text-white font-semibold hover:bg-[#20ba59] shadow-[0_4px_15px_rgba(37,211,102,0.3)]',
  }[variant];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-none transition-all duration-200 active:scale-95 ${sizeClasses} ${variantClasses} ${className}`}
    >
      <span className="material-symbols-outlined text-[18px]">chat</span>
      <span>{children}</span>
    </a>
  );
}
