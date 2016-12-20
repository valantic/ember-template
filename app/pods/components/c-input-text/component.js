import cFormComponentClass from '../c-form-component-class/component';

export default cFormComponentClass.extend({
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
