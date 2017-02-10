import Ember from 'ember';
import cFormComponent from 'ember-project-template/mixins/c-form-component';

export default Ember.Component.extend(cFormComponent, {
  classNameBindings: [
    'labelFirst:c-input-checkbox--label-first',
    'labelUp:c-input-checkbox--label-up',
    'noInputVisible:c-input-checkbox--no-input-visible'
  ],
  bemBlockName: 'c-input-checkbox',
  tagName: 'div',
  items: [],
  groupValue: [],
  layout: 'horizontal',
  innerPanel: false,
  border: 'thin',
  value: '',

  // Closures
  onCheckboxChange(/* groupValue */) {},

  // For internal use only
  _items: Ember.computed('items', function() {
    const items = this.get('items') || [];
    const groupValue = this.get('groupValue') || [];

    return items.map((item) => {
      const isPlainObject = Ember.typeOf(item) === 'object';
      const itemObj = isPlainObject ? Ember.Object.create(item) : item; // Make sure we have an Ember object
      const label = itemObj.get('label');
      const value = itemObj.get('value');

      return Ember.Object.create({
        // className
        label,
        value,
        checked: groupValue.indexOf(value) >= 0
      });
    });
  }),

  _updateGroupValue(item, checked) {
    const groupValue = this.get('groupValue') || Ember.A([]);
    const value = item.get('value');

    if (checked) {
      groupValue.pushObject(value); // pushObject is used instead of push, because it triggers observers
    } else {
      groupValue.removeObject(value); // removeObject is used instead of splice, because it triggers observers
    }
  },

  // Actions
  actions: {
    onCheckboxChange(item, checked) {
      this._updateGroupValue(item, checked);

      this.get('onCheckboxChange')(this.get('groupValue'));
    },
    mouseUpped(/* event */) {
      this.sendAction('clicked', this.elementId);
    }
  }
});
