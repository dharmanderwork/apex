export type BillingCycle = 'monthly' | 'quarterly' | 'half-yearly' | 'annual';
export type MembershipTierId = 'essential' | 'performance' | 'elite';

export interface MembershipPricingResult {
  tierId: MembershipTierId;
  billingCycle: BillingCycle;
  monthlyEquivalent: number;
  totalBilled: number;
  monthsCount: number;
  savingsPercent: number;
  savingsAmount: number;
  billingLabel: string;
}

export const BASE_MONTHLY_RATES: Record<MembershipTierId, number> = {
  essential: 140,
  performance: 220,
  elite: 360,
};

export const CYCLE_CONFIG: Record<
  BillingCycle,
  { months: number; discount: number; label: string; badgeText: string }
> = {
  monthly: {
    months: 1,
    discount: 0,
    label: 'Billed monthly · Flexible 30-day notice',
    badgeText: 'Flexible',
  },
  quarterly: {
    months: 3,
    discount: 0.08,
    label: 'Billed every 3 months · Save 8%',
    badgeText: 'Save 8%',
  },
  'half-yearly': {
    months: 6,
    discount: 0.14,
    label: 'Billed every 6 months · Save 14%',
    badgeText: 'Save 14%',
  },
  annual: {
    months: 12,
    discount: 0.2,
    label: 'Billed annually · Save 20%',
    badgeText: 'Save 20%',
  },
};

export function calculateMembershipPrice(
  tierId: MembershipTierId,
  billingCycle: BillingCycle
): MembershipPricingResult {
  const baseMonthly = BASE_MONTHLY_RATES[tierId];
  const cycle = CYCLE_CONFIG[billingCycle];
  const discountedMonthly = Math.round(baseMonthly * (1 - cycle.discount));
  const totalBilled = discountedMonthly * cycle.months;
  const fullPriceTotal = baseMonthly * cycle.months;
  const savingsAmount = fullPriceTotal - totalBilled;
  const savingsPercent = Math.round(cycle.discount * 100);

  return {
    tierId,
    billingCycle,
    monthlyEquivalent: discountedMonthly,
    totalBilled,
    monthsCount: cycle.months,
    savingsPercent,
    savingsAmount,
    billingLabel: cycle.label,
  };
}

export interface FilterableProgram {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  idealParticipant: string;
  keyFocusAreas: string[];
}

export function filterPrograms<T extends FilterableProgram>(
  programs: T[],
  category: string,
  searchQuery = ''
): T[] {
  const normalizedCategory = category.trim().toLowerCase();
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return programs.filter((program) => {
    const matchesCategory =
      !normalizedCategory ||
      normalizedCategory === 'all' ||
      program.category.toLowerCase() === normalizedCategory;

    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;

    const searchableText = [
      program.title,
      program.category,
      program.shortDescription,
      program.idealParticipant,
      ...program.keyFocusAreas,
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

export function getNextLightboxIndex(currentIndex: number, totalLength: number): number {
  if (totalLength <= 0) return 0;
  return (currentIndex + 1) % totalLength;
}

export function getPrevLightboxIndex(currentIndex: number, totalLength: number): number {
  if (totalLength <= 0) return 0;
  return (currentIndex - 1 + totalLength) % totalLength;
}

export interface TrialPersonalDetails {
  fullName: string;
  phone: string;
  email: string;
  fitnessGoal: string;
  preferredTrainingTime: string;
  message?: string;
}

export interface ValidationErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  fitnessGoal?: string;
  preferredTrainingTime?: string;
  programSlug?: string;
  selectedDate?: string;
  selectedTimeSlot?: string;
}

export function validatePersonalDetails(details: TrialPersonalDetails): {
  valid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};
  const name = details.fullName.trim();
  const phone = details.phone.trim();
  const email = details.email.trim();
  const goal = details.fitnessGoal.trim();
  const prefTime = details.preferredTrainingTime.trim();

  if (name.length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters).';
  }

  // Allow digits, spaces, +, -, () with at least 7 digits
  const digitsOnly = phone.replace(/\D/g, '');
  if (!phone || digitsOnly.length < 7 || digitsOnly.length > 15) {
    errors.phone = 'Please enter a valid phone number (7 to 15 digits).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!goal) {
    errors.fitnessGoal = 'Please select your primary fitness goal.';
  }

  if (!prefTime) {
    errors.preferredTrainingTime = 'Please select your preferred training window.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface ContactFormInput {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function validateContactForm(input: ContactFormInput): {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormInput, string>>;
} {
  const errors: Partial<Record<keyof ContactFormInput, string>> = {};

  if (input.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(input.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  const digitsOnly = input.phone.replace(/\D/g, '');
  if (digitsOnly.length < 7 || digitsOnly.length > 15) {
    errors.phone = 'Please enter a valid contact phone number.';
  }

  if (!input.subject.trim()) {
    errors.subject = 'Please select an enquiry topic.';
  }

  if (input.message.trim().length < 10) {
    errors.message = 'Please enter a message of at least 10 characters.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function generateDemoBookingReference(programSlug: string, dateStr: string): string {
  const prefix = (programSlug || 'APX')
    .replace(/[^a-zA-Z]/g, '')
    .slice(0, 3)
    .toUpperCase()
    .padEnd(3, 'X');
  const dateCompact = (dateStr || '20261115').replace(/\D/g, '').slice(-4) || '1115';
  return `APX-DEMO-${prefix}-${dateCompact}`;
}
