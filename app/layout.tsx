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
  title: "Bespoke By Pelican",
  description: "Thoughtfully crafted. Exceptionally yours.",
  icons: [
    { rel: 'icon', url: '/Bespoke__6_.png', type: 'image/png' },
    { rel: 'shortcut icon', url: '/Bespoke__6_.png', type: 'image/png' },
    { rel: 'apple-touch-icon', url: '/Bespoke__6_.png' },
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
