import Ember from 'ember';
import cFormComponent from 'ember-project-template/mixins/c-form-component';

export default Ember.Component.extend(cFormComponent, {
  bemBlockName: 'c-select',

  // onChange() {},

  actions: {
    onChange(newValue) {
      this.sendAction('onChange', newValue);
    }
  }
});
