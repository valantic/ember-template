import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c-notification-container', 'Integration | Component | c notification container', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{c-notification-container}}`);

  assert.equal(this.$().find('.c-notification-container').length, 1, 'renders a c-notification-container component');
});
