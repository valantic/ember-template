import Ember from 'ember';

export default Ember.Service.extend({
  notifications: Ember.A(),

  /**
   * @param {object} messages an object with object.INFO, object.ERROR, object.SUCCESS
   */
  getNotificationsFrom(messages) {
    const notifications = Ember.A();

    if (messages) {
      if (messages.INFO && messages.INFO.length > 0) {
        messages.INFO.forEach((message) => {
          if (message.showToUser) {
            message.isInfo = true;
            notifications.push(message);
          }
        });
      }
      if (messages.ERROR && messages.ERROR.length > 0) {
        messages.ERROR.forEach((message) => {
          if (message.showToUser) {
            message.isError = true;
            notifications.push(message);
          }
          if (message.action === 'PAGE_RELOAD' && message.showToUser) {
            this._reloadPageLater();
          } else if (message.action === 'PAGE_RELOAD') {
            this._reloadPageNow();
          }
        });
      }
      if (messages.SUCCESS && messages.SUCCESS.length > 0) {
        messages.SUCCESS.forEach((message) => {
          if (message.showToUser) {
            message.isSuccess = true;
            notifications.push(message);
          }
        });
      }

      this.set('notifications', notifications);
    }
  },
  
  // Internal function
  _reloadPageNow() {
    window.location.reload();
  },
  _reloadPageLater() {
    Ember.run.later(() => {
      window.location.reload();
    }, 4000);
  }
});
