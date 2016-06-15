import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['nav-secondary'],      // 'ember-view' will be the first class name
  nav: Ember.inject.service('nav')
});
