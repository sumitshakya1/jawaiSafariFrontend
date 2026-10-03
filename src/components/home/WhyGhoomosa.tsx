import React from 'react';

export function WhyGhoomosa() {
  const points = [
    {
      icon: 'verified',
      title: 'Curated Local Partner Network',
      desc: 'We partner directly with veteran local naturalists, certified 4x4 drivers, and verified wilderness lodges. No middle layers.',
    },
    {
      icon: 'route',
      title: 'One Cohesive Itinerary',
      desc: 'A Jawai trip is more than one safari. We coordinate safaris, stays, private transfers from Udaipur/Jodhpur, and cultural experiences seamlessly.',
    },
    {
      icon: 'chat',
      title: 'Direct WhatsApp Quotations',
      desc: 'Transparent custom quotes based on live availability, seasonal conditions, group size, and your travel style.',
    },
    {
      icon: 'shield',
      title: 'Responsible Wildlife Standards',
      desc: 'Strict adherence to silent tracking, safe observation distances, zero vehicle overcrowding, and community respect.',
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-28 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="w-6 h-[2px] bg-[#005B5C]" />
            <span className="font-mono text-[11px] font-bold text-[#005B5C] tracking-[0.25em] uppercase">
              THE GHOOMOSA PROMISE
            </span>
            <span className="w-6 h-[2px] bg-[#005B5C]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display-brand text-[#005B5C] tracking-tight">
            Why Plan With Ghoomosa
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#667085] font-light">
            We bridge authentic local expertise with seamless, transparent trip orchestration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-[#DDE7E5] hover:border-[#0A7B75] transition-all shadow-sm flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EEF8F6] text-[#005B5C] flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-2xl">{pt.icon}</span>
              </div>
              <h3 className="text-base font-bold text-[#005B5C] mb-2">
                {pt.title}
              </h3>
              <p className="text-xs text-[#263238] font-light leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
