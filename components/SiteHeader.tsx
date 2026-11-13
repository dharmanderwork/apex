'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const PRIMARY_NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/programs', label: 'Programs' },
  { href: '/trainers', label: 'Trainers' },
  { href: '/membership', label: 'Membership' },
  { href: '/transformations', label: 'Transformations' },
  { href: '/contact', label: 'Contact' },
];

const SECONDARY_MOBILE_LINKS = [
  { href: '/gallery', label: 'Club Gallery' },
  { href: '/blog', label: 'Fitness Journal' },
  { href: '/faq', label: 'FAQ & Policies' },
  { href: '/book-trial', label: 'Book Free Trial' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLinkActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-[#141817]/95 backdrop-blur-md border-b border-[#F3F4ED]/12'
          : 'bg-[#141817] border-b border-[#F3F4ED]/10'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-16 md:h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Single-line Brand Wordmark */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="font-display text-xl sm:text-2xl font-bold tracking-wider uppercase text-[#F3F4ED] hover:text-[#B7D66B] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#B7D66B]"
        >
          APEX <span className="text-[#B7D66B]">FITNESS</span> CLUB
        </Link>

        {/* Zone 2: Clean Uppercase Navigation Links with Active Underline */}
        <nav
          aria-label="Primary Navigation"
          className="hidden xl:flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.14em]"
        >
          {PRIMARY_NAV_LINKS.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 transition-colors whitespace-nowrap shrink-0 ${
                  active
                    ? 'text-[#B7D66B]'
                    : 'text-[#F3F4ED]/80 hover:text-[#F3F4ED]'
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="apex-active-nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B7D66B]"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Primary Conversion CTA + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/book-trial"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#B7D66B] text-[#141817] font-display text-xs sm:text-sm font-bold uppercase tracking-[0.12em] hover:bg-[#F3F4ED] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Book a Free Trial</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="xl:hidden inline-flex items-center justify-center w-11 h-11 border border-[#F3F4ED]/20 text-[#F3F4ED] hover:border-[#B7D66B] hover:text-[#B7D66B] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Animated Mobile & Tablet Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="xl:hidden bg-[#141817] border-b border-[#F3F4ED]/15 px-4 sm:px-8 py-6 max-h-[82vh] overflow-y-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#F3F4ED]/50 mb-3">
                  Primary Pages
                </p>
                <ul className="space-y-2">
                  {PRIMARY_NAV_LINKS.map((item) => {
                    const active = isLinkActive(item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block py-2 font-display text-lg uppercase tracking-wider transition-colors ${
                            active
                              ? 'text-[#B7D66B]'
                              : 'text-[#F3F4ED] hover:text-[#B7D66B]'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-[#F3F4ED]/10 pt-4 sm:pt-0 sm:pl-6">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#F3F4ED]/50 mb-3">
                    Explore More
                  </p>
                  <ul className="space-y-2">
                    {SECONDARY_MOBILE_LINKS.map((item) => {
                      const active = isLinkActive(item.href);
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block py-1.5 text-sm uppercase tracking-wider transition-colors ${
                              active
                                ? 'text-[#B7D66B] font-semibold'
                                : 'text-[#F3F4ED]/80 hover:text-[#B7D66B]'
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F3F4ED]/10 flex flex-col gap-3">
                  <Link
                    href="/membership"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 px-4 border border-[#F3F4ED]/30 text-[#F3F4ED] text-center font-display text-sm uppercase tracking-widest hover:border-[#B7D66B] hover:text-[#B7D66B] transition-colors"
                  >
                    Explore Memberships
                  </Link>
                  <Link
                    href="/book-trial"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 px-4 bg-[#B7D66B] text-[#141817] text-center font-display text-sm font-bold uppercase tracking-widest hover:bg-[#F3F4ED] transition-colors"
                  >
                    Book a Free Trial
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
