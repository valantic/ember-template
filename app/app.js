import Ember from 'ember';
import loadInitializers from 'ember-load-initializers';
import Resolver from './resolver';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

const App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,

  // This fixes a violation issue in Chrome, who expects passive event binding for scroll interrupting events.
  // see https://developers.google.com/web/updates/2016/06/passive-event-listeners
  customEvents: { // This will disable the listed event handlers!
    mousewheel: null,
    touchstart: null,
    touchmove: null,
    touchend: null,
    touchcancel: null
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
