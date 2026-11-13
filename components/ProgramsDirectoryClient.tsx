'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import ResilientImage from '@/components/ResilientImage';
import { PROGRAMS_DATA } from '@/lib/site-data';
import { filterPrograms } from '@/lib/fitness-logic';
import { ArrowUpRight, Search, Check } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Strength',
  'Conditioning',
  'Coaching',
  'Mobility & Foundations',
];

export default function ProgramsDirectoryClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPrograms = filterPrograms(
    PROGRAMS_DATA,
    selectedCategory,
    searchQuery
  );

  return (
    <div className="space-y-12">
      {/* Interactive Filter & Search Controls */}
      <div className="bg-[#141817] border border-[#F3F4ED]/15 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div
          role="group"
          aria-label="Filter programs by training discipline"
          className="flex flex-wrap items-center gap-2"
        >
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                aria-pressed={active}
                className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-[#B7D66B] text-[#141817] font-bold'
                    : 'bg-[#F3F4ED]/5 text-[#F3F4ED]/80 hover:text-[#F3F4ED] border border-[#F3F4ED]/15'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1 sm:w-72">
            <label htmlFor="program-search-input" className="sr-only">
              Search fitness programs
            </label>
            <Search className="w-4 h-4 text-[#F3F4ED]/45 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="program-search-input"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search program or focus..."
              className="w-full h-11 pl-10 pr-4 bg-[#F3F4ED]/5 border border-[#F3F4ED]/20 text-sm text-[#F3F4ED] placeholder:text-[#F3F4ED]/40 focus:outline-none focus:border-[#B7D66B]"
            />
          </div>
          <span
            data-testid="programs-count-readout"
            className="text-xs font-mono uppercase tracking-wider text-[#B7D66B] whitespace-nowrap shrink-0 tabular-nums"
          >
            {filteredPrograms.length} / {PROGRAMS_DATA.length} Programs
          </span>
        </div>
      </div>

      {/* Filtered Programs Grid */}
      {filteredPrograms.length === 0 ? (
        <div className="p-12 border border-[#F3F4ED]/15 text-center space-y-4">
          <p className="font-display text-2xl uppercase tracking-wide text-[#F3F4ED]">
            No Matching Training Programs Found
          </p>
          <p className="text-sm text-[#F3F4ED]/70">
            Try clearing your search keyword or selecting &ldquo;All&rdquo; disciplines.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-6 py-2.5 bg-[#B7D66B] text-[#141817] font-display text-xs font-bold uppercase tracking-widest cursor-pointer"
          >
            Reset Program Filters
          </button>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program) => (
              <motion.article
                layout
                key={program.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.18 }}
                data-testid={`program-card-${program.slug}`}
                className="border border-[#F3F4ED]/15 bg-[#141817] flex flex-col justify-between hover:border-[#B7D66B] transition-colors"
              >
                <div>
                  {/* Image & Header */}
                  <div className="relative h-64 overflow-hidden border-b border-[#F3F4ED]/12">
                    <ResilientImage
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141817] via-[#141817]/40 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                      <span className="text-[#B7D66B] font-bold uppercase">
                        {program.number} · {program.category}
                      </span>
                      <span className="text-[#F3F4ED]/90">
                        {program.duration} · {program.weeklyFrequency}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-5">
                    <div>
                      <h2 className="font-display text-3xl uppercase tracking-wide text-[#F3F4ED]">
                        {program.title}
                      </h2>
                      <p className="text-sm text-[#F3F4ED]/80 leading-relaxed mt-2">
                        {program.shortDescription}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#F3F4ED]/10 text-xs">
                      <div>
                        <p className="font-mono uppercase tracking-wider text-[#B7D66B] mb-1">
                          Ideal Participant
                        </p>
                        <p className="text-[#F3F4ED]/80 leading-relaxed">
                          {program.idealParticipant}
                        </p>
                      </div>
                      <div>
                        <p className="font-mono uppercase tracking-wider text-[#B7D66B] mb-1">
                          Session Format
                        </p>
                        <p className="text-[#F3F4ED]/80 leading-relaxed">
                          {program.sessionFormat}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#F3F4ED]/10">
                      <p className="text-xs font-mono uppercase tracking-wider text-[#F3F4ED]/60 mb-2.5">
                        Key Focus Areas
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F3F4ED]/85">
                        {program.keyFocusAreas.map((focus) => (
                          <li key={focus} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#B7D66B] shrink-0" />
                            <span>{focus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-6 sm:px-8 py-5 border-t border-[#F3F4ED]/12 bg-[#F3F4ED]/[0.02] flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={`/programs/${program.slug}`}
                    className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest text-[#B7D66B] hover:text-[#F3F4ED] transition-colors"
                  >
                    <span>Explore Program Syllabus</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href={`/book-trial?program=${program.slug}`}
                    className="px-4 py-2 bg-[#B7D66B] text-[#141817] font-display text-xs font-bold uppercase tracking-widest hover:bg-[#F3F4ED] transition-colors"
                  >
                    Enquire / Book Trial
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
