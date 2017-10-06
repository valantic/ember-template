import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c-select', 'Integration | Component | c select', {
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

  this.render(hbs`
    {{c-select
      fieldClassName="e-select e-select--modifier"
      fieldId="theFieldId"
      label="A Label"
      labelClassName="e-label e-label--modifier"
      name="c-select-1"
      size="3"
      multiple=true
      items=items
      value="option1"
    }}
  `);

  assert.equal(this.$().text().trim().indexOf('A Label') !== -1, true, 'Label text');
  assert.equal(this.$().find('select[name="c-select-1"]').length, 1, 'select element with name c-select-1');
  assert.equal(
    this.$().find('select.e-select option').length,
    3,
    '3 option elements within the element with class name e-select'
  );
  assert.equal(this.$().find('.e-label').length, 1, 'a e-label element');
  assert.equal(this.$().find('label.e-label--modifier').length, 1, 'label with labelClass');
  assert.equal(this.$().find('select.e-select--modifier').length, 1, 'select with fieldClass');
  assert.equal(this.$().find('select#theFieldId').length, 1, 'select with id');
  assert.equal(this.$().find('select[size="3"]').length, 1, 'select with size');
  assert.equal(this.$().find('select[multiple]').length, 1, 'select with multiple');
});
