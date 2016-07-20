import { test } from 'qunit';
import moduleForAcceptance from 'ember-sandbox/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | views');

test('visiting /views', (assert) => {
  visit('/views');

  andThen(() => {
    assert.equal(currentURL(), '/views');
  });
});
