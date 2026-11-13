import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms and Conditions — Placeholder Legal Document (Demo)',
  description:
    'Placeholder Terms and Conditions for the APEX Fitness Club demonstration website.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-[#141817] text-[#F3F4ED] py-20 lg:py-28">
      <div className="max-w-[960px] mx-auto px-4 sm:px-8 space-y-10">
        <div className="p-5 border border-[#B7D66B] bg-[#B7D66B]/10 text-xs font-mono text-[#F3F4ED]">
          IMPORTANT PLACEHOLDER LEGAL NOTICE: These Terms and Conditions represent sample placeholder content for demonstration purposes only and must be reviewed and customized by qualified legal counsel before real-world use.
        </div>

        <div className="space-y-3 border-b border-[#F3F4ED]/15 pb-8">
          <p className="text-xs font-mono uppercase tracking-widest text-[#B7D66B]">
            LEGAL DOCUMENTATION · PLACEHOLDER TEMPLATE
          </p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-xs font-mono text-[#F3F4ED]/60">
            Last Updated: November 2026 (Demo Version)
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-[#F3F4ED]/80 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-2xl uppercase tracking-wide text-[#F3F4ED]">
              01. Website Demonstration Scope
            </h2>
            <p>
              This website is a fictional brand showcase created for APEX Fitness Club. All programs, facility descriptions, trainer profiles, transformation metrics, and pricing structures are illustrative examples intended to demonstrate digital design and user experience capabilities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl uppercase tracking-wide text-[#F3F4ED]">
              02. Educational & Non-Medical Content Disclaimer
            </h2>
            <p>
              Articles, workout templates, and nutritional notes provided across this website are intended for general educational purposes for healthy adults. Nothing on this website constitutes medical advice, clinical diagnosis, or physical therapy instruction. Always consult a qualified physician before beginning any high-intensity strength or conditioning regimen.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl uppercase tracking-wide text-[#F3F4ED]">
              03. Intellectual Property & Acceptable Use
            </h2>
            <p>
              All layout systems, brand typography, and custom visual assets displayed on this site are protected demonstration materials. Users may browse and interact with all booking and filtering features for evaluation purposes.
            </p>
          </section>
        </div>

        <div className="pt-8 border-t border-[#F3F4ED]/15 flex flex-wrap gap-6 text-xs font-mono uppercase tracking-wider text-[#B7D66B]">
          <Link href="/legal/privacy" className="hover:underline">
            Privacy Policy →
          </Link>
          <Link href="/legal/membership-terms" className="hover:underline">
            Membership Terms →
          </Link>
        </div>
      </div>
    </div>
  );
}
