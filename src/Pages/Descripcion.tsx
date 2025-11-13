import { useI18n } from "../Components/i18nContext";

export default function Descripcion() {
  const { translations } = useI18n();
  const about = translations?.aboutustexts ?? {};

  return (
    <section
      id="descripcion"
      className="pt-24 pb-24 px-6 md:px-10 lg:px-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Título + introducción */}
        <header className="space-y-4">
          <p className="uppercase tracking-[0.3em] text-xs text-[#556B2F]">
            {about.badge}
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            {about.titleinside}
          </h2>

          {about.intro && (
            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
              {about.intro}
            </p>
          )}
        </header>

        {/* Texto principal + Highlights */}
        <div className="grid gap-12 lg:grid-cols-[1.6fr,1fr] items-stretch">
          {/* Tarjeta grande — misma altura que las 4 pequeñas */}
          <article className="bg-white rounded-3xl shadow-md border border-[#556B2F]/20 p-6 md:p-10 space-y-5 text-sm md:text-base text-gray-700 leading-relaxed h-full">
            {about.firstText && <p>{about.firstText}</p>}
            {about.secondText && <p>{about.secondText}</p>}
            {about.thirdText && <p>{about.thirdText}</p>}
            {about.fourthText && <p>{about.fourthText}</p>}
          </article>

          {/* Columna de small cards */}
          <aside className="space-y-4 md:space-y-5">
            <Highlight
              label={about.highlight1_label}
              value={about.highlight1_value}
            />
            <Highlight
              label={about.highlight2_label}
              value={about.highlight2_value}
            />
            <Highlight
              label={about.highlight3_label}
              value={about.highlight3_value}
            />
            <Highlight
              label={about.highlight4_label}
              value={about.highlight4_value}
            />
          </aside>
        </div>
      </div>
    </section>
  );
}

type HighlightProps = {
  label?: string;
  value?: string;
};

function Highlight({ label, value }: HighlightProps) {
  if (!label && !value) return null;

  return (
    <div className="rounded-2xl bg-white border border-[#556B2F]/20 shadow-sm p-5 flex flex-col gap-1 transition hover:shadow-md">
      {label && (
        <span className="text-[11px] uppercase tracking-wide text-[#556B2F]">
          {label}
        </span>
      )}
      {value && (
        <span className="text-sm md:text-base font-medium text-gray-900 leading-snug">
          {value}
        </span>
      )}
    </div>
  );
}
