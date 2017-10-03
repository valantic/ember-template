module.exports = {
  env: {
    'embertest': true
  },
  rules: {
    'require-jsdoc': 0,
    'valid-jsdoc': 0, // Disable jsdoc, because ember generated test does'nt include that
    'newline-after-var': 0,
    'prefer-const': 0,
    'prefer-rest-params': 0,
    'padding-line-between-statements': 0
  }
};
