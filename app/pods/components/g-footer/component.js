import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'footer',
  currentYear: new Date().getFullYear(),
  companyName: 'movento'
});
