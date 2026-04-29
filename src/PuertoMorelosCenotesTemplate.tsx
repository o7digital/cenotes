"use client";

import { useLanguage } from "./components/LanguageProvider";
import PhotoSlider from "./components/PhotoSlider";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

export default function PuertoMorelosCenotesTemplate() {
  const { lang } = useLanguage();

  const t = {
    heroBadge: lang === "es" ? "Puerto Morelos • Ruta de Cenotes • Riviera Maya" : "Puerto Morelos • Cenotes Route • Riviera Maya",
    heroTitle:
      lang === "es"
        ? "Descubre los cenotes más hermosos de Puerto Morelos"
        : "Discover the most beautiful cenotes in Puerto Morelos",
    heroSub:
      lang === "es"
        ? "Experiencias premium, ecoaventuras y escapadas privadas para viajeros que buscan naturaleza y autenticidad."
        : "Premium tours, eco-experiences and private escapes for travelers seeking nature and authenticity.",
    ctaExplore: lang === "es" ? "Explorar cenotes" : "Explore cenotes",
    ctaContact: lang === "es" ? "Solicitar información" : "Request information",
    featured: lang === "es" ? "Experiencia destacada" : "Featured experience",
    aboutTitle: lang === "es" ? "Entre selva, cenotes y espíritu caribeño" : "Between jungle, cenotes and Caribbean spirit",
    aboutKicker: lang === "es" ? "Sobre Puerto Morelos" : "About Puerto Morelos",
    cenotesTitle: lang === "es" ? "Cenotes destacados" : "Featured cenotes",
    caballosTitle: lang === "es" ? "Caballos" : "Horses",
    caballosSub:
      lang === "es"
        ? "Recorridos y convivencia con caballos en un entorno natural de Puerto Morelos."
        : "Horse experiences in a natural setting in Puerto Morelos.",
    horsePackagesKicker: lang === "es" ? "Tarifas" : "Pricing",
    horsePackagesTitle: lang === "es" ? "Paquetes de Caballos" : "Horse Packages",
    quoteWhatsapp: lang === "es" ? "Cotizar por WhatsApp" : "Quote on WhatsApp",
    expTitle: lang === "es" ? "Lo que puedes promocionar en este sitio" : "What you can promote on this site",
    expKicker: lang === "es" ? "Experiencia" : "Experience",
    contactKicker: lang === "es" ? "Contacto" : "Contact",
    contactTitle: lang === "es" ? "¿Listo para lanzar tu sitio de cenotes?" : "Ready to launch your cenotes site?",
    name: lang === "es" ? "Nombre" : "Name",
    email: lang === "es" ? "Correo" : "Email",
    message: lang === "es" ? "Cuéntanos sobre tu visita" : "Tell us about your visit",
    send: lang === "es" ? "Enviar solicitud" : "Send request",
    moreInfo: lang === "es" ? "Más información" : "More information",
  };

  const cenotePhotos = Array.from({ length: 9 }, (_, i) =>
    `/cenotes/photos/cenotes-photo-${String(i + 1).padStart(3, "0")}.jpeg`
  );

  const caballosPhotos = Array.from({ length: 35 }, (_, i) =>
    `/caballos/photos/caballos-photo-${String(i + 1).padStart(3, "0")}.jpeg`
  );

  const cenotes = [
    {
      nameEn: "Verde Escondido Cenote",
      nameEs: "Cenote Verde Escondido",
      descriptionEn: "An ideal natural space for swimming and relaxing.",
      descriptionEs: "Un espacio natural ideal para nadar y relajarte.",
      tagEn: "Nature & Swimming",
      tagEs: "Naturaleza y nado",
    },
    {
      nameEn: "Cristal Maya Cenote",
      nameEs: "Cenote Cristal Maya",
      descriptionEn: "Perfect for clear water, photos and a calm experience.",
      descriptionEs: "Perfecto por su agua clara, fotos y ambiente relajado.",
      tagEn: "Crystal Waters",
      tagEs: "Aguas cristalinas",
    },
    {
      nameEn: "Aventura Azul Cenote",
      nameEs: "Cenote Aventura Azul",
      descriptionEn: "A light adventure with memorable outdoor moments.",
      descriptionEs: "Una aventura ligera con momentos inolvidables al aire libre.",
      tagEn: "Adventure",
      tagEs: "Aventura",
    },
  ];

  const experiences =
    lang === "es"
      ? [
          "Nado en agua dulce",
          "Esnórquel en cenotes",
          "Experiencia de selva en Puerto Morelos",
          "Tours privados o en grupo",
          "Momentos para fotos en un entorno natural",
          "Descubrimiento local desde la Riviera Maya",
        ]
      : [
          "Freshwater swimming",
          "Cenote snorkeling",
          "Jungle experience in Puerto Morelos",
          "Private or group tours",
          "Photo moments in a natural setting",
          "Local discovery from the Riviera Maya",
        ];

  const horsePackages =
    lang === "es"
      ? [
          {
            name: "Paseo Básico",
            details: "Recorrido guiado a caballo por senderos naturales (30 min).",
            price: "Desde $450 MXN / persona",
          },
          {
            name: "Paseo Aventura",
            details: "Ruta extendida con paradas para fotos y descanso (60 min).",
            price: "Desde $750 MXN / persona",
          },
          {
            name: "Paquete Privado",
            details: "Experiencia exclusiva para pareja, familia o grupo pequeño.",
            price: "Cotización personalizada",
          },
        ]
      : [
          {
            name: "Basic Ride",
            details: "Guided horseback trail through natural paths (30 min).",
            price: "From $450 MXN / person",
          },
          {
            name: "Adventure Ride",
            details: "Extended route with photo and rest stops (60 min).",
            price: "From $750 MXN / person",
          },
          {
            name: "Private Package",
            details: "Exclusive experience for couples, families, or small groups.",
            price: "Custom quote",
          },
        ];

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
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {cenotes.map((cenote, index) => (
              <div key={cenote.nameEn} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cenotePhotos[index % cenotePhotos.length]} alt={cenote.nameEs} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    {lang === "es" ? cenote.tagEs : cenote.tagEn}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">{lang === "es" ? cenote.nameEs : cenote.nameEn}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{lang === "es" ? cenote.descriptionEs : cenote.descriptionEn}</p>
                  <a href="#contact" className="mt-6 inline-block text-sm font-semibold text-emerald-700">{t.moreInfo}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="caballos" className="bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold md:text-5xl">{t.caballosTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">{t.caballosSub}</p>
          <div className="mt-12">
            <PhotoSlider images={caballosPhotos} />
          </div>

          <div className="mt-14">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">{t.horsePackagesKicker}</p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">{t.horsePackagesTitle}</h3>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {horsePackages.map((pkg) => (
                <article key={pkg.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h4 className="text-2xl font-semibold text-slate-900">{pkg.name}</h4>
                  <p className="mt-3 text-lg leading-7 text-slate-600">{pkg.details}</p>
                  <p className="mt-5 text-3xl font-semibold text-emerald-800">{pkg.price}</p>
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    {t.quoteWhatsapp}
                  </a>
                </article>
              ))}
            </div>
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

      <section id="contact" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">{t.contactKicker}</div>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">{t.contactTitle}</h2>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-stone-50 p-8 shadow-sm">
            <div className="space-y-5">
              <input type="text" placeholder={t.name} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-500" />
              <input type="email" placeholder={t.email} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-500" />
              <textarea placeholder={t.message} rows={5} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-500" />
              <button className="w-full rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">{t.send}</button>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
