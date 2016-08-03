import Ember from 'ember';
import StyleguideFunctionsMixin from 'ember-project-template/mixins/styleguide-functions';
import { module, test } from 'qunit';

module('Unit | Mixin | styleguide functions');

// Replace this with your real tests.
test('it works', (assert) => {
  const StyleguideFunctionsObject = Ember.Object.extend(StyleguideFunctionsMixin);
  const subject = StyleguideFunctionsObject.create();
  assert.ok(subject);
});

test('toggleStylesheet exists', (assert) => {
  const StyleguideFunctionsObject = Ember.Object.extend(StyleguideFunctionsMixin);
  const subject = StyleguideFunctionsObject.create();
  assert.ok(subject.toggleStylesheet);
});
