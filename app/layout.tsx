import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  icons: [
    { rel: 'icon', url: '/bird-favicon.png', type: 'image/png' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
