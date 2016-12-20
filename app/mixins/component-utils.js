import Ember from 'ember';

export default Ember.Mixin.create({

  /**
   * For `nested` layout components the placeholder becomes the label.
   * @returns {string} The label or the placeholder
   */
  getPlaceHolder() {
    const placeholder = this.get('placeholder');
    const label = this.get('label');

    if (placeholder && placeholder.toString().length) {
      return placeholder;
    }

    if (label && label.toString().length) {
      return label;
    }

    return null;
  },

  /**
   * @returns {string} The current class name and layout.
   */
  getCurrentLayout() {
    const layout = this.get('layout').toString();
    const bemBlockName = this.get('bemBlockName').toString();

    // Returns a BEM modifier class name
    return `${bemBlockName}--${layout}`;
  },

  setSelection() {
    const items = this.get('items') || [];
    const groupValue = this.get('groupValue');

    items.forEach((item) => {
      Ember.set(item, 'selected', item.value === groupValue);
    });

    this.set('items', items);
  }
});
