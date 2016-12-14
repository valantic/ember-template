import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('e-button', 'Integration | Component | e button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{e-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#e-button}}
      template block text
    {{/e-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
  assert.ok(this.$().find('.e-button--default').length, 'a e-button--default element');
});

test('it renders default', function(assert) {
  this.render(hbs`{{e-button isActive=true}}`);

  assert.ok(this.$().find('.e-button').length, 'an default e-button--default element');
});

test('it renders with hover', function(assert) {
  this.render(hbs`{{e-button hasHover=true}}`);

  assert.ok(this.$().find('.e-button--hover').length, 'a hover over a e-button--default element');
});

test('it renders with focus', function(assert) {
  this.render(hbs`{{e-button hasFocus=true}}`);

  assert.ok(this.$().find('.e-button--focus').length, 'a focused e-button--default element');
});

test('it renders e-button---cta', function(assert) {
  this.render(hbs`{{e-button isCTA=true}}`);

  assert.ok(this.$().find('.e-button--cta').length, 'a e-button--cta element');
});

test('it renders a button with a tagname of a', function(assert) {
  this.render(hbs`{{e-button tagName="a"}}`);

  assert.ok(this.$().find('a.e-button').length, 'a e-button element as a link');
});

test('it renders a button with a tagname of a and an href attribute', function(assert) {
  this.render(hbs`{{e-button tagName="a" href="#"}}`);

  assert.ok(this.$().find('a.e-button[href="#"]').length, 'e-button as anchor tag with href #');
});

test('it renders a button with a title attribute', function(assert) {
  this.render(hbs`{{e-button title="testing"}}`);

  assert.ok(this.$().find('.e-button[title="testing"]').length,
      'a btn element with a title attribute');
});

test('it renders a button with a type attribute', function(assert) {
  this.render(hbs`{{e-button type="button"}}`);

  assert.ok(this.$().find('.e-button[type="button"]').length,
      'a e-button with a type attribute set to button');
});

test('it renders a button with a title attribute', function(assert) {
  this.render(hbs`{{e-button name="testing"}}`);

  assert.ok(this.$().find('.e-button[name="testing"]').length,
      'a e-button with a name attribute');
});

test('it renders a button with an id attribute', function(assert) {
  this.render(hbs`{{e-button id="testing"}}`);

  assert.ok(this.$().find('#testing button').length,
      'an element with an id and a nested sbutton');
});
