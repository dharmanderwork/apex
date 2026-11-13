import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ResilientImage from '@/components/ResilientImage';
import { BRAND_INFO, DEMO_STATISTICS } from '@/lib/site-data';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — Brand Philosophy, Mission & Coaching Culture',
  description:
    'Discover the training philosophy, mission, vision, and coaching standards behind APEX Fitness Club.',
};

const TRAINING_PILLARS = [
  {
    number: '01',
    title: 'Biomechanics Before Load',
    detail:
      'Every member begins with a comprehensive joint and movement screen. We match exercise variations to your anatomical structure rather than forcing every body into a generic template.',
  },
  {
    number: '02',
    title: 'Periodized 12-Week Mesocycles',
    detail:
      'Random workouts produce random results. Our programming progresses through structured accumulation, intensification, and deload waves so you build strength continuously without burnout.',
  },
  {
    number: '03',
    title: 'Concurrent Conditioning & Mobility',
    detail:
      'True athletic longevity requires more than one-dimensional force. We integrate aerobic Zone 2 efficiency, anaerobic threshold capacity, and active joint range of motion.',
  },
  {
    number: '04',
    title: 'Deliberate Recovery Architecture',
    detail:
      'Training is the stimulus; adaptation occurs when your nervous system down-regulates. Our Recovery Studio and mobility protocols are treated as core parts of the training week.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#141817] text-[#F3F4ED]">
      {/* CINEMATIC HERO */}
      <section className="relative py-24 lg:py-32 border-b border-[#F3F4ED]/12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ResilientImage
            src="/images/apex-facility-weights.jpg"
            alt="APEX Fitness Club architectural strength hall"
            priority
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141817] via-[#141817]/80 to-[#141817]/60" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#B7D66B]">
              ABOUT APEX FITNESS CLUB · ARCHITECTURAL ATHLETICISM
            </p>
            <h1
              style={{ textWrap: 'balance' }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[0.96]"
            >
              Where Disciplined Coaching Meets Architectural Space.
            </h1>
            <p className="text-lg sm:text-xl text-[#F3F4ED]/85 leading-relaxed">
              {BRAND_INFO.description}
            </p>
          </div>
        </div>
      </section>

      {/* BRAND PHILOSOPHY & MISSION / VISION */}
      <section className="bg-[#F3F4ED] text-[#141817] py-20 lg:py-28 border-b border-[#141817]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#141817]/65">
                01. BRAND PHILOSOPHY
              </p>
              <h2
                style={{ textWrap: 'balance' }}
                className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight leading-[1.02]"
              >
                Built as the Antidote to Crowded Commercial Gyms.
              </h2>
              <p className="text-base text-[#141817]/80 leading-relaxed">
                For decades, fitness enthusiasts had to choose between two flawed extremes: overcrowded commercial health clubs filled with rows of treadmills and under-maintained racks, or gritty warehouse gyms lacking climate control, recovery amenities, and structured coaching.
              </p>
              <p className="text-base text-[#141817]/80 leading-relaxed">
                APEX Fitness Club bridges that divide. We pair competition-caliber strength and conditioning equipment with refined architectural interiors, capped membership density, and a full-time faculty of performance coaches.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 bg-[#141817] text-[#F3F4ED] border border-[#141817] flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B]">
                    OUR MISSION
                  </p>
                  <h3 className="font-display text-2xl uppercase tracking-wide">
                    Elevate Everyday Human Performance
                  </h3>
                  <p className="text-sm text-[#F3F4ED]/80 leading-relaxed">
                    To equip every member—from complete beginners to lifelong lifters—with the coaching literacy, calibrated equipment, and structured programming required to build lasting physical strength and confidence.
                  </p>
                </div>
                <span className="mt-8 pt-4 border-t border-[#F3F4ED]/15 text-xs font-mono uppercase text-[#B7D66B]">
                  Purpose-Driven Training
                </span>
              </div>

              <div className="p-8 bg-[#F3F4ED] text-[#141817] border-2 border-[#141817] flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#141817]/70">
                    OUR VISION
                  </p>
                  <h3 className="font-display text-2xl uppercase tracking-wide">
                    Set the Global Benchmark for Strength Clubs
                  </h3>
                  <p className="text-sm text-[#141817]/80 leading-relaxed">
                    To redefine what a modern fitness club feels like—proving that serious barbell training, evidence-based conditioning, and restorative hospitality belong together under one roof.
                  </p>
                </div>
                <span className="mt-8 pt-4 border-t border-[#141817]/15 text-xs font-mono uppercase text-[#141817]">
                  Architectural Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING APPROACH */}
      <section className="py-20 lg:py-28 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B] mb-2">
              02. OUR TRAINING METHODOLOGY
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight">
              The Four Pillars of APEX Programming
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRAINING_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="p-8 border border-[#F3F4ED]/15 bg-[#141817] space-y-4"
              >
                <div className="flex items-center justify-between border-b border-[#F3F4ED]/12 pb-4">
                  <span className="font-mono text-sm font-bold text-[#B7D66B]">
                    PILLAR {pillar.number}
                  </span>
                  <span className="text-xs font-mono uppercase text-[#F3F4ED]/50">
                    APEX STANDARD
                  </span>
                </div>
                <h3 className="font-display text-2xl uppercase tracking-wide text-[#F3F4ED]">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#F3F4ED]/75 leading-relaxed">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FITNESS CULTURE, COMMUNITY & COACHING PHILOSOPHY */}
      <section className="py-20 lg:py-28 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-5 relative min-h-[420px] border border-[#F3F4ED]/15 overflow-hidden">
              <ResilientImage
                src="/images/apex-trainer-portrait.jpg"
                alt="APEX Performance Coach inside the strength studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#141817] via-[#141817]/80 to-transparent p-6">
                <p className="text-xs font-mono uppercase tracking-widest text-[#B7D66B]">
                  COACHING LEADERSHIP
                </p>
                <p className="font-display text-xl uppercase tracking-wide text-[#F3F4ED] mt-1">
                  Full-Time Career Coaches · Never Unsupervised Floor Shifts
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B]">
                  03. CULTURE, COMMUNITY & COACHING ETHOS
                </p>
                <h2
                  style={{ textWrap: 'balance' }}
                  className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight"
                >
                  High Standards. Zero Intimidation.
                </h2>
                <p className="text-base text-[#F3F4ED]/80 leading-relaxed">
                  Walk onto the APEX floor at 06:30 AM and you will see corporate executives, competitive powerlifters, marathoners, and first-time beginners sharing platforms with mutual respect. Our culture celebrates disciplined effort regardless of the load on the bar.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="p-6 border border-[#F3F4ED]/15 space-y-2">
                    <h3 className="font-display text-lg uppercase tracking-wider text-[#B7D66B]">
                      Professional Coaching Philosophy
                    </h3>
                    <p className="text-sm text-[#F3F4ED]/75 leading-relaxed">
                      Our coaches are salaried strength and movement professionals who invest in continuing biomechanics education—never high-pressure salespeople.
                    </p>
                  </div>
                  <div className="p-6 border border-[#F3F4ED]/15 space-y-2">
                    <h3 className="font-display text-lg uppercase tracking-wider text-[#B7D66B]">
                      Supportive Member Community
                    </h3>
                    <p className="text-sm text-[#F3F4ED]/75 leading-relaxed">
                      From quarterly barbell technique clinics to Saturday morning partner turf relays, we cultivate genuine camaraderie centered on personal growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Interior Gallery Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="h-48 border border-[#F3F4ED]/15 overflow-hidden relative">
                  <ResilientImage
                    src="/images/apex-functional-turf.jpg"
                    alt="35-meter functional turf track at APEX"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 border border-[#F3F4ED]/15 overflow-hidden relative">
                  <ResilientImage
                    src="/images/apex-group-recovery.jpg"
                    alt="Recovery and mobility studio at APEX"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS & CTA */}
      <section className="bg-[#F3F4ED] text-[#141817] py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-16 border-b border-[#141817]/15">
            {DEMO_STATISTICS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl sm:text-5xl font-bold tabular-nums text-[#141817]">
                  {s.value}
                </p>
                <p className="font-display text-sm uppercase tracking-wider mt-1">
                  {s.label}
                </p>
                <p className="text-xs text-[#141817]/60 mt-1">{s.context}</p>
              </div>
            ))}
          </div>

          <div className="pt-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-mono uppercase tracking-widest text-[#141817]/70 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>STEP INSIDE THE FACILITY</span>
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight">
                Ready to Experience APEX in Person?
              </h2>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/membership"
                className="px-8 py-4 bg-[#141817] text-[#B7D66B] font-display text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-[#141817]/90 transition-colors"
              >
                <span>Explore Membership Plans</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/book-trial"
                className="px-8 py-4 border-2 border-[#141817] text-[#141817] font-display text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-[#141817] hover:text-[#F3F4ED] transition-colors"
              >
                <span>Book a Free Trial</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
