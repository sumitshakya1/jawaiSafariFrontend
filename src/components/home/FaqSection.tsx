'use client';

import React, { useState } from 'react';
import { GHOOMOSA_FAQS } from '@/global/constants/faqs';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(GHOOMOSA_FAQS[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative w-full py-20 md:py-28 bg-white text-[#263238]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="w-6 h-[2px] bg-[#005B5C]" />
            <span className="font-mono text-[11px] font-bold text-[#005B5C] tracking-[0.25em] uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="w-6 h-[2px] bg-[#005B5C]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display-brand text-[#005B5C] tracking-tight">
            Planning Your Jawai Visit
          </h2>
          <p className="mt-3 text-xs md:text-sm text-[#475467] font-light">
            Answers to common questions regarding safari booking, seasonality, sighting etiquette, and transfers.
          </p>
        </div>

        <div className="space-y-4">
          {GHOOMOSA_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-[#DDE7E5] bg-[#F8FAF8] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-sm md:text-base text-[#005B5C] hover:text-[#0A7B75] transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined text-lg shrink-0">
                    {isOpen ? 'remove' : 'add'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs md:text-sm text-[#263238] font-light leading-relaxed border-t border-[#DDE7E5]/50 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
