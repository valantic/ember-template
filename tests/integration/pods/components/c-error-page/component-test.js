import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c-error-page', 'Integration | Component | c error page', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{c-error-page}}`);

  assert.equal(this.$().find('.c-error-page').length, 1, 'renders a c-error-page component');
});
