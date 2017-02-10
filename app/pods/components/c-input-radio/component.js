import Ember from 'ember';
import cFormComponent from 'ember-project-template/mixins/c-form-component';

export default Ember.Component.extend(cFormComponent, {
  classNameBindings: [
    'labelFirst:c-input-radio--label-first',
    'labelUp:c-input-radio--label-up',
    'noInputVisible:c-input-radio--no-input-visible'
  ],
  bemBlockName: 'c-input-radio',
  tagName: 'div',
  items: [],
  noInputVisible: false,
  layout: 'horizontal',
  grid: false,
  gridClassNames: 'col-xxs-12',

  init(...args) {
    this._super(...args);
    this.setSelection();
  },

  didReceiveAttrs(...args) {
    this._super(...args);

    if (this.labelUp) {
      this.labelFirst = true;
    }

    this.setSelection();
  },

  gridClassName: Ember.computed('grid', function() {
    const gridClass = 'c-input-radio__options--grid';

    if (this.get('grid')) {
      return gridClass;
    }

    return null;
  }),

  noInputVisibleClassName: Ember.computed('noInputVisible', function() {
    const noInputClass = 'c-input-radio__options--no-input-visible';

    if (this.get('noInputVisible')) {
      return noInputClass;
    }

    return null;
  }),

  actions: {
    changed(newValue) {
      this.set('groupValue', newValue);
      this.setSelection();
      this.sendAction('changed', newValue);
    },
    mouseUpped(/* event */) {
      this.sendAction('clicked');
    }
  }
});
