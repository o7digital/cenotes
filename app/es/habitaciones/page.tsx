import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Galería de Habitaciones | Cenote Maravilla",
  description:
    "Explora la galería de habitaciones de Cenote Maravilla en Puerto Morelos. Revisa fotos de alojamientos disponibles cerca de la Ruta de los Cenotes.",
  alternates: {
    canonical: "/habitaciones",
    languages: {
      en: "/habitaciones",
      es: "/es/habitaciones",
      "x-default": "/habitaciones",
    },
  },
};

export default function HabitacionesEsPage() {
  redirect("/habitaciones");
}
