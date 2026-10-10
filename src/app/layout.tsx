import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import GlobalProvider from "@/providers/global-provider";
import LenisProvider from "@/providers/lenis-provider";

import "@/styles/globals.css";
import "@/styles/includes.css";

export const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal"],
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
});
export const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "TechSaws | Business Systems & Engineering",
  description: "AI automation, software engineering, revenue systems, and cybersecurity services built around your business goals.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full w-full flex flex-col"
      >
        <GlobalProvider>
          <LenisProvider>{children}</LenisProvider>
        </GlobalProvider>
      </body>
    </html>
  );
}

