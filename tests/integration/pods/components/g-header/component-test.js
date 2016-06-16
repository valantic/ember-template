import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('g-header', 'Integration | Component | g header', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{g-header}}`);

  assert.equal(this.$().text().trim()
    .indexOf('Index') !== -1, true);

  // Template block usage:
  this.render(hbs`
    {{#g-header}}
      template block text
    {{/g-header}}
  `);

  assert.equal(this.$().text().trim()
    .indexOf('template block text') !== -1, true);
});
