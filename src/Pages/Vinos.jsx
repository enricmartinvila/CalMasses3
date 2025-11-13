import { useI18n } from "../Components/i18nContext";

export default function Vinos() {
  const { translations } = useI18n();
  const t = translations?.vinos ?? {};

  const images = ["/fotosVino/fotomano.webp"];

  return (
    <section
      id="vinos"
      className="pt-24 pb-24 px-6 md:px-10 lg:px-20 bg-white"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Título */}
        <header className="space-y-4 text-left">
          <p className="uppercase tracking-[0.3em] text-xs text-[#556B2F]">
            {t.badge}
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            {t.title}
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
            {t.subtitle}
          </p>
        </header>

        {/* Contenido */}
        <div className="grid gap-10 lg:grid-cols-[1.15fr,1fr] items-stretch">

          {/* Imagen en card */}
          <div className="bg-white rounded-3xl shadow-md border border-[#556B2F]/20 overflow-hidden h-full">
            <img
              src={images[0]}
              alt={t.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Texto en card */}
          <article className="bg-white rounded-3xl shadow-md border border-[#556B2F]/20 p-6 md:p-8 text-sm md:text-base text-gray-700 leading-relaxed flex flex-col gap-5 hover:shadow-lg transition">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
            <p>{t.p4}</p>
            <p>{t.p5}</p>
            <p>{t.p6}</p>

            <p className="mt-2 text-xs text-[#556B2F] tracking-wide">
              {t.footer}
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}