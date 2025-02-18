import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';

import enTranslation from '../locales/en/strings.json';
import viTranslation from '../locales/vi/strings.json';
import 'intl-pluralrules';

const resources = {
  en: {
    translation: enTranslation,
  },
  vi: {
    translation: viTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
