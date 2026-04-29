import type { Metadata } from "next";
import PuertoMorelosCenotesTemplate from "../src/PuertoMorelosCenotesTemplate";

export const metadata: Metadata = {
  title: "Cenote Maravilla | Puerto Morelos Cenote & Jungle Experiences",
  description:
    "Discover Cenote Maravilla in Puerto Morelos, Mexico. Swim in crystal-clear cenotes, explore the Ruta de los Cenotes, enjoy horseback riding, jungle experiences and private tours in the Riviera Maya.",
  keywords: [
    "Puerto Morelos cenote",
    "cenote in Puerto Morelos",
    "cenotes in Puerto Morelos",
    "Cenote Maravilla Puerto Morelos",
    "Ruta de los Cenotes Puerto Morelos",
    "best cenotes in Puerto Morelos",
    "natural cenote Puerto Morelos",
    "crystal clear cenote Puerto Morelos",
    "cenote swimming Puerto Morelos",
    "Puerto Morelos cenote tour",
    "private cenote tour Puerto Morelos",
    "horseback riding Puerto Morelos",
    "horseback riding cenote Puerto Morelos",
    "jungle horseback riding Puerto Morelos",
    "Puerto Morelos jungle tour",
    "cenotes near Cancun",
    "best cenotes Riviera Maya",
    "Riviera Maya cenote tour",
    "things to do in Puerto Morelos",
    "Mexico cenote tours",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Cenote Maravilla | Puerto Morelos Cenote & Jungle Experiences",
    description:
      "Discover Cenote Maravilla in Puerto Morelos, Mexico. Swim in crystal-clear cenotes, explore the Ruta de los Cenotes, enjoy horseback riding, jungle experiences and private tours in the Riviera Maya.",
    url: "https://www.cenotemaravilla.online/",
    locale: "en_US",
    type: "website",
    siteName: "Cenote Maravilla",
    images: [
      {
        url: "https://www.cenotemaravilla.online/og-image.webp",
        alt: "Cenote Maravilla en Puerto Morelos, Riviera Maya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cenote Maravilla | Puerto Morelos Cenote & Jungle Experiences",
    description:
      "Discover Cenote Maravilla in Puerto Morelos, Mexico. Swim in crystal-clear cenotes, explore the Ruta de los Cenotes, enjoy horseback riding, jungle experiences and private tours in the Riviera Maya.",
    images: ["https://www.cenotemaravilla.online/og-image.webp"],
  },
};

export default function Page() {
  return <PuertoMorelosCenotesTemplate />;
}
