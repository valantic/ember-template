import Ember from 'ember';
import eFormComponent from 'ember-project-template/mixins/e-form-component';

export default Ember.Component.extend(eFormComponent, {
  // Component Setup
  bemBlockName: 'e-textarea',

  // Handed in properties
  autofocus: false,
  disabled: false,
  readonly: false,
  required: false,
  id: '',
  name: '',
  title: '',
  value: '',
  placeholder: '',
  maxlength: -1,
  cols: 25,
  rows: 5,
  spellcheck: true,
  tabindex: '',
  wrap: 'soft'
});
