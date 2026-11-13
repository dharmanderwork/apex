'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BillingCycle,
  CYCLE_CONFIG,
  calculateMembershipPrice,
} from '@/lib/fitness-logic';
import {
  MEMBERSHIP_TIERS,
  MEMBERSHIP_COMPARISON_ROWS,
} from '@/lib/site-data';
import { Check, Minus, ArrowUpRight } from 'lucide-react';

interface MembershipPricingSectionProps {
  showComparisonTable?: boolean;
  initialCycle?: BillingCycle;
}

const CYCLES: { id: BillingCycle; label: string }[] = [
  { id: 'monthly', label: 'Monthly' },
  { id: 'quarterly', label: 'Quarterly (-8%)' },
  { id: 'half-yearly', label: 'Half-Yearly (-14%)' },
  { id: 'annual', label: 'Annual (-20%)' },
];

export default function MembershipPricingSection({
  showComparisonTable = true,
  initialCycle = 'annual',
}: MembershipPricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>(initialCycle);

  return (
    <div className="space-y-16">
      {/* Billing Cycle Interactive Selector */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#F3F4ED]/12">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B] mb-2">
            TRANSPARENT DEMO PRICING · CONFIGURABLE PLANS
          </p>
          <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide text-[#F3F4ED]">
            Select Your Commitment Horizon
          </h2>
        </div>

        <div
          role="group"
          aria-label="Select membership billing cycle"
          className="inline-flex flex-wrap bg-[#F3F4ED]/5 p-1 border border-[#F3F4ED]/15"
        >
          {CYCLES.map((cycle) => {
            const active = billingCycle === cycle.id;
            return (
              <button
                key={cycle.id}
                type="button"
                onClick={() => setBillingCycle(cycle.id)}
                aria-pressed={active}
                className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-[#B7D66B] text-[#141817] font-bold'
                    : 'text-[#F3F4ED]/75 hover:text-[#F3F4ED]'
                }`}
              >
                {cycle.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3 Membership Tier Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {MEMBERSHIP_TIERS.map((tier) => {
          const pricing = calculateMembershipPrice(tier.id, billingCycle);
          const isPopular = Boolean(tier.popular);

          return (
            <div
              key={tier.id}
              data-testid={`membership-card-${tier.id}`}
              className={`flex flex-col justify-between p-8 transition-colors ${
                isPopular
                  ? 'bg-[#F3F4ED] text-[#141817] border-2 border-[#B7D66B]'
                  : 'bg-[#141817] text-[#F3F4ED] border border-[#F3F4ED]/18'
              }`}
            >
              <div>
                {/* Header & Popular Tag */}
                <div className="flex items-baseline justify-between gap-4 pb-6 border-b border-current/15">
                  <div>
                    <p
                      className={`text-xs font-mono uppercase tracking-[0.18em] ${
                        isPopular ? 'text-[#141817]/70' : 'text-[#B7D66B]'
                      }`}
                    >
                      {tier.subtitle}
                    </p>
                    <h3 className="font-display text-3xl uppercase tracking-wider mt-1">
                      {tier.name}
                    </h3>
                  </div>
                  {isPopular && (
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 bg-[#141817] text-[#B7D66B] whitespace-nowrap shrink-0">
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Tabular Price Readout */}
                <div className="py-6 border-b border-current/15">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-5xl font-bold tabular-nums tracking-tight">
                      ${pricing.monthlyEquivalent}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider opacity-70">
                      / Month Equivalent (Demo)
                    </span>
                  </div>
                  <p className="text-xs font-mono mt-2 opacity-75 tabular-nums">
                    {pricing.billingLabel} · Total Billed: ${pricing.totalBilled}
                    {pricing.savingsAmount > 0
                      ? ` (Save $${pricing.savingsAmount})`
                      : ''}
                  </p>
                </div>

                {/* Description & Highlights */}
                <p className="text-sm leading-relaxed mt-6 opacity-85">
                  {tier.description}
                </p>

                <ul className="mt-6 space-y-3 text-sm">
                  {tier.coreHighlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-1 ${
                          isPopular ? 'text-[#141817]' : 'text-[#B7D66B]'
                        }`}
                      />
                      <span className="opacity-90">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-current/15">
                <Link
                  href={`/book-trial?tier=${tier.id}&cycle=${billingCycle}`}
                  className={`w-full py-4 px-6 font-display text-sm font-bold uppercase tracking-[0.14em] flex items-center justify-center gap-2 transition-colors ${
                    isPopular
                      ? 'bg-[#141817] text-[#B7D66B] hover:bg-[#141817]/90'
                      : 'bg-[#B7D66B] text-[#141817] hover:bg-[#F3F4ED]'
                  }`}
                >
                  <span>Join {tier.name} / Book Trial</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Responsive Feature Comparison Table */}
      {showComparisonTable && (
        <div className="pt-8">
          <div className="mb-8">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B] mb-2">
              ARCHITECTURAL & COACHING ACCESS MATRIX
            </p>
            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-[#F3F4ED]">
              Complete Tier Comparison
            </h3>
          </div>

          <div className="overflow-x-auto border border-[#F3F4ED]/15">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-[#F3F4ED]/20 bg-[#F3F4ED]/5">
                  <th className="py-4 px-5 font-display text-sm uppercase tracking-wider text-[#F3F4ED] w-2/5">
                    Membership Feature / Access
                  </th>
                  <th className="py-4 px-5 font-display text-sm uppercase tracking-wider text-[#F3F4ED] w-1/5">
                    Essential
                  </th>
                  <th className="py-4 px-5 font-display text-sm uppercase tracking-wider text-[#B7D66B] w-1/5 bg-[#B7D66B]/10">
                    Performance
                  </th>
                  <th className="py-4 px-5 font-display text-sm uppercase tracking-wider text-[#F3F4ED] w-1/5">
                    Elite
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3F4ED]/10 text-sm">
                {MEMBERSHIP_COMPARISON_ROWS.map((row) => (
                  <tr
                    key={row.feature}
                    className="hover:bg-[#F3F4ED]/[0.03] transition-colors"
                  >
                    <td className="py-4 px-5">
                      <span className="block text-[#F3F4ED] font-medium">
                        {row.feature}
                      </span>
                      <span className="text-xs font-mono text-[#F3F4ED]/50 uppercase">
                        {row.category}
                      </span>
                    </td>
                    <td className="py-4 px-5 font-mono text-xs text-[#F3F4ED]/80">
                      {typeof row.essential === 'boolean' ? (
                        row.essential ? (
                          <span className="inline-flex items-center gap-1.5 text-[#B7D66B]">
                            <Check className="w-4 h-4" /> Included
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-[#F3F4ED]/35">
                            <Minus className="w-4 h-4" /> Not Included
                          </span>
                        )
                      ) : (
                        row.essential
                      )}
                    </td>
                    <td className="py-4 px-5 font-mono text-xs text-[#F3F4ED] bg-[#B7D66B]/[0.04]">
                      {typeof row.performance === 'boolean' ? (
                        row.performance ? (
                          <span className="inline-flex items-center gap-1.5 text-[#B7D66B] font-semibold">
                            <Check className="w-4 h-4" /> Included
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-[#F3F4ED]/35">
                            <Minus className="w-4 h-4" /> Not Included
                          </span>
                        )
                      ) : (
                        <span className="text-[#B7D66B] font-semibold">
                          {row.performance}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-5 font-mono text-xs text-[#F3F4ED]/90">
                      {typeof row.elite === 'boolean' ? (
                        row.elite ? (
                          <span className="inline-flex items-center gap-1.5 text-[#B7D66B]">
                            <Check className="w-4 h-4" /> Included
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-[#F3F4ED]/35">
                            <Minus className="w-4 h-4" /> Not Included
                          </span>
                        )
                      ) : (
                        row.elite
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs font-mono text-[#F3F4ED]/55 mt-4">
            * Illustrative Demo Pricing Notice: All rates, billing terms, and tier inclusions shown above are sample demonstration figures for gym presentation purposes. Current selected billing horizon: {CYCLE_CONFIG[billingCycle].label}.
          </p>
        </div>
      )}
    </div>
  );
}
