import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Ember from 'ember';

export default JSONAPIAdapter.extend({
  // Services
  notification: Ember.inject.service('notification'),

  // Parameters
  host: 'http://localhost:8080',
  namespace: 'api/v1',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  // Functions
  /**
   * Function makes an ajax call and gives the response json back, it also uses the notification service for sending
   * messages directly to the noticiation container.
   *
   * @param {String} url the requested url
   * @param {Object} serializedData the data which you want to send to the defined url
   * @param {String} method GET, POST, PATCH, DELETE
   * @param {Object} additionalHeaders additional Header informations
   * @returns {Promise.<TResult>|*|Promise}
   */
  ajaxCall(url, serializedData, method, additionalHeaders) { // eslint-disable-line max-params
    const currentHeaders = this.get('headers');
    const mergedHeaders = Object.assign(currentHeaders, additionalHeaders);

    this.set('headers', mergedHeaders);

    return this.ajax(url, method, { data: serializedData }).then((json) => {
      if (json.messages) {
        this.get('notification').getNotificationsFrom(json.messages);
      }

      return json;
    });
  }
});
