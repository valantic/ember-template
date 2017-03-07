import Ember from 'ember';
import eFormComponent from 'ember-project-template/mixins/e-form-component';

export default Ember.Component.extend(eFormComponent, {
  // Component Setup
  bemBlockName: 'e-input-radio',

  // Handed in properties
  disabled: false,
  groupValue: '',
  value: '',
  name: '',
  text: '',
  noInputVisible: false,
  grid: false,

  // Internal properties
  _fakeRadioClassNames: Ember.computed(
    'noInputVisible',
    'grid',
    function() {
      const bemBlockName = this.get('bemBlockName');
      const classNames = [];

      if (this.get('noInputVisible')) {
        classNames.push(`${bemBlockName}__fake-radio--noinput`);
      }

      if (this.get('grid')) {
        classNames.push(`${bemBlockName}__fake-radio--grid`);
      }

      return classNames.join(' ');
    }
  ),

  // Actions
  actions: {
    changed(newValue) {
      this.sendAction('changed', newValue);
    }
  }
});
