import Ember from 'ember';

export default Ember.Component.extend({
  // Services
  notificationService: Ember.inject.service('notification'),

  // Component setup
  classNames: ['c-notification-container'],
  bemBlockName: 'c-notification-container',
  tagName: 'div',

  // Handed in properties
  messages: Ember.A(),

  // Closures
  didReceiveAttrs(...args) {
    this._super(...args);
    this.get('notificationService').getNotificationsFrom(this.get('messages'));
  },

  // Internal properties

  // Internal functions

  // Actions
  actions: {
    notificationClosed() {
      console.log('notification closed'); // eslint-disable-line no-console
    }
  }
});
