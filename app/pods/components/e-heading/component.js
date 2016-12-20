import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'h1',
  classNames: ['e-heading'],
  bemBlockName: 'e-heading',
  classNameBindings: ['stateClass'],
  state: 'default',

  stateClass: function() {
    const bemBlockName = this.get('bemBlockName');

    return `${bemBlockName}--${this.get('state')}`;
  }.property()
});
