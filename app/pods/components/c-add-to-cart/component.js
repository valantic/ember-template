import Ember from 'ember';

export default Ember.Component.extend({
  // Component setup
  classNames: ['c-add-to-cart'],
  bemBlockName: 'c-add-to-cart',
  tagName: 'div',

  // Handed in properties
  pcs: 0,
  mini: false,
  value: 0,

  // Closures
  didReceiveAttrs(...args) {
    this._super(...args);

    this.set('value', this.get('pcs'));
  },

  // Internal properties

  // Internal functions

  // Actions
  actions: {
    addToCart() {
      this.set('value', 1);
    }
  }
});
