import type { Metadata } from "next";
import { Playfair_Display_SC, Montserrat } from "next/font/google";
import Script from "next/script";
import FloatingButtons from "../src/app/components/FloatingButtons";
import ScrollReveal from "../src/app/components/ScrollReveal";
import "./globals.css";

const playfairSC = Playfair_Display_SC({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bespokebypelican.com'),
  title: "Bespoke By Pelican | Luxury Custom Furniture",
  description: "Bespoke by Pelican crafts premium custom furniture solutions designed to your requirement. Thoughtfully crafted, exceptionally yours. Based in Bengaluru, India.",
  keywords: "bespoke furniture, custom furniture, luxury furniture, furniture design, Bengaluru furniture, custom sofa, interior design",
  alternates: {
    canonical: 'https://bespokebypelican.com',
  },
  openGraph: {
    title: "Bespoke By Pelican | Luxury Custom Furniture",
    description: "Premium custom furniture solutions designed to your requirement.",
    url: "https://bespokebypelican.com",
    siteName: "Bespoke By Pelican",
    type: "website",
    locale: 'en_IN',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke By Pelican | Luxury Custom Furniture",
    description: "Premium custom furniture solutions designed to your requirement.",
    site: '@bespokebypelican',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/bird-favicon.png',
    apple: '/bird-favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairSC.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZX2LGDNF1X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZX2LGDNF1X');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FurnitureStore',
              name: 'Bespoke By Pelican',
              url: 'https://bespokebypelican.com',
              logo: 'https://bespokebypelican.com/bird-favicon.png',
              image: 'https://bespokebypelican.com/og-image.jpg',
              description: 'Premium custom furniture crafted in Bengaluru',
              telephone: '+917505234884',
              email: 'bespokebypelican@gmail.com',
              priceRange: '₹₹₹',
              address: [
                {
                  '@type': 'PostalAddress',
                  streetAddress: 'Kudlu Main Rd, Hosapalaya',
                  addressLocality: 'Bengaluru',
                  addressRegion: 'Karnataka',
                  postalCode: '560068',
                  addressCountry: 'IN',
                },
                {
                  '@type': 'PostalAddress',
                  streetAddress: 'C.K. Plaza, Gangappa Block, Bellary Rd, Gangenahalli',
                  addressLocality: 'Bengaluru',
                  addressRegion: 'Karnataka',
                  postalCode: '560006',
                  addressCountry: 'IN',
                },
              ],
              sameAs: ['https://www.instagram.com/bespokebypelican'],
            }),
          }}
        />
        <ScrollReveal />
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
