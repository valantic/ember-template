import Ember from 'ember';

/**
 * @param {type} params params description
 * @returns {*}
 */
export function <%= camelizedModuleName %>(params/* , hash */) {
  return params;
}

export default Ember.Helper.helper(<%= camelizedModuleName %>);
