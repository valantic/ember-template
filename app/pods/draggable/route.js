import Ember from 'ember';

export default Ember.Route.extend({

  products: Ember.inject.service(),

  model() {
    const products = this.get('products');

    return products.items;
  }
});
