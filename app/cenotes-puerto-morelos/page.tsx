import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cenotes in Puerto Morelos | Cenote Maravilla",
  description:
    "Discover cenotes in Puerto Morelos on the Ruta de los Cenotes. Plan swimming, nature and private cenote experiences at Cenote Maravilla.",
  alternates: {
    canonical: "/cenotes-puerto-morelos",
    languages: {
      en: "/cenotes-puerto-morelos",
      es: "/es/cenotes-puerto-morelos",
      "x-default": "/cenotes-puerto-morelos",
    },
  },
  openGraph: {
    title: "Cenotes in Puerto Morelos | Cenote Maravilla",
    description:
      "Discover cenotes in Puerto Morelos on the Ruta de los Cenotes. Plan swimming, nature and private cenote experiences at Cenote Maravilla.",
    url: "https://www.cenotemaravilla.online/cenotes-puerto-morelos",
    locale: "en_US",
    type: "website",
    siteName: "Cenote Maravilla",
    images: [
      {
        url: "https://www.cenotemaravilla.online/og-image.webp",
        alt: "Cenotes in Puerto Morelos, Cenote Maravilla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cenotes in Puerto Morelos | Cenote Maravilla",
    description:
      "Discover cenotes in Puerto Morelos on the Ruta de los Cenotes. Plan swimming, nature and private cenote experiences at Cenote Maravilla.",
    images: ["https://www.cenotemaravilla.online/og-image.webp"],
  },
};

export default function CenotesPuertoMorelosPage() {
  return (
    <main className="min-h-screen bg-white px-6 pb-16 pt-28 text-slate-900">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold md:text-5xl">Cenotes in Puerto Morelos</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Cenote Maravilla offers a natural cenote experience in Puerto Morelos, along the famous Ruta de los Cenotes.
          Enjoy crystal-clear freshwater swimming, jungle landscapes and curated nature moments in the Riviera Maya.
        </p>
        <h2 className="mt-10 text-2xl font-semibold">Why choose Cenote Maravilla</h2>
        <ul className="mt-4 list-disc pl-6 text-slate-600">
          <li>Natural cenote setting in Puerto Morelos</li>
          <li>Family, couple and group friendly experiences</li>
          <li>Close access from Cancun and Playa del Carmen</li>
        </ul>
        <div className="mt-10">
          <Link href="/#contact" className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white">
            Plan your visit
          </Link>
        </div>
      </div>
    </main>
  );
}
