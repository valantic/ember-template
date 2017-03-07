import Ember from 'ember';

export default Ember.Component.extend({
  // Component setup
  classNames: ['e-heading'],
  bemBlockName: 'e-heading',
  tagName: 'h1',
  classNameBindings: [
    '_stateClass'
  ],

  // Handed in properties
  state: 'default',

  // Internal properties
  _stateClass: Ember.computed(
    'state',
    function() {
      if (this.get('state')) {
        return `${this.get('bemBlockName')}--${this.get('state')}`;
      }

      return null;
    }
  )
});
