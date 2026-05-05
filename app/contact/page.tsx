import type { Metadata } from 'next';
import ContactPageClient from '../../src/app/components/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us | Bespoke By Pelican',
  description: 'Visit our showrooms in Kudlu and Mekhri Circle, Bengaluru. Contact Bespoke By Pelican for custom furniture enquiries and consultations.',
  keywords: 'furniture showroom Bengaluru, contact bespoke furniture, furniture store Kudlu, furniture store Mekhri Circle',
  alternates: { canonical: 'https://bespokebypelican.com/contact' },
};

export default function Page() {
  return <ContactPageClient />;
}
