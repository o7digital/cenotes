import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reservar Visita | Cenote Maravilla",
  description:
    "Reserva tu visita a Cenote Maravilla en Puerto Morelos. Tours de cenote, paseo a caballo y experiencias privadas en la Ruta de los Cenotes.",
  alternates: {
    canonical: "/reservar",
    languages: {
      es: "/reservar",
      "x-default": "/reservar",
    },
  },
  openGraph: {
    title: "Reservar Visita | Cenote Maravilla",
    description:
      "Reserva tu visita a Cenote Maravilla en Puerto Morelos. Tours de cenote, paseo a caballo y experiencias privadas en la Ruta de los Cenotes.",
    url: "https://www.cenotemaravilla.online/reservar",
    locale: "es_MX",
    type: "website",
    siteName: "Cenote Maravilla",
    images: [{ url: "https://www.cenotemaravilla.online/og-image.webp", alt: "Reserva en Cenote Maravilla" }],
  },
};

const reservationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Reserva de tour en cenote y caballos",
  provider: {
    "@type": "LocalBusiness",
    name: "Cenote Maravilla",
    url: "https://www.cenotemaravilla.online/",
  },
  areaServed: "Puerto Morelos, Quintana Roo, MX",
};

export default function ReservarPage() {
  return (
    <main className="min-h-screen bg-white px-6 pb-16 pt-28 text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reservationSchema) }} />
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold md:text-5xl">Reservar visita</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Reserva tu visita a Cenote Maravilla para nado en cenote, paseo a caballo o experiencia privada.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://wa.me/529991234567?text=Hola%2C%20quiero%20reservar%20una%20visita%20en%20Cenote%20Maravilla."
            className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white"
          >
            Reservar por WhatsApp
          </a>
          <Link href="/#contact" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900">
            Ir al formulario
          </Link>
        </div>
      </div>
    </main>
  );
}
