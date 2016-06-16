import Ember from 'ember';

export default Ember.Service.extend({
  links: [{
    url: 'views',
    label: 'Views',
    children: [{
      url: 'views.product-page',
      label: 'Product Page'
    }]
  }, {
    url: 'styleguide-freestyle',
    label: 'Living Styleguide'
  }]
});