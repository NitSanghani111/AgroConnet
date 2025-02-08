import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en.json";
import translationHI from "./locales/hi.json";
import translationGU from "./locales/gu.json";
import translationPA from "./locales/pa.json";
import translationMR from "./locales/mr.json";



i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: { ...translationEN,  }
      },
      hi: {
        translation: { ...translationHI, }
      },
      gu: {
        translation: { ...translationGU, }
      },
      pa: {
        translation: { ...translationPA, }
      },
      mr: {
        translation: { ...translationMR,  }
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;