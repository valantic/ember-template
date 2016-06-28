import Ember from 'ember';

export default Ember.Service.extend({
  links: [{
    url: 'readme',
    label: 'Readme'
  },
  {
    url: 'views',
    label: 'Views',
    children: [{
      url: 'views.product-page',
      label: 'Product Page'
    },
    {
      url: 'views.order-list',
      label: 'Order List'
    }]
  },
  {
    url: 'styleguide-freestyle',
    label: 'Living Styleguide'
  }]
});
