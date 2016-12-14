import CFormControl from '../c-form-control/component';

// BEGIN-FREESTYLE-USAGE e-select
export default CFormControl.extend({
  defaultClassName: 'e-select',
  items: [],
  multiple: null,
  size: 0,
  state: 'default',

  actions: {
    changed(newValue) {
      this.set('groupValue', newValue);
      this.sendAction('changed', newValue);
    }
  }
});
// END-FREESTYLE-USAGE
