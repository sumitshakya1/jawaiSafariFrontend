import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CURATED_MEDIA } from '@/constants/curatedMedia';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Things to Do in Jawai - Wildlife, Nature & Culture | Ghoomosa',
  description:
    'Explore the top 6 things to do in Jawai: Leopard safaris, Jawai Dam birding, crocodile spotting, 4x4 rock climbing, Rabari village walks and granite sundowners.',
};

const ACTIVITIES = [
  {
    id: 'leopard',
    title: 'Track Leopards Across Granite Monoliths',
    category: 'Wildlife Tracking',
    timing: 'Dawn (05:45 AM) & Dusk (04:15 PM)',
    image: CURATED_MEDIA.leopard.hero,
    desc: 'Traverse the ancient boulder kopjes in open 4x4 Gypsies with local trackers to observe leopards basking on sun-warmed rocks.',
    link: '/jawai-leopard-safari',
    badge: 'Must Do #1',
  },
  {
    id: 'birding',
    title: 'Migratory Bird Watching at Jawai Dam',
    category: 'Avian Sanctuary',
    timing: 'Early Morning (06:30 AM - 10:00 AM)',
    image: CURATED_MEDIA.birding.hero,
    desc: 'Witness thousands of wintering Greater Flamingos, Demoiselle Cranes, Pelicans, and Bar-headed Geese feeding across the reservoir.',
    link: '/jawai-bird-watching',
    badge: 'Winter Highlight',
  },
  {
    id: 'croc',
    title: 'Spot Basking Marsh Crocodiles',
    category: 'Reptile Sanctuary',
    timing: 'Mid-Day (11:00 AM - 02:00 PM)',
    image: CURATED_MEDIA.crocodile.hero,
    desc: 'Observe 12-foot prehistoric mugger crocodiles warming themselves on sunlit granite shoals from elevated safe perimeters.',
    link: '/jawai-crocodile-spotting',
    badge: 'Nature Wonder',
  },
  {
    id: 'offroad',
    title: '4x4 Technical Granite Rock Crawling',
    category: 'Off-Road Adventure',
    timing: 'Golden Hour (04:30 PM - 06:30 PM)',
    image: CURATED_MEDIA.offroad.hero,
    desc: 'Experience the adrenaline of custom 4x4 vehicles ascending steep 45-degree granite slopes to reach 360-degree sunset peaks.',
    link: '/jawai-hill-drive',
    badge: 'Thrill Experience',
  },
  {
    id: 'culture',
    title: 'Cultural Walk with Rabari Pastoralists',
    category: 'Living Heritage',
    timing: 'Morning or Afternoon (2 Hours)',
    image: CURATED_MEDIA.culture.hero,
    desc: 'Meet the indigenous red-turbaned shepherd community who have lived in peaceful harmony with wild leopards for centuries.',
    link: '/jawai-village-experience',
    badge: 'Cultural Immersion',
  },
  {
    id: 'luxury',
    title: 'Granite Hilltop Sunset High-Tea & Sundowners',
    category: 'Luxury Wilderness',
    timing: 'Sunset (05:30 PM - 07:00 PM)',
    image: CURATED_MEDIA.luxuryStays.hero,
    desc: 'Savor artisanal masala chai, fine champagne, and chef-curated canapés on a private boulder summit as twilight falls over the Aravallis.',
    link: '/jawai-luxury-stays',
    badge: 'Signature Luxury',
  },
];

