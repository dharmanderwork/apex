import React from 'react';
import type { Metadata } from 'next';
import ContactFormClient from '@/components/ContactFormClient';
import { BRAND_INFO } from '@/lib/site-data';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & Club Concierge — Demo Location, Hours & Enquiries',
  description:
    'Connect with the APEX Fitness Club concierge team for membership enquiries, private tours, and coaching consultations (Demo Contact Information).',
};

export default function ContactPage() {
  return (
    <div className="bg-[#141817] text-[#F3F4ED]">
      {/* HERO */}
      <section className="py-20 lg:py-28 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#B7D66B]">
              CLUB CONCIERGE & LOCATION · FICTIONAL DEMO CONTACT DETAILS
            </p>
            <h1
              style={{ textWrap: 'balance' }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[0.95]"
            >
              Connect With the APEX Concierge Desk.
            </h1>
            <p className="text-lg text-[#F3F4ED]/80 leading-relaxed">
              Arrange a private architectural walkthrough, enquire about corporate memberships, or get matched with a lead performance coach. All contact details below are illustrative demo placeholders.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="py-16 lg:py-24 border-b border-[#F3F4ED]/12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Demo Contact Info, Opening Hours, WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 border border-[#F3F4ED]/15 space-y-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#B7D66B]">
                  DEMO CLUB HEADQUARTERS
                </p>
                <h2 className="font-display text-2xl uppercase tracking-wide mt-1">
                  Direct Contact Details
                </h2>
              </div>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B7D66B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#F3F4ED]">
                      {BRAND_INFO.contact.address}
                    </p>
                    <p className="text-xs text-[#F3F4ED]/65">
                      {BRAND_INFO.contact.city}
                    </p>
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#B7D66B] shrink-0" />
                  <span>{BRAND_INFO.contact.phone}</span>
                </li>

                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#B7D66B] shrink-0" />
                  <span>{BRAND_INFO.contact.email}</span>
                </li>
              </ul>

              <div className="pt-6 border-t border-[#F3F4ED]/12">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#B7D66B] mb-3">
                  <Clock className="w-4 h-4" />
                  <span>Club Operating Hours</span>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  {BRAND_INFO.contact.hours.map((item) => (
                    <div
                      key={item.days}
                      className="flex justify-between py-1 border-b border-[#F3F4ED]/10"
                    >
                      <span className="text-[#F3F4ED]/70">{item.days}</span>
                      <span className="text-[#F3F4ED] font-bold">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={`https://wa.me/${BRAND_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
                    'Hello APEX Fitness Club, I would like to enquire about membership and a trial session.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 bg-[#B7D66B] text-[#141817] font-display text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#F3F4ED] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Message Concierge on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Architectural Map Placeholder */}
            <div className="p-8 bg-[#F3F4ED] text-[#141817] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#141817]/65">
                  INTERACTIVE MAP PLACEHOLDER
                </span>
                <span className="text-xs font-mono font-bold">
                  40.7234° N, 73.9985° W
                </span>
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wide">
                Ironworks District Flagship
              </h3>
              <p className="text-xs text-[#141817]/75 leading-relaxed">
                Private underground member parking available via Mercer Alley. 2 minutes from Canal & Spring transit hubs (Illustrative Demo Location).
              </p>
              <div className="p-5 bg-[#141817] text-[#F3F4ED] font-mono text-xs space-y-2">
                <div className="flex justify-between text-[#B7D66B]">
                  <span>[APEX FLAGSHIP PIN]</span>
                  <span>LEVEL B1–L2</span>
                </div>
                <p className="text-[#F3F4ED]/75">
                  480 Mercer Street · Dedicated Member Valet & Bike Storage
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <ContactFormClient />
          </div>
        </div>
      </section>
    </div>
  );
}
