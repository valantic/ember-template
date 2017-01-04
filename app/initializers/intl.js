/**
 * Inject intl service into the app.
 *
 * @param {object} app The application
 */
export function initialize(app) {
  app.inject('component', 'intl', 'service:intl');
  app.inject('model', 'intl', 'service:intl');
  app.inject('route', 'intl', 'service:intl');
}

export default {
  name: 'intl',
  initialize
};
