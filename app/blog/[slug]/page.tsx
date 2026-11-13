import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ResilientImage from '@/components/ResilientImage';
import { BLOG_ARTICLES } from '@/lib/site-data';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function generateStaticParams() {
  return BLOG_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: 'Article Not Found' };
  return {
    title: `${article.title} — APEX Journal`,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = BLOG_ARTICLES.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  );

  return (
    <div className="bg-[#141817] text-[#F3F4ED]">
      {/* ARTICLE HEADER */}
      <section className="py-16 lg:py-24 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1040px] mx-auto px-4 sm:px-8 space-y-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B7D66B] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Journal Articles</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-wider text-[#F3F4ED]/70">
            <span className="text-[#B7D66B] font-bold">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.publishedDate}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </div>

          <h1
            style={{ textWrap: 'balance' }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.98]"
          >
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#F3F4ED]/85 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="pt-4 border-t border-[#F3F4ED]/12 flex items-center justify-between text-xs font-mono">
            <div>
              <span className="text-[#F3F4ED]/60">Written by </span>
              <strong className="text-[#F3F4ED]">{article.author}</strong>
              <span className="text-[#F3F4ED]/55"> — {article.authorRole}</span>
            </div>
          </div>
        </div>
      </section>

      {/* COVER IMAGE & ARTICLE BODY */}
      <article className="py-16 lg:py-20 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1040px] mx-auto px-4 sm:px-8 space-y-12">
          <div className="relative h-80 sm:h-[440px] border border-[#F3F4ED]/15 overflow-hidden">
            <ResilientImage
              src={article.image}
              alt={article.title}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-10 max-w-3xl mx-auto">
            {article.sections.map((sec) => (
              <section key={sec.heading} className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-[#B7D66B]">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="text-base sm:text-lg text-[#F3F4ED]/85 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
                {sec.keyTakeaways && sec.keyTakeaways.length > 0 && (
                  <div className="p-6 bg-[#F3F4ED] text-[#141817] space-y-3 my-6">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#141817]/70">
                      PRACTICAL FIELD TAKEAWAYS
                    </p>
                    <ul className="space-y-2.5 text-sm sm:text-base font-medium">
                      {sec.keyTakeaways.map((takeaway) => (
                        <li key={takeaway} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#141817] shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}

            <div className="p-5 border border-[#F3F4ED]/15 text-xs font-mono text-[#F3F4ED]/65">
              EDUCATIONAL DISCLAIMER: Content published in the APEX Performance Journal is created for general educational and fitness demonstration purposes only and does not constitute medical advice or clinical diagnosis.
            </div>
          </div>
        </div>
      </article>

      {/* RELATED ARTICLES */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1040px] mx-auto px-4 sm:px-8 space-y-8">
          <h2 className="font-display text-3xl uppercase tracking-wide">
            Related Journal Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                className="p-6 border border-[#F3F4ED]/15 flex flex-col justify-between space-y-4 hover:border-[#B7D66B] transition-colors"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#B7D66B] uppercase">
                    {rel.category} · {rel.readingTime}
                  </span>
                  <h3 className="font-display text-2xl uppercase tracking-wide text-[#F3F4ED]">
                    {rel.title}
                  </h3>
                  <p className="text-sm text-[#F3F4ED]/75">{rel.excerpt}</p>
                </div>
                <Link
                  href={`/blog/${rel.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-[#B7D66B] hover:text-[#F3F4ED]"
                >
                  <span>Read Article</span>
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
