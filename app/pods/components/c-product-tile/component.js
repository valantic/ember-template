import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['product-item'],
  // https://guides.emberjs.com/v2.5.0/components/customizing-a-components-element/
  classNameBindings: ['isDiscounted:discounted', 'isAvailable:available:unavailable'],
  isDiscounted: false,
  isAvailable: true
});
