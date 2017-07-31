import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c-breadcrumb', 'Integration | Component | c breadcrumb', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{c-breadcrumb}}`);

  assert.equal(this.$().find('.c-breadcrumb').length, 1, 'renders a c-breadcrumb component');
});
