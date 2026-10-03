import React from 'react';

export function WhyJawai() {
  const pillars = [
    {
      num: '01',
      title: 'Prehistoric Volcanic Kopjes',
      desc: 'Formed nearly 850 million years ago from plutonic magma, these smooth granite hills create naturally climate-controlled cavern fortresses where leopards find unmatched shelter.',
      tag: 'GEOLOGICAL MARVEL',
    },
    {
      num: '02',
      title: 'Centuries of Sacred Coexistence',
      desc: 'The indigenous Rabari pastoralists honor the leopard as a divine guardian of Lord Shiva. Here, predators roam freely between village houses and rock temples without human conflict.',
      tag: 'CULTURAL HERITAGE',
    },
    {
      num: '03',
      title: 'Unfenced, Wild Wilderness',
      desc: 'No cement enclosures, no government permit lotteries, and no artificial boundaries. Jawai is pure open territory where leopards, crocodiles, and migratory birds thrive in organic freedom.',
      tag: 'APEX SANCTUARY',
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-28 bg-surface-container-lowest text-white">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-primary" />
            <span className="font-label-counter text-[11px] font-semibold text-primary tracking-[0.35em] uppercase">
              THE JAWAI PHENOMENON
            </span>
            <span className="w-6 h-[1px] bg-primary" />
          </div>
          <h2 className="font-display-hero text-3xl md:text-5xl uppercase tracking-tight text-white mb-4">
            Discover Jawai Beyond the Ordinary
          </h2>
          <p className="font-editorial-quote italic text-lg text-white/70 max-w-xl">
            “Where granite hills, open countryside, migratory wetlands, and an ancient pastoralist culture converge into one unforgettable story.”
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="bg-surface-container-low/50 border border-white/10 p-8 flex flex-col justify-between hover:border-primary/40 transition-colors duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display-hero text-4xl text-primary/40 group-hover:text-primary transition-colors">
                    {p.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 bg-white/5 border border-white/10 text-white/60">
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-display-hero text-xl text-white uppercase tracking-tight mb-3">
                  {p.title}
                </h3>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <div className="w-full h-[1px] bg-white/10 mt-8 group-hover:bg-primary/50 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
