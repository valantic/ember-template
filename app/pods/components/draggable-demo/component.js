import Ember from 'ember';

export default Ember.Component.extend({

  selectedItems: Ember.A([]), // eslint-disable-line new-cap
  remainingItems: Ember.computed.setDiff('items', 'selectedItems'),
  remainingItemsLength: Ember.computed.alias('remainingItems.length'),

  actions: {
    addItem(itemId) {
      const selectedItems = this.get('selectedItems');
      const item = this.get('items').findBy('id', parseInt(itemId, 10));

      if (!selectedItems.contains(item)) {
        return selectedItems.pushObject(item);
      }

      return false;
    },

    addAllItems() {
      const selectedItems = this.get('selectedItems');
      const remainingItems = this.get('remainingItems');

      return selectedItems.pushObjects(remainingItems);
    },

    removeItem(item) {
      return this.get('selectedItems').removeObject(item);
    },

    removeallItems() {
      return this.get('selectedItems').clear();
    }

  }

});
