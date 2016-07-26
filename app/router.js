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
  this.route('views', function() {
    this.route('product-page');
    this.route('order-list');
  });
  this.route('readme');
  this.route('draggable');
});

export default Router;
