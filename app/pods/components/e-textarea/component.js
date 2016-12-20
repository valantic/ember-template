import Ember from 'ember';
import eFormComponent from 'ember-project-template/mixins/e-form-component';

export default Ember.Component.extend(eFormComponent, {
  cols: 25,
  bemBlockName: 'e-textarea',
  rows: 5
});
