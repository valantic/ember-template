import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('styleguide-manual', function() {
      this.route('products');
      this.route('buttons');
      this.route('sections');
  });
  this.route('page-404', { path: '/*wildcard' });
  this.route('styleguide-freestyle');
});

export default Router;
