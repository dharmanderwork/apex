import type { MetadataRoute } from 'next';
import { PROGRAMS_DATA, TRAINERS_DATA, BLOG_ARTICLES } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL || 'https://apexfitness.demo';
  const staticRoutes = [
    '',
    '/about',
    '/facilities',
    '/programs',
    '/trainers',
    '/membership',
    '/book-trial',
    '/transformations',
    '/gallery',
    '/contact',
    '/blog',
    '/faq',
    '/legal/privacy',
    '/legal/terms',
    '/legal/membership-terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const programRoutes = PROGRAMS_DATA.map((p) => ({
    url: `${baseUrl}/programs/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const trainerRoutes = TRAINERS_DATA.map((t) => ({
    url: `${baseUrl}/trainers/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogRoutes = BLOG_ARTICLES.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...programRoutes, ...trainerRoutes, ...blogRoutes];
}
