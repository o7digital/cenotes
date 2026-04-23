import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Cenotes Puerto Morelos",
  description: "Cenotes, habitaciones y experiencias en Puerto Morelos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-[var(--font-manrope)] antialiased">{children}</body>
    </html>
  );
}
