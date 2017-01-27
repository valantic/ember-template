// MOCKDATA IMPORT
import selectOptions from './selectOptions';

/* eslint-disable no-unused-vars */

/**
 * @function formToJsObject
 * @description takes a html encoded json string and returns a javascript object
 * @param {string} escapedHTMLJSON - a html encoded json string
 * @returns {object}
 */
function formToJsObject(escapedHTMLJSON) {
  /* This seems to be a common practice: http://stackoverflow.com/a/7124052 */
  const unescapedHTML = escapedHTMLJSON
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');

  return JSON.parse(unescapedHTML);
}

/* eslint-enable no-unused-vars */

const mockdata = {
  selectOptions
};

export default mockdata;