import Ember from 'ember';
import StyleguideFunctions from 'ember-project-template/mixins/styleguide-functions';
import mockData from './mockdata/allMockData';

export default Ember.Route.extend(StyleguideFunctions, {

  actions: {
    toggleStylesheet(styleGuideIsActive) {
      // See mixin StyleguideFunctions
      this.toggleStylesheet(styleGuideIsActive);
    },
    didTransition() {
      this.send('toggleStylesheet', true);
    },
    willTransition() {
      this.send('toggleStylesheet', false);
    }
  },

  model() {
    return {
      selectOptions: mockData.selectOptions
    };
  }

});
