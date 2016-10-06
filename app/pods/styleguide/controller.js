import Ember from 'ember';
import FreestyleController from 'ember-freestyle/controllers/freestyle';
import config from '../../config/environment';

const { inject } = Ember;

export default FreestyleController.extend({
  colorpalette: inject.service(),
  config: config,
  emberFreestyle: inject.service(),
  labels: {
    usage: {
      title: 'Usage Example',
      hbs: 'template.hbs',
      js: 'component.js', // eslint-disable-line
      scss: 'styles.scss'
    }
  }
});
