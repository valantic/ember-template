import Ember from 'ember';
import ComponentUtils from 'ember-project-template/mixins/component-utils';

export default Ember.Mixin.create(ComponentUtils, {
  tagName: 'div',
  classNames: null,
  classNameBindings: [
    '_computedClassNames',
    'hasHover:hover',
    'hasFocus:focus',
    'isActive:active'
  ],
  bemBlockName: 'c-form-component',
  fieldClassName: '',

  state: Ember.computed(
    'hasSuccess',
    'hasFeedback',
    'hasWarning',
    'hasError',
    function() {
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
    }
  ),

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

  // Internal properties
  _computedClassNames: Ember.computed(
    'state',
    'layout',
    function() {
      const bemBlockName = this.get('bemBlockName');
      const classNames = [];

      if (this.get('bemBlockName')) {
        classNames.push(bemBlockName);
      }

      if (this.get('state')) {
        classNames.push(`${bemBlockName}--state-${this.get('state')}`);
      }

      if (this.get('layout')) {
        classNames.push(`${bemBlockName}--${this.get('layout')}`);
      }

      return classNames.join(' ');
    }
  ),

  _thePlaceholder: Ember.computed('placeholder', function() {
    const layout = this.get('layout');
    const placeholder = this.get('placeholder');

    // No placeholder for horizontal and vertical layouts if placeholder is not defined
    if (layout !== 'nested') {
      // would return undefined when the placeholder is not set
      return placeholder;
    }

    return this.getPlaceHolder();
  })
});
