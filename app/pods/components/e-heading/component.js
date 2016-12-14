import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'h1',
  classNames: ['e-heading'],
  defaultClassName: 'e-heading',
  classNameBindings: ['stateClass'],
  state: 'default',

  stateClass: function() {
    const defaultClassName = this.get('defaultClassName');
    const theState = `${defaultClassName}--${this.get('state')}`;

    return theState;
  }.property()
});
