import Ember from 'ember';
import ComponentUtils from 'ember-project-template/mixins/component-utils';

/* e-form-component-class
* This abstract component will be extended from simple ELEMENTS like for e.g. "e-input-text".
* It manages the state-handling for the element.
 */

export default Ember.Component.extend(ComponentUtils, {
  autofocus: false,
  class: '',
  defaultClassName: '',
  disabled: false,
  form: null,
  layout: 'default',
  name: null,
  required: null,
  readonly: false,
  state: 'default',
  tagName: '',  // No tag name prevents `spanitis`
  title: null,

  thePlaceholder: Ember.computed('placeholder', function() {
    return this.getPlaceHolder();
  }),

  computedClassName: Ember.computed('state', 'layout', function() {
    const defaultClassName = this.get('defaultClassName');
    const theState = `${defaultClassName}--state-${this.get('state')}`;
    const theLayout = `${defaultClassName}--layout-${this.get('layout')}`;

    return `${this.get('class')} ${defaultClassName} ${theState} ${theLayout}`.trim();
  })
});
