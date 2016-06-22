import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('g-nav-views', 'Integration | Component | g nav views', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{g-nav-views}}`);

  assert.equal(this.$().text()
    .indexOf('Readme') !== -1, true);

  // Template block usage:
  this.render(hbs`
    {{#g-nav-views}}
      template block text
    {{/g-nav-views}}
  `);

  assert.equal(this.$().text()
    .indexOf('template block text') !== -1, true);
});
