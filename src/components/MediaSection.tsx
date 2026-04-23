import { sectionCopy } from "../data/siteContent";

type MediaSectionProps = {
  id: "cenotes" | "habitaciones" | "caballos";
  photos: readonly string[];
  videos: readonly string[];
};

export default function MediaSection({ id, photos, videos }: MediaSectionProps) {
  const copy = sectionCopy[id];

  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-amber-700">Galería</p>
          <h2 className="mt-2 text-3xl font-semibold text-stone-900 md:text-4xl">{copy.title}</h2>
          <p className="mt-3 max-w-2xl text-stone-600">{copy.description}</p>
        </div>
        <div className="rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700">
          {photos.length} fotos · {videos.length} videos
        </div>
      </div>

      {photos.length > 0 && (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {photos.map((src) => (
            <article
              key={src}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${copy.title} photo`}
                className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 md:h-48"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      )}

      {videos.length > 0 && (
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {videos.map((src) => (
            <article
              key={src}
              className="overflow-hidden rounded-2xl border border-stone-200 bg-black shadow-sm"
            >
              <video src={src} controls preload="metadata" className="aspect-video w-full" />
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
