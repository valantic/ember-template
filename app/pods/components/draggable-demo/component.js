import Ember from 'ember';

export default Ember.Component.extend({

  selectedItems: Ember.A([]), // eslint-disable-line new-cap
  remainingItems: Ember.computed.setDiff('items', 'selectedItems'),
  remainingItemsLength: Ember.computed.alias('remainingItems.length'),

  actions: {

    /**
     * An action which is passed using sendAction.
     * We're only adding the item only once.
     * @param {string} itemId To uniquely identify the item dragged.
     * @returns {array} An array if the item is already selected, otherwise false.
     */
    addItemOnce(itemId) {
      const selectedItems = this.get('selectedItems');

      // The ``items`` object here should be an array of objects which are uniquely identifiable
      // through the property "id"
      const item = this.get('items').findBy('id', parseInt(itemId, 10));

      // This only allows a single drag of the item
      // For carts we'll need to add a flag which allows for multiple adds.
      if (!selectedItems.contains(item)) {
        return selectedItems.pushObject(item);
      }

      return false;
    },

    /**
     * An action which is passed using sendAction.
     * There is no limit in the amount of times the item is added.
     * Challenge here is that we'll have multiple items with the same ID in the selectedItems object.
     * @param {string} itemId The uniquely identify the item dragged.
     * @return {array} An array if the item is already selected, otherwise false.
     */
    addItem(itemId) {
      // We want to check how many items we already have
      const selectedItems = this.get('selectedItems');
      const elId = parseInt(itemId, 10);

      // Get the data for the given itemId
      const itemData = this.get('items').findBy('id', elId);
      const existingItem = selectedItems.findBy('id', elId);

      if (existingItem) {
        Ember.set(itemData, 'counter', existingItem.counter + 1);
      } else {
        Ember.set(itemData, 'counter', 1);
        selectedItems.pushObject(itemData);
      }

      return selectedItems;
    },

    addAllItems() {
      const selectedItems = this.get('selectedItems');
      const remainingItems = this.get('remainingItems');
      let item = {};

      for (item of remainingItems) {
        Ember.set(item, 'counter', 1);
      }

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
