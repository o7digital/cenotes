"use client";

import { useLanguage } from "./LanguageProvider";

export default function SiteFooter() {
  const { lang } = useLanguage();
  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm md:flex-row">
        <p className="text-white/80">Cenote Maravilla · Puerto Morelos</p>
        <p className="text-white/60">
          {lang === "es" ? "NATURALEZA • SELVA • RIVIERA MAYA" : "NATURE • JUNGLE • RIVIERA MAYA"}
        </p>
      </div>
    </footer>
  );
}
