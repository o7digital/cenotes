"use client";

import { useLanguage } from "./LanguageProvider";

export default function SiteFooter() {
  const { lang } = useLanguage();

  const pageKeywords =
    lang === "es"
      ? [
          "cenote en Puerto Morelos",
          "cenotes en Puerto Morelos",
          "Cenote Maravilla Puerto Morelos",
          "ruta de los cenotes Puerto Morelos",
          "tour cenotes Puerto Morelos",
          "tour privado cenote Puerto Morelos",
          "paseo a caballo Puerto Morelos",
          "paseo a caballo en la selva Puerto Morelos",
          "cenotes cerca de Cancun",
          "experiencias naturales Riviera Maya",
        ].join(" · ")
      : [
          "Puerto Morelos cenote",
          "cenote in Puerto Morelos",
          "cenotes in Puerto Morelos",
          "Cenote Maravilla Puerto Morelos",
          "Ruta de los Cenotes Puerto Morelos",
          "Puerto Morelos cenote tour",
          "private cenote tour Puerto Morelos",
          "horseback riding Puerto Morelos",
          "Puerto Morelos jungle tour",
          "cenotes near Cancun",
        ].join(" · ");

  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-8 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-3 text-sm md:flex-row">
          <p className="text-white/80">Cenote Maravilla · Puerto Morelos</p>
          <p className="text-white/60">
            {lang === "es" ? "NATURALEZA • SELVA • RIVIERA MAYA" : "NATURE • JUNGLE • RIVIERA MAYA"}
          </p>
        </div>
        <p className="mt-4 text-sm leading-7 text-white/70">
          {lang === "es"
            ? "Cenote Maravilla, Puerto Morelos, Mexico. Sitio oficial: nado en cenotes, Ruta de los Cenotes, cabalgatas y experiencias privadas en la selva de la Riviera Maya."
            : "Cenote Maravilla is a natural cenote experience in Puerto Morelos, located along the famous Ruta de los Cenotes in the Riviera Maya, Mexico. Visitors can enjoy crystal-clear freshwater swimming, jungle landscapes, horseback riding, private cenote tours and nature experiences close to Cancun and Playa del Carmen."}
        </p>
        <p className="mt-8 border-t border-white/10 pt-6 text-xs leading-7 text-white/40">{pageKeywords}</p>
      </div>
    </footer>
  );
}
