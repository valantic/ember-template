import Ember from 'ember';
import eFormComponent from 'ember-project-template/mixins/e-form-component';

// BEGIN-FREESTYLE-USAGE e-input-checkbox
export default Ember.Component.extend(eFormComponent, {
  // Component Setup
  bemBlockName: 'e-input-checkbox',

  // Handed in properties
  disabled: false,
  checked: false,
  required: false,
  autofocus: false,
  name: '',
  id: '',

  // Handed in closures
  onCheckboxChange(/* checked */) {},

  // Actions
  actions: {
    onCheckboxClick(checked) {
      this.get('onCheckboxChange')(!checked);
    }
  }
});
// END-FREESTYLE-USAGE
