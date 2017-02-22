import Ember from 'ember';
import eFormComponent from 'ember-project-template/mixins/e-form-component';

export default Ember.Component.extend(eFormComponent, {
  // Component Setup
  bemBlockName: 'e-input-text',
  type: 'text',

  // Handed in properties
  hasTextCentered: false,
  hasNoFocus: false,

  // It's needed bcs there is no tagName, so it set's classes direct to input-tag
  class: Ember.computed(
      'hasTextCentered',
      'hasNoFocus',
      function() {
        let isFirst = true;
        const bemBlockName = this.get('bemBlockName');
        let className = '';
        const hasTextCenteredModifier = '--text-center';
        const hasNoFocusModifier = '--no-focus';

        if (this.get('hasTextCentered')) {
          // this conditional avoids unnecessary whitespace between class names
          if (!isFirst) {
            className += ' ';
            isFirst = false;
          }
          className += bemBlockName + hasTextCenteredModifier;
        }

        if (this.get('hasNoFocus')) {
          if (!isFirst) {
            className += ' ';
            isFirst = false;
          }
          className += bemBlockName + hasNoFocusModifier;
        }

        return className;
      }
  ),

  actions: {
    doFocusOut(event) {
      this.sendAction('doFocusOut', event);
    }
  }
});
