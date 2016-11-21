import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c-browser-only', 'Integration | Component | c browser only', {
  integration: true
});

test('it renders - do not render yield, if fastboot is not present', function(assert) {
  this.render(hbs`{{c-browser-only isFastBoot=true}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#c-browser-only isFastBoot=true}}
      template block text
    {{/c-browser-only}}
  `);

  assert.equal(this.$().text().trim(), '');
});

test('it renders - render yield content, if fastboot is present', function(assert) {
  this.render(hbs`{{c-browser-only}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#c-browser-only}}
      template block text
    {{/c-browser-only}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
