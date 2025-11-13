import { useEffect, useState } from "react";
import { useI18n } from "../Components/i18nContext";

const ACCENT = "#556B2F";

type ImageCarouselProps = {
  images: string[];
  altBase: string;
  autoPlay?: boolean;
  interval?: number;
};

function ImageCarousel({
  images,
  altBase,
  autoPlay = true,
  interval = 5000,
}: ImageCarouselProps) {
  const { translations } = useI18n();
  const carousel = translations?.carousel ?? {};

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [autoPlay, interval, images.length]);

  const goTo = (index: number) => {
    const total = images.length;
    const normalized = ((index % total) + total) % total;
    setCurrentIndex(normalized);
  };

  return (
    <div className="group relative w-full overflow-hidden rounded-3xl bg-black/5 shadow-md">
      {/* Imagen principal */}
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={altBase ? `${altBase} ${currentIndex + 1}` : ""}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      {images.length > 1 && (
        <>
          {/* Flecha izquierda */}
          <button
            type="button"
            onClick={() => goTo(currentIndex - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-xs md:text-sm text-white backdrop-blur-sm transition hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/70"
            aria-label={carousel.prev}
          >
            ‹
          </button>

          {/* Flecha derecha */}
          <button
            type="button"
            onClick={() => goTo(currentIndex + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-xs md:text-sm text-white backdrop-blur-sm transition hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/70"
            aria-label={carousel.next}
          >
            ›
          </button>

          {/* Puntos de navegación */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-3">
            <div className="pointer-events-auto flex gap-2 rounded-full bg-black/35 px-3 py-1 backdrop-blur-sm">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goTo(idx)}
                  className={`h-2 w-2 rounded-full transition ${
                    idx === currentIndex ? "bg-white" : "bg-white/60"
                  }`}
                  aria-label={
                    carousel.go_to_image_prefix
                      ? `${carousel.go_to_image_prefix} ${idx + 1}`
                      : undefined
                  }
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

type SpaceKey = "exterior" | "caseta" | "placeta" | "horta";

type SpaceConfig = {
  key: SpaceKey;
  images: string[];
};

const SPACES: SpaceConfig[] = [
  {
    key: "exterior",
    images: [
      "/fotosTargetes/fotosCaseta/foraestatua.webp",
      "/fotosTargetes/fotosCaseta/foravermut.webp",
      "/fotosTargetes/fotosExterior/SliderExterior1.jpg",
      "/fotosTargetes/fotosExterior/SliderExterior2.jpg",
      "/fotosTargetes/fotosExterior/SliderExterior3.jpg",
      "/fotosTargetes/fotosExterior/SliderExterior6.jpg",
      "/fotosTargetes/fotosExterior/SliderExterior7.jpg",
      "/fotosTargetes/fotosExterior/SliderBbq1.jpg",
      "/fotosTargetes/fotosExterior/SliderBbq2.jpg",
    ],
  },
  {
    key: "caseta",
    images: [
      "/fotosTargetes/fotosCaseta/yacuzzi.webp",
      "/fotosTargetes/fotosCaseta/SliderHab1.jpg",
      "/fotosTargetes/fotosCaseta/SliderHab3.jpg",
      "/fotosTargetes/fotosCaseta/SliderLav3.jpg",
      "/fotosTargetes/fotosCaseta/SliderMen2.jpg",
      "/fotosTargetes/fotosCaseta/dins.webp",
      "/fotosTargetes/fotosCaseta/dinsnousoda.webp",
      "/fotosTargetes/fotosCaseta/foraestatua.webp",
      "/fotosTargetes/fotosCaseta/foravermut.webp",
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

  const spaceTranslations = translations?.spaces ?? {};
  const spacesTitle = translations?.titles?.spaces;
  const spacesIntro = translations?.spaces_intro; // opcional, si lo añades al JSON

  return (
    <section
      id="espacios"
      className="pt-24 pb-24 px-6 md:px-10 lg:px-20 bg-white"
    >
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Header sección */}
        <header className="space-y-4 text-left">
          <p
            className="uppercase tracking-[0.3em] text-xs"
            style={{ color: ACCENT }}
          >
            {translations?.maintexts?.badge}
          </p>

          {spacesTitle && (
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              {spacesTitle}
            </h2>
          )}

          {spacesIntro && (
            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
              {spacesIntro}
            </p>
          )}
        </header>

        {/* Lista de espacios en cards */}
        <div className="flex flex-col gap-12 md:gap-16">
          {SPACES.map((space, index) => {
            const isReversed = index % 2 === 1;
            const t = spaceTranslations[space.key] ?? {};

            return (
              <article
                key={space.key}
                className="rounded-3xl border border-[#556B2F]/15 bg-gray-50/70 shadow-sm overflow-hidden"
              >
                <div
                  className={`flex flex-col ${
                    isReversed ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Carrusel */}
                  <div className="w-full md:w-1/2">
                    <ImageCarousel
                      images={space.images}
                      altBase={t.title || ""}
                      autoPlay
                      interval={5000}
                    />
                  </div>

                  {/* Texto */}
                  <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center gap-4">
                    {t.title && (
                      <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                        {t.title}
                      </h3>
                    )}
                    {t.description && (
                      <p className="text-base md:text-lg leading-relaxed text-gray-700">
                        {t.description}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
