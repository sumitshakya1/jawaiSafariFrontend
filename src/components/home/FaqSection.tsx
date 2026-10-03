'use client';

import React, { useState } from 'react';
import { GHOOMOSA_FAQS } from '@/global/constants/faqs';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(GHOOMOSA_FAQS[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative w-full py-20 md:py-28 bg-surface-container-lowest text-white">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="w-6 h-[1px] bg-primary" />
            <span className="font-label-counter text-[11px] font-semibold text-primary tracking-[0.35em] uppercase">
              EXPEDITION INTELLIGENCE
            </span>
            <span className="w-6 h-[1px] bg-primary" />
          </div>
          <h2 className="font-display-hero text-3xl md:text-5xl uppercase tracking-tight text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-body-sm text-on-surface-variant">
            Clear, honest answers about wildlife tracking, best seasons, and personalized quotation planning.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {GHOOMOSA_FAQS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-surface-container-low/50 border border-white/10 transition-colors"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display-hero text-base md:text-lg text-white uppercase tracking-tight">
                    {item.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-primary transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-body-sm text-on-surface-variant leading-relaxed border-t border-white/5 pt-4">
                    {item.answer}
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
