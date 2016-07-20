import { test } from 'qunit';
import moduleForAcceptance from 'ember-sandbox/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | draggable');

test('visiting /draggable', (assert) => {
  visit('/draggable');

  andThen(() => {
    assert.equal(currentURL(), '/draggable');
  });
});
