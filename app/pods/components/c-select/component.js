import Ember from 'ember';
import cFormComponent from 'ember-project-template/mixins/c-form-component';

export default Ember.Component.extend(cFormComponent, {
  // Component setup
  bemBlockName: 'c-select',

  // onChange() {},

  // Actions
  actions: {
    onChange(newValue) {
      this.sendAction('onChange', newValue);
    }
  }
});
