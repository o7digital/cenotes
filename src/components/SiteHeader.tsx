"use client";

import { useLanguage } from "./LanguageProvider";

type SiteHeaderProps = {
  ctaHref?: string;
};

export default function SiteHeader({ ctaHref = "#contact" }: SiteHeaderProps) {
  const { lang, setLang } = useLanguage();
  const t = {
    about: lang === "es" ? "Nosotros" : "About",
    cenotes: "Cenotes",
    caballos: lang === "es" ? "Caballos" : "Horses",
    habitaciones: lang === "es" ? "Habitaciones" : "Rooms",
    experience: lang === "es" ? "Experiencia" : "Experience",
    contact: lang === "es" ? "Contacto" : "Contact",
    reserve: lang === "es" ? "Reservar" : "Book now",
    tagline: lang === "es" ? "NATURALEZA • SELVA • RIVIERA MAYA" : "NATURE • JUNGLE • RIVIERA MAYA",
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between bg-black/25 px-6 py-4 text-white backdrop-blur-md">
        <div>
          <div className="text-xl font-semibold tracking-wide">Cenote Maravilla</div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/80">{t.tagline}</div>
        </div>

        <nav className="hidden gap-8 text-sm md:flex">
          <a href="/#cenotes" className="transition hover:text-emerald-300">{t.about}</a>
          <a href="/#cenotes" className="transition hover:text-emerald-300">{t.cenotes}</a>
          <a href="/#caballos" className="transition hover:text-emerald-300">{t.caballos}</a>
          <a href="/habitaciones" className="transition hover:text-emerald-300">{t.habitaciones}</a>
          <a href="/#experience" className="transition hover:text-emerald-300">{t.experience}</a>
          <a href="/#contact" className="transition hover:text-emerald-300">{t.contact}</a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex rounded-full border border-white/30 bg-white/10 p-1 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLang("es")}
              className={`rounded-full px-2 py-1 ${lang === "es" ? "bg-white text-slate-900" : "text-white"}`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-2 py-1 ${lang === "en" ? "bg-white text-slate-900" : "text-white"}`}
            >
              EN
            </button>
          </div>

          <a
            href={ctaHref}
            className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-slate-900"
          >
            {t.reserve}
          </a>
        </div>
      </div>
    </header>
  );
}
