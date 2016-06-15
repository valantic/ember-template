import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['section-title'],
  tagName: 'div',
  classNameBindings: ['isBold:section-title--bold'],  // Adds the class name "section-title--bold" when isBold === true
  isBold: false                                       // default setting
});
