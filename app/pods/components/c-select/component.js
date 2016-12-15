import CFormGroup from '../c-form-group/component';

export default CFormGroup.extend({
  defaultClassName: 'c-select',

  actions: {
    changed(newValue) {
      this.sendAction('changed', newValue);
    }
  }
});
