import type { Metadata } from "next";
import PuertoMorelosCenotesTemplate from "../../src/PuertoMorelosCenotesTemplate";

export const metadata: Metadata = {
  title: "Cenote Maravilla Puerto Morelos | Ruta de los Cenotes",
  description:
    "Descubre Cenote Maravilla en Puerto Morelos, Quintana Roo. Nado en cenote, caballos, selva y experiencias privadas en la Ruta de los Cenotes, Riviera Maya.",
  keywords: [
    "cenote en Puerto Morelos",
    "cenotes en Puerto Morelos",
    "Cenote Maravilla Puerto Morelos",
    "ruta de los cenotes Puerto Morelos",
    "mejores cenotes en Puerto Morelos",
    "cenote para nadar en Puerto Morelos",
    "cenote con agua cristalina Puerto Morelos",
    "tour cenotes Puerto Morelos",
    "tour privado cenote Puerto Morelos",
    "paseo a caballo Puerto Morelos",
    "paseo a caballo en la selva Puerto Morelos",
    "tour cenote y caballos Puerto Morelos",
    "experiencia de selva Puerto Morelos",
    "cenotes cerca de Cancun",
    "cenotes Riviera Maya",
    "mejores cenotes Riviera Maya",
    "que hacer en Puerto Morelos",
    "actividades en Puerto Morelos",
    "tour cenotes Cancun",
    "experiencias naturales Riviera Maya",
  ],
  alternates: {
    canonical: "/es/",
    languages: {
      en: "/",
      es: "/es/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Cenote Maravilla Puerto Morelos | Ruta de los Cenotes",
    description:
      "Descubre Cenote Maravilla en Puerto Morelos, Quintana Roo. Nado en cenote, caballos, selva y experiencias privadas en la Ruta de los Cenotes, Riviera Maya.",
    url: "https://www.cenotemaravilla.online/es/",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "https://www.cenotemaravilla.online/og-image.webp",
        alt: "Cenote Maravilla en Puerto Morelos, Riviera Maya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cenote Maravilla Puerto Morelos | Ruta de los Cenotes",
    description:
      "Descubre Cenote Maravilla en Puerto Morelos, Quintana Roo. Nado en cenote, caballos, selva y experiencias privadas en la Ruta de los Cenotes, Riviera Maya.",
    images: ["https://www.cenotemaravilla.online/og-image.webp"],
  },
};

export default function SpanishPage() {
  return <PuertoMorelosCenotesTemplate />;
}
