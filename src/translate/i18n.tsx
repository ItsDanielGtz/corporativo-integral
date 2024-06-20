import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEnglish from "./english.json";
import translationSpanish from "./spanish.json";

const resources = {
  en: {
    translation: translationEnglish,
  },
  es: {
    translation: translationSpanish,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "es",
  // keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18next