import Ember from 'ember';
import config from '../config/environment';

export default Ember.Mixin.create({

  /**
   * Switches the main stylesheet in the document.
   * @param {boolean} styleGuideIsActive true when it is
   */
  toggleStylesheet: function(styleGuideIsActive) {
    const styleSheetTag = document.querySelector('head > .project-css');
    const styleSheetStyleguide = 'assets/style-guide.css';
    // Using the config.modulePrefix makes it possible to make this function a lot simpler
    // and run consecutive tests.
    const styleSheetOriginal = `assets/${config.modulePrefix}.css`;

    /**
     * Sets the stylesheet path to styleguide if needed, else restore the original value
     * @param {string} styleSheetPath Stylesheet path
     */
    const setStyleSheet = function(styleSheetPath) {
      styleSheetTag.setAttribute('href', styleSheetPath);
    };

    if (styleGuideIsActive) {
      setStyleSheet(styleSheetStyleguide);
    } else {
      setStyleSheet(styleSheetOriginal);
    }
  }
});
