import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c-input-text', 'Integration | Component | c input text', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`
    {{c-input-text
      name="c-input-text-1"
      label="A Label"
      value="The field's value"
    }}
  `);

  assert.equal(this.$().text().trim(), 'A Label', 'Label text');
  assert.equal(this.$().find('input[name="c-input-text-1"]').length, 1,
      'an input element with name c-input-text-1');
  assert.equal(this.$().find('input[type="text"].e-input-text').length, 1,
      'an input element with type text and class name e-input-text');
  assert.equal(this.$().find('.e-label').length, 1,
      'a e-label element');
  assert.equal(this.$().find('label.e-label input.e-input-text').length, 1,
      'a nested e-input-text element within a e-label element');

  this.render(hbs`
    {{c-input-text
      fieldClassName="e-input-text e-input-text--modifier"
      fieldId="fieldId"
      label="A Label"
      labelClassName="e-label e-label--modifier"
      name="c-input-text-1"
      placeholder="A placeholder"
    }}
  `);

  assert.equal(this.$().find('input[placeholder="A placeholder"]').length, 1,
      'with placeholder');
  assert.equal(this.$().find('label.e-label--modifier').length, 1,
      'label with labelClass');
  assert.equal(this.$().find('input.e-input-text--modifier').length, 1,
      'input with fieldClass');
  assert.equal(this.$().find('input#fieldId').length, 1,
      'input with an id');
  assert.equal(this.$().find('label.e-label + input.e-input-text').length, 1,
      'a sibling e-input-text element with a e-label element');
});
