import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tour cenote y caballos | Puerto Morelos",
  description:
    "Reserva un tour de cenote y caballos en Puerto Morelos. Combina nado en cenote, senderos de selva y experiencias privadas en Riviera Maya.",
  alternates: {
    canonical: "/es/tour-cenote-caballos",
    languages: {
      en: "/tour-cenote-caballos",
      es: "/es/tour-cenote-caballos",
      "x-default": "/tour-cenote-caballos",
    },
  },
  openGraph: {
    title: "Tour cenote y caballos | Puerto Morelos",
    description:
      "Reserva un tour de cenote y caballos en Puerto Morelos. Combina nado en cenote, senderos de selva y experiencias privadas en Riviera Maya.",
    url: "https://www.cenotemaravilla.online/es/tour-cenote-caballos",
    locale: "es_MX",
    type: "website",
    siteName: "Cenote Maravilla",
    images: [
      {
        url: "https://www.cenotemaravilla.online/og-image.webp",
        alt: "Tour cenote y caballos en Puerto Morelos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tour cenote y caballos | Puerto Morelos",
    description:
      "Reserva un tour de cenote y caballos en Puerto Morelos. Combina nado en cenote, senderos de selva y experiencias privadas en Riviera Maya.",
    images: ["https://www.cenotemaravilla.online/og-image.webp"],
  },
};

export default function TourCenoteCaballosEsPage() {
  return (
    <main className="min-h-screen bg-white px-6 pb-16 pt-28 text-slate-900">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold md:text-5xl">Tour cenote y caballos</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Vive Puerto Morelos con un plan combinado de cenote y paseo a caballo. Nada en agua cristalina y disfruta
          un recorrido guiado por senderos de selva en un entorno natural.
        </p>
        <h2 className="mt-10 text-2xl font-semibold">Experiencia incluida</h2>
        <ul className="mt-4 list-disc pl-6 text-slate-600">
          <li>Nado en cenote de agua dulce</li>
          <li>Ruta guiada a caballo</li>
          <li>Opciones privadas para parejas, familias y grupos</li>
        </ul>
        <div className="mt-10">
          <Link href="/#contact" className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white">
            Reservar tour
          </Link>
        </div>
      </div>
    </main>
  );
}
