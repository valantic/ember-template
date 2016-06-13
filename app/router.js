import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('page-404', { path: '/*wildcard' });
  this.route('styleguide-freestyle');
});

export default Router;
