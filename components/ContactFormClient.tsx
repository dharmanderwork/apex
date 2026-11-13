'use client';

import React, { useState } from 'react';
import { validateContactForm, ContactFormInput } from '@/lib/fitness-logic';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';

const ENQUIRY_TOPICS = [
  'Membership Tier & Pricing Enquiry',
  '1-on-1 Personal Training Consultation',
  'Private Facility Tour Request',
  'Corporate Wellness Partnership',
  'Press & Media Enquiry',
];

export default function ContactFormClient() {
  const [formState, setFormState] = useState<ContactFormInput>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormInput, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formState);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        data-testid="contact-form-success"
        className="p-8 bg-[#F3F4ED] text-[#141817] border-2 border-[#B7D66B] space-y-5"
      >
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-7 h-7 text-[#141817]" />
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#141817]/70">
              DEMO ENQUIRY DISPATCHED
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide">
              Message Received by Club Concierge
            </h3>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-[#141817]/85">
          Thank you, <strong>{formState.fullName}</strong>. Your enquiry regarding{' '}
          <strong>{formState.subject}</strong> has been logged in our demonstration showcase flow.
        </p>
        <p className="text-xs font-mono text-[#141817]/65">
          * Demo Notice: Because this website is a fictional demonstration, no external email has been transmitted.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormState({
              fullName: '',
              email: '',
              phone: '',
              subject: '',
              message: '',
            });
          }}
          className="px-6 py-3 bg-[#141817] text-[#B7D66B] font-display text-xs font-bold uppercase tracking-widest cursor-pointer"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-10 border border-[#F3F4ED]/18 bg-[#141817] space-y-6"
    >
      <div>
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B]">
          DIRECT CONCIERGE MESSAGE
        </p>
        <h2 className="font-display text-3xl uppercase tracking-wide mt-1">
          Send an Enquiry
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="contact-full-name"
            className="block text-xs font-mono uppercase tracking-wider text-[#F3F4ED] mb-2"
          >
            Full Name *
          </label>
          <input
            id="contact-full-name"
            type="text"
            value={formState.fullName}
            onChange={(e) =>
              setFormState((s) => ({ ...s, fullName: e.target.value }))
            }
            placeholder="Your full name"
            className="w-full h-12 px-4 bg-[#F3F4ED]/5 border border-[#F3F4ED]/25 text-sm text-[#F3F4ED] focus:outline-none focus:border-[#B7D66B]"
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs text-[#B7D66B] flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-mono uppercase tracking-wider text-[#F3F4ED] mb-2"
          >
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            value={formState.email}
            onChange={(e) =>
              setFormState((s) => ({ ...s, email: e.target.value }))
            }
            placeholder="you@example.com"
            className="w-full h-12 px-4 bg-[#F3F4ED]/5 border border-[#F3F4ED]/25 text-sm text-[#F3F4ED] focus:outline-none focus:border-[#B7D66B]"
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-[#B7D66B] flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="block text-xs font-mono uppercase tracking-wider text-[#F3F4ED] mb-2"
          >
            Phone Number *
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={formState.phone}
            onChange={(e) =>
              setFormState((s) => ({ ...s, phone: e.target.value }))
            }
            placeholder="+1 (212) 555-0194"
            className="w-full h-12 px-4 bg-[#F3F4ED]/5 border border-[#F3F4ED]/25 text-sm text-[#F3F4ED] focus:outline-none focus:border-[#B7D66B]"
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-[#B7D66B] flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="block text-xs font-mono uppercase tracking-wider text-[#F3F4ED] mb-2"
          >
            Enquiry Topic *
          </label>
          <select
            id="contact-subject"
            value={formState.subject}
            onChange={(e) =>
              setFormState((s) => ({ ...s, subject: e.target.value }))
            }
            className="w-full h-12 px-4 bg-[#141817] border border-[#F3F4ED]/25 text-sm text-[#F3F4ED] focus:outline-none focus:border-[#B7D66B]"
          >
            <option value="">Select enquiry topic</option>
            {ENQUIRY_TOPICS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p className="mt-1.5 text-xs text-[#B7D66B] flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.subject}</span>
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="contact-message"
            className="block text-xs font-mono uppercase tracking-wider text-[#F3F4ED] mb-2"
          >
            Message *
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={formState.message}
            onChange={(e) =>
              setFormState((s) => ({ ...s, message: e.target.value }))
            }
            placeholder="How can our coaching or concierge team assist you?"
            className="w-full p-4 bg-[#F3F4ED]/5 border border-[#F3F4ED]/25 text-sm text-[#F3F4ED] focus:outline-none focus:border-[#B7D66B]"
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-[#B7D66B] flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-4 bg-[#B7D66B] text-[#141817] font-display text-sm font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:bg-[#F3F4ED] transition-colors cursor-pointer"
      >
        <Send className="w-4 h-4" />
        <span>Submit Enquiry</span>
      </button>
    </form>
  );
}
