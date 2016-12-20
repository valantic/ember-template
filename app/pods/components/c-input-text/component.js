import Ember from 'ember';
import cFormComponent from 'ember-project-template/mixins/c-form-component';

export default Ember.Component.extend(cFormComponent, {
  bemBlockName: 'c-input-text',
  labelFirst: true,
  noLabel: false,
  bigPaddingFlanks: false,

  didRender() {
    if (this.get('autofocus')) {
      this.$().find('input').focus();
    }
  },

  actions: {
    doFocusOut(event) {
      this.sendAction('doFocusOut', event, this);
    }
  }
});
