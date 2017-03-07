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
  placeholder: '',
  title: '',
  value: '',
  hasTextCentered: false,
  hasNoFocus: false,

  // Internal properties
  _class: Ember.computed(
    'hasTextCentered',
    'hasNoFocus',
    function() {
      const bemBlockName = this.get('bemBlockName');
      const classNames = [];

      if (this.get('hasTextCentered')) {
        classNames.push(`${bemBlockName}--text-center`);
      }

      if (this.get('hasNoFocus')) {
        classNames.push(`${bemBlockName}--no-focus`);
      }

      return classNames.join(' ');
    }
  ),

  // Actions
  actions: {
    doFocusOut(event) {
      this.sendAction('doFocusOut', event);
    }
  }
});
