"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "./LanguageProvider";

type PhotoSliderProps = {
  images: string[];
};

export default function PhotoSlider({ images }: PhotoSliderProps) {
  const { lang } = useLanguage();
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);

  if (safeImages.length === 0) {
    return (
      <p className="text-center text-slate-600">
        {lang === "es" ? "No hay fotos disponibles por el momento." : "No photos available at the moment."}
      </p>
    );
  }

  const prev = () => setIndex((i) => (i === 0 ? safeImages.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === safeImages.length - 1 ? 0 : i + 1));

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={safeImages[index]}
          alt={`${lang === "es" ? "Foto" : "Photo"} ${index + 1}`}
          className="h-[62vh] min-h-[360px] w-full object-cover"
        />

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/40 px-4 py-3 text-white backdrop-blur-sm">
          <button
            type="button"
            onClick={prev}
            className="rounded-full border border-white/50 px-4 py-1.5 text-sm transition hover:bg-white hover:text-black"
          >
            {lang === "es" ? "Anterior" : "Prev"}
          </button>
          <span className="text-sm font-medium">
            {index + 1} / {safeImages.length}
          </span>
          <button
            type="button"
            onClick={next}
            className="rounded-full border border-white/50 px-4 py-1.5 text-sm transition hover:bg-white hover:text-black"
          >
            {lang === "es" ? "Siguiente" : "Next"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 md:grid-cols-8">
        {safeImages.slice(0, 16).map((src, thumbIndex) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(thumbIndex)}
            className={`overflow-hidden rounded-xl border ${
              thumbIndex === index ? "border-emerald-400" : "border-white/30"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Miniature ${thumbIndex + 1}`} className="h-16 w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
