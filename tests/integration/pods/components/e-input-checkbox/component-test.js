import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('e-input-checkbox', 'Integration | Component | e input checkbox', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`
    <div id="single-input">
      {{e-input-checkbox}}
    </div>
  `);

  assert.equal(this.$().text().trim(), '');
  assert.equal(
    this.$().find('#single-input input[type="checkbox"].e-input-checkbox').length,
    1,
    'an input element with type checkbox and class name e-input-checkbox'
  );

  this.render(hbs`
    <div id="single-input">
      {{e-input-checkbox
        class="e-input-checkbox e-input-checkbox--modifier"
        id="theCheckbox"
      }}
    </div>
  `);

  assert.equal(
    this.$().find('#single-input input.e-input-checkbox.e-input-checkbox--modifier').length,
    1,
    'an input element with type checkbox and class name e-input-checkbox including custom class'
  );

  assert.equal(
    this.$().find('#single-input input#theCheckbox').length,
    1,
    'an input element with an id'
  );
});
