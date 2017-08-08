import Ember from 'ember';

export default Ember.Component.extend({
  // Component setup
  classNames: ['e-heading'],
  bemBlockName: 'e-heading',
  tagName: 'h1',
  classNameBindings: [
    '_stateClass',
    '_tagNameClass',
    'noSpacing:e-heading--no-spacing'
  ],

  // Handed in properties
  state: 'default',
  noSpacing: false,

  // Internal properties
  _stateClass: Ember.computed(
    'state',
    function() {
      if (this.get('state')) {
        return `${this.get('bemBlockName')}--${this.get('state')}`;
      }

      return null;
    }
  ),
  _tagNameClass: Ember.computed('tagName', function() {
    return `${this.get('bemBlockName')}--${this.get('tagName')}`;
  })
});
