import React from 'react';
import Link from 'next/link';
import { SlideRepository } from '@/core/repositories/SlideRepository';
import { ExpeditionRepository } from '@/core/repositories/ExpeditionRepository';
import { Counter } from '@/components/ui/Counter';
import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';
import { Card } from '@/components/ui/Card';
import { DataTable } from '@/components/ui/DataTable';

export default async function SafariPage() {
  const slideRepo = SlideRepository.getInstance();
  const expeditionRepo = ExpeditionRepository.getInstance();

  const slide = await slideRepo.getBySlideNumber('02');
  const expeditions = await expeditionRepo.getAll();
  const currentExpedition = expeditions[0];

  const heroImage =
    slide?.imageUrl ||
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAIPiNWp9eFK-PVFUY4iOnThDWnm0511bfJG0cIkNYg3F2yxi44KRk6VoxGtUrnAejP1KSOCgIuwUJYDQ5CCLox8BuTIE1mGOOf2BWZ3_n2qkKWxAH-ptrX-qD5yW3p5ayBp7cEL3uZVkRxKoMvm19WFwxkpi0hzODspPEud_R-BTRsBcW0mv5jmdtIPDbdp_3uSryIcFlXS-VRjJTPP76TXpQYlQEm69OpbcINw1c1YSnGaznTutLy';

  return (
    <div className="flex flex-col w-full relative select-none">
      {/* Immersive Cinematic Stage Bleeding Under Header */}
      <section className="relative w-full min-h-[100svh] h-screen -mt-24 overflow-hidden bg-[#F8FAF8]">
        {/* Full-Bleed Background Imagery */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out scale-[1.02] hover:scale-100"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />

        {/* Atmospheric Editorial Film Scrims */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-surface-container-lowest/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/60 via-transparent to-surface-container-lowest/40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/50 to-transparent pointer-events-none" />

        {/* Slide Canvas Overlay Grid */}
        <div className="relative w-full h-full max-w-[1720px] mx-auto px-margin-mobile md:px-margin pt-28 flex flex-col justify-between pb-24 z-10 pointer-events-none">
          {/* Top Row: Counter & Metadata Badge */}
          <div className="w-full flex items-start justify-between pointer-events-auto">
            {/* Slide Index Counter with Progress Micro-line */}
            <Link href="/sanctuary" className="block group" title="Next Slide: Sanctuary">
              <Counter current="02" total="04" variant="bar" showBar />
            </Link>

            {/* Atmospheric Metadata Tag */}
            <div className="hidden sm:flex items-center gap-2.5 bg-[#F8FAF8]/70 backdrop-blur-md px-4 py-2.5 shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-label-nav text-label-nav uppercase tracking-[0.22em] text-primary">
                Dusk Tracking &amp; Savannah
              </span>
            </div>
          </div>

          {/* Center-Right Floating Exploration CTA (Aligned with Reference Composition) */}
          <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 pointer-events-auto z-20">
            <Button
              href="#expedition-manifest"
              variant="high-impact"
              icon="arrow_forward"
              id="cta-explore"
            >
              Explore Expedition
            </Button>
          </div>

          {/* Lower Left Content Anchor: Massive Monolithic Title & Habitat Specs */}
          <div className="w-full max-w-2xl pointer-events-auto flex flex-col justify-end mt-auto">
            {/* Kicker Label */}
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-px bg-[#005B5C]" />
              <span className="font-label-nav text-label-nav uppercase tracking-[0.25em] text-[#005B5C] font-bold">
                Dusk Tracking &amp; Savannah
              </span>
            </div>

            {/* Monumental Hero Typographic Landmark */}
            <h1 className="font-display-hero text-display-hero text-[#263238] font-extrabold uppercase tracking-tighter leading-none drop-shadow-2xl">
              Safari
            </h1>

            {/* Literary Editorial Quote */}
            <p className="font-editorial-quote text-editorial-quote italic text-[#263238]/90 mt-4 leading-relaxed max-w-xl font-normal drop-shadow-md">
              “Ghost of the granite boulders, stalking the golden amber twilight.”
            </p>

            {/* Curated Feature Chips & Coordinates */}
            <div className="flex flex-wrap items-center gap-2.5 mt-5">
              <Chip variant="primary">Rabari Coexistence</Chip>
              <Chip variant="tertiary">Custom 4x4 Tracking</Chip>
              <Chip variant="variant" className="hidden md:inline-flex">
                25° 04′ N · Jawai Hills
              </Chip>
            </div>
          </div>
        </div>
      </section>

      {/* Dossier Narrative Briefing (Refined Editorial Split Module) */}
      <section
        className="w-full bg-[#F8FAF8] px-margin-mobile md:px-margin py-space-xl relative z-20"
        id="expedition-manifest"
      >
        <div className="max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Chapter Metadata Header */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="font-label-counter text-label-counter text-primary tracking-[0.3em] uppercase">
              {currentExpedition?.phaseKicker || 'Phase 02 — Jawai Basin'}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-[#263238] font-bold uppercase tracking-tight">
              {currentExpedition?.title || 'The Apex Encounter'}
            </h2>
            <p className="font-body-md text-body-md text-[#667085] max-w-sm leading-relaxed mt-2">
              {currentExpedition?.description ||
                'Between ancient magma-carved granite monoliths and desert riverbeds, high-density leopard clans thrive alongside the nomadic Rabari herdsmen in quiet harmony.'}
            </p>

            <div className="mt-8">
              <DataTable
                items={
                  currentExpedition?.specRows.map((s) => ({
                    id: s.id,
                    label: s.label,
                    value: s.value,
                    highlight: s.highlight,
                  })) || [
                    { id: '1', label: 'Recommended Hour', value: '17:15 — 20:30 IST', highlight: true },
                    { id: '2', label: 'Vessel Type', value: 'Open-Top Safari Spec 4WD', highlight: false },
                  ]
                }
                variant="block"
              />
            </div>
          </div>

          {/* Visual Field Journal Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            {(currentExpedition?.cards || []).map((card) => (
              <Card
                key={card.id}
                variant="visual-log"
                badgeText={card.badgeText}
                imageUrl={card.imageUrl}
                altText={card.altText}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
