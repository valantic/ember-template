import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c-input-checkbox', 'Integration | Component | c input checkbox', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('items', [
    {
      label: 'Option 1',
      value: 'option1',
      selected: true
    },
    {
      label: 'Option 2',
      value: 'option2',
      selected: false
    },
    {
      label: 'Option 3',
      value: 'option3',
      selected: false
    }
  ]);

  this.set('groupValue', ['option1']);

  this.render(hbs`
    {{c-input-checkbox
      items=items
      label="A Label"
      groupValue=groupValue
      labelClassName="e-label--modifier"
      fieldClassName="e-input-checkbox--modifier"
    }}
  `);

  assert.equal(this.$().text().trim()
          .indexOf('A Label') !== -1, true, 'Label text');

  assert.equal(this.$().find('input[type="checkbox"].e-input-checkbox').length, 3,
      '3 input elements with type checkbox and class name e-input-checkbox');

  assert.equal(this.$().find('.e-label').length, 4,
      '4 e-label elements');

  assert.equal(this.$().find('label.e-label--modifier').length, 1,
      'label with labelClass');

  assert.equal(this.$().find('input.e-input-checkbox--modifier').length, 3,
      'input with fieldClass');
});
