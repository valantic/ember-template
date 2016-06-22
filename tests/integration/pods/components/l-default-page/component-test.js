import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('l-default-page', 'Integration | Component | l default page', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{l-default-page}}`);

  assert.equal(this.$('.l-default-page').length, 1);

  // Template block usage:
  this.render(hbs`
    {{#l-default-page}}
      template block text
    {{/l-default-page}}
  `);

  assert.equal(this.$('.l-default-page').text().trim()
    .indexOf('template block text') !== -1, true);
});
