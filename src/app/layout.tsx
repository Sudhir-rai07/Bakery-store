import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OfferCard from "@/components/global/offer-card";
import Navbar from "@/components/global/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bakery Store",
  description: "Super cool bakery store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-[#351411] bg-[#f4eae8] max-w-[1300px] w-full mx-auto`}
      >
        <OfferCard />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
