import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('e-select', 'Integration | Component | e select', {
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
    <div id="single-input">
      {{e-select name="e-select"
        class="e-select e-select--modifier"
        id="theSelect"
        items=items
        label="Select"
        placeholder="Select from the list"
      }}
    </div>
  `);

  assert.equal(this.$().text().indexOf('Option') !== -1, true,
      'expecting labels');
  assert.equal(this.$().find('#single-input select.e-select').length, 1,
      'a select element and class name e-select');
  assert.equal(this.$().find('#single-input select.e-select--modifier').length, 1,
      'a select element and a custom class name');
  assert.equal(this.$().find('#single-input option').length, 4,
      'four options');
  assert.equal(this.$().find('#single-input select#theSelect').length, 1,
      'a select with an id');
});
