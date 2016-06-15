import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['nav-secondary'],
  nav: Ember.inject.service('nav')
});
