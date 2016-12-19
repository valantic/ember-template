import CFormGroup from '../c-form-component-class/component';

export default CFormGroup.extend({
  defaultClassName: 'c-input-text',
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
