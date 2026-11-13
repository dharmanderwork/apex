import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ProgramsDirectoryClient from '@/components/ProgramsDirectoryClient';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fitness Programs — 10 Periodized Strength, Conditioning & Coaching Tracks',
  description:
    'Explore all 10 training programs at APEX Fitness Club: Strength Training, Muscle Building, Weight Management, Personal Training, Functional Training, Cardio, and Mobility.',
};

export default function ProgramsPage() {
  return (
    <div className="bg-[#141817] text-[#F3F4ED]">
      {/* HERO */}
      <section className="py-20 lg:py-28 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#B7D66B]">
              10 PERIODIZED TRAINING SYSTEMS · STRUCTURED PROGRESSION
            </p>
            <h1
              style={{ textWrap: 'balance' }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[0.95]"
            >
              Training Systems Built for Measurable Adaptation.
            </h1>
            <p className="text-lg text-[#F3F4ED]/80 leading-relaxed">
              Every program at APEX follows a structured curriculum with clear biomechanics benchmarks, defined session formats, and scalable coaching support. Filter by discipline below or inspect any syllabus in full detail.
            </p>
          </div>
        </div>
      </section>

      {/* DIRECTORY */}
      <section className="py-16 lg:py-24 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <ProgramsDirectoryClient />
        </div>
      </section>

      {/* GUIDANCE CTA */}
      <section className="bg-[#F3F4ED] text-[#141817] py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#141817]/65">
              NOT SURE WHICH TRACK FITS YOUR GOALS?
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight">
              Start With a 60-Minute Movement & Program Consultation.
            </h2>
          </div>

          <Link
            href="/book-trial"
            className="px-8 py-4 bg-[#141817] text-[#B7D66B] font-display text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-[#141817]/90 transition-colors whitespace-nowrap shrink-0"
          >
            <span>Book Your Free Trial & Assessment</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
