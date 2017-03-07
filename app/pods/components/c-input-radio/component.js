import Ember from 'ember';
import cFormComponent from 'ember-project-template/mixins/c-form-component';

export default Ember.Component.extend(cFormComponent, {
  // Component setup
  classNameBindings: [
    'labelFirst:c-input-radio--label-first',
    'labelUp:c-input-radio--label-up',
    'noInputVisible:c-input-radio--no-input-visible'
  ],
  bemBlockName: 'c-input-radio',
  tagName: 'div',

  // Handed in properties
  items: [],
  noInputVisible: false,
  layout: 'horizontal',
  gridClassNames: '',

  // Handed in closures
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

  // Internal properties
  _optionsClassNames: Ember.computed(
    'layout',
    'noInputVisible',
    'gridClassNames',
    function() {
      const classNames = [];
      const bemElementName = `${this.get('bemBlockName')}__options`;

      if (this.get('layout')) {
        classNames.push(`${bemElementName}--${this.get('layout')}`);
      }

      if (this.get('noInputVisible')) {
        classNames.push(`${bemElementName}--no-input-visible`);
      }

      if (this.get('gridClassNames')) {
        classNames.push(`${bemElementName}--grid`);
      }

      return classNames.join(' ');
    }
  ),

  // Actions
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
