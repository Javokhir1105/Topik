import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uzLanguage from '../public/languages/uzbek/uzbek.json'
import enLanguage from '../public/languages/english/english.json'
import ruLanguage from '../public/languages/russian/russian.json'
import jaLanguage from '../public/languages/yapon/yapon.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: i18n.language,
    debug: true,
    resources:{
     uz:{translation:uzLanguage},
     en:{translation:enLanguage},
     ru:{translation:ruLanguage},
     ja:{translation:jaLanguage}
    },
    interpolation: {
      escapeValue: false, 
    }
  });


export default i18n;