import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import hiTranslations from './locales/hi.json';
import guTranslations from './locales/gu.json';
import paTranslations from './locales/pa.json';
import mrTranslations from './locales/mr.json';
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      hi: { translation: hiTranslations },
      gu: { translation: guTranslations },
      pa: { translation: paTranslations },
      mr: { translation: mrTranslations },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;