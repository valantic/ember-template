import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import instanceInitializer from 'ember-project-template/instance-initializers/ember-intl';

moduleForComponent('c-add-to-cart', 'Integration | Component | c add to cart', {
  integration: true,
  setup() {
    instanceInitializer.initialize(this);
    this.container.lookup('service:intl').setLocale('en');
  }
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{c-add-to-cart}}`);

  assert.equal(this.$().find('.c-add-to-cart').length, 1, 'renders a c-add-to-cart component');
});
