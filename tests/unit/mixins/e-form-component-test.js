import Ember from 'ember';
import EFormComponentMixin from 'ember-project-template/mixins/e-form-component';
import { module, test } from 'qunit';

module('Unit | Mixin | e form component');

// Replace this with your real tests.
test('it works', (assert) => {
  let EFormComponentObject = Ember.Object.extend(EFormComponentMixin);
  let subject = EFormComponentObject.create();
  assert.ok(subject);
});
