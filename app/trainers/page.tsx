import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ResilientImage from '@/components/ResilientImage';
import { TRAINERS_DATA, PROGRAMS_DATA } from '@/lib/site-data';
import { ArrowUpRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Trainers — Performance & Strength Coaching Roster',
  description:
    'Meet the dedicated performance coaches, strength specialists, and mobility instructors at APEX Fitness Club (Fictional Demo Roster).',
};

export default function TrainersDirectoryPage() {
  return (
    <div className="bg-[#141817] text-[#F3F4ED]">
      {/* HERO */}
      <section className="py-20 lg:py-28 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#B7D66B]">
              APEX COACHING FACULTY · FICTIONAL DEMO PROFILES & CREDENTIALS
            </p>
            <h1
              style={{ textWrap: 'balance' }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[0.95]"
            >
              Guided by Career Performance Coaches.
            </h1>
            <p className="text-lg text-[#F3F4ED]/80 leading-relaxed">
              Our coaching team brings together specialists in compound barbell biomechanics, hypertrophy resistance profiles, hybrid endurance conditioning, and active joint mobility. Every coach profile below is a fictional demonstration profile created for this showcase.
            </p>
          </div>
        </div>
      </section>

      {/* TRAINER DIRECTORY GRID */}
      <section className="py-20 lg:py-24 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINERS_DATA.map((trainer) => {
            const programs = PROGRAMS_DATA.filter((p) =>
              trainer.programSlugs.includes(p.slug)
            );

            return (
              <article
                key={trainer.slug}
                className="border border-[#F3F4ED]/15 bg-[#141817] flex flex-col justify-between hover:border-[#B7D66B] transition-colors"
              >
                <div>
                  <div className="relative h-80 overflow-hidden border-b border-[#F3F4ED]/12">
                    <ResilientImage
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141817] via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-5 right-5 flex items-center justify-between text-xs font-mono">
                      <span className="text-[#B7D66B] font-bold">
                        {trainer.experienceYears}
                      </span>
                      <span className="text-[#F3F4ED]/75">1-on-1 & Group</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-[#F3F4ED]/60">
                        {trainer.role}
                      </p>
                      <h2 className="font-display text-3xl uppercase tracking-wide text-[#F3F4ED] mt-1">
                        {trainer.name}
                      </h2>
                      <p className="text-xs font-mono text-[#B7D66B] mt-1">
                        {trainer.specialization}
                      </p>
                    </div>

                    <p className="text-sm text-[#F3F4ED]/80 leading-relaxed">
                      {trainer.shortBio}
                    </p>

                    <div className="pt-3 border-t border-[#F3F4ED]/10">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-[#F3F4ED]/55 mb-2">
                        Core Specialties
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#F3F4ED]/85">
                        {trainer.specialtiesList.slice(0, 3).map((spec) => (
                          <li key={spec} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#B7D66B] shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-[#F3F4ED]/10 text-xs font-mono text-[#F3F4ED]/65">
                      <span>Leads: </span>
                      {programs.map((p, idx) => (
                        <React.Fragment key={p.slug}>
                          {idx > 0 && <span> · </span>}
                          <span className="text-[#F3F4ED]">{p.title}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-[#F3F4ED]/12 bg-[#F3F4ED]/[0.02] flex items-center justify-between gap-3">
                  <Link
                    href={`/trainers/${trainer.slug}`}
                    className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-widest text-[#B7D66B] hover:text-[#F3F4ED] transition-colors"
                  >
                    <span>Full Profile & Philosophy</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href={`/book-trial?coach=${trainer.slug}`}
                    className="px-4 py-2 bg-[#B7D66B] text-[#141817] font-display text-xs font-bold uppercase tracking-widest hover:bg-[#F3F4ED] transition-colors whitespace-nowrap"
                  >
                    Book Consultation
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* MATCHING CTA */}
      <section className="bg-[#F3F4ED] text-[#141817] py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#141817]/65">
              1-ON-1 COACH MATCHING SERVICE
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight">
              Get Paired With the Right Specialist for Your Biomechanics.
            </h2>
          </div>

          <Link
            href="/book-trial?program=personal-training"
            className="px-8 py-4 bg-[#141817] text-[#B7D66B] font-display text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-[#141817]/90 transition-colors whitespace-nowrap shrink-0"
          >
            <span>Book 1-on-1 Coaching Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
