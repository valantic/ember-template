import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c-media-container', 'Integration | Component | c media container', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{c-media-container}}`);

  assert.equal(this.$().find('.c-media-container').length, 1, 'renders a c-media-container component');
});
