import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('g-footer', 'Integration | Component | g footer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{g-footer}}`);

  assert.equal(this.$().text().trim()
    .indexOf('Feedback') !== -1, true);

  // Template block usage:
  this.render(hbs`
    {{#g-footer}}
      template block text
    {{/g-footer}}
  `);

  assert.equal(this.$().text().trim()
    .indexOf('template block text') !== -1, true);
});
