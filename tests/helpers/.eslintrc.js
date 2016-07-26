module.exports = {
  env: {
    'embertest': true
  },
  rules: {
    'consistent-return': 0,     //Disabled, because helpers/module-for-acceptance.js will not always return a value
    'newline-before-return': 0  //Disabled, because helpers/module-for-acceptance.js has no new-line befor return
  }
};
