import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEnglish from "./english.json";
import translationSpanish from "./spanish.json";

const userLanguage = navigator.language || "en" ;

console.log(navigator.language)

const supportedLanguages = ['en', 'es'];

const resources = {
  en: {
    translation: translationEnglish,
  },
  es: {
    translation: translationSpanish,
  },
};
function getLanguageToUse (lang: string) {
  const langCode = lang.split("-")[0]
  return supportedLanguages.includes(langCode) ? langCode : "en"
  
}


const languageToUSe = getLanguageToUse(userLanguage);


i18next.use(initReactI18next).init({
  resources,
  lng: languageToUSe,
  // keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18next