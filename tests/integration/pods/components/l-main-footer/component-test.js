import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('l-main-footer', 'Integration | Component | l main footer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{l-main-footer}}`);

  assert.equal(this.$('.l-main-footer').length, 1, 'renders a l-main-footer');
});
