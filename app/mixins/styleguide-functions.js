import Ember from 'ember';

export default Ember.Mixin.create({

  /**
   * Switches the main stylesheet in the document.
   * @param {boolean} styleGuideIsActive true when it is
   */
  toggleStylesheet: function(styleGuideIsActive) {
    const styleSheetTag = document.querySelector('head > .project-css');
    const styleSheetStyleguide = 'assets/style-guide.css';
    let styleSheetOriginal;

    /**
     * Saves original Stylesheet to a data-attribute for later restore
     */
    const saveOriginalStyleSheet = function() {
      styleSheetOriginal = styleSheetTag.getAttribute('href');
      styleSheetTag.setAttribute('data-href-original', styleSheetOriginal);
    };

    /**
     * Reads the previously saved original stylesheet
     * @returns {string} Original stylesheet path
     */
    const getDefaultStyleSheet = function() {
      return styleSheetTag.getAttribute('data-href-original', styleSheetOriginal);
    };

    /**
     * Sets the stylesheet path to styleguide if needed, else restore the original value
     * @param {string} styleSheetPath Stylesheet path
     */
    const setStyleSheet = function(styleSheetPath) {
      styleSheetTag.setAttribute('href', styleSheetPath);
    };

    if (styleGuideIsActive) {
      saveOriginalStyleSheet();
      setStyleSheet(styleSheetStyleguide);
    } else {
      setStyleSheet(getDefaultStyleSheet());
    }
  }
});
