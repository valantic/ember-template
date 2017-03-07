import Ember from 'ember';
import ComponentUtils from 'ember-project-template/mixins/component-utils';

export default Ember.Mixin.create(ComponentUtils, {
  autofocus: false,
  class: '',
  bemBlockName: '',
  disabled: false,
  form: null,
  layout: 'default',
  name: null,
  required: null,
  readonly: false,
  state: 'default',
  tagName: '',  // No tag name prevents `spanitis`
  title: null,

  _thePlaceholder: Ember.computed('placeholder', function() {
    return this.getPlaceHolder();
  }),

  computedClassName: Ember.computed(
    'state',
    'layout',
    'class',
    '_class',
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
        classNames.push(`${bemBlockName}--layout-${this.get('layout')}`);
      }

      if (this.get('class')) {
        classNames.push(this.get('class'));
      }

      if (this.get('_class')) {
        classNames.push(this.get('_class'));
      }

      return classNames.join(' ');
    }
  )
});
