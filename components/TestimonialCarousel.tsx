'use client';

import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '@/lib/site-data';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = TESTIMONIALS_DATA.length;
  const current = TESTIMONIALS_DATA[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  return (
    <div className="border border-[#F3F4ED]/15 bg-[#141817] p-6 sm:p-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-[#F3F4ED]/12">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B]">
            MEMBER VOICES · SAMPLE DEMO TESTIMONIALS
          </p>
          <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-[#F3F4ED] mt-1">
            Built Around Serious Training Culture
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono tabular-nums text-[#F3F4ED]/60 mr-2">
            0{activeIndex + 1} / 0{total}
          </span>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-11 h-11 border border-[#F3F4ED]/20 flex items-center justify-center text-[#F3F4ED] hover:border-[#B7D66B] hover:text-[#B7D66B] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-11 h-11 border border-[#F3F4ED]/20 flex items-center justify-center text-[#F3F4ED] hover:border-[#B7D66B] hover:text-[#B7D66B] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-6">
          <Quote className="w-8 h-8 text-[#B7D66B]" />
          <blockquote className="font-sans text-xl sm:text-2xl text-[#F3F4ED] leading-relaxed font-medium">
            &ldquo;{current.quote}&rdquo;
          </blockquote>
        </div>

        <div className="lg:col-span-4 lg:border-l border-[#F3F4ED]/12 lg:pl-8 space-y-2">
          <p className="font-display text-xl uppercase tracking-wider text-[#F3F4ED]">
            {current.author}
          </p>
          <p className="text-sm text-[#F3F4ED]/75">{current.role}</p>
          <div className="pt-2 text-xs font-mono text-[#B7D66B] uppercase tracking-wider">
            <span>{current.program}</span>
            <span className="mx-2 text-[#F3F4ED]/40">·</span>
            <span>{current.membershipTier}</span>
          </div>
          <p className="text-[11px] font-mono text-[#F3F4ED]/45 pt-2">
            [{current.demoTag}]
          </p>
        </div>
      </div>

      {/* Selector Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#F3F4ED]/12">
        {TESTIMONIALS_DATA.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(idx)}
            className={`text-left p-3 border transition-colors cursor-pointer ${
              idx === activeIndex
                ? 'border-[#B7D66B] bg-[#B7D66B]/10 text-[#F3F4ED]'
                : 'border-[#F3F4ED]/10 text-[#F3F4ED]/55 hover:text-[#F3F4ED]'
            }`}
          >
            <span className="block font-mono text-[10px] uppercase tracking-widest text-[#B7D66B]">
              0{idx + 1} · {item.membershipTier}
            </span>
            <span className="block text-xs font-medium truncate mt-0.5">
              {item.author}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
