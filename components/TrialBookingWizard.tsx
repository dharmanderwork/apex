'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PROGRAMS_DATA } from '@/lib/site-data';
import {
  validatePersonalDetails,
  ValidationErrors,
  generateDemoBookingReference,
} from '@/lib/fitness-logic';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  UserCheck,
  AlertCircle,
  Loader2,
} from 'lucide-react';

const UPCOMING_DATES = [
  { value: '2026-11-16', dayLabel: 'Mon, Nov 16', note: '4 Trial Spots Available' },
  { value: '2026-11-17', dayLabel: 'Tue, Nov 17', note: '3 Trial Spots Available' },
  { value: '2026-11-18', dayLabel: 'Wed, Nov 18', note: '5 Trial Spots Available' },
  { value: '2026-11-19', dayLabel: 'Thu, Nov 19', note: '2 Trial Spots Available' },
  { value: '2026-11-20', dayLabel: 'Fri, Nov 20', note: '4 Trial Spots Available' },
  { value: '2026-11-21', dayLabel: 'Sat, Nov 21', note: '3 Weekend Spots Available' },
];

const TIME_SLOTS = [
  { id: '06:30', label: '06:30 – 07:30', window: 'Dawn Performance Window' },
  { id: '08:30', label: '08:30 – 09:30', window: 'Morning Strength Window' },
  { id: '12:00', label: '12:00 – 13:00', window: 'Midday Executive Session' },
  { id: '16:30', label: '16:30 – 17:30', window: 'Late Afternoon Session' },
  { id: '18:00', label: '18:00 – 19:00', window: 'Prime Evening Session' },
  { id: '19:30', label: '19:30 – 20:30', window: 'Evening Conditioning' },
];

const FITNESS_GOALS = [
  'Maximal Strength & Barbell Mastery',
  'Lean Muscle Building & Hypertrophy',
  'Sustainable Weight Management & Recomposition',
  'Cardio Endurance & VO2 Max Conditioning',
  'Joint Mobility, Posture & Injury Resilience',
  'Complete Beginner Gym Foundations',
];

const PREFERRED_TRAINING_TIMES = [
  'Early Morning (05:00 – 08:30)',
  'Mid-Morning (08:30 – 12:00)',
  'Midday / Lunch (12:00 – 15:00)',
  'Evening (16:30 – 21:00)',
  'Weekends Primarily',
];

const STEP_LABELS = [
  { step: 1, title: 'Program' },
  { step: 2, title: 'Date' },
  { step: 3, title: 'Time Slot' },
  { step: 4, title: 'Your Details' },
  { step: 5, title: 'Review' },
  { step: 6, title: 'Confirmed' },
];

