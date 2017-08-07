import Ember from 'ember';
import config from './config/environment';

const isProduction = config.environment === 'production';
const isDebug = config.environment === 'debug';
const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('page-404', { path: '/*wildcard' });

  // Routes created only for styleguide (development environment)
  if (!isProduction && !isDebug) {
    this.route('styleguide');
    this.route('test-page');
    this.route('index', { path: '/' });
  }
});

export default Router;
