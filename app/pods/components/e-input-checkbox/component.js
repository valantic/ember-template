import eFormComponentClass from '../e-form-component-class/component';

// BEGIN-FREESTYLE-USAGE e-input-checkbox
export default eFormComponentClass.extend({
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