export default function TrialBookingWizard({
  initialProgramSlug = 'strength-training',
}: {
  initialProgramSlug?: string;
}) {
  const validInitialSlug = PROGRAMS_DATA.some(
    (p) => p.slug === initialProgramSlug
  )
    ? initialProgramSlug
    : PROGRAMS_DATA[0].slug;

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedProgramSlug, setSelectedProgramSlug] =
    useState<string>(validInitialSlug);
  const [selectedDate, setSelectedDate] = useState<string>(
    UPCOMING_DATES[0].value
  );
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>(
    TIME_SLOTS[1].label
  );

  // Step 4 personal fields
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('');
  const [preferredTrainingTime, setPreferredTrainingTime] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  const selectedProgram =
    PROGRAMS_DATA.find((p) => p.slug === selectedProgramSlug) ||
    PROGRAMS_DATA[0];

  const handleAdvanceFromStep4 = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validatePersonalDetails({
      fullName,
      phone,
      email,
      fitnessGoal,
      preferredTrainingTime,
      message,
    });

    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setCurrentStep(5);
  };

  const handleConfirmDemoBooking = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      const ref = generateDemoBookingReference(
        selectedProgramSlug,
        selectedDate
      );
      setBookingReference(ref);
      setIsSubmitting(false);
      setCurrentStep(6);
    }, 350);
  };

  return (
    <div className="border border-[#F3F4ED]/18 bg-[#141817]">
      {/* 6-Step Progress Bar */}
      <div className="p-6 sm:p-8 border-b border-[#F3F4ED]/12 bg-[#F3F4ED]/[0.02]">
        <div
          aria-label="Booking progress steps"
          className="grid grid-cols-2 sm:grid-cols-6 gap-3"
        >
          {STEP_LABELS.map((item) => {
            const isCompleted = currentStep > item.step;
            const isActive = currentStep === item.step;
            return (
              <div
                key={item.step}
                className={`p-3 border transition-colors ${
                  isActive
                    ? 'border-[#B7D66B] bg-[#B7D66B]/10 text-[#F3F4ED]'
                    : isCompleted
                    ? 'border-[#B7D66B]/40 text-[#B7D66B]'
                    : 'border-[#F3F4ED]/12 text-[#F3F4ED]/45'
                }`}
              >
                <span className="block font-mono text-[10px] uppercase tracking-widest">
                  STEP 0{item.step}
                </span>
                <span className="font-display text-sm uppercase tracking-wider mt-0.5 block">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Content Body */}
      <div className="p-6 sm:p-10">
        {/* STEP 1: SELECT PREFERRED PROGRAM */}
        {currentStep === 1 && (
          <div data-testid="booking-step-1" className="space-y-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B]">
                STEP 01 OF 06 · SELECT TRAINING SYSTEM
              </p>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide mt-1">
                Choose Your Preferred Trial Program
              </h2>
              <p className="text-sm text-[#F3F4ED]/75 mt-1">
                Your 60-minute trial includes a 15-minute movement screen and 45 minutes of guided training in your chosen track.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROGRAMS_DATA.map((prog) => {
                const isSelected = prog.slug === selectedProgramSlug;
                return (
                  <button
                    key={prog.slug}
                    type="button"
                    onClick={() => setSelectedProgramSlug(prog.slug)}
                    aria-pressed={isSelected}
                    className={`text-left p-5 border transition-colors cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-2 border-[#B7D66B] bg-[#B7D66B]/10'
                        : 'border-[#F3F4ED]/15 hover:border-[#F3F4ED]/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-[#B7D66B] mb-1">
                        <span>
                          {prog.number} · {prog.category}
                        </span>
                        <span>{prog.duration}</span>
                      </div>
                      <h3 className="font-display text-xl uppercase tracking-wide text-[#F3F4ED]">
                        {prog.title}
                      </h3>
                      <p className="text-xs text-[#F3F4ED]/75 mt-1.5 leading-relaxed">
                        {prog.shortDescription}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-6 border-t border-[#F3F4ED]/12 flex justify-end">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="px-8 py-4 bg-[#B7D66B] text-[#141817] font-display text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-[#F3F4ED] transition-colors cursor-pointer"
              >
                <span>Continue to Select Date</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: SELECT PREFERRED DATE */}
        {currentStep === 2 && (
          <div data-testid="booking-step-2" className="space-y-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B]">
                STEP 02 OF 06 · SELECT PREFERRED DATE
              </p>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide mt-1">
                Choose Your Trial Date
              </h2>
              <p className="text-sm text-[#F3F4ED]/75 mt-1">
                Selected Program:{' '}
                <strong className="text-[#B7D66B]">{selectedProgram.title}</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {UPCOMING_DATES.map((d) => {
                const isSelected = selectedDate === d.value;
                return (
                  <button
                    key={d.value}
                    type="button"
                    onClick={() => setSelectedDate(d.value)}
                    aria-pressed={isSelected}
                    className={`p-5 border text-left transition-colors cursor-pointer ${
                      isSelected
                        ? 'border-2 border-[#B7D66B] bg-[#B7D66B]/10'
                        : 'border-[#F3F4ED]/15 hover:border-[#F3F4ED]/40'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs font-mono text-[#B7D66B]">
                      <Calendar className="w-4 h-4" />
                      <span>{d.value}</span>
                    </div>
                    <p className="font-display text-2xl uppercase tracking-wide text-[#F3F4ED] mt-2">
                      {d.dayLabel}
                    </p>
                    <p className="text-xs font-mono text-[#F3F4ED]/65 mt-1">
                      {d.note}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="pt-4">
              <label
                htmlFor="custom-trial-date"
                className="block text-xs font-mono uppercase tracking-wider text-[#F3F4ED]/75 mb-2"
              >
                Or Select a Custom Date:
              </label>
              <input
                id="custom-trial-date"
                type="date"
                value={selectedDate}
                min="2026-11-14"
                onChange={(e) => {
                  if (e.target.value) setSelectedDate(e.target.value);
                }}
                className="h-12 px-4 bg-[#F3F4ED]/5 border border-[#F3F4ED]/25 text-sm font-mono text-[#F3F4ED] focus:outline-none focus:border-[#B7D66B]"
              />
            </div>

            <div className="pt-6 border-t border-[#F3F4ED]/12 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="px-6 py-3.5 border border-[#F3F4ED]/25 text-xs font-mono uppercase tracking-widest text-[#F3F4ED] inline-flex items-center gap-2 hover:border-[#B7D66B] cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Programs</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="px-8 py-4 bg-[#B7D66B] text-[#141817] font-display text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-[#F3F4ED] transition-colors cursor-pointer"
              >
                <span>Continue to Time Slot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: SELECT TIME SLOT */}
        {currentStep === 3 && (
          <div data-testid="booking-step-3" className="space-y-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B]">
                STEP 03 OF 06 · SELECT TIME SLOT
              </p>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide mt-1">
                Select Your 60-Minute Session Window
              </h2>
              <p className="text-sm text-[#F3F4ED]/75 mt-1 font-mono">
                {selectedProgram.title} · Date: {selectedDate}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TIME_SLOTS.map((slot) => {
                const isSelected = selectedTimeSlot === slot.label;
                return (
                  <button
                    key={slot.id}
                    type="button"
                    onClick={() => setSelectedTimeSlot(slot.label)}
                    aria-pressed={isSelected}
                    className={`p-5 border text-left transition-colors cursor-pointer ${
                      isSelected
                        ? 'border-2 border-[#B7D66B] bg-[#B7D66B]/10'
                        : 'border-[#F3F4ED]/15 hover:border-[#F3F4ED]/40'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs font-mono text-[#B7D66B]">
                      <Clock className="w-4 h-4" />
                      <span>60 MINUTES</span>
                    </div>
                    <p className="font-display text-2xl uppercase tracking-wide text-[#F3F4ED] mt-2 tabular-nums">
                      {slot.label}
                    </p>
                    <p className="text-xs text-[#F3F4ED]/65 mt-1">
                      {slot.window}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="pt-6 border-t border-[#F3F4ED]/12 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="px-6 py-3.5 border border-[#F3F4ED]/25 text-xs font-mono uppercase tracking-widest text-[#F3F4ED] inline-flex items-center gap-2 hover:border-[#B7D66B] cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Date</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentStep(4)}
                className="px-8 py-4 bg-[#B7D66B] text-[#141817] font-display text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-[#F3F4ED] transition-colors cursor-pointer"
              >
                <span>Continue to Personal Info</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: ENTER PERSONAL INFORMATION */}
        {currentStep === 4 && (
          <form
            data-testid="booking-step-4"
            onSubmit={handleAdvanceFromStep4}
            noValidate
            className="space-y-8"
          >
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B]">
                STEP 04 OF 06 · PERSONAL INFORMATION & GOALS
              </p>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide mt-1">
                Tell Us About Yourself
              </h2>
              <p className="text-sm text-[#F3F4ED]/75 mt-1">
                We use these details to prepare your locker keycard and assign the right coach for your trial session.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="trial-full-name"
                  className="block text-xs font-mono uppercase tracking-wider text-[#F3F4ED] mb-2"
                >
                  Full Name *
                </label>
                <input
                  id="trial-full-name"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Jordan Mercer"
                  className="w-full h-12 px-4 bg-[#F3F4ED]/5 border border-[#F3F4ED]/25 text-sm text-[#F3F4ED] focus:outline-none focus:border-[#B7D66B]"
                />
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-[#B7D66B] flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="trial-phone"
                  className="block text-xs font-mono uppercase tracking-wider text-[#F3F4ED] mb-2"
                >
                  Phone Number *
                </label>
                <input
                  id="trial-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +1 (212) 555-0188"
                  className="w-full h-12 px-4 bg-[#F3F4ED]/5 border border-[#F3F4ED]/25 text-sm text-[#F3F4ED] focus:outline-none focus:border-[#B7D66B]"
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-[#B7D66B] flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="trial-email"
                  className="block text-xs font-mono uppercase tracking-wider text-[#F3F4ED] mb-2"
                >
                  Email Address *
                </label>
                <input
                  id="trial-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. jordan@example.com"
                  className="w-full h-12 px-4 bg-[#F3F4ED]/5 border border-[#F3F4ED]/25 text-sm text-[#F3F4ED] focus:outline-none focus:border-[#B7D66B]"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-[#B7D66B] flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Fitness Goal */}
              <div>
                <label
                  htmlFor="trial-fitness-goal"
                  className="block text-xs font-mono uppercase tracking-wider text-[#F3F4ED] mb-2"
                >
                  Primary Fitness Goal *
                </label>
                <select
                  id="trial-fitness-goal"
                  required
                  value={fitnessGoal}
                  onChange={(e) => setFitnessGoal(e.target.value)}
                  className="w-full h-12 px-4 bg-[#141817] border border-[#F3F4ED]/25 text-sm text-[#F3F4ED] focus:outline-none focus:border-[#B7D66B]"
                >
                  <option value="">Select your primary fitness goal</option>
                  {FITNESS_GOALS.map((goal) => (
                    <option key={goal} value={goal}>
                      {goal}
                    </option>
                  ))}
                </select>
                {errors.fitnessGoal && (
                  <p className="mt-1.5 text-xs text-[#B7D66B] flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.fitnessGoal}</span>
                  </p>
                )}
              </div>

              {/* Preferred Training Time */}
              <div className="md:col-span-2">
                <label
                  htmlFor="trial-preferred-time"
                  className="block text-xs font-mono uppercase tracking-wider text-[#F3F4ED] mb-2"
                >
                  Usual Weekly Training Window *
                </label>
                <select
                  id="trial-preferred-time"
                  required
                  value={preferredTrainingTime}
                  onChange={(e) => setPreferredTrainingTime(e.target.value)}
                  className="w-full h-12 px-4 bg-[#141817] border border-[#F3F4ED]/25 text-sm text-[#F3F4ED] focus:outline-none focus:border-[#B7D66B]"
                >
                  <option value="">Select your usual training window</option>
                  {PREFERRED_TRAINING_TIMES.map((win) => (
                    <option key={win} value={win}>
                      {win}
                    </option>
                  ))}
                </select>
                {errors.preferredTrainingTime && (
                  <p className="mt-1.5 text-xs text-[#B7D66B] flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.preferredTrainingTime}</span>
                  </p>
                )}
              </div>

              {/* Optional Message */}
              <div className="md:col-span-2">
                <label
                  htmlFor="trial-message"
                  className="block text-xs font-mono uppercase tracking-wider text-[#F3F4ED] mb-2"
                >
                  Training Background or Injury Notes (Optional)
                </label>
                <textarea
                  id="trial-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share any prior lifting experience, sport background, or joint considerations for your coach..."
                  className="w-full p-4 bg-[#F3F4ED]/5 border border-[#F3F4ED]/25 text-sm text-[#F3F4ED] focus:outline-none focus:border-[#B7D66B]"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-[#F3F4ED]/12 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="px-6 py-3.5 border border-[#F3F4ED]/25 text-xs font-mono uppercase tracking-widest text-[#F3F4ED] inline-flex items-center gap-2 hover:border-[#B7D66B] cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Time Slot</span>
              </button>

              <button
                type="submit"
                className="px-8 py-4 bg-[#B7D66B] text-[#141817] font-display text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-[#F3F4ED] transition-colors cursor-pointer"
              >
                <span>Review Trial Booking</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 5: REVIEW DETAILS */}
        {currentStep === 5 && (
          <div data-testid="booking-step-5" className="space-y-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B7D66B]">
                STEP 05 OF 06 · REVIEW YOUR TRIAL RESERVATION
              </p>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide mt-1">
                Verify Your Trial Details
              </h2>
              <p className="text-sm text-[#F3F4ED]/75 mt-1">
                Please confirm your selected program, date, time slot, and personal details below before completing your demo reservation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-[#F3F4ED]/18 space-y-4">
                <div className="flex items-center justify-between border-b border-[#F3F4ED]/12 pb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#B7D66B]">
                    Session Selection
                  </span>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="text-xs font-mono underline text-[#F3F4ED]/70 hover:text-[#B7D66B] cursor-pointer"
                  >
                    Change Program/Time
                  </button>
                </div>
                <dl className="space-y-2.5 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#F3F4ED]/65">Selected Program:</dt>
                    <dd className="font-semibold text-[#F3F4ED]">
                      {selectedProgram.title}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#F3F4ED]/65">Preferred Date:</dt>
                    <dd className="font-mono text-[#B7D66B]">{selectedDate}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#F3F4ED]/65">Time Slot:</dt>
                    <dd className="font-mono text-[#F3F4ED]">
                      {selectedTimeSlot}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#F3F4ED]/65">Session Fee:</dt>
                    <dd className="font-mono text-[#B7D66B]">
                      $0.00 (Complimentary 60-Min Trial)
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="p-6 border border-[#F3F4ED]/18 space-y-4">
                <div className="flex items-center justify-between border-b border-[#F3F4ED]/12 pb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#B7D66B]">
                    Participant Profile
                  </span>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    className="text-xs font-mono underline text-[#F3F4ED]/70 hover:text-[#B7D66B] cursor-pointer"
                  >
                    Edit Details
                  </button>
                </div>
                <dl className="space-y-2.5 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#F3F4ED]/65">Full Name:</dt>
                    <dd className="font-semibold text-[#F3F4ED]">{fullName}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#F3F4ED]/65">Phone:</dt>
                    <dd className="font-mono text-[#F3F4ED]">{phone}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#F3F4ED]/65">Email:</dt>
                    <dd className="font-mono text-[#F3F4ED]">{email}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#F3F4ED]/65">Primary Goal:</dt>
                    <dd className="text-right text-[#F3F4ED]">{fitnessGoal}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#F3F4ED]/65">Usual Window:</dt>
                    <dd className="text-right text-[#F3F4ED]">
                      {preferredTrainingTime}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="p-4 border border-[#B7D66B]/40 bg-[#B7D66B]/5 text-xs font-mono text-[#F3F4ED]/80">
              DEMO FLOW NOTICE: Submitting this form demonstrates the complete 6-step client conversion experience. No real-world appointment or credit card charge is created.
            </div>

            <div className="pt-6 border-t border-[#F3F4ED]/12 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setCurrentStep(4)}
                className="px-6 py-3.5 border border-[#F3F4ED]/25 text-xs font-mono uppercase tracking-widest text-[#F3F4ED] inline-flex items-center gap-2 hover:border-[#B7D66B] cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Edit Info</span>
              </button>

              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleConfirmDemoBooking}
                className="px-8 py-4 bg-[#B7D66B] text-[#141817] font-display text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-[#F3F4ED] transition-colors cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing Reservation...</span>
                  </>
                ) : (
                  <>
                    <UserCheck className="w-4 h-4" />
                    <span>Confirm Free Trial Booking</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* STEP 6: CONFIRMATION */}
        {currentStep === 6 && (
          <div
            data-testid="booking-step-6-confirmed"
            className="p-6 sm:p-10 bg-[#F3F4ED] text-[#141817] space-y-6"
          >
            <div className="flex items-center gap-3 text-[#141817]">
              <CheckCircle2 className="w-8 h-8" />
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#141817]/70">
                  STEP 06 OF 06 · DEMO TRIAL RESERVATION COMPLETE
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wide">
                  Your Free Trial Pass Is Ready
                </h2>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#141817]/85 leading-relaxed max-w-2xl">
              Thank you, <strong>{fullName}</strong>. Your frontend demonstration trial booking for{' '}
              <strong>{selectedProgram.title}</strong> on{' '}
              <strong>{selectedDate}</strong> at <strong>{selectedTimeSlot}</strong> has been generated.
            </p>

            <div className="p-6 bg-[#141817] text-[#F3F4ED] grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <span className="block text-[11px] font-mono uppercase text-[#B7D66B]">
                  Demo Pass Reference
                </span>
                <span className="font-mono text-xl font-bold tabular-nums mt-1 block">
                  {bookingReference}
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase text-[#B7D66B]">
                  Assigned Program
                </span>
                <span className="font-display text-lg uppercase mt-1 block">
                  {selectedProgram.title}
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase text-[#B7D66B]">
                  Scheduled Slot
                </span>
                <span className="font-mono text-sm mt-1 block">
                  {selectedDate} · {selectedTimeSlot}
                </span>
              </div>
            </div>

            <p className="text-xs font-mono text-[#141817]/65">
              * Demonstration Notice: Because this website is an interactive showcase for fitness club presentation, no real-world booking has been dispatched to a backend server.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => {
                  setCurrentStep(1);
                  setFullName('');
                  setPhone('');
                  setEmail('');
                  setFitnessGoal('');
                  setPreferredTrainingTime('');
                  setMessage('');
                }}
                className="px-6 py-3 bg-[#141817] text-[#B7D66B] font-display text-xs font-bold uppercase tracking-widest cursor-pointer"
              >
                Book Another Demo Trial
              </button>
              <Link
                href="/membership"
                className="px-6 py-3 border border-[#141817] text-[#141817] font-display text-xs font-bold uppercase tracking-widest hover:bg-[#141817] hover:text-[#F3F4ED] transition-colors"
              >
                Explore Membership Plans
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
