import { moduleForComponent, test } from 'ember-qunit';<% if (testType === 'integration') { %>
import hbs from 'htmlbars-inline-precompile';<% } %>

moduleForComponent('<%= componentPathName %>', '<%= friendlyTestDescription %>', {
  <% if (testType === 'integration' ) { %>integration: true<% } else if(testType === 'unit') { %>// Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true<% } %>
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{<%= componentPathName %>}}`);

  assert.equal(this.$().find('.<%= componentPathName %>').length, 1, 'renders a <%= componentPathName %> component');
});
