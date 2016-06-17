module.exports ={
  "extends": "movento",
  "rules": {
    // Use for project specific settings
    'import/no-unresolved': 0,  // For import statements
    'func-names': 0,            // For router.js
    'space-before-function-paren': 0, // Prefered to have no space between function and first ()
    'require-jsdoc': 0,         // For generated code without jsdocs
    'prefer-rest-params': 0,    // For tests
    'array-callback-return': 0  // For router.js
  }
};
