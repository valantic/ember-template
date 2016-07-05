import Ember from 'ember';
import StyleguideFunctionsMixin from 'ember-sandbox/mixins/styleguide-functions';
import { module, test } from 'qunit';

module('Unit | Mixin | styleguide functions');

// Replace this with your real tests.
test('it works', (assert) => {
  let StyleguideFunctionsObject = Ember.Object.extend(StyleguideFunctionsMixin);
  let subject = StyleguideFunctionsObject.create();
  assert.ok(subject);
});

test('toggleStylesheet exists', (assert) => {
  let StyleguideFunctionsObject = Ember.Object.extend(StyleguideFunctionsMixin);
  let subject = StyleguideFunctionsObject.create();
  assert.ok(subject.toggleStylesheet);
});
