import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('e-textarea', 'Integration | Component | e textarea', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`<div id="single-input">{{e-textarea}}</div>`);

  assert.equal(this.$().text().trim(), '');
  assert.equal(this.$().find('#single-input textarea.e-textarea').length, 1,
      'a textarea element and class name e-textarea');

  this.render(hbs`
    <div id="single-input">
      {{e-textarea class="e-textarea e-textarea--modifier" id="theTextarea"}}
    </div>
  `);

  assert.equal(this.$().find('#single-input textarea.e-textarea.e-textarea--modifier').length, 1,
      'a textarea element and a custom class name');
  assert.equal(this.$().find('textarea#theTextarea').length, 1,
      'a textarea with an id');
});
