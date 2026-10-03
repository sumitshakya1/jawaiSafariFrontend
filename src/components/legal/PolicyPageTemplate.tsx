import React from 'react';
import Link from 'next/link';
import { PolicyPageData } from '@/constants/policyData';

interface Props {
  policy: PolicyPageData;
}

export function PolicyPageTemplate({ policy }: Props) {
  return (
    <div className="w-full bg-[#07090e] text-[#e1e2ec] min-h-screen pb-32">
      {/* Policy Hero Header */}
      <section className="relative w-full pt-36 pb-16 px-6 md:px-12 border-b border-white/10 bg-gradient-to-b from-black/80 via-[#07090e] to-[#07090e]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-white/50 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white/40">Policies</span>
            <span>/</span>
            <span className="text-[#e8a455]">{policy.title}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            {policy.title}
          </h1>
          <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed mb-6 font-light">
            {policy.subtitle}
          </p>

          <div className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#e8a455]">
            Last Reviewed & Effective Date: {policy.lastUpdated}
          </div>
        </div>
      </section>

      {/* Policy Content Sections */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-14">
        <div className="space-y-8">
          {policy.sections.map((sec, idx) => (
            <article
              key={idx}
              className="p-6 md:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 shadow-xl"
            >
              <h2 className="text-lg md:text-xl font-serif font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#e8a455]/15 border border-[#e8a455]/30 text-[#e8a455]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span>{sec.heading}</span>
              </h2>
              <div className="space-y-3.5 text-sm md:text-base text-white/80 leading-relaxed font-light">
                {sec.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Contact Footer */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-black/80 to-black/40 border border-white/10 text-xs text-white/60 text-center space-y-2">
          <p>
            For any clarifications regarding our {policy.title.toLowerCase()}, please email{' '}
            <a href="mailto:support@ghoomosa.in" className="text-[#e8a455] underline">
              support@ghoomosa.in
            </a>{' '}
            or contact our team on WhatsApp at{' '}
            <a href="https://wa.me/917300003101" className="text-[#25D366] underline">
              +91 73000 03101
            </a>
            .
          </p>
          <p className="text-[11px] text-white/40">
            Ghoomosa Developer Master Specification • Phase 1 Operations
          </p>
        </div>
      </main>
    </div>
  );
}
