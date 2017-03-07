import Ember from 'ember';

export default Ember.Component.extend({
  // Component setup
  classNames: ['e-label'],
  bemBlockName: 'e-label',
  tagName: 'label',
  attributeBindings: [
    'disabled',
    'for'
  ],
  classNameBindings: [
    'leading:e-label--leading',
    'labelUp:e-label--label-up',
    'selected:e-label--selected',
    'noInputVisible:e-label--no-input-visible',
    'noLabelVisible:e-label--label-hidden',
    'required:e-label--required',
    'nested:e-label--layout-nested',
    'multiple:e-label-select--multiple',
    'disabled:e-label--disabled'
  ],

  // Handed in properties
  leading: false,
  labelUp: false,
  selected: false,
  noInputVisible: false,
  noLabelVisible: false,
  required: false,
  nested: false,
  multiple: false,
  disabled: false,
  for: null,
  initialState: '',
  labelFirst: false,
  layout: 'default',
  state: 'default',
  text: null,
  type: null,

  // Handed in properties
  init() {
    this._super(...arguments); // eslint-disable-line prefer-rest-params
    this.initialState = this.state;
  },

  // Internal properties
  _innerClassNames: Ember.computed(
    'layout',
    'state',
    'type',
    'selected',
    'disabled',
    'noInputVisible',
    'labelUp',
    'labelFirst',
    function() {
      const classNames = [];
      const bemElementName = `${this.get('bemBlockName')}__text`;

      if (this.get('layout')) {
        classNames.push(`${bemElementName}--layout-${this.get('layout')}`);
      }

      if (this.get('state')) {
        classNames.push(`${bemElementName}--${this.get('state')}`);
      }

      if (this.get('type')) {
        classNames.push(`${bemElementName}--${this.get('type')}`);
      }

      if (this.get('selected')) {
        classNames.push(`${bemElementName}--selected`);
      }

      if (this.get('disabled')) {
        classNames.push(`${bemElementName}--disabled`);
      }

      if (this.get('noInputVisible')) {
        classNames.push(`${bemElementName}--no-input-visible`);
      }

      if (this.get('labelUp')) {
        classNames.push(`${bemElementName}--label-up`);
      }

      if (this.get('labelFirst')) {
        classNames.push(`${bemElementName}--label-first`);
      }

      return classNames.join(' ');
    }
  )
});
