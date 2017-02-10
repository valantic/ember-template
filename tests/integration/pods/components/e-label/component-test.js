import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('e-label', 'Integration | Component | e label', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  assert.expect(12);

  this.render(hbs`{{e-label}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#e-label}}
      template block text
    {{/e-label}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');

  this.render(hbs`
    {{e-label
      text="Another Test Label"
    }}`);

  assert.equal(this.$().text().trim(), 'Another Test Label',
      'it renders a label with attribute text');

  this.render(hbs`
    {{e-label
      class="e-label e-label--modifier"
      for="theId"
      text="Another Test Label"
    }}`);

  assert.equal(this.$().find('label.e-label.e-label--modifier').length, 1,
      'it renders a label with a custom class');
  assert.equal(this.$().find('label[for="theId"]').length, 1,
      'it renders a label with a for attribute');

  this.render(hbs`
    {{#e-label
      label="The Label"
    }}
    <span class="yield">Testing Yield</span>
    {{/e-label}}
  `);
  assert.equal(this.$().find('.e-label > .yield').length, 1,
      'it renders a label with the yield before the e-label__text');

  this.render(hbs`
    {{#e-label
      label="The Label"
      labelFirst=true
    }}
    <span class="yield">Testing Yield</span>
    {{/e-label}}
  `);
  assert.equal(this.$().find('.e-label > .e-label__text').length, 1,
      'it renders a label with the e-label__text before the yield');

  this.render(hbs`
    {{#e-label
      label="The Label"
      labelUp=true
    }}
    <span class="yield">Testing Yield</span>
    {{/e-label}}
  `);
  assert.equal(this.$().find('.e-label > .e-label__text').length, 1,
      'it renders a label with the e-label__text before the yield');
  assert.equal(this.$().find('.e-label.e-label--label-up').length, 1,
      'it renders a label with e-label--label-up');

  this.render(hbs`
    {{e-label
      label="The Label"
      selected=true
    }}
  `);
  assert.equal(this.$().find('.e-label.e-label--selected').length, 1,
      'it renders a selected label');

  this.render(hbs`
    {{e-label
      label="The Label"
      noInputVisible=true
    }}
  `);
  assert.equal(this.$().find('.e-label.e-label--no-input-visible').length, 1,
      'it renders a no input visible label');

  this.render(hbs`
    {{e-label
      label="The Label"
      required=true
    }}
  `);
  assert.equal(this.$().find('.e-label.e-label--required').length, 1,
      'it renders a required label');
});
