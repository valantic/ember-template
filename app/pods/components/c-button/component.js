import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  click() {
    alert('thanks for clicking me!');
  }
});
