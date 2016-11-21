import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c-ember-islands-test', 'Integration | Component | c ember islands test', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{c-ember-islands-test}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#c-ember-islands-test}}
      template block text
    {{/c-ember-islands-test}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
