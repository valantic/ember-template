import Ember from 'ember';

let links = [{
  'url': 'views',
  'label': 'Views',
  'children': [{
    'url': 'views.product-page',
    'label': 'Product Page'
  }]
},{
  'url': 'styleguide-freestyle',
  'label': 'Living Styleguide'
}];

export default Ember.Service.extend({
  links: links
});
