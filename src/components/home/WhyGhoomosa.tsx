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
      icon: 'receipt_long',
      title: 'Transparent Quotation Desk',
      desc: 'No hidden surcharges or forced package add-ons. You receive a clear, itemized proposal detailing vehicle permits, lodge categories, and meals.',
    },
    {
      icon: 'support_agent',
      title: 'Dedicated Ground Concierge',
      desc: 'From the moment your vehicle departs the airport until your return, a dedicated Ghoomosa coordinator ensures effortless operational execution.',
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-28 bg-[#0d141b] text-white">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-primary" />
              <span className="font-label-counter text-[11px] font-semibold text-primary tracking-[0.35em] uppercase">
                THE GHOOMOSA PROMISE
              </span>
            </div>
            <h2 className="font-display-hero text-3xl md:text-5xl uppercase tracking-tight text-white mb-6">
              Why Travellers Choose Ghoomosa
            </h2>
            <p className="text-body-sm text-on-surface-variant leading-relaxed mb-6">
              A Jawai trip is an intimate encounter with prehistoric geology and wild apex predators. We bring all the critical elements together—experiences, stay, local transport, and ethical field protocols—into one seamless journey.
            </p>
            <div className="p-4 bg-surface-container-lowest/80 border-l-2 border-primary font-editorial-quote italic text-sm text-white/80">
              “Trips That Become Stories — crafted with reverence for Rajasthan’s wild granite soul.”
            </div>
          </div>

          {/* Right Column Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((p, idx) => (
              <div
                key={idx}
                className="bg-surface-container-low/40 border border-white/10 p-6 flex flex-col justify-between hover:border-primary/40 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined text-xl">{p.icon}</span>
                  </div>
                  <h3 className="font-display-hero text-lg uppercase tracking-tight text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
