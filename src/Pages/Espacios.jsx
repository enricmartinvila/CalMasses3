import { useI18n } from "../Components/i18nContext";
// src/Components/ImageCarousel.tsx
import { useEffect, useState } from "react";

function ImageCarousel({
  images,
  altBase,
  autoPlay = true,
  interval = 5000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [autoPlay, interval, images.length]);

  const goTo = (index) => {
    const total = images.length;
    const normalized = ((index % total) + total) % total;
    setCurrentIndex(normalized);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg bg-black/5">
      {/* Imagen principal */}
      <div className="aspect-[4/3] w-full">
        <img
          src={images[currentIndex]}
          alt={`${altBase} ${currentIndex + 1}`}
          className="h-full w-full object-cover"
        />
      </div>

      {images.length > 1 && (
        <>
          {/* Flecha izquierda */}
          <button
            type="button"
            onClick={() => goTo(currentIndex - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white text-sm md:text-base hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/70"
            aria-label="Imagen anterior"
          >
            ‹
          </button>

          {/* Flecha derecha */}
          <button
            type="button"
            onClick={() => goTo(currentIndex + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white text-sm md:text-base hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/70"
            aria-label="Imagen siguiente"
          >
            ›
          </button>

          {/* Puntos de navegación */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goTo(idx)}
                className={`h-2 w-2 rounded-full transition ${
                  idx === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Ir a la imagen ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}


const SPACES = [
  {
    key: "exterior",
    images: [
      "/fotosTargetes/fotosExterior/SliderExterior1.jpg",
      "/fotosTargetes/fotosExterior/SliderExterior2.jpg",
      "/fotosTargetes/fotosExterior/SliderExterior3.jpg",
      "/fotosTargetes/fotosExterior/SliderExterior4.jpg",
      "/fotosTargetes/fotosExterior/SliderExterior5.jpg",
      "/fotosTargetes/fotosExterior/SliderExterior6.jpg",
      "/fotosTargetes/fotosExterior/SliderExterior7.jpg",
      "/fotosTargetes/fotosExterior/SliderExterior8.jpg",
      "/fotosTargetes/fotosExterior/SliderExterior9.jpg",
      "/fotosTargetes/fotosExterior/SliderBbq1.jpg",
      "/fotosTargetes/fotosExterior/SliderBbq2.jpg",
    ],
  },
  {
    key: "caseta",
    images: [
      "/fotosTargetes/fotosCaseta/SliderHab1.jpg",
      "/fotosTargetes/fotosCaseta/SliderHab3.jpg",
      "/fotosTargetes/fotosCaseta/SliderLav3.jpg",
      "/fotosTargetes/fotosCaseta/SliderMen2.jpg",
      "/fotosTargetes/fotosCaseta/SliderMen4.jpg",
    ],
  },
  {
    key: "placeta",
    images: [
      "/fotosTargetes/fotosPlaceta/SliderPlac1.jpg",
      "/fotosTargetes/fotosPlaceta/SliderPlac2.jpg",
      "/fotosTargetes/fotosPlaceta/SliderPlac3.jpg",
      "/fotosTargetes/fotosPlaceta/SliderPlac4.jpg",
      "/fotosTargetes/fotosPlaceta/SliderPlac5.jpg",
    ],
  },
  {
    key: "horta",
    images: [
      "/fotosTargetes/fotosHorta/SliderTerra1.jpg",
      "/fotosTargetes/fotosHorta/SliderTerra2.jpg",
      "/fotosTargetes/fotosHorta/SliderTerra3.jpg",
      "/fotosTargetes/fotosHorta/SliderTerra4.JPG",
    ],
  },
];

export default function Espacios() {
  const { translations } = useI18n();

  // Si no existe translations.spaces, usamos un objeto vacío
  const spaceTranslations = translations.spaces || {};

  return (
    <section id="espaciosID" className="mx-auto max-w-6xl px-4">
      <h1 className="my-16 text-center text-4xl font-bold md:my-24">
        {translations.titles?.spaces || "Espacios"}
      </h1>

      <div className="flex flex-col gap-16 md:gap-24">
        {SPACES.map((space, index) => {
          const isReversed = index % 2 === 1;

          // Intentamos coger la traducción; si no existe, usamos fallback
          const t = spaceTranslations[space.key] || {
            title: space.key.charAt(0).toUpperCase() + space.key.slice(1),
            description: "",
          };

          return (
            <article
              key={space.key}
              className={`flex flex-col items-center gap-10 md:gap-16 ${
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Carrusel */}
              <div className="w-full md:w-1/2">
                <ImageCarousel
                  images={space.images}
                  altBase={t.title}
                  autoPlay={true}
                  interval={5000}
                />
              </div>

              {/* Texto */}
              <div className="w-full md:w-1/2 text-left">
                <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                  {t.title}
                </h2>
                <p className="text-base leading-relaxed md:text-lg">
                  {t.description || "Pronto añadiremos la descripción de este espacio."}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}