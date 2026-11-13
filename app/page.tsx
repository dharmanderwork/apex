import React from 'react';
import Link from 'next/link';
import ResilientImage from '@/components/ResilientImage';
import MembershipPricingSection from '@/components/MembershipPricingSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import {
  BRAND_INFO,
  DEMO_STATISTICS,
  PROGRAMS_DATA,
  FACILITIES_DATA,
  TRAINERS_DATA,
  TRANSFORMATIONS_DATA,
} from '@/lib/site-data';
import { ArrowUpRight, ArrowDown, CheckCircle2 } from 'lucide-react';

const WHY_CHOOSE_ITEMS = [
  {
    index: '01',
    title: 'Expert Performance Coaching',
    description:
      'Every floor session and private consultation is led by specialists trained in barbell biomechanics, velocity profiling, and injury-resilient progression.',
  },
  {
    index: '02',
    title: 'Calibrated Architectural Equipment',
    description:
      '12 custom 11-gauge power racks, competition plates, dual 70kg dumbbell runs, and a 35-meter shock-absorbent sprint turf engineered for zero bottlenecks.',
  },
  {
    index: '03',
    title: 'Personalized Training Roadmaps',
    description:
      'We eliminate aimless daily guesswork. Every member trains from a structured 12-week mesocycle tailored to their movement screen and recovery capacity.',
  },
  {
    index: '04',
    title: 'Focused, Zero-Ego Environment',
    description:
      'Capped membership capacity ensures an uncrowded, disciplined training atmosphere where beginners and competitive lifters train side by side with respect.',
  },
  {
    index: '05',
    title: 'Structured Progression & Recovery',
    description:
      'Integrated mobility, percussion therapy, and hotel-caliber stone changing suites allow you to train hard and recover completely under one roof.',
  },
];

