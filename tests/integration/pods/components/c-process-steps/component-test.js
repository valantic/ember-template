import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c-process-steps', 'Integration | Component | c process steps', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{c-process-steps}}`);

  assert.equal(this.$().find('.c-process-steps').length, 1, 'renders a c-process-steps component');
});
