import Ember from 'ember';

// BEGIN-FREESTYLE-USAGE e-label
export default Ember.Component.extend({
  tagName: 'label',
  classNames: ['e-label'],
  bemBlockName: 'e-label',
  attributeBindings: [
    'disabled',
    'for'
  ],
  class: 'e-label',
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
  disabled: false,
  initialState: '',
  for: null,
  labelFirst: false,
  labelUp: false,
  layout: 'default',
  leading: false,
  noInputVisible: false,
  noLabelVisible: false,
  nested: false,
  multiple: false,
  selected: false,
  state: 'default',
  text: null,
  type: null,

  init() {
    this._super(...arguments); // eslint-disable-line prefer-rest-params
    this.initialState = this.state;
  },

  innerClassNames: Ember.computed(
      'type',
      'selected',
      'disabled',
      'noInputVisible',
      'labelUp',
      'state',
      'labelFirst',
      'layout',
      function() {
        let classNames = '';
        const bemElementName = `${this.get('bemBlockName')}__text`;
        const layoutClass = `${bemElementName}--layout-${this.get('layout')}`;
        const typeClass = `${bemElementName}--${this.get('type')}`;
        const selectedClass = `${bemElementName}--selected`;
        const disabledClass = `${bemElementName}--disabled`;
        const noInputVisibleClass = `${bemElementName}--no-input-visible`;
        const labelUpClass = `${bemElementName}--label-up`;
        const stateClass = `${bemElementName}--${this.get('state')}`;
        const labelFirstClass = `${bemElementName}--label-first`;

        if (this.get('layout')) {
          classNames += ' ';
          classNames += layoutClass;
        }

        if (this.get('type')) {
          classNames += ' ';
          classNames += typeClass;
        }

        if (this.get('selected')) {
          classNames += ' ';
          classNames += selectedClass;
        }

        if (this.get('disabled')) {
          classNames += ' ';
          classNames += disabledClass;
        }

        if (this.get('noInputVisible')) {
          classNames += ' ';
          classNames += noInputVisibleClass;
        }

        if (this.get('labelUp')) {
          classNames += ' ';
          classNames += labelUpClass;
        }

        if (this.get('labelUp')) {
          classNames += ' ';
          classNames += labelUpClass;
        }

        if (this.get('state')) {
          classNames += ' ';
          classNames += stateClass;
        }

        if (this.get('labelFirst')) {
          classNames += ' ';
          classNames += labelFirstClass;
        }

        return classNames;
      }
  )
});
// END-FREESTYLE-USAGE
