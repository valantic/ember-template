import Ember from 'ember';
<%= importTemplate %>
export default Ember.Component.extend({<%= contents %>
  // Component setup
  classNames: ['<%= dasherizedModuleName %>'],
  bemBlockName: '<%= dasherizedModuleName %>',
  tagName: 'div'

  // Handed in properties

  // Closures

  // Internal properties

  // Internal functions

  // Actions
});
