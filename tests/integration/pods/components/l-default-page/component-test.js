import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('l-default', 'Integration | Component | l default page', {
  integration: true,
  setup() {
    const service = this.container.lookup('service:intl');

    service.setLocale(service.get('locales')[0]);
  }
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{l-default}}`);

  assert.equal(this.$('.l-default').length, 1);

  // Template block usage:
  this.render(hbs`
    {{#l-default}}
      template block text
    {{/l-default}}
  `);

  assert.equal(this.$('.l-default').text().trim()
    .indexOf('template block text') !== -1, true);
});
