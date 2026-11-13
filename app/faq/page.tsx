import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordionClient from '@/components/FAQAccordionClient';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ — Membership, Pricing, Trial Sessions & Club Policies',
  description:
    'Find answers to frequently asked questions about APEX Fitness Club memberships, pricing, trial sessions, opening hours, personal training, and gym policies.',
};

export default function FAQPage() {
  return (
    <div className="bg-[#141817] text-[#F3F4ED]">
      {/* HERO */}
      <section className="py-20 lg:py-28 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#B7D66B]">
              KNOWLEDGE BASE & CLUB POLICIES · 10 CORE TOPICS
            </p>
            <h1
              style={{ textWrap: 'balance' }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[0.95]"
            >
              Frequently Asked Questions.
            </h1>
            <p className="text-lg text-[#F3F4ED]/80 leading-relaxed">
              Everything you need to know about membership tiers, billing cycles, complimentary trial sessions, equipment standards, and club etiquette.
            </p>
          </div>
        </div>
      </section>

      {/* ACCORDION */}
      <section className="py-16 lg:py-24 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-8">
          <FAQAccordionClient />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F3F4ED] text-[#141817] py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#141817]/65">
              STILL HAVE A SPECIFIC QUESTION?
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight">
              Speak Directly With Our Club Concierge.
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#141817] text-[#B7D66B] font-display text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2"
            >
              <span>Contact Concierge</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/book-trial"
              className="px-8 py-4 border-2 border-[#141817] text-[#141817] font-display text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2"
            >
              <span>Book a Free Trial</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
