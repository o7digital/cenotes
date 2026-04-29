import type { Metadata } from "next";
import { LanguageProvider } from "../src/components/LanguageProvider";
import "./globals.css";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cenote Maravilla",
  image: "https://www.cenotemaravilla.online/og-image.webp",
  url: "https://www.cenotemaravilla.online/",
  description:
    "Cenote Maravilla en Puerto Morelos, Quintana Roo. Cenotes, caballos y experiencias en la Ruta de los Cenotes, Riviera Maya.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Puerto Morelos",
    addressRegion: "Quintana Roo",
    addressCountry: "MX",
  },
  areaServed: [
    "Puerto Morelos",
    "Ruta de los Cenotes",
    "Riviera Maya",
    "Quintana Roo",
  ],
  knowsAbout: [
    "cenotes en Puerto Morelos",
    "Ruta de los Cenotes",
    "caballos en Puerto Morelos",
    "experiencias en la selva",
    "Riviera Maya",
    "cenote in Puerto Morelos",
    "cenote tour Puerto Morelos",
    "horseback riding Puerto Morelos",
    "jungle tour Puerto Morelos",
    "cenotes near Cancun",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cenotemaravilla.online"),
  title: {
    default: "Cenote Maravilla",
    template: "%s | Cenote Maravilla",
  },
  description:
    "Discover Cenote Maravilla in Puerto Morelos, Mexico. Swim in crystal-clear cenotes, explore the Ruta de los Cenotes, enjoy horseback riding, jungle experiences and private tours in the Riviera Maya.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Cenote Maravilla",
    description:
      "Discover Cenote Maravilla in Puerto Morelos, Mexico. Swim in crystal-clear cenotes, explore the Ruta de los Cenotes, enjoy horseback riding, jungle experiences and private tours in the Riviera Maya.",
    url: "https://www.cenotemaravilla.online/",
    type: "website",
    siteName: "Cenote Maravilla",
    locale: "en_US",
    images: [
      {
        url: "https://www.cenotemaravilla.online/og-image.webp",
        alt: "Cenote Maravilla in Puerto Morelos, Riviera Maya, Mexico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cenote Maravilla",
    description:
      "Discover Cenote Maravilla in Puerto Morelos, Mexico. Swim in crystal-clear cenotes, explore the Ruta de los Cenotes, enjoy horseback riding, jungle experiences and private tours in the Riviera Maya.",
    images: ["https://www.cenotemaravilla.online/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
