import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('e-input-text', 'Integration | Component | e input text', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`
    <div id="single-input">
      {{e-input-text}}
    </div>
  `);

  assert.equal(this.$().text().trim(), '');
  assert.equal(this.$().find('#single-input input[type="text"].e-input-text').length, 1,
      'an input element with type text and class name e-input-text');

  this.render(hbs`
    <div id="single-input">
      {{e-input-text class="e-input-text e-input-text--modifier"}}
    </div>
  `);

  assert.equal(this.$().find('#single-input input.e-input-text.e-input-text--modifier').length, 1,
      'an input element with type text and class name e-input-text including custom class');
});
