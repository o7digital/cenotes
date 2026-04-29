import type { Metadata } from "next";
import PuertoMorelosCenotesTemplate from "../src/PuertoMorelosCenotesTemplate";

export const metadata: Metadata = {
  title: "Cenote Maravilla Puerto Morelos | Ruta de los Cenotes",
  description:
    "Descubre Cenote Maravilla en Puerto Morelos, Quintana Roo. Nado en cenote, caballos, selva y experiencias privadas en la Ruta de los Cenotes, Riviera Maya.",
  keywords: [
    "Cenote Maravilla",
    "Puerto Morelos",
    "Ruta de los Cenotes",
    "cenote Puerto Morelos",
    "cenotes Puerto Morelos",
    "caballos Puerto Morelos",
    "Riviera Maya",
    "Quintana Roo",
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
    title: "Cenote Maravilla Puerto Morelos | Ruta de los Cenotes",
    description:
      "Descubre Cenote Maravilla en Puerto Morelos, Quintana Roo. Nado en cenote, caballos, selva y experiencias privadas en la Ruta de los Cenotes, Riviera Maya.",
    url: "https://www.cenotemaravilla.online/",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    title: "Cenote Maravilla Puerto Morelos | Ruta de los Cenotes",
    description:
      "Descubre Cenote Maravilla en Puerto Morelos, Quintana Roo. Nado en cenote, caballos, selva y experiencias privadas en la Ruta de los Cenotes, Riviera Maya.",
  },
};

export default function Page() {
  return <PuertoMorelosCenotesTemplate />;
}
