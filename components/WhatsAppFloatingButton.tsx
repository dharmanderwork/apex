'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, X, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '@/lib/site-data';

export default function WhatsAppFloatingButton() {
  const [openPopover, setOpenPopover] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {openPopover && (
        <div
          role="dialog"
          aria-label="APEX Club Concierge WhatsApp Enquiry"
          className="mb-3 w-80 bg-[#141817] border border-[#B7D66B]/50 p-5 text-[#F3F4ED] shadow-2xl"
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F3F4ED]/12">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#B7D66B]">
                Instant Club Concierge
              </p>
              <h3 className="font-display text-base uppercase tracking-wider text-[#F3F4ED]">
                WhatsApp Enquiry Desk
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setOpenPopover(false)}
              aria-label="Close WhatsApp concierge panel"
              className="p-1 text-[#F3F4ED]/60 hover:text-[#F3F4ED]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#F3F4ED]/75 leading-relaxed mb-4">
            Have a question about rack availability, 1-on-1 coach matching, or corporate membership rates? Message our concierge or book your trial directly.
          </p>

          <div className="space-y-2.5">
            <a
              href={`https://wa.me/${BRAND_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
                'Hello APEX Fitness Club, I would like to enquire about membership and a trial session.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-[#B7D66B] text-[#141817] font-display text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#F3F4ED] transition-colors"
            >
              <span>Launch WhatsApp Chat</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/book-trial"
              onClick={() => setOpenPopover(false)}
              className="w-full py-2 px-4 border border-[#F3F4ED]/25 text-[#F3F4ED] font-display text-xs uppercase tracking-widest flex items-center justify-center hover:border-[#B7D66B] hover:text-[#B7D66B] transition-colors"
            >
              Book 60-Min Free Trial Online
            </Link>
          </div>
          <p className="text-[10px] font-mono text-[#F3F4ED]/45 mt-3">
            Demo Showcase Line: {BRAND_INFO.contact.phone}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpenPopover((prev) => !prev)}
        aria-label="WhatsApp Concierge Enquiry"
        aria-expanded={openPopover}
        className="h-12 px-4 bg-[#B7D66B] text-[#141817] font-display text-xs font-bold uppercase tracking-widest flex items-center gap-2.5 shadow-lg hover:bg-[#F3F4ED] transition-colors cursor-pointer border border-[#141817]"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>WhatsApp Enquiry</span>
      </button>
    </div>
  );
}
