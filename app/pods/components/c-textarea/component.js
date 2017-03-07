import Ember from 'ember';
import cFormComponent from 'ember-project-template/mixins/c-form-component';

export default Ember.Component.extend(cFormComponent, {
  // Component setup
  bemBlockName: 'c-textarea',

  // Handed in properties
  rows: 5,
  cols: 25,
  focusOnInsert: false,

  // Handed in closure
  didInsertElement() {
    if (this.get('focusOnInsert')) {
      this.$().find('textarea').focus();
    }
  }
});
