'use client';

import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Input({ label, error, helperText, className = '', id, ...props }: InputProps) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={inputId} className="text-xs font-mono uppercase tracking-wider text-[#263238] font-semibold">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full bg-white border border-[#DDE7E5] rounded-xl px-4 py-3 text-xs text-[#263238] placeholder:text-[#667085]/60 focus:outline-none focus:ring-2 focus:ring-[#0A7B75]/20 focus:border-[#0A7B75] transition-colors disabled:opacity-50 disabled:bg-[#F8FAF8] ${
          error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''
        } ${className}`}
        {...props}
      />
      {error && <span className="text-[11px] text-red-600 font-medium">{error}</span>}
      {helperText && !error && <span className="text-[11px] text-[#667085]">{helperText}</span>}
    </div>
  );
}
