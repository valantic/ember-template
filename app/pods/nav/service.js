import Ember from 'ember';

let links = [{
    'url': 'index',
    'label': 'Home'
},{
    'url': 'styleguide-freestyle',
    'label': 'Styleguide'
}];

export default Ember.Service.extend({
    links: links
});
