import Ember from 'ember';
import cFormComponent from 'ember-project-template/mixins/c-form-component';

export default Ember.Component.extend(cFormComponent, {
  bemBlockName: 'c-textarea',
  rows: 5,
  cols: 25,
  focusOnInsert: false,

  // Life cycle
  didInsertElement() {
    if (this.get('focusOnInsert')) {
      this.$().find('textarea').focus();
    }
  }
});
