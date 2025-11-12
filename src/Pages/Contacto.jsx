import { useCallback, useState } from "react";
import { WhatsIcon } from "../assets/whatsapp_icon";
import { useI18n } from "../Components/i18nContext";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function Contacte() {
  const { translations } = useI18n();

  const ACCENT = "#556B2F";
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
    } catch {
      // fallback: nada
    }
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
    <section id="contacto" className="w-full bg-white text-black" aria-labelledby="contact-title">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <h1
          id="contact-title"
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          style={{ color: ACCENT }}
        >
          {translations.titles.contact}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card info */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-md p-6 md:p-8">
            <p className="text-lg font-semibold mb-6" style={{ color: ACCENT }}>
              Alba
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPinIcon className="h-6 w-6 flex-shrink-0" style={{ color: ACCENT }} />
                <span className="text-gray-900">{ADDRESS_TEXT}</span>
              </li>

              <li className="flex items-center gap-3">
                <EnvelopeIcon className="h-6 w-6 flex-shrink-0" style={{ color: ACCENT }} />
                  <span className="text-gray-900 hover:underline"><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span>
              </li>

              <li className="flex items-center gap-3">
                <PhoneIcon className="h-6 w-6 flex-shrink-0" style={{ color: ACCENT }} />
                <span className="text-gray-900 hover:underline"><a href={`tel:${PHONE_E164}`}>{PHONE_HUMAN}</a></span>
              </li>
            </ul>

            {/* CTAs útiles */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={WHATS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-white transition focus:outline-none focus:ring-2"
                style={{ backgroundColor: ACCENT }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(0.95)")}
                onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
                aria-label="Abrir chat de WhatsApp para consulta o reserva"
              >
                <WhatsIcon className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={MAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold border transition focus:outline-none focus:ring-2"
                style={{ color: ACCENT, borderColor: ACCENT }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#EEF2E6")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                aria-label="Cómo llegar con Google Maps"
              >
                <MapPinIcon className="h-5 w-5" />
                <span>{translations.contacto.arrival}</span>
              </a>

              <button
                onClick={downloadVCard}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold border transition focus:outline-none focus:ring-2"
                style={{ color: ACCENT, borderColor: ACCENT }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#EEF2E6")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                aria-label="Guardar contacto de Cal Masses"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17 3H7a2 2 0 00-2 2v14l7-3 7 3V5a2 2 0 00-2-2z" />
                </svg>
                <span>{translations.contacto.save_contact}</span>
              </button>

              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold border transition focus:outline-none focus:ring-2"
                style={{ color: ACCENT, borderColor: ACCENT }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#EEF2E6")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                aria-label="Copiar email al portapapeles"
              >
                <EnvelopeIcon className="h-5 w-5" />
                <span>{copied ? translations.contacto.copied : translations.contacto.copy_email}</span>
              </button>
            </div>
          </div>

          {/* Mapa */}
          <div className="rounded-2xl overflow-hidden border shadow-md border-gray-200">
            <div className="relative aspect-[4/3] md:aspect-[5/4] bg-gray-50">
              <iframe
                title="Ubicación Cal Masses en Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2979.978258593224!2d1.7557528760743542!3d41.67781297126447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDQwJzQwLjEiTiAxwrA0NSczMC4wIkU!5e0!3m2!1ses!2ses!4v1713543105295!5m2!1ses!2ses"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
            <div
              className="px-5 py-3 text-sm font-medium"
              style={{ color: ACCENT, backgroundColor: "#F8FAF6", borderTop: "1px solid #E5E7EB" }}
            >
              {ADDRESS_TEXT}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}