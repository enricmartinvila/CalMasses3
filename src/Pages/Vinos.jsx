// src/Sections/Vinos.jsx
export default function Vinos() {
  const images = [
    "/fotosVino/fotomano.webp",
  ];

  return (
    <section id="vinos" className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Título */}
        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-gray-500">
            Vins
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
            SISU — El primer vi de Cal Masses
          </h2>
        </div>

        {/* Contenido */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* IMAGEN A LA MISMA ALTURA QUE EL TEXTO */}
          <div className="rounded-xl overflow-hidden shadow-md h-full flex">
            <img
              src={images[0]}
              alt="SISU vi de Cal Masses"
              className="w-full h-fit object-cover"
              loading="lazy"
            />
          </div>

          {/* TEXTO */}
          <div className="flex flex-col gap-4 text-gray-700 leading-relaxed">

            <p>
              Us presentem el <strong>SISU</strong>, el primer vi de Cal Masses.
              Elaborat a la verema del 2024 amb raïm de vinyes velles del nostre poble:
              <strong> Macabeu (80%) i Sumoll (20%)</strong>.
            </p>

            <p>
              Collit a mà, derrapat i macerat amb les seves pells durant cinc dies,
              després premsat i deixat reposar sis mesos en dipòsit d’acer inoxidable.
              Embotellat amb el mínim de sulfits i sense filtrar, mantenint la seva autenticitat.
            </p>

            <p>
              És un vi que juga entre colors i estils: un rosat molt especial,
              gairebé un “rosat de blancs”. El seu color recorda els capvespres rogencs del Pla de Bages.
            </p>

            <p>
              Al nas, records de pell de taronja, fruita blanca madura i un toc floral
              i herbaci mediterrani. En boca és fresc i vibrant, amb l’acidesa del
              Macabeu i un punt astringent del Sumoll que evoca sabors de tardor.
            </p>

            <p>
              Ideal per gaudir-lo ben fresquet amb plats lleugers: amanides, pastes,
              arrossos, pizzes, formatges tous… o simplement a soles o en bona companyia.
            </p>

            <p>
              És un projecte petit i honest, que parla de resiliència, identitat i del
              nostre paisatge. Un brisat tradicional del Bages amb una mirada actual:
              mínima intervenció, sense maquillatges i prioritzant l’autenticitat.
            </p>

            <p className="text-xs text-gray-500 tracking-wide">
              Raval del Sellarès — Sant Salvador de Guardiola
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}