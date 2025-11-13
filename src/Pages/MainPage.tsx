import { useI18n } from "../Components/i18nContext";
import { HeroSlider } from "../Components/Slider";

export default function MainPage() {
  const { translations } = useI18n();

  const heroTitle =
    translations?.maintexts?.title ?? "Tu refugio rural cerca de Manresa";
  const heroSubtitle =
    translations?.maintexts?.text ??
    "Un apartamento tranquilo, rodeado de naturaleza, pensado para desconectar con todas las comodidades.";
  const heroCtaPrimary =
    translations?.maintexts?.cta_primary ?? "Consultar disponibilidad";
  const heroCtaSecondary =
    translations?.maintexts?.cta_secondary ?? "Ver espacios";

  return (
    <main className="pt-24 min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="px-6 md:px-10 lg:px-20 pb-16">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.2fr,1fr] items-center">
          {/* Texto */}
          <div className="space-y-6">
            <p className="uppercase tracking-[0.3em] text-xs text-[#556B2F]">
              {translations?.maintexts?.badge ?? "Apartamento rural · QEhome"}
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              {heroTitle}
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {heroSubtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-black text-white hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-gray-800/50"
              >
                {heroCtaPrimary}
              </a>

              <a
                href="#vinos"
                className="relative inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium border border-[#556B2F] text-[#556B2F] overflow-hidden transition group"
              >
                {/* Texto encima del vino */}
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  {heroCtaSecondary}
                </span>

                {/* Capa de vino que se llena en hover */}
                <span className="absolute inset-0 bg-[#D97B76] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </a>
            </div>

            {/* Pequeños datos “rápidos” */}
            <div className="flex flex-wrap gap-4 text-xs md:text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#556B2F]" />{" "}
                {translations?.maintexts?.quick1 ?? "Hasta 4 personas"}
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#556B2F]" />
                {translations?.maintexts?.quick2 ?? "Jacuzzi exterior"}
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#556B2F]" />
                {translations?.maintexts?.quick3 ?? "Parking gratuito"}
              </span>
            </div>
          </div>

          {/* Imagen / Slider principal */}
          <div className="relative w-full h-[320px] md:h-[420px] lg:h-[460px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl">
              {/* Si ya tienes un Slider funcionando, lo reutilizamos */}
              <HeroSlider />
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE “POR QUÉ ESTE APARTAMENTO” */}
      <section className="px-6 md:px-10 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
          <FeatureCard
            title={translations?.maintexts?.feature1_title ?? "Entorno natural"}
            text={
              translations?.maintexts?.feature1_text ??
              "Viñas, silencio y cielo estrellado, a pocos minutos en coche de Manresa."
            }
          />
          <FeatureCard
            title={
              translations?.maintexts?.feature2_title ?? "Comodidades modernas"
            }
            text={
              translations?.maintexts?.feature2_text ??
              "Wi-Fi, cocina equipada, climatización y todos los detalles para una estancia cómoda."
            }
          />
          <FeatureCard
            title={
              translations?.maintexts?.feature3_title ??
              "Pensado para desconectar"
            }
            text={
              translations?.maintexts?.feature3_text ??
              "Espacios amplios, luz natural y una decoración sencilla pero cálida."
            }
          />
        </div>
      </section>
    </main>
  );
}

type FeatureCardProps = {
  title: string;
  text: string;
};

function FeatureCard({ title, text }: FeatureCardProps) {
  return (
    <article className="rounded-2xl border border-[#556B2F]/20 bg-white/70 shadow-sm/40 shadow-md p-6 flex flex-col gap-2">
      <h3 className="text-sm font-semibold tracking-wide text-gray-900">
        {title}
      </h3>
      <p className="text-sm text-[#556B2F] leading-relaxed">{text}</p>
    </article>
  );
}
