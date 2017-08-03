import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c-image-slider', 'Integration | Component | c image slider', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{c-image-slider}}`);

  assert.equal(this.$().find('.c-image-slider').length, 1, 'renders a c-image-slider component');
});
