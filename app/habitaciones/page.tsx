"use client";

import PhotoSlider from "../../src/components/PhotoSlider";
import SiteFooter from "../../src/components/SiteFooter";
import SiteHeader from "../../src/components/SiteHeader";
import { useLanguage } from "../../src/components/LanguageProvider";

const sliderImages = Array.from({ length: 40 }, (_, i) =>
  `/habitaciones/photos/habitaciones-photo-${String(i + 1).padStart(3, "0")}.webp`
);

export default function HabitacionesPage() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#134e4a_0%,#0f172a_45%,#020617_100%)] text-white">
      <SiteHeader ctaHref="/#contact" />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-28 md:pt-32">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
            {lang === "es" ? "Habitaciones" : "Rooms"}
          </p>
          <h1 className="mt-3 text-4xl font-semibold md:text-6xl">
            {lang === "es" ? "Galería de Habitaciones" : "Rooms Gallery"}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            {lang === "es"
              ? "Desliza para ver todas las fotos disponibles de habitaciones."
              : "Slide to browse all available room photos."}
          </p>
        </div>

        <PhotoSlider images={sliderImages} />
      </section>

      <SiteFooter />
    </main>
  );
}
