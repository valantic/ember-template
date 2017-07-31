import Ember from 'ember';

/**
 * Returns a JSON as string for display it in styleguide
 * @param {json} jsonObject is a json object
 * @returns {string} Json in string-format with tabs
 */
export function stringify(jsonObject) {
  return JSON.stringify(jsonObject[0], null, '  ');
}

export default Ember.Helper.helper(stringify);
