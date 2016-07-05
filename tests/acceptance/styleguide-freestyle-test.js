import { test } from 'qunit';
import moduleForAcceptance from 'ember-sandbox/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | toggle stylesheet');

test('visiting /styleguide-freestyle', (assert) => {
  visit('/styleguide-freestyle');

  andThen(() => {
    assert.equal(currentURL(), '/styleguide-freestyle');
  });
});

test('toggleStylesheet should work', (assert) => {
  let styleSheetTag = '';
  let currentStyleSheet = '';
  const styleSheetOriginal = 'assets/ember-sandbox.css';
  const styleSheetStyleguide = 'assets/style-guide.css';

  // We need HTML since the code checks for the element at head > .project-css
  // HTML fixture should have an href element with the attribute "data-href-original".
  // Running the test will make sure the HTML is in the DOM so the element querySelectors work.

  // styleGuideIsActive = false
  visit('/');
  andThen(() => {
    styleSheetTag = document.querySelector('head > .project-css');
    currentStyleSheet = styleSheetTag.getAttribute('href');
    assert.equal(currentStyleSheet, styleSheetOriginal, 'Stylesheet should be styleSheetOriginal');
  });

  // styleGuideIsActive = true
  visit('/styleguide-freestyle');
  andThen(() => {
    styleSheetTag = document.querySelector('head > .project-css');
    currentStyleSheet = styleSheetTag.getAttribute('href');
    assert.equal(currentStyleSheet, styleSheetStyleguide, 'Stylesheet should be styleSheetStyleguide');
  });
});