export default function HomePage() {
  const featuredPrograms = [
    PROGRAMS_DATA[0], // Strength Training
    PROGRAMS_DATA[3], // Personal Training
    PROGRAMS_DATA[4], // Functional Training
    PROGRAMS_DATA[5], // Cardio and Endurance
    PROGRAMS_DATA[2], // Weight Management
    PROGRAMS_DATA[6], // Group Fitness
  ];

  const previewFacilities = [
    FACILITIES_DATA[0], // Strength Training Zone
    FACILITIES_DATA[2], // Cardio Zone
    FACILITIES_DATA[3], // Functional Training Area
    FACILITIES_DATA[6], // Locker Facilities
    FACILITIES_DATA[5], // Group Workout Studio
  ];

  return (
    <div className="bg-[#141817] text-[#F3F4ED]">
      {/* HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center border-b border-[#F3F4ED]/12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ResilientImage
            src="/images/apex-hero-strength.jpg"
            alt="Elite athlete preparing for a heavy barbell deadlift inside APEX Fitness Club"
            priority
            className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141817] via-[#141817]/85 to-[#141817]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141817] via-transparent to-[#141817]/50" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.22em] text-[#B7D66B]">
              APEX FITNESS CLUB · ARCHITECTURAL STRENGTH & CONDITIONING
            </p>

            <h1
              style={{ textWrap: 'balance' }}
              className="font-display text-5xl sm:text-7xl lg:text-[5.25rem] font-bold uppercase leading-[0.95] tracking-tight text-[#F3F4ED]"
            >
              BUILD YOUR <span className="text-[#B7D66B]">STRONGER</span> SELF.
            </h1>

            <p className="text-lg sm:text-xl text-[#F3F4ED]/85 max-w-xl leading-relaxed font-normal">
              {BRAND_INFO.supportingHeroText} Experience periodized strength training, bespoke 1-on-1 coaching, and a 28,500 sq. ft. performance sanctuary.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/book-trial"
                className="px-8 py-4 bg-[#B7D66B] text-[#141817] font-display text-sm sm:text-base font-bold uppercase tracking-[0.14em] inline-flex items-center justify-center gap-2.5 hover:bg-[#F3F4ED] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Book a Free Trial</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="/membership"
                className="px-8 py-4 border border-[#F3F4ED]/35 bg-[#141817]/60 text-[#F3F4ED] font-display text-sm sm:text-base font-bold uppercase tracking-[0.14em] inline-flex items-center justify-center gap-2.5 hover:border-[#B7D66B] hover:text-[#B7D66B] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Explore Memberships</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-wider text-[#F3F4ED]/65">
              <span>12 Custom Power Racks</span>
              <span aria-hidden="true">·</span>
              <span>35m Indoor Sprint Turf</span>
              <span aria-hidden="true">·</span>
              <span>1-on-1 Private Coaching Studio</span>
              <span aria-hidden="true">·</span>
              <span>Capped Member Capacity</span>
            </div>
          </div>

          {/* Animated Scroll Indicator */}
          <div className="mt-14 pt-8 border-t border-[#F3F4ED]/15 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#F3F4ED]/60">
            <a
              href="#brand-introduction"
              className="inline-flex items-center gap-2 hover:text-[#B7D66B] transition-colors"
            >
              <span>Scroll to Explore the Club</span>
              <ArrowDown className="w-4 h-4 text-[#B7D66B] animate-bounce" />
            </a>
            <span className="hidden sm:inline">
              Fictional Brand Showcase · Client Presentation Ready
            </span>
          </div>
        </div>
      </section>

      {/* SECTION B: KEY DEMO STATISTICS BAR */}
      <section
        aria-label="Club Performance Metrics"
        className="bg-[#141817] border-b border-[#F3F4ED]/12"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#F3F4ED]/12">
            {DEMO_STATISTICS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`${idx > 0 ? 'sm:pl-8 pt-6 sm:pt-0' : ''}`}
              >
                <p className="font-display text-4xl sm:text-5xl font-bold text-[#B7D66B] tabular-nums tracking-tight">
                  {stat.value}
                </p>
                <p className="font-display text-base uppercase tracking-wider text-[#F3F4ED] mt-2">
                  {stat.label}
                </p>
                <p className="text-xs text-[#F3F4ED]/55 mt-1 leading-relaxed">
                  {stat.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION A: BRAND INTRODUCTION (OFF-WHITE ARCHITECTURAL CONTRAST SECTION) */}
      <section
        id="brand-introduction"
        className="bg-[#F3F4ED] text-[#141817] py-20 lg:py-28 border-b border-[#141817]/12"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#141817]/65">
                  01. THE APEX PHILOSOPHY
                </p>
                <h2
                  style={{ textWrap: 'balance' }}
                  className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight leading-[1.02]"
                >
                  Engineered for Lifters Who Value Structure Over Noise.
                </h2>
                <p className="text-base sm:text-lg text-[#141817]/80 leading-relaxed">
                  {BRAND_INFO.description}
                </p>
                <p className="text-sm sm:text-base text-[#141817]/75 leading-relaxed">
                  Most commercial gyms are built around high-volume crowding and rows of unguided cardio machines. APEX was architected from the ground up as a serious training sanctuary: calibrated free weights, structured 12-week coaching systems, and an environment that respects your focus.
                </p>
              </div>

              <div className="pt-6 border-t border-[#141817]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#141817]/70">
                  <span>Strength · Conditioning · Mobility · Recovery</span>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#141817] text-[#F3F4ED] font-display text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-[#B7D66B] hover:text-[#141817] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Discover Our Story</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              <div className="relative min-h-[340px] border border-[#141817]/15 overflow-hidden">
                <ResilientImage
                  src="/images/apex-facility-weights.jpg"
                  alt="APEX Fitness Club main strength floor and 35-meter sprint turf"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#141817] via-[#141817]/80 to-transparent p-5 text-[#F3F4ED]">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-[#B7D66B]">
                    ZONE 01 & 04
                  </p>
                  <p className="font-display text-lg uppercase tracking-wide">
                    12 Power Racks & 35m Turf
                  </p>
                </div>
              </div>

              <div className="relative min-h-[340px] border border-[#141817]/15 overflow-hidden">
                <ResilientImage
                  src="/images/apex-group-recovery.jpg"
                  alt="APEX Fitness Club timber-lined mobility and recovery studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#141817] via-[#141817]/80 to-transparent p-5 text-[#F3F4ED]">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-[#B7D66B]">
                    ZONE 08
                  </p>
                  <p className="font-display text-lg uppercase tracking-wide">
                    Dedicated Recovery Sanctuary
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: EXPLORE OUR PROGRAMS */}
      <section className="bg-[#141817] text-[#F3F4ED] py-20 lg:py-28 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B] mb-2">
                02. PERIODIZED TRAINING SYSTEMS
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight">
                Explore Our Core Programs
              </h2>
            </div>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#F3F4ED]/25 text-xs font-mono uppercase tracking-widest text-[#F3F4ED] hover:border-[#B7D66B] hover:text-[#B7D66B] transition-colors whitespace-nowrap shrink-0"
            >
              <span>View All 10 Programs</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((program) => (
              <article
                key={program.slug}
                className="group border border-[#F3F4ED]/15 bg-[#141817] flex flex-col justify-between hover:border-[#B7D66B] transition-colors"
              >
                <div>
                  <div className="relative h-60 overflow-hidden border-b border-[#F3F4ED]/12">
                    <ResilientImage
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141817] via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#F3F4ED]/85">
                      <span className="text-[#B7D66B] font-bold">
                        {program.number}. {program.category.toUpperCase()}
                      </span>
                      <span>{program.duration}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-display text-2xl uppercase tracking-wide text-[#F3F4ED] group-hover:text-[#B7D66B] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-[#F3F4ED]/75 leading-relaxed">
                      {program.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-[#F3F4ED]/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#F3F4ED]/55">
                    {program.weeklyFrequency}
                  </span>
                  <Link
                    href={`/programs/${program.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-[#B7D66B] hover:text-[#F3F4ED] transition-colors"
                  >
                    <span>Program Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D: FACILITIES PREVIEW (BENTO ASYMMETRIC LAYOUT) */}
      <section className="bg-[#141817] text-[#F3F4ED] py-20 lg:py-28 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B] mb-2">
                03. ARCHITECTURAL TRAINING FLOOR
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight">
                Purpose-Built Performance Zones
              </h2>
            </div>
            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#B7D66B] text-[#141817] font-display text-xs font-bold uppercase tracking-widest hover:bg-[#F3F4ED] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Inspect All 8 Zones</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {previewFacilities.map((zone, idx) => {
              const spanClass =
                idx === 0
                  ? 'lg:col-span-7'
                  : idx === 1
                  ? 'lg:col-span-5'
                  : 'lg:col-span-4';

              return (
                <div
                  key={zone.id}
                  className={`${spanClass} group relative border border-[#F3F4ED]/15 overflow-hidden min-h-[340px] flex flex-col justify-end`}
                >
                  <div className="absolute inset-0">
                    <ResilientImage
                      src={zone.image}
                      alt={zone.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141817] via-[#141817]/75 to-[#141817]/20" />
                  </div>

                  <div className="relative z-10 p-6 sm:p-8 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-[#B7D66B]">
                      <span>ZONE {zone.number}</span>
                      <span>{zone.areaSqFt}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-[#F3F4ED]">
                      {zone.name}
                    </h3>
                    <p className="text-sm text-[#F3F4ED]/80 leading-relaxed max-w-xl">
                      {zone.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION E: WHY CHOOSE APEX (OFF-WHITE EDITORIAL SECTION) */}
      <section className="bg-[#F3F4ED] text-[#141817] py-20 lg:py-28 border-b border-[#141817]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#141817]/65 mb-2">
              04. THE APEX DIFFERENCE
            </p>
            <h2
              style={{ textWrap: 'balance' }}
              className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight"
            >
              Why Discerning Lifters Choose APEX
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div
                key={item.index}
                className="p-6 border border-[#141817]/15 bg-[#F3F4ED] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest px-2.5 py-1 bg-[#141817] text-[#B7D66B] inline-block">
                    {item.index}
                  </span>
                  <h3 className="font-display text-xl uppercase tracking-wide text-[#141817]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#141817]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#141817]/10 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#141817]">
                  <CheckCircle2 className="w-4 h-4 text-[#141817]" />
                  <span>Standard Across Club</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION F: FEATURED TRAINERS */}
      <section className="bg-[#141817] text-[#F3F4ED] py-20 lg:py-28 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B] mb-2">
                05. LEADERSHIP & PERFORMANCE ROSTER (DEMO PROFILES)
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight">
                Coached by Dedicated Specialists
              </h2>
            </div>
            <Link
              href="/trainers"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#F3F4ED]/25 text-xs font-mono uppercase tracking-widest text-[#F3F4ED] hover:border-[#B7D66B] hover:text-[#B7D66B] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Meet All 6 Coaches</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRAINERS_DATA.slice(0, 3).map((trainer) => (
              <article
                key={trainer.slug}
                className="group border border-[#F3F4ED]/15 bg-[#141817] flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-80 overflow-hidden border-b border-[#F3F4ED]/12">
                    <ResilientImage
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141817] via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-[#B7D66B]">
                      {trainer.experienceYears}
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <p className="text-xs font-mono uppercase tracking-wider text-[#F3F4ED]/60">
                      {trainer.role}
                    </p>
                    <h3 className="font-display text-2xl uppercase tracking-wide text-[#F3F4ED]">
                      {trainer.name}
                    </h3>
                    <p className="text-xs font-mono text-[#B7D66B] pt-1">
                      Specialty: {trainer.specialization}
                    </p>
                    <p className="text-sm text-[#F3F4ED]/75 leading-relaxed pt-2">
                      {trainer.shortBio}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-[#F3F4ED]/10 flex items-center justify-between">
                  <Link
                    href={`/trainers/${trainer.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-[#B7D66B] hover:text-[#F3F4ED] transition-colors"
                  >
                    <span>View Coach Profile</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`/book-trial?coach=${trainer.slug}`}
                    className="text-xs font-mono uppercase tracking-wider text-[#F3F4ED]/70 hover:text-[#B7D66B] transition-colors"
                  >
                    Book Consult →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION G: TRANSFORMATION STORIES PREVIEW */}
      <section className="bg-[#F3F4ED] text-[#141817] py-20 lg:py-28 border-b border-[#141817]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#141817]/65 mb-2">
                06. MEASURABLE OUTCOMES · FICTIONAL DEMO MEMBER PROFILES
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight">
                Documented Strength & Conditioning Journeys
              </h2>
            </div>
            <Link
              href="/transformations"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#141817] text-[#F3F4ED] font-display text-xs font-bold uppercase tracking-widest hover:bg-[#B7D66B] hover:text-[#141817] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Explore All Case Studies</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {TRANSFORMATIONS_DATA.slice(0, 2).map((story) => (
              <div
                key={story.id}
                className="border border-[#141817]/18 bg-[#F3F4ED] p-6 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase tracking-wider text-[#141817]/65 pb-3 border-b border-[#141817]/12">
                    <span>
                      {story.memberName} ({story.age}) · {story.occupation}
                    </span>
                    <span className="font-bold text-[#141817]">
                      {story.duration}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-[#141817]">
                    {story.headline}
                  </h3>

                  <p className="text-sm text-[#141817]/80 leading-relaxed">
                    {story.journeyNarrative}
                  </p>

                  {/* Before / After Benchmark Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-[#141817]/5 border border-[#141817]/12">
                      <p className="text-[11px] font-mono uppercase tracking-widest text-[#141817]/60 mb-2">
                        BASELINE STARTING METRICS (DEMO)
                      </p>
                      <ul className="space-y-1.5 text-xs font-mono">
                        {story.beforeMetrics.map((m) => (
                          <li key={m.label} className="flex justify-between">
                            <span className="text-[#141817]/70">{m.label}:</span>
                            <span className="font-bold tabular-nums">{m.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-[#141817] text-[#F3F4ED]">
                      <p className="text-[11px] font-mono uppercase tracking-widest text-[#B7D66B] mb-2">
                        POST-MESOCYCLE BENCHMARKS (DEMO)
                      </p>
                      <ul className="space-y-1.5 text-xs font-mono">
                        {story.afterMetrics.map((m) => (
                          <li key={m.label} className="flex justify-between">
                            <span className="text-[#F3F4ED]/70">{m.label}:</span>
                            <span className="font-bold text-[#B7D66B] tabular-nums">
                              {m.value}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#141817]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-[#141817]/60">
                  <span>[{story.profileLabel}]</span>
                  <Link
                    href={`/programs/${story.programSlug}`}
                    className="text-[#141817] font-bold uppercase hover:underline"
                  >
                    Program: {story.programTitle} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION H: MEMBERSHIP PREVIEW */}
      <section className="bg-[#141817] text-[#F3F4ED] py-20 lg:py-28 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <MembershipPricingSection showComparisonTable={false} />

          <div className="mt-10 pt-6 border-t border-[#F3F4ED]/12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs font-mono text-[#F3F4ED]/65">
              Want to inspect the full 12-point facility, class booking window, and coaching comparison table?
            </p>
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-[#B7D66B] hover:text-[#F3F4ED] transition-colors"
            >
              <span>View Full Membership Comparison Matrix</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION I: TESTIMONIALS CAROUSEL */}
      <section className="bg-[#141817] text-[#F3F4ED] py-20 lg:py-24 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <TestimonialCarousel />
        </div>
      </section>

      {/* SECTION J: FINAL CTA */}
      <section className="relative bg-[#141817] text-[#F3F4ED] py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="border-2 border-[#B7D66B] bg-[#141817] p-8 sm:p-16 lg:p-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="space-y-4 max-w-2xl">
              <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#B7D66B]">
                COMPLIMENTARY 60-MINUTE ONBOARDING & FLOOR SESSION
              </p>
              <h2
                style={{ textWrap: 'balance' }}
                className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#F3F4ED]"
              >
                YOUR NEXT CHAPTER STARTS HERE.
              </h2>
              <p className="text-base sm:text-lg text-[#F3F4ED]/80 leading-relaxed">
                Experience the strength floor, meet with an APEX performance coach, and test our training systems firsthand with a complimentary trial session.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto shrink-0">
              <Link
                href="/book-trial"
                className="px-10 py-5 bg-[#B7D66B] text-[#141817] font-display text-base font-bold uppercase tracking-[0.16em] inline-flex items-center justify-center gap-3 hover:bg-[#F3F4ED] transition-colors whitespace-nowrap"
              >
                <span>BOOK YOUR FREE TRIAL</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 border border-[#F3F4ED]/30 text-[#F3F4ED] font-display text-sm uppercase tracking-[0.14em] inline-flex items-center justify-center gap-2 hover:border-[#B7D66B] hover:text-[#B7D66B] transition-colors whitespace-nowrap"
              >
                <span>Speak With Club Concierge</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
