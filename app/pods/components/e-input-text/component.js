import Ember from 'ember';
import CFormControl from '../c-form-control/component';

export default CFormControl.extend({
  defaultClassName: 'e-input-text',
  type: 'text',
  textCentered: false,
  noFocus: false,

  class: Ember.computed('textCentered', 'noFocus', function() {
    const defaultClassName = this.get('defaultClassName');
    const textCentered = this.get('textCentered');
    const classValue = '--text-center ';
    const noFocusClass = 'e-input-text--no-focus';
    let className = '';

    if (textCentered) {
      className = defaultClassName + classValue;
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
