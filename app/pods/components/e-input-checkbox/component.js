import CFormControl from '../c-form-control/component';

// BEGIN-FREESTYLE-USAGE e-input-checkbox
export default CFormControl.extend({
  checked: false,
  defaultClassName: 'e-input-checkbox',
  type: 'checkbox',

  onCheckboxChange(/* checked */) {},

  actions: {
    onCheckboxClick(checked) {
      this.get('onCheckboxChange')(!checked);
    }
  }
});
// END-FREESTYLE-USAGE
