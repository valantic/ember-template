import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  click() {
    this.set('title', 'hey, you clicked me!');
  }
});
