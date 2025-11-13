import { useCallback, useState } from "react";
import { WhatsIcon } from "../assets/whatsapp_icon";
import { useI18n } from "../Components/i18nContext";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function Contacte() {
  const { translations } = useI18n();

  const ACCENT = "#556B2F";
  const ACCENT_BG = "#EEF2E6";
  const ADDRESS_TEXT =
    "Raval del Sellarês, Cal Masses, s/n · 08253 · St. Salvador de Guardiola";
  const LAT = 41.6778129;
  const LNG = 1.7557529;

  const PHONE_E164 = "+34690332521";
  const PHONE_HUMAN = "+34 690 332 521";
  const EMAIL = "calmasses@gmail.com";

  const WHATS_URL =
    "https://wa.me/34690332521?text=Hola%20Alba,%20quisiera%20más%20información%20sobre%20Cal%20Masses";
  const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`;

  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  }, []);

  const downloadVCard = useCallback(() => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Cal Masses;Alba;;;",
      "FN:Alba · Cal Masses",
      `TEL;TYPE=CELL,VOICE:${PHONE_E164}`,
      `EMAIL;TYPE=INTERNET:${EMAIL}`,
      `ADR;TYPE=WORK:;;${ADDRESS_TEXT.replaceAll(" · ", ", ")};Barcelona;;08253;España`,
      `GEO:${LAT};${LNG}`,
      "ORG:Cal Masses",
      "NOTE:Alojamiento rural",
      "END:VCARD",
    ].join("\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CalMasses.vcf";
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  return (
    <section id="contacto" className="bg-white text-black pt-24 pb-24 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* TÍTULO (alineado left + estilo unificado) */}
        <header className="space-y-4 text-left">
          <p className="uppercase tracking-[0.3em] text-xs" style={{ color: ACCENT }}>
            {translations?.contacto?.badge ?? "Contacte i reserves"}
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            {translations.titles.contact}
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
            {translations?.contacto?.intro ??
              "Si tens qualsevol dubte sobre la teva estada, disponibilitat o com arribar, pots contactar directament amb nosaltres."}
          </p>
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          {/* CARD DE CONTACTO */}
          <div className="rounded-3xl border border-[#556B2F]/20 bg-white shadow-md p-6 md:p-8 flex flex-col justify-between h-full">
            <div className="space-y-6">
              <p className="text-lg font-semibold" style={{ color: "black" }}>
                Alba · Cal Masses
              </p>

              <ul className="space-y-4 text-gray-800 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <MapPinIcon className="h-6 w-6" style={{ color: "black" }} />
                  <span>{ADDRESS_TEXT}</span>
                </li>

                <li className="flex items-center gap-3">
                  <EnvelopeIcon className="h-6 w-6" style={{ color: "black" }} />
                  <a href={`mailto:${EMAIL}`} className="hover:underline">
                    {EMAIL}
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <PhoneIcon className="h-6 w-6" style={{ color: "black" }} />
                  <a href={`tel:${PHONE_E164}`} className="hover:underline">
                    {PHONE_HUMAN}
                  </a>
                </li>
              </ul>
            </div>

            {/* BOTONES */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp */}
              <a
                href={WHATS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-white shadow transition hover:brightness-95"
                style={{ backgroundColor: "black" }}
              >
                <WhatsIcon className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>

              {/* Llegar */}
              <a
                href={MAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold border transition hover:bg-[#EEF2E6]"
                style={{ color: ACCENT, borderColor: ACCENT }}
              >
                <MapPinIcon className="h-5 w-5" />
                <span>{translations.contacto.arrival}</span>
              </a>

              {/* Guardar contacto */}
              <button
                onClick={downloadVCard}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold border transition hover:bg-[#EEF2E6]"
                style={{ color: ACCENT, borderColor: ACCENT }}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 3H7a2 2 0 00-2 2v14l7-3 7 3V5a2 2 0 00-2-2z" />
                </svg>
                <span>{translations.contacto.save_contact}</span>
              </button>

              {/* Copiar email */}
              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold border transition hover:bg-[#EEF2E6]"
                style={{ color: ACCENT, borderColor: ACCENT }}
              >
                <EnvelopeIcon className="h-5 w-5" />
                <span>{copied ? translations.contacto.copied : translations.contacto.copy_email}</span>
              </button>
            </div>
          </div>

          {/* MAPA */}
          <div className="rounded-3xl overflow-hidden border border-[#556B2F]/20 shadow-md flex flex-col h-full">
            <div className="relative aspect-[4/3] md:aspect-[5/4] bg-gray-50">
              <iframe
                title="Ubicación Cal Masses en Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2979.978258593224!2d1.7557528760743542!3d41.67781297126447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDQwJzQwLjEiTiAxwrA0NSczMC4wIkU!5e0!3m2!1ses!2ses!4v1713543105295!5m2!1ses!2ses"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                allowFullScreen
              />
            </div>

            <div
              className="px-5 py-3 text-sm font-medium border-t border-gray-200"
              style={{ color: ACCENT, backgroundColor: ACCENT_BG }}
            >
              {ADDRESS_TEXT}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}