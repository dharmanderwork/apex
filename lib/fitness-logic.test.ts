import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateMembershipPrice,
  filterPrograms,
  getNextLightboxIndex,
  getPrevLightboxIndex,
  validatePersonalDetails,
  validateContactForm,
  generateDemoBookingReference,
} from './fitness-logic';

test('calculateMembershipPrice computes accurate monthly and annual pricing with savings', () => {
  const monthlyPerf = calculateMembershipPrice('performance', 'monthly');
  assert.equal(monthlyPerf.monthlyEquivalent, 220);
  assert.equal(monthlyPerf.totalBilled, 220);
  assert.equal(monthlyPerf.savingsPercent, 0);
  assert.equal(monthlyPerf.savingsAmount, 0);

  const annualPerf = calculateMembershipPrice('performance', 'annual');
  assert.equal(annualPerf.monthlyEquivalent, 176);
  assert.equal(annualPerf.totalBilled, 176 * 12);
  assert.equal(annualPerf.savingsPercent, 20);
  assert.equal(annualPerf.savingsAmount, (220 - 176) * 12);
});

test('filterPrograms filters by category and search query accurately', () => {
  const sample = [
    {
      slug: 'strength-training',
      title: 'Strength Training',
      category: 'Strength',
      shortDescription: 'Barbell compound lifts and force production.',
      idealParticipant: 'Lifters seeking maximal strength',
      keyFocusAreas: ['Powerlifting', 'Force Output'],
    },
    {
      slug: 'cardio-endurance',
      title: 'Cardio and Endurance',
      category: 'Conditioning',
      shortDescription: 'Aerobic capacity and VO2 max intervals.',
      idealParticipant: 'Endurance athletes',
      keyFocusAreas: ['VO2 Max', 'Stamina'],
    },
  ];

  assert.equal(filterPrograms(sample, 'All').length, 2);
  assert.equal(filterPrograms(sample, 'Strength').length, 1);
  assert.equal(filterPrograms(sample, 'Strength')[0].slug, 'strength-training');
  assert.equal(filterPrograms(sample, 'All', 'VO2').length, 1);
  assert.equal(filterPrograms(sample, 'All', 'VO2')[0].slug, 'cardio-endurance');
  assert.equal(filterPrograms(sample, 'Strength', 'VO2').length, 0);
});

test('lightbox index helpers wrap around safely', () => {
  assert.equal(getNextLightboxIndex(0, 5), 1);
  assert.equal(getNextLightboxIndex(4, 5), 0);
  assert.equal(getPrevLightboxIndex(0, 5), 4);
  assert.equal(getPrevLightboxIndex(2, 5), 1);
});

test('validatePersonalDetails rejects empty fields and accepts valid trial inputs', () => {
  const emptyResult = validatePersonalDetails({
    fullName: '',
    phone: '123',
    email: 'invalid-email',
    fitnessGoal: '',
    preferredTrainingTime: '',
  });
  assert.equal(emptyResult.valid, false);
  assert.ok(emptyResult.errors.fullName);
  assert.ok(emptyResult.errors.phone);
  assert.ok(emptyResult.errors.email);
  assert.ok(emptyResult.errors.fitnessGoal);
  assert.ok(emptyResult.errors.preferredTrainingTime);

  const validResult = validatePersonalDetails({
    fullName: 'Marcus Vance',
    phone: '+1 (555) 234-5678',
    email: 'marcus.vance@example.com',
    fitnessGoal: 'Strength & Hypertrophy',
    preferredTrainingTime: 'Morning (06:00 - 10:00)',
  });
  assert.equal(validResult.valid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('validateContactForm enforces all required contact fields', () => {
  const invalid = validateContactForm({
    fullName: 'A',
    email: 'bad',
    phone: '12',
    subject: '',
    message: 'Too short',
  });
  assert.equal(invalid.valid, false);

  const valid = validateContactForm({
    fullName: 'Elena Rostova',
    email: 'elena@example.com',
    phone: '+44 20 7946 0921',
    subject: 'Membership Enquiry',
    message: 'I would like to arrange a private tour of the strength floor.',
  });
  assert.equal(valid.valid, true);
});

test('generateDemoBookingReference produces deterministic demo booking ID', () => {
  const ref = generateDemoBookingReference('strength-training', '2026-11-18');
  assert.equal(ref, 'APX-DEMO-STR-1118');
});
