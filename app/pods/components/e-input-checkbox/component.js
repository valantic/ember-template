import Ember from 'ember';
import eFormComponent from 'ember-project-template/mixins/e-form-component';

// BEGIN-FREESTYLE-USAGE e-input-checkbox
export default Ember.Component.extend(eFormComponent, {
  checked: false,
  bemBlockName: 'e-input-checkbox',
  type: 'checkbox',

  onCheckboxChange(/* checked */) {},

  actions: {
    onCheckboxClick(checked) {
      this.get('onCheckboxChange')(!checked);
    }
  }
});
// END-FREESTYLE-USAGE
