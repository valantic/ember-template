import Ember from 'ember';
import eFormComponent from 'ember-project-template/mixins/e-form-component';

// BEGIN-FREESTYLE-USAGE e-select
export default Ember.Component.extend(eFormComponent, {
  bemBlockName: 'e-select',
  items: [],
  multiple: null,
  size: 0,
  state: 'default',

  actions: {
    changed(newValue) {
      this.set('groupValue', newValue);
      this.sendAction('changed', newValue);
    }
  }
});
// END-FREESTYLE-USAGE
