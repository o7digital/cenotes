import { promises as fs } from "fs";
import path from "path";
import PhotoSlider from "../../src/components/PhotoSlider";
import SiteFooter from "../../src/components/SiteFooter";
import SiteHeader from "../../src/components/SiteHeader";

async function readPhotos(relativeDir: string) {
  const dir = path.join(process.cwd(), "public", relativeDir);
  try {
    const files = await fs.readdir(dir);
    return files
      .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
      .sort()
      .map((file) => `/${relativeDir}/${file}`);
  } catch {
    return [] as string[];
  }
}

export default async function NouvellesPage() {
  const [cenotesPhotos, habitacionesPhotos, caballosPhotos] = await Promise.all([
    readPhotos("cenotes/photos"),
    readPhotos("habitaciones/photos"),
    readPhotos("caballos/photos"),
  ]);

  const sliderImages = [...cenotesPhotos, ...habitacionesPhotos, ...caballosPhotos];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#134e4a_0%,#0f172a_45%,#020617_100%)] text-white">
      <SiteHeader ctaHref="/#contact" />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-28 md:pt-32">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Nouvelles</p>
          <h1 className="mt-3 text-4xl font-semibold md:text-6xl">Galerie photo</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            Sélection des photos de Cenote Maravilla. Utilise les flèches pour faire défiler les images.
          </p>
        </div>

        <PhotoSlider images={sliderImages} />
      </section>

      <SiteFooter />
    </main>
  );
}
