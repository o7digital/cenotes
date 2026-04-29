import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cenote and Horse Riding Tour | Puerto Morelos",
  description:
    "Book a cenote and horseback riding tour in Puerto Morelos. Combine freshwater swimming, jungle trails and private nature experiences in the Riviera Maya.",
  alternates: {
    canonical: "/tour-cenote-caballos",
    languages: {
      en: "/tour-cenote-caballos",
      es: "/es/tour-cenote-caballos",
      "x-default": "/tour-cenote-caballos",
    },
  },
  openGraph: {
    title: "Cenote and Horse Riding Tour | Puerto Morelos",
    description:
      "Book a cenote and horseback riding tour in Puerto Morelos. Combine freshwater swimming, jungle trails and private nature experiences in the Riviera Maya.",
    url: "https://www.cenotemaravilla.online/tour-cenote-caballos",
    locale: "en_US",
    type: "website",
    siteName: "Cenote Maravilla",
    images: [
      {
        url: "https://www.cenotemaravilla.online/og-image.webp",
        alt: "Cenote and horse riding tour in Puerto Morelos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cenote and Horse Riding Tour | Puerto Morelos",
    description:
      "Book a cenote and horseback riding tour in Puerto Morelos. Combine freshwater swimming, jungle trails and private nature experiences in the Riviera Maya.",
    images: ["https://www.cenotemaravilla.online/og-image.webp"],
  },
};

export default function TourCenoteCaballosPage() {
  return (
    <main className="min-h-screen bg-white px-6 pb-16 pt-28 text-slate-900">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold md:text-5xl">Cenote and Horse Riding Tour</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Experience Puerto Morelos with a combined cenote and horseback riding plan. Swim in crystal-clear cenote
          water, then enjoy guided jungle paths in a calm natural setting.
        </p>
        <h2 className="mt-10 text-2xl font-semibold">Included experience</h2>
        <ul className="mt-4 list-disc pl-6 text-slate-600">
          <li>Freshwater cenote swimming</li>
          <li>Guided horseback riding route</li>
          <li>Private options for couples, families and groups</li>
        </ul>
        <div className="mt-10">
          <Link href="/#contact" className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white">
            Book tour
          </Link>
        </div>
      </div>
    </main>
  );
}
