import CFormGroup from '../c-form-group/component';

// BEGIN-FREESTYLE-USAGE c-select
export default CFormGroup.extend({
  defaultClassName: 'c-select',

  actions: {
    changed(newValue) {
      this.sendAction('changed', newValue);
    }
  }
});
// END-FREESTYLE-USAGE
