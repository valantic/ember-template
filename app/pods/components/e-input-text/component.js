import Ember from 'ember';
import eFormComponentClass from '../e-form-component-class/component';

export default eFormComponentClass.extend({
  bemBlockName: 'e-input-text',
  type: 'text',
  textCentered: false,
  noFocus: false,

  class: Ember.computed('textCentered', 'noFocus', function() {
    const bemBlockName = this.get('bemBlockName');
    const textCentered = this.get('textCentered');
    const classValue = '--text-center ';
    const noFocusClass = 'e-input-text--no-focus';
    let className = '';

    if (textCentered) {
      className = bemBlockName + classValue;
    } else {
      className = '';
    }

    if (this.get('noFocus')) {
      className += noFocusClass;
    }

    return className;
  }),

  actions: {
    doFocusOut(event) {
      this.sendAction('doFocusOut', event);
    }
  }
});
