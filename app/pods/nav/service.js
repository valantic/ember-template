import Ember from 'ember';

let links = [{
    'url': 'styleguide-manual.buttons',
    'label': 'Button'
},{
    'url': 'styleguide-manual.sections',
    'label': 'Section'
},{
    'url': 'styleguide-manual.products',
    'label': 'Products'
}];

export default Ember.Service.extend({
    links: links
});
