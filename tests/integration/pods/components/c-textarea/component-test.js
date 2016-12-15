import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c-textarea', 'Integration | Component | c textarea', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`
    {{c-textarea
      label="A Label"
      name="c-textarea-1"
      value="The field's value"
    }}
  `);

  assert.equal(this.$().text().trim(), 'A Label', 'Label text');
  assert.equal(this.$().find('textarea[name="c-textarea-1"]').length, 1,
      'a textarea element with name c-textarea-1');
  assert.equal(this.$().find('textarea.e-textarea').length, 1,
      'a textarea element and class name e-textarea');
  assert.equal(this.$().find('.e-label').length, 1,
      'a e-label element');

  this.render(hbs`
    {{c-textarea
      cols="5"
      fieldClassName="e-textarea e-textarea--modifier"
      fieldId="theFieldId"
      label="A Label"
      labelClassName="e-label--modifier"
      name="c-textarea-1"
      placeholder="A placeholder"
      rows="15"
    }}
  `);

  assert.equal(this.$().find('textarea[placeholder="A placeholder"]').length, 1,
      'textarea with placeholder');
  assert.equal(this.$().find('label.e-label--modifier').length, 1,
      'label with labelClass');
  assert.equal(this.$().find('textarea.e-textarea--modifier').length, 1,
      'textarea with fieldClass');
  assert.equal(this.$().find('textarea#theFieldId').length, 1,
      'textarea with id');
  assert.equal(this.$().find('label[for="theFieldId"]').length, 1,
      'label with for attribute set to id');
  assert.equal(this.$().find('textarea[cols="5"]').length, 1,
      'textarea with cols attribute');
  assert.equal(this.$().find('textarea[rows="15"]').length, 1,
      'textarea with rows attribute');
});
