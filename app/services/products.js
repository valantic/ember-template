import Ember from 'ember';

export default Ember.Service.extend({
  items: [{
    title: 'Bananas',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Bananas_white_background_DS.jpg',
    description: 'Cavendish bananas are the most common dessert bananas sold.',
    rating: 4.5,
    price: 2.49,
    unit: 'kg',
    currency: '€',
    isDiscounted: true
  }, {
    title: 'Conference Pears',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Pear_DS.jpg/220px-Pear_DS.jpg',
    description: 'A sweet yellowish- or brownish-green edible fruit which'
                 + ' is narrow at the stalk and wider towards the base.',
    rating: 4.0,
    price: 2.00,
    unit: 'kg',
    currency: '€'
  }]
});
