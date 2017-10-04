/**
 * @param {object} app The Application
 */
export function initialize(app) { // TODO: refactor as described on https://github.com/jasonmit/ember-intl#setting-runtime-locale
  const intl = app.lookup('service:intl');
  const locales = intl.get('locales');
  const fallbackLang = 'en'; // It seems not possible to get this from ember-intl
  const navigator = window.navigator || {};
  const userLanguages = navigator.languages || [navigator.language || navigator.userLanguage];
  const firstLanguage = userLanguages && userLanguages.length ? userLanguages[0] : fallbackLang;
  let language = firstLanguage ? firstLanguage.substring(0, 2) : fallbackLang;

  // Check if the browser language is available
  // If not, fall back to default language
  if (locales.indexOf(language) === -1) {
    language = fallbackLang;
  }

  intl.setLocale(language);
}

export default {
  name: 'intl',
  initialize
};
