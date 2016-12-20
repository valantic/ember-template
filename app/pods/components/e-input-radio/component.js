import Ember from 'ember';
import eFormComponentClass from '../e-form-component-class/component';

export default eFormComponentClass.extend({
  defaultClassName: 'e-input-radio',
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
