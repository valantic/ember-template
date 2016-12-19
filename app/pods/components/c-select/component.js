import CFormGroup from '../c-form-component-class/component';

export default CFormGroup.extend({
  defaultClassName: 'c-select',

  actions: {
    changed(newValue) {
      this.sendAction('changed', newValue);
    }
  }
});
