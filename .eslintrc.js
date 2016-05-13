module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'browser': true
  },
  'extends': 'airbnb',
  'ecmaFeatures': {
      'sourceType': 'module',
      'jsx': true,
      'modules': true,
      'experimentalObjectRestSpread': true
  },
  'parserOptions': {
    'sourceType': 'module'
  },
  'plugins': [
  ],
  'globals': {

    // Testing
    'describe': true,
    'it': true,
    'beforeEach': true,
    'before': true,
    'afterEach': true,
    'after': true,
    'expect': true,
    'assert': true,
    'browser': true,
    'server': true,
  },
  'rules': {
    'arrow-body-style': [ 0 ],
    'comma-dangle': [ 2, 'never' ],
    'computed-property-spacing': [ 2, 'always' ],
    'eqeqeq': [ 2, 'smart' ],
    'indent': [ 2, 2, { 'VariableDeclarator': 2 } ],
    'import/no-unresolved': [ 2, { "ignore": ["^meteor/"] } ],
    'linebreak-style': [ 2, 'unix' ],
    'import/no-unresolved': [2, { 'ignore': ['^meteor/'] }],
    'no-console': [ 0 ],
    'no-underscore-dangle': [ 0 ],
    'no-unneeded-ternary': [ 2 ],
    'no-underscore-dangle': [ 0 ],
    'object-curly-spacing': [ 2, 'always' ],
    'quotes': [ 2, 'single' ],
    'semi': [ 2, 'always' ],
    'space-infix-ops': [ 2 ]
  }
};