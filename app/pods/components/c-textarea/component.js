import CFormGroup from '../c-form-group/component';

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
