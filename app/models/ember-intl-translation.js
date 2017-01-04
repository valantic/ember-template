import TranslationModel from 'ember-intl/models/translation';

/**
 * This file is needed to support dot notation for translations
 */
export default TranslationModel.extend({
  addTranslation(key, value) {
    this.translations[key] = value;
  },

  getValue(key) {
    return this.translations[key];
  }
});
