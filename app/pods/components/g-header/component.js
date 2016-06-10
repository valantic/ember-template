import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'header',
    navService: Ember.inject.service('nav')
});
