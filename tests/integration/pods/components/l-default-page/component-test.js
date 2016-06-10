import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('l-default-page', 'Integration | Component | l default page', {
    integration: true
});

test('it renders', function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{l-default-page}}`);

    assert.equal(this.$().text().trim().indexOf('Default layout') !== -1, true);

    // Template block usage:
    this.render(hbs`
      {{#l-default-page}}
        template block text
      {{/l-default-page}}
    `);

    assert.equal(this.$().text().trim().indexOf('template block text') !== -1, true);
});
