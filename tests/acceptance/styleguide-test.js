import { test } from 'qunit';
import moduleForAcceptance from 'ember-project-template/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | rendering stylesheet');

test('visiting /styleguide', (assert) => {
  visit('/styleguide');

  andThen(() => {
    assert.equal(currentURL(), '/styleguide');
  });
});
