import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'footer',
  classNames: ['footer'],
  currentYear: new Date().getFullYear(),
  companyName: 'movento'
});
