'use client';

import React, { useState } from 'react';
import { FAQ_DATA } from '@/lib/site-data';
import { ChevronDown, Search } from 'lucide-react';

const FAQ_TOPICS = [
  'All',
  'Membership',
  'Pricing',
  'Trial sessions',
  'Gym timings',
  'Personal training',
  'Facilities',
  'Payments',
  'Cancellation',
  'Beginner training',
  'General gym policies',
] as const;

export default function FAQAccordionClient() {
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesTopic =
      selectedTopic === 'All' || item.topic === selectedTopic;
    if (!matchesTopic) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q) ||
      item.topic.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-12">
      {/* Topic Filter & Search */}
      <div className="p-6 border border-[#F3F4ED]/15 bg-[#141817] space-y-6">
        <div
          role="group"
          aria-label="Filter FAQs by topic"
          className="flex flex-wrap gap-2"
        >
          {FAQ_TOPICS.map((topic) => {
            const active = selectedTopic === topic;
            return (
              <button
                key={topic}
                type="button"
                onClick={() => setSelectedTopic(topic)}
                aria-pressed={active}
                className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-[#B7D66B] text-[#141817] font-bold'
                    : 'bg-[#F3F4ED]/5 text-[#F3F4ED]/75 hover:text-[#F3F4ED] border border-[#F3F4ED]/15'
                }`}
              >
                {topic}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#F3F4ED]/10">
          <div className="relative flex-1 max-w-md">
            <label htmlFor="faq-search-input" className="sr-only">
              Search FAQ questions
            </label>
            <Search className="w-4 h-4 text-[#F3F4ED]/45 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="faq-search-input"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. freeze, chalk, hours)..."
              className="w-full h-11 pl-10 pr-4 bg-[#F3F4ED]/5 border border-[#F3F4ED]/20 text-sm text-[#F3F4ED] placeholder:text-[#F3F4ED]/40 focus:outline-none focus:border-[#B7D66B]"
            />
          </div>
          <span
            data-testid="faq-count-readout"
            className="text-xs font-mono uppercase tracking-widest text-[#B7D66B] tabular-nums"
          >
            Showing {filteredFaqs.length} of {FAQ_DATA.length} Questions
          </span>
        </div>
      </div>

      {/* Accordion List */}
      <div className="divide-y divide-[#F3F4ED]/15 border border-[#F3F4ED]/15">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className="bg-[#141817]">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-6 hover:bg-[#F3F4ED]/[0.02] transition-colors cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="block text-[11px] font-mono uppercase tracking-widest text-[#B7D66B]">
                      {faq.topic}
                    </span>
                    <span className="font-display text-xl sm:text-2xl uppercase tracking-wide text-[#F3F4ED]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#B7D66B] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </h3>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#F3F4ED]/80 leading-relaxed border-t border-[#F3F4ED]/10">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
