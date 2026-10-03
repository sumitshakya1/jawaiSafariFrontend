import React from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className = '', ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full bg-surface-container-lowest px-margin-mobile md:px-margin py-space-xl relative z-20 ${className}`.trim()}
      {...props}
    >
      <div className="max-w-[1720px] mx-auto">{children}</div>
    </section>
  );
}
