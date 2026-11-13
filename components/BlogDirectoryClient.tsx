'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ResilientImage from '@/components/ResilientImage';
import { BLOG_ARTICLES } from '@/lib/site-data';
import { ArrowUpRight } from 'lucide-react';

const BLOG_CATEGORIES = [
  'All',
  'Workout guides',
  'Strength training',
  'Nutrition basics',
  'Fitness motivation',
  'Beginner advice',
  'Recovery',
  'Gym lifestyle',
] as const;

export default function BlogDirectoryClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredArticles =
    selectedCategory === 'All'
      ? BLOG_ARTICLES
      : BLOG_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Category Selector */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#F3F4ED]/12">
        <div
          role="group"
          aria-label="Filter journal articles by category"
          className="flex flex-wrap gap-2"
        >
          {BLOG_CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                aria-pressed={active}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-[#B7D66B] text-[#141817] font-bold'
                    : 'bg-[#F3F4ED]/5 text-[#F3F4ED]/75 hover:text-[#F3F4ED] border border-[#F3F4ED]/15'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-[#B7D66B] tabular-nums">
          {filteredArticles.length} Articles
        </span>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <article
            key={article.slug}
            className="border border-[#F3F4ED]/15 bg-[#141817] flex flex-col justify-between hover:border-[#B7D66B] transition-colors"
          >
            <div>
              <div className="relative h-60 overflow-hidden border-b border-[#F3F4ED]/12">
                <ResilientImage
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141817] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#B7D66B] font-bold uppercase">
                    {article.category}
                  </span>
                  <span className="text-[#F3F4ED]/85">
                    {article.readingTime}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F3F4ED]/60">
                  <span>{article.publishedDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.author}</span>
                </div>
                <h2 className="font-display text-2xl uppercase tracking-wide text-[#F3F4ED]">
                  {article.title}
                </h2>
                <p className="text-sm text-[#F3F4ED]/75 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-[#F3F4ED]/12 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#F3F4ED]/50 uppercase">
                APEX Journal
              </span>
              <Link
                href={`/blog/${article.slug}`}
                className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-widest text-[#B7D66B] hover:text-[#F3F4ED] transition-colors"
              >
                <span>Read Article</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
