import Ember from 'ember';
import StyleguideFunctions from 'ember-project-template/mixins/styleguide-functions';

export default Ember.Route.extend(StyleguideFunctions, {

  activate() {
    Ember.$('body').addClass('route--styleguide');
  },

  deactivate() {
    Ember.$('body').removeClass('route--styleguide');
  },

  actions: {
    toggleStylesheet: function(styleGuideIsActive) {
      // See mixin StyleguideFunctions
      this.toggleStylesheet(styleGuideIsActive);
    },
    didTransition() {
      this.send('toggleStylesheet', true);
    },
    willTransition() {
      this.send('toggleStylesheet', false);
    }
  }
});
