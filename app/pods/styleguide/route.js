import Ember from 'ember';
import StyleguideFunctions from 'ember-project-template/mixins/styleguide-functions';

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
    return Ember.RSVP.hash({
      selectOptions: [
        {
          label: 'Option 1',
          value: 'option1',
          selected: true,
          checked: true
        },
        {
          label: 'Option 2',
          value: 'option2',
          selected: false,
          checked: false
        },
        {
          label: 'Option 3',
          value: 'option3',
          selected: false,
          checked: false
        },
        {
          label: 'Option 4',
          value: 'option4',
          selected: false,
          checked: false
        }
      ]
    });
  }

});
