import config from '../config/environment';

/**
 * Returns the first defined user language or the browser's language.
 * Improvement would be to go through all the user defined languages and pick the first one we support.
 * @returns {string} The language
 */
const calculateLocale = function() {
  const fallbackLang = 'en';
  const navigator = window.navigator || {};
  const userLanguages = navigator.languages || [navigator.language || navigator.userLanguage];
  const firstLanguage = userLanguages && userLanguages.length ? userLanguages[0] : fallbackLang;
  let autolanguage = firstLanguage ? firstLanguage.substring(0, 2) : fallbackLang;

  // Check if the browser language is available
  // If not, fall back to default language
  if (config.i18n.availableLocales.indexOf(autolanguage) === -1) {
    autolanguage = config.i18n.defaultLocale;
  }

  return autolanguage;
};

/**
 * @param {object} app The Application
 */
export function initialize(app) {
  app.lookup('service:i18n').set('locale', calculateLocale());
}

export default {
  name: 'i18n',
  initialize
};
