import Ember from 'ember';
import cFormComponent from 'ember-project-template/mixins/c-form-component';

export default Ember.Component.extend(cFormComponent, {
  // Component setup
  bemBlockName: 'c-input-text',

  // Handed in properties
  labelFirst: true,
  noLabel: false,
  bigPaddingFlanks: false,

  // Handed in closures
  didRender() {
    if (this.get('autofocus')) {
      this.$().find('input').focus();
    }
  },

  // Actions
  actions: {
    doFocusOut(event) {
      this.sendAction('doFocusOut', event, this);
    }
  }
});
