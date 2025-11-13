// i18nContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import traduccionesCat from "../languaguesFiles/cat.json";
import traduccionesEng from "../languaguesFiles/eng.json";
import traduccionesEs from "../languaguesFiles/es.json";

const i18nContext = createContext();

// Mapa de traducciones organizado por código
const translationsMap = {
  cat: traduccionesCat,
  es: traduccionesEs,
  en: traduccionesEng,
};

// Idiomas soportados
const SUPPORTED_LANGS = ["cat", "es", "en"];

// Convertir "es-ES" → "es"
const normalizeLang = (langCode) => {
  if (!langCode) return "cat";
  const short = langCode.split("-")[0].toLowerCase();
  return SUPPORTED_LANGS.includes(short) ? short : "cat";
};

export const I18nProvider = ({ children }) => {
  const [currLang, setCurrLang] = useState("cat");
  const [translations, setTranslations] = useState(traduccionesCat);

  // 🔥 Detectar idioma del navegador al cargar
  useEffect(() => {
    const browserLang = normalizeLang(navigator.language || navigator.languages?.[0]);
    setCurrLang(browserLang);
    setTranslations(translationsMap[browserLang]);
  }, []);

  // 🔥 Cambiar idioma manualmente
  const handleSelectLanguage = (newLanguage) => {
    const normalized = normalizeLang(newLanguage);
    setCurrLang(normalized);
    setTranslations(translationsMap[normalized]);
  };

  return (
    <i18nContext.Provider
      value={{
        currLang,
        translations,
        handleSelectLanguage,
      }}
    >
      {children}
    </i18nContext.Provider>
  );
};

export const useI18n = () => useContext(i18nContext);