import React from 'react';
import Link from 'next/link';
import { PolicyPageData } from '@/constants/policyData';

interface PolicyPageProps {
  policy: PolicyPageData;
}

export function PolicyPageTemplate({ policy }: PolicyPageProps) {
  if (!policy) {
    return null;
  }

  return (
    <article className="w-full min-h-screen bg-[#F8FAF8] text-[#263238] pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Header */}
        <header className="mb-10 pb-6 border-b border-[#DDE7E5]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#005B5C] font-bold">
              LEGAL & OPERATIONAL FRAMEWORK
            </span>
            <span className="px-3 py-1 rounded-full bg-[#EEF8F6] text-[#005B5C] text-xs font-mono font-semibold">
              Updated {policy.lastUpdated}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display-brand text-[#005B5C] tracking-tight">
            {policy.title}
          </h1>
          {policy.subtitle && (
            <p className="mt-2 text-[#667085] text-sm md:text-base font-light">
              {policy.subtitle}
            </p>
          )}
        </header>

        {/* Paper Content Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DDE7E5] shadow-sm space-y-8 text-sm md:text-base text-[#263238] font-light leading-relaxed">
          {policy.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-xl font-bold text-[#005B5C] tracking-tight">
                {section.heading}
              </h2>
              <div className="space-y-3 text-[#263238]">
                {section.content.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Navigation */}
        <footer className="mt-12 pt-6 border-t border-[#DDE7E5] flex flex-col sm:flex-row items-center justify-between text-xs text-[#667085] gap-4">
          <Link href="/" className="text-[#005B5C] hover:underline flex items-center gap-1 font-semibold">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Return to Ghoomosa Home</span>
          </Link>
          <p>
            For compliance inquiries:{' '}
            <a href="mailto:grievance@ghoomosa.in" className="text-[#005B5C] underline font-semibold">
              grievance@ghoomosa.in
            </a>
          </p>
        </footer>
      </div>
    </article>
  );
}

