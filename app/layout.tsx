import type { Metadata } from "next";
import { LanguageProvider } from "../src/components/LanguageProvider";
import "./globals.css";

const seoTitle = "Cenote Maravilla | Puerto Morelos Cenote & Jungle Experiences";
const seoDescription =
  "Discover Cenote Maravilla in Puerto Morelos, Mexico. Swim in crystal-clear cenotes, explore the Ruta de los Cenotes, enjoy horseback riding, jungle experiences and private tours in the Riviera Maya.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cenotemaravilla.online"),
  title: seoTitle,
  description: seoDescription,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: "https://www.cenotemaravilla.online/",
    type: "website",
    siteName: "Cenote Maravilla",
    locale: "en_US",
    images: [
      {
        url: "https://www.cenotemaravilla.online/og-image.jpg",
        alt: "Cenote Maravilla in Puerto Morelos, Riviera Maya, Mexico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: ["https://www.cenotemaravilla.online/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
