import type { Metadata } from "next";
import HabitacionesPage from "../../habitaciones/page";

export const metadata: Metadata = {
  title: "Galería de Habitaciones | Cenote Maravilla",
  description:
    "Explora la galería de habitaciones de Cenote Maravilla en Puerto Morelos. Revisa fotos de alojamientos disponibles cerca de la Ruta de los Cenotes.",
  alternates: {
    canonical: "/es/habitaciones",
    languages: {
      en: "/habitaciones",
      es: "/es/habitaciones",
      "x-default": "/habitaciones",
    },
  },
  openGraph: {
    title: "Galería de Habitaciones | Cenote Maravilla",
    description:
      "Explora la galería de habitaciones de Cenote Maravilla en Puerto Morelos. Revisa fotos de alojamientos disponibles cerca de la Ruta de los Cenotes.",
    url: "https://www.cenotemaravilla.online/es/habitaciones",
    locale: "es_MX",
    type: "website",
    siteName: "Cenote Maravilla",
    images: [
      {
        url: "https://www.cenotemaravilla.online/og-image.webp",
        alt: "Galería de habitaciones en Cenote Maravilla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galería de Habitaciones | Cenote Maravilla",
    description:
      "Explora la galería de habitaciones de Cenote Maravilla en Puerto Morelos. Revisa fotos de alojamientos disponibles cerca de la Ruta de los Cenotes.",
    images: ["https://www.cenotemaravilla.online/og-image.webp"],
  },
};

export default function HabitacionesEsPage() {
  return <HabitacionesPage />;
}
