/* jshint node: true */
/* eslint-disable */

module.exports = function(environment) {
  const ENV = {
    modulePrefix: 'ember-project-template',
    podModulePrefix: 'ember-project-template/pods',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      LOG_STACKTRACE_ON_DEPRECATION: false, // Turns off extremely long deprecation warnings
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    'polyfill-io': {
      features: [
        'Intl.~locale.en',
        'Intl.~locale.de'
      ]
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      rootElement: '#ember-application'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // ....
  }

  return ENV;
};

/* eslint-enable */
