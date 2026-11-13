import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Placeholder Legal Document (Demo)',
  description:
    'Placeholder Privacy Policy for the APEX Fitness Club demonstration website.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#141817] text-[#F3F4ED] py-20 lg:py-28">
      <div className="max-w-[960px] mx-auto px-4 sm:px-8 space-y-10">
        <div className="p-5 border border-[#B7D66B] bg-[#B7D66B]/10 text-xs font-mono text-[#F3F4ED]">
          IMPORTANT PLACEHOLDER LEGAL NOTICE: This Privacy Policy is sample placeholder content created for the APEX Fitness Club website demonstration. It must be reviewed and replaced by qualified legal counsel prior to any real-world commercial publication.
        </div>

        <div className="space-y-3 border-b border-[#F3F4ED]/15 pb-8">
          <p className="text-xs font-mono uppercase tracking-widest text-[#B7D66B]">
            LEGAL DOCUMENTATION · PLACEHOLDER TEMPLATE
          </p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-[#F3F4ED]/60">
            Last Updated: November 2026 (Demo Version)
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-[#F3F4ED]/80 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-2xl uppercase tracking-wide text-[#F3F4ED]">
              01. Information Collected in Demo Flows
            </h2>
            <p>
              In a live production deployment, APEX Fitness Club collects personal contact details (name, email address, phone number, and training preferences) voluntarily submitted through trial booking forms, membership applications, and concierge enquiries. In this demonstration environment, form inputs are processed solely in client-side state.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl uppercase tracking-wide text-[#F3F4ED]">
              02. How Member Data Is Used
            </h2>
            <p>
              Information collected is used exclusively to schedule trial sessions, manage club access credentials, match members with appropriate performance coaches, and communicate requested service updates. We never sell or rent member contact lists to third-party advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl uppercase tracking-wide text-[#F3F4ED]">
              03. Data Security & Retention
            </h2>
            <p>
              Industry-standard encryption and access controls are utilized to safeguard member records. Prospective members may request deletion or correction of their personal records at any time by contacting our privacy desk at concierge@apexfitness.demo.
            </p>
          </section>
        </div>

        <div className="pt-8 border-t border-[#F3F4ED]/15 flex flex-wrap gap-6 text-xs font-mono uppercase tracking-wider text-[#B7D66B]">
          <Link href="/legal/terms" className="hover:underline">
            Terms & Conditions →
          </Link>
          <Link href="/legal/membership-terms" className="hover:underline">
            Membership Terms →
          </Link>
        </div>
      </div>
    </div>
  );
}
