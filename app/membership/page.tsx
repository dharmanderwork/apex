import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import MembershipPricingSection from '@/components/MembershipPricingSection';
import { FAQ_DATA } from '@/lib/site-data';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Memberships & Pricing — Essential, Performance & Elite Plans',
  description:
    'Compare Essential, Performance, and Elite membership tiers across Monthly, Quarterly, Half-Yearly, and Annual billing horizons at APEX Fitness Club.',
};

export default function MembershipPage() {
  const membershipFaqs = FAQ_DATA.filter((f) =>
    ['Membership', 'Pricing', 'Payments', 'Cancellation'].includes(f.topic)
  );

  return (
    <div className="bg-[#141817] text-[#F3F4ED]">
      {/* HERO */}
      <section className="py-12 lg:py-16 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#B7D66B]">
              MEMBERSHIPS & PRICING · ILLUSTRATIVE DEMO TIERS
            </p>
            <h1
              style={{ textWrap: 'balance' }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95]"
            >
              Invest in Structured Strength & Uncrowded Access.
            </h1>
            <p className="text-base sm:text-lg text-[#F3F4ED]/80 max-w-2xl leading-relaxed">
              Choose from three transparent membership tiers engineered around your training autonomy, class participation, and 1-on-1 coaching goals.
            </p>
          </div>
          <div className="lg:col-span-4 lg:border-l border-[#F3F4ED]/15 lg:pl-8 space-y-2 text-xs font-mono text-[#F3F4ED]/75">
            <p className="text-[#B7D66B] uppercase tracking-widest font-bold">
              CLUB CAPACITY & BILLING PRIVILEGES
            </p>
            <p>· Zero Initiation Fee on Annual & Half-Yearly Plans</p>
            <p>· 14-Day Pro-Rated Satisfaction Guarantee</p>
            <p>· Capped Member Density for Zero Rack Wait Times</p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE PRICING & COMPARISON TABLE */}
      <section className="py-12 lg:py-16 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <MembershipPricingSection showComparisonTable={true} initialCycle="annual" />
        </div>
      </section>

      {/* CLEAR MEMBERSHIP TERMS SUMMARY (OFF-WHITE SECTION) */}
      <section className="bg-[#F3F4ED] text-[#141817] py-20 border-b border-[#141817]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#141817]/65">
                CLEAR, STRAIGHTFORWARD TERMS
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight">
                No Hidden Maintenance Fees or Surprise Lock-Ins.
              </h2>
              <p className="text-sm text-[#141817]/80 leading-relaxed">
                Every APEX membership is governed by transparent terms. Review our core member guarantees below or read the full placeholder Membership Terms document.
              </p>
              <div className="pt-2">
                <Link
                  href="/legal/membership-terms"
                  className="text-xs font-mono uppercase tracking-wider font-bold text-[#141817] underline hover:opacity-75"
                >
                  Read Complete Membership Terms (Demo) →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 border border-[#141817]/15 space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#141817]" />
                <h3 className="font-display text-lg uppercase tracking-wide">
                  14-Day Satisfaction Guarantee
                </h3>
                <p className="text-xs text-[#141817]/75 leading-relaxed">
                  New members on fixed-term plans may cancel within their first 14 days for a full pro-rated refund if the club is not the right fit.
                </p>
              </div>

              <div className="p-6 border border-[#141817]/15 space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#141817]" />
                <h3 className="font-display text-lg uppercase tracking-wide">
                  Complimentary Travel Freeze
                </h3>
                <p className="text-xs text-[#141817]/75 leading-relaxed">
                  Pause your membership for 1 to 3 months per calendar year during extended business travel or medical recovery at zero extra charge.
                </p>
              </div>

              <div className="p-6 border border-[#141817]/15 space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#141817]" />
                <h3 className="font-display text-lg uppercase tracking-wide">
                  Zero Annual Enhancement Fees
                </h3>
                <p className="text-xs text-[#141817]/75 leading-relaxed">
                  The rate shown on your membership agreement is your complete rate—we never bill surprise semi-annual equipment maintenance charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP & PRICING FAQS */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B] mb-2">
                MEMBERSHIP & BILLING ANSWERS
              </p>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide">
                Frequently Asked Pricing Questions
              </h2>
            </div>
            <Link
              href="/faq"
              className="text-xs font-mono uppercase tracking-wider text-[#B7D66B] hover:underline"
            >
              View All 10 FAQ Topics →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {membershipFaqs.map((faq) => (
              <div
                key={faq.id}
                className="p-6 border border-[#F3F4ED]/15 space-y-2"
              >
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#B7D66B]">
                  {faq.topic}
                </span>
                <h3 className="font-display text-xl uppercase tracking-wide text-[#F3F4ED]">
                  {faq.question}
                </h3>
                <p className="text-sm text-[#F3F4ED]/75 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="p-8 sm:p-12 border border-[#B7D66B] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide">
                Want to Test the Club Before Choosing a Plan?
              </h3>
              <p className="text-sm text-[#F3F4ED]/80">
                Book a complimentary 60-minute trial session and private facility walkthrough with our concierge team.
              </p>
            </div>
            <Link
              href="/book-trial"
              className="px-8 py-4 bg-[#B7D66B] text-[#141817] font-display text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-[#F3F4ED] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Book Your Free Trial</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
