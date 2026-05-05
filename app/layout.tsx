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
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Bespoke By Pelican | Luxury Custom Furniture",
  description: "Bespoke by Pelican crafts premium custom furniture solutions designed to your requirement. Thoughtfully crafted, exceptionally yours. Based in Bengaluru, India.",
  keywords: "bespoke furniture, custom furniture, luxury furniture, furniture design, Bengaluru furniture, custom sofa, interior design",
  openGraph: {
    title: "Bespoke By Pelican | Luxury Custom Furniture",
    description: "Premium custom furniture solutions designed to your requirement.",
    url: "https://bespokebypelican.com",
    siteName: "Bespoke By Pelican",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke By Pelican | Luxury Custom Furniture",
    description: "Premium custom furniture solutions designed to your requirement.",
  },
  icons: {
    icon: '/bird-favicon.png',
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
        <ScrollReveal />
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
