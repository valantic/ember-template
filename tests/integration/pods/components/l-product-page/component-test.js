import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('l-product-page', 'Integration | Component | l product page', {
    integration: true
});

test('it renders', function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{l-product-page}}`);

    assert.equal(this.$().text().trim().indexOf('Product layout') !== -1, true);

    // Template block usage:
    this.render(hbs`
      {{#l-product-page}}
        template block text
      {{/l-product-page}}
    `);

    assert.equal(this.$().text().trim().indexOf('template block text') !== -1, true);
});
