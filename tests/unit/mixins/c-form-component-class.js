import Ember from 'ember';
import cFormComponentMixin from 'ember-project-template/mixins/c-form-component';
import { module, test } from 'qunit';

module('Unit | Mixin | c form component class');

// Replace this with your real tests.
test('it works', (assert) => {
  let cFormComponentObject = Ember.Object.extend(cFormComponentMixin);
  let subject = cFormComponentObject.create();
  assert.ok(subject);
});
