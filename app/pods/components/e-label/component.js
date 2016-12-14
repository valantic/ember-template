import Ember from 'ember';

// BEGIN-FREESTYLE-USAGE e-label
export default Ember.Component.extend({
  tagName: 'label',
  classNames: ['e-label'],
  defaultClassName: 'e-label',
  attributeBindings: [
    'disabled',
    'for'
  ],
  class: 'e-label',
  classNameBindings: [
    'leading:e-label--leading',
    'labelUp:e-label--labelup',
    'selected:e-label--selected',
    'noInputVisible:e-label--noinputvisible',
    'noLabelVisible:e-label--labelhidden',
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

  typeClassName: Ember.computed('type', function() {
    const typeClass = `e-label__text--${this.get('type')}`;

    if (this.get('type')) {
      return typeClass;
    }

    return null;
  }),

  statusClassNames: Ember.computed('selected', function() {
    const selectClass = 'e-label__text--selected';

    if (this.get('selected')) {
      return selectClass;
    }

    return null;
  }),

  disabledClassNames: Ember.computed('disabled', function() {
    const disabledClass = 'e-label__text--disabled';

    if (this.get('disabled')) {
      return disabledClass;
    }

    return null;
  }),

  noInputClassNames: Ember.computed('noInputVisible', function() {
    const noInputClass = 'e-label__text--noinputvisible';

    if (this.get('noInputVisible')) {
      return noInputClass;
    }

    return null;
  }),

  labelUpClassNames: Ember.computed('labelUp', function() {
    const labelUpClass = 'e-label__text--labelup';

    if (this.get('labelUp')) {
      return labelUpClass;
    }

    return null;
  }),

  labelfirstClassNames: Ember.computed('labelFirst', function() {
    const labelfirstClass = 'e-label__text--labelfirst';

    if (this.get('labelFirst')) {
      return labelfirstClass;
    }

    return null;
  })

});
// END-FREESTYLE-USAGE
