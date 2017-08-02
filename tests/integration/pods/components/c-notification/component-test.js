import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c-notification', 'Integration | Component | c notification', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{c-notification}}`);

  assert.equal(this.$().find('.c-notification').length, 1, 'renders a c-notification component');
});
