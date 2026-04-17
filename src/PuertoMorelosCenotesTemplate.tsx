export default function PuertoMorelosCenotesTemplate() {
  const cenotes = [
    {
      nameEn: "Verde Escondido Cenote",
      nameEs: "Cenote Verde Escondido",
      descriptionEn:
        "An ideal natural space for swimming, relaxing and enjoying an authentic jungle atmosphere.",
      descriptionEs:
        "Un espacio natural ideal para nadar, relajarse y disfrutar de un ambiente auténtico de selva.",
      tagEn: "Nature & Swimming",
      tagEs: "Naturaleza y nado",
    },
    {
      nameEn: "Cristal Maya Cenote",
      nameEs: "Cenote Cristal Maya",
      descriptionEn:
        "Perfect for visitors looking for clear water, photogenic scenery and a relaxing experience.",
      descriptionEs:
        "Perfecto para visitantes que buscan agua clara, un entorno fotogénico y una experiencia relajante.",
      tagEn: "Crystal Waters",
      tagEs: "Aguas cristalinas",
    },
    {
      nameEn: "Aventura Azul Cenote",
      nameEs: "Cenote Aventura Azul",
      descriptionEn:
        "Designed for travelers who want a light adventure, snorkeling and memorable outdoor moments.",
      descriptionEs:
        "Pensado para viajeros que desean una aventura ligera, esnórquel y momentos inolvidables al aire libre.",
      tagEn: "Adventure",
      tagEs: "Aventura",
    },
  ];

  const experiences = [
    {
      en: "Freshwater swimming",
      es: "Nado en agua dulce",
    },
    {
      en: "Cenote snorkeling",
      es: "Esnórquel en cenotes",
    },
    {
      en: "Jungle experience in Puerto Morelos",
      es: "Experiencia de selva en Puerto Morelos",
    },
    {
      en: "Private or group tours",
      es: "Tours privados o en grupo",
    },
    {
      en: "Photo moments in a natural setting",
      es: "Momentos para fotos en un entorno natural",
    },
    {
      en: "Local discovery from the Riviera Maya",
      es: "Descubrimiento local desde la Riviera Maya",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between bg-black/25 px-6 py-4 text-white backdrop-blur-md">
          <div>
            <div className="text-xl font-semibold tracking-wide">Puerto Morelos Cenotes</div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/80">
              Nature • Jungle • Riviera Maya
            </div>
          </div>

          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#about" className="transition hover:text-emerald-300">
              About / Nosotros
            </a>
            <a href="#cenotes" className="transition hover:text-emerald-300">
              Cenotes
            </a>
            <a href="#experience" className="transition hover:text-emerald-300">
              Experience / Experiencia
            </a>
            <a href="#contact" className="transition hover:text-emerald-300">
              Contact / Contacto
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-slate-900"
          >
            Book now / Reserva
          </a>
        </div>
      </header>

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
              Puerto Morelos • Cenotes Route • Riviera Maya
            </div>
            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
              Discover the most beautiful cenotes in Puerto Morelos
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/90 md:text-xl">
              Descubre los cenotes más hermosos de Puerto Morelos.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/85">
              Curated premium tours, eco-experiences and private escapes for travelers seeking nature,
              comfort and authenticity in Puerto Morelos.
            </p>
            <p className="mt-2 max-w-xl text-base leading-7 text-white/75">
              Tours premium, ecoexperiencias y escapadas privadas para viajeros que buscan naturaleza,
              comodidad y autenticidad en Puerto Morelos.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#cenotes"
                className="rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]"
              >
                Explore cenotes / Explorar cenotes
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                Request information / Solicitar información
              </a>
            </div>
          </div>

          <div className="flex items-end justify-end">
            <div className="w-full max-w-md rounded-[2rem] border border-white/20 bg-white/12 p-6 text-white shadow-2xl backdrop-blur-xl">
              <div className="text-sm uppercase tracking-[0.25em] text-emerald-200">
                Featured experience / Experiencia destacada
              </div>
              <h2 className="mt-3 text-2xl font-semibold">Jungle & Cenote Escape</h2>
              <p className="mt-4 leading-7 text-white/85">
                Private or shared experiences with access to natural cenotes, local guidance and
                unforgettable scenery in Puerto Morelos.
              </p>
              <p className="mt-3 leading-7 text-white/75">
                Experiencias privadas o compartidas con acceso a cenotes naturales, guía local y paisajes
                inolvidables en Puerto Morelos.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-2xl font-semibold">3+</div>
                  <div className="mt-1 text-white/70">Sample cenotes / Cenotes ejemplo</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-2xl font-semibold">100%</div>
                  <div className="mt-1 text-white/70">Nature vibe / Espíritu natural</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-stone-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
              About Puerto Morelos / Sobre Puerto Morelos
            </div>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Between jungle, cenotes and Caribbean spirit
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Entre selva, cenotes y espíritu caribeño.
            </p>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-700">
              Puerto Morelos is one of the most natural and authentic destinations in the Riviera Maya,
              where jungle, beach and the famous Cenotes Route are part of the same unforgettable journey.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Puerto Morelos es uno de los destinos más naturales y auténticos de la Riviera Maya, donde
              la selva, la playa y la famosa Ruta de los Cenotes forman parte de una misma experiencia
              inolvidable.
            </p>
          </div>
        </div>
      </section>

      <section id="cenotes" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Cenotes
            </div>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Featured cenotes / Cenotes destacados
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Replace these cards with your real cenotes, prices, schedules, photos and booking links.
            </p>
            <p className="mt-2 text-base leading-7 text-slate-500">
              Reemplaza estas tarjetas con tus cenotes reales, precios, horarios, fotos y enlaces de
              reserva.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {cenotes.map((cenote) => (
              <div
                key={cenote.nameEn}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-64 bg-[linear-gradient(135deg,#064e3b,#10b981,#99f6e4)]" />
                <div className="p-6">
                  <div className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    {cenote.tagEn} / {cenote.tagEs}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">{cenote.nameEn}</h3>
                  <p className="mt-1 text-base font-medium text-slate-500">{cenote.nameEs}</p>
                  <p className="mt-4 leading-7 text-slate-600">{cenote.descriptionEn}</p>
                  <p className="mt-2 leading-7 text-slate-500">{cenote.descriptionEs}</p>
                  <a href="#contact" className="mt-6 inline-block text-sm font-semibold text-emerald-700">
                    More information / Más información
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Experience / Experiencia
            </div>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">What you can promote on this site</h2>
            <p className="mt-4 text-lg text-white/75">Lo que puedes promocionar en este sitio.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((item) => (
              <div
                key={item.en}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="text-lg font-medium leading-7">{item.en}</div>
                <div className="mt-2 text-white/70">{item.es}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Contact / Contacto
            </div>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Ready to launch your cenotes site?</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">¿Listo para lanzar tu sitio de cenotes?</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Use this section for WhatsApp, booking forms, private tour requests, hotel pickup options or
              a direct CTA for excursions in Puerto Morelos.
            </p>
            <p className="mt-2 max-w-2xl text-base leading-7 text-slate-500">
              Usa esta sección para WhatsApp, formularios de reserva, solicitudes de tours privados,
              transporte desde el hotel o un CTA directo para excursiones en Puerto Morelos.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-stone-50 p-8 shadow-sm">
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Name / Nombre"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-500"
              />
              <input
                type="email"
                placeholder="Email / Correo"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-500"
              />
              <textarea
                placeholder="Tell us about your visit / Cuéntanos sobre tu visita"
                rows={5}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-500"
              />
              <button className="w-full rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                Send request / Enviar solicitud
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
