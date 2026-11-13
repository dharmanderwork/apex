import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ResilientImage from '@/components/ResilientImage';
import { PROGRAMS_DATA } from '@/lib/site-data';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock, Calendar } from 'lucide-react';

export function generateStaticParams() {
  return PROGRAMS_DATA.map((prog) => ({ slug: prog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = PROGRAMS_DATA.find((p) => p.slug === slug);
  if (!program) {
    return { title: 'Program Not Found' };
  }
  return {
    title: `${program.title} Program — Objectives, Structure & Coaching`,
    description: program.shortDescription,
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = PROGRAMS_DATA.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  const relatedPrograms = PROGRAMS_DATA.filter((p) =>
    program.relatedSlugs.includes(p.slug)
  );

  return (
    <div className="bg-[#141817] text-[#F3F4ED]">
      {/* PROGRAM HERO */}
      <section className="relative py-20 lg:py-28 border-b border-[#F3F4ED]/12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ResilientImage
            src={program.image}
            alt={program.title}
            priority
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141817] via-[#141817]/90 to-[#141817]/60" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 space-y-6">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B7D66B] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All 10 Programs</span>
          </Link>

          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#F3F4ED]/70">
              PROGRAM {program.number} · {program.category.toUpperCase()} TRACK
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight">
              {program.title}
            </h1>
            <p className="text-lg sm:text-xl text-[#F3F4ED]/85 leading-relaxed">
              {program.shortDescription}
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-wider text-[#F3F4ED]/80">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#B7D66B]" />
              {program.duration}
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#B7D66B]" />
              {program.weeklyFrequency}
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-[#B7D66B]">{program.sessionFormat}</span>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href={`/book-trial?program=${program.slug}`}
              className="px-8 py-4 bg-[#B7D66B] text-[#141817] font-display text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-[#F3F4ED] transition-colors"
            >
              <span>Book a Free Trial in {program.title}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/membership"
              className="px-8 py-4 border border-[#F3F4ED]/30 text-[#F3F4ED] font-display text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:border-[#B7D66B] hover:text-[#B7D66B] transition-colors"
            >
              <span>View Eligible Memberships</span>
            </Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW, TRAINING OBJECTIVES & WHAT IS INCLUDED */}
      <section className="py-20 lg:py-24 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B]">
                01. PROGRAM OVERVIEW & IDEAL PARTICIPANT
              </p>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide">
                How This System Works
              </h2>
              <p className="text-base text-[#F3F4ED]/80 leading-relaxed">
                {program.fullOverview}
              </p>
            </div>

            <div className="p-6 border border-[#F3F4ED]/15 bg-[#F3F4ED]/[0.02] space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-[#B7D66B]">
                WHO THIS PROGRAM IS DESIGNED FOR
              </p>
              <p className="text-sm sm:text-base text-[#F3F4ED]/90">
                {program.idealParticipant}
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B]">
                02. PRIMARY TRAINING OBJECTIVES
              </p>
              <h3 className="font-display text-2xl uppercase tracking-wide">
                Measurable 12-Week Outcomes
              </h3>
              <ul className="space-y-3">
                {program.trainingObjectives.map((obj) => (
                  <li
                    key={obj}
                    className="flex items-start gap-3 p-4 border border-[#F3F4ED]/12"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#B7D66B] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-[#F3F4ED]/85">
                      {obj}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: What Is Included + Coaching Approach */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-[#F3F4ED] text-[#141817] space-y-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#141817]/65">
                  WHAT IS INCLUDED
                </p>
                <h3 className="font-display text-2xl uppercase tracking-wide mt-1">
                  Program Deliverables
                </h3>
              </div>

              <ul className="space-y-3 text-sm">
                {program.includedFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#141817] shrink-0 mt-1" />
                    <span className="text-[#141817]/90 font-medium">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-[#141817]/15">
                <p className="text-xs font-mono uppercase tracking-wider text-[#141817]/65 mb-2">
                  COACHING APPROACH
                </p>
                <p className="text-sm text-[#141817]/85 leading-relaxed">
                  {program.coachingApproach}
                </p>
              </div>

              <Link
                href={`/book-trial?program=${program.slug}`}
                className="w-full py-4 px-6 bg-[#141817] text-[#B7D66B] font-display text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#141817]/90 transition-colors"
              >
                <span>Reserve Trial Session</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SESSION STRUCTURE */}
      <section className="py-20 bg-[#F3F4ED] text-[#141817] border-b border-[#141817]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#141817]/65 mb-2">
              03. MINUTE-BY-MINUTE ARCHITECTURE
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight">
              Typical Session Structure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {program.sessionStructure.map((step) => (
              <div
                key={step.phase}
                className="p-6 border border-[#141817]/18 bg-[#F3F4ED] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="inline-block px-2.5 py-1 bg-[#141817] text-[#B7D66B] font-mono text-xs font-bold tabular-nums">
                    {step.minutes}
                  </span>
                  <h3 className="font-display text-xl uppercase tracking-wide text-[#141817]">
                    {step.phase}
                  </h3>
                  <p className="text-sm text-[#141817]/80 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM FAQs & RELATED PROGRAMS */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B]">
              04. PROGRAM-SPECIFIC QUESTIONS
            </p>
            <h2 className="font-display text-3xl uppercase tracking-wide">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {program.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="p-6 border border-[#F3F4ED]/15 space-y-2"
                >
                  <h3 className="font-display text-lg uppercase tracking-wide text-[#B7D66B]">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-[#F3F4ED]/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B]">
              05. COMPLEMENTARY SYSTEMS
            </p>
            <h2 className="font-display text-3xl uppercase tracking-wide">
              Related Training Programs
            </h2>
            <div className="space-y-4">
              {relatedPrograms.map((rel) => (
                <div
                  key={rel.slug}
                  className="p-6 border border-[#F3F4ED]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#B7D66B] transition-colors"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-[#B7D66B] uppercase">
                      {rel.number} · {rel.category}
                    </span>
                    <h3 className="font-display text-xl uppercase tracking-wide text-[#F3F4ED]">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-[#F3F4ED]/70 line-clamp-2">
                      {rel.shortDescription}
                    </p>
                  </div>
                  <Link
                    href={`/programs/${rel.slug}`}
                    className="px-4 py-2.5 border border-[#F3F4ED]/25 text-xs font-mono uppercase tracking-wider text-[#F3F4ED] hover:border-[#B7D66B] hover:text-[#B7D66B] whitespace-nowrap shrink-0"
                  >
                    View Program →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
