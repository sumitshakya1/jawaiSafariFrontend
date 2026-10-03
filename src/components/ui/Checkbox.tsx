'use client';

import React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className = '', id, checked, onChange, ...props }, ref) => {
    const inputId = id || `check-${Math.random().toString(36).substring(2, 9)}`;

    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={inputId} className="inline-flex items-start gap-3 cursor-pointer select-none">
          <div className="relative mt-0.5">
            <input
              ref={ref}
              id={inputId}
              type="checkbox"
              checked={checked}
              onChange={onChange}
              className="sr-only peer"
              {...props}
            />
            <div className="w-4 h-4 bg-[#1A222D] border border-white/30 rounded-none flex items-center justify-center peer-checked:bg-primary-container peer-checked:border-primary-container transition-colors duration-150">
              <svg
                className="w-3 h-3 text-[#111111] opacity-0 peer-checked:opacity-100 transition-opacity duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3.5"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <span className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
            {label}
          </span>
        </label>
        {error && <span className="text-error text-xs ml-7 font-body-sm">{error}</span>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
