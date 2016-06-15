import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  nav: Ember.inject.service('nav')
});
