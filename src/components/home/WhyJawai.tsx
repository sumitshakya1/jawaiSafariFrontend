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
      title: 'Unfenced Wilderness Freedom',
      desc: 'Unlike national parks with rigid safari tracks, Jawai is an open landscape. Experienced local operators navigate permitted boulders, riverbeds, and sand flats with natural precision.',
      tag: 'AUTHENTIC SAFARI',
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-28 bg-white border-b border-[#DDE7E5]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="w-6 h-[2px] bg-[#005B5C]" />
            <span className="font-mono text-[11px] font-bold text-[#005B5C] tracking-[0.25em] uppercase">
              DESTINATION ANATOMY
            </span>
            <span className="w-6 h-[2px] bg-[#005B5C]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display-brand text-[#005B5C] tracking-tight">
            Why Jawai is Unlike Any Other Safari
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#667085] font-light">
            Rajasthan’s wild granite kopjes, migratory wetlands, and the world’s highest density of cave-dwelling leopards living peacefully alongside human settlements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="p-8 rounded-2xl bg-[#F8FAF8] border border-[#DDE7E5] flex flex-col justify-between hover:border-[#0A7B75] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#F7941D] font-bold">
                    {p.tag}
                  </span>
                  <span className="text-3xl font-display-brand font-bold text-[#DDE7E5]">
                    {p.num}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#005B5C] mb-3">
                  {p.title}
                </h3>
                <p className="text-xs md:text-sm text-[#263238] font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
