import { useI18n } from "../Components/i18nContext";
import { HeroSlider } from "../Components/Slider";

export default function MainPage() {
  const { translations } = useI18n();

  const heroTitle =
    translations?.maintexts?.title ?? "Tu refugio rural cerca de Manresa";
  const heroSubtitle =
    translations?.maintexts?.text ??
    "Un apartamento tranquilo, rodeado de naturaleza, pensado para desconectar.";
  const heroCtaPrimary =
    translations?.maintexts?.cta_primary ?? "Consultar disponibilidad";

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white via-[#fafaf8] to-white">
      {/* HERO SECTION - Diseño minimalista y centrado */}
      <section className="relative px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-5xl mx-auto">
          {/* Contenedor centrado del hero */}
          <div className="text-center space-y-8 mb-16">
            {/* Badge sutil */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#556B2F]/5 border border-[#556B2F]/10">
              <span className="h-2 w-2 rounded-full bg-[#556B2F] animate-pulse" />
              <span className="text-xs tracking-[0.2em] text-[#556B2F] font-medium uppercase">
                {translations?.maintexts?.badge ?? "Apartamento rural"}
              </span>
            </div>

            {/* Título principal - más grande y con mejor spacing */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight text-gray-900 max-w-3xl mx-auto">
              {heroTitle}
            </h1>

            {/* Subtítulo más sutil */}
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-light">
              {heroSubtitle}
            </p>

            {/* CTA principal único y destacado */}
            <div className="pt-4">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#556B2F] text-white hover:bg-[#6b8538] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span className="text-base font-medium">{heroCtaPrimary}</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            {/* Datos rápidos - más espaciados y elegantes */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-8 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#556B2F]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {translations?.maintexts?.quick1 ?? "Hasta 4 personas"}
              </span>
              <span className="inline-flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#556B2F]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                {translations?.maintexts?.quick2 ?? "Jacuzzi exterior"}
              </span>
              <span className="inline-flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#556B2F]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
                {translations?.maintexts?.quick3 ?? "Parking gratuito"}
              </span>
            </div>
          </div>

          {/* Imagen principal - más grande y con mejor presentación */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
              <HeroSlider />
              {/* Overlay sutil para mejorar legibilidad si se necesita */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Elemento decorativo */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#556B2F]/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#d84b44]/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* Scroll indicator sutil */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </main>
  );
}
