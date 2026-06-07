import type { Metadata } from "next";
import HabitacionesPage from "../../habitaciones/page";

export const metadata: Metadata = {
  title: "Hospedaje | Cenote Maravilla",
  description:
    "Descubre el hospedaje de Cenote Maravilla en Puerto Morelos. Departamento amueblado, habitaciones personalizadas y alojamiento en la selva cerca de la Ruta de los Cenotes.",
  alternates: {
    canonical: "/es/habitaciones",
    languages: {
      en: "/habitaciones",
      es: "/es/habitaciones",
      "x-default": "/habitaciones",
    },
  },
  openGraph: {
    title: "Hospedaje | Cenote Maravilla",
    description:
      "Descubre el hospedaje de Cenote Maravilla en Puerto Morelos. Departamento amueblado, habitaciones personalizadas y alojamiento en la selva cerca de la Ruta de los Cenotes.",
    url: "https://www.cenotemaravilla.online/es/habitaciones",
    locale: "es_MX",
    type: "website",
    siteName: "Cenote Maravilla",
    images: [
      {
        url: "https://www.cenotemaravilla.online/og-image.webp",
        alt: "Hospedaje en Cenote Maravilla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospedaje | Cenote Maravilla",
    description:
      "Descubre el hospedaje de Cenote Maravilla en Puerto Morelos. Departamento amueblado, habitaciones personalizadas y alojamiento en la selva cerca de la Ruta de los Cenotes.",
    images: ["https://www.cenotemaravilla.online/og-image.webp"],
  },
};

export default function HabitacionesEsPage() {
  return <HabitacionesPage />;
}
