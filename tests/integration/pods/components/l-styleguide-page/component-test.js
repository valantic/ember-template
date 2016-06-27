import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('l-styleguide-page', 'Integration | Component | l styleguide page', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{l-styleguide-page}}`);

  assert.equal(this.$('.row-fluid').length, 1, 'renders a row-fluid');

  // Template block usage:
  this.render(hbs`
    {{#l-styleguide-page}}
      template block text
    {{/l-styleguide-page}}
  `);

  assert.equal(this.$().text().trim()
    .indexOf('template block text') !== -1, true);
});
