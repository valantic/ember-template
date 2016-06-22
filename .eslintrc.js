module.exports ={
  "extends": "movento",
  "rules": {
    // Use for project specific settings
    'import/no-unresolved': 0,  // For import statements
    'func-names': 0,            // For router.js
    'space-before-function-paren': [2, "never"], // Prefered to have no space between function and first ()
    'require-jsdoc': [1, {      // For generated code without jsdocs
      'require': {
        'FunctionDeclaration': true,
        'MethodDefinition': true,
        'ClassDeclaration': true
      }
    }],
    'prefer-rest-params': 1,    // For tests
    'array-callback-return': 1, // For router.js
    'prefer-const': 1,
    'newline-after-var': 1,
    'object-shorthand': 1
  }
};
