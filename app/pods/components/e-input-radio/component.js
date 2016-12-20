import Ember from 'ember';
import eFormComponent from 'ember-project-template/mixins/e-form-component';

export default Ember.Component.extend(eFormComponent, {
  bemBlockName: 'e-input-radio',
  type: 'radio',
  noInputVisible: false,
  text: null,
  grid: false,

  actions: {
    changed(newValue) {
      this.sendAction('changed', newValue);
    }
  },

  noInputClassNames: Ember.computed('noInputVisible', function() {
    const noInputClass = 'e-input-radio__fake-radio--noinput';

    if (this.get('noInputVisible')) {
      return noInputClass;
    }

    return null;
  }),

  gridClassName: Ember.computed('grid', function() {
    const gridClass = 'e-input-radio__fake-radio--grid';

    if (this.get('grid')) {
      return gridClass;
    }

    return null;
  })

});
