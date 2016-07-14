import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('draggable-demo', 'Integration | Component | draggable demo', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{draggable-demo}}`);

  assert.equal(this.$().text().indexOf('Items left to add') !== -1, true);

  // Template block usage:
  this.render(hbs`
    {{#draggable-demo}}
      template block text
    {{/draggable-demo}}
  `);

  assert.equal(this.$().text().indexOf('template block text') !== -1, true);
});
