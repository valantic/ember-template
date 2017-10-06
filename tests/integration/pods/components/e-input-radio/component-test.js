import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('e-input-radio', 'Integration | Component | e input radio', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`
    <div id="single-input">
      {{e-input-radio}}
    </div>
  `);

  assert.equal(this.$().text().trim(), '');
  assert.equal(
    this.$().find('#single-input input[type="radio"].e-input-radio').length,
    1,
    'an input element with type radio and class name e-input-radio'
  );

  this.render(hbs`
    <div id="single-input">
      {{e-input-radio class="e-input-radio e-input-radio--modifier" id="theRadio"}}
    </div>
  `);

  assert.equal(
    this.$().find('#single-input input.e-input-radio.e-input-radio--modifier').length,
    1,
    'an input element with type radio and class name e-input-radio including custom class'
  );
});
