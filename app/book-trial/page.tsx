import React from 'react';
import type { Metadata } from 'next';
import TrialBookingWizard from '@/components/TrialBookingWizard';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book a Free Trial — 60-Minute Coaching & Facility Experience',
  description:
    'Reserve a complimentary 60-minute trial session and movement assessment at APEX Fitness Club.',
};

export default async function BookTrialPage({
  searchParams,
}: {
  searchParams: Promise<{ program?: string }>;
}) {
  const resolved = await searchParams;
  const initialProgramSlug = resolved?.program || 'strength-training';

  return (
    <div className="bg-[#141817] text-[#F3F4ED]">
      {/* HERO */}
      <section className="py-10 lg:py-14 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-3">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#B7D66B]">
              COMPLIMENTARY 60-MINUTE TRIAL SESSION · INTERACTIVE DEMO BOOKING
            </p>
            <h1
              style={{ textWrap: 'balance' }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.96]"
            >
              Experience the APEX Floor Firsthand.
            </h1>
            <p className="text-sm sm:text-base text-[#F3F4ED]/80 max-w-2xl leading-relaxed">
              Complete the 6-step reservation below to select your preferred training program, date, and session window. Includes a 15-minute private facility tour, movement screen, and 45-minute coached workout.
            </p>
          </div>

          <div className="lg:col-span-4 lg:border-l border-[#F3F4ED]/15 lg:pl-8 space-y-2.5 text-xs font-mono uppercase tracking-wider text-[#F3F4ED]/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B7D66B] shrink-0" />
              <span>Complimentary Locker & Towel Service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B7D66B] shrink-0" />
              <span>1-on-1 Coach Orientation Included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B7D66B] shrink-0" />
              <span>Zero Obligation or Sales Pressure</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6-STEP WIZARD */}
      <section className="py-10 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <TrialBookingWizard initialProgramSlug={initialProgramSlug} />
        </div>
      </section>
    </div>
  );
}
