// MOCKDATA IMPORT
import selectOptions from './selectOptions';
import cMediaContainer from './cMediaContainer';
import cTabs from './cTabs';
import cProcessSteps from './cProcessSteps';
import cBreadcrumb from './cBreadcrumb';
import cNotificationContainer from './cNotificationContainer';
import cImageSlider from './cImageSlider';

/**
 * @function formToJsObject
 * @description takes a html encoded json string and returns a javascript object
 * @param {string} escapedHTMLJSON - a html encoded json string
 * @returns {object}
 */
function formToJsObject(escapedHTMLJSON) { // eslint-disable-line no-unused-vars
  // This seems to be a common practice: http://stackoverflow.com/a/7124052
  const unescapedHTML = escapedHTMLJSON
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/\n/g, '\\n');

  return JSON.parse(unescapedHTML);
}

const mockdata = {
  selectOptions,
  cMediaContainer,
  cTabs,
  cProcessSteps,
  cBreadcrumb,
  cNotificationContainer,
  cImageSlider
};

export default mockdata;
