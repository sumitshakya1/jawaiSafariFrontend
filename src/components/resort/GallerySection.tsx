'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GalleryMediaItem, GalleryCategory } from '@/data/resorts/types';
import { trackGalleryOpen } from '@/lib/analytics';

interface GallerySectionProps {
  propertySlug: string;
  items: GalleryMediaItem[];
}

const CATEGORIES: Array<{ key: 'All' | GalleryCategory; label: string }> = [
  { key: 'All', label: 'All Photos' },
  { key: 'Property', label: 'Property & Grounds' },
  { key: 'Rooms', label: 'Villas & Rooms' },
  { key: 'Details', label: 'Pools & Courtyards' },
  { key: 'Dining & Leisure', label: 'Dining & Leisure' },
  { key: 'Destination', label: 'Jawai Landscape & Safari' },
];

export function GallerySection({ propertySlug, items }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | GalleryCategory>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = items.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    trackGalleryOpen({
      property_id: propertySlug,
      asset_index: index,
      asset_category: filteredItems[index]?.category,
    });
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === cat.key
                ? 'bg-[#005B5C] text-white font-bold shadow-sm'
                : 'bg-white text-[#005B5C] hover:bg-[#EEF8F6] border border-[#DDE7E5]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleOpenLightbox(index)}
            className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-[#EEF8F6] border border-[#DDE7E5] shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <Image
              src={item.url}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FDBA21] font-bold">
                {item.category}
              </span>
              <p className="text-xs text-white font-medium mt-1">
                {item.caption || item.alt}
              </p>
            </div>
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-sm">🔍</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={handleCloseLightbox}
        >
          <button
            onClick={handleCloseLightbox}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-3 text-2xl font-mono cursor-pointer z-10"
            aria-label="Close photo gallery modal"
          >
            ✕
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 p-3 sm:p-4 rounded-full text-xl cursor-pointer z-10"
            aria-label="Previous photo"
          >
            ‹
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 p-3 sm:p-4 rounded-full text-xl cursor-pointer z-10"
            aria-label="Next photo"
          >
            ›
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] sm:h-[75vh]">
              <Image
                src={filteredItems[activeLightboxIndex].url}
                alt={filteredItems[activeLightboxIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-[11px] font-mono text-[#FDBA21] uppercase tracking-wider block">
                {filteredItems[activeLightboxIndex].category} ({activeLightboxIndex + 1} /{' '}
                {filteredItems.length})
              </span>
              <p className="text-sm text-white font-medium mt-1">
                {filteredItems[activeLightboxIndex].caption ||
                  filteredItems[activeLightboxIndex].alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
