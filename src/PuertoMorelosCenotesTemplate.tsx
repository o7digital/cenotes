import MediaSection from "./components/MediaSection";
import { media } from "./media";
import { packages, siteContent } from "./data/siteContent";

const whatsappHref = `https://wa.me/${siteContent.whatsappNumber}?text=${encodeURIComponent(siteContent.whatsappMessage)}`;

export default function PuertoMorelosCenotesTemplate() {
  return (
    <main className="bg-[var(--sand)] text-stone-900">
      <header className="sticky top-0 z-50 border-b border-white/40 bg-[color:var(--sand)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="font-[var(--font-fraunces)] text-xl leading-none">{siteContent.brand}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-600">Puerto Morelos · Riviera Maya</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#cenotes" className="hover:text-amber-700">Cenotes</a>
            <a href="#habitaciones" className="hover:text-amber-700">Habitaciones</a>
            <a href="#caballos" className="hover:text-amber-700">Caballos</a>
            <a href="#tarifas" className="hover:text-amber-700">Tarifas</a>
            <a href="#contacto" className="hover:text-amber-700">Contacto</a>
          </nav>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--jungle)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,#fcd34d40,transparent_35%),radial-gradient(circle_at_80%_0%,#0f766e30,transparent_30%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-700">{siteContent.subtitle}</p>
            <h1 className="mt-4 font-[var(--font-fraunces)] text-5xl leading-[1.05] text-stone-900 md:text-7xl">
              {siteContent.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">{siteContent.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cenotes" className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white">
                Ver galerías
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-800"
              >
                Solicitar disponibilidad
              </a>
            </div>
          </div>

          <div className="relative z-10 grid gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-[1.75rem] border border-stone-200 shadow-md sm:col-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={siteContent.featuredMedia.heroCenote} alt="Cenote principal" className="h-64 w-full object-cover md:h-80" />
            </figure>
            <figure className="overflow-hidden rounded-[1.5rem] border border-stone-200 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={siteContent.featuredMedia.heroRoom} alt="Habitación" className="h-40 w-full object-cover" />
            </figure>
            <figure className="overflow-hidden rounded-[1.5rem] border border-stone-200 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={siteContent.featuredMedia.heroHorse} alt="Caballos" className="h-40 w-full object-cover" />
            </figure>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-3 rounded-3xl border border-stone-200 bg-white p-6 md:grid-cols-3">
          {siteContent.highlights.map((highlight) => (
            <div key={highlight} className="rounded-2xl bg-stone-50 p-4 text-stone-700">
              {highlight}
            </div>
          ))}
        </div>
      </section>

      <MediaSection id="cenotes" photos={media.cenotes.photos} videos={media.cenotes.videos} />
      <MediaSection id="habitaciones" photos={media.habitaciones.photos} videos={media.habitaciones.videos} />
      <MediaSection id="caballos" photos={media.caballos.photos} videos={media.caballos.videos} />

      <section id="tarifas" className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-700">Tarifas</p>
          <h2 className="mt-2 font-[var(--font-fraunces)] text-4xl">Paquetes recomendados</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {packages.map((pack) => (
            <article key={pack.name} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-stone-900">{pack.name}</h3>
              <p className="mt-2 text-stone-600">{pack.details}</p>
              <p className="mt-4 text-lg font-semibold text-[var(--jungle)]">{pack.price}</p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white"
              >
                Cotizar por WhatsApp
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-6xl px-6 pb-20 pt-8">
        <div className="grid gap-6 rounded-3xl bg-stone-900 p-8 text-white md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-300">Contacto</p>
            <h2 className="mt-3 font-[var(--font-fraunces)] text-4xl">Planea tu visita</h2>
            <p className="mt-4 max-w-xl text-stone-300">
              Escríbenos por WhatsApp para precios, paquetes y disponibilidad. También podemos ayudarte a
              organizar tours privados o para grupos.
            </p>
          </div>
          <div className="space-y-3 rounded-2xl bg-white/10 p-5">
            <p className="text-sm text-stone-300">Ubicación</p>
            <p className="text-lg">{siteContent.location}</p>
            <p className="text-sm text-stone-300">Email</p>
            <a href={`mailto:${siteContent.contactEmail}`} className="block text-lg hover:text-amber-200">
              {siteContent.contactEmail}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block rounded-full bg-amber-300 px-5 py-2.5 text-sm font-semibold text-stone-900"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
