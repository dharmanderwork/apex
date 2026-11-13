import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Membership Terms — Placeholder Club Agreement (Demo)',
  description:
    'Placeholder Membership Terms and Club Etiquette agreement for APEX Fitness Club.',
};

export default function MembershipTermsPage() {
  return (
    <div className="bg-[#141817] text-[#F3F4ED] py-20 lg:py-28">
      <div className="max-w-[960px] mx-auto px-4 sm:px-8 space-y-10">
        <div className="p-5 border border-[#B7D66B] bg-[#B7D66B]/10 text-xs font-mono text-[#F3F4ED]">
          IMPORTANT PLACEHOLDER LEGAL NOTICE: These Membership Terms are illustrative placeholder provisions created for website demonstration purposes and must be reviewed by legal counsel prior to commercial publication.
        </div>

        <div className="space-y-3 border-b border-[#F3F4ED]/15 pb-8">
          <p className="text-xs font-mono uppercase tracking-widest text-[#B7D66B]">
            LEGAL DOCUMENTATION · PLACEHOLDER CLUB AGREEMENT
          </p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight">
            Membership Terms
          </h1>
          <p className="text-xs font-mono text-[#F3F4ED]/60">
            Last Updated: November 2026 (Demo Version)
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-[#F3F4ED]/80 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-2xl uppercase tracking-wide text-[#F3F4ED]">
              01. Billing Horizons & Renewal Terms
            </h2>
            <p>
              Members may select between rolling Monthly, Quarterly (3-month), Half-Yearly (6-month), or Annual (12-month) commitments across Essential, Performance, and Elite tiers. Rolling monthly plans may be cancelled with 30 days written notice prior to the next billing cycle.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl uppercase tracking-wide text-[#F3F4ED]">
              02. Membership Freeze & Relocation Policy
            </h2>
            <p>
              Members in good standing may freeze their membership for travel or medical recovery for up to 1 month per year (Essential), 2 months per year (Performance), or 3 months per year (Elite). Fixed-term agreements may be terminated early without penalty upon documented permanent relocation beyond 25 miles of the club.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl uppercase tracking-wide text-[#F3F4ED]">
              03. Training Floor Etiquette & Safety Standards
            </h2>
            <p>
              All members agree to re-rack calibrated plates and dumbbells after use, utilize safety spotter arms during heavy barbell lifts, respect studio class reservation windows, and refrain from any photography inside changing and recovery suites.
            </p>
          </section>
        </div>

        <div className="pt-8 border-t border-[#F3F4ED]/15 flex flex-wrap gap-6 text-xs font-mono uppercase tracking-wider text-[#B7D66B]">
          <Link href="/membership" className="hover:underline">
            ← Back to Membership & Pricing
          </Link>
          <Link href="/legal/privacy" className="hover:underline">
            Privacy Policy →
          </Link>
          <Link href="/legal/terms" className="hover:underline">
            Terms & Conditions →
          </Link>
        </div>
      </div>
    </div>
  );
}
