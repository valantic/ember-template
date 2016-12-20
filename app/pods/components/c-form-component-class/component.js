import Ember from 'ember';
import ComponentUtils from 'ember-project-template/mixins/component-utils';

/* c-form-component-class
 * This abstract component will be extended from COMPONENTS like for e.g. "c-input-text".
 * It manages the state-handling for the element.
 */

export default Ember.Component.extend(ComponentUtils, {
  tagName: 'div',
  classNames: null,
  classNameBindings: [
    'computedClassName',
    'currentLayout',
    'hasHover:hover',
    'hasFocus:focus',
    'isActive:active'
  ],
  bemBlockName: 'c-form-component-class',
  fieldClassName: '',

  state: Ember.computed('hasSuccess', 'hasFeedback', 'hasWarning', 'hasError', function() {
    if (this.get('hasSuccess')) {
      return 'success';
    }
    if (this.get('hasFeedback')) {
      return 'feedback';
    }
    if (this.get('hasWarning')) {
      return 'warning';
    }
    if (this.get('hasError')) {
      return 'error';
    }

    return 'default';
  }),

  // rendering options
  layout: 'vertical', // horizontal, vertical, nested
  labelClassName: '',
  shadow: true,

  // validation flags
  hasSuccess: false,
  hasFeedback: false,
  hasWarning: false,
  hasError: false,

  // So we can link label with input field and identify the key field
  fieldId: null,

  // Standard type for the e-input element
  type: 'text',

  // Flags
  isActive: false,
  hasHover: false,
  hasFocus: false,
  disabled: false,
  readonly: false,

  nestLabel: Ember.computed('fieldId', function() {
    return this.get('fieldId') && this.get('fieldId').length;
  }),

  computedClassName: Ember.computed('state', function() {
    const bemBlockName = this.get('bemBlockName');

    return `${bemBlockName} ${bemBlockName}--state-${this.get('state')}`.trim();
  }),

  currentLayout: Ember.computed('layout', function() {
    return this.getCurrentLayout();
  }),

  thePlaceholder: Ember.computed('placeholder', function() {
    const layout = this.get('layout');
    const placeholder = this.get('placeholder');

    // No placeholder for horizonal and vertical layouts if placeholder is not defined
    if (layout !== 'nested') {
      // would return undefined when the placeholder is not set
      return placeholder;
    }

    return this.getPlaceHolder();
  })
});
