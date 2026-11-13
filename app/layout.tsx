import type { Metadata } from 'next';
import { Oswald, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import { BRAND_INFO } from '@/lib/site-data';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'APEX FITNESS CLUB — Build Your Stronger Self',
    template: '%s | APEX FITNESS CLUB',
  },
  description:
    'Premium strength training, personal coaching, functional conditioning, and athletic transformation club. Explore facilities, programs, trainers, and membership plans.',
  openGraph: {
    title: 'APEX FITNESS CLUB — Build Your Stronger Self',
    description:
      'Train with purpose. Move with confidence. Become your strongest at APEX Fitness Club.',
    siteName: 'APEX FITNESS CLUB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APEX FITNESS CLUB — Build Your Stronger Self',
    description:
      'Premium strength training, personal coaching, functional conditioning, and athletic transformation club.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ExerciseGym',
    name: BRAND_INFO.name,
    slogan: BRAND_INFO.tagline,
    description: BRAND_INFO.description,
    telephone: BRAND_INFO.contact.phone,
    email: BRAND_INFO.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '480 Mercer Street, Ironworks District, Suite 100 (Demo)',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10013',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '05:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '06:30',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '07:00',
        closes: '20:00',
      },
    ],
    priceRange: '$$$',
  };

  return (
    <html
      lang="en"
      className={`${oswald.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#141817] text-[#F3F4ED] font-sans antialiased selection:bg-[#B7D66B] selection:text-[#141817] overflow-x-hidden"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
