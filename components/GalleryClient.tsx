'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ResilientImage from '@/components/ResilientImage';
import { GALLERY_DATA, GalleryItem } from '@/lib/site-data';
import {
  getNextLightboxIndex,
  getPrevLightboxIndex,
} from '@/lib/fitness-logic';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const GALLERY_CATEGORIES = [
  'All',
  'Gym interiors',
  'Equipment',
  'Strength training',
  'Cardio',
  'Personal training',
  'Group sessions',
  'Community',
  'Events',
] as const;

export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems: GalleryItem[] =
    selectedCategory === 'All'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : getNextLightboxIndex(prev, filteredItems.length)
    );
  }, [filteredItems.length]);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : getPrevLightboxIndex(prev, filteredItems.length)
    );
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, handleCloseLightbox, handleNext, handlePrev]);

  const activeItem =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  return (
    <div className="space-y-12">
      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#F3F4ED]/12">
        <div
          role="group"
          aria-label="Filter gallery by category"
          className="flex flex-wrap gap-2"
        >
          {GALLERY_CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setSelectedCategory(category);
                  setLightboxIndex(null);
                }}
                aria-pressed={active}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-[#B7D66B] text-[#141817] font-bold'
                    : 'bg-[#F3F4ED]/5 text-[#F3F4ED]/75 hover:text-[#F3F4ED] border border-[#F3F4ED]/15'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <span
          data-testid="gallery-count-readout"
          className="text-xs font-mono uppercase tracking-widest text-[#B7D66B] tabular-nums"
        >
          Showing {filteredItems.length} Plates
        </span>
      </div>

      {/* Masonry-Style Responsive Architectural Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => {
            const colSpan =
              item.aspect === 'wide'
                ? 'lg:col-span-8'
                : item.aspect === 'tall'
                ? 'lg:col-span-4'
                : 'lg:col-span-6';

            return (
              <motion.figure
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.18 }}
                className={`${colSpan} group relative border border-[#F3F4ED]/15 bg-[#141817] overflow-hidden flex flex-col justify-between`}
              >
                <div className="relative h-80 sm:h-96 overflow-hidden">
                  <ResilientImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141817] via-[#141817]/30 to-transparent" />

                  <button
                    type="button"
                    onClick={() => handleOpenLightbox(idx)}
                    aria-label={`Open ${item.title} in full-screen lightbox`}
                    className="absolute top-4 right-4 w-11 h-11 bg-[#141817]/85 border border-[#F3F4ED]/25 text-[#F3F4ED] flex items-center justify-center hover:border-[#B7D66B] hover:text-[#B7D66B] transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-4 left-5 right-5 space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono text-[#B7D66B]">
                      <span className="uppercase">{item.category}</span>
                      <span>{item.specs}</span>
                    </div>
                    <h2 className="font-display text-2xl uppercase tracking-wide text-[#F3F4ED]">
                      {item.title}
                    </h2>
                    <p className="text-xs text-[#F3F4ED]/80 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.figure>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {activeItem && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Lightbox view: ${activeItem.title}`}
            data-testid="gallery-lightbox-modal"
            className="fixed inset-0 z-50 bg-[#141817]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Top Bar */}
            <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between border-b border-[#F3F4ED]/15 pb-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#B7D66B] tabular-nums">
                PLATE 0{lightboxIndex + 1} / 0{filteredItems.length} ·{' '}
                {activeItem.category}
              </div>
              <button
                type="button"
                onClick={handleCloseLightbox}
                aria-label="Close lightbox"
                className="px-4 py-2 border border-[#F3F4ED]/25 text-xs font-mono uppercase tracking-widest text-[#F3F4ED] hover:border-[#B7D66B] hover:text-[#B7D66B] inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Close</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Center Image & Navigation Controls */}
            <div className="max-w-[1280px] w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
              <div className="lg:col-span-8 relative h-[48vh] sm:h-[62vh] border border-[#F3F4ED]/20 overflow-hidden bg-[#141817]">
                <ResilientImage
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-4 space-y-6">
                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#B7D66B]">
                    {activeItem.specs}
                  </p>
                  <h3 className="font-display text-3xl uppercase tracking-wide text-[#F3F4ED]">
                    {activeItem.title}
                  </h3>
                  <p className="text-sm text-[#F3F4ED]/80 leading-relaxed">
                    {activeItem.caption}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#F3F4ED]/15">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous gallery image"
                    className="flex-1 py-3 px-4 border border-[#F3F4ED]/25 text-xs font-mono uppercase tracking-widest text-[#F3F4ED] hover:border-[#B7D66B] hover:text-[#B7D66B] inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next gallery image"
                    className="flex-1 py-3 px-4 bg-[#B7D66B] text-[#141817] text-xs font-mono font-bold uppercase tracking-widest hover:bg-[#F3F4ED] inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
