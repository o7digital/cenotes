"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "./components/LanguageProvider";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const cenotePhotos = Array.from({ length: 9 }, (_, i) =>
  `/cenotes/photos/cenotes-photo-${String(i + 1).padStart(3, "0")}.webp`
);

const cenotes = [
  {
    nameEn: "The Mystic Abyss",
    nameEs: "El Abismo Místico",
    subtitleEn: "Snorkeling and freediving",
    subtitleEs: "Buceo y apnea",
    descriptionEn:
      "A sanctuary for lovers of the depths. This cenote, with a discreet entrance, opens underground like a true subterranean ocean. Megalodon teeth were recently found here and are now exhibited at the Tulum museum.",
    descriptionEs:
      "Un santuario para los amantes de las profundidades. Este cenote, de entrada discreta, se abre bajo tierra como un verdadero océano subterráneo. Recientemente se encontraron dientes de megalodon que ahora son exhibidos en el museo de Tulum.",
    tagEn: "Depth & Discovery",
    tagEs: "Profundidad y descubrimiento",
  },
  {
    nameEn: "The Family Oasis",
    nameEs: "El Oasis Familiar",
    subtitleEn: "Recreational",
    subtitleEs: "Recreativo",
    descriptionEn:
      "Designed for everyone to enjoy. With depths ranging from 80 cm to 5 meters, it is perfect for swimming safely and having a great time.",
    descriptionEs:
      "Diseñado para el disfrute de todos. Con profundidades que van desde los 80 cm hasta los 5 metros, es perfecto para nadar con seguridad y divertirse en grande.",
    tagEn: "Family swimming",
    tagEs: "Nado familiar",
  },
];

const experiencesByLang = {
  es: [
    "Nado en agua dulce",
    "Esnórquel en cenotes",
    "Experiencia de selva en Puerto Morelos",
    "Tours privados o en grupo",
    "Momentos para fotos en un entorno natural",
    "Descubrimiento local desde la Riviera Maya",
  ],
  en: [
    "Freshwater swimming",
    "Cenote snorkeling",
    "Jungle experience in Puerto Morelos",
    "Private or group tours",
    "Photo moments in a natural setting",
    "Local discovery from the Riviera Maya",
  ],
} as const;

const faqsByLang = {
  es: [
    {
      question: "¿Cuántos cenotes son?",
      answer:
        "Contamos con dos cenotes: uno ideal para experiencias de buceo profundo y otro familiar con capacidad para 250 personas, jardín, comedor, bancas con malla sombra, área de hamacas, baños y vestidores. La entrada incluye chalecos.",
    },
    {
      question: "¿Tienen algún restaurante o lugar para comer?",
      answer:
        "Contamos con restaurante en sitio, actualmente en remodelación, y renta de asadores para quienes prefieren cocinar su propia aventura.",
    },
    {
      question: "¿Necesito estar certificado para hacer buceo?",
      answer: "Sí, es necesaria la certificación de buceo.",
    },
    {
      question: "¿Se cobra la entrada?",
      answer:
        "Sí, la entrada general tiene un costo de $250 MXN por persona. Pregunta por nuestros precios especiales para locales de Quintana Roo.",
    },
  ],
  en: [
    {
      question: "How many cenotes are there?",
      answer:
        "There are two cenotes: one ideal for deep diving experiences and a family cenote with capacity for 250 people, garden, dining area, shaded benches, hammock area, bathrooms and changing rooms. Life vests are included with admission.",
    },
    {
      question: "Do you have a restaurant or place to eat?",
      answer:
        "We have an on-site restaurant, currently being remodeled, and grill rentals for guests who prefer to cook their own adventure.",
    },
    {
      question: "Do I need to be certified to dive?",
      answer: "Yes, diving certification is required.",
    },
    {
      question: "Is there an entrance fee?",
      answer:
        "Yes, general admission is $250 MXN per person. Ask about our special prices for Quintana Roo locals.",
    },
  ],
} as const;

