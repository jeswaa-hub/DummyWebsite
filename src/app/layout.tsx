import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MIOYM | Premium Real Estate Investment & Private Equity",
  description: "High-yield real estate investment and private equity solutions. Building wealth through strategic investments in multifamily, commercial, and single-family properties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}