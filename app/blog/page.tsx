import React from 'react';
import type { Metadata } from 'next';
import BlogDirectoryClient from '@/components/BlogDirectoryClient';

export const metadata: Metadata = {
  title: 'Fitness Journal — Strength Programming, Nutrition & Recovery Guides',
  description:
    'Read practical articles on barbell biomechanics, hypertrophy splits, nutritional fundamentals, and joint mobility from the APEX Fitness Club coaching faculty.',
};

export default function BlogPage() {
  return (
    <div className="bg-[#141817] text-[#F3F4ED]">
      {/* HERO */}
      <section className="py-20 lg:py-28 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#B7D66B]">
              THE APEX PERFORMANCE JOURNAL · EDUCATIONAL ARTICLES
            </p>
            <h1
              style={{ textWrap: 'balance' }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[0.95]"
            >
              Evidence-Based Notes on Strength & Longevity.
            </h1>
            <p className="text-lg text-[#F3F4ED]/80 leading-relaxed">
              Original programming guides, biomechanics breakdowns, and sustainable nutrition fundamentals authored by our coaching staff.
            </p>
          </div>
        </div>
      </section>

      {/* DIRECTORY */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <BlogDirectoryClient />
        </div>
      </section>
    </div>
  );
}
