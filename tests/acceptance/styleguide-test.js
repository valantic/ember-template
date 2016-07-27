import { test } from 'qunit';
import moduleForAcceptance from 'ember-sandbox/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | toggle stylesheet');

test('visiting /styleguide', (assert) => {
  visit('/styleguide');

  andThen(() => {
    assert.equal(currentURL(), '/styleguide');
  });
});

// We need HTML since the code checks for the element at head > .project-css
// HTML fixture should have an href element with the attribute "data-href-original".
// Running the test will make sure the HTML is in the DOM so the element querySelectors work.

test('toggleStylesheet should work on styleguide pages', (assert) => {
  let styleSheetTag = '';
  let currentStyleSheet = '';
  const expectedStyleSheet = 'assets/style-guide.css';
  // styleGuideIsActive = true
  visit('/styleguide');
  andThen(() => {
    assert.equal(currentURL(), '/styleguide');
    styleSheetTag = document.querySelector('link.project-css');
    currentStyleSheet = styleSheetTag.getAttribute('href');
    assert.equal(currentStyleSheet, expectedStyleSheet, 'Stylesheet should be styleSheetStyleguide');
    // Important for consecutive tests
    visit('/');
  });
});

/*
  Keeping this test alternatively makes the test succeed or fail on reloads. Not sure why.
  Has probably to do with the visit() call.
*/
test('toggleStylesheet should work on regular pages', (assert) => {
  let styleSheetTag = '';
  let currentStyleSheet = '';
  const expectedStyleSheet = 'assets/ember-sandbox.css';
  // styleGuideIsActive = false
  visit('/readme');
  andThen(() => {
    assert.equal(currentURL(), '/readme');
    styleSheetTag = document.querySelector('link.project-css');
    currentStyleSheet = styleSheetTag.getAttribute('href');
    assert.equal(currentStyleSheet, expectedStyleSheet, 'Stylesheet should be styleSheetOriginal');
    // Important for consecutive tests
    visit('/');
  });
});