export default function ThingsToDoPage() {
  const whatsappUrl = buildWhatsAppUrl({
    packageOrExperienceName: 'Things to Do in Jawai Planning',
    canonicalPath: '/things-to-do-in-jawai',
    customMessage:
      'Hi Ghoomosa, I am planning activities in Jawai. Please help me customize a multi-experience itinerary with safaris, dam visits, and village walks.',
  });

  return (
    <div className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen pb-32">
      {/* 1. Hero */}
      <section className="relative w-full pt-36 pb-20 px-6 md:px-12 bg-[#003F40] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2000&q=85"
            alt="Things to Do in Jawai"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003F40] via-transparent to-[#003F40]/80" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-white/70 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/jawai" className="hover:text-white">Jawai</Link>
            <span>/</span>
            <span className="text-[#FDBA21]">Activities</span>
          </div>

          <span className="inline-block px-3.5 py-1 rounded-full bg-[#FDBA21]/20 border border-[#FDBA21]/40 text-[#FDBA21] text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            Curated Expedition Ideas
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display-brand font-bold text-white tracking-tight leading-tight mb-6">
            Top 6 Things to Do in Jawai Beyond the Leopard Safari
          </h1>

          <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed font-light mb-8">
            From sunrise wetland birding and prehistoric crocodile banks to steep granite rock ascents and Rabari pastoral walks, discover the full diversity of Jawai.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs font-mono uppercase tracking-widest inline-flex items-center gap-2 shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>Customize Activities on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Visual 6-Activity Mosaic Grid */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {ACTIVITIES.map((act) => (
            <div
              key={act.id}
              className="rounded-3xl bg-white border border-[#DDE7E5] shadow-sm overflow-hidden flex flex-col justify-between hover:border-[#0A7B75] hover:shadow-md transition-all group"
            >
              <div>
                <div className="relative h-64 w-full overflow-hidden bg-[#EEF8F6]">
                  <Image
                    src={act.image}
                    alt={act.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003F40]/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-[11px] font-mono text-[#005B5C] font-bold shadow-sm">
                    {act.badge}
                  </span>
                  <span className="absolute bottom-4 left-4 text-[11px] font-mono text-white bg-[#005B5C] px-2.5 py-0.5 rounded-md font-semibold">
                    {act.category}
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-mono text-[#005B5C] font-bold block mb-2">
                    Timing: {act.timing}
                  </span>
                  <h2 className="text-xl font-bold text-[#005B5C] group-hover:text-[#0A7B75] transition-colors mb-3 leading-snug">
                    {act.title}
                  </h2>
                  <p className="text-xs md:text-sm text-[#263238] leading-relaxed font-light mb-4">
                    {act.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={act.link}
                  className="w-full py-3 rounded-full bg-white hover:bg-[#EEF8F6] text-[#005B5C] font-semibold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 border border-[#005B5C] transition-all"
                >
                  <span>Explore Activity</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Recommended 2N/3D Timeline Roadmap */}
        <div className="p-8 md:p-14 rounded-3xl bg-[#EEF8F6] border border-[#DDE7E5] shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-1">
              Balanced Flow
            </span>
            <h3 className="text-2xl md:text-4xl font-display-brand font-bold text-[#005B5C]">
              Recommended 2N/3D Activity Timeline
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm">
              <span className="px-3 py-1 rounded-full bg-[#005B5C] text-white font-mono font-bold text-xs inline-block mb-3">
                DAY 1
              </span>
              <h4 className="text-base font-bold text-[#005B5C] mb-2">Arrival & Dusk Kopje Safari</h4>
              <p className="text-xs text-[#263238] font-light leading-relaxed">
                Check-in by 2:00 PM, depart for 4:30 PM sunset leopard tracking across northern granite kopjes, followed by fireside dinner.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm">
              <span className="px-3 py-1 rounded-full bg-[#005B5C] text-white font-mono font-bold text-xs inline-block mb-3">
                DAY 2
              </span>
              <h4 className="text-base font-bold text-[#005B5C] mb-2">Dawn Safari, Dam & Rock Drive</h4>
              <p className="text-xs text-[#263238] font-light leading-relaxed">
                05:45 AM dawn tracking, late morning Jawai Dam flamingo & crocodile expedition, and 4:30 PM steep technical rock climb.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm">
              <span className="px-3 py-1 rounded-full bg-[#005B5C] text-white font-mono font-bold text-xs inline-block mb-3">
                DAY 3
              </span>
              <h4 className="text-base font-bold text-[#005B5C] mb-2">Rabari Pastoral Walk & Departure</h4>
              <p className="text-xs text-[#263238] font-light leading-relaxed">
                Morning cultural walk through Rabari shepherd settlements, traditional tea, and seamless transfer back to Udaipur/Jodhpur.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Cross-Link to Places to Visit in Jawai Hub */}
        <div className="mt-14 p-8 md:p-12 rounded-3xl bg-white border border-[#005B5C]/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#005B5C] font-bold block">
              Regional Destinations & Heritage Excursions
            </span>
            <h3 className="text-xl md:text-2xl font-bold font-display-brand text-[#005B5C]">
              Looking for Temples, Forts & Day Trips Near Jawai?
            </h3>
            <p className="text-xs md:text-sm text-[#667085] leading-relaxed font-light">
              While this page focuses on experiential activities like 4x4 rock crawling and wildlife tracking, our Places to Visit guide covers Ranakpur Jain Temple, Kumbhalgarh Fort, Jawai Dam, and mountain shrines organized by distance from Jawai Bandh.
            </p>
          </div>
          <Link
            href="/places-to-visit-in-jawai"
            className="shrink-0 px-8 py-4 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-md text-center"
          >
            Explore Places to Visit in Jawai →
          </Link>
        </div>
      </main>
    </div>
  );
}

