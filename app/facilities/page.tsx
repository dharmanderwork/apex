import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ResilientImage from '@/components/ResilientImage';
import { FACILITIES_DATA, PROGRAMS_DATA } from '@/lib/site-data';
import { ArrowUpRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Facilities — 8 Architectural Strength, Turf, Studio & Recovery Zones',
  description:
    'Explore the 8 specialized training and recovery zones inside APEX Fitness Club, including our 12-rack Strength Zone, 35m Functional Turf, and Recovery Sanctuary.',
};

export default function FacilitiesPage() {
  return (
    <div className="bg-[#141817] text-[#F3F4ED]">
      {/* HERO */}
      <section className="relative py-20 lg:py-28 border-b border-[#F3F4ED]/12 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-5">
              <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#B7D66B]">
                28,500 SQ. FT. PERFORMANCE ARCHITECTURE · FICTIONAL SHOWCASE FACILITY
              </p>
              <h1
                style={{ textWrap: 'balance' }}
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[0.95]"
              >
                Eight Purpose-Engineered Training Zones.
              </h1>
              <p className="text-lg text-[#F3F4ED]/80 max-w-2xl leading-relaxed">
                Every square meter of APEX Fitness Club is designed around training flow, acoustic dampening, calibrated biomechanics, and uncrowded platform access.
              </p>
            </div>

            <div className="lg:col-span-4 lg:border-l border-[#F3F4ED]/15 lg:pl-8 space-y-4">
              <p className="text-xs font-mono uppercase tracking-wider text-[#B7D66B]">
                QUICK ZONE JUMP
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {FACILITIES_DATA.map((zone) => (
                  <a
                    key={zone.id}
                    href={`#${zone.id}`}
                    className="py-1.5 px-2.5 border border-[#F3F4ED]/15 text-[#F3F4ED]/80 hover:border-[#B7D66B] hover:text-[#B7D66B] transition-colors truncate"
                  >
                    {zone.number}. {zone.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL 8 FACILITY ZONES SHOWCASE */}
      <section className="divide-y divide-[#F3F4ED]/12">
        {FACILITIES_DATA.map((zone, idx) => {
          const isEven = idx % 2 === 1;
          const relatedPrograms = PROGRAMS_DATA.filter((p) =>
            zone.relatedProgramSlugs.includes(p.slug)
          );

          return (
            <article
              key={zone.id}
              id={zone.id}
              className={`py-20 lg:py-24 ${
                isEven ? 'bg-[#F3F4ED] text-[#141817]' : 'bg-[#141817] text-[#F3F4ED]'
              }`}
            >
              <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    } relative min-h-[380px] border ${
                      isEven ? 'border-[#141817]/15' : 'border-[#F3F4ED]/15'
                    } overflow-hidden`}
                  >
                    <ResilientImage
                      src={zone.image}
                      alt={zone.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#141817] text-[#B7D66B] px-3 py-1.5 text-xs font-mono uppercase tracking-widest border border-[#B7D66B]/40">
                      ZONE {zone.number} · {zone.areaSqFt}
                    </div>
                  </div>

                  {/* Specs & Content Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    } flex flex-col justify-between space-y-8`}
                  >
                    <div className="space-y-4">
                      <p
                        className={`text-xs font-mono uppercase tracking-[0.2em] ${
                          isEven ? 'text-[#141817]/60' : 'text-[#B7D66B]'
                        }`}
                      >
                        ZONE {zone.number} SPECIFICATION · {zone.areaSqFt}
                      </p>
                      <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight">
                        {zone.name}
                      </h2>
                      <p
                        className={`text-base font-semibold ${
                          isEven ? 'text-[#141817]' : 'text-[#B7D66B]'
                        }`}
                      >
                        {zone.tagline}
                      </p>
                      <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                        {zone.description}
                      </p>
                    </div>

                    {/* Equipment & Benefits Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-current/15">
                      <div>
                        <h3 className="font-display text-sm uppercase tracking-wider mb-3">
                          Available Equipment & Features
                        </h3>
                        <ul className="space-y-2 text-xs sm:text-sm opacity-85">
                          {zone.equipment.map((eq) => (
                            <li key={eq} className="flex items-start gap-2">
                              <Check
                                className={`w-4 h-4 shrink-0 mt-0.5 ${
                                  isEven ? 'text-[#141817]' : 'text-[#B7D66B]'
                                }`}
                              />
                              <span>{eq}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-display text-sm uppercase tracking-wider mb-3">
                          Member Performance Benefits
                        </h3>
                        <ul className="space-y-2 text-xs sm:text-sm opacity-85">
                          {zone.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2">
                              <Check
                                className={`w-4 h-4 shrink-0 mt-0.5 ${
                                  isEven ? 'text-[#141817]' : 'text-[#B7D66B]'
                                }`}
                              />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Related Programs */}
                    <div className="pt-4 border-t border-current/15 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                        <span className="uppercase opacity-60">Related Programs:</span>
                        {relatedPrograms.map((prog, pIdx) => (
                          <React.Fragment key={prog.slug}>
                            {pIdx > 0 && <span aria-hidden="true">·</span>}
                            <Link
                              href={`/programs/${prog.slug}`}
                              className="underline hover:opacity-75 font-semibold"
                            >
                              {prog.title}
                            </Link>
                          </React.Fragment>
                        ))}
                      </div>

                      <Link
                        href={`/book-trial?zone=${zone.id}`}
                        className={`px-5 py-2.5 font-display text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 transition-colors ${
                          isEven
                            ? 'bg-[#141817] text-[#B7D66B] hover:bg-[#141817]/85'
                            : 'bg-[#B7D66B] text-[#141817] hover:bg-[#F3F4ED]'
                        }`}
                      >
                        <span>Tour This Zone</span>
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

      {/* BOTTOM DEMO NOTICE & CTA */}
      <section className="py-20 bg-[#141817] border-t border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-widest text-[#B7D66B]">
              PRIVATE FACILITY WALKTHROUGH
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight">
              Experience the Training Floor Firsthand.
            </h2>
            <p className="text-xs font-mono text-[#F3F4ED]/60 pt-1">
              Note: All facility specifications and square-footage figures represent a fictional demonstration club concept.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/book-trial"
              className="px-8 py-4 bg-[#B7D66B] text-[#141817] font-display text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-[#F3F4ED] transition-colors"
            >
              <span>Book Private Tour & Free Trial</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/gallery"
              className="px-8 py-4 border border-[#F3F4ED]/30 text-[#F3F4ED] font-display text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:border-[#B7D66B] hover:text-[#B7D66B] transition-colors"
            >
              <span>Open Full-Screen Gallery</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
