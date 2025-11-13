// --- SLIDER COMPONENT ---
import { useState, useEffect, useRef } from "react";

export function HeroSlider() {
  const images = [
    "/fotosTargetes/fotosCaseta/dins.webp",
    "/fotosTargetes/fotosCaseta/dinsnousoda.webp",
    "/fotosTargetes/fotosCaseta/foravermut.webp",
    "/fotosTargetes/fotosCaseta/SliderBbq1.jpg",
    "/fotosTargetes/fotosCaseta/SliderHab3.jpg",
    "/fotosTargetes/fotosCaseta/SliderLav3.jpg",
    "/fotosTargetes/fotosCaseta/SliderMen2.jpg",
    "/fotosTargetes/fotosCaseta/yacuzzi.webp",
  ];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<any>(null);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  // autoplay
  useEffect(() => {
    timeoutRef.current = setTimeout(next, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <div className="relative w-full h-full">
      {/* Slides */}
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Degradado suave abajo (para que se lean bien textos si los añades) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

      {/* Flechas con #556B2F */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black hover:bg-[#445323] text-white p-2 rounded-full shadow-md transition focus:outline-none focus:ring-2 focus:ring-[#556B2F]/60"
        aria-label="Imagen anterior"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black hover:bg-[#445323] text-white p-2 rounded-full shadow-md transition focus:outline-none focus:ring-2 focus:ring-[#556B2F]/60"
        aria-label="Imagen siguiente"
      >
        ›
      </button>

      {/* Indicadores con #556B2F */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full cursor-pointer transition-all ${
              i === index
                ? "w-4 bg-[#556B2F]"
                : "w-2 bg-[#556B2F]/40 hover:bg-[#556B2F]/70"
            }`}
            aria-label={`Ir a la imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
