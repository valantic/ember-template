module.exports = function(environment) {
  const ENV = {
    'modulePrefix': 'ember-project-template',
    'podModulePrefix': 'ember-project-template/pods',
    environment,
    'rootURL': '/',
    'locationType': 'auto',
    'EmberENV': {
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
    'remarkable': {
      excludeHighlightJs: environment === 'production' // Excludes highlightjs from vendor.js (has only impact if freestyle is also removed)
    },
    'APP': {
      // Here you can pass flags/options to your application instance
      // when it is created
      rootElement: '#ember-application' // NOTE: it's MANDATORY to also add an item with this id to /tests/index.html!
    }
  };

  switch (environment) {
    case 'test':
      // Testem prefers this...
      ENV.locationType = 'none';

      // Keep test console output quieter
      ENV.APP.LOG_ACTIVE_GENERATION = false;
      ENV.APP.LOG_VIEW_LOOKUPS = false;

      ENV.APP.rootElement = '#ember-testing';

      break;

    case 'production':
      break;

    default: // development
      // ENV.APP.LOG_RESOLVER = true;
      // ENV.APP.LOG_ACTIVE_GENERATION = true;
      // ENV.APP.LOG_TRANSITIONS = true;
      // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
      // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  return ENV;
};
