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
  const copy = {
    kicker: lang === "es" ? "Hospedaje" : "Lodging",
    title: lang === "es" ? "Hospedaje: Tu Hogar en la Selva" : "Lodging: Your Place in the Jungle",
    intro:
      lang === "es"
        ? "Extiende tu visita y despierta con el canto de las aves en nuestras acogedoras instalaciones."
        : "Extend your visit and wake up to birdsong in our welcoming jungle accommodations.",
    furnishedTitle: lang === "es" ? "Departamento Amueblado" : "Furnished Apartment",
    furnishedText:
      lang === "es"
        ? "2 recámaras con todas las comodidades de un hotel: aire acondicionado, agua caliente, TV y vista panorámica al bosque."
        : "Two bedrooms with all the comforts of a hotel: air conditioning, hot water, TV and panoramic forest views.",
    roofText:
      lang === "es"
        ? "Acceso exclusivo a nuestro Roof Garden con palapa de descanso."
        : "Exclusive access to our roof garden with a shaded palapa for relaxing.",
    roomsTitle: lang === "es" ? "Habitaciones Personalizadas" : "Personalized Rooms",
    roomsText:
      lang === "es"
        ? "Pregunta por opciones con camas matrimoniales, clima y frigobar, ideales para una estancia confortable y directa en la naturaleza."
        : "Ask about options with double beds, air conditioning and mini fridge, ideal for a comfortable stay directly in nature.",
    gallery:
      lang === "es"
        ? "Desliza para ver fotos de nuestras opciones de hospedaje."
        : "Slide to browse photos of our lodging options.",
  };

  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      <SiteHeader ctaHref="/#contact" />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-28 md:pt-32">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">{copy.kicker}</p>
          <h1 className="mt-3 text-4xl font-semibold md:text-6xl">{copy.title}</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">{copy.intro}</p>
        </div>

        <div className="mb-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">{copy.furnishedTitle}</h2>
            <p className="mt-4 leading-8 text-slate-600">{copy.furnishedText}</p>
            <p className="mt-4 leading-8 text-emerald-800">{copy.roofText}</p>
          </article>
          <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">{copy.roomsTitle}</h2>
            <p className="mt-4 leading-8 text-slate-600">{copy.roomsText}</p>
          </article>
        </div>

        <p className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{copy.gallery}</p>
        <PhotoSlider images={sliderImages} />
      </section>

      <SiteFooter />
    </main>
  );
}
