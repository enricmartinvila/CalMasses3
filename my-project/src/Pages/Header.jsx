import traduccionesCat from "../languaguesFiles/cat.json";
import traduccionesEng from "../languaguesFiles/eng.json";
import traduccionesEs from "../languaguesFiles/es.json";
import { useState, useEffect } from "react";
import { useI18n } from "../Components/i18nContext";

export default function Header() {
  const { currLang, translations, handleSelectLanguage } = useI18n();


    return (
            <header className=" bg-white text-black py-4 flex items-center justify-between shadow-md">
              {/* Logo a la izquierda */}
              <div className="flex items-center ml-5">
                <img src="/path/to/your/logo.png" alt="Logo" className="w-8 h-8 mr-5" />
                <span className="text-2xl font-bold">Cal Masses</span>
              </div>
        
              <div className="flex items-center mr-12">
                <select className="bg-transparent text-[#556B2F] text-md font-bold rounded-lg py-2  border-none cursor-pointer"  onChange={(e) => handleSelectLanguage(e.target.value)}>
                  <option value="cat">Català</option>
                  <option value="es">Español</option>
                  <option value="en">English</option>
                </select>
              </div>
            </header>
    );
};