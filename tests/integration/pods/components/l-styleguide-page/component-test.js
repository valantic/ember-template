import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('l-styleguide', 'Integration | Component | l styleguide page', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{l-styleguide}}`);

  assert.equal(this.$('.container-fluid').length, 1, 'renders a container-fluid');

  // Template block usage:
  this.render(hbs`
    {{#l-styleguide}}
      template block text
    {{/l-styleguide}}
  `);

  assert.equal(this.$().text().trim()
    .indexOf('template block text') !== -1, true);
});
