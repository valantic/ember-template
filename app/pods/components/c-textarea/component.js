import CFormGroup from '../c-form-group/component';

// BEGIN-FREESTYLE-USAGE c-textarea-default
export default CFormGroup.extend({
  defaultClassName: 'c-textarea',
  rows: 1,
  cols: 25,
  focusOnInsert: false,

  // Life cycle
  didInsertElement() {
    if (this.get('focusOnInsert')) {
      this.$().find('textarea').focus();
    }
  }
});
// END-FREESTYLE-USAGE
