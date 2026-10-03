'use client';

import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="font-label-nav text-[11px] uppercase tracking-[0.2em] text-on-surface-variant font-semibold"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`w-full bg-[#121820] text-white placeholder-white/40 border border-white/20 px-4 py-3.5 rounded-none font-body-md text-sm outline-none transition-colors duration-150 focus:border-primary-container focus:ring-0 ${
            error ? 'border-error' : ''
          } ${className}`.trim()}
          {...props}
        />
        {error && <span className="text-error text-xs font-body-sm">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
