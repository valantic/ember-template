import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import instanceInitializer from 'ember-project-template/instance-initializers/ember-intl';

moduleForComponent('c-main-header', 'Integration | Component | c main header', {
  integration: true,
  setup() {
    instanceInitializer.initialize(this);
    this.container.lookup('service:intl').setLocale('en');
  }
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{c-main-header}}`);

  assert.equal(this.$().text().replace(/\s/g, ''), 'default-title');
});
