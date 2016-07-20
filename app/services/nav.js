import Ember from 'ember';
import config from '../config/environment';

let links = [];

if (config.environment === 'production') {
  links = [{
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
  }];
// Development
} else {
  links = [{
    url: 'readme',
    label: 'Readme'
  }, {
    url: 'draggable',
    label: 'Demo: draggable'
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
    label: 'StyleGuide'
  }];
}

export default Ember.Service.extend({
  links
});
