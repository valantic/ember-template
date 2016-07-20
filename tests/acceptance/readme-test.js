import { test } from 'qunit';
import moduleForAcceptance from 'ember-sandbox/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | readme');

test('visiting /readme', (assert) => {
  visit('/readme');

  andThen(() => {
    assert.equal(currentURL(), '/readme');
  });
});
