"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

type SiteHeaderProps = {
  ctaHref?: string;
};

export default function SiteHeader({ ctaHref = "#contact" }: SiteHeaderProps) {
  const { lang, setLang } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  const navItems = [
    { href: "/#cenotes", label: t.about },
    { href: "/#cenotes", label: t.cenotes },
    { href: "/#caballos", label: t.caballos },
    { href: "/habitaciones", label: t.habitaciones },
    { href: "/#experience", label: t.experience },
    { href: "/#contact", label: t.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between bg-black/25 px-6 py-4 text-white backdrop-blur-md">
        <div>
          <div className="text-xl font-semibold tracking-wide">Cenote Maravilla</div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/80">{t.tagline}</div>
        </div>

        <nav className="hidden gap-8 text-sm md:flex">
          {navItems.map((item) => (
            <a key={item.href + item.label} href={item.href} className="transition hover:text-emerald-300">
              {item.label}
            </a>
          ))}
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
            className="hidden rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-slate-900 sm:inline-block"
          >
            {t.reserve}
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/30 bg-white/10 md:hidden"
          >
            <span className={`h-0.5 w-5 bg-white transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-white transition ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-white transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav className="mx-auto max-w-7xl border-t border-white/10 bg-black/80 px-6 py-5 text-white shadow-2xl backdrop-blur-md md:hidden">
          <div className="grid gap-4 text-base font-medium">
            {navItems.map((item) => (
              <a
                key={item.href + item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-2 py-2 transition hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <a
              href={ctaHref}
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-center text-sm font-semibold transition hover:bg-white hover:text-slate-900"
            >
              {t.reserve}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
