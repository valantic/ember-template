import Ember from 'ember';
import mockData from './mockdata/allMockData';

export default Ember.Route.extend({

  actions: {
    didTransition() {

    },
    willTransition() {
      // Clear store data to prevent polluting application
      this.get('store').unloadAll();
    }
  },

  model() {
    return {
      selectOptions: mockData.selectOptions
    };
  }

});
