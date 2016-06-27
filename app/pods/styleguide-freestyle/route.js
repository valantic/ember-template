import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

    toggleStylesheet(styleGuideIsActive) {
      const styleSheetTag = document.querySelector('head > .project-css');
      const styleSheetStyleguide = 'assets/style-guide.css';
      let styleSheetOriginal;

      /**
       * Saves original Stylesheet to a data-attribute for later restore
       */
      function saveOriginalStyleSheet() {
        styleSheetOriginal = styleSheetTag.getAttribute('href');
        styleSheetTag.setAttribute('data-href-original', styleSheetOriginal);
      }

      /**
       * Reads the previously saved original stylesheet
       * @returns {string} Original stylesheet path
       */
      function getDefaultStyleSheet() {
        return styleSheetTag.getAttribute('data-href-original', styleSheetOriginal);
      }

      /**
       * Sets the stylesheet path to styleguide if needed, else restore the original value
       * @param {string} styleSheetPath Stylesheet path
       */
      function setStyleSheet(styleSheetPath) {
        styleSheetTag.setAttribute('href', styleSheetPath);
      }

      if (styleGuideIsActive) {
        saveOriginalStyleSheet();
        setStyleSheet(styleSheetStyleguide);
      } else {
        setStyleSheet(getDefaultStyleSheet());
      }
    },
    didTransition() {
      this.send('toggleStylesheet', true);
    },
    willTransition() {
      this.send('toggleStylesheet', false);
    }
  }
});