export default function PuertoMorelosCenotesTemplate() {
  const { lang } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const t = {
    heroBadge: lang === "es" ? "Puerto Morelos • Ruta de Cenotes • Riviera Maya" : "Puerto Morelos · Ruta de los Cenotes · Riviera Maya",
    heroTitle:
      lang === "es"
        ? "Descubre los cenotes más hermosos de Puerto Morelos"
        : "Discover one of the most beautiful cenote experiences in Puerto Morelos",
    heroSub:
      lang === "es"
        ? "Nada en agua dulce cristalina, explora la belleza natural de la Ruta de los Cenotes y disfruta paisajes de selva y tours privados en la Riviera Maya."
        : "Swim in crystal-clear freshwater, explore the natural beauty of the Ruta de los Cenotes and enjoy jungle landscapes and private tours in the Riviera Maya.",
    ctaExplore: lang === "es" ? "Explorar cenotes" : "Explore cenotes",
    ctaContact: lang === "es" ? "Solicitar información" : "Request information",
    featured: lang === "es" ? "Experiencia destacada" : "Featured experience",
    aboutTitle: lang === "es" ? "Puerto Morelos, auténtico Caribe Mexicano" : "Puerto Morelos, the authentic Mexican Caribbean",
    aboutKicker: lang === "es" ? "Sobre Puerto Morelos" : "About Puerto Morelos",
    cenotesTitle: lang === "es" ? "Nuestros Cenotes: Dos Mundos por Descubrir" : "Our Cenotes: Two Worlds to Discover",
    cenotesIntro:
      lang === "es"
        ? "Puerto Morelos es un tranquilo pueblo pesquero en el Caribe Mexicano, ubicado entre Cancún y Playa del Carmen. Destaca por su ambiente relajado, familiar y auténtico, ideal para quienes buscan alejarse de las zonas hoteleras masivas."
        : "Puerto Morelos is a peaceful fishing village in the Mexican Caribbean, located between Cancun and Playa del Carmen. It stands out for its relaxed, family-friendly and authentic atmosphere, ideal for visitors who want to step away from the large hotel zones.",
    expTitle: lang === "es" ? "Experiencias en Cenote Maravilla" : "Experiences at Cenote Maravilla",
    expKicker: lang === "es" ? "Experiencia" : "Experience",
    faqKicker: lang === "es" ? "Preguntas frecuentes" : "FAQ",
    faqTitle: lang === "es" ? "Todo lo que necesitas saber antes de venir" : "Everything to know before visiting",
    faqIntro:
      lang === "es"
        ? "Respuestas rápidas para planear tu visita con claridad."
        : "Quick answers to help you plan your visit clearly.",
    contactKicker: lang === "es" ? "Contacto" : "Contact",
    contactTitle: "Plan your visit to Cenote Maravilla",
    name: lang === "es" ? "Nombre" : "Name",
    email: lang === "es" ? "Correo" : "Email",
    message:
      lang === "es"
        ? "Contáctanos para reservar tu experiencia en cenote o escapada privada en la selva en Puerto Morelos."
        : "Contact us to book your cenote experience or private jungle escape in Puerto Morelos.",
    send: lang === "es" ? "Enviar solicitud" : "Send request",
    moreInfo: lang === "es" ? "Más información" : "More information",
  };

  const experiences = experiencesByLang[lang];
  const faqs = faqsByLang[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader ctaHref="/#contact" />

      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-emerald-900/30" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-28 md:grid-cols-2">
          <div className="max-w-2xl text-white">
            <div className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/90">
              {t.heroBadge}
            </div>
            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">{t.heroTitle}</h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/90">{t.heroSub}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#cenotes" className="rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]">
                {t.ctaExplore}
              </a>
              <a href="#contact" className="rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900">
                {t.ctaContact}
              </a>
            </div>
          </div>

          <div className="flex items-end justify-end">
            <div className="w-full max-w-md rounded-[2rem] border border-white/20 bg-white/12 p-6 text-white shadow-2xl backdrop-blur-xl">
              <div className="text-sm uppercase tracking-[0.25em] text-emerald-200">{t.featured}</div>
              <h2 className="mt-3 text-2xl font-semibold">Jungle & Cenote Escape</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-stone-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">{t.aboutKicker}</div>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{t.aboutTitle}</h2>
          </div>
        </div>
      </section>

      <section id="cenotes" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold md:text-5xl">{t.cenotesTitle}</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">{t.cenotesIntro}</p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {cenotes.map((cenote, index) => (
              <div key={cenote.nameEn} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <Image
                  src={cenotePhotos[index % cenotePhotos.length]}
                  alt={cenote.nameEs}
                  width={800}
                  height={420}
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <div className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    {lang === "es" ? cenote.tagEs : cenote.tagEn}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">{lang === "es" ? cenote.nameEs : cenote.nameEn}</h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {lang === "es" ? cenote.subtitleEs : cenote.subtitleEn}
                  </p>
                  <p className="mt-4 leading-7 text-slate-600">{lang === "es" ? cenote.descriptionEs : cenote.descriptionEn}</p>
                  <a href="#contact" className="mt-6 inline-block text-sm font-semibold text-emerald-700">{t.moreInfo}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">{t.expKicker}</div>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">{t.expTitle}</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((item) => (
              <div key={item} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-lg font-medium leading-7">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-stone-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">{t.faqKicker}</div>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{t.faqTitle}</h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-slate-600">{t.faqIntro}</p>
          </div>

          <div className="border-y border-slate-300 bg-white">
            {faqs.map((item, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <article key={item.question} className="border-b border-slate-200 last:border-b-0">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-7 text-left md:px-8"
                  >
                    <span className="text-xl font-semibold leading-7 text-slate-950 md:text-2xl">{item.question}</span>
                    <span
                      aria-hidden="true"
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border border-slate-300 text-3xl font-light leading-none text-emerald-800 transition ${isOpen ? "rotate-45 bg-emerald-800 text-white" : "bg-white"}`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-8 text-lg leading-8 text-slate-600 md:px-8">{item.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">{t.contactKicker}</div>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">{t.contactTitle}</h2>
          </div>

          <form
            action="https://formspree.io/f/mnjwarqz"
            method="POST"
            className="rounded-[2rem] border border-slate-200 bg-stone-50 p-8 shadow-sm"
          >
            <div className="space-y-5">
              <input
                type="text"
                name="name"
                required
                placeholder={t.name}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-500"
              />
              <input
                type="email"
                name="email"
                required
                placeholder={t.email}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-500"
              />
              <textarea
                name="message"
                required
                placeholder={t.message}
                rows={5}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                {t.send}
              </button>
            </div>
          </form>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
