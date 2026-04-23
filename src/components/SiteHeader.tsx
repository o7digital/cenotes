type SiteHeaderProps = {
  ctaHref?: string;
};

export default function SiteHeader({ ctaHref = "#contact" }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between bg-black/25 px-6 py-4 text-white backdrop-blur-md">
        <div>
          <div className="text-xl font-semibold tracking-wide">Puerto Morelos Cenote Maravilla</div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/80">
            Nature • Jungle • Riviera Maya
          </div>
        </div>

        <nav className="hidden gap-8 text-sm md:flex">
          <a href="/#cenotes" className="transition hover:text-emerald-300">
            About / Nosotros
          </a>
          <a href="/#cenotes" className="transition hover:text-emerald-300">
            Cenotes
          </a>
          <a href="/#caballos" className="transition hover:text-emerald-300">
            Caballos
          </a>
          <a href="/habitaciones" className="transition hover:text-emerald-300">
            Habitaciones
          </a>
          <a href="/#experience" className="transition hover:text-emerald-300">
            Experience / Experiencia
          </a>
          <a href="/nouvelles" className="transition hover:text-emerald-300">
            Nouvelles
          </a>
          <a href="/#contact" className="transition hover:text-emerald-300">
            Contact / Contacto
          </a>
        </nav>

        <a
          href={ctaHref}
          className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-slate-900"
        >
          Book now / Reserva
        </a>
      </div>
    </header>
  );
}
