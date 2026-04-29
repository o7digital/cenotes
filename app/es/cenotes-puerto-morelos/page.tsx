import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cenotes en Puerto Morelos | Cenote Maravilla",
  description:
    "Descubre cenotes en Puerto Morelos sobre la Ruta de los Cenotes. Planea tu visita de nado, naturaleza y experiencias privadas en Cenote Maravilla.",
};

export default function CenotesPuertoMorelosEsPage() {
  return (
    <main className="min-h-screen bg-white px-6 pb-16 pt-28 text-slate-900">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold md:text-5xl">Cenotes en Puerto Morelos</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Cenote Maravilla ofrece una experiencia natural en Puerto Morelos, sobre la famosa Ruta de los Cenotes.
          Disfruta nado en agua cristalina, paisaje de selva y experiencias privadas en la Riviera Maya.
        </p>
        <h2 className="mt-10 text-2xl font-semibold">Por que elegir Cenote Maravilla</h2>
        <ul className="mt-4 list-disc pl-6 text-slate-600">
          <li>Entorno natural de cenote en Puerto Morelos</li>
          <li>Experiencias para familias, parejas y grupos</li>
          <li>Acceso cercano desde Cancun y Playa del Carmen</li>
        </ul>
        <div className="mt-10">
          <Link href="/#contact" className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white">
            Planear visita
          </Link>
        </div>
      </div>
    </main>
  );
}
