import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ResilientImage from '@/components/ResilientImage';
import { TRAINERS_DATA, PROGRAMS_DATA } from '@/lib/site-data';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Quote, Calendar } from 'lucide-react';

export function generateStaticParams() {
  return TRAINERS_DATA.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trainer = TRAINERS_DATA.find((t) => t.slug === slug);
  if (!trainer) return { title: 'Trainer Not Found' };
  return {
    title: `${trainer.name} — ${trainer.role} (Demo Profile)`,
    description: trainer.shortBio,
  };
}

export default async function TrainerProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trainer = TRAINERS_DATA.find((t) => t.slug === slug);

  if (!trainer) {
    notFound();
  }

  const trainerPrograms = PROGRAMS_DATA.filter((p) =>
    trainer.programSlugs.includes(p.slug)
  );

  return (
    <div className="bg-[#141817] text-[#F3F4ED]">
      {/* PROFILE HERO & BIOGRAPHY */}
      <section className="py-16 lg:py-24 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8">
          <Link
            href="/trainers"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B7D66B] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Performance Coaches</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Portrait Column */}
            <div className="lg:col-span-5 relative min-h-[460px] border border-[#F3F4ED]/15 overflow-hidden">
              <ResilientImage
                src={trainer.image}
                alt={trainer.name}
                priority
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#141817] via-[#141817]/80 to-transparent p-6">
                <p className="text-xs font-mono uppercase tracking-widest text-[#B7D66B]">
                  FICTIONAL DEMO COACH PROFILE
                </p>
                <p className="text-xs font-mono text-[#F3F4ED]/80 mt-1">
                  Experience: {trainer.experienceYears}
                </p>
              </div>
            </div>

            {/* Bio & Details Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B]">
                  {trainer.role}
                </p>
                <h1 className="font-display text-5xl sm:text-6xl font-bold uppercase tracking-tight">
                  {trainer.name}
                </h1>
                <p className="text-base font-mono text-[#F3F4ED]/90">
                  Specialization: {trainer.specialization}
                </p>

                <p className="text-base text-[#F3F4ED]/80 leading-relaxed pt-2">
                  {trainer.fullBio}
                </p>

                {/* Coaching Philosophy Block */}
                <div className="p-6 bg-[#F3F4ED] text-[#141817] space-y-3 my-6">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#141817]/65">
                    <Quote className="w-4 h-4 text-[#141817]" />
                    <span>TRAINING PHILOSOPHY</span>
                  </div>
                  <blockquote className="font-display text-xl sm:text-2xl uppercase tracking-wide leading-snug">
                    &ldquo;{trainer.philosophy}&rdquo;
                  </blockquote>
                </div>

                {/* Specialties & Demo Certifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="p-5 border border-[#F3F4ED]/15">
                    <h2 className="font-display text-sm uppercase tracking-wider text-[#B7D66B] mb-3">
                      Areas of Specialization
                    </h2>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#F3F4ED]/85">
                      {trainer.specialtiesList.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#B7D66B] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 border border-[#F3F4ED]/15">
                    <h2 className="font-display text-sm uppercase tracking-wider text-[#B7D66B] mb-3">
                      Demo Credentials Placeholder
                    </h2>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#F3F4ED]/85">
                      {trainer.demoCertifications.map((cert) => (
                        <li key={cert} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#B7D66B] shrink-0 mt-0.5" />
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-[11px] font-mono text-[#F3F4ED]/50 mt-3">
                      * Illustrative credentials placeholder for website presentation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Availability & Booking CTA */}
              <div className="pt-6 border-t border-[#F3F4ED]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 text-xs font-mono text-[#F3F4ED]/80">
                  <Calendar className="w-4 h-4 text-[#B7D66B]" />
                  <span>{trainer.availability}</span>
                </div>

                <Link
                  href={`/book-trial?coach=${trainer.slug}&program=personal-training`}
                  className="px-8 py-4 bg-[#B7D66B] text-[#141817] font-display text-sm font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:bg-[#F3F4ED] transition-colors whitespace-nowrap"
                >
                  <span>Book Consultation with {trainer.name.split(' ')[0]}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS LED BY THIS COACH */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B]">
              CURRICULUM LEADERSHIP
            </p>
            <h2 className="font-display text-3xl uppercase tracking-wide mt-1">
              Programs Coached by {trainer.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainerPrograms.map((prog) => (
              <div
                key={prog.slug}
                className="p-6 border border-[#F3F4ED]/15 flex flex-col justify-between space-y-4 hover:border-[#B7D66B] transition-colors"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#B7D66B] uppercase">
                    {prog.number} · {prog.category}
                  </span>
                  <h3 className="font-display text-2xl uppercase tracking-wide">
                    {prog.title}
                  </h3>
                  <p className="text-sm text-[#F3F4ED]/75 leading-relaxed">
                    {prog.shortDescription}
                  </p>
                </div>
                <Link
                  href={`/programs/${prog.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-[#B7D66B] hover:text-[#F3F4ED]"
                >
                  <span>View Program Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
