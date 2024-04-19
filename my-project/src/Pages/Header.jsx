import traduccionesCat from "../languaguesFiles/cat.json";
import traduccionesEng from "../languaguesFiles/eng.json";
import traduccionesEs from "../languaguesFiles/es.json";
import { useState, useEffect } from "react";
import { useI18n } from "../Components/i18nContext";

export default function Header() {
  const { translations, handleSelectLanguage } = useI18n();

  const handleChange = (event) => {
    console.log(event.target.value);
    const newLanguage = event.target.value;
    handleSelectLanguage(newLanguage);
  };

    return (
            <header className="w-full bg-white text-black py-4 flex items-center justify-between shadow-md fixed top-0 z-10" >
              {/* Logo a la izquierda */}
              <div className="flex items-center ml-5">
                {/* <img src="/path/to/your/logo.png" alt="Logo" className="w-8 h-8 mr-5" /> */}
                {/* <span className="text-3xl font-bold">Cal Masses</span> */}
                <img src={'/fotosTargetes/fotosCaseta/logo.avif'} alt="Logo" className="h-12 w-18" />
              </div>
              <div>
                <ul className="flex gap-2 font-bold text-[#556B2F] text-xl">
                  <li>
                      <a href="#main">{translations.menu.main}</a>                   
                  </li>
                  <li>
                    /
                  </li>
                  <li>
                      <a href="#descripcionID">{translations.menu.aboutus}</a>                   
                  </li>
                  <li>
                    /
                  </li>
                  <li>
                      <a href="#espaciosID">{translations.menu.spaces}</a>                   
                  </li>
                  <li>
                    /
                  </li>
                  <li>
                      <a href="#contacto">{translations.menu.contact}</a>                   
                  </li>
                </ul>
              </div>
        
              <div className="flex items-center mr-12">
              <select
                className="bg-transparent text-[#556B2F] text-md font-bold rounded-lg py-2 border-2 border-[#556B2F] shadow-sm cursor-pointer p-2"
                onChange={(e) => handleChange(e)}
              >
                <option className=" font-semibold hover:bg-[#556b2f]" value="cat">Catalan</option>
                <option className=" font-semibold" value="es">Español 🇪🇸</option>
                <option className=" font-semibold" value="en">English 🇬🇧</option>
              </select>

              </div>
            </header>
    );
};