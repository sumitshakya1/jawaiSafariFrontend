'use client';

import React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Checkbox({ label, id, className = '', ...props }: CheckboxProps) {
  const checkboxId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <label htmlFor={checkboxId} className={`flex items-center gap-2.5 cursor-pointer select-none text-xs text-[#263238] ${className}`}>
      <input
        type="checkbox"
        id={checkboxId}
        className="w-4 h-4 rounded border-[#DDE7E5] text-[#005B5C] focus:ring-[#0A7B75] focus:ring-offset-0 transition-colors"
        {...props}
      />
      <span>{label}</span>
    </label>
  );
}
