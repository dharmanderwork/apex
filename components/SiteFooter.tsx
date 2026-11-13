'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BRAND_INFO, PROGRAMS_DATA } from '@/lib/site-data';
import { ArrowUpRight, CheckCircle2, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function SiteFooter() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newsletterEmail.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setNewsletterStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    setNewsletterStatus('success');
    setErrorMessage('');
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#141817] text-[#F3F4ED] border-t border-[#F3F4ED]/12">
      {/* Top Newsletter & Quick Action Bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12 border-b border-[#F3F4ED]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B] mb-2">
              APEX PERFORMANCE DISPATCH
            </p>
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-[#F3F4ED]">
              Receive Strength Programming Notes & Club Briefings
            </h2>
            <p className="text-sm text-[#F3F4ED]/70 mt-2 max-w-2xl">
              Bi-weekly articles on barbell biomechanics, hypertrophy volume landmarks, and conditioning protocols written by our coaching staff.
            </p>
          </div>

          <div className="lg:col-span-5">
            {newsletterStatus === 'success' ? (
              <div className="p-4 border border-[#B7D66B]/40 bg-[#B7D66B]/10 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B7D66B] shrink-0" />
                <p className="text-sm text-[#F3F4ED]">
                  Subscribed to the APEX Performance Dispatch (Demo Confirmation).
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} noValidate className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label htmlFor="footer-newsletter-email" className="sr-only">
                    Email address for newsletter
                  </label>
                  <input
                    id="footer-newsletter-email"
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      if (newsletterStatus === 'error') setNewsletterStatus('idle');
                    }}
                    placeholder="Enter your email address"
                    className="w-full h-12 px-4 bg-[#F3F4ED]/5 border border-[#F3F4ED]/20 text-sm text-[#F3F4ED] placeholder:text-[#F3F4ED]/40 focus:outline-none focus:border-[#B7D66B]"
                  />
                  {newsletterStatus === 'error' && (
                    <p className="text-xs text-[#B7D66B] mt-1.5">{errorMessage}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="h-12 px-6 bg-[#B7D66B] text-[#141817] font-display text-sm font-bold uppercase tracking-widest hover:bg-[#F3F4ED] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="inline-block font-display text-2xl font-bold uppercase tracking-wider text-[#F3F4ED]"
            >
              APEX <span className="text-[#B7D66B]">FITNESS</span> CLUB
            </Link>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B]">
              {BRAND_INFO.tagline}
            </p>
            <p className="text-sm text-[#F3F4ED]/75 leading-relaxed max-w-sm">
              {BRAND_INFO.description}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-wider text-[#F3F4ED]/70">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B7D66B] transition-colors inline-flex items-center gap-1"
              >
                Instagram <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B7D66B] transition-colors inline-flex items-center gap-1"
              >
                YouTube <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B7D66B] transition-colors inline-flex items-center gap-1"
              >
                LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links & Resources */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-sm uppercase tracking-[0.16em] text-[#B7D66B]">
              Club Directory
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F3F4ED]/75">
              <li>
                <Link href="/about" className="hover:text-[#B7D66B] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-[#B7D66B] transition-colors">
                  8 Training Zones
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="hover:text-[#B7D66B] transition-colors">
                  Performance Coaches
                </Link>
              </li>
              <li>
                <Link href="/transformations" className="hover:text-[#B7D66B] transition-colors">
                  Member Stories
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#B7D66B] transition-colors">
                  Facility Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#B7D66B] transition-colors">
                  Fitness Journal
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#B7D66B] transition-colors">
                  FAQ & Club Policies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B7D66B] transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Fitness Programs */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-sm uppercase tracking-[0.16em] text-[#B7D66B]">
              Training Programs
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-sm text-[#F3F4ED]/75">
              {PROGRAMS_DATA.slice(0, 8).map((prog) => (
                <li key={prog.slug}>
                  <Link
                    href={`/programs/${prog.slug}`}
                    className="hover:text-[#B7D66B] transition-colors"
                  >
                    {prog.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/programs"
                  className="text-[#B7D66B] hover:underline text-xs font-mono uppercase tracking-wider"
                >
                  View All 10 Programs →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Membership, Contact & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-sm uppercase tracking-[0.16em] text-[#B7D66B]">
              Club Concierge & Hours
            </h3>
            <ul className="space-y-3 text-sm text-[#F3F4ED]/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B7D66B] shrink-0 mt-1" />
                <span>{BRAND_INFO.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B7D66B] shrink-0" />
                <span>{BRAND_INFO.contact.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B7D66B] shrink-0" />
                <span>{BRAND_INFO.contact.email}</span>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#B7D66B] shrink-0 mt-1" />
                <div className="space-y-1 text-xs">
                  {BRAND_INFO.contact.hours.map((item) => (
                    <div key={item.days} className="flex justify-between gap-4">
                      <span className="text-[#F3F4ED]/60">{item.days}:</span>
                      <span className="font-mono text-[#F3F4ED]">{item.time}</span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>

            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/membership"
                className="text-xs font-mono uppercase tracking-wider text-[#F3F4ED] hover:text-[#B7D66B] transition-colors"
              >
                → Compare Essential, Performance & Elite Tiers
              </Link>
              <Link
                href="/book-trial"
                className="text-xs font-mono uppercase tracking-wider text-[#B7D66B] hover:underline"
              >
                → Book Complimentary 60-Min Trial Session
              </Link>
            </div>
          </div>
        </div>

        {/* Transparent Demo Attribution & Legal Bar */}
        <div className="mt-14 pt-8 border-t border-[#F3F4ED]/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-xs text-[#F3F4ED]/55">
          <div className="max-w-3xl space-y-1">
            <p className="text-[#F3F4ED]/75 font-medium">
              © {new Date().getFullYear()} APEX FITNESS CLUB. Fictional Brand Demonstration Website.
            </p>
            <p>{BRAND_INFO.demoNotice}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0 font-mono uppercase tracking-wider">
            <Link href="/legal/privacy" className="hover:text-[#B7D66B] transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/legal/terms" className="hover:text-[#B7D66B] transition-colors">
              Terms & Conditions
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/legal/membership-terms" className="hover:text-[#B7D66B] transition-colors">
              Membership Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
