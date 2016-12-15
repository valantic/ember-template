import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c-input-radio', 'Integration | Component | c input radio', {
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
    {{c-input-radio
      name="c-input-radio-1"
      label="A Label"
      value="option1"
      items=items
      labelClassName="e-label e-label--modifier"
      fieldClassName="e-input-radio e-input-radio--modifier"
    }}
  `);

  assert.equal(this.$().text().trim()
          .indexOf('A Label') !== -1, true, 'Label text');
  assert.equal(this.$().find('input[name="c-input-radio-1"]').length, 3,
      '3 input elements with name c-input-radio-1');
  assert.equal(this.$().find('input[type="radio"].e-input-radio').length, 3,
      '3 input elements with type radio and class name e-input-radio');
  assert.equal(this.$().find('.e-label').length, 4,
      '3 e-label elements');
  assert.equal(this.$().find('label.e-label--modifier').length, 1,
      'label with labelClass');
  assert.equal(this.$().find('input.e-input-radio--modifier').length, 3,
      'input with fieldClass');

  this.render(hbs`
    {{c-input-radio
      name="c-input-radio-2"
      label=""
      value="option1"
      items=items
      noInputVisible=true
    }}
  `);

  assert.equal(this.$().find('.e-label--noinputvisible').length > 0, true,
      'labels with invisible input elements');
});
