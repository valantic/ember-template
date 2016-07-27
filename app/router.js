import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('page-404', { path: '/*wildcard' });
  if (config.environment !== 'production') {
    this.route('styleguide-freestyle');
  }
});

export default Router;
