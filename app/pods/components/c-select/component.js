import Ember from 'ember';
import cFormComponent from 'ember-project-template/mixins/c-form-component';

export default Ember.Component.extend(cFormComponent, {
  bemBlockName: 'c-select',

  actions: {
    changed(newValue) {
      this.sendAction('changed', newValue);
    }
  }
});
