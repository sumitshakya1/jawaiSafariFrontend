import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function WorkPage() {
  const expeditions = [
    {
      id: '01',
      title: 'Kopjes Expedition & Sunlit Boulders',
      kicker: '01 / 04 — JAWAI',
      badge: 'Plutonic Habitat',
      description:
        'Granite monoliths rising sharply above prehistoric riverbanks, hosting high-density solitary leopard clans.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBqpsLVyq-O-k06M9ro5BZ2twuDnq8V01cc6KE2OY2-pl3vJssFkEWFJ6ZjFkW1Ea3hpZNbwIrNp1LqrZMcP6k9gwSo1pTAGggUY85ZDKzlZTbclelVdRIwn6yi_TR62ZNDYW3mMSFynlU_4Aid8jThqgYNHZmQz4UBi8IXPIMy5TAw4QqKXb_HxHcGhfquWS26F4FKI8mRfMjCEz0cUl-u16mmgpFakVIyEZWbVJ4svF85hdDO7A-2',
      href: '/',
    },
    {
      id: '02',
      title: 'Apex Encounter & Dusk Tracking',
      kicker: '02 / 04 — SAFARI',
      badge: 'Open-Top Recon',
      description:
        'Silent 4WD pursuit through acacia grasslands as nocturnal thermals descend over ancient volcanic terrain.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCoKVksJXryvPiyVTATxDSw3YAK1GmzD6sNxpdKfu86NwGrXt2dQMeMlv4Moq78WuOHq3lE4ltt1h-Y3ocqm_V6MrtSYebHmxWOoojCDRhm8j-f-ZZiiKLWXiJXD93tAZKqwu8W2D6KX_Y7C6W1MDxNcZZYpxc1A8GUzwygnY0krIwgowPzKXGYXN7Q7S7L8BJN9n7Aq_8tWsS-Z-et6-avKaAr_SptT7Aa3VG2dd8eC_p4NKML1olu',
      href: '/safari',
    },
    {
      id: '03',
      title: 'Subterranean Caverns & Twilight Boulders',
      kicker: '03 / 04 — SANCTUARY',
      badge: 'Thermal Vaults',
      description:
        'Carved by primordial monsoons, subterranean cavities offer thermal sanctuary for Rajasthan big cats.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBIqlO0siNVsPh9ULo2UINIAaIL-Ut7gwewxF-1U-6ZMPwBrTd3fx8e2NCQfYdwRMGbvReNztzeDMQvuua9zWt-_mJr_Zgm1hTjJoMwm5b6DLK055kJyr_ltN0P814KUMb2qiUaNUuGPcMVSOTORyJRovBGyJu0Mgvpn4UrxZmduDhrZBD1e2vJoG_FcaiMlF5Q2P6PDzevnadCvJZCN7YAyuRUvcUdfqY_o4yUKHGwcAorgxmVgcRP',
      href: '/sanctuary',
    },
    {
      id: '04',
      title: 'Milky Way Core & Bortle 2 Stargazing',
      kicker: '04 / 04 — CELESTIAL',
      badge: 'Astrophotography',
      description:
        'Unrivaled dark-sky observation zenith where celestial galaxy ribbons arch over sleeping granite predators.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAkdZsQC5g0czXw5AkyxBJFXVynjxcEm6SNsdaaT6fbhnVaFtO4Het47TQ6fZtXaLoFhzAFAE5_IWGTq-QHu9BEmYPs7lJRxlfV3c94orI605nfPQ422-xz_L_gnWIoGvrXzgBj1L0x1Z1rt_DETl7rXeQ5wH36CixmgZxJscnVoHugymjSWYTCC41yrUCuGdJNJOVrSmKLDxk3unzWnUh-UjgQK_Bw9M6OK9rQnB-10Z0HvW04Gxtk',
      href: '/celestial',
    },
  ];

  return (
    <div className="w-full min-h-[calc(100vh-6rem)] bg-surface text-[#263238] px-margin-mobile md:px-margin py-16">
      <div className="max-w-[1720px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-px bg-[#005B5C]" />
              <span className="font-label-nav text-label-nav uppercase tracking-[0.25em] text-[#005B5C] font-bold">
                EXPEDITION PORTFOLIO
              </span>
            </div>
            <h1 className="font-display-hero text-headline-lg md:text-[3.5rem] font-extrabold uppercase tracking-tight text-white">
              Field Chapters &amp; Archives
            </h1>
          </div>
          <p className="font-body-md text-[#667085] max-w-md">
            Every expedition document is categorized by terrain, lighting condition, and focal
            predator behavior recorded by our indigenous tracking guild.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {expeditions.map((exp) => (
            <div key={exp.id} className="flex flex-col gap-4">
              <Card
                variant="visual-log"
                badgeText={exp.badge}
                imageUrl={exp.imageUrl}
                altText={exp.title}
                title={exp.title}
                description={exp.description}
              />
              <div className="flex items-center justify-between pt-2">
                <span className="font-label-counter text-xs text-[#005B5C] tracking-widest uppercase">
                  {exp.kicker}
                </span>
                <Link
                  href={exp.href}
                  className="font-label-nav text-xs uppercase tracking-widest text-white hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  Enter Chapter
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-headline-sm text-xl uppercase font-bold text-white mb-2">
              Commission Private Wildlife Reconnaissance
            </h3>
            <p className="font-body-sm text-[#667085] max-w-xl">
              Tailored game drives, dedicated naturalist escorts, and private astronomical setups
              are arranged with minimum 3-week lead time.
            </p>
          </div>
          <Button href="/contact" variant="primary-editorial" icon="arrow_forward">
            REQUEST EXPEDITION BRIEFING
          </Button>
        </div>
      </div>
    </div>
  );
}
