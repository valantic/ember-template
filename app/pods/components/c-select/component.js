import cFormComponentClass from '../c-form-component-class/component';

export default cFormComponentClass.extend({
  defaultClassName: 'c-select',

  actions: {
    changed(newValue) {
      this.sendAction('changed', newValue);
    }
  }
});
