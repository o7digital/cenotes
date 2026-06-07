import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lodging | Cenote Maravilla",
  description:
    "Discover lodging at Cenote Maravilla in Puerto Morelos. Furnished apartment, personalized rooms and jungle accommodations near the Ruta de los Cenotes.",
  alternates: {
    canonical: "/habitaciones",
    languages: {
      en: "/habitaciones",
      es: "/es/habitaciones",
      "x-default": "/habitaciones",
    },
  },
  openGraph: {
    title: "Lodging | Cenote Maravilla",
    description:
      "Discover lodging at Cenote Maravilla in Puerto Morelos. Furnished apartment, personalized rooms and jungle accommodations near the Ruta de los Cenotes.",
    url: "https://www.cenotemaravilla.online/habitaciones",
    locale: "en_US",
    type: "website",
    siteName: "Cenote Maravilla",
    images: [
      {
        url: "https://www.cenotemaravilla.online/og-image.webp",
        alt: "Lodging at Cenote Maravilla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lodging | Cenote Maravilla",
    description:
      "Discover lodging at Cenote Maravilla in Puerto Morelos. Furnished apartment, personalized rooms and jungle accommodations near the Ruta de los Cenotes.",
    images: ["https://www.cenotemaravilla.online/og-image.webp"],
  },
};

export default function HabitacionesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
