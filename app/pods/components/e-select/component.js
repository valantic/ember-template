import Ember from 'ember';
import eFormComponent from 'ember-project-template/mixins/e-form-component';

export default Ember.Component.extend(eFormComponent, {
  // Component Setup
  bemBlockName: 'e-select',

  // Handed properties
  disabled: false,
  required: false,
  readonly: false,
  id: '',
  name: '',
  title: '',
  multiple: false,
  size: 0,
  items: [],
  groupValue: '',

  // onChange() {},

  // Actions
  actions: {
    onChange(newValue) {
      this.set('groupValue', newValue);

      this.sendAction('onChange', newValue);
    }
  }
});
