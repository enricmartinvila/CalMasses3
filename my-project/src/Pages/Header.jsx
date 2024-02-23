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
            <header className=" bg-white text-black py-4 flex items-center justify-between shadow-md">
              {/* Logo a la izquierda */}
              <div className="flex items-center ml-5">
                {/* <img src="/path/to/your/logo.png" alt="Logo" className="w-8 h-8 mr-5" /> */}
                <span className="text-3xl font-bold">Cal Masses</span>
              </div>
              <div>
                <ul className="flex gap-2 font-bold text-[#556B2F] text-xl">
                  <li>
                      <a href="">{translations.menu.main}</a>                   
                  </li>
                  <li>
                    /
                  </li>
                  <li>
                      <a href="">{translations.menu.aboutus}</a>                   
                  </li>
                  <li>
                    /
                  </li>
                  <li>
                      <a href="espaciosID">{translations.menu.spaces}</a>                   
                  </li>
                  <li>
                    /
                  </li>
                  <li>
                      <a href="contactoID">{translations.menu.contact}</a>                   
                  </li>
                </ul>
              </div>
        
              <div className="flex items-center mr-12">
              <select
                className="bg-transparent text-[#556B2F] text-md font-bold rounded-lg py-2 border-none cursor-pointer"
                onChange={(e) => handleChange(e)}
              >
                <option value="cat">Catalan</option>
                <option value="es">Español 🇪🇸</option>
                <option value="en">English 🇬🇧</option>
              </select>

              </div>
            </header>
    );
};