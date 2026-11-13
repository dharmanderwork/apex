import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ResilientImage from '@/components/ResilientImage';
import { TRANSFORMATIONS_DATA } from '@/lib/site-data';
import { ArrowUpRight, Quote, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fitness Transformations — Member Strength & Conditioning Stories',
  description:
    'Explore documented strength, mobility, and conditioning member journeys at APEX Fitness Club (Fictional Demo Profiles).',
};

export default function TransformationsPage() {
  return (
    <div className="bg-[#141817] text-[#F3F4ED]">
      {/* HERO */}
      <section className="py-20 lg:py-28 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#B7D66B]">
              MEMBER CASE STUDIES · CLEARLY LABELLED FICTIONAL DEMO PROFILES
            </p>
            <h1
              style={{ textWrap: 'balance' }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[0.95]"
            >
              Built Through Mesocycles, Not Overnight Shortcuts.
            </h1>
            <p className="text-lg text-[#F3F4ED]/80 leading-relaxed">
              At APEX, we measure transformation through objective physical capability: stronger compound lifts, lower resting heart rate, pain-free joint mobility, and unshakeable weekly consistency.
            </p>
          </div>

          {/* Transparent Ethical & Demo Disclaimer Banner */}
          <div className="mt-10 p-5 border border-[#B7D66B]/40 bg-[#B7D66B]/5 flex items-start gap-3 max-w-4xl">
            <ShieldAlert className="w-5 h-5 text-[#B7D66B] shrink-0 mt-0.5" />
            <p className="text-xs font-mono text-[#F3F4ED]/85 leading-relaxed">
              TRANSPARENCY & ETHICAL FITNESS NOTICE: All member profiles, names, photographs, and performance metrics below are fictional demonstration case studies created to illustrate how a gym website can present member stories responsibly without making guaranteed medical or rapid weight-loss claims.
            </p>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION CASE STUDIES */}
      <section className="divide-y divide-[#F3F4ED]/12">
        {TRANSFORMATIONS_DATA.map((story, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <article
              key={story.id}
              className={`py-20 lg:py-24 ${
                isEven
                  ? 'bg-[#F3F4ED] text-[#141817]'
                  : 'bg-[#141817] text-[#F3F4ED]'
              }`}
            >
              <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                  {/* Visual Column */}
                  <div className="lg:col-span-5 relative min-h-[400px] border border-current/15 overflow-hidden flex flex-col justify-end">
                    <div className="absolute inset-0">
                      <ResilientImage
                        src={story.image}
                        alt={story.memberName}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141817] via-[#141817]/50 to-transparent" />
                    </div>

                    <div className="relative z-10 p-6 text-[#F3F4ED] space-y-1">
                      <p className="text-[11px] font-mono uppercase tracking-widest text-[#B7D66B]">
                        {story.profileLabel}
                      </p>
                      <p className="font-display text-2xl uppercase tracking-wide">
                        {story.memberName}, {story.age} · {story.occupation}
                      </p>
                      <p className="text-xs font-mono text-[#F3F4ED]/80">
                        Coached by {story.coachName} · {story.duration}
                      </p>
                    </div>
                  </div>

                  {/* Story & Metrics Column */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase tracking-wider opacity-70">
                        <span>CASE STUDY 0{idx + 1}</span>
                        <span>SYSTEM: {story.programTitle}</span>
                      </div>

                      <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight">
                        {story.headline}
                      </h2>

                      <p className="text-sm font-semibold opacity-90">
                        Primary Objective: {story.goalSummary}
                      </p>

                      <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                        {story.journeyNarrative}
                      </p>
                    </div>

                    {/* Before / After Comparison Boxes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div
                        className={`p-6 border ${
                          isEven
                            ? 'border-[#141817]/20 bg-[#141817]/5'
                            : 'border-[#F3F4ED]/15 bg-[#F3F4ED]/[0.03]'
                        }`}
                      >
                        <p className="text-xs font-mono uppercase tracking-widest opacity-65 mb-3">
                          DAY 01 BASELINE BENCHMARKS (DEMO)
                        </p>
                        <ul className="space-y-2.5 text-xs sm:text-sm font-mono">
                          {story.beforeMetrics.map((m) => (
                            <li
                              key={m.label}
                              className="flex items-center justify-between border-b border-current/10 pb-1.5"
                            >
                              <span className="opacity-75">{m.label}</span>
                              <span className="font-bold tabular-nums">
                                {m.value}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-6 bg-[#141817] text-[#F3F4ED] border border-[#B7D66B]">
                        <p className="text-xs font-mono uppercase tracking-widest text-[#B7D66B] mb-3">
                          CURRENT PERFORMANCE BENCHMARKS (DEMO)
                        </p>
                        <ul className="space-y-2.5 text-xs sm:text-sm font-mono">
                          {story.afterMetrics.map((m) => (
                            <li
                              key={m.label}
                              className="flex items-center justify-between border-b border-[#F3F4ED]/12 pb-1.5"
                            >
                              <span className="text-[#F3F4ED]/75">{m.label}</span>
                              <span className="font-bold text-[#B7D66B] tabular-nums">
                                {m.value}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Member Quote & Program Link */}
                    <div className="pt-4 border-t border-current/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      <div className="flex items-start gap-3 max-w-xl">
                        <Quote className="w-5 h-5 shrink-0 mt-1 opacity-60" />
                        <p className="text-xs sm:text-sm italic opacity-85">
                          &ldquo;{story.memberQuote}&rdquo;
                        </p>
                      </div>

                      <Link
                        href={`/programs/${story.programSlug}`}
                        className={`px-5 py-3 font-display text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 whitespace-nowrap shrink-0 ${
                          isEven
                            ? 'bg-[#141817] text-[#B7D66B]'
                            : 'bg-[#B7D66B] text-[#141817]'
                        }`}
                      >
                        <span>Explore {story.programTitle}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-[#141817] border-t border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B]">
              START YOUR OWN 12-WEEK MESOCYCLE
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight">
              Establish Your Baseline Assessment This Week.
            </h2>
          </div>

          <Link
            href="/book-trial"
            className="px-8 py-4 bg-[#B7D66B] text-[#141817] font-display text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-[#F3F4ED] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Book Your Free Trial</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
