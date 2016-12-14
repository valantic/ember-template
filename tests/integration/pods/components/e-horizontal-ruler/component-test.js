import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('e-horizontal-ruler', 'Integration | Component | e horizontal ruler', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{e-horizontal-ruler}}`);

  assert.equal(this.$().text().trim(), '');
});
