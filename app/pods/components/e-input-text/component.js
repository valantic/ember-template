import Ember from 'ember';
import eFormComponent from 'ember-project-template/mixins/e-form-component';

export default Ember.Component.extend(eFormComponent, {
  // Component Setup
  bemBlockName: 'e-input-text',

  // Handed in properties
  autofocus: false,
  disabled: false,
  readonly: false,
  required: false,
  autocomplete: 'off',
  maxlength: -1,
  id: '',
  name: '',
  type: 'text',
  placeholder: '',
  title: '',
  value: '',
  hasTextCentered: false,
  hasNoFocus: false,
  hasNoBorder: false,

  // Internal properties
  _class: Ember.computed(
    'hasTextCentered',
    'hasNoFocus',
    'hasNoBorder',
    function() {
      const bemBlockName = this.get('bemBlockName');
      const classNames = [];

      if (this.get('hasTextCentered')) {
        classNames.push(`${bemBlockName}--text-center`);
      }

      if (this.get('hasNoFocus')) {
        classNames.push(`${bemBlockName}--no-focus`);
      }

      if (this.get('hasNoBorder')) {
        classNames.push(`${bemBlockName}--no-border`);
      }

      return classNames.join(' ');
    }
  ),

  // Actions
  actions: {
    doFocusOut(event) {
      this.sendAction('doFocusOut', event);
    },
    keyup() {
      this.sendAction('keyup');
    }
  }
});
